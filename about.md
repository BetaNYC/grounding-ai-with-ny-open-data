---
layout: default
title: About
description: Why this site exists, which guide answers which question, who built it, how we use AI, and how to reuse, correct, or support it.
page_class: about-page
updated: 2026-11-10
---

# About Grounding AI with NY Open Data

<p class="lede">A practical resource for grounding AI agents in authentic, verifiable New York City
and New York State open data, instead of letting them guess. Built by BetaNYC.</p>

<div class="notice" markdown="1">
**This is a draft.** The project was started July 6, 2026. Everything in it, including the structure,
the guides, and the data directory, is a first pass under active review.
</div>

<nav class="contents" aria-labelledby="on-this-page" markdown="1">
<h2 id="on-this-page">On this page</h2>

- [Why this exists](#why-this-exists)
- [Which guide answers my question?](#which-guide)
- [What it costs](#what-it-costs)
- [Downloads](#downloads)
- [Built by BetaNYC](#built-by-betanyc)
- [How we use AI](#ai)
- [Licensing](#licensing)
- [Contributing](#contributing)
- [Support our work](#support-our-work)
</nav>

## Why this exists {#why-this-exists}

Ask an ordinary AI assistant which City Council bill covers broadband access and it will give you a
confident answer with an official-looking bill number. Often the number is from the wrong session.
Sometimes it does not exist at all. Nothing in the answer tells you which.

The tools here close that gap. The assistant queries the City's own systems while you watch, and
every claim it makes resolves to a record you can open. **When the data cannot answer your question,
it says so instead of guessing** — which turns out to be the more useful half.

## Which guide answers my question? {#which-guide}

<div class="table-wrap" markdown="1">

| Your question | Where to look |
|---|---|
| Which portal has the dataset I need? | [When to use which portal]({{ '/guides/when-to-use-which-portal.html' | relative_url }}): what each portal and each BetaNYC connector covers, and a step-by-step guide for choosing. |
| Which public data sources cover my county or city? | The [New York data directory]({{ '/resources/ny-data-portal-registry.html' | relative_url }}): 140 sources, searchable by place or topic, with a [page for each county and city]({{ '/resources/portals/README.html' | relative_url }}). |
| How do I search, pull and compare NYC and state datasets? | [Query patterns]({{ '/guides/query-patterns.html' | relative_url }}): the steps an AI assistant follows with the Socrata connector on NYC Open Data and data.ny.gov. |
| What should I actually type into my assistant? | [Sample prompts]({{ '/guides/user-journeys.html' | relative_url }}): user stories and worked prompts for each connector, plus journeys that follow one thread through several systems. |
| Why does it matter that an answer cites a source? | [Why grounding matters]({{ '/guides/grounding-ai-agents.html' | relative_url }}): prompt and verification patterns for people building with AI. |
| How do I run a demo for an elected official, a community board, a class, or agency staff? | [The classes and demos]({{ '/#the-classes-and-demos' | relative_url }}): a run-it-live script for each audience, and a deck for some. |
| How do I get from a government URL to a public-records request? | The [FOIL methodology]({{ '/guides/good-government/foil-research-methodology.html' | relative_url }}) and its [worked example]({{ '/guides/good-government/archivesocial-worked-example.html' | relative_url }}). |
| How do I turn a Council hearing into a transcript? | [Decode a Council hearing]({{ '/guides/council-hearings/decode-a-council-hearing.html' | relative_url }}), and [the pipeline]({{ '/guides/council-hearings/hearing-transcripts-pipeline.html' | relative_url }}) behind it. |
| Where can I take a class on open data? | [Training BetaNYC and partners run]({{ '/guides/training-resources.html' | relative_url }}): Intro to Open Data, Open Data Ambassadors, and more. |
| What does this word mean? | The [glossary]({{ '/guides/glossary.html' | relative_url }}). |

</div>

## What it costs {#what-it-costs}

Nothing. The connectors are open source and MIT licensed, and **five of the eight need no API key
and no account at all**. Three need a free key; registration is the only friction. The guides are
CC BY-SA 4.0 — fork them, correct them, and use them in your own room.

## Downloads {#downloads}

- **The data directory:** as a [CSV file]({{ '/resources/ny-data-portal-registry.csv' | relative_url }})
  and a [JSON file]({{ '/resources/ny-data-portal-registry.json' | relative_url }}). The JSON is the
  source of truth; the page and the CSV are generated from it.
- **The MCP config file:** [`socrata-nyc-nys.mcp.json`]({{ '/mcp-configs/socrata-nyc-nys.mcp.json' | relative_url }}),
  a drop-in setup for switching between the NYC and NYS portals. No API key is required for either
  portal.

## Built by BetaNYC {#built-by-betanyc}

[BetaNYC](https://beta.nyc) is New York's civic organization dedicated to improving lives through
public interest technology, open data, and civic design. We build tools, train the public, and
advocate for a more transparent, accountable, and participatory city government.

This project is one piece of a larger effort to make government data usable. Related work:

- **[BetaNYC/New-York-City-Budget](https://github.com/BetaNYC/New-York-City-Budget)**: structured NYC
  Council budget data, parsed from the Council's own workbooks and published as
  `@betanyc/nyc-budget-mcp`.
- **BetaNYC's eight public MCP servers**:
  [nyc-council-mcp](https://github.com/BetaNYC/nyc-council-mcp),
  [nyc-record-mcp](https://github.com/BetaNYC/nyc-record-mcp),
  [nyc-checkbook-mcp](https://github.com/BetaNYC/nyc-checkbook-mcp),
  [nyc-311-mcp](https://github.com/BetaNYC/nyc-311-mcp),
  [nyc-charter-laws-rules](https://github.com/BetaNYC/nyc-charter-laws-rules),
  [nys-openlegislation-mcp](https://github.com/BetaNYC/nys-openlegislation-mcp),
  [ny-data-registry-mcp](https://github.com/BetaNYC/ny-data-registry-mcp), and
  `@betanyc/nyc-budget-mcp`. They are agent tools for NYC and NYS government data.

## How we use AI {#ai}

BetaNYC uses AI tools openly and with human accountability. This resource was itself developed with
AI assistance (Anthropic's Claude) under the direction and review of BetaNYC staff. The guides and
the data directory are a first pass under active review, drafted with AI and human-checked rather
than published as finished machine output.

Fittingly for a project about grounding, the data directory points to **real, official** NYC and NYS
open data sources. Anyone following these guides connects their agent to the actual public record,
not a language model's memory of it.

Read [BetaNYC's AI policy](https://www.beta.nyc/about/ai-policy/). Questions about our approach:
[hello@beta.nyc](mailto:hello@beta.nyc).

## Licensing {#licensing}

The guides and reference material are released under
**[Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)**.
You are free to share and adapt this material for any purpose, including commercially, as long as
you give appropriate credit and license your own contributions under the same terms. The connectors
are MIT licensed and public on [GitHub](https://github.com/BetaNYC).

If you use or adapt this material, please attribute **BetaNYC** and link back to
[the repository](https://github.com/BetaNYC/grounding-ai-with-ny-open-data).

## Contributing {#contributing}

This is a working draft. Issues and pull requests are welcome, especially corrections to the data
directory. If a listed source is wrong, dead, or missing, please flag it. The
[feedback page]({{ '/feedback.html' | relative_url }}) has a short form for each kind of report.

## Support our work {#support-our-work}

Freedom isn't free. [Support BetaNYC](https://beta.nyc/donate/).
