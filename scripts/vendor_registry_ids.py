#!/usr/bin/env python3
"""Vendor the list of ny-gov-web-registry entity ids, pinned to one commit.

Each row of resources/ny-data-portal-registry.json may carry a `registry_id`: the
`id` of the government body in BetaNYC/ny-gov-web-registry `data/registry.json`.
`scripts/build_registry.py --check` fails when a filled `registry_id` is not in
the list this script writes, so the check runs offline and in CI:

    resources/ny-gov-web-registry-ids.json
        source     the repo and file the ids came from
        commit     the full commit they were read at
        generated  the date this file was written
        count      number of ids
        ids        [{id, name, government_level}, ...] sorted by id

The script reads `data/registry.json` from git (`git show REF:data/registry.json`),
never from the working tree, so the pin names exactly what was read.

Usage (from anywhere; paths resolve from this file's location):

    python3 scripts/vendor_registry_ids.py --repo ../ny-gov-web-registry --ref main
    python3 scripts/vendor_registry_ids.py --repo DIR --ref c75ec0b --date 2026-11-13

Refreshing: after BetaNYC/ny-gov-web-registry#60 merges, run the first command
against an up-to-date clone (`git -C ../ny-gov-web-registry pull` first), then
`python3 scripts/build_registry.py --check`. If an id was renamed or removed
upstream, the check names every row that now points nowhere.

Standard library only. Python 3.9 or later. Needs `git` on PATH.
"""
from __future__ import annotations

import argparse
import datetime
import json
import os
import shutil
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IDS_PATH = os.path.join(ROOT, "resources", "ny-gov-web-registry-ids.json")
SOURCE = "BetaNYC/ny-gov-web-registry data/registry.json"
REGISTRY_FILE = "data/registry.json"


def _git(repo: str, *args: str) -> str:
    try:
        out = subprocess.run(["git", "-C", repo, *args], check=True, capture_output=True, text=True)
    except subprocess.CalledProcessError as e:
        sys.exit(f"vendor_registry_ids: git {' '.join(args)} failed in {repo}: {e.stderr.strip()}")
    return out.stdout


def build_doc(registry: dict, commit: str, generated: str) -> dict:
    """The vendored document for one parsed registry.json. Refuses a blank or repeated id."""
    ents = registry.get("entities")
    if not isinstance(ents, list) or not ents:
        raise ValueError("registry.json has no 'entities' list")
    seen, ids = set(), []
    for e in ents:
        i = e.get("id")
        if not isinstance(i, str) or not i.strip():
            raise ValueError(f"entity with no id: {e.get('name')!r}")
        if i in seen:
            raise ValueError(f"repeated id: {i}")
        seen.add(i)
        ids.append({"id": i, "name": e.get("name"), "government_level": e.get("government_level")})
    ids.sort(key=lambda x: x["id"])
    return {"source": SOURCE, "commit": commit, "generated": generated, "count": len(ids), "ids": ids}


def render(doc: dict) -> str:
    """JSON with one id per line, so a refresh reads as a short diff. Ends with a newline."""
    head = {k: doc[k] for k in ("source", "commit", "generated", "count")}
    lines = ["{"] + [f" {json.dumps(k)}: {json.dumps(v, ensure_ascii=False)}," for k, v in head.items()]
    lines.append(' "ids": [')
    body = ["  " + json.dumps(x, ensure_ascii=False) for x in doc["ids"]]
    lines.append(",\n".join(body))
    lines += [" ]", "}"]
    return "\n".join(lines) + "\n"


def load_ids(path: str = IDS_PATH) -> dict:
    """The vendored document, as written by render(). Raises if missing or malformed."""
    with open(path, encoding="utf-8") as fh:
        doc = json.load(fh)
    if not isinstance(doc.get("ids"), list) or doc.get("count") != len(doc["ids"]):
        raise ValueError(f"{path}: 'count' does not match the 'ids' list")
    return doc


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--repo", required=True, help="local clone or worktree of BetaNYC/ny-gov-web-registry")
    ap.add_argument("--ref", default="main", help="commit, branch or tag to read (default: main)")
    ap.add_argument("--date", help="date stamped as 'generated' (default: today)")
    ap.add_argument("--out", default=IDS_PATH, help=argparse.SUPPRESS)
    a = ap.parse_args(argv)

    if shutil.which("git") is None:
        sys.exit("vendor_registry_ids: git is not on PATH")
    if not os.path.isdir(a.repo):
        sys.exit(f"vendor_registry_ids: not a directory: {a.repo}")
    commit = _git(a.repo, "rev-parse", "--verify", f"{a.ref}^{{commit}}").strip()
    registry = json.loads(_git(a.repo, "show", f"{commit}:{REGISTRY_FILE}"))
    generated = a.date or datetime.date.today().isoformat()
    try:
        doc = build_doc(registry, commit, generated)
    except ValueError as e:
        sys.exit(f"vendor_registry_ids: {e}")
    with open(a.out, "w", encoding="utf-8", newline="") as fh:
        fh.write(render(doc))
    print(f"vendor_registry_ids: {doc['count']} ids from {a.ref} ({commit[:7]}) -> {os.path.relpath(a.out, ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
