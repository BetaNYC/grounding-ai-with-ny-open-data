---
title: "City of Rochester — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# City of Rochester

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** city · **Status:** live

| Field | Value |
|---|---|
| Portal | DataROC |
| URL | https://data.cityofrochester.gov/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub/REST |
| API endpoint | https://data.cityofrochester.gov/api/search/v1/collections/dataset/items |
| Key required | N |
| Dataset count | 52 (Hub search API dataset collection, 2026-11-05 (DCAT feed lists 281 entries; org has 180 public Feature Services)) |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200; Hub domain record → org yoz1ZtATTCokO9nU (urlKey RochesterNY), site 'DataROC'. DCAT publisher 'City of Rochester, NY' and contact domain CityofRochester.gov on 134 entries; 114/152 bboxes centered in NY; org median center −77.61, 43.18. |

## Notes
- ArcGIS Hub, not Socrata. Rochester is often assumed to run Socrata; no Socrata markers were found (when it changed is not known).
- Counts differ by method: Hub search 52 datasets, DCAT 281 entries (many with unfilled template values), org Feature Services 180.
- Datasets include 311 Case Data, parcels and parcel history.

## How to query it
```
curl 'https://services2.arcgis.com/yoz1ZtATTCokO9nU/arcgis/rest/services/TaxParcel_Join/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json'
```

TaxParcel_Join layer 0: `{"count":349}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
