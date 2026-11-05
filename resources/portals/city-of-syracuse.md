---
title: "City of Syracuse — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# City of Syracuse

**Region:** Central NY · **Entity type:** city · **Status:** live

| Field | Value |
|---|---|
| Portal | Open Data Syracuse |
| URL | https://data.syr.gov/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST |
| API endpoint | https://data.syr.gov/api/search/v1/collections/dataset/items |
| Key required | N |
| Dataset count | 136 datasets (Hub 'dataset' collection), 188 items total; DCAT 188 entries (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200, title 'City of Syracuse Open Data Portal'. Hub domain record: orgId bdPqSfflsdgFRVVM, org 'City of Syracuse'. DCAT: 75 entries publisher 'City of Syracuse', 91 {{source}} placeholders; null and US-wide bboxes account for the non-NY ones. 362 public feature services in the org. Verified by curl (HTTP). |

## Notes
- Not Socrata: the Socrata catalog API reports 'Domain not found: data.syr.gov'.
- Trap: 'Syracuse University' Hub (data-SyrUniv.opendata.arcgis.com) is the university, not the city.

## How to query it
```bash
curl "https://data.syr.gov/api/search/v1/collections/dataset/items?limit=1"
```
Result: numberMatched 136; first item "Syracuse Rental Registry" (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
