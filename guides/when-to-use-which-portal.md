---
status: DRAFT
---

# When to use which portal

> **DRAFT.** First pass, 2026-07-06. Coverage descriptions below are accurate as of this writing but not exhaustively verified against live catalogs — treat as a starting map, not a final index.

New York State and New York City each run their own general-purpose open data catalog, and NYC additionally has several purpose-built government data sources that a general catalog search won't surface well. This guide is a decision map: given a question, which source actually has the answer.

## The two general catalogs

| Portal | Domain | Platform | What it covers |
|---|---|---|---|
| **NYC Open Data** | `data.cityofnewyork.us` | Socrata | The City of New York's full dataset catalog — thousands of datasets spanning parks, business licenses, demographics, permits, transportation, health, education, and more. The broadest net for "does the city publish data on X." |
| **NYS Open Data** | `data.ny.gov` | Socrata | New York State's dataset catalog — state agency data: transportation, health, education, environment, economic development, and state government operations. |

Both are reachable through the same `socrata-mcp-server` tools (`search`, `get_data`, `fetch`) — just point `domain` at the portal you need. See [`mcp-configs/socrata-nyc-nys.mcp.json`](../mcp-configs/socrata-nyc-nys.mcp.json) for pre-wired aliases, and [`query-patterns.md`](query-patterns.md) for the actual query syntax.

**Use a general catalog when:** you don't know if a specific purpose-built tool exists for your question, you need to browse/discover datasets by keyword or category, or the data you need doesn't fit any of the specialized sources below.

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
4. **Looking for county or municipal data outside NYC?** → See [`resources/ny-open-data-portals.md`](../resources/ny-open-data-portals.md) — most NY counties and cities run their own separate portal, not part of either catalog above.

## A note on trust

Every source table above traces back to an authoritative government system — Legistar, the Comptroller's Checkbook, the 311 system, the Charter itself, or the Socrata-hosted catalogs. That traceability is the point of this whole repo: an AI agent citing "NYC Checkbook, contract #12345" is verifiable; an agent guessing from training data is not. See [`grounding-ai-agents.md`](grounding-ai-agents.md) for why this matters and how to build for it.
