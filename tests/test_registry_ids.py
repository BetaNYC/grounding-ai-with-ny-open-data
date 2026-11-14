"""Tests for registry_id: the link from each data-site row to its government body in
BetaNYC/ny-gov-web-registry. These read the committed JSON files directly; they do not
use the code that filled the ids.

Run: python3 -m unittest discover -s tests
"""
import contextlib
import importlib.util
import io
import json
import os
import tempfile
import unittest
from collections import defaultdict
from unittest import mock

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RES = os.path.join(ROOT, "resources")


def _load(name):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, "scripts", f"{name}.py"))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


br = _load("build_registry")
vr = _load("vendor_registry_ids")


def _json(name):
    with open(os.path.join(RES, name), encoding="utf-8") as fh:
        return json.load(fh)


ROWS = _json("ny-data-portal-registry.json")["rows"]
VENDORED = _json("ny-gov-web-registry-ids.json")
IDS = {x["id"]: x for x in VENDORED["ids"]}
EXC = _json("ny-gov-web-registry-exceptions.json")
PLACE_TYPES = {"city", "county"}


def _base(entity):
    """The body a row names: its entity text before any parenthetical unit."""
    return entity.split(" (")[0].strip()


class VendoredIdsTest(unittest.TestCase):
    def test_file_is_pinned_and_well_formed(self):
        self.assertRegex(VENDORED["commit"], r"^[0-9a-f]{40}$")
        self.assertRegex(VENDORED["generated"], r"^\d{4}-\d{2}-\d{2}$")
        self.assertEqual(VENDORED["source"], "BetaNYC/ny-gov-web-registry data/registry.json")
        ids = [x["id"] for x in VENDORED["ids"]]
        self.assertEqual(VENDORED["count"], len(ids))
        self.assertEqual(len(set(ids)), len(ids), "repeated id")
        self.assertEqual(ids, sorted(ids))
        for x in VENDORED["ids"]:
            self.assertTrue(x["name"], x["id"])
            self.assertTrue(x["government_level"], x["id"])

    def test_file_matches_its_renderer(self):
        # A hand edit that the script would not write is caught here.
        with open(os.path.join(RES, "ny-gov-web-registry-ids.json"), encoding="utf-8") as fh:
            self.assertEqual(fh.read(), vr.render(VENDORED))


class RegistryIdTest(unittest.TestCase):
    def test_every_filled_id_is_in_the_vendored_list(self):
        for r in ROWS:
            if r["registry_id"]:
                self.assertIn(r["registry_id"], IDS, f"{r['entity']} {r['url']}")

    def test_empty_ids_are_null_not_blank(self):
        for r in ROWS:
            self.assertNotEqual(r["registry_id"], "", r["entity"])

    def test_every_city_and_county_row_is_linked_or_excepted(self):
        excepted = {e["page"]: e for e in EXC["places_not_linked_to_a_locality"]}
        for r in ROWS:
            if r["entity_type"] not in PLACE_TYPES:
                continue
            with self.subTest(r["entity"]):
                if r["page"] in excepted:
                    continue
                self.assertTrue(r["registry_id"], f"{r['entity']} has no registry_id and no exception")
                body = IDS[r["registry_id"]]
                # A city links to a city and a county to a county, with the same name.
                self.assertEqual(body["government_level"], r["entity_type"])
                self.assertEqual(body["name"], r["entity"])

    def test_place_ids_belong_to_one_row_each(self):
        users = defaultdict(list)
        for r in ROWS:
            if r["registry_id"]:
                users[r["registry_id"]].append(r)
        for i, rs in users.items():
            if IDS[i]["government_level"] in PLACE_TYPES:
                self.assertEqual(len(rs), 1, f"{i} used by {[r['entity'] for r in rs]}")
                self.assertEqual(rs[0]["entity_type"], IDS[i]["government_level"], i)

    def test_rows_of_different_bodies_share_an_id_only_by_exception(self):
        allowed = {e["id"] for e in EXC["shared_ids"]}
        bodies = defaultdict(set)
        for r in ROWS:
            if r["registry_id"]:
                bodies[r["registry_id"]].add(_base(r["entity"]))
        shared = {i for i, b in bodies.items() if len(b) > 1}
        self.assertEqual(shared, allowed, {i: sorted(bodies[i]) for i in shared ^ allowed})

    def test_exceptions_are_documented_and_current(self):
        pages = {r["page"]: r for r in ROWS if r["page"]}
        for e in EXC["places_not_linked_to_a_locality"]:
            self.assertGreater(len(e["reason"]), 20, e)
            self.assertIn(e["page"], pages, f"stale exception {e['page']}")
            self.assertEqual(pages[e["page"]]["entity"], e["entity"])
        for e in EXC["shared_ids"]:
            self.assertGreater(len(e["reason"]), 20, e)
            self.assertIn(e["id"], IDS)
        by_url = {r["url"]: r for r in ROWS}
        for e in EXC["held_for_review"]:
            # A held row stays empty until a person decides; then remove the hold.
            self.assertGreater(len(e["reason"]), 20, e)
            self.assertIn(e["url"], by_url, f"stale hold {e['url']}")
            self.assertEqual(by_url[e["url"]]["entity"], e["entity"])
            self.assertIsNone(by_url[e["url"]]["registry_id"], e["url"])


