---
title: "Wayne County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Wayne County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Open Data Portal (Wayne County GIS) |
| URL | https://gis.co.wayne.ny.us/portal/apps/sites/#/wcgis/search?collection=Dataset |
| Platform | ArcGIS Enterprise (self-hosted Sites) |
| API type | ArcGIS REST (Enterprise portal) |
| API endpoint | https://gis.co.wayne.ny.us/portal/sharing/rest/search |
| Key required | N |
| Dataset count | 108 (Portal search: Feature Services not owned by Esri, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | Sites page HTTP 200; linked from waynecountyny.gov/815/Open-Data-Portal (title 'Open Data Portal \| Wayne County, NY'). 108 Feature Services, median extent center −77.04, 43.17 (Wayne County NY). Parcels_2025 query returned 43,780 features. |

## Notes
- Traps: `data-wayne.opendata.arcgis.com` is Wayne County, **Michigan**, and `data-waynecountygis.opendata.arcgis.com` is Wayne County, **Ohio**. Excluded.
- The Parcels_2025 layer id is 73, not 0.

## How to query it
```
curl 'https://gis.co.wayne.ny.us/arcgis/rest/services/Parcels_2025/FeatureServer/73/query?where=1%3D1&returnCountOnly=true&f=json'
```

Parcels 2025: `{"count":43780}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
