---
title: "Nassau County — open data"
status: draft
last_verified: 2026-11-05
tier: 3
---

# Nassau County

**Region:** NYC Metro / Long Island · **Entity type:** county · **Status:** live

| Field | Value |
|---|---|
| Portal | Open Nassau (+ Open Payroll / Open Budget / Open Checkbook) |
| URL | https://opendata.nassaucountyny.gov/ |
| Platform | Socrata (Tyler Technologies) |
| API type | SODA |
| API endpoint | https://opennassau.nassaucountyny.gov/resource/{dataset-id}.json ; catalog https://api.us.socrata.com/api/catalog/v1?domains=opennassau.nassaucountyny.gov |
| Key required | N |
| Dataset count | 17 datasets (60 assets) (Socrata Discovery API, 2026-11-05) |
| Last verified | 2026-11-05 |
| Evidence | HTTP 200 with an `X-Socrata-Region` header. Title "Open Nassau | Office of the Nassau County Comptroller". The Discovery API reports the canonical domain as `opennassau.nassaucountyny.gov`. |

## Notes
- Run by the Comptroller's office, not the County Executive.
- `opendata.` and `opennassau.nassaucountyny.gov` return the same catalog; the canonical domain in API results is `opennassau`.
- Open Payroll, Open Budget and Open Checkbook (`openpayroll.`, `openbudget.`, `opencheckbook.nassaucountyny.gov`) are separate Socrata Open Budget / Open Payroll apps. Each returns HTTP 200, and their pages reference Socrata / Tyler. They do not appear in the Discovery API as their own domains.

## How to query it
```bash
curl -s "https://opennassau.nassaucountyny.gov/resource/kwpd-uzf7.json?\$select=count(*)"
```
Result (2026-11-05): `[{"count":"5559"}]`, rows in "ARPA Total Spending".

← [All sources](../ny-data-portal-registry.md) · [County and city directory](../ny-open-data-portals.md)
