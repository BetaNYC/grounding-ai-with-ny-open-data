---
title: "Washington County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Washington County

**Region:** Capital Region · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No open data catalog (parcel viewer) |
| URL | https://gis.washingtoncountyny.gov/webmap/ |
| Platform | Esri web map (viewer) on ArcGIS Server 10.9 |
| API type | ArcGIS REST (raw services behind the viewer; no catalog) |
| API endpoint | https://gis.washingtoncountyny.gov/arcgis/rest/services |
| Key required | N |
| Dataset count | — (no catalog) |
| Last verified | 2026-11-05 |
| Evidence | Viewer HTTP 200 (Angular app; a browser check read "Washington County Parcel Viewer … Washington County, NY … Fort Edward"). The REST Towns layer returns 17 features with SWIS codes 53xxxx, including the towns of Argyle, Cambridge and Dresden (Washington County, NY). |

## Notes
- **Caution:** searches for "Washington County open data" surface Washington County **Wisconsin** (`washington-county-open-data-WashingtonCoWI`), **Minnesota**, **Maryland**, **Pennsylvania** and **Ohio** Hub sites. All are excluded.
- The ArcGIS Server REST directory behind the viewer is public: folders Broadband, Hosted and Utilities, and MapServers Layers / Layers2. The Layers service has parcels, towns, villages, hamlets and roads. This is Partial API access, undocumented.

## How to query it
```bash
curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36" "https://gis.washingtoncountyny.gov/arcgis/rest/services/Layers/MapServer/3/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":17}`, the county's 17 towns.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
