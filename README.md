# Grounding AI with NY Open Data

> **Status: DRAFT.** This repository is newly started (2026-07-06). Everything in it — structure, guides, and the portal directory — is a first pass under active review, not a finished resource yet.

A practical resource for grounding AI agents in authentic, verifiable New York City and New York State open data — instead of letting them guess.

AI agents are only as trustworthy as what they're grounded in. This repo documents how BetaNYC connects agents to real government open data portals via [Socrata](https://dev.socrata.com/) MCP (Model Context Protocol) tooling, so answers about city and state data come from the actual public record, not a language model's memory of it.

---

## Built by BetaNYC

[**BetaNYC**](https://beta.nyc) is New York's civic organization dedicated to improving lives through public interest technology, open data, and civic design. We build tools, train the public, and advocate for a more transparent, accountable, and participatory city government.

This repo is one piece of a larger effort to make government data usable — see it alongside our related work:

- **[BetaNYC/New-York-City-Budget](https://github.com/BetaNYC/New-York-City-Budget)** — reconciled, structured NYC Council budget data (Schedule C, Terms & Conditions, Section 254), extracted deterministically from official PDFs.
- **BetaNYC's six public MCP servers** — [nyc-council-mcp](https://github.com/BetaNYC/nyc-council-mcp), [nyc-record-mcp](https://github.com/BetaNYC/nyc-record-mcp), [nyc-checkbook-mcp](https://github.com/BetaNYC/nyc-checkbook-mcp), [nyc-311-mcp](https://github.com/BetaNYC/nyc-311-mcp), [nyc-charter-laws-rules](https://github.com/BetaNYC/nyc-charter-laws-rules), [nys-openlegislation-mcp](https://github.com/BetaNYC/nys-openlegislation-mcp) — purpose-built agent tools for specific NYC/NYS government data domains.

**Support open civic data:** [beta.nyc](https://beta.nyc) · [donate](https://beta.nyc/donate) · [newsletter](https://beta.nyc)

---

## Index

| File | What it covers |
|---|---|
| [`mcp-configs/socrata-nyc-nys.mcp.json`](mcp-configs/socrata-nyc-nys.mcp.json) | Drop-in MCP config for switching between the NYC and NYS open data portals |
| [`guides/when-to-use-which-portal.md`](guides/when-to-use-which-portal.md) | What each portal (and each BetaNYC MCP) actually covers — a decision guide |
| [`guides/query-patterns.md`](guides/query-patterns.md) | Copy-paste SoQL query patterns: catalog search, dataset fetch, cross-portal lookups |
| [`guides/user-journeys.md`](guides/user-journeys.md) | User stories + sample prompts for each MCP, plus cross-source "crosswalk" journeys |
| [`guides/community-boards/`](guides/community-boards/) | Run-it-live demo scripts tuned per community board (e.g. Manhattan CB1) |
| [`guides/council-members/`](guides/council-members/) | Run-it-live demo scripts tuned per Council district, with a copy-me template |
| [`guides/educators/`](guides/educators/) | Run-it-live demo scripts for faculty and curriculum staff, framed around what the material teaches |
| [`guides/state-legislators/`](guides/state-legislators/) | Run-it-live demo scripts per NYS Senate/Assembly district, built on NYS Open Legislation |
| [`guides/grounding-ai-agents.md`](guides/grounding-ai-agents.md) | Why grounding matters, and prompt/verification patterns for agent builders |
| [`guides/training-resources.md`](guides/training-resources.md) | BetaNYC and partner training — Intro to Open Data, Open Data Ambassadors, and more |
| [`resources/ny-open-data-portals.md`](resources/ny-open-data-portals.md) | Directory of open data portals run by NY counties and municipalities, with API and platform notes |
| [`resources/research-plan-ny-open-data-portals.md`](resources/research-plan-ny-open-data-portals.md) | The scan plan behind the portal directory (goals, scope, methodology) — kept for transparency |

---

## Quick start

1. Copy the config in [`mcp-configs/socrata-nyc-nys.mcp.json`](mcp-configs/socrata-nyc-nys.mcp.json) into your own `.mcp.json`.
2. Read [`guides/when-to-use-which-portal.md`](guides/when-to-use-which-portal.md) to know which portal (or which BetaNYC MCP) actually has the dataset you need.
3. Use [`guides/query-patterns.md`](guides/query-patterns.md) for the actual query syntax.

No API key is required for either portal. An optional `SOCRATA_APP_TOKEN` raises rate limits — see the config file for where it goes.

---

## Repository layout

```
grounding-ai-with-ny-open-data/
├── README.md                                  ← you are here
├── LICENSE                                    ← CC BY-SA 4.0
├── mcp-configs/
│   └── socrata-nyc-nys.mcp.json               ← dual NYC/NYS Socrata MCP aliases
├── guides/
│   ├── when-to-use-which-portal.md            ← DRAFT — dataset coverage + decision guide
│   ├── query-patterns.md                      ← DRAFT — SoQL examples
│   ├── user-journeys.md                       ← DRAFT — user stories, sample prompts, crosswalks
│   ├── community-boards/                       ← DRAFT — per-board demo scripts (manhattan-cb1.md …)
│   ├── council-members/                        ← DRAFT — per-district demo scripts + TEMPLATE.md
│   ├── educators/                              ← DRAFT — faculty / curriculum demo scripts
│   ├── state-legislators/                      ← DRAFT — per-district state demos + TEMPLATE.md
│   ├── grounding-ai-agents.md                  ← DRAFT — grounding rationale + prompt patterns
│   └── training-resources.md                  ← DRAFT — classes and programs
└── resources/
    ├── ny-open-data-portals.md                ← DRAFT — county/municipal portal directory
    └── research-plan-ny-open-data-portals.md  ← the scan plan behind the directory
```

---

## AI use in this project

BetaNYC uses AI tools openly and with human accountability. This resource — a guide to grounding AI agents in authentic government open data — was itself developed with AI assistance (Anthropic's Claude) under the direction and review of BetaNYC staff. The guides and portal directory are a first pass under active review (see the DRAFT status at the top), drafted with AI and human-checked rather than published as finished machine output.

Fittingly for a repo about grounding: the portal directory points to **real, official** NYC and NYS open data sources, so anyone following these guides connects their agent to the actual public record — not a language model's memory of it.

Questions about our approach: hello@beta.nyc.

## Licensing

This repository is documentation and reference material, not software. It is released under **[Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)** — see [`LICENSE`](LICENSE). You are free to share and adapt this material for any purpose, including commercially, as long as you give appropriate credit and license your own contributions under the same terms.

If you use or adapt this material, please attribute **BetaNYC** and link back to this repository.

---

## Contributing

This is a working draft. Issues and pull requests are welcome, especially corrections to the portal directory — if a listed portal is wrong, dead, or missing, please flag it.

## Support our work

Freedom isn't free. [Support BetaNYC](https://beta.nyc/donate/).

## License

CC BY-SA 4.0 — Copyright (c) 2026 BetaNYC. See [`LICENSE`](LICENSE) for full terms.
