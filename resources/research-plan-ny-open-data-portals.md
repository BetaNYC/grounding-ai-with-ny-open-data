---
status: active
---

# Research plan: NY county/municipal open data portal directory

**Report generated:** 2026-07-06

## Goals

Build a directory of open data portals run by New York State counties and municipalities (outside NYC, which is already covered by NYC Open Data + BetaNYC's purpose-built MCPs). For each entry, determine:
1. Whether it has a machine-readable API endpoint (vs. download-only or no true catalog at all)
2. What software platform powers it (Socrata, ArcGIS Hub, CKAN, OpenGov, Tyler Data & Insights, custom, etc.)

## Scope

**In:**
- All 62 NY counties
- Major independent cities not already covered by county portals (e.g., Buffalo, Rochester, Syracuse, Yonkers, Albany, New Rochelle, Mount Vernon, Schenectady, Utica, White Plains, Troy) — population threshold ~50,000, adjustable if a smaller city turns out to run a notable portal
- NYC boroughs are explicitly **out of scope for re-research** — already covered by NYC Open Data + BetaNYC's six MCPs; note the cross-reference only

**Out:**
- Villages and towns under ~50,000 population, unless they are a county seat with a notable independent portal
- Federal datasets
- Non-government open-data initiatives (university, nonprofit) unless directly government-run
- Regional consortia are in scope if they represent a county or municipality's actual data (flag clearly if one portal serves multiple counties)

## Sources to consult

- **Primary:** each government's official website / open-data subdomain — verified live, not just referenced
- **Secondary:**
  - NYS Information Technology Services (ITS) / data.ny.gov county-partner listings
  - Center for Technology in Government (CTG, University at Albany) publications on NY open data adoption
  - Existing civic tech directories (e.g., Civic AI Tools Directory)
  - NYS Association of Counties (NYSAC) resources
- **Anticipated volume:** ~65–75 entries (62 counties + up to ~13 independent cities)

## Methodology

For each county/city:
1. Search "[name] open data portal" (and variants: "open data," "data portal," "GIS hub")
2. Verify the URL is live and actually browsable as a catalog (not just a static reports page)
3. Identify the platform by URL/branding signature:
   - Socrata: subdomain pattern, `data.*.gov` or similar, Socrata-branded UI
   - ArcGIS Hub: `hub.arcgis.com` or ArcGIS-branded UI
   - CKAN: `/dataset/` URL path
   - OpenGov, Tyler Data & Insights, or custom: identify from page branding/footer
4. Check whether a machine-readable API is actually exposed:
   - Socrata → SODA API (near-universal if Socrata-hosted)
   - ArcGIS Hub → ArcGIS REST API (per-layer)
   - CKAN → CKAN API
   - CSV/PDF download only → note as **no API**
5. If no portal is found at all after a reasonable search, record "no portal found" honestly — do not omit the entry silently

## Output format

Markdown table, grouped by region for readability (NYC metro/Long Island, Hudson Valley, Capital Region, Central NY, Western NY, North Country):

| County / Municipality | Portal Name | URL | Platform | API? (Y/N) | Notes |
|---|---|---|---|---|---|

## Output location

`grounding-ai-with-ny-open-data/resources/ny-open-data-portals.md`

## Effort estimate

Single research pass, ~65–75 lookups, run as a background task. No live-portal data querying required — this scan is about confirming portal *existence* and *capability*, not pulling records.

## Open questions

None blocking. Ambiguous cases (e.g., a regional consortium portal covering multiple counties, or a county whose "open data" is really just a GIS parcel viewer with no other datasets) will be flagged inline in the output table rather than resolved unilaterally.
