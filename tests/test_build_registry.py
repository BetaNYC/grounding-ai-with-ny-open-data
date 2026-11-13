"""Tests for scripts/build_registry.py. Run: python3 -m unittest discover -s tests"""
import importlib.util
import os
import re
import unittest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location("build_registry", os.path.join(ROOT, "scripts", "build_registry.py"))
br = importlib.util.module_from_spec(spec)
spec.loader.exec_module(br)


class BuildRegistryTest(unittest.TestCase):
    def test_committed_outputs_are_current(self):
        # The generated files in the repo match what the JSON produces.
        self.assertEqual(br.main(["--check"]), 0)

    def test_registry_md_keeps_explorer_markup(self):
        with open(br.MD_PATH, encoding="utf-8") as fh:
            md = fh.read()
        self.assertIn('id="registry-explorer"', md)
        self.assertIn('data-src="ny-data-portal-registry.json"', md)
        self.assertIn("/assets/js/registry-explorer.js", md)
        self.assertIn("(portals/README.md)", md)
        self.assertNotRegex(md, r"\]\(portals/\)")  # bare directory links 404 on Pages

    def test_portal_index_lists_every_place_page(self):
        with open(br.PORTALS_INDEX, encoding="utf-8") as fh:
            idx = fh.read()
        pages = sorted(f for f in os.listdir(br.PORTALS) if f.endswith(".md") and f != "README.md")
        self.assertEqual(len(pages), 71)
        for p in pages:
            self.assertIn(f"]({p})", idx)

    def test_sync_portal_page_is_idempotent(self):
        page = "---\ntitle: x\n---\n\n# X\n\nBody.\n"
        once = br.sync_portal_page(page, "Western NY (Finger Lakes + WNY)")
        self.assertEqual(br.sync_portal_page(once, "Western NY (Finger Lakes + WNY)"), once)
        self.assertEqual(once.count(br.CSS_LINE), 1)
        self.assertEqual(once.count(br.NAV_MARK), 1)
        self.assertIn("region=Western+NY+%28Finger+Lakes+%2B+WNY%29", once)
        # Region change rewrites, not appends.
        moved = br.sync_portal_page(once, "Capital Region")
        self.assertEqual(moved.count("rx-place-nav"), 1)
        self.assertIn("region=Capital+Region", moved)

    def test_normalize_folds_keys_and_regions(self):
        rows = [{k: None for k in br.KEYS} | {"tier": 3, "entity": "A", "region": "Finger Lakes",
                                               "key_required": "UNCONFIRMED (docs say token)", "notes": "n"}]
        out = br.normalize(rows)
        self.assertEqual(out[0]["region"], "Western NY (Finger Lakes + WNY)")
        self.assertEqual(out[0]["key_required"], "UNCONFIRMED")
        self.assertTrue(out[0]["notes"].endswith("Key: UNCONFIRMED (docs say token)."))
        self.assertEqual(br.normalize(out), out)

    def test_tables_render_every_row_once(self):
        with open(br.MD_PATH, encoding="utf-8") as fh:
            md = fh.read()
        table_rows = [ln for ln in md.splitlines() if re.match(r"^\| (?!Who runs it \|)", ln)]
        self.assertEqual(len(table_rows), 160)


if __name__ == "__main__":
    unittest.main()
