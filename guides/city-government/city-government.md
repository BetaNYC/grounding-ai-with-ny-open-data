---
status: DRAFT
---

# Demo script — people who work in City government

> **DRAFT.** First pass, 2026-08-04. A run-it-live script for showing BetaNYC's grounded AI and the NYC/NYS open data connectors to a **general city-government audience**: agency program staff, data and analytics teams, budget and procurement staff, communications, and agency counsel.
>
> **Slide companion:** [`city-government-deck.html`](city-government-deck.html). Same chapters, presentation medium, every warning below carried in its presenter notes (press `N`). **This file stays the source of truth for figures and provenance.**
>
> **Every numeric claim in the deck was verified live from a BetaNYC machine on 2026-08-03.** Checkbook and the Socrata 311 aggregate were both run that morning. The provenance table at the bottom of this file records each one.

> 🚨 **The 311 figures move daily.** They are the demo for a chapter whose whole argument is that this data is live. Quoting a stale count on the freshness slide is the one unforced error available in this material. **Re-run before you present.**

## Who this room is, and how it differs

Every other script in this repo demos to someone outside government looking in: a watchdog, a faculty member, a community board. **This audience works inside the thing being queried**, and that inverts two assumptions the other scripts make.

**First, they have better data than you do about their own operations.** A council district script can open with "here is what is happening in your district" because the member does not have that assembled. An agency program manager does not need a public dataset to tell them about their own caseload. **Do not pitch published data as a substitute for a system of record.** The deck concedes this on slide 2 and the concession is load-bearing.

**Second, "accountability" is not the frame.** The same Checkbook query that a watchdog room hears as oversight, this room hears as procurement intelligence they are currently missing. Both readings are true. **The second one is more useful and more likely to earn a second meeting.**

What they do lack, and what this material is actually for:

1. **The cross-agency view.** Any agency can see its own spending. No agency can see the other twenty-one paying the same vendor.
2. **The computed answer.** An aggregate over live rows is not a document, so no amount of searching will find one.
3. **A method they can hand to staff.** Most of what is demoed here is reproducible by anyone with a browser and no account.

---

## Before you start (2 min)

