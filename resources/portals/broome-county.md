---
title: "Broome County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Broome County

**Region:** Southern Tier · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Broome County GIS Portal |
| URL | https://gis.broomecountyny.gov/website/gisweb/portal.htm |
| Platform | Esri ArcGIS Server 10.61 + custom JS viewer page (not Hub) |
| API type | ArcGIS REST |
| API endpoint | https://gis.broomecountyny.gov/arcgis/rest/services |
| Key required | N |
| Dataset count | No catalog count. Portal page links 91 shapefile ZIPs and 343 PDFs (page link count, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200, title 'Broome County GIS Portal' on county domain broomecountyny.gov; county homepage links to it; REST directory live (12 folders incl. parcels, elections, Flood). Verified by curl (HTTP). |

## Notes
- The directory row says 'PDF library; no dataset catalog' and API N. The catalog part holds, but the portal page also links 91 free shapefile ZIPs under /website/gisweb/GISdata/ (e.g. br_boundary.zip, br_911_addresses.zip), and a public ArcGIS Server REST directory answers queries. Suggest API = Y (ArcGIS REST).
- REST layers carry Query capability (br_parcels MapServer: Map,Query,Data).

## How to query it
```bash
curl "https://gis.broomecountyny.gov/arcgis/rest/services/parcels/br_parcels/MapServer/1/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result: {"count":85119} (Parcels layer, 2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
