---
title: "Fulton County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Fulton County

**Region:** Mohawk Valley · **Entity type:** county · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No portal found (Real Property Tax Service Agency page) |
| URL | https://www.fultoncountyny.gov/real-property-tax-service-agency |
| Platform | Schneider Beacon / Image Mate Online (parcel viewer) |
| API type | none |
| API endpoint | — |
| Key required | — |
| Dataset count | — |
| Last verified | 2026-11-05 |
| Evidence | fultoncountyny.gov HTTP 200 ('Home | FULTON COUNTY'); RPTS page links 'Beacon/Schneider Image Mate Online' (AppID=1343). ArcGIS org Wr8KQMbr3gSStkHQ is titled 'Fulton County, NY' in the Hub domain record; it has 23 public feature services and an Elections Hub site with 0 items. Verified by curl (HTTP) and a browser. |

## Notes
- Offers: Beacon/Image Mate Online parcel viewer; Planning Department map request form and fee schedule (PDFs); an Agricultural StoryMap.
- ArcGIS org 'Fulton County, NY' (Wr8KQMbr3gSStkHQ) has 23 public feature services (e.g. DECPointsofInterest_FC_HC) and https://election-outreach-fulcony.hub.arcgis.com/ (0 items). Not a catalog.
- Name collisions: Fulton County GA (South Fulton GIS, GDOT project hubs), IL, IN, PA. All excluded.
- Region: the first directory listed Fulton under Southern Tier; it is in the Mohawk Valley.

## How to query it
```bash
No county catalog API. The org's public feature services are discoverable: curl "https://www.arcgis.com/sharing/rest/search?q=orgid:Wr8KQMbr3gSStkHQ%20AND%20type:%22Feature%20Service%22&num=1&f=json"
```
Result: total 23; first 'DECPointsofInterest_FC_HC' (2026-11-05)

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
