---
title: "When to use which portal"
description: "A guide to which New York data source answers which kind of question."
status: draft
---

# When to use which portal

New York's public data does not live in one place. The [New York data directory](../resources/ny-data-portal-registry.md) lists 140 sources across the state: state agencies, every county and large city, New York City and its agencies, and universities and nonprofits.

This page is the shortcut for the sources an AI assistant can reach today through a free connector (an MCP server). Those are the general data catalogs run by New York State and New York City, plus specialized systems for bills, contracts, spending, 311 requests and the law. It covers:

1. **The two general catalogs**, for finding datasets by topic.
2. **Specialized sources** for New York City and the state, and why a catalog search misses them.
3. **A step-by-step guide** for choosing.

For any other place or source, such as a county outside New York City, start with the [data directory](../resources/ny-data-portal-registry.md). New to a term? See the [glossary](glossary.md).

## The two general catalogs

| Portal | Domain | Platform | What it covers |
|---|---|---|---|
| **NYC Open Data** | `data.cityofnewyork.us` | Socrata | The City of New York's full dataset catalog — thousands of datasets spanning parks, business licenses, demographics, permits, transportation, health, education, and more. The broadest net for "does the city publish data on X." |
| **NYS Open Data** | `data.ny.gov` | Socrata | New York State's dataset catalog — state agency data: transportation, health, education, environment, economic development, and state government operations. |

Both are reachable through the same `socrata-mcp-server` tools (`search`, `get_data`, `fetch`) — just point `domain` at the portal you need. See [`mcp-configs/socrata-nyc-nys.mcp.json`](../mcp-configs/socrata-nyc-nys.mcp.json) for pre-wired aliases, and [`query-patterns.md`](query-patterns.md) for the actual query syntax.

**Use a general catalog when:** you don't know if a specific purpose-built tool exists for your question, you need to browse/discover datasets by keyword or category, or the data you need doesn't fit any of the specialized sources below.

### Beyond the two catalogs

The state and the city are not the only publishers. The [New York data directory](../resources/ny-data-portal-registry.md) lists 140 sources, including:

- **Other state catalogs**, such as Health Data NY (health.data.ny.gov) and the NYS GIS Clearinghouse (data.gis.ny.gov) for maps and boundaries.
- **State agencies and authorities** that run their own data services, like the MTA's real-time feeds and the Senate's Open Legislation API.
- **Every county and large city**, each with a details page. Buffalo and Nassau County use Socrata, so the same connector works there. Most others use ArcGIS (Esri), which needs different tools.
- **University and nonprofit sources**, such as Cornell's map repository and the NYU Furman Center's housing data.

Use the directory's filters to find sources by place, or to see which ones can be pulled with code.

## NYC's purpose-built sources (BetaNYC MCPs)

These cover NYC domains that a keyword search in the general catalog handles poorly — legislative process, procurement, government spending, service requests, and legal text are structured very differently from a typical open dataset.

| Source | MCP | What it covers | Why not just search the catalog |
|---|---|---|---|
| **NYC Council (Legistar)** | `nyc-council-mcp` | Bills, hearings, votes, committees, council members | Legislative data is relational (a bill has sponsors, committee history, vote records) — the catalog has flat tables, not this structure. |
| **NYC City Record** | `nyc-record-mcp` | Procurement notices — solicitations, contract awards, public hearings | Procurement notices are published as a daily record, not a queryable dataset. |
| **NYC Checkbook** | `nyc-checkbook-mcp` | Spending, contracts, budget, payroll, revenue (via NYC Comptroller's API) | The Comptroller's Checkbook API has its own schema and update cadence, separate from the Open Data catalog. |
| **NYC 311** | `nyc-311-mcp` | Service-request lookup, city-services calendar, emergency/weather alerts | 311's live API answers "what's the status of this specific request" — the catalog's 311 dataset is a bulk historical export, not a live lookup. |
| **NYC Charter, Administrative Code, Rules** | `nyc-charter-laws-rules` | Full legal text (offline corpus) | This is legal text, not tabular data — full-text search across chapters and sections, not a dataset schema. |

## NYS's purpose-built source

| Source | MCP | What it covers | Why not just search the catalog |
|---|---|---|---|
| **NYS Open Legislation** | `nys-openlegislation-mcp` | Bills, laws, members, committees, calendars, agendas, floor/hearing transcripts (150k+ records) | Same shape as NYC Council — legislative process data is relational, not a flat dataset. |

## Decision guide

1. **Is the question about a specific legal/legislative/procurement/spending/service-request process?** → Use the matching purpose-built MCP above.
2. **Is the question "does the city/state publish data on X" or "find me a dataset about Y"?** → Search the general Socrata catalog (NYC or NYS, per the question's jurisdiction).
3. **Not sure which government level has it?** → Search both catalogs; NYC and NYS often publish overlapping-but-different data (e.g., both publish some environmental and health data, at different granularity).
4. **Looking for county or city data outside New York City, or a source not listed here?** → Search the [New York data directory](../resources/ny-data-portal-registry.md). Many counties and cities run their own portal, separate from both catalogs above, and some have none.

## A note on trust

Every source table above traces back to an authoritative government system — Legistar, the Comptroller's Checkbook, the 311 system, the Charter itself, or the Socrata-hosted catalogs. That traceability is the point of this whole repo: an AI agent citing "NYC Checkbook, contract #12345" is verifiable; an agent guessing from training data is not. See [`grounding-ai-agents.md`](grounding-ai-agents.md) for why this matters and how to build for it.

## About this page

This is a draft, first written 2026-07-06 and updated 2026-11-05 to point to the data directory. The descriptions of what each source covers are a starting map, not a complete index. Spotted something wrong? [Give us feedback](../feedback.md).
