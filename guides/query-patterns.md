---
title: "Query patterns: city and state open data"
description: "How to use the Socrata connector to search, pull and compare data from NYC Open Data and the state's data.ny.gov."
---

# Query patterns: city and state open data

This page is about one connector and two portals. The connector is the free Socrata MCP server, `socrata-mcp-server`. The two portals are New York City's **NYC Open Data** (data.cityofnewyork.us) and New York State's **Open NY** (data.ny.gov). Both run on Socrata, so the same connector works on each.

It walks through the steps an AI assistant follows to find a dataset, pull the records, and compare what the city and the state publish on the same topic. It is for people who have connected an assistant and want to know what to ask it to do, in what order.

The steps describe what each tool is for, not exact code. Check parameter names against the connector's own documentation. New to a term? See the [glossary](glossary.md).

## Before you start

The ready-made config file, [`mcp-configs/socrata-nyc-nys.mcp.json`](../mcp-configs/socrata-nyc-nys.mcp.json), sets up two copies of the connector:

- `socrata-nyc`, pointed at NYC Open Data.
- `socrata-nys`, pointed at data.ny.gov.

Each copy has the same three tools: `search`, `get_data` and `fetch`. You don't need an API key.

## 1. Search a catalog for a dataset

Ask the assistant to `search` for a keyword, using the copy for the portal you want. It returns matching datasets with their descriptions and IDs.

A dataset ID is a short code of two groups of four letters and numbers, like `abcd-1234`. Always search first if you don't already know the ID. The city's ID and the state's ID for similar data are different.

## 2. Pull data from a dataset

Once you have an ID, ask the assistant to pull records with `get_data` or `fetch`, using the same copy. Ask it to filter, sort and limit the results on the portal's side, with Socrata's query language (SoQL), rather than downloading everything and filtering afterward. That is faster and avoids hitting limits.

## 3. Compare the city and the state

Many topics, such as environmental permits or health facilities, appear on both portals, at different levels of detail. To compare them:

1. Run steps 1 and 2 on NYC Open Data with `socrata-nyc`.
2. Run the same steps on data.ny.gov with `socrata-nys`.
3. Match the results on something they share, like an address, a facility ID, or a borough or county name.

The two portals don't link their datasets automatically, so the matching in step 3 is done by hand. Check that both datasets cover the same dates and places before you compare numbers.

## 4. Know when a catalog is the wrong tool

Bills, contracts, city spending, 311 requests and legal text live in their own systems, and a catalog search handles them poorly. Use the matching BetaNYC connector instead. [When to use which portal](when-to-use-which-portal.md) explains which one.

## Other Socrata portals

A few other New York portals also run on Socrata, such as Health Data NY, Buffalo's and Nassau County's. To reach one, add another copy of the connector to the config with its `DATA_PORTAL_URL` set to that portal's address. To find them all, filter the [New York data directory](../resources/ny-data-portal-registry.md) by **Built on: Socrata**.

## Rate limits

If you make many requests and start getting blocked, add a free app token as `SOCRATA_APP_TOKEN` in the connector's settings. Never put the token in a file you share or commit to a repository.

## About this page

This is a draft, first written 2026-07-06 and revised 2026-11-05. It describes the steps, not exact code. Spotted something wrong or unclear? [Give us feedback](../feedback.md).
