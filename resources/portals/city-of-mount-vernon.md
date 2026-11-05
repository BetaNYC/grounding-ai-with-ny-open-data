---
title: "City of Mount Vernon — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# City of Mount Vernon

**Region:** NYC Metro / Long Island · **Entity type:** city · **Status:** no-portal

| Field | Value |
|---|---|
| Portal | No catalog (public ArcGIS Enterprise services + dashboards) |
| URL | https://gis.cmvny.com/server/rest/services |
| Platform | ArcGIS Enterprise 11.3 (self-hosted; no Sites/Hub catalog) |
| API type | ArcGIS REST (Enterprise portal + server) |
| API endpoint | https://gis.cmvny.com/server/rest/services ; portal search https://gis.cmvny.com/portal/sharing/rest/search |
| Key required | N |
| Dataset count | — (no catalog; 51 public Feature Service items in portal search, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | The city's own Infrastructure Dashboard page (mountvernonny.gov/2052) links to `gis.cmvny.com/portal/apps/experiencebuilder`. `cmvny.com` redirects to mountvernonny.gov. The City_Boundary layer returns NAME "Mount Vernon", 4.40 sq mi, in wkid 2260 (NAD83 / New York East). |

## Notes
- **Change from the directory:** the city has no catalog, but it does run a public ArcGIS Enterprise. It has 51 public feature services, including tax parcels (11,179), building complaints, EMS calls for 2024–2025, lead service lines, zoning districts and street resurfacing. It also has 8 Experience Builder dashboards. Portal search found 0 Sites or Hub catalog apps.
- The "OpenGov" link on the city site (/644/OpenGov) loads an OpenGov (ViewPoint Cloud) permitting storefront, and the city's procurement runs on procurement.opengov.com. Neither is a data catalog. The earlier note's point stands: this is not an open data portal.
- Legislation is on Legistar: https://mountvernonny.legistar.com/.

## How to query it
```bash
curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36" "https://gis.cmvny.com/server/rest/services/Assessor_TaxParcels/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":11179}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
