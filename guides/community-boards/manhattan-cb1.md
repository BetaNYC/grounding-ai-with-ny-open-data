---
status: DRAFT
---

# Demo script — Manhattan Community Board 1

> **DRAFT.** First pass, 2026-07-16. A short, run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to **Manhattan Community Board 1** — the board covering the Financial District, Tribeca, Battery Park City, South Street Seaport, and Civic Center (plus Governors, Ellis, and Liberty Islands). Every prompt below is pre-filled for this district, so it's ready to read straight off the page.

This is the meeting-ready companion to the general [`user-journeys.md`](../user-journeys.md) catalog. That file is the full set of prompts; this one is a **tight, ordered sequence** tuned for MCB1 that you can run in ten to fifteen minutes and land the point.

> **Reusing this for another board?** Don't edit this file — copy it. See [`README.md`](README.md) in this folder for the naming convention (`[borough]-cb[N].md`) and the customization checklist.

**The point:** an AI agent connected to real government data can answer a community board's actual questions from the public record — not from a language model's guesswork. Same question, grounded vs. ungrounded, is a night-and-day difference.

---

## Before you start (2 min)

- Have the agent open with the MCPs connected.
- The prompts already reference **Manhattan Community District 1** and **Council District 1** — no substitution needed.
- Optional but powerful: keep one official portal tab open ([NYC Open Data](https://data.cityofnewyork.us), [Checkbook NYC](https://www.checkbooknyc.com), or [Legistar](https://legistar.council.nyc.gov)) so you can show a number is real.

**Opening line for the room:**
> "I'm going to ask an AI the kinds of questions this board asks all the time. The difference is this one is wired into the actual city and state data. Watch where the numbers come from."

---

## Act 1 — One clean answer (3 min)

Start with a single source so the room sees a crisp, verifiable result.

**Prompt:**
> "What were the top 311 complaint types in Manhattan Community District 1 over the last 30 days?"

**What to say while it runs:** "This is live 311 data — the same complaints residents file every day — read straight from NYC Open Data."

**The reveal:** pull up the number against 311 open data if you have the tab ready. "That's the real record, not a guess."

> **Presenter notes (verified 2026-07-16):**
> - This aggregate is served by the **NYC Open Data 311 dataset** (`erm2-nwe9`) through the Socrata MCP — *not* the `nyc-311-mcp` server, which handles single service-request lookups, the city-service calendar, and status alerts (not "top complaint type" roll-ups). A well-configured agent picks the right one; just don't announce "the 311 MCP" for this particular question.
> - Expected shape on a dry run: **Vendor Enforcement** was #1 by a wide margin (~640 in 30 days), then Illegal Parking (~380), then Noise (~130), out of ~2,800 total requests. Very Lower-Manhattan — street-vendor enforcement near the Seaport and FiDi. Numbers drift daily; treat these as the ballpark, not a script.

---

## Act 2 — Grounded vs. ungrounded (2 min)

This is the money moment. Ask something an ungrounded chatbot would fake.

**Prompt:**
> "Who represents Council District 1, which committees do they sit on, and what legislation have they introduced recently?"

**What to say:** "A normal chatbot will confidently give you a name — and it's often out of date or invented. This one reads the Council's own Legistar system, so the member, the committees, and the bill numbers are current and checkable."

---

## Act 3 — Follow the money (4 min)

Now show the agent reasoning across *two* sources — the thing no single portal does.

**Prompt:**
> "Find the largest NYC Council discretionary (Schedule C) award in Council District 1 in the most recent fiscal year. Then check NYC Checkbook for any city spending or contracts with that same organization."

**What to say:** "It just moved from the budget system — where the money is *allocated* — to Checkbook, where it's actually *spent*. That 'follow the money' move is what a reporter does by hand over an afternoon. Here it's one question."

> **Presenter notes (verified 2026-07-16):**
> - **Budget half is solid.** District 1's largest FY2026 Schedule C award was **$167,000 to the Association of Community Employment Programs for the Homeless (ACE)** under the NYC Cleanup initiative (via DYCD), sponsored by Council Member Marte. The `nyc-budget-mcp` filters by sponsoring member *surname*, so the agent resolves "District 1 → Marte" first — a nice thing to narrate.
> - **Checkbook half — corrected and upgraded 2026-07-21.** The original note here said the Checkbook lookup was "flaky" because the endpoint was WAF-protected. That is half right, and the distinction matters: `smart_search` **is** blocked by an Incapsula WAF JavaScript challenge and should not be demoed. But the *structured* tool works fine — the catch is the parameter name. Use `search_spending` with **`payee_name`** (not `vendor`, which is silently ignored and returns millions of unrelated rows). `search_contracts` has no vendor-name filter at all. So the Checkbook half **can** be the climax now.
> - **Make the payoff the budget code.** Checkbook results carry a `budget_code`, and discretionary money shows up as **`3625 (Tax Levy Elected Officials)`**. Pointing at that line — "that's Council member money, as an actual check" — is the strongest moment in this act.

> **Re-verified 2026-07-21:** the $167,000 Marte → ACE figure and the surname-filtering behavior above both reproduce exactly via `search_awards(council_member="Marte", fiscal_year=2026)`. The 2026-07-16 note was correct.

---

## Act 4 — Their issue, sourced (4 min)

Close on something MCB1 is *actually* working on. Ask the room for a live topic, or use this Lower Manhattan waterfront / streetscape example.

**Prompt:**
> "For Manhattan Community District 1: find recent 311 complaints about street or sidewalk conditions, search the City Record for any open procurement related to that, and check whether the Council has upcoming hearings touching it. Give me a short brief I could read into the minutes."

**What to say:** "Everything in that brief traces to an official source. If a board member challenges a number, the agent can tell you exactly where it came from — and you can pull it up. That's the whole idea: grounded, not improvised."

---

## Closing (1 min)

> "This is open. BetaNYC built these connectors and the guides in the open — anyone can point their own AI at the real city and state record instead of trusting it to remember. If your board has a recurring question, that's exactly the kind of user journey we want to add."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Full prompt catalog: [`guides/user-journeys.md`](../user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Backup prompts (if one falls flat)

If a live call returns thin data (a quiet complaint week, a district with little discretionary funding), pivot to one of these rather than troubleshooting on stage:

- "Is alternate-side parking suspended this week? What's on the city-service calendar?" *(311 — always returns something)*
- "Search NYC Open Data for the street-tree dataset and count the trees in Community District 1." *(Open Data — reliably concrete)*
- "What does the City Charter say about the powers of community boards?" *(Charter — a crowd-pleaser for this audience specifically)*

**If the room asks "can it be wrong?"** — Yes, and that's the honest answer: the agent can misread or an underlying dataset can be stale. The safeguard is that every answer is *traceable* to a source you can check, which an ungrounded chatbot can't offer. Grounding doesn't make it infallible; it makes it *accountable*.
