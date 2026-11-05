---
title: "Onondaga County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Onondaga County

**Region:** Central NY · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No dedicated portal (GIS Division page) |
| URL | https://onondaga.gov/planning/gis/ |
| Platform | Hosted web viewer (spatial.vhb.com) + Map Gallery |
| API type | none |
| API endpoint | — |
| Key required | — |
| Dataset count | — |
| Last verified | 2026-11-05 |
| Evidence | https://www.ongov.net refuses HTTPS connections (curl and a browser: ERR_CONNECTION_REFUSED); http://ongov.net redirects to https://onondaga.gov/ ('Home - Onondaga County'). GIS Division page 200; it links 'Syracuse – Onondaga County GIS on the Web' at https://spatial.vhb.com/onondaga/ (title 'Onondaga County GIS On The Web', read with a browser). Verified by curl (HTTP). |

## Notes
- Domain change: the county moved from ongov.net to onondaga.gov. Old https://www.ongov.net/... links are dead (connection refused); update any references.
- Offers: joint City-County viewer 'GIS on the Web' (hosted by VHB), Map Gallery (https://onondaga.gov/planning/map_gallery/). The GIS Division supports the City of Syracuse too; see [[city-of-syracuse]] for the city's open-data Hub.
- Scattered ArcGIS items about Onondaga (e.g. 'Onondaga County Legislative Districts') are owned by the account 'CommGeog', not a county org. Owner identity not confirmed.

## How to query it
No public API.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
