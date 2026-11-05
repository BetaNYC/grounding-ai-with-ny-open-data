---
title: "Columbia County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Columbia County

**Region:** Capital Region · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Columbia County Geo-Data |
| URL | https://geodata-cc-ny.opendata.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST |
| API endpoint | https://geodata-cc-ny.opendata.arcgis.com/api/search/v1/collections/dataset/items (OGC API Records); DCAT https://geodata-cc-ny.opendata.arcgis.com/api/feed/dcat-us/1.1.json; layers on ArcGIS REST |
| Key required | N |
| Dataset count | 55 (Hub search API, dataset collection, 2026-11-05); the DCAT feed lists 131 items, 56 of them published by USGS |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200. Hub domain: org `F5762GA30C3SyZFy` "Columbia County Planning", site "Columbia County Geo Data Hub Site". All 131 DCAT contacts are columbiacountyny.gov/494/planning. 124 of 131 bboxes fall in NY. |

## Notes
- Run by the County Planning Department.
- Excluded: `opendata-cclid.opendata.arcgis.com` is the Columbia County Land Information Dept., **Wisconsin** (Audit 2026-11-05). `columbia-county-green-guide-ColumbiaGAGIS` is Columbia County, **Georgia**.
- Many items in the feed are USGS layers redistributed by the county, not county-produced data.

## How to query it
```bash
curl -s "https://services3.arcgis.com/F5762GA30C3SyZFy/arcgis/rest/services/WetlandsNWI/FeatureServer/22/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":28785}` (NWI wetlands features).

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
