---
title: "Dutchess County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Dutchess County

**Region:** Hudson Valley · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Dutchess County GIS Open Data |
| URL | https://opendata-dcny.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST |
| API endpoint | https://opendata-dcny.hub.arcgis.com/api/search/v1/collections/dataset/items (OGC API Records); DCAT https://opendata-dcny.hub.arcgis.com/api/feed/dcat-us/1.1.json; layers on ArcGIS REST |
| Key required | N |
| Dataset count | 28 (Hub search API, dataset collection, 2026-11-05); the DCAT feed lists 32 items |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200. Hub domain: org `3i1Ytxq3CWeA9q8g` "Dutchess County", site "Open Data", urlKey `dcny`. 28 of 28 DCAT bboxes fall in NY. The DCAT publisher and email are unfilled `{{source}}` / `{{orgcontactemail}}` placeholders, so jurisdiction rests on the org record and the bboxes. |

## Notes
- The county also keeps a separate, non-downloadable "Data Catalog" metadata page. It was not re-checked this pass.
- The DCAT metadata placeholders are unfilled. Do not quote the publisher field from the feed.

## How to query it
```bash
curl -s "https://services5.arcgis.com/3i1Ytxq3CWeA9q8g/arcgis/rest/services/Road_Edges/FeatureServer/3/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":1716}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
