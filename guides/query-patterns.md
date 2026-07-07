---
status: DRAFT
---

# Query patterns

> **DRAFT.** First pass, 2026-07-06. Patterns below are conceptual and describe the tool calls, not exact code — verify parameter names against the current `socrata-mcp-server` docs before relying on them.

Common query moves using the `socrata-mcp-server` MCP tools (`search`, `get_data`, `fetch`), switching between NYC and NYS by domain.

## 1. Search the catalog for a dataset

Use `search` with a keyword and the target domain to find relevant datasets before querying data directly.

- **NYC:** search for datasets matching a keyword, `domain: "data.cityofnewyork.us"` (or the pre-wired `socrata-nyc` alias, no domain param needed).
- **NYS:** same search, `domain: "data.ny.gov"` (or `socrata-nys` alias).

This returns dataset identifiers (a 4-4 alphanumeric code, e.g. `abcd-1234`) and metadata — always search first if you don't already know the dataset ID.

## 2. Fetch data from a known dataset

Once you have a dataset ID, use `get_data` (or `fetch`) with that ID and the same domain to pull records. Use SoQL query parameters to filter, sort, and limit results server-side rather than pulling the whole dataset and filtering locally.

## 3. Cross-portal lookup

When a question spans both jurisdictions (e.g., "compare state and city environmental permits for the same facility"), run the same search/fetch pattern twice — once per domain — and reconcile results by a shared key (address, facility ID, borough/county name). The two catalogs do not share a join key automatically; matching is manual.

## 4. When the general catalog isn't the right tool

If the question is legislative, procurement, spending, 311, or legal-text in nature, use the matching purpose-built BetaNYC MCP instead of searching the general catalog — see [`when-to-use-which-portal.md`](when-to-use-which-portal.md) for the full decision guide.

## Rate limits

Neither portal requires an API key for read access. Add `SOCRATA_APP_TOKEN` to your MCP config's env block (see [`mcp-configs/socrata-nyc-nys.mcp.json`](../mcp-configs/socrata-nyc-nys.mcp.json)) if you're hitting anonymous rate limits — never commit the token value to a repo.
