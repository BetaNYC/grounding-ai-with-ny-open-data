---
title: "Orange County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Orange County

**Region:** Hudson Valley · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Orange County GIS (OCGIS) site |
| URL | https://gis.orangecountygov.com/portal/apps/sites/#/ocgis |
| Platform | ArcGIS Enterprise (self-hosted Sites) + ArcGIS Server 10.91 |
| API type | ArcGIS REST (Enterprise portal + server) |
| API endpoint | https://gis.orangecountygov.com/arcgis/rest/services ; portal search https://gis.orangecountygov.com/portal/sharing/rest/search |
| Key required | N |
| Dataset count | 1 (site Data collection, rendered in a browser, 2026-11-05); 16 public Feature Service items in portal search |
| Last verified | 2026-11-05 |
| Evidence | The county page orangecountyny.gov/1126 (rendered in a browser, since curl gets 403 from Cloudflare) links to gis.orangecountygov.com, which links to "the new OCGIS website". The portal is named "Orange County GIS Enterprise". The parcel layer has NY SWIS / SBL / RPS fields and an item extent of lon −74.76..−73.95, lat 41.14..41.63. |

## Notes
- **Change from the directory** ("No general catalog found"): there is a county-run ArcGIS Enterprise Site with Data, Documents and Apps & Maps tabs. Its Data collection is thin, though: 1 dataset, "Orange County Parcels" (146,065 features). The public ArcGIS Server also exposes folders for tax parcels (DTP2023–2025), planning, legislative and school contacts, and more.
- A Requests/Downloads page is at https://gis.orangecountygov.com/mra. It was not opened.
- Excluded: `data-ocpw.opendata.arcgis.com` is OC Public Works, Orange County, **California**. `data-orangecountygis.hub.arcgis.com` is Orange County, **Virginia** (Audit 2026-11-05). Other Hub sites named "Orange" are FL, CA and MA.
- Topical NY hubs from org `ocnygis`: https://openspace-ocnygis.hub.arcgis.com/ ("Open Space Plan: Orange County, NY", HTTP 200) and the Orange County Transportation Council site.
- `ocgis.orangecountygov.com` (the old link on the county page) does not respond.

## How to query it
```bash
curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36" "https://gis.orangecountygov.com/arcgis/rest/services/Dynamic/ParcelViewer/MapServer/7/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":146065}` parcels.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
