---
title: "Hamilton County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Hamilton County

**Region:** North Country · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No portal found (parcel viewer only) |
| URL | https://beacon.schneidercorp.com/Application.aspx?App=HamiltonCountyNY&PageType=Map |
| Platform | Schneider Beacon |
| API type | none |
| API endpoint | — |
| Key required | — |
| Dataset count | — (no catalog count) |
| Last verified | 2026-11-05 |
| Evidence | a browser 2026-11-05: after the Cloudflare challenge the page title is 'Beacon - Hamilton County, NY - Map'. https://hamcomaps.net/ (apex) redirects to this Beacon URL. |

## Notes
- Smallest county in NY (about 4,800 people). Parcel and tax map viewer only.
- `www.hamcomaps.net` is a dangling CNAME to a deleted Azure web app (per the 2026-11-05 audit; not re-tested here). Use the Beacon URL.
- DANC's public REST server has a Hamilton fiber service layer (Hamilton_Fiber_Service_MXD).
- Traps: Hamilton County Indiana GeoHub and Hamilton County (Cincinnati) Ohio CAGIS Hubs. Excluded.

## How to query it
No public API.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
