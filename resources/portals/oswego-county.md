---
title: "Oswego County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Oswego County

**Region:** Central NY · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Oswego County Data / GIS |
| URL | https://data-oswegogis.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST |
| API endpoint | https://data-oswegogis.hub.arcgis.com/api/search/v1/collections/dataset/items |
| Key required | N |
| Dataset count | 23 datasets (Hub 'dataset' collection), 60 items total; DCAT feed lists 216 entries (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | Hub domain record: orgId 0dC3T96jvK0z64NH, org 'Oswego County GIS'. DCAT: 216/216 publisher 'Oswego County GIS', emails at oswegocounty.com. Out-of-NY bboxes are world/US basemaps. Verified by curl (HTTP). |

## Notes
- Directory says 26 datasets. Live counts: Hub dataset collection 23; DCAT 216 entries (includes basemaps and services). 216 public feature services in the org.

## How to query it
```bash
curl "https://data-oswegogis.hub.arcgis.com/api/search/v1/collections/dataset/items?limit=1"
```
Result: numberMatched 23; first item "Oswego County Municipal Boundaries" (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
