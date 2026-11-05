---
title: "City of Utica — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# City of Utica

**Region:** Central NY · **Entity type:** city · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No dedicated portal (GIS Maps page) |
| URL | https://www.cityofutica.com/maps/gis-maps/index |
| Platform | ArcGIS Experience Builder viewer + Schneider Beacon |
| API type | ArcGIS REST (org feature services) |
| API endpoint | https://services1.arcgis.com/MBcb1JDktb5ipmv9/arcgis/rest/services |
| Key required | N |
| Dataset count | No catalog. 71 public feature services in the city's ArcGIS org (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | cityofutica.com GIS Maps page 200; links 'City of Utica GIS' Experience (00397527…, owner aalix_utica, org MBcb1JDktb5ipmv9 = 'The City of Utica, NY') and Beacon App=CityOfUticaNY. Verified by curl (HTTP). |

## Notes
- Offers: City of Utica GIS web experience, Beacon property search (directory's 'Image Mate Online' is now Beacon), street maps.
- Public feature services exist (71, e.g. 'Common Council Districts View Layer', 'Building Footprints View Layer') but no catalog site.
- Trap: 'Lead Safe Community - Utica' Hub (lead-service-line-inventory-uticamn) is Utica, **Minnesota**. Excluded.
- The homepage also links a DCJS-hosted UPD crisis-response Hub (upd-crisis-response-dcjs.hub.arcgis.com), a state site, not a city catalog.

## How to query it
```bash
curl "https://www.arcgis.com/sharing/rest/search?q=orgid:MBcb1JDktb5ipmv9%20AND%20type:%22Feature%20Service%22&num=1&f=json"
```
Result: total 71; first 'Boilermaker Route View Layer' (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
