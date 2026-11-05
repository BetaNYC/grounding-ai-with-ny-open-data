---
title: "New York City — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# New York City

**Region:** NYC Metro / Long Island · **Entity type:** city · **Status:** live

| Field | Value |
|---|---|
| Portal | NYC Open Data |
| URL | https://data.cityofnewyork.us/ |
| Platform | Socrata (Tyler Technologies) |
| API type | SODA |
| API endpoint | https://data.cityofnewyork.us/resource/{dataset-id}.json ; catalog https://api.us.socrata.com/api/catalog/v1?domains=data.cityofnewyork.us |
| Key required | N |
| Dataset count | 2,412 datasets (3,028 assets) (Socrata Discovery API, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | The root 301s to opendata.cityofnewyork.us, then to https://www.nyc.gov/opendata, which returns 403 to curl (Akamai bot block). The resource API returns 200 with `X-Socrata-Region: aws-us-east-1-fedramp-prod`. |

## Notes
- Run by the NYC Office of Technology and Innovation (OTI). It covers all five boroughs, which are also five of the state's 62 counties (Bronx, Kings, New York, Queens, Richmond).
- An app token is optional. Anonymous calls work but are throttled more heavily.
- The landing page blocks scripted fetches. Use the API endpoints, or a browser, for the front end.
- City agency data services: see the registry's tier 3 NYC section.

## How to query it
```bash
curl -s "https://data.cityofnewyork.us/resource/erm2-nwe9.json?\$select=count(*)&\$where=created_date>'2026-11-01'"
```
Result (2026-11-05): `[{"count":"32521"}]`, 311 service requests created since 2026-11-01.

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
