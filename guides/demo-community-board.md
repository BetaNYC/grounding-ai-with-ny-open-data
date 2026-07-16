---
status: DRAFT
---

# Demo script — Community Board walkthrough

> **DRAFT.** First pass, 2026-07-16. A short, run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to a community board or similar civic audience. Written with **Manhattan Community Board 1** (Financial District, Tribeca, Battery Park City, South Street Seaport, Civic Center) as the running example — swap the district to reuse it anywhere.

This is the meeting-ready companion to [`user-journeys.md`](user-journeys.md). That file is the full catalog; this one is a **tight, ordered sequence** you can run in ten to fifteen minutes and land the point.

**The point:** an AI agent connected to real government data can answer a community board's actual questions from the public record — not from a language model's guesswork. Same question, grounded vs. ungrounded, is a night-and-day difference.

---

## Before you start (2 min)

- Have the agent open with the MCPs connected.
- Substitute your district where you see **Community District 1** / **Council District 1**.
- Optional but powerful: keep one official portal tab open ([NYC Open Data](https://data.cityofnewyork.us), [Checkbook NYC](https://www.checkbooknyc.com), or [Legistar](https://legistar.council.nyc.gov)) so you can show a number is real.

**Opening line for the room:**
> "I'm going to ask an AI the kinds of questions this board asks all the time. The difference is this one is wired into the actual city and state data. Watch where the numbers come from."

---

## Act 1 — One clean answer (3 min)

Start with a single source so the room sees a crisp, verifiable result.

**Prompt:**
> "What were the top 311 complaint types in Manhattan Community District 1 over the last 30 days?"

**What to say while it runs:** "This is live 311 data through BetaNYC's 311 MCP — the same system behind the complaints residents file every day."

**The reveal:** pull up the number against 311 open data if you have the tab ready. "That's the real record, not a guess."

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

---

## Act 4 — Their issue, sourced (4 min)

Close on something the board is *actually* working on. Ask the room for a live topic, or use this waterfront example.

**Prompt:**
> "For Manhattan Community District 1: find recent 311 complaints about street or sidewalk conditions, search the City Record for any open procurement related to that, and check whether the Council has upcoming hearings touching it. Give me a short brief I could read into the minutes."

**What to say:** "Everything in that brief traces to an official source. If a board member challenges a number, the agent can tell you exactly where it came from — and you can pull it up. That's the whole idea: grounded, not improvised."

---

## Closing (1 min)

> "This is open. BetaNYC built these connectors and the guides in the open — anyone can point their own AI at the real city and state record instead of trusting it to remember. If your board has a recurring question, that's exactly the kind of user journey we want to add."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Full prompt catalog: [`guides/user-journeys.md`](user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Backup prompts (if one falls flat)

If a live call returns thin data (a quiet complaint week, a district with little discretionary funding), pivot to one of these rather than troubleshooting on stage:

- "Is alternate-side parking suspended this week? What's on the city-service calendar?" *(311 — always returns something)*
- "Search NYC Open Data for the street-tree dataset and count the trees in Community District 1." *(Open Data — reliably concrete)*
- "What does the City Charter say about the powers of community boards?" *(Charter — a crowd-pleaser for this audience specifically)*

**If the room asks "can it be wrong?"** — Yes, and that's the honest answer: the agent can misread or an underlying dataset can be stale. The safeguard is that every answer is *traceable* to a source you can check, which an ungrounded chatbot can't offer. Grounding doesn't make it infallible; it makes it *accountable*.
