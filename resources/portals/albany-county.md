---
title: "Albany County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Albany County

**Region:** Capital Region · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Albany County NY Open Data |
| URL | https://albany-county-ny-open-data-albcountygis.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST |
| API endpoint | https://albany-county-ny-open-data-albcountygis.hub.arcgis.com/api/search/v1/collections/dataset/items (OGC API Records); DCAT https://albany-county-ny-open-data-albcountygis.hub.arcgis.com/api/feed/dcat-us/1.1.json; layers on ArcGIS REST |
| Key required | N |
| Dataset count | 41 (Hub search API, dataset collection, 2026-11-05); the DCAT feed lists 57 items |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200. Hub domain record: org `mBzcjj7yrA6fBe9F` "Albany County NY GIS". DCAT publishers are "Albany County NY GIS" and "Department of Real Property". The contact is albanycounty.com Real Property Tax Service Agency. 49 of 49 bboxes fall in NY. |

## Notes
- Run by the County GIS Coordinator (Real Property Tax Services). The Hub site owner is `Ken.Galluccio_rptsa`.
- The DCAT contactPoint is a URL, not an email.

## How to query it
```bash
curl -s "https://services6.arcgis.com/mBzcjj7yrA6fBe9F/arcgis/rest/services/ElectionDist2024/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":234}`, the number of 2024 election districts.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
