---
title: "Allegany County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Allegany County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No portal found (parcel search only) |
| URL | https://beacon.schneidercorp.com/Application.aspx?App=AlleganyCountyNY&PageType=Search |
| Platform | Schneider Beacon |
| API type | none |
| API endpoint | — |
| Key required | — |
| Dataset count | — (no catalog count) |
| Last verified | 2026-11-05 |
| Evidence | alleganyco.gov (title 'Allegany County, NY - Official Website', HTTP 200) links Beacon AlleganyCountyNY; Beacon page title 'Beacon - Allegany County, NY - Search' read in a browser 2026-11-05 (curl gets a Cloudflare 403). |

## Notes
- County homepage links only Beacon parcel search and Real Property pages; no GIS catalog or open-data page found.
- Trap: ArcGIS Hub sites titled 'Allegany County' belong to Allegany County, **Maryland** (`allegany-county-maryland.hub.arcgis.com`, `maryland-housing-beat-allegany-maryland`). 'Allegheny County' (PA) is also a different place. Excluded.
- Beacon is a parcel viewer behind a Cloudflare challenge; it is not an open API.

## How to query it
No public API.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
