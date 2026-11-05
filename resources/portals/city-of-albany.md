---
title: "City of Albany — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# City of Albany

**Region:** Capital Region · **Entity type:** city · **Status:** dead

| Field | Value |
|---|---|
| Portal | openAlbany (offline) |
| URL | — |
| Platform | Socrata (retired) |
| API type | None (portal offline) |
| API endpoint | — |
| Key required | — |
| Dataset count | — (portal offline) |
| Last verified | 2026-11-05 |
| Evidence | `data.albanyny.gov`: NXDOMAIN via 8.8.8.8 (host, 2026-11-05); Socrata Discovery API returns "Domain not found: data.albanyny.gov". |

## Notes
- openAlbany (Socrata) is gone. WAMC (2026-08-13, https://www.wamc.org/news/2026-08-13/albany-works-towards-open-data-policy) reports it has been offline since about mid-January 2026; a Local Law "K" of 2026 is proposed. That press report was not re-read this pass.
- The city does still publish GIS layers through ArcGIS Online, but not as a curated catalog. Org `JJzptGyn7EDStgyp` ("City of Albany GIS Services") has 115 public Feature Service items with extents inside Albany, NY (e.g. "Zoning in Albany New York for Public View", "Tax Parcel Dataset for Public View"), mostly last modified 2020–2021. Its only Hub site, https://city-albanyny-gis.hub.arcgis.com/, is titled "test - 1" and lists 16 "datasets", most of them Esri Living Atlas layers (ACS, COVID-19), not city data.
- A second org, `0sUXe1ZlggF9tBHD` ("City of Albany, New York", urlKey `albanynewyork`), has 9 public feature services from 2019 (Wards, Street Lights, Historic Districts). Its Hub site https://gis-albanynewyork.hub.arcgis.com/ lists 1 dataset (Opportunity Zones).
- Traps: `albany.data.socrata.com` ("Catalog | City of Albany", 6 assets, last real update 2019) could not be tied to Albany NY versus Albany GA or OR; do not cite it. Hub sites owned by `rosmith_albgis` / `ShHawkins_albgis` ("Affordable Housing in Albany", geohub.albanyga.gov) are Albany, **Georgia**.
- The Albany Police Department's separate portal was not checked.

## How to query it
```bash
curl -s "https://services6.arcgis.com/JJzptGyn7EDStgyp/arcgis/rest/services/Tax_Parcel_Dataset_for_Public_View/FeatureServer/1/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":451}`. That is far fewer than the city's parcel total, so this public-view layer is probably a subset. Treat it as an example of a call that works, not as the city's parcel file. openAlbany itself has no API any more.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
