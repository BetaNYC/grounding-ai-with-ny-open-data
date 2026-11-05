---
title: "Westchester County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Westchester County

**Region:** NYC Metro / Long Island · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Westchester GeoHub v2 |
| URL | https://gis.westchestercountyny.gov/ |
| Platform | ArcGIS Hub (custom domain) + county ArcGIS Server |
| API type | ArcGIS Hub (OGC Records) / ArcGIS REST |
| API endpoint | https://gis.westchestercountyny.gov/api/search/v1/collections/dataset/items (DCAT feed disabled); layers on https://giswww.westchestergov.com/arcgis/rest/services |
| Key required | N |
| Dataset count | 91 (Hub search API, dataset collection, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200. Hub domain: org `XKEHpOulfycN9cGC` "Westchester County GIS", site "Westchester GeoHub v2", urlKey `wcgis`. The org default extent is around lon −74.25..−73.24, lat 40.9..41.4. The DCAT feed is disabled for the site. |

## Notes
- A GIS-first catalog: parcels, boundaries and infrastructure. No budget, payroll or 311-style civic datasets were seen. That is from an earlier pass and was not re-checked.
- `datahub-wcgis.opendata.arcgis.com` is a legacy site of the same county org. GeoHub v2 is canonical (Audit 2026-11-05).
- Cities in the county (Mount Vernon, New Rochelle, White Plains, Yonkers) lean on this hub for county-level layers.

## How to query it
```bash
curl -s "https://giswww.westchestergov.com/arcgis/rest/services/DataHub_Infrastructure/MapServer/152/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":59225}` municipal sewer main segments.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
