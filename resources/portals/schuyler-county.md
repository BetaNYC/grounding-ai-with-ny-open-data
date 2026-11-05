---
title: "Schuyler County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Schuyler County

**Region:** Southern Tier · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | GIS Shapefile page |
| URL | https://www.schuylercountyny.gov/1066/GIS-Shapefile |
| Platform | CivicPlus static page + ArcGIS Online web viewer |
| API type | none |
| API endpoint | — |
| Key required | — |
| Dataset count | Not a catalog; yearly parcel shapefiles 2021–2025 (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | http redirects to https; HTTP 200, title 'GIS Shapefile | Schuyler County, NY'. Page lists 2025 shapefile (updated 07/01/2025) back to 2021; links 'Online Map Viewer' at schuylerco.maps.arcgis.com (item 'Schuyler County Parcel Map Viewer', owner SchuylerGIS, 200). Verified by curl (HTTP). |

## Notes
- Offers: annual parcel shapefile downloads (DocumentCenter), Parcel Map Viewer (https://schuylerco.maps.arcgis.com/apps/webappviewer/index.html?id=b65af3edbf494b64883ec238d0206d22), online property assessment data.
- An ArcGIS org titled 'Schuyler County' (wGGTeQ7ADSSKDWnb) runs a Public Health Hub (scpublichealth-schuylerco.hub.arcgis.com) and has 53 public feature services. Whether it is the same org as schuylerco.maps.arcgis.com is UNCONFIRMED.
- Collision check: Schuyler County IL and MO exist; not seen in results.

## How to query it
```bash
No catalog API. Public Health org feature services: curl "https://www.arcgis.com/sharing/rest/search?q=orgid:wGGTeQ7ADSSKDWnb%20AND%20type:%22Feature%20Service%22&num=1&f=json"
```
Result: total 53; first 'Village of Montour Falls Zoning2' (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
