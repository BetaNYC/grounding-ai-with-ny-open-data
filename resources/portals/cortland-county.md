---
title: "Cortland County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Cortland County

**Region:** Central NY · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Cortland County GIS Portal |
| URL | https://cortland-county-gis-portal-cortlandplanning.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST |
| API endpoint | https://cortland-county-gis-portal-cortlandplanning.hub.arcgis.com/api/search/v1/collections/dataset/items |
| Key required | N |
| Dataset count | 28 datasets (Hub search 'dataset' collection), 44 items total; DCAT feed lists 61 entries (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | Hub domain record: orgId fRWb1mz1huf3Aqyy, org 'Cortland County Planning Department'. DCAT: 55/56 bboxes centered in NY. Publisher/contact fields are unfilled placeholders ({{source}} on 60/61, {{orgContactEmail}} on 61/61). 73 public feature services in the org. Verified by curl (HTTP). |

## Notes
- Directory says 51 datasets; the earlier audit said 61. Counts differ by method: Hub 'dataset' collection 28, Hub 'all' 44, DCAT 61.
- Metadata placeholders ({{source}}, {{orgContactEmail}}) mean publisher and email cannot prove jurisdiction; org name and NY bboxes do.

## How to query it
```bash
curl "https://cortland-county-gis-portal-cortlandplanning.hub.arcgis.com/api/search/v1/collections/dataset/items?limit=1"
```
Result: numberMatched 28; first item "Cortland Zip Codes Feature Layer" (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
