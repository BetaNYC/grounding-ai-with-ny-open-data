---
title: "Steuben County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Steuben County

**Region:** Southern Tier · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Steuben County GIS |
| URL | https://steubencounty-scnygis.opendata.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS Hub (OGC API Records search) + ArcGIS REST |
| API endpoint | https://steubencounty-scnygis.opendata.arcgis.com/api/search/v1/collections/dataset/items |
| Key required | N |
| Dataset count | 11 datasets (Hub 'dataset' collection), 11 items total (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | Hub domain record: orgId NZkLeERo9XICXiuy, org 'Steuben County GIS'. Earlier audit: item 'Tax Parcels SteubenCoNY' with NY extent. 61 public feature services in the org. DCAT feed still returns HTTP 500. Verified by curl (HTTP). |

## Notes
- DCAT-US feed broken: /api/feed/dcat-us/1.1.json returns 500 ('Cannot read properties of undefined (reading 'dcatUS1X')'). Use the Hub search API instead.
- Collision check: Steuben County IN exists; this org is NY per item names and extent.

## How to query it
```bash
curl "https://steubencounty-scnygis.opendata.arcgis.com/api/search/v1/collections/dataset/items?limit=1"
```
Result: numberMatched 11; first item "Soils" (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
