---
status: DRAFT
---

# User journeys and sample prompts

> **DRAFT.** First pass, 2026-07-16. These are illustrative prompts to demonstrate what each BetaNYC MCP (and the general Socrata catalog) can do, plus "crosswalk" journeys that chain several together. Prompts are written for a person talking to an AI agent that has these MCPs connected — they are starting points, not guaranteed exact outputs. Always verify answers against the linked official source.

This is the one place that captures the **broader user journey**: how a New Yorker — a resident, a community board member, a journalist, a nonprofit — moves from a plain-language question to an answer grounded in the actual public record.

Two kinds of prompts live here:

1. **Basic prompts** — one MCP at a time. Each shows what a single data source can answer on its own.
2. **Crosswalk journeys** — several MCPs chained together to answer a question no single source can. This is where grounded agents get genuinely useful: the agent picks up a thread in one dataset and follows it into another.

Every journey is framed as a **user story** (*"As a ___, I want to ___, so that ___"*) so the value is legible before the prompt, not after.

For which source actually holds which data, see [`when-to-use-which-portal.md`](when-to-use-which-portal.md). For query syntax, see [`query-patterns.md`](query-patterns.md).

---

## The featured sources at a glance

| # | Source | MCP | Domain it answers |
|---|---|---|---|
| 1 | **NYC 311** | `nyc-311-mcp` | Service requests, complaints, city-service calendar, status alerts |
| 2 | **NYC Council** | `nyc-council-mcp` | Bills, hearings, votes, committees, council members (Legistar) |
| 3 | **NYC Checkbook** | `nyc-checkbook-mcp` | City spending, contracts, budget, payroll, revenue (Comptroller) |
| 4 | **NYC Council Budget** | `nyc-budget-mcp` | Discretionary funding — Schedule C awards, Terms & Conditions, §254 capital |
| 5 | **NYC City Record** | `nyc-record-mcp` | Procurement notices — solicitations, awards, public hearings |
| 6 | **NYC Charter, Laws & Rules** | `nyc-charter-laws-rules` | Charter, Administrative Code, Rules of the City of New York (legal text) |
| 7 | **NYS Open Legislation** | `nys-openlegislation-mcp` | State bills, laws, members, committees, calendars, transcripts |
| 8 | **NY Open Data (general)** | `socrata` | Everything else the city or state publishes as a dataset |

> **A note on grounding.** Every prompt below is answerable *because* the agent is connected to a real source. Ask the same questions of an ungrounded chatbot and it will confidently guess — wrong bill numbers, invented dollar figures, stale council members. The whole point of this repo is that these answers come from the public record, not the model's memory. When you demo, it's worth pulling up the underlying source once to show the number is real.

---

## Part 1 — Basic prompts (one MCP each)

### 1. NYC 311 — `nyc-311-mcp`

**User story:** *As a resident, I want to see what my neighbors are actually complaining about, so that I can bring evidence — not anecdotes — to my community board.*

- "Is alternate-side parking suspended tomorrow? What's on the city-service calendar this week?"
- "Look up the status of 311 service request number [SR number] and tell me whether it's been closed."
- "Pull the details for these service request numbers and tell me which are still open." *(bulk lookup)*

