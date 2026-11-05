---
title: "Greene County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Greene County

**Region:** Capital Region · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No portal found (web map viewer) |
| URL | https://gis.gcgovny.com/greenewebmap/ |
| Platform | Esri web map (viewer) on ArcGIS Server 10.91 |
| API type | ArcGIS REST (raw services behind the viewer; no catalog) |
| API endpoint | https://gis.gcgovny.com/arcgis/rest/services |
| Key required | N |
| Dataset count | — (no catalog) |
| Last verified | 2026-11-05 |
| Evidence | Viewer: HTTP 200, rendered in a browser as "Greene County Web Map … Greene County, New York". It is linked as "GIS Map" from greenecountyny.gov. The REST County Boundary layer returns County_ID `36039`, Greene County NY's FIPS code. |

## Notes
- Excluded: `gishub-gimsoh29.opendata.arcgis.com` ("Greene County GIS Hub") is Greene County, **Ohio** (Audit 2026-11-05).
- There is no catalog, but the ArcGIS Server REST directory behind the viewer is public. Folders are AGOL, Hosted, Utilities and WebMap_2026. The `2025_WebMap` MapServer has parcels, municipal boundaries, fire, school and election districts. This is machine-readable but undocumented, so treat it as Partial API access.
- `gis.gcgovny.com/server/rest/services` returns 500; use the `/arcgis/` path.

## How to query it
```bash
curl -s "https://gis.gcgovny.com/arcgis/rest/services/2025_WebMap/MapServer/2/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":54}` municipal-boundary features. The layer includes neighboring towns such as Berne and Bethlehem, so it is not Greene-only.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
