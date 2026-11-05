---
title: "Research plan: New York data portal registry (state, APIs, local, institutional)"
created: 2026-11-05
type: research-plan
status: completed
tags: [type/research-plan, topic/open-data, area/civic-tech]
---

# Research plan: New York data portal registry

**Report generated:** 2026-11-05
**Status:** completed 2026-11-05. Output: [`ny-data-portal-registry.md`](ny-data-portal-registry.md) and [`portals/`](portals/README.md).
**Last revised:** 2026-11-05 — added the two parallel workstreams and applied recommended answers to the open questions.
**Builds on:** [`ny-open-data-portals.md`](ny-open-data-portals.md) (county and city directory, URL-audited 2026-11-05) and [`research-plan-ny-open-data-portals.md`](research-plan-ny-open-data-portals.md) (the plan behind it).

## Why

No state dataset or page lists New York's data portals. A check on 2026-11-05 found:

- **data.ny.gov's "Local Data Index"** (`mxu7-dpdx`) indexes state datasets by county and town. Every link goes to data.ny.gov or health.data.ny.gov.
- **The NYS GIS Clearinghouse** collects some county map layers. It does not list the counties' own portals.
- **Library guides and blogs** keep partial lists.

BetaNYC's county and city directory is the most complete list we found. This plan grows it into one registry for the whole state, layered by who runs each source.

## Goals

1. List every public source of New York civic data that a person or a tool can query, in four tiers (below).
2. For each one, record what it is, who runs it, what platform it uses, and **whether it has an API**, and how to reach it.
3. Verify every entry live, using the same jurisdiction check as the 2026-11-05 URL audit.
4. Publish it as a readable Markdown page plus a machine-readable file, so the registry can feed tools such as a harvester, an MCP or a Scout successor.

## Tiers

| Tier | What belongs | Examples to check (none verified yet) |
|---|---|---|
| **1. State data portals** | Statewide catalogs run by NYS government, including GIS clearinghouses | data.ny.gov (Open NY), health.data.ny.gov, NYS GIS Clearinghouse (gis.ny.gov / data.gis.ny.gov) |
| **2. State APIs and data services** | State bodies with a query API or bulk data that is *not* a general catalog: the Legislature, the Comptroller, single agencies, public authorities | NYS Senate Open Legislation API (legislation.nysenate.gov), NYS Assembly data, Comptroller's Open Book NY, Board of Elections, DEC and DOH data services, MTA and other public authorities |
| **3. County and municipal portals** | The existing directory, including New York City | The 57 non-NYC counties, the cities over ~50,000, NYC Open Data, NYC agency GIS sites (e.g. NYC Planning), and NYC's own APIs (e.g. Legistar for the Council) |
| **4. Academic and institutional portals** | Universities, libraries, research centers and nonprofits that publish or curate New York civic data | Cornell CUGIR, Lehman College's Socrata portal, CUNY and SUNY data centers, the University at Albany Center for Technology in Government, library GIS repositories |

**Edge cases.** Some bodies don't fit neatly, such as bi-state agencies (Port Authority) and regional councils. Each goes in the tier that matches who runs it, and gets flagged.

## Scope

**In:**
- All four tiers above, for New York State.
- Sources that serve **data** (datasets, records, an API), not just documents.
- Dead or retired portals that people still cite, marked as dead with the date checked. This is so tools stop pointing at them.

**Out:**
- Federal sources about New York (Census, data.gov), except as a cross-reference note in tier 1.
- Commercial data products and paid-only parcel viewers. These are named in Notes but don't get a row.
- PDF-only report pages with no structured data.
- Villages and towns under ~50,000 people, unless they run a notable portal (same rule as the current directory).

## Sources

- **Primary:** each body's own website and the portal itself, verified live.
- **Discovery:**
  - data.ny.gov's agency and publisher lists.
  - The NYS GIS Clearinghouse.
  - `BetaNYC/ny-gov-web-registry` (`data/registry.json`), whose entity list helps find state agencies and authorities.
  - The ArcGIS Online organization search, used for New York orgs.
  - The Socrata Discovery API's domain list.
  - Library guides (Cornell, University at Buffalo, Columbia) and the eSpatiallyNewYork blog, used as leads only.
- **Cross-reference:** catalog.data.gov's organization pages for NYS and NYC, which show what the federal catalog already harvests.

## Method

