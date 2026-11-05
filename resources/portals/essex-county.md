---
title: "Essex County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Essex County

**Region:** North Country · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No portal found (parcel viewer + REST) |
| URL | https://essex-gis.co.essex.ny.us/ |
| Platform | Esri ArcGIS Server 11.3 (parcel viewer) |
| API type | ArcGIS REST |
| API endpoint | https://essex-gis.co.essex.ny.us/arcgis/rest/services |
| Key required | N |
| Dataset count | — (no catalog count) |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200 on the `co.essex.ny.us` domain, linked from essexcountyny.gov. REST service NY_County_Essex/MapServer full extent ≈ lon −74.34 to −73.29 (Essex County NY), layers incl. Parcels, Election Districts, Agricultural Districts. |

## Notes
- The parcel viewer is not a catalog, but its MapServer is public and queryable.
- **Trap:** `data-essexcounty.opendata.arcgis.com` / `opendata.countyofessex.ca` is Essex County, **Ontario, Canada**; an 'Essex County Virginia GIS Portal' Hub also exists. Both excluded.

## How to query it
```
curl 'https://essex-gis.co.essex.ny.us/arcgis/rest/services/NY_County_Essex/MapServer/0/query?where=1%3D1&returnCountOnly=true&f=json'
```

Town Halls layer: `{"count":18}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