> **Routing note (verified 2026-07-16):** the `nyc-311-mcp` server covers the **city-service calendar, status/emergency alerts, and individual/bulk service-request lookup by SR number** — not aggregate roll-ups. For "top complaint types in a district over the last 30 days" or "all noise complaints grouped by day," the agent should query the **NYC Open Data 311 dataset** (`erm2-nwe9`, "311 Service Requests from 2020 to Present") via the Socrata MCP (source #8 below). Both are "311," but aggregation lives in Open Data.

### 2. NYC Council — `nyc-council-mcp`

**User story:** *As a community board member, I want to track legislation before the Council that affects my district, so that we can weigh in before it passes, not after.*

- "List legislation introduced in the NYC Council in the last 60 days about short-term rentals."
- "Who represents Council District 1, and which committees do they sit on?"
- "Pull the full history and current status of Intro [number] — who sponsored it and where is it in the process?"
- "What hearings does the Council have coming up, and which committees are holding them?"

### 3. NYC Checkbook — `nyc-checkbook-mcp`

**User story:** *As a watchdog, I want to see where the city is actually spending money, so that I can hold agencies accountable to their budgets.*

- "How much did the Department of Transportation spend last fiscal year, and on what categories?"
- "Search city contracts with [vendor name] and show me the award amounts and agencies."
- "What did the city spend on street resurfacing contracts in the last two fiscal years?"
- "Pull the details of contract [contract ID] — vendor, amount, purpose, and term."

### 4. NYC Council Budget (discretionary funding) — `nyc-budget-mcp`

**User story:** *As a nonprofit director, I want to know which council members fund organizations like ours, so that we can make a targeted case for discretionary support.*

- "Which organizations received NYC Council discretionary (Schedule C) funding in Council District 1 in the most recent fiscal year, and how much?"
- "Search Schedule C awards for [organization name] across all available fiscal years."
- "What are the Terms & Conditions attached to discretionary awards this fiscal year?"
- "List the fiscal years covered by the discretionary funding data, then show capital (§254) changes for the latest one."

### 5. NYC City Record — `nyc-record-mcp`

**User story:** *As a small-business owner or bidder, I want to catch city solicitations early, so that we have time to respond before the deadline.*

- "What procurement solicitations are currently open, and which agencies posted them?"
- "Show me City Record notices from the Department of Parks & Recreation in the last two weeks."
- "Are there any public hearings coming up in the City Record notices?"
- "Search City Record notices for anything mentioning 'Battery Park' or 'waterfront.'"

### 6. NYC Charter, Laws & Rules — `nyc-charter-laws-rules`

**User story:** *As an advocate, I want to cite the exact law, so that our testimony rests on the actual text of the code, not a paraphrase.*

- "What does the City Charter say about the role and powers of community boards?"
- "Find the Administrative Code sections about noise control and summarize the core provisions."
- "Search the Rules of the City of New York for sidewalk café regulations."
- "Pull the exact text of Charter section [number] so I can quote it in testimony."

### 7. NYS Open Legislation — `nys-openlegislation-mcp`

**User story:** *As a policy staffer, I want to see what Albany is doing on an issue, so that I can align city advocacy with state action.*

- "Search NYS bills from the current session about tenant protections."
- "What's the status and vote history of State bill [S/A number]?"
- "Who are my State Senate and Assembly members, and what committees do they chair?"
- "Find the section of NYS law governing [topic] and summarize it."

### 8. NY Open Data (general catalog) — `socrata`

**User story:** *As a curious New Yorker, I want to find whatever dataset exists on a topic, so that I can start from real numbers instead of guessing whether the data is even published.*

- "Search NYC Open Data for datasets about restaurant inspections and tell me which one is authoritative."
- "In the NYC Open Data film-permit dataset, how many permits were issued in Manhattan last year?"
- "Search NYS Open Data (`domain: data.ny.gov`) for datasets about EV charging stations."
- "Find the NYC Open Data dataset on street trees and count how many are in Community District 1."

---

## Part 2 — Crosswalk journeys (chaining MCPs)

This is the payoff. A single dataset answers a single question; a grounded agent that can move *between* sources answers the questions people actually have — the ones that start in one dataset and end in another.

### Crosswalk A — "From complaint to policy" 🧵
**311 → Council → Charter/Laws**

**User story:** *As a community board member, I want to connect what residents complain about to what the Council is doing about it and what the law already says, so that our advocacy is grounded end to end.*

> "Start with the top three 311 complaint types in Manhattan Community District 1 this quarter. For the most common one, find any NYC Council legislation from the last year that addresses it, and pull the section of the Administrative Code the complaint category falls under. Give me a one-page brief tying the three together."

**Why it lands:** the agent moves from lived experience (311) → the legislative response (Council) → the legal foundation (code). No single portal does that.

### Crosswalk B — "Follow the discretionary dollar" 💵
**Budget → Council → Checkbook**

**User story:** *As a funder or watchdog, I want to trace a discretionary award from the allocation to the sponsoring member to the actual spending, so that I can verify the money did what it was allocated to do.*

> "Find the largest NYC Council discretionary (Schedule C) award in Council District 1 in the most recent fiscal year. Tell me which council member sponsors that district, and then check NYC Checkbook for any city spending or contracts with that same organization. Flag any gaps between the allocation and what shows up in Checkbook."

**Why it lands:** discretionary allocation (budget MCP), political accountability (Council member), and actual disbursement (Checkbook) are three separate systems. Chaining them is exactly the "follow the money" move journalists do by hand.

### Crosswalk C — "The full contract lifecycle" 📄
**City Record → Checkbook → Council**

**User story:** *As a procurement watchdog, I want to follow a city contract from the solicitation notice to the award to any Council oversight, so that I understand the whole lifecycle, not just one snapshot.*

> "Find a recently open solicitation in the City Record from the Department of Transportation. Then search NYC Checkbook for existing contracts with the same agency in that category to see what past awards looked like. Finally, check whether the Council has any recent hearings or legislation touching that agency's contracting."

**Why it lands:** procurement (City Record) → spending (Checkbook) → oversight (Council) is the accountability arc of a single dollar of city money.

### Crosswalk D — "City and state on the same issue" 🏛️
**NYS Open Legislation → Council → Open Data**

**User story:** *As a policy staffer, I want to line up what Albany and City Hall are each doing on one issue and back it with data, so that our coalition advocates at the right level of government.*

> "On the issue of e-bike and delivery-worker safety: search NYS Open Legislation for relevant state bills this session, search the NYC Council for related local legislation, and then find a NYC Open Data dataset (e.g., collisions or 311) that quantifies the problem. Summarize where the state and city each stand and what the data shows."

**Why it lands:** most real civic issues are split across state and city jurisdiction. An agent that can query both legislatures *and* the data catalog resolves "whose job is this?" in one pass.

### Crosswalk E — "Data-driven testimony" 🎤
**Open Data → 311 → Budget**

**User story:** *As a resident preparing to testify, I want a tight, sourced case in fifteen minutes, so that I can walk into a hearing with real numbers instead of a hunch.*

> "I'm testifying about street-tree maintenance in Community District 1. Find the NYC Open Data street-tree dataset and count the trees in the district and their health status, pull recent 311 complaints about tree conditions or dead trees there, and check whether any Council discretionary funding went to parks or greening in that district. Draft three minutes of testimony with every number sourced."

**Why it lands:** it turns three disconnected public sources into a single, citable argument — and every figure traces back to an official record, which is the whole grounding thesis.

---

## How to run these

- **You don't need to name the MCP.** A well-configured agent picks the right tool from the question. Naming the source (e.g., "check Checkbook") just makes the demo legible.
- **Start narrow, then widen.** Run a basic prompt first so the room sees one clean answer, then run a crosswalk so they see the agent reason across sources.
- **Show one source once.** Pull up the underlying portal for a single number so the audience trusts that the agent is reading the real record, not improvising.
- **Every number is checkable.** That is the point of grounding — if a figure looks off, the agent can cite where it came from, and you can verify it.

## Contributing a journey

Have a question your community keeps asking? Add it. Open a PR with a new user story + prompt in the matching section, or a new crosswalk if it chains sources in a way not shown here. Real questions from real board meetings, newsrooms, and nonprofits are exactly what makes this resource useful.
