---
title: "Cayuga County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Cayuga County

**Region:** Central NY · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No dedicated portal (Interactive GIS page) |
| URL | https://www.cayugacounty.gov/687/Interactive-GIS |
| Platform | ArcGIS Experience Builder viewer + ArcGIS Server (county-hosted) |
| API type | ArcGIS REST |
| API endpoint | https://ccgis2.cayugacounty.us/arcgis/rest/services (also https://ccgis.cayugacounty.us/arcgis/rest/services) |
| Key required | N |
| Dataset count | No catalog (—) |
| Last verified | 2026-11-05 |
| Evidence | cayugacounty.us redirects to cayugacounty.gov, which is Cloudflare-blocked to curl; read with a browser: title 'Interactive GIS | Cayuga County, NY'. REST directories on ccgis/ccgis2.cayugacounty.us live via curl (HTTP); Tax Map Online Experience item 5a16328d… is public, owner STwork, whose services point at ccgis*.cayugacounty.us. |

## Notes
- Offers: 'Cayuga County Online Mapping Website' (Tax Map Online, https://experience.arcgis.com/experience/5a16328d4b3b41688110fcaafc7e0624), PROS property records (with GAR Associates), a parcel shapefile ZIP (https://www.cayugacounty.gov/DocumentCenter/View/5489/Cayuga-County-Shapefile-ZIP), hard-copy maps, tax maps.
- No catalog UI. The REST directories are public: ccgis2 (v12.1, folders Basemap, DisLoc, ECO, Hosted, Print, TMO, Utilities) and ccgis (v10.81).
- Trap: a third-party ArcGIS item 'Cayuga County NY Parcels' (owner wharcgisdeveloper) is not county-published.

## How to query it
```bash
curl "https://ccgis2.cayugacounty.us/arcgis/rest/services/TMO/PARCEL/MapServer/4400/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result: {"count":39073} (Parcel layer 4400, 2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
