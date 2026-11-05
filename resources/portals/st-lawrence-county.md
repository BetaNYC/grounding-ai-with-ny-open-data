---
title: "St. Lawrence County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# St. Lawrence County

**Region:** North Country · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No portal found (DANC regional viewer) |
| URL | https://maps.dancgis.org/ima/?IMA=St.+Lawrence |
| Platform | DANC Internet Mapping Application (custom/Esri) |
| API type | ArcGIS REST (DANC regional server) |
| API endpoint | https://maps.dancgis.org/server/rest/services |
| Key required | N |
| Dataset count | — (no catalog count) |
| Last verified | 2026-11-05 |
| Evidence | Viewer HTTP 200 (title 'DANC - Internet Mapping Application' per the 2026-11-05 audit a browser check). stlawco.gov Tax Maps page links maps.dancgis.org/ima and a Beacon portal page. DANC REST v11.1 is public with St. Lawrence services. |

## Notes
- A shared regional viewer run by the Development Authority of the North Country, also covering Jefferson and Lewis. Not a catalog.
- DANC's public REST server has 36 services, incl. StLawrence_Infrastructure_P, StLawrence_Special_Dis_Zoning_P_24, Stlawrence_Ag_Atlas_24 and St_Lawrence_Unserved.

## How to query it
```
curl 'https://maps.dancgis.org/server/rest/services/StLawrence_Infrastructure_P/MapServer/2/query?where=1%3D1&returnCountOnly=true&f=json'
```

Water hydrants layer: `{"count":2351}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
