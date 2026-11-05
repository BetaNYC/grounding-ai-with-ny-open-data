---
title: "Putnam County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Putnam County

**Region:** NYC Metro / Long Island · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Putnam County, NY |
| URL | https://data-pcny.opendata.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC Records) / ArcGIS REST |
| API endpoint | https://data-pcny.opendata.arcgis.com/api/search/v1/collections/dataset/items (DCAT feed disabled) |
| Key required | N |
| Dataset count | 26 (Hub search API, dataset collection, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200. Hub domain: org `dU6jdOIkCUj2UDe9` "Putnam County N.Y.". The org portal is "Putnam County, NY", region US, with a default extent around lon −74.0..−73.5, lat 41.3..41.5 (web mercator). The DCAT feed returns "Feeds have been disabled for this site". |

## Notes
- Real datasets include Municipal Boundaries, Tax Parcels and School Districts.
- The DCAT feed is turned off, so use the Hub search API for discovery.

## How to query it
```bash
curl -s "https://services2.arcgis.com/dU6jdOIkCUj2UDe9/arcgis/rest/services/Municipal_Boundary/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":9}`. That fits the county's six towns and three villages, though the breakdown was not checked.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
