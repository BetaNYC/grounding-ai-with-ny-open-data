---
title: "Monroe County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Monroe County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | MCGIS Hub |
| URL | https://maps.monroecounty.gov/portal/apps/sites/#/mcgis |
| Platform | ArcGIS Enterprise (self-hosted Sites) |
| API type | ArcGIS REST (Enterprise portal) |
| API endpoint | https://maps.monroecounty.gov/portal/sharing/rest/search |
| Key required | N |
| Dataset count | 77 (Portal search: Feature Services not owned by Esri, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | Sites page HTTP 200. portals/self name 'Monroe County GIS Portal'; county-owned Feature Services (owners initialAdmin, …@MCAD) median center −77.67, 43.12 (Rochester area). Parcels_Public query returned 267,962 features. |

## Notes
- The portal also lists Esri Living Atlas items; the raw Feature Service count (108) includes them, so use 77 for the county's own.
- Trap: `gishub-monroegis.hub.arcgis.com` is Monroe County, **Ohio**. Excluded.

## How to query it
```
curl 'https://maps.monroecounty.gov/server/rest/services/Hosted/Parcels_Public/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json'
```

Public parcels: `{"count":267962}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
