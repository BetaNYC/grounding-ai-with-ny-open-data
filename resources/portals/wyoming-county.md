---
title: "Wyoming County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Wyoming County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No portal found (map apps only) |
| URL | https://www.wyomingcountyny.gov/645/Geographic-Information-Systems-GIS |
| Platform | ArcGIS Online (individual apps) |
| API type | ArcGIS REST (org services, no catalog) |
| API endpoint | https://services3.arcgis.com/Sq7KUOgahdDkqoAp/arcgis/rest/services |
| Key required | N |
| Dataset count | — (no catalog count) |
| Last verified | 2026-11-05 |
| Evidence | County GIS page HTTP 200. Org wyco (Sq7KUOgahdDkqoAp, name 'Wyoming County GIS'): 154 public items, 104 Feature Services, median center −78.22, 42.69 (Warsaw, NY). |

## Notes
- No browsable catalog; the county page links Experience Builder and Instant apps only.
- Trap: the previously listed Hub (`www-wyomingcounty-wycopa`) matched the Wyoming County, **Pennsylvania** org and no longer exists. Excluded.
- The org's Feature Services are public and queryable over REST.

## How to query it
```
curl 'https://services3.arcgis.com/Sq7KUOgahdDkqoAp/arcgis/rest/services/Wyco_Parcels_9_2021/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json'
```

Parcels (Sept. 2021): `{"count":23441}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
