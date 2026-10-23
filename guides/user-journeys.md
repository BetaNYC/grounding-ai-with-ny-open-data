---
status: published
updated: 2026-10-23
---

# User journeys and sample prompts

> First written 2026-07-16. **Last revised 2026-10-23:** every prompt was checked against the tools each MCP exposes today, and the MTA subway-alerts MCP was added. The prompts were checked against what each tool accepts, not run live. These are illustrative prompts to demonstrate what each BetaNYC MCP (and the general Socrata catalog) can do, plus "crosswalk" journeys that chain several together. Prompts are written for a person talking to an AI agent that has these MCPs connected — they are starting points, not guaranteed exact outputs. Always verify answers against the linked official source.

This is the one place that captures the **broader user journey**: how a New Yorker — a resident, a community board member, a journalist, a nonprofit — moves from a plain-language question to an answer grounded in the actual public record.

Two kinds of prompts live here:

1. **Basic prompts** — one MCP at a time. Each shows what a single data source can answer on its own.
2. **Crosswalk journeys** — several MCPs chained together to answer a question no single source can. This is where grounded agents get genuinely useful: the agent picks up a thread in one dataset and follows it into another.

Every journey is framed as a **user story** (*"As a ___, I want to ___, so that ___"*) so the value is legible before the prompt, not after.

For which source actually holds which data, see [`when-to-use-which-portal.md`](when-to-use-which-portal.md). For query syntax, see [`query-patterns.md`](query-patterns.md).

---

## The featured sources at a glance

| # | Group | Source | MCP | Domain it answers |
|---|---|---|---|---|
| 1 | Laws and legislation | **NYC Council** | `nyc-council-mcp` | Bills, hearings, votes, committees, council members (Legistar) |
| 2 | Laws and legislation | **NYC Charter, Laws & Rules** | `nyc-charter-laws-rules` | Charter, Administrative Code, Rules of the City of New York (legal text) |
| 3 | Laws and legislation | **NYS Open Legislation** | `nys-openlegislation-mcp` | State bills, laws, members, committees, calendars, transcripts |
| 4 | Government information and service alerts | **NYC 311** | `nyc-311-mcp` | Service requests, complaints, city-service calendar, status alerts |
| 5 | Government information and service alerts | **MTA subway alerts** *(early alpha)* | `mta-mcp` | Subway service alerts and elevator/escalator outages. Unofficial; installed from GitHub, not npm |
| 6 | Budget and spending data | **NYC Checkbook** | `nyc-checkbook-mcp` | City spending, contracts, budget, payroll, revenue (Comptroller) |
| 7 | Budget and spending data | **NYC Council Budget** | `nyc-budget-mcp` | Discretionary funding — the Council's funding disclosure (award-level, Cleared/Pending), Council capital designations |
| 8 | Budget and spending data | **NYC City Record** | `nyc-record-mcp` | Procurement notices — solicitations, awards, public hearings |
| 9 | Additional useful tools | **NY Open Data (general)** | `socrata` | Everything else the city or state publishes as a dataset |

> **A note on grounding.** Every prompt below is answerable *because* the agent is connected to a real source. Ask the same questions of an ungrounded chatbot and it will confidently guess — wrong bill numbers, invented dollar figures, stale council members. The whole point of this repo is that these answers come from the public record, not the model's memory. When you demo, it's worth pulling up the underlying source once to show the number is real.

---

## Part 1 — Basic prompts (one MCP each)

<link rel="stylesheet" href="{{ '/assets/css/live-demos.css' | relative_url }}">

> **Real results, Oct 23, 2026.** Under each source is one prompt we ran through that MCP just after midnight on October 23, 2026. Press **Run it** and the box types the question, shows the tool call the agent made, then prints what came back. **Replay** runs it again; **Collapse** closes it. They are a snapshot, not a live feed, so rerun a prompt to see today's answer. The animations play on the [published page](https://betanyc.github.io/grounding-ai-with-ny-open-data/guides/user-journeys.html), not on GitHub.

### Laws and legislation

City Council bills and hearings, the City Charter and local laws, and State bills.

#### 1. NYC Council — `nyc-council-mcp`

