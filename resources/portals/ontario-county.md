---
title: "Ontario County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Ontario County

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Ontario County GIS Mapping Center |
| URL | https://ontario-county-gis-mapping-center-ontariocony.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub/REST |
| API endpoint | https://services1.arcgis.com/4ZdJfkWE583IARCX/arcgis/rest/services |
| Key required | N |
| Dataset count | 12 (Hub search API dataset collection, 2026-11-05 (DCAT feed lists 35 entries; org has 102 public Feature Services)) |
| Last verified | 2026-11-05 |
| Evidence | Site HTTP 200; Hub domain record → org 4ZdJfkWE583IARCX (urlKey Ontariocony). 16/16 DCAT bounding boxes centered in NY; 193 public org items, median center −77.26, 42.81 (Canandaigua, NY). |

## Notes
- Dataset counts differ by method: Hub search 12, DCAT 35, org Feature Services 102. Cite the method with the number.

## How to query it
```
curl 'https://services1.arcgis.com/4ZdJfkWE583IARCX/arcgis/rest/services/Tax_Parcels/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json'
```

Tax parcels: `{"count":51175}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
