---
title: "Sullivan County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Sullivan County

**Region:** Hudson Valley · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Sullivan County GISOnline Geoportal |
| URL | https://gis2017-04-13t155717567z-sullconygiso.opendata.arcgis.com/ |
| Platform | ArcGIS Hub (older Hub Basic site) |
| API type | ArcGIS Hub (DCAT) / ArcGIS REST |
| API endpoint | https://gis2017-04-13t155717567z-sullconygiso.opendata.arcgis.com/api/feed/dcat-us/1.1.json ; county server https://gis.sullivanny.us/arcgis/rest/services |
| Key required | N |
| Dataset count | 54 (DCAT feed, 2026-11-05); the Hub search API has no dataset collection for this site |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200. Hub domain: org `bx3OlIPqiDclwaja` "Sullivan County GISOnline Geoportal", urlKey `SullCoNYGISO`. DCAT has 52 items published by "Sullivan County GIS Program" with emails at sullivanny.gov. 43 of 51 bboxes fall in NY. |

## Notes
- The subdomain is auto-generated, but it is the county's own site.
- `/api/search/v1/collections/dataset` returns 404 "Collection … not found" (only `all` exists). Use the DCAT feed for counts.
- The county's own ArcGIS Server (`gis.sullivanny.us`) hosts the layers.

## How to query it
```bash
curl -s "https://gis.sullivanny.us/arcgis/rest/services/911_Addressing_Data/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":60336}` 911 address points.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
