---
title: "Suffolk County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Suffolk County

**Region:** NYC Metro / Long Island · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Suffolk County Open Data |
| URL | https://opendata.suffolkcountyny.gov/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST |
| API endpoint | https://opendata.suffolkcountyny.gov/api/search/v1/collections/dataset/items (OGC API Records); DCAT https://opendata.suffolkcountyny.gov/api/feed/dcat-us/1.1.json; layers on ArcGIS REST (county server: https://gis.suffolkcountyny.gov/server/rest/services) |
| Key required | N |
| Dataset count | 189 (Hub search API, dataset collection, 2026-11-05); the DCAT feed lists 284 items |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200. Hub domain: org `JsDD4qdG5r2a7hR5` "Suffolk County GIS", site "Suffolk County Open Data". DCAT has 255 items published by "Suffolk County GIS" with emails at suffolkcountyny.gov. 126 of 157 bboxes fall in NY. |

## Notes
- A browsable catalog: Budget & Finance, Housing, Environment, Public Safety and GIS categories. The category list was not re-checked this pass.
- 29 DCAT items are Esri-published layers mirrored into the site.

## How to query it
```bash
curl -s "https://gis.suffolkcountyny.gov/server/rest/services/LocalGovernmentSQLData/TaxParcelPolygon/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":584995}` tax parcels.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
