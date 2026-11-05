---
title: "Warren County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Warren County

**Region:** Capital Region · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Warren County NY GIS |
| URL | https://warren-county-gis-warrencountyny.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST |
| API endpoint | https://warren-county-gis-warrencountyny.hub.arcgis.com/api/search/v1/collections/dataset/items (OGC API Records); DCAT https://warren-county-gis-warrencountyny.hub.arcgis.com/api/feed/dcat-us/1.1.json; layers on ArcGIS REST |
| Key required | N |
| Dataset count | 4 (Hub search API, dataset collection, 2026-11-05); 251 items in the `all` collection, mostly PDFs; the DCAT feed lists 259 items |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200. Hub domain: org `Fg3XpDIUTR3JZZES` "Warren County NY", site "Warren County GIS". DCAT has 259 of 259 items published by "Warren County NY". 13 of 13 bboxes fall in NY. |

## Notes
- **Thin as a data catalog:** of the first 100 items in the `all` collection, 83 are PDFs (trail maps and similar). Only 4 items are typed as datasets, such as town zoning view layers. The DCAT count overstates the machine-readable data.
- Also cross-listed on the NYS GIS Clearinghouse. That was not re-checked.

## How to query it
```bash
curl -s "https://services6.arcgis.com/Fg3XpDIUTR3JZZES/arcgis/rest/services/Hague_Zoning_view/FeatureServer/171/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":62}` (Town of Hague zoning features).

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
