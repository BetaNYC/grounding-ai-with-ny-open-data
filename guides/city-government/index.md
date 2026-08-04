---
layout: profile
title: People who work in City government
who: City government · agency staff, data teams, budget and procurement
summary: >-
  A general walkthrough for people inside the thing being queried. Two chapters go deep: what the
  open data portals do that a search engine structurally cannot, and what Checkbook shows you about
  a vendor that your own agency's system never will.
script: /guides/city-government/city-government.html
deck: /guides/city-government/city-government-deck.html
description: Grounded AI and NYC open data for city agency staff — open data portals, Checkbook, and how BetaNYC runs on the same tools.
---

## What the session covers

Every other script in this repo demos to someone outside government looking in. This audience works
inside it, which inverts two assumptions the other scripts make: **they already have better data than
you about their own operations**, and **"accountability" is the wrong frame**. The same Checkbook
query a watchdog hears as oversight, this room hears as procurement intelligence it is currently
missing.

- **The open data portals, in depth.** Five slides on why a search engine cannot answer a question
  like "how many 311 complaints has Brooklyn filed since July 1, by type." A search index returns
  documents somebody already wrote. **An aggregate over live rows is not a document.**
- **Checkbook NYC**, and the cross-agency view no single agency can assemble: one vendor, every
  agency, one fiscal year.
- **The other seven connectors**, at a glance rather than in depth.
- **What happened when we reported a problem to an agency** — answered in two days, and the residual
  fault turned out to be ours.
- **How BetaNYC runs on the same tools:** the six-phase newsletter pipeline and its human gate, a
  WCAG 2.1 AA audit of our own site, and a membership-gated Discord that revokes access nightly.

## The finding the Checkbook chapter is built on

Asking Checkbook what the City paid Microsoft in FY2026 returns **49 checks and $14,482,518.24**
across roughly two dozen agencies. Complete, correct, verifiable, and **still not the number you
wanted**.

The City's Microsoft enterprise license agreement is **$53,006,444.85**, in two checks, paid to
**Dell Marketing LP**. Most large software is bought through a reseller, so the vendor on the check
is not the vendor you asked about, and a payee-name search never sees it.

<div class="note" markdown="1">
**Do not sum those two figures.** We have not established they are disjoint, and the claim on the
slide is about the search, not about a citywide total. The deck says so on the slide and again in
its presenter notes.
</div>

## What it is honest about

The deck concedes on its second slide that a published dataset is a poor substitute for an agency's
own system of record, and it ends by admitting we cannot tell anyone whether their IT policy permits
installing any of this. Both concessions are load-bearing with this audience.

The Checkbook and Socrata figures were run live on **2026-08-04**; three others are carried from
earlier work and keep their own dates. Every number in the script's provenance table names the call
behind it. Where our own documentation
contradicts itself — the newsletter scanner is "~130 sources" in two files and "~115" in a third —
the presenter notes say so rather than defending a figure we cannot source.
