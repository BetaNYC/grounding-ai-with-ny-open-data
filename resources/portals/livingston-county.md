---
title: "Livingston County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Livingston County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Livingston County GIS Portal |
| URL | https://gis.livingstoncountyny.gov/portal/home/index.html |
| Platform | ArcGIS Enterprise (self-hosted Portal, no Sites catalog) |
| API type | ArcGIS REST |
| API endpoint | https://gis.livingstoncountyny.gov/arcgis/rest/services |
| Key required | N |
| Dataset count | — (no catalog count) |
| Last verified | 2026-11-05 |
| Evidence | Portal home HTTP 200 on 2026-11-05 (the directory's earlier 403 did not recur). portals/self name 'Livingston County, New York', default extent ≈ lon −78.05 to −77.49 (Livingston County NY). Linked from the county homepage livingstoncountyny.gov. REST directory v11.5 is public. |

## Notes
- **Status change:** the directory said 'No portal found' because the portal returned 403 to an automated check. It is now reachable, and the county homepage links it.
- It is a standard ArcGIS Enterprise portal (searchable gallery), not a curated open-data Site; portal search found 0 Site or Hub Site items.
- Feature Service items include county layers (soils, facilities, polling sites) and statewide ones (NY State Lands, utility territories).
- livingstoncounty.us redirects to livingstoncountyny.gov.

## How to query it
```
curl -A 'Mozilla/5.0' 'https://gis.livingstoncountyny.gov/arcgis/rest/services/Facilities/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json'
```

Facilities layer 0: `{"count":23}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
