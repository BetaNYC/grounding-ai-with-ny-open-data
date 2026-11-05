---
title: "Oneida County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Oneida County

**Region:** Central NY · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No catalog; public ArcGIS Enterprise |
| URL | https://oneidacountyny.gov/departments/planning/gis-servicesmapping-resources/ |
| Platform | ArcGIS Enterprise 11.5 (county-hosted, maps.oneidacountyny.gov) |
| API type | ArcGIS REST |
| API endpoint | https://maps.oneidacountyny.gov/arcgis/rest/services |
| Key required | N |
| Dataset count | No catalog. Enterprise portal search: 118 public Feature Service items (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | ocgov.net redirects to oneidacountyny.gov ('Welcome To Oneida County'). GIS Services and Interactive Mapping pages 200. REST directory on maps.oneidacountyny.gov live (v11.5, 32 folders incl. PARCELS, E911, ZONING, Census); portal/sharing/rest/portals/self reports access 'public'. Verified by curl (HTTP). |

## Notes
- The directory says 'map viewers + Beacon, not a centralized catalog'. True of the UI, but the county runs a public ArcGIS Enterprise with a queryable REST directory and 118 public feature services. Suggest API = Y.
- The Tax Parcel Viewer linked from the county site (Experience 228579a2…) is owned by HOCCPP16, in the 'HOCCPP - Regional Planning' org (6x801hFkTeoDflcw, 48 public feature services), the Herkimer-Oneida joint planning program.
- The PARCELS folder also holds Herkimer County parcels (HC_TAX_PARCELS).
- Other HOCCPP hubs: hoctc-hoccpp.hub.arcgis.com (0 items), hoctc-safety-action-plan-hoccpp.hub.arcgis.com.
- Likely name collision: 'Oneida County COVID-19 Update' Hub (owner OCHDWI) reads as Oneida County, WI from the owner name; not verified. Excluded either way (not a catalog).

## How to query it
```bash
curl "https://maps.oneidacountyny.gov/arcgis/rest/services/PARCELS/MASTER_PARCELS_NEW/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result: {"count":105805} (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
