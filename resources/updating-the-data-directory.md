---
title: "Updating the data directory"
description: "How to add, fix or remove a source in the New York data directory, and how to keep it in step with BetaNYC's list of New York government bodies."
created: 2026-11-18
---

# Updating the data directory

This is how we keep the [New York data directory](ny-data-portal-registry.md) up to date. Anyone with a GitHub account can follow it, whether they work at BetaNYC or volunteer with us. You need `git`, Python 3.9 or later, and Node.js 20 or later to run the tests.

## How the pieces fit

One file holds the directory: [`ny-data-portal-registry.json`](ny-data-portal-registry.json). Everything else is built from it, so edit the JSON and nothing else.

| File | What it is | Edit it by hand? |
|---|---|---|
| `resources/ny-data-portal-registry.json` | Every source, one row each | Yes, this is the source |
| `resources/ny-data-portal-registry.csv` | The same rows as a spreadsheet | No, it is built |
| `resources/ny-data-portal-registry.md` | The directory page | No, it is built |
| `resources/portals/README.md` | The list of county and city pages | No, it is built |
| `resources/portals/*.md` | One page per county and city | The body yes; the lines marked as generated, no |
| `resources/ny-gov-web-registry-ids.json` | Every government body id we may link to | No, a script writes it |
| `resources/ny-gov-web-registry-exceptions.json` | Rows we chose not to link, each with a reason | Yes |

Each row can carry a `registry_id`. It is the id of the government body that runs the source in [ny-gov-web-registry](https://github.com/BetaNYC/ny-gov-web-registry), BetaNYC's list of New York government bodies and their websites. The ids file is a copy of that list's ids, pinned to one version, so the checks can run without the internet.

Two things read the directory after it is published:

- The website, on GitHub Pages, rebuilds when a pull request merges.
- [ny-data-registry-mcp](https://github.com/BetaNYC/ny-data-registry-mcp) downloads the published JSON each time it starts. It also ships a backup copy, which is refreshed when it puts out a new version.

## When to update it

- Someone files a [correction](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/issues/new?template=data-correction.yml) on GitHub.
- A source moves, closes, or changes how you get its data.
- We find a new source.
- ny-gov-web-registry adds, renames or removes a government body, or marks a website address as no longer the government's.

## Steps

### 1. Get both repositories

Clone this repository and ny-gov-web-registry into the same folder, then bring both up to date.

```
git clone https://github.com/BetaNYC/grounding-ai-with-ny-open-data.git
git clone https://github.com/BetaNYC/ny-gov-web-registry.git
git -C grounding-ai-with-ny-open-data pull
git -C ny-gov-web-registry pull
```

Work on a new branch in `grounding-ai-with-ny-open-data`, never on `main`.

### 2. Check the source in a browser

Open the source's address yourself before you change its row. Write what you saw, and the date you saw it, in the row's `evidence` field, and set `last_verified` to that date.

If you cannot tell whether a source is real, or which government runs it, leave it out for now. If it is real but you could not check it fully (a site that blocks visitors from outside a campus, say), set `status` to `UNCONFIRMED` and say why in `notes`.

### 3. Make sure the address is still the government's

Some old government addresses now belong to someone else: a casino, a domain seller, a look-alike site. ny-gov-web-registry keeps the list in `data/ai-readability/website-corrections.csv`. From `grounding-ai-with-ny-open-data`, search it for the address's domain before you add or keep a row.

```
grep -i "example.org" ../ny-gov-web-registry/data/ai-readability/website-corrections.csv
```

If the domain is there, do not list it. The `superseded_by` column names the government's current site when we know it. Use that instead.

### 4. Edit the row

Open `resources/ny-data-portal-registry.json` and change the row. The fields are:

- `tier`: 1 state portals, 2 state APIs, 3 county and city portals (including NYC agencies), 4 academic and institutional sources.
- `status`: `live`, `dead`, `no-portal` (the place has no data site of its own; `notes` says where its data is), or `UNCONFIRMED`.
- `url`, `platform`, `api_type`, `api_endpoint`, `key_required` (`Y`, `N`, or `—`): how to get the data.
- `evidence`, `notes`, `last_verified`: what you checked, and when.
- `registry_id`: the government body's id. See step 5.
- `page`: the county or city page in `resources/portals/`, for a county or city row. The page must exist, or the build fails.

To remove a source that has closed, set `status` to `dead` and say what happened in `notes`. Keep the row, so people who knew the old address can see what became of it.

### 5. Link the row to its government

Copy the body's `id` from `../ny-gov-web-registry/data/registry.json`. Never make one up. The build fails on any id that is not in the ids file.

Some rows stay unlinked on purpose:

- Private universities, private libraries, research centers, and nonprofits.
- A site that names no single agency as the one that runs it.
- A government body that ny-gov-web-registry does not list yet. Open an issue in [ny-gov-web-registry](https://github.com/BetaNYC/ny-gov-web-registry/issues) to add it.

When you leave a government row unlinked, or link several rows to one body, add an entry to `resources/ny-gov-web-registry-exceptions.json` with the reason.

If ny-gov-web-registry has changed since the ids file was written, refresh it first:

```
python3 scripts/vendor_registry_ids.py --repo ../ny-gov-web-registry --ref main
```

The file records the version it read. After a refresh, look through the rows that have no `registry_id`. A body added since the last refresh may now match one of them.

### 6. Rebuild and test

From `grounding-ai-with-ny-open-data`, run:

```
python3 scripts/build_registry.py
python3 scripts/build_registry.py --check
python3 -m unittest discover -s tests
node --test tests/registry-explorer.test.js
```

The first command rebuilds the CSV and the pages. The second must report that nothing would change. The tests check every `registry_id`, every exception, and the search on the directory page.

### 7. Say what changed

If a reader would notice the change, add an entry at the top of [`WHATS-CHANGED.md`](../WHATS-CHANGED.md), in the same form as the entries below it.

Then rebuild the page made from it. A check on the pull request fails if you skip this.

```
python3 scripts/whats_changed.py render WHATS-CHANGED.md --format jekyll --layout whats-changed --out whats-changed.html --repo-url https://github.com/BetaNYC/grounding-ai-with-ny-open-data
```

### 8. Open a pull request

Push the branch and open a pull request. In the description, say which sources changed and how you checked them, and link the correction issue if there is one. GitHub runs the same build check and tests.

When it merges, the website rebuilds and ny-data-registry-mcp picks up the new JSON the next time it starts. Close the correction issue with a note saying what changed.

## Changing ny-gov-web-registry itself

This directory only points to ny-gov-web-registry. To add a government body, fix its website, or mark an address that is no longer the government's, open an issue or a pull request in [ny-gov-web-registry](https://github.com/BetaNYC/ny-gov-web-registry). Then refresh the ids file here, as in step 5.
