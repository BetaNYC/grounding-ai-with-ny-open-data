---
title: "Tompkins County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Tompkins County

**Region:** Southern Tier · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Tompkins County Open Data Portal |
| URL | https://tcdata-tompkinscounty.opendata.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST |
| API endpoint | https://tcdata-tompkinscounty.opendata.arcgis.com/api/search/v1/collections/dataset/items |
| Key required | N |
| Dataset count | 32 datasets (Hub 'dataset' collection), 45 items total; DCAT 45 entries (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | Hub domain record: orgId oJbAAWNInLrxvF0A, org 'Tompkins County Mapping Portal'. DCAT: publisher 'Tompkins County Mapping Portal' (42) / County IT GIS Division (1); contact points to tompkinscountyny.gov GIS Division; 39/39 bboxes in NY. 330 public feature services in the org. Verified by curl (HTTP). |

## Notes
- Directory note (election districts, legislative boundaries, 2026 data present) not re-checked item by item; first dataset returned is 'Tompkins County Polling Places'.

## How to query it
```bash
curl "https://tcdata-tompkinscounty.opendata.arcgis.com/api/search/v1/collections/dataset/items?limit=1"
```
Result: numberMatched 32; first item "Tompkins County Polling Places" (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
