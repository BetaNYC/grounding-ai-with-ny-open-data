---
title: "Montgomery County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Montgomery County

**Region:** Mohawk Valley · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No portal found (Real Property GIS page) |
| URL | https://www.montgomerycountyny.gov/web/sites/departments/realproperty/gis.asp |
| Platform | Static page; parcels hosted on the NYS GIS Clearinghouse |
| API type | none |
| API endpoint | — |
| Key required | — |
| Dataset count | — |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200, title 'Montgomery County, NY' on montgomerycountyny.gov. Page links PROS, and 'Montgomery County Parcel Shapefiles' to https://data.gis.ny.gov/datasets/sharegisny::montgomery-county-parcels/about (200; item 'Montgomery County Parcels' found on data.gis.ny.gov search). Verified by curl (HTTP). |

## Notes
- Excluded: https://opendata-mcgov-gis.hub.arcgis.com/ is Montgomery County, **Maryland**. Also not Montgomery County PA, TX, or the City of Montgomery AL.
- Parcel shapefiles are provided through the State's GIS Clearinghouse (data.gis.ny.gov), not a county catalog.
- Region: the first directory listed Montgomery under Southern Tier; it is in the Mohawk Valley.

## How to query it
No county API. Parcels are on the State Hub (data.gis.ny.gov, see tier 1/2).

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