**User story:** *As a community board member, I want to track legislation before the Council that affects my district, so that we can weigh in before it passes, not after.*

- "List legislation introduced in the NYC Council in the last 60 days about short-term rentals."
- "Look up Council Member [name] and give me their contact details. Then show me who sits on the Committee on [topic]."
- "Pull the full history and current status of Intro [number] — who sponsored it and where is it in the process?"
- "What hearings does the Council have coming up, and which committees are holding them?"

<div class="live-demo full" data-demo="council"></div>

#### 2. NYC Charter, Laws & Rules — `nyc-charter-laws-rules`

**User story:** *As an advocate, I want to cite the exact law, so that our testimony rests on the actual text of the code, not a paraphrase.*

- "What does the City Charter say about the role and powers of community boards?"
- "Find the Administrative Code sections about noise control and summarize the core provisions."
- "Search the Rules of the City of New York for sidewalk café regulations."
- "Pull the exact text of Charter section [number] so I can quote it in testimony."

<div class="live-demo full" data-demo="charter"></div>

#### 3. NYS Open Legislation — `nys-openlegislation-mcp`

**User story:** *As a policy staffer, I want to see what Albany is doing on an issue, so that I can align city advocacy with state action.*

- "Search NYS bills from the current session about tenant protections."
- "What's the status and vote history of State bill [S/A number]?"
- "Who represents State Senate District 59? Then tell me who chairs the Senate Committee on [topic]."
- "Find the section of NYS law governing [topic] and summarize it."

<div class="live-demo full" data-demo="nys"></div>

### Government information and service alerts

What the city is doing today: services, schedules, and subway alerts.

#### 4. NYC 311 — `nyc-311-mcp`

**User story:** *As a resident, I want to see what my neighbors are actually complaining about, so that I can bring evidence — not anecdotes — to my community board.*

- "Is alternate-side parking suspended tomorrow? What's on the city-service calendar this week?"
- "Look up the status of 311 service request number [SR number] and tell me whether it's been closed."
- "Pull the details for these service request numbers and tell me which are still open." *(bulk lookup)*