- **Re-run the two live queries** (Chapter 1 slide 3, Chapter 2 slide 8) the morning of. Both are listed with exact parameters in the provenance table below.
- Have [NYC Open Data](https://data.cityofnewyork.us) and [Checkbook NYC](https://www.checkbooknyc.com) open as reference tabs so you can resolve any figure on demand.
- **Ask the room who they are before slide 2**, and reorder. Data and analytics staff want Chapter 1. Budget and procurement want Chapter 2. Communications and operations want Chapter 4, which is about how BetaNYC runs itself.
- Runs about 30 minutes at full length. **Cuttable, in order: slide 16, then slide 6. Do not cut slide 15**, the automations, which is usually the one non-technical staff engage with most.

---

## Chapter 1 — The open data portals, in depth (10 min)

**Slides 3–7.** This is the longest chapter and the one to protect if time runs short.

### The argument

A search engine can only return a document somebody already wrote. **An aggregate over live rows is not a document.** That is the entire distinction, and it is worth stating in those words rather than claiming the assistant is somehow smarter than a search box.

### The demo (slide 3)

> "How many 311 complaints has Brooklyn filed since July 1, by type?"

Returns, as of 2026-08-03: **108,042** Brooklyn service requests created since July 1, broken out as Illegal Parking 18,662, Noise–Residential 10,307, Noise–Street/Sidewalk 5,667, Blocked Driveway 5,036, Unsanitary Condition 4,122, Water System 4,088.

**That table did not exist until the question was asked.** It was computed, server-side, by a database that grouped and counted on request.

If someone asks why illegal parking dominates: **do not theorize.** Say you do not know, and that the honest next query is a breakdown by agency and resolution status. The demo's job is to get you to the next question in ten seconds, not to answer this one.

### Four ways the search-engine path fails (slide 4)

1. **It returns writing about data** — an article, a dashboard, a PDF summary. All of them are somebody's reading of the rows at some past moment.
2. **It cannot compute.** Count, group, sum, filter by date range. A search index matches text against documents; it does not do arithmetic.
3. **It has no freshness contract.** A highly-ranked page may be four years stale and nothing on it says so.
4. **Asking a chatbot instead is worse.** A model with no connector will produce a confident, plausible, sometimes invented dataset ID, and nothing in the answer tells you which.

**The fourth is the one to dwell on.** A four-by-four identifier like `erm2-nwe9` is exactly the shape of string a language model will fabricate, and a fabricated one looks identical to a real one.

If you want to demonstrate this live: ask an assistant with no connectors for the dataset ID of some obscure NYC dataset, then check it. **Do not promise the room it will fail on cue.** Sometimes it gets it right, which is itself the point — you cannot tell from the answer.

### The mechanism, four steps (slide 5)

1. **Catalog search** returns real dataset identifiers with owners and update dates. The assistant does not recall an ID from memory.
2. **Schema read** gets the actual column names, which is why the filter says `borough` when the column is `borough` and not when it is `boro`. Column naming in NYC Open Data is **not** consistent across datasets; this step is not ceremony.
3. **A real database query.** The assistant composes SoQL and the portal executes it. **The arithmetic happens on the City's server, not in the model.**
4. **An answer with a handle** — the dataset ID and the filter, so anyone can re-run it, including someone who wants to prove you wrong.

**Say the summary line in these words: "The AI is the interface, not the arithmetic."** In a government room it is the sentence that decides whether the rest of the meeting is about capability or about risk.

### City and state (slide 6)

Both portals run on Socrata, so the same connector reaches `data.cityofnewyork.us` and `data.ny.gov`. You change one parameter.

**And they share no join key.** The two catalogs publish overlapping subjects at different granularity with different geography and identifiers. Matching is manual. **Do not let the convenience of one tool imply a join that does not exist.**

Neither portal requires a key to read. Registration only lifts anonymous rate limits. **There is nothing to procure to start.**

### Three traps (slide 7)

- **The dataset that looks current and is not.** Published, indexed, findable, superseded. Check the update date as a matter of course.
- **Geography that predates current lines.** NYC's Broadband Adoption by State Senate District dataset (`9bjg-n96a`) has 26 rows, all created 2020-06-19, and **does not contain District 59**. It answers cleanly and it answers for the wrong map. A digital-equity analysis built on it would be quietly wrong for a third of the city's senate districts.
- **Silent row limits.** A result of exactly N rows against a limit of N is indistinguishable from a complete result of N rows. **Treat that case as truncated until checked.**

None of the three produce an error. All three produce a number you could put in a memo.

---

## Chapter 2 — Checkbook NYC (5 min)

**Slides 8–9.** The shortest chapter and the one with the strongest single finding.

### The demo (slide 8)

> "What did the City pay Microsoft in FY2026, and which agencies paid it?"

Returns, verified 2026-08-03: **49 check records, $14,482,518.24**, spread across roughly two dozen agencies — NYPD, OTI, DEP, DSS, Finance, FDNY, Health, Mayoralty, ACS, DYCD, DCAS, Law, Parks, HPD, Sanitation, DDC, Consumer and Worker Protection, Probation, City Planning, the Comptroller, CUNY, and the School Construction Authority. The largest single check is **$3,667,552.00** to NYPD for the MS Unified Support Master Agreement.

**49 of 49 returned against a page size of 50, so the set is complete rather than truncated.** Say that if anyone asks how you know it is all of them — it is exactly the trap Chapter 1 warned about, and this is the answer to it.

**Frame this as useful to them, not as scrutiny of them.** Any one agency sees its own payments; no agency sees the other twenty-one. The citywide view exists in the Comptroller's published data and nowhere in an agency's own system.

### The finding hiding inside the demo (slide 9)

The obvious query is complete, correct, and **still not the number you wanted**.

The City's Microsoft enterprise license agreement is two checks issued **2026-01-20** under contract `DO185820262006811`, purpose **"OTI MS ELA Renewal – Year 1"**, totalling **$53,006,444.85** — split across budget codes 8100 (Citywide Support) and 3334 (Microsoft ELA Intra-City Funding), same document ID.

**The payee is DELL MARKETING LP.** A payee-name search for MICROSOFT never sees it.

Most large software is bought through a reseller, so the vendor on the check is not the vendor you are asking about. The connector's own tool documentation warns about exactly this, and the slide-8 demo walks straight into it. **The fix is to search the contract purpose, not only the payee name.**

> 🚩 **Do not say "the City spent $67 million on Microsoft."** We have not established that the Dell ELA payments and the 49 Microsoft checks are disjoint, non-overlapping, or exhaustive of Microsoft-related spending citywide. **The claim on this slide is about the search, not about the total.** Summing the two figures in front of this room would be precisely the error the deck spends ten minutes warning against.
>
> If someone asks for the real citywide figure: say it is a good question, that it needs a purpose-text sweep across resellers, and offer to run it and send it. **Then actually do it.**

**This is the best material in the deck, and it is best because the tool did not save you from the mistake. Reading the result did.**

---

## Chapter 3 — The rest of the toolbox (2 min)

**Slide 10.** **Do not read the grid.** Point at it, say "nine connectors, all public repos," and ask which two matter to the people in the room. Then talk about those two.

| Connector | Covers |
|---|---|
| `nyc-council-mcp` | Bills, sponsors, committees, hearings, votes, from Legistar |
| `nyc-record-mcp` | Procurement notices, solicitations, awards, public hearings |
| `nyc-charter-laws-rules` | Charter, Administrative Code, and Rules as full legal text |
| `nyc-311-mcp` | Live service-request status and the city-services calendar |
| `New-York-City-Budget` | Adopted budgets, discretionary awards, capital projects, transparency resolutions |
| `nys-openlegislation-mcp` | Albany's bills, laws, members, committees |
| `nyc-checkbook-mcp` | Spending, contracts, budget, payroll, revenue — Chapter 2 |
| `socrata` | The City and State open data catalogs — Chapter 1 |

The ninth is Google Workspace, which is how the assistant reaches BetaNYC's own documents. **It is not on the deck's grid because it is not a civic data source**, and padding the count would be the wrong instinct in a deck about precision.

---

## Chapter 3b — The round trip (4 min)

**Slide 11.** What happened when we reported a problem to an agency.

| Date | What happened |
|---|---|
| Jul 16–21 | Checkbook's documented API began returning **403** to us. The site loaded fine in a browser. |
| Jul 22 | We wrote to the Comptroller's office. Three asks. **No header spoofing and no working around the block.** |
| Jul 24 | **They answered in two days** — a real technical response, their CIO looped in, an offer of a call. |
| Jul 28 | Access working. **The residual block was ours.** We were exceeding a rate limit. |

Our client was following redirects, so we were making roughly **forty requests** against their origin for every one logical API call. Their fix had already worked; what we were still measuring was our own client getting itself blocked. Fixed on our side in `nyc-checkbook-mcp` v1.6.0.

They also corrected one of our published findings. We had reported that a prime-expense registration date was not exposed. **It is. We had missed a field that was there all along.**

**This slide reads completely differently to a room of city staff than it did to a watchdog room**, and that difference is why it is here. To them it is a story about an agency responding well in two days, and about an outside group publicly owning that it was at fault.

> ⚠️ **This slide carries no ask.** Report the finding, say what we did about it, and stop. Do not invite the room to co-sign anything and do not critique another office's published product.

One open finding, if asked: the rate limit is real and reasonable, and it is **documented nowhere**. We learned it by violating it and being well-connected enough to get someone on the phone. A researcher hitting the same wall just experiences an outage and concludes the data is unreliable. That has been passed back to the office and that is where it sits.

---

## Chapter 4 — How BetaNYC runs on this (6 min)

**Slides 12–15.** Everything before this is a tool we give away. This chapter is how we actually use it, because a demo you do not use yourself is a brochure.

### The newsletter pipeline (slide 13)

*This Week in NYC's #CivicTech*, six phases:

1. **Research**, Monday — a scanner sweeps roughly 130 civic-tech sources plus reader submissions and writes an editorial brief.
2. **Triage**, Tuesday–Wednesday — **a human editor marks every candidate Include, Featured, or Skip.** There is no command for this phase, deliberately.
3. **Update**, Wednesday — marked rows export into the week's picks file.
4. **Format**, Thursday — subject line, preview text, dividers.
5. **Publish**, Thursday — WordPress draft, Mailchimp draft, LinkedIn copy. **It never auto-sends.**
6. **Promote**, Thursday–Friday — social scheduled across the remaining channels.

**Phase 2 and "never auto-sends" are the whole point of this slide for a government audience.** The question underneath every AI conversation in a public agency is "what happens without a human," and the honest answer here is that nothing goes out.

> ⚠️ **Source count:** our own documentation disagrees with itself — two files say ~130 and a third says ~115. **Say "roughly 130."** If pressed, say the exact figure is inconsistent in our docs and you will confirm it. Do not defend a number you cannot source. Tracked as an open cleanup item.

The pipeline has run end to end for real, including a first live multi-channel publish that surfaced and fixed four genuine platform API bugs. **If asked whether this is aspirational: it is not, it ships weekly.**

### The accessibility audit (slide 14)

**2026-05-14**, beta.nyc, standard **WCAG 2.1 AA**. An automated **axe-core 4.9.1** scan across **21 pages**, plus manual DOM inspection on the 10 highest-traffic pages. **23 distinct issues**, 7 of them sitewide: **5 critical, 9 serious, 6 moderate, 3 minor.**

The unglamorous half: missing alt text on team headshots, unlabeled newsletter form inputs, a missing skip link, and link text reading "More Details" eight times on one page — which a screen reader announces as eight identical destinations.

Remediated, then **re-checked by reading the live page's DOM back**, not by trusting the report that said it was fixed.

**An automated scan finds the machine-detectable half.** It cannot tell you whether your alt text is any good, only that it exists. The manual pass is not optional and the slide should not imply otherwise.

This transfers directly — most agencies have a public-facing site under the same obligations and very little capacity to audit it. axe-core is open source.

> **Do not overclaim autonomy.** The remediation ran through our WordPress specialist agent and a person reviewed and approved the changes.

### The automations (slide 15)

- **Beta Builders Discord.** Our membership database is the **sole source of truth** for who gets in. A single-use login link binds a Discord account to a membership record, and a **nightly job removes any role the database does not justify.** Access is earned by donating, attending an event, or being on a curated list. It has granted access automatically off a real donation.
- **Documentation that cannot go stale quietly.** A checker enforces that a feature change updates its documentation — as a hook after every turn, as a check on every pull request, and again in the weekly review. **It encodes 11 of 15 rules, and the gap is written down**, so a green check is not mistaken for a full pass.
- **Monthly community metrics** across 10 platforms. Five return through APIs; five have no usable API and are collected by driving a browser. The split is documented rather than smoothed over.

**The middle one is the one to defend hardest.** An automated check that silently covers less than it appears to is worse than no check.

> ⚠️ **Do not describe the Slack-to-Discord migration as finished.** It is in flight, with Slack closing later this year.

If the room asks about applying the gating pattern to their own systems: **the useful part is not Discord.** It is one authoritative record of who someone is, with every platform identity hanging off it, so that removing access is one action instead of seven.

---

## Chapter 5 — Can you actually run this (2 min)

**Slide 16.** Cuttable.

**What we can tell you:** the connectors are open source and MIT licensed, the guides are CC BY-SA, most need no API key and no account, and a few need a free key. **There is no BetaNYC service in the middle** — you run them yourself against the City's own public endpoints.

**What we cannot tell you:** whether your agency's IT policy permits installing them, which assistant you are permitted to use, or how any of this interacts with your own procurement and security review. **We have not been through that process and should not pretend otherwise.**

> **Do not bluff this.** Somebody in the room will know their agency's review process far better than you do, and guessing at it destroys the credibility the previous fifteen slides bought.

The practical out, and it is true: **the public data is public either way.** Every query in this deck can be run by anyone with no account, which is worth remembering before it becomes an IT ticket. Offer to run one for them and send the result with the dataset ID attached.

---

## Closing (1 min)

**Slide 17.** The ask is the last line: **get one concrete recurring question out of the room before you leave.** A query their team runs by hand every month is exactly the user journey worth adding, and it is worth more than a follow-up meeting.

The disclosure line — BetaNYC received $25,000 in FY2026 Council discretionary funding via the Fund for the City of New York — is deliberately small here. A watchdog room gets it as its own card. This room does not need it made into a moment, but **leaving it out of a deck that teaches people to query discretionary funding would be worse.**

---

## Presenter notes

### Figures and their provenance

Every figure below was run live from a BetaNYC machine on **2026-08-03**. Nothing in this script is illustrative or reconstructed.

| Figure | Value | Source and exact call |
|---|---|---|
| Brooklyn 311 since July 1 | 108,042 total; Illegal Parking 18,662, Noise–Residential 10,307, Noise–Street 5,667, Blocked Driveway 5,036, Unsanitary 4,122, Water System 4,088 | Socrata `erm2-nwe9`, `data.cityofnewyork.us`, `where: created_date > '2026-07-01T00:00:00' AND borough='BROOKLYN'`, `group: complaint_type`, `order: n DESC` |
| Microsoft FY2026 checks | 49 records, $14,482,518.24 | `search_spending(payee_name="MICROSOFT", fiscal_year="2026", page_size=50)` — 49 of 50, set complete |
| Largest single Microsoft check | $3,667,552.00, NYPD, MS Unified Support Master Agreement, `DO105620262000541`, issued 2025-07-28 | same call |
| Microsoft ELA via reseller | $30,473,296.68 + $22,533,148.17 = **$53,006,444.85**, DELL MARKETING LP, contract `DO185820262006811`, issued 2026-01-20 | `get_agency_spending(agency_code="858", fiscal_year="2026")` |
| OTI FY2026 spending records | 14,986 | same call, `total_records` |
| Broadband by Senate District | 26 rows, all created 2020-06-19, no District 59 | `9bjg-n96a`, carried from the SD-59 script, **verified 2026-07-21, not re-pulled** |
| beta.nyc accessibility audit | 21 pages, 23 issues, 5/9/6/3 by severity | BetaNYC internal audit, 2026-05-14, WCAG 2.1 AA, axe-core 4.9.1 |
| BetaNYC discretionary award | $25,000, FY2026, via Fund for the City of New York | Carried from the Reinvent Albany script |

### What this script does not establish

- **A citywide Microsoft total.** See the slide-9 warning. We know the payee-name search is incomplete; we have not measured how incomplete.
- **Whether the 49 Microsoft checks and the Dell ELA overlap.** Not checked. Do not sum them.
- **Whether reseller purchasing is broadly the pattern or specific to this vendor.** One example is not a finding about procurement generally.
- **The exact scanner source count.** Our own docs disagree.

### Silent traps worth knowing cold

- **Row caps.** Every connector caps what it returns and none announce it. Exactly-N against a limit of N is the signature. We have shipped a truncated total ourselves by trusting a result that looked complete.
- **Payee name is not vendor identity.** Chapter 2 is built on this.
- **Column names are not consistent across NYC Open Data datasets.** Schema-read before query.
- **A dataset can be current, correct, and answering for a map that no longer exists.**

### Backup prompts, if one falls flat

- "Which agencies filed the most 311 requests in my district last month?"
- "What NYC procurement solicitations are open right now?" — run live, examples expire fast.
- "What does the Administrative Code say about open data coordinators?" — § 23-507 puts one at every agency, which usually surprises the room.
- "Show me every dataset the City publishes about street trees, and when each was last updated."
