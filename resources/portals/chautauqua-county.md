---
title: "Chautauqua County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Chautauqua County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No catalog UI (raw ArcGIS REST services) |
| URL | https://maps.chautauquacounty.com/server/rest/services |
| Platform | ArcGIS Server 10.91 (REST directory, no Hub front end) |
| API type | ArcGIS REST |
| API endpoint | https://maps.chautauquacounty.com/server/rest/services |
| Key required | N |
| Dataset count | — (no catalog count) |
| Last verified | 2026-11-05 |
| Evidence | REST directory HTTP 200, currentVersion 10.91, folders Imagery, Locators, ParcelViewer, Public, PV_Beta, Utilities. County ArcGIS org (urlKey ChautauquaCounty, 5FL2JAlR9nTU3EyG): 340 public items, median center −79.39, 42.28 (Chautauqua County NY). |

## Notes
- No browsable dataset catalog. The `Public` folder holds election precincts, polling places, parcels and basemap services.
- The county also runs **DevelopCHQ** (https://developchq-chautauquacounty.hub.arcgis.com/), an ArcGIS Hub for economic development site selection: 43 items, mostly PDF site sheets plus a few layers. It is not a general open-data catalog.
- chautauquacounty.com redirects to chautauquacountyny.gov.

## How to query it
```
curl 'https://maps.chautauquacounty.com/server/rest/services/Public/ElectionPrecincts/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json'
```

Election precincts: `{"count":99}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
