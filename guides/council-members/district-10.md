---
status: DRAFT
---

# Demo script — Council District 10 (Carmen N. De La Rosa)

> **DRAFT.** First pass, 2026-07-21. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to Council Member **Carmen N. De La Rosa** and staff. District 10 covers **Washington Heights and Inwood** in Northern Manhattan.
>
> **Every number in this script was pulled live on 2026-07-21 and is reproduced in the presenter notes.** If a live call disagrees with a figure here, trust the live call and say so out loud — that is the demo working, not failing.

Companion to the general [`../user-journeys.md`](../user-journeys.md) catalog, framed for a Council audience: their district's data, their own legislation, their discretionary funding, their oversight.

---

## Before you start (2 min)

- Have the agent open with the MCPs connected.
- District is **10**. Sponsoring-member surname as it appears in budget data is **De La Rosa** (with spaces).
- Keep one official tab open — [Legistar](https://legistar.council.nyc.gov), [Checkbook NYC](https://www.checkbooknyc.com), or [NYC Open Data](https://data.cityofnewyork.us) — so you can show a number is real.
- **Read the presenter notes at the bottom before you walk in.** Several natural-sounding prompts fail silently against these tools, and the failures look like successes.

**Opening line:**
> "I'm going to ask an AI the questions your office fields every week — but this one is wired into the actual city and state record. Watch where the numbers come from."

---

## Act 1 — Your district, right now (3 min)

**Prompt:**
> "What were the top 311 complaint types in Council District 10 over the last 30 days?"

**Expected shape of the answer** (verified 2026-07-21, 30 days back from that date — your run will differ):

| Complaint type | Count |
|---|---|
| Noise – Street/Sidewalk | 2,711 |
| Water System | 1,141 |
| Noise – Residential | 930 |
| Illegal Parking | 735 |
| Illegal Fireworks | 523 |

10,357 service requests in the district over the window.

**What to say:** "Live 311 data — the same complaints your constituents file every day, summarized in one question. Ten thousand requests in thirty days in your district alone."

**Where to linger:** Water System at #2 is unusual and specific to Northern Manhattan's older infrastructure. If the office reacts to it, that is your Act 4 topic — follow it.

---

## Act 2 — Grounded vs. ungrounded (2 min)

**Prompt:**
> "What NYC Council legislation on broadband access has been enacted recently, and is Council Member De La Rosa on it?"

**The verified answer:** **Int 1122-2024** — "a plan for expanding home access to broadband internet" — **Enacted 2025-11-08**, Committee on Technology. De La Rosa is among 28 sponsors.

**What to say:** "An ordinary chatbot will invent a bill number or hand you last term's list. This one reads the Council's own Legistar system — real Intro number, real enactment date, real sponsor list you can cite in a press release without checking."

**The reveal:** open [intro.nyc/1122-2024](https://intro.nyc/1122-2024). The URL resolves, the status matches. That short-link pattern is much better on a projector than a Legistar `LegislationDetail.aspx` URL.

---

## Act 3 — Your funding, from allocation to check (5 min)

The act a Council audience cares about most, and the strongest one in this script because it closes the loop.

### Step one — the allocation

**Prompt:**
> "Show the FY2026 NYC Council discretionary (Schedule C) awards sponsored by council member De La Rosa."

**The verified answer, re-verified live 2026-07-21: 105 awards, $2,165,000 total.**

> ⚠️ **Corrected — this was wrong by $1.2 million.** This script previously said "12 awards, $960,000." Re-running `search_awards(council_member="De La Rosa", fiscal_year=2026, limit=500)` returns **105 awards, $2,165,000**.
>
> Unlike the District 4 error, this one is **not** limit truncation — 12 is below any default limit. The underlying data has not changed since 2026-07-19 and the query code was never touched, so the original figure was wrong when it was written. **The same wrong figure is published in [New-York-City-Budget#37](https://github.com/BetaNYC/New-York-City-Budget/issues/37)**, where it was used as the example of the *correct* parameter working properly.
>
> The table below was internally inconsistent with it: the first five rows alone total $742,000.

The largest and most characteristic:

| Amount | Recipient | Purpose |
|---|---|---|
| $500,000 | Catholic Charities Community Services, Archdiocese of NY | Alianza Cultural Center |
| $87,000 | Department of Sanitation | Additional sanitation, CD 10 |
| $55,000 | Center for Employment Opportunities | Cleanup services, CD 10 |
| $50,000 | Dominican Women's Development Center | Anti-domestic violence program |
| $50,000 | Northern Manhattan Coalition for Immigrant Rights | Domestic abuse survivors programming |
| $30,000 | Community League of the Heights (CLOTH) | CD 10, NYC Cleanup |
| $25,000 | Friends of WHEELS | College & Career Pathways |
| $25,000 | NYC First, Inc. | Youth Robotics Leagues & STEM, CD 10 |

**What to say:** "That is your office's Schedule C, by organization, by dollar, by agency — the list your budget director keeps in a spreadsheet."

> **The BetaNYC-relevant beat, if you want it.** **Four** FY2026 awards sit under the **Digital Inclusion and Literacy Initiative**, **$90,000** in total (re-verified live 2026-07-21):
>
> | Amount | Recipient | Program |
> |---|---|---|
> | $25,000 | Friends of WHEELS | College & Career Pathways |
> | $25,000 | NYC First | Youth Robotics Leagues & STEM |
> | $20,000 | Business Outreach Center Network | Women's Digital Cooperative for Economic Empowerment |
> | $20,000 | Renaissance Technical Institute | Workforce Training |
>
> That is digital equity funded at the district level, and it is the natural bridge to what BetaNYC does. **Corrected:** this previously read "the last two awards... $50,000." The other two sat below the truncation line described above, so the error understated her digital-equity commitment by $40,000 — in the direction least favorable to the member, in her own office.

### Step two — the check

**Prompt:**
> "Now check NYC Checkbook for FY2026 spending paid to Community League of the Heights."

**The verified answer:** **32 payment records in FY2026**, including:

| Amount | Agency | Budget code |
|---|---|---|
| $238,840.00 | DYCD | 3548 (SONYC Public Schools) — COMPASS Program |
| $139,040.20 | DYCD | 9825 (Boro Needs) |
| $107,244.16 | DYCD | **3625 (Tax Levy Elected Officials)** |
| $46,500.00 | DYCD | 9825 (Boro Needs) |
| $33,000.00 | DYCD | **3625 (Tax Levy Elected Officials)** |

**What to say — this is the payoff, so slow down:**
> "Look at the budget code on those two. *Tax Levy Elected Officials.* That is discretionary money — Council member money — showing up as an actual check to an actual organization in your district. We just went from where the money was *allocated* in the adopted budget to where it was *spent*, across two separate city systems, in two questions. That is the reconciliation your office does by hand."

---

## Act 4 — An issue you're working on, sourced (4 min)

Ask the office for a live priority. If they don't offer one, Water System complaints from Act 1 is a strong default for this district.

**Prompt:**
> "For Council District 10 and the issue of [ISSUE]: pull recent 311 data that quantifies it, find any related NYC Council legislation and upcoming hearings, and check NYS Open Legislation for a state bill on the same topic. Give me a short, sourced brief."

**What to say:** "Every line traces to an official source — city data, the Council's own system, and Albany's. If staff challenges a number, the agent shows where it came from."

**Honest caveat to say out loud if the brief looks thin:** "Notice it didn't pad. When there's no state bill on the topic, it says so instead of inventing one. That restraint is the whole product."

---

## Closing (1 min)

> "BetaNYC built these connectors and guides in the open. Any office can point its own AI at the real city and state record instead of trusting it to remember. If there's a question your team asks constantly, that's exactly the kind of user journey we want to add."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Full prompt catalog: [`../user-journeys.md`](../user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes (figures verified 2026-07-21 · MCP behavior re-verified 2026-07-21)

**Read this section before presenting.** Every item below was found by dry-running the prompts live. Several are silent failures — the tool returns confident, real-looking, wrong-question data with no error.

### ✅ Fixed 2026-07-21 — the thing that used to bite you here

These servers used to accept parameters that were not in their schema, ignore them, and return **unfiltered** results with no error. An agent that guessed a plausible parameter name got plausible garbage.

This was found the hard way on 2026-07-21, in this very script: `search_awards(council_district=10)` returned $47.5M of **citywide** awards, which an agent would happily summarize as District 10's funding. It was exactly the failure this repo warns about, occurring inside our own tooling.

> **Now fixed and published.** `nyc-budget-mcp` **1.3.0** ([PR #40](https://github.com/BetaNYC/New-York-City-Budget/pull/40)) rejects `council_district` and points at `council_member`. All seven servers got the same treatment on 2026-07-21 — minimum versions: budget 1.3.0, council 2.5.0, checkbook 1.4.0, record 1.1.0, 311 1.1.0, charter 0.2.0, nys 2.3.0. Verified live against the published packages.
>
> **Run `/mcp-update` and confirm your versions before presenting.** These load via `npx -y`, so a stale cache can still serve an old build — and on an old build the $47.5M answer comes back with no warning.

**Worth doing on purpose in the room.** Asking for District 10's awards *by district* and having the tool refuse and name `council_member` is a better trust argument than any successful query. It is the whole thesis of this repo, demonstrated on our own software.

**The correct parameter names, re-verified 2026-07-21:**

| Task | Correct parameter | Do **not** use | If you get it wrong |
|---|---|---|---|
| Schedule C awards by member | `council_member="De La Rosa"` (surname substring) | `council_district`, `sponsor` | **rejected by name** (fixed) |
| Checkbook payments to an org | `payee_name="COMMUNITY LEAGUE OF THE HEIGHTS"` | `vendor` | **rejected by name** (fixed) |
| Socrata aggregate query | separate `select` / `where` / `group` / `order` / `limit` | a single `soql` blob | ⚠️ **still silently ignored** — third-party server |

There is **no district filter** on the budget tool, by design — Schedule C keys on sponsoring member, not district. The agent must map district → surname first. That is worth narrating out loud as a feature: the money follows the member.

### Per-tool notes

- **311 aggregates come from Socrata, not the 311 MCP.** Act 1's roll-up is served by the NYC Open Data 311 dataset (`erm2-nwe9`) via the Socrata MCP. The `nyc-311-mcp` server handles single service-request lookups, the city-service calendar, and status alerts — not "top complaint type" summaries. A well-configured agent picks correctly; just don't announce "the 311 MCP" for Act 1. (Same note as [`../community-boards/manhattan-cb1.md`](../community-boards/manhattan-cb1.md).)
- **The 311 field is `council_district`**, values as strings (`'10'`). Check `is_sample` in the response — if it is `true`, you got a raw row sample rather than a real aggregate and the numbers are meaningless.
- **⚠️ Always bound a Socrata catalog search with `limit`.** An unbounded `socrata search` returned **581 KB** on one query — it inlines full polygon geometry for any dataset with a `the_geom` column. This is the most likely way to stall the room.
- **⚠️ Council legislation search matches keywords, not concepts.** `"broadband digital equity"` returned **zero results**; `"broadband"` alone returned six real bills including Int 1122-2024. If a search comes back empty on stage, *shorten* it rather than rephrasing. `search_legislation` and `search_bills` returned identical results — don't present them as two capabilities.
- **Checkbook `smart_search` is blocked** by an Incapsula WAF JavaScript challenge. Its error message helpfully names the working alternatives. Use the structured tools; don't demo smart_search.
- **`search_contracts` cannot filter by vendor name** — the Checkbook API offers only `vendor_code` / `agency_code`, with no name→code lookup. Passing its declared `vendor_name` parameter returns an explicit error saying so and listing alternatives, which is correct behavior. For "what did the city pay this org," use `search_spending` with `payee_name`. Act 3 step two uses the working path.
- **`search_spending` requires `fiscal_year` or `issue_date_from`** and errors properly without one. That is a *good* error — note the contrast with the silent-drop behavior above.

### Figures and their provenance

| Claim | How verified |
|---|---|
| De La Rosa = District 10, PersonId 7806 | `get_council_member`, Legistar record |
| **105 FY2026 awards, $2,165,000** | `search_awards(council_member="De La Rosa", fiscal_year=2026, limit=500)` — re-verified live 2026-07-21; returned 105 against a limit of 500, so complete. **Supersedes "12 awards, $960,000," which was wrong** |
| CLOTH Checkbook payments incl. Tax Levy Elected Officials | `search_spending(payee_name=…, fiscal_year=2026)`, 32 records |
| Int 1122-2024 enacted 2025-11-08, De La Rosa a sponsor | `search_legislation("broadband")` |
| 311 top complaints, 10,357 total | Socrata `erm2-nwe9`, `is_sample: false` |

**Not independently verified this session:** the precise neighborhood composition of District 10. "Washington Heights and Inwood" is supported by the member's district office address (618 W 177th St, 10033) and by a District 10 award to the Washington Heights BID, but the district's full boundary was not checked against a districting source. Don't recite a neighborhood list to a room that knows the district better than you do.

---

## Backup prompts (if one falls flat)

- "Is alternate-side parking suspended this week? What's on the city-service calendar?" *(311 MCP — always returns something)*
- "What does the NYC Administrative Code require of agency open data coordinators?" *(returns § 23-507 — clean, short, and resonates with an oversight audience)*
- "Show me FY2026 Schedule C awards to Northern Manhattan Improvement Corporation." *(verified to return real rows; a recognizable local institution)*
- "What does the City Charter say about the Council's oversight powers?" *(Charter — reliable, on-theme)*
