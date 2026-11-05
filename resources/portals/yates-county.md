---
title: "Yates County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Yates County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Yates County GIS Portal |
| URL | https://gisportal.yatescounty.org/portal/home/ |
| Platform | ArcGIS Enterprise (self-hosted Portal, no Sites catalog) |
| API type | ArcGIS REST (Enterprise portal) |
| API endpoint | https://gisportal.yatescounty.org/server/rest/services |
| Key required | N |
| Dataset count | 80 (Portal search: Feature Services not owned by Esri, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | a browser: yatescountyny.gov/573/Yates-County-GIS-Portal redirects to gisportal.yatescounty.org/portal/home/ (curl gets a Cloudflare 403 on the county site). portals/self name 'Yates County GIS Portal'; 80 Feature Services owned by county users, median center −77.13, 42.61 (Penn Yan area, NY). |

## Notes
- **Status change:** the directory said 'No portal found' (Web AppViewer only). The county site has a 'Yates County GIS Portal' page linking a public ArcGIS Enterprise portal.
- It is a searchable portal gallery, not a curated open-data Site; portal search found 0 Site items.
- yatescounty.org redirects to yatescountyny.gov, which blocks plain HTTP clients behind Cloudflare.

## How to query it
```
curl 'https://gisportal.yatescounty.org/server/rest/services/Hosted/SchoolDistricts/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json'
```

School districts: `{"count":6}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