> **Routing note (verified 2026-07-16):** the `nyc-311-mcp` server covers the **city-service calendar, status/emergency alerts, and individual/bulk service-request lookup by SR number** — not aggregate roll-ups. For "top complaint types in a district over the last 30 days" or "all noise complaints grouped by day," the agent should query the **NYC Open Data 311 dataset** (`erm2-nwe9`, "311 Service Requests from 2020 to Present") via the Socrata MCP (source #9 below). Both are "311," but aggregation lives in Open Data.

<div class="live-demo full" data-demo="311"></div>

#### 5. MTA subway alerts — `mta-mcp` *(early alpha)*

**User story:** *As a rider, I want to know whether my line is disrupted before I leave, so that I can plan around weekend work.*

- "Is the 6 train disrupted this Saturday at 68 St-Hunter College?"
- "What planned work is on the A line this weekend?"
- "Which elevators are out right now at Jay St-MetroTech?"

> **Every answer is unofficial and may not be real time; confirm at mta.info.** This server is installed from GitHub only, never npm, because MTA's data terms do not allow the redistributed-fetch shape. No MTA logos, maps or signage in demo materials.

<div class="live-demo full" data-demo="mta"></div>

### Budget and spending data

Where city money goes: spending and contracts, Council discretionary funding, and procurement notices.

#### 6. NYC Checkbook — `nyc-checkbook-mcp`

**User story:** *As a watchdog, I want to see where the city is actually spending money, so that I can hold agencies accountable to their budgets.*

- "How much did the Department of Transportation spend last fiscal year, and on what categories?"
- "Search city contracts with [vendor name] and show me the award amounts and agencies."
- "What did the city spend on street resurfacing contracts in the last two fiscal years?"
- "Pull the details of contract [contract ID] — vendor, amount, purpose, and term."

<div class="live-demo full" data-demo="checkbook"></div>

#### 7. NYC Council Budget (discretionary funding) — `nyc-budget-mcp`

**User story:** *As a nonprofit director, I want to know which council members fund organizations like ours, so that we can make a targeted case for discretionary support.*

- "Which organizations received NYC Council discretionary funding from Council Member [SURNAME] in the most recent fiscal year, and how much has cleared?"
- "Search discretionary awards to [organization name] across all available fiscal years."
- "Which Council-funded capital projects are in Council District [NN] this fiscal year?"
- "List the fiscal years covered by the discretionary funding data, then compare the latest Council capital list with OMB's adopted capital budget."

> **Coverage note (checked 2026-10-23):** discretionary awards are searched by Council Member name, organization, EIN, ZIP, agency or program, not by council district. The disclosure covers FY2009 and FY2011–FY2027 (FY2010 is not included), and BetaNYC/New-York-City-Budget issue #59 tracks about 29,000 FY2015–FY2020 Schedule C awards the parser does not yet read, so do not describe the results as complete. Capital projects can be filtered by district only for FY2015–FY2017, FY2026 and FY2027.

<div class="live-demo full" data-demo="budget"></div>

#### 8. NYC City Record — `nyc-record-mcp`

**User story:** *As a small-business owner or bidder, I want to catch city solicitations early, so that we have time to respond before the deadline.*

- "What procurement solicitations are currently open, and which agencies posted them?"
- "Show me City Record notices from the Department of Parks & Recreation in the last two weeks."
- "Are there any public hearings coming up in the City Record notices?"
- "Search City Record notices for anything mentioning 'Battery Park' or 'waterfront.'"

<div class="live-demo full" data-demo="record"></div>

### Additional useful tools

Everything else the City and State publish as datasets.

#### 9. NY Open Data (general catalog) — `socrata`

**User story:** *As a curious New Yorker, I want to find whatever dataset exists on a topic, so that I can start from real numbers instead of guessing whether the data is even published.*

- "Search NYC Open Data for datasets about restaurant inspections and tell me which one is authoritative."
- "In the NYC Open Data film-permit dataset, how many permits were issued in Manhattan last year?"
- "Search NYS Open Data (`domain: data.ny.gov`) for datasets about EV charging stations."
- "Find the NYC Open Data dataset on street trees and count how many are in Community District 1." *(The street tree census is from 2015; say "as of 2015.")*

<div class="live-demo full" data-demo="socrata"></div>

---

## Part 2 — Crosswalk journeys (chaining MCPs)

This is the payoff. A single dataset answers a single question; a grounded agent that can move *between* sources answers the questions people actually have — the ones that start in one dataset and end in another.

Every crosswalk has a **Run it** box with real results from Oct 23, 2026. Each chains two or three tools.

### Crosswalk A — "From complaint to policy" 🧵
**311 → Council → Charter/Laws**

**User story:** *As a community board member, I want to connect what residents complain about to what the Council is doing about it and what the law already says, so that our advocacy is grounded end to end.*

> "Start with the top three 311 complaint types in Manhattan Community District 1 this quarter. For the most common one, find any NYC Council legislation from the last year that addresses it, and pull the section of the Administrative Code the complaint category falls under. Give me a one-page brief tying the three together."

**Why it lands:** the agent moves from lived experience (311) → the legislative response (Council) → the legal foundation (code). No single portal does that.

<div class="live-demo full" data-demo="xA"></div>

### Crosswalk B — "Follow the discretionary dollar" 💵
**Budget → Council → Checkbook**

**User story:** *As a funder or watchdog, I want to trace a discretionary award from the allocation to the sponsoring member to the actual spending, so that I can verify the money did what it was allocated to do.*

> "Find the largest NYC Council discretionary award from Speaker Julie Menin in the most recent fiscal year. Tell me which district she represents, and then check NYC Checkbook for any city spending or contracts with that same organization. Flag any gaps between the allocation and what shows up in Checkbook."

**Why it lands:** discretionary allocation (budget MCP), political accountability (Council Member), and actual disbursement (Checkbook) are three separate systems. Chaining them is exactly the "follow the money" move journalists do by hand.

<div class="live-demo full" data-demo="xB"></div>

### Crosswalk C — "The full contract lifecycle" 📄
**City Record → Checkbook → Council**

**User story:** *As a procurement watchdog, I want to follow a city contract from the solicitation notice to the award to any Council oversight, so that I understand the whole lifecycle, not just one snapshot.*

> "Find a recently open solicitation in the City Record from the Department of Transportation. Then search NYC Checkbook for existing contracts with the same agency in that category to see what past awards looked like. Finally, check whether the Council has any recent hearings or legislation touching that agency's contracting."

**Why it lands:** procurement (City Record) → spending (Checkbook) → oversight (Council) is the accountability arc of a single dollar of city money.

<div class="live-demo full" data-demo="xC"></div>

### Crosswalk D — "City and state on the same issue" 🏛️
**NYS Open Legislation → Council → Open Data**

**User story:** *As a policy staffer, I want to line up what Albany and City Hall are each doing on one issue and back it with data, so that our coalition advocates at the right level of government.*

> "On the issue of e-bike and delivery-worker safety: search NYS Open Legislation for relevant state bills this session, search the NYC Council for related local legislation, and then find a NYC Open Data dataset (e.g., collisions or 311) that quantifies the problem. Summarize where the state and city each stand and what the data shows."

**Why it lands:** most real civic issues are split across state and city jurisdiction. An agent that can query both legislatures *and* the data catalog resolves "whose job is this?" in one pass.

<div class="live-demo full" data-demo="xD"></div>

### Crosswalk E — "Data-driven testimony" 🎤
**Open Data → 311 → Budget**

**User story:** *As a resident preparing to testify, I want a tight, sourced case in fifteen minutes, so that I can walk into a hearing with real numbers instead of a hunch.*

> "I'm testifying about street-tree maintenance in Brooklyn Community District 1. Find the NYC Open Data street-tree dataset and count the trees in the district and their health status, pull recent 311 complaints about tree conditions or dead trees there, and check whether the Council Member whose district covers it directed any discretionary funding to parks or greening. Draft three minutes of testimony with every number sourced."

**Why it lands:** it turns three disconnected public sources into a single, citable argument — and every figure traces back to an official record, which is the whole grounding thesis.

<div class="live-demo full" data-demo="xE"></div>

### Crosswalk F — "Who funded this seat?" 🗳️
**NY Open Data (campaign finance) → NYS Open Legislation → the join that isn't there**

**User story:** *As a watchdog or reporter, I want to see who funded the campaigns in a particular legislative district, so that I can connect money to the votes cast by the person who holds that seat.*

> "Using New York State's campaign finance disclosure data on data.ny.gov, show me the contributions to State Senate campaigns in Senate District 59. Then tell me who currently holds that seat. If the data can't be cut that way, say so and show me what it *can* be cut by."

**Why it lands:** this is the rare journey where the honest answer is *you can't get there*, and finding that out in thirty seconds is the product. The agent should come back with a coverage finding rather than a donor list — and an ungrounded model will happily invent the donor list instead.

**What the data actually supports** (verified 2026-07-22, sources refreshed the same morning at 09:57 UTC):

| Dataset | ID | Rows |
|---|---|---|
| Disclosure reports, all schedules, since July 1999 | [`e9ss-239a`](https://data.ny.gov/d/e9ss-239a) | 18,345,122 |
| Contributions | [`4j2b-6a2j`](https://data.ny.gov/d/4j2b-6a2j) | 12,915,078 |
| Expenditures | [`ajsb-8pni`](https://data.ny.gov/d/ajsb-8pni) | 4,229,292 |

All three are New York State Board of Elections data, posted daily, with `org_amt` carrying the transaction amount. Contributions and expenditures are cuts of the parent schema split by filing schedule, so the three share a column vocabulary and join on `filer_id` and `trans_number`.

> **The finding, stated at the width we tested.** In `e9ss-239a`, the `district` column is populated on **28,520 of 18,345,122 rows — 0.16%**. Narrow to rows where `office_desc` is `State Senator` and **13,014** carry a district. Of those, **94% belong to just two districts** — SD 21 (6,864 rows) and SD 59 (5,403 rows) — and they come from **11 committees between them**. The column holds **57 distinct district values** across those 13,014 rows, so six of New York's 63 senate districts do not appear at all — and the 55 districts other than SD 21 and SD 59 share roughly 750 rows between them.
>
> **What that supports:** you cannot use this dataset to ask who funded campaigns in a given senate district. **What it does not support:** any claim that New York does not publish district-attributable campaign finance anywhere. We tested three Socrata datasets, not the Board of Elections' own reporting portal at [publicreporting.elections.ny.gov](https://publicreporting.elections.ny.gov). Say the first; do not say the second.
>
> We also did not establish *why* the field is sparse. Eleven committees accounting for 94% of district-tagged senate rows is consistent with filer-level practice rather than dataset coverage, but that is an inference. Offer to check rather than assert it.

**Two supporting details worth having in the room:**

- **The published dictionary doesn't match the data.** The data dictionary marks `DISTRICT` as a Schedule R field. In practice, of the 28,520 district-populated rows, 19,396 are Schedule A (monetary contributions received) and 7,611 are Schedule R. The documentation describes a narrower field than the one that exists.
- **`office_desc` is an uncontrolled vocabulary.** "City Council" (987), "Member Of The City Council" (762), "Council Member" (319), and "Councilman" (317) are four spellings of one office. Also "Town Council" vs "Town Board," "Mayor" vs "City Mayor," "Legislator" vs "County Legislator." Any count by office requires normalizing first, and a naive `GROUP BY` undercounts every one of them.

**End on what's working, not only what isn't.** The public campaign finance program's fields are real and filling in: `r_claim`, `r_in_district`, `r_lobbyist`, `r_vendor`, and `r_is_qualified_expense`. **872,265** rows carry a match-claim flag, concentrated from 2022 onward, and 2026 is already the largest year at **455,513** with half the year still to run. That is new transparency infrastructure doing its job, and a room that only hears about gaps will discount the ones you found.

> ⚠️ **Do not profile a sitting member with this.** Every figure above is structural and required looking up no individual. If you are demonstrating to a legislator, running their own donor list in their own office reads as a threat display regardless of how neutrally you narrate it — and it converts a credibility demo into something else. If a staffer asks to see their filings, that is their invitation to extend. It is not yours to open.


#### The other way in: a former state senator, in city data

State data can't name a donor's employer. New York City's Campaign Finance Board data can. So follow a *former* state senator who later ran for city office.

**NYS Open Legislation → NYC Campaign Finance Board (NYC Open Data) → Checkbook**

> "Eric Adams is a former New York State Senator. Confirm his Senate district. Then use the NYC Campaign Finance Board's doing-business contributions data to list the employers behind donations to his 2025 mayoral campaign, and check NYC Checkbook for city payments to two of those employers. Leave out the individual donors' names."

**Why it lands:** the Campaign Finance Board already flags donors who do business with the city ([`fbkk-n4e3`](https://data.cityofnewyork.us/d/fbkk-n4e3)), so the agent doesn't have to guess at name matches. It still has to bridge spellings: the CFB has "Transel Elevatror Inc," Checkbook has "Transel Elevator & Electric Inc."

> ⚠️ **An overlap is not a finding.** Donations from people who do business with the city are legal, under lower limits. A donor's employer holding city contracts is a lead to check, not evidence of anything. Show employers, never the individual donors.

<div class="live-demo full" data-demo="xF"></div>

---

## How to run these

- **You don't need to name the MCP.** A well-configured agent picks the right tool from the question. Naming the source (e.g., "check Checkbook") just makes the demo legible.
- **Start narrow, then widen.** Run a basic prompt first so the room sees one clean answer, then run a crosswalk so they see the agent reason across sources.
- **Show one source once.** Pull up the underlying portal for a single number so the audience trusts that the agent is reading the real record, not improvising.
- **Every number is checkable.** That is the point of grounding — if a figure looks off, the agent can cite where it came from, and you can verify it.

## Contributing a journey

Have a question your community keeps asking? Add it. Open a PR with a new user story + prompt in the matching section, or a new crosswalk if it chains sources in a way not shown here. Real questions from real board meetings, newsrooms, and nonprofits are exactly what makes this resource useful.

<script src="{{ '/assets/js/live-demos.js' | relative_url }}"></script>
