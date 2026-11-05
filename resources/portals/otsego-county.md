---
title: "Otsego County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Otsego County

**Region:** Southern Tier · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Otsego County GIS |
| URL | https://otsego-county-gis-otsegocountyny.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST |
| API endpoint | https://otsego-county-gis-otsegocountyny.hub.arcgis.com/api/search/v1/collections/all/items |
| Key required | N |
| Dataset count | 64 entries in DCAT feed; Hub has no 'dataset' collection, 'all' = 35 items (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | Hub domain record: orgId itXEtJD6fWt6V2ew, org 'Otsego County'. DCAT: 61/64 publisher 'Otsego County', 55/55 bboxes in NY. 133 public feature services in the org. Verified by curl (HTTP). |

## Notes
- The site's search API exposes only the 'all' collection; /collections/dataset returns 404. Use 'all' or the DCAT feed.
- Contact emails are {{orgContactEmail}} placeholders.

## How to query it
```bash
curl "https://otsego-county-gis-otsegocountyny.hub.arcgis.com/api/search/v1/collections/all/items?limit=1"
```
Result: numberMatched 35; first item "NRI Tool" (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
