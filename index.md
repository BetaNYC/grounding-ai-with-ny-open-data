---
layout: default
title: Home
description: Free, open tools that let an AI assistant answer questions about New York City using the city's actual public records.
---

# Ask New York City a question

<p class="lede">These are free, open tools that let an AI assistant answer questions about New York
City using the city's <strong>actual public records</strong> — not what a language model remembers.
Every answer comes back with an identifier you can open in a browser and check yourself.</p>

<div class="note" markdown="1">
**This repository is a draft.** It was started 2026-07-06 and is under active review. Figures in the
demo scripts carry the date they were verified. Where something could not be verified, the material
says so rather than implying it was checked.
</div>

## Why this exists

Ask an ordinary AI assistant which City Council bill covers broadband access and it will give you a
confident answer with an official-looking bill number. Often the number is from the wrong session.
Sometimes it does not exist at all. Nothing in the answer tells you which.

The tools here close that gap. The assistant queries the City's own systems while you watch, and
every claim it makes resolves to a record you can open. **When the data cannot answer your question,
it says so instead of guessing** — which turns out to be the more useful half.

## The classes and demos

Each one is a run-it-live script written for a specific room. Same tools throughout; what changes is
the arc, the examples, and what the audience already knows.

<div class="cards" markdown="0">

<div class="card">
  <div class="who">Elected officials</div>
  <h3>City Council districts</h3>
  <p>What is happening in a member's own district: their 311 complaints, their legislation, their
  discretionary funding, and the agencies they question at hearings.</p>
  <div class="links">
    <a class="btn" href="{{ '/guides/council-members/district-04/' | relative_url }}">District 4</a>
    <a class="btn" href="{{ '/guides/council-members/district-10/' | relative_url }}">District 10</a>
  </div>
</div>

<div class="card">
  <div class="who">Elected officials</div>
  <h3>State legislators</h3>
  <p>The same idea for Albany, built on New York State Open Legislation rather than the Council's
  system — a different spine, so a different set of questions.</p>
  <div class="links">
    <a class="btn" href="{{ '/guides/state-legislators/senate-district-59/' | relative_url }}">Senate District 59</a>
  </div>
</div>

<div class="card">
  <div class="who">Community boards</div>
  <h3>Community district data</h3>
  <p>Service requests, capital projects, and land use for a single community district, assembled
  without a data team.</p>
  <div class="links">
    <a class="btn" href="{{ '/guides/community-boards/manhattan-cb1/' | relative_url }}">Manhattan CB1</a>
  </div>
</div>

<div class="card">
  <div class="who">Faculty and curriculum staff</div>
  <h3>Teaching with public data</h3>
  <p>Framed around what the material teaches rather than what the tools do. The failure mode is the
  lesson: students can see a wrong answer and a checkable one side by side.</p>
  <div class="links">
    <a class="btn" href="{{ '/guides/educators/cuny-liberal-arts/' | relative_url }}">Liberal arts &amp; gen ed</a>
    <a class="btn" href="{{ '/guides/educators/cuny-cs-curriculum/' | relative_url }}">CS curriculum</a>
  </div>
</div>

<div class="card">
  <div class="who">Watchdogs and newsrooms</div>
  <h3>Following the money</h3>
  <p>For people who can already find the data. What costs them is the assembly — one vendor across
  every district, or money that was announced and then quietly withdrawn.</p>
  <div class="links">
    <a class="btn" href="{{ '/guides/good-government/reinvent-albany/' | relative_url }}">Reinvent Albany</a>
  </div>
</div>

<div class="card">
  <div class="who">Anyone doing contract research</div>
  <h3>FOIL methodology</h3>
  <p>How to get from a government URL to a filed public-records request, with a worked example that
  follows one real contract end to end.</p>
  <div class="links">
    <a class="btn" href="{{ '/guides/good-government/foil-research-methodology.html' | relative_url }}">The method</a>
    <a class="btn" href="{{ '/guides/good-government/archivesocial-worked-example.html' | relative_url }}">Worked example</a>
  </div>
</div>

</div>

## Start here if you are setting this up

<div class="cards" markdown="0">

<div class="card">
  <h3>Which portal has what</h3>
  <p>New York has more than one open data portal and they do not overlap cleanly. This is the
  decision guide for finding the right one before you write a query.</p>
  <div class="links"><a class="btn" href="{{ '/guides/when-to-use-which-portal.html' | relative_url }}">Read it</a></div>
</div>

<div class="card">
  <h3>Query patterns</h3>
  <p>Copy-paste patterns that work: searching the catalog, fetching a dataset, and joining across
  two portals. Includes the traps that return real-looking wrong answers.</p>
  <div class="links"><a class="btn" href="{{ '/guides/query-patterns.html' | relative_url }}">Read it</a></div>
</div>

<div class="card">
  <h3>Sample prompts</h3>
  <p>What to actually type. User stories and worked prompts for each connector, plus cross-source
  journeys that follow one thread through several systems.</p>
  <div class="links"><a class="btn" href="{{ '/guides/user-journeys.html' | relative_url }}">Read it</a></div>
</div>

<div class="card">
  <h3>Why grounding matters</h3>
  <p>The argument underneath all of this, for people building with AI: why an answer without a
  checkable source is worth less than no answer.</p>
  <div class="links"><a class="btn" href="{{ '/guides/grounding-ai-agents.html' | relative_url }}">Read it</a></div>
</div>

</div>

## What it costs

Nothing. The connectors are open source and MIT licensed, and **four of the seven need no API key
and no account at all**. Three need a free key; registration is the only friction. The guides are
CC BY-SA 4.0 — fork them, correct them, and use them in your own room.

## Also here

- [Directory of New York open data portals]({{ '/resources/ny-open-data-portals.html' | relative_url }}) — which counties and municipalities run one, with API notes
- [Training BetaNYC and partners run]({{ '/guides/training-resources.html' | relative_url }}) — Intro to Open Data, Open Data Ambassadors, and more
- [The MCP config file]({{ '/mcp-configs/socrata-nyc-nys.mcp.json' | relative_url }}) — drop-in setup for switching between the NYC and NYS portals
