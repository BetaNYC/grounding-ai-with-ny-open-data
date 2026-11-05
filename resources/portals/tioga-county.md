---
title: "Tioga County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Tioga County

**Region:** Southern Tier · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Tioga County One Map |
| URL | https://tioga-county-one-map-tiogacountyny.hub.arcgis.com/ |
| Platform | ArcGIS Hub |
| API type | ArcGIS REST (org feature services); Hub search returns no datasets |
| API endpoint | https://services3.arcgis.com/PvkAiSMFS7cpxnJP/arcgis/rest/services |
| Key required | N |
| Dataset count | 0 datasets on the Hub site (3 items: apps/StoryMaps); 166 public feature services in the ArcGIS org (2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | Hub domain record: orgId PvkAiSMFS7cpxnJP, org 'Tioga County NY'. DCAT 3/3 publisher 'Tioga County NY', emails tiogacountyny.gov. County homepage (tiogacountyny.gov) links to this Hub and to Beacon. Verified by curl (HTTP). |

## Notes
- The Hub site is a front door for apps, not a data catalog. The data is in the org's 166 public feature services.
- Name collision: Tioga County PA. Jurisdiction here is proved by the org name and tiogacountyny.gov emails, not by the subdomain.
- Beacon property search: https://beacon.schneidercorp.com/Application.aspx?App=TiogaCountyNY&PageType=Search

## How to query it
```bash
curl "https://www.arcgis.com/sharing/rest/search?q=orgid:PvkAiSMFS7cpxnJP%20AND%20type:%22Feature%20Service%22&num=1&f=json"
```
Result: total 166; first 'Town of Owego Lighting Districts' (services3.arcgis.com/PvkAiSMFS7cpxnJP/...) (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
