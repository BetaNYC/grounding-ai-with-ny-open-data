---
title: "Ulster County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Ulster County

**Region:** Hudson Valley · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | GIS Data (Dept. of Information Services) |
| URL | https://www.ulstercountyny.gov/Departments/Information-Services/GIS-Services/GIS-Data |
| Platform | County web page with direct downloads + ArcGIS Server 11.5 REST |
| API type | ArcGIS REST |
| API endpoint | https://gis.ulstercountyny.gov/server/rest/services |
| Key required | N |
| Dataset count | — (no catalog; about 10 county shapefile/GDB downloads listed on the page, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | The page returns 403 to curl (Cloudflare). It rendered in a browser as "GIS Data - Ulster County". It links "API Access for Developers: REST Services Directory" at gis.ulstercountyny.gov/server/rest/, which answers JSON (HTTP 200, v11.5). The tax parcel ZIP is on S3, last-modified 2026-09-18. |

## Notes
- **Change from the directory** (API N): the county page now links a public REST Services Directory. Its folders are Data, Hosted, Parcel_Fabric, Parcel_Viewer, REConnect and Utilities, and the `Parcel_Viewer/Tax_Parcel_Data` MapServer answers queries. The page is still a static list, not a catalog.
- Downloads include tax parcels (85 MB ZIP, `ucis-gis.s3.us-east-2.amazonaws.com/Parcel-Data/202607/`), contours (shapefiles and a 7 GB GDB), surface water, election districts, legislative districts, zoning and habitat cores. The page also links third-party data: NYS Clearinghouse, CUGIR and others.
- Custom data requests carry a minimum charge of $154.80, per the page.
- Topical Hub sites ("Ulster County Transportation Resiliency Project", Route 9W plan) are not catalogs. "Mid Ulster" sites are Northern Ireland.

## How to query it
```bash
curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36" "https://gis.ulstercountyny.gov/server/rest/services/Parcel_Viewer/Tax_Parcel_Data/MapServer/0/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":87237}` tax parcels.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