1. **Find candidates** per tier from the discovery sources.
2. **Verify each one** with read-only public requests:
   - **Liveness:** the HTTP status and the final URL after redirects.
   - **Jurisdiction:** for ArcGIS, the DCAT feed's publisher, contact email domain and `spatial` bounding box. New York is roughly longitude −79.8 to −71.8 and latitude 40.5 to 45.0. For Socrata, the domain metadata. For anything else, the page title and owner. **Never trust a subdomain or slug alone.** That is how 8 out-of-state rows got into the first directory.
   - **API:** the type (SODA, ArcGIS REST/Hub, OGC, CKAN, REST/JSON, bulk download), the base endpoint, and whether it needs a key.
   - **Size:** the dataset count where the API reports one.
3. **Mark anything unclear as UNCONFIRMED** and say what was tried. Never guess.
4. **QA pass:** an independent re-check of a sample, plus every removal and every "dead" verdict, before publishing.

Calls stay light: a few per portal, public endpoints only, nothing that needs a login.

## Output

**Fields per entry:** tier, entity name, entity type (agency, legislature, authority, county, city, university, nonprofit), portal or service name, URL, platform, API type, API endpoint, key required (Y/N), dataset count, status (live, dead, UNCONFIRMED), last verified date, verification evidence, notes, and, where one exists, the matching `ny-gov-web-registry` entity ID.

**Files:**
- `resources/ny-data-portal-registry.md`: the readable page, with one section per tier and tables sorted A→Z.
- `resources/ny-data-portal-registry.csv`: the same rows, for tools.
- The current `ny-open-data-portals.md` becomes tier 3. Either it stays as-is and the registry links to it, or the registry absorbs it and the old page points to the new one. See the open questions.

## Two parallel workstreams (added 2026-11-05)

The work ran as two streams at the same time. Live checks used a browser where needed, so JavaScript-only portal pages (most ArcGIS Hubs) can be read. Plain HTTP and API calls are still used wherever they answer the question.

### Stream A: one page per source we already have

- **Input:** every row of `ny-open-data-portals.md` (the 57 non-NYC counties, the cities and New York City), 69 entries.
- **Output:** one page per entry at `resources/portals/<slug>.md`, for example `resources/portals/suffolk-county.md`. Each page has:
  - A **facts table**: entity, entity type, region, portal name, URL, platform, API type, API endpoint, key required, dataset count, status, last verified, and evidence.
  - **Notes**: what the place offers if there's no portal, known traps (name collisions, dead links), and earlier URLs that were excluded.
  - **How to query it**: one working example request where an API exists, tested live.
- **Also:** one row per entry in the shared data file, so stream B's tier 3 table is built from the same facts.

### Stream B: the registry page with all the tables

- **Input:** this plan's tiers 1, 2 and 4, plus the NYC sub-sources in tier 3 (one row per city agency data service).
- **Output:** `resources/ny-data-portal-registry.md`, with one table per tier. Tier 3 is filled from stream A's rows, not re-researched.

### Shared data file and merge

- Every row from both streams goes into `resources/ny-data-portal-registry.csv` and `resources/ny-data-portal-registry.json`, with the fields listed under Output.
- The rows are merged, the tier tables and the `resources/portals/` pages are built, and each page's facts table is checked against its row. 
- Then one independent QA pass. It samples pages and rows, and re-checks every "dead", "excluded" and out-of-state verdict.


### Decisions

1. **One registry.** `ny-data-portal-registry.md` becomes the main page; `ny-open-data-portals.md` gets a line pointing to it and stays for history.
2. **NYC depth.** One row per city agency data service in tier 3.
3. **Public authorities** go in tier 2, with entity type `authority`.
4. **Formats:** CSV and JSON. The JSON uses `ny-gov-web-registry` entity IDs where a match exists.
5. **Upkeep:** a one-time pass now. A monthly link-check GitHub Action is a separate follow-up, not part of this run.

## Effort

About 3–5 hours of wall-clock time with the two streams running in parallel, plus merge and one QA pass:
- Stream A is wide, with 69 pages, but each page is simple.
- In stream B, tier 2 takes the longest, because state agencies and authorities are scattered.
- Merge and QA take about an hour.

## Open questions

These were answered; see "Decisions" above.

1. **One file or two?** Should the registry absorb the county and city directory, or link to it?
2. **NYC depth.** Is NYC one row (NYC Open Data), or should each city agency's own data service get a row (Planning, the Council's Legistar, the Checkbook)?
3. **Public authorities** (MTA, Port Authority, NYPA, and others): count them in tier 2, or give them their own tier?
4. **Machine-readable format:** is CSV enough, or should there also be JSON shaped like `ny-gov-web-registry`, so the two can merge later?
5. **Upkeep:** a one-time pass, or a scheduled re-check (for example, a GitHub Action that tests each URL monthly)?
