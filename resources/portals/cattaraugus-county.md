---
title: "Cattaraugus County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Cattaraugus County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Cattaraugus County GIS Hub |
| URL | https://cattaraugus-county-gis-hub-cattco.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub/REST |
| API endpoint | https://services2.arcgis.com/T3DEZCc7g6Lhq9kn/arcgis/rest/services |
| Key required | N |
| Dataset count | 0 (Hub search API dataset collection, 2026-11-05; the org has 50 public Feature Services) |
| Last verified | 2026-11-05 |
| Evidence | Site HTTP 200; Hub domain record → org T3DEZCc7g6Lhq9kn (urlKey CattCo). 182 public org items, median extent center −78.69, 42.27 (Cattaraugus County NY), NYS ITS attribution. Hub search numberMatched 0; DCAT feed has 0 datasets. |

## Notes
- The Hub site is live but its public catalog is empty to the API: the Hub search and DCAT feed both list 0 datasets. The data sits in the county's ArcGIS org as about 50 public Feature Services, reachable over REST.
- Needs a human look at the site to see what it actually presents.

## How to query it
```
curl 'https://services2.arcgis.com/T3DEZCc7g6Lhq9kn/arcgis/rest/services/catt_3_31/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json'
```

Cattaraugus County Trails layer: `{"count":319}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
