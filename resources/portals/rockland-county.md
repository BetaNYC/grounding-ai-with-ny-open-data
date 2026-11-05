---
title: "Rockland County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Rockland County

**Region:** NYC Metro / Long Island · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Rockland County GIS Portal |
| URL | https://www.rocklandgis.com/portal/apps/sites/#/data |
| Platform | ArcGIS Enterprise 11.3 (self-hosted Portal + Sites) |
| API type | ArcGIS REST (Enterprise portal sharing API + ArcGIS Server) |
| API endpoint | https://www.rocklandgis.com/arcgis/rest/services ; portal search https://www.rocklandgis.com/portal/sharing/rest/search |
| Key required | N |
| Dataset count | — (no single dataset count; public portal items, 2026-11-05: 219 Shapefile, 39 File Geodatabase, 17 Feature Service, 24 Map Service) |
| Last verified | 2026-11-05 |
| Evidence | The root meta-refreshes to /portal/apps/sites/#/data. Portal `self` returns name "Rockland County Portal", access public, ArcGIS Enterprise 11.3.0. The Hosted/Jurisdictions layer returns 24 features, including Airmont and Chestnut Ridge (Rockland villages). The default extent is around lon −74.24..−73.79. |

## Notes
- **API classification settled** (was UNCONFIRMED): both the Enterprise portal sharing REST API and the ArcGIS Server REST directory (`/arcgis/rest/services`) answer anonymous JSON requests. API: Y, no key.
- **Trap:** the site's firewall returns 403 to non-browser User-Agents (a bare `Mozilla/5.0` was blocked; a full browser UA string worked). Send a full browser User-Agent. `/server/rest/services` is 404; the server path is `/arcgis/`.
- `q=*` portal searches return 0. Search by type (e.g. `type:"Shapefile"`) instead.
- Not to confuse with Rockland, **Maine** (`rocklandme-realtermenergy` Hub). https://www.envisionrockland.com is the county comprehensive-plan Hub, not the data catalog.

## How to query it
```bash
curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36" "https://www.rocklandgis.com/arcgis/rest/services/Hosted/Jurisdictions/FeatureServer/0/query?where=1%3D1&returnCountOnly=true&f=json"
```
Result (2026-11-05): `{"count":24}` municipal jurisdictions.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
