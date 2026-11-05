---
title: "Herkimer County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Herkimer County

**Region:** Central NY · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No dedicated portal (County Maps page) |
| URL | https://www.herkimercountyny.gov/county-maps/ |
| Platform | Schneider Beacon (property) + static map pages |
| API type | none |
| API endpoint | — |
| Key required | — |
| Dataset count | — |
| Last verified | 2026-11-05 |
| Evidence | herkimercounty.org redirects to herkimercountyny.gov ('Welcome to Herkimer County NY!'); County Maps page 200 (election, highway, legislative district maps); RPTS page links Beacon App=HerkimerCountyNY. Verified by curl (HTTP). |

## Notes
- Offers: Beacon property lookup, static county map pages.
- The directory's 'GIS Cloud viewer' was not found on this pass (UNCONFIRMED).
- Herkimer tax parcels are served as 'HC_TAX_PARCELS' (41,660 features) from Oneida County's ArcGIS Server (maps.oneidacountyny.gov), likely via the joint Herkimer-Oneida planning program (HOCCPP). Who maintains it was not confirmed. See [[oneida-county]].

## How to query it
```bash
No county API. Herkimer parcels via Oneida's server: curl "https://maps.oneidacountyny.gov/arcgis/rest/services/PARCELS/HC_TAX_PARCELS/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result: {"count":41660} (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