class CheckFailsOnBogusIdTest(unittest.TestCase):
    def test_unknown_registry_ids(self):
        rows = [{"entity": "A", "url": "https://a.example", "registry_id": "city-of-albany"},
                {"entity": "B", "url": "https://b.example", "registry_id": "not-a-real-body"},
                {"entity": "C", "url": "https://c.example", "registry_id": None},
                {"entity": "D", "url": "https://d.example", "registry_id": ""}]
        out = br.unknown_registry_ids(rows, {"city-of-albany"})
        self.assertEqual(len(out), 1)
        self.assertIn("'not-a-real-body'", out[0])

    def test_check_exits_2_on_a_bogus_id(self):
        with open(br.JSON_PATH, encoding="utf-8") as fh:
            src = json.load(fh)
        row = next(r for r in src["rows"] if r["entity"] == "City of Albany")
        row["registry_id"] = "not-a-real-body"
        with tempfile.TemporaryDirectory() as tmp:
            path = os.path.join(tmp, "registry.json")
            with open(path, "w", encoding="utf-8") as fh:
                json.dump(src, fh, indent=1, ensure_ascii=False)
            err = io.StringIO()
            with mock.patch.object(br, "JSON_PATH", path), contextlib.redirect_stderr(err), \
                    contextlib.redirect_stdout(io.StringIO()):
                code = br.main(["--check"])
        self.assertEqual(code, 2)
        self.assertRegex(err.getvalue(), r"PROBLEM unknown registry_id 'not-a-real-body' for City of Albany")

    def test_real_data_passes_the_check(self):
        with contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(br.main(["--check"]), 0)


FAKE_REGISTRY = {"entities": [
    {"id": "city-of-b", "name": "City of B", "government_level": "city"},
    {"id": "a-county", "name": "A County", "government_level": "county"},
]}


class VendorScriptTest(unittest.TestCase):

    def test_build_doc_sorts_and_counts(self):
        doc = vr.build_doc(FAKE_REGISTRY, "f" * 40, "2026-11-13")
        self.assertEqual([x["id"] for x in doc["ids"]], ["a-county", "city-of-b"])
        self.assertEqual(doc["count"], 2)
        self.assertEqual(json.loads(vr.render(doc)), doc)

    def test_build_doc_refuses_repeated_or_blank_ids(self):
        with self.assertRaises(ValueError):
            vr.build_doc({"entities": FAKE_REGISTRY["entities"] * 2}, "f" * 40, "2026-11-13")
        with self.assertRaises(ValueError):
            vr.build_doc({"entities": [{"id": " ", "name": "X"}]}, "f" * 40, "2026-11-13")
        with self.assertRaises(ValueError):
            vr.build_doc({"entities": []}, "f" * 40, "2026-11-13")

    def test_load_ids_rejects_a_wrong_count(self):
        doc = vr.build_doc(FAKE_REGISTRY, "f" * 40, "2026-11-13")
        doc["count"] = 3
        with tempfile.TemporaryDirectory() as tmp:
            path = os.path.join(tmp, "ids.json")
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(vr.render(doc))
            with self.assertRaises(ValueError):
                vr.load_ids(path)


if __name__ == "__main__":
    unittest.main()
