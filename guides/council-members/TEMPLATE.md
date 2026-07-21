---
status: DRAFT
---

# Demo script — Council District [NN] ([MEMBER NAME])

> **TEMPLATE.** Copy this file to `district-[NN].md` and fill every `[BRACKETED]` placeholder. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to Council Member **[MEMBER NAME]** and staff. District [NN] covers **[NEIGHBORHOODS]**.

Companion to the general [`../user-journeys.md`](../user-journeys.md) catalog, framed for a Council audience: their district's data, their own legislation, their discretionary funding, their oversight.

---

## Before you start (2 min)

- Have the agent open with the MCPs connected.
- Confirm the member's district number is **[NN]** and note the overlapping community district(s): **[COMMUNITY DISTRICT(S)]**.
- Optional but powerful: keep one official portal tab open ([Legistar](https://legistar.council.nyc.gov), [Checkbook NYC](https://www.checkbooknyc.com), or [NYC Open Data](https://data.cityofnewyork.us)) so you can show a number is real.

**Opening line:**
> "I'm going to ask an AI the questions your office fields every week — but this one is wired into the actual city and state record. Watch where the numbers come from."

---

## Act 1 — Your district, right now (3 min)

**Prompt:**
> "What were the top 311 complaint types in Council District [NN] over the last 30 days?"

**What to say:** "Live 311 data through BetaNYC's 311 MCP — the same complaints your constituents file every day, summarized in one question."

---

## Act 2 — Grounded vs. ungrounded (2 min)

**Prompt:**
> "What legislation has Council Member [MEMBER NAME] introduced in the last year, and where is each bill in the process?"

**What to say:** "An ordinary chatbot will invent bill numbers or give you last term's list. This one reads the Council's own Legistar system — current sponsors, current status, real Intro numbers you can cite."

---

## Act 3 — Your legislation meets your funding (4 min)

The act a Council audience cares about most. Make it about *them*.

**Prompt (step one — the allocation):**
> "Show the FY[YYYY] NYC Council discretionary (Schedule C) awards sponsored by council member [SURNAME]."

**Prompt (step two — the check):**
> "Now check NYC Checkbook for FY[YYYY] spending paid to [LARGEST RECIPIENT ORG]."

**What to say:** "It just moved from where the money is *allocated* — the discretionary budget — to where it's actually *spent*, in Checkbook. That's the reconciliation your office does by hand, in one question."

**Look for a `Tax Levy Elected Officials` budget code** in the Checkbook results. That is discretionary money appearing as an actual disbursement, and calling it out by name is the strongest moment available in this act.

> ⚠️ **Ask by sponsoring member surname, never by district number.** The Schedule C data keys on the sponsoring member, and the budget tool has **no district filter**. A district-shaped question does not fail loudly — it silently returns *citywide* awards that an agent will summarize as the district's funding. See the parameter table in the presenter-notes section below.

---

## Act 4 — An issue you're working on, sourced (4 min)

Ask the office for a live priority, or pre-fill one here.

**Prompt:**
> "For Council District [NN] and the issue of [ISSUE]: pull recent 311 data that quantifies it, find any related NYC Council legislation and upcoming hearings, and check NYS Open Legislation for a state bill on the same topic. Give me a short, sourced brief."

**What to say:** "Every line traces to an official source — city data, the Council's own system, and Albany's. If staff challenges a number, the agent shows where it came from. Grounded, not improvised."

---

## Closing (1 min)

> "BetaNYC built these connectors and guides in the open. Any office can point its own AI at the real city and state record instead of trusting it to remember. If there's a question your team asks constantly, that's exactly the kind of user journey we want to add."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Full prompt catalog: [`../user-journeys.md`](../user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes (verified [YYYY-MM-DD])

**Dry-run every prompt above against the live MCPs before the meeting, and record what actually happened here.** A script without verified notes is a draft, not a demo. Delete this instruction line once you've filled the section in.

### ⚠️ Carried forward — these MCPs silently drop unknown parameters

Several servers accept parameters that are not in their schema, ignore them, and return **unfiltered** results with no error. An agent that guesses a plausible parameter name gets plausible garbage, and nothing in the response reveals it.

**Verified-correct parameter names (2026-07-21):**

| Task | Correct parameter | Do **not** use |
|---|---|---|
| Schedule C awards by member | `council_member="[SURNAME]"` (surname substring) | `council_district`, `sponsor` |
| Checkbook payments to an org | `payee_name="[ORG NAME]"` | `vendor` |
| Socrata aggregate query | separate `select` / `where` / `group` / `order` / `limit` | a single `soql` blob |
| 311 by council district | `council_district='04'` — **zero-padded string** | `'4'` (returns zero rows silently) |

### ⚠️ Two more silent traps, both verified 2026-07-21

**Zero-padding.** In the 311 dataset (`erm2-nwe9`), council districts are zero-padded strings. `council_district='4'` returns **zero rows with no error**; `'04'` returns thousands. **This affects districts 1–9 only** — a two-digit district will never reveal the bug, so a script that worked for District 10 will fail silently for District 4.

**Surname substring collisions.** `council_member` matches as a substring and will return the **wrong member**. `council_member="Powers"` returns Selvena **Brooks-Powers'** District 31 awards. Check the surname in the returned rows before reading any figure aloud, and check your member's surname for collisions before the meeting.

### Also verified — do not misread these as findings

- **`get_voting_record` returns `[]` for every member tested**, including multi-term incumbents. An empty result is a tool limitation, not a statement about your member. Never present it as "correctly shows no votes."
- **`search_legislation` matches bill titles, not subject matter.** A reasonable single keyword can return `[]` simply because the word isn't in any title (`"encampment"` finds nothing). Try a synonym before concluding no legislation exists.
- **`get_upcoming_hearings` is extremely verbose** — land-use items can run to hundreds of block-and-lot references. Ask for a summary or cap the limit.
- **A newly seated member's first Schedule C is the fiscal year after they took office.** Querying the current FY by their surname correctly returns nothing. Don't read it as a tool failure — and don't build Act 3 on the wrong year.

### Carried-forward gotchas — confirm these still hold on your dry run

- **311 aggregates come from Socrata (`erm2-nwe9`), not `nyc-311-mcp`.** That server does single lookups, the service calendar, and alerts — not "top complaint type" roll-ups. Don't announce the wrong server. The district field is `council_district`, as a string. **Check `is_sample` in the response** — if `true`, you got a raw row sample, not an aggregate, and the numbers are meaningless.
- **⚠️ Always bound a Socrata catalog search with `limit`** — unbounded searches have returned 581 KB by inlining polygon geometry.
- **⚠️ Council legislation search matches keywords, not concepts.** Multi-word conceptual phrases return `[]`. If a search is empty on stage, *shorten* it rather than rephrasing.
- **Checkbook `smart_search` is blocked** by an Incapsula WAF challenge — don't demo it. `search_contracts` has no vendor-name filter; use `search_spending` with `payee_name`. `search_spending` requires `fiscal_year` or `issue_date_from`.

### Figures and their provenance

Record every number you plan to say out loud, and how you got it:

| Claim | How verified |
|---|---|
| [figure] | [tool + parameters] |

**Also record what you did _not_ verify.** If you are unsure of the district's neighborhood composition, say so here rather than reciting a list to a room that knows the district better than you do.

---

## Backup prompts (if one falls flat)

- "Is alternate-side parking suspended this week? What's on the city-service calendar?" *(311 — always returns something)*
- "Who represents Council District [NN], and which committees do they sit on?" *(Council — clean, verifiable)*
- "What does the City Charter say about the Council's oversight powers?" *(Charter — resonates with this audience)*

**If asked "can it be wrong?"** — Yes, and that's the honest answer: the agent can misread, or a dataset can be stale. The safeguard is that every answer is *traceable* to a source you can check, which an ungrounded chatbot can't offer. Grounding doesn't make it infallible; it makes it accountable.
