---
title: "Genesee County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Genesee County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Genesee County GIS Data |
| URL | https://gis-data-cogeneseeny.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub/REST |
| API endpoint | https://services6.arcgis.com/WFFxVlldouxONE19/arcgis/rest/services |
| Key required | N |
| Dataset count | 4 (Hub search API dataset collection, 2026-11-05; the org has 118 public Feature Services) |
| Last verified | 2026-11-05 |
| Evidence | Site HTTP 200; Hub domain record → org WFFxVlldouxONE19 (urlKey cogeneseeny). 404 public org items, median center −78.19, 43.00 (Batavia, NY), NYS ITS attribution. |

## Notes
- The Hub catalog is thin: 4 datasets (Smart Growth Development Areas, Municipalities, Parks and Refuges, Hamlets), offered as shapefile downloads.
- Much more is in the org as Feature Services (118), incl. Genesee/Orleans public health reporting layers.

## How to query it
```
curl 'https://gis-data-cogeneseeny.hub.arcgis.com/api/search/v1/collections/dataset/items?limit=1'
```

OGC Records search: `numberMatched` 4, first item "Hamlets".

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
