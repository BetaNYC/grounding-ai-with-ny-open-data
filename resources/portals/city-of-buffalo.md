---
title: "City of Buffalo — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# City of Buffalo

**Region:** Western NY (Finger Lakes + WNY) · **Entity type:** city · **Status:** live

| Field | Value |
|---|---|
| Portal | Open Data Buffalo |
| URL | https://data.buffalony.gov/ |
| Platform | Socrata |
| API type | SODA |
| API endpoint | https://data.buffalony.gov/resource/<dataset-id>.json |
| Key required | N |
| Dataset count | 139 (Socrata Discovery API, 2026-11-05; 355 assets of all types) |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200; Socrata Discovery API with domains=data.buffalony.gov returns resultSetSize 139 (only=dataset) and 355 (all assets); SODA query on Crime Incidents (d6g9-xbgu) returned a row. |

## Notes
- SODA works without a key; an app token is optional and only raises rate limits.
- Erie County's own GIS resources page links here as a data source.

## How to query it
```
curl 'https://data.buffalony.gov/resource/d6g9-xbgu.json?$limit=1&$select=case_number,incident_datetime,incident_type_primary'
```

Returned one Crime Incidents row: `{"case_number":"09-2820596","incident_datetime":"2009-10-09T03:19:00.000","incident_type_primary":"LARCENY/THEFT"}`.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
