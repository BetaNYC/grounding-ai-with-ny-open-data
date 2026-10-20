---
status: DRAFT
---

# Demo script — Council District 10 (Carmen N. De La Rosa)

> **DRAFT.** Revised 2026-10-19. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to Council Member **Carmen N. De La Rosa** and staff. District 10 covers **Washington Heights and Inwood** in Northern Manhattan.
>
> **Slide companion:** [`district-10-deck.html`](district-10-deck.html). Same structure, same figures. The deck carries every warning below in its presenter notes (press `N`), so you can run the meeting from either one. **This file stays the source of truth for figures and provenance.**

> **Structure.** Every act is a **side-by-side**: the same question run through a real web search, then through the connector. The searches were re-run live on 2026-10-19 and are summarized in the deck. If a live call disagrees with a figure here, trust the live call and say so out loud. That is the demo working, not failing.

Companion to the general [`../user-journeys.md`](../user-journeys.md) catalog, framed for a Council audience: their district's data, their votes, their discretionary funding, the law, and the calendar.

---

## Before you start (2 min)

- District is **10**. In budget data, query her by **`council_member_id` 7806** (her Legistar PersonId). The surname `De La Rosa`, with spaces, returns the same rows today.
- In 311 queries the district is the string `'10'`. Two digits, so the zero-padding trap that bites districts 1–9 does not apply here.
- Keep one official tab open ([Legistar](https://legistar.council.nyc.gov), [Checkbook NYC](https://www.checkbooknyc.com), or [NYC Open Data](https://data.cityofnewyork.us)) so you can show a number is real.
- ⚠️ **Re-run the web searches before the meeting.** Ranking drifts. If a result has moved, update the slide or drop it rather than reading a stale one aloud.
- ⚠️ **Re-pull the 311 figures and the calendar.** They are from 2026-10-19.
- **Read the presenter notes at the bottom before you walk in.** Several natural-sounding prompts fail silently against these tools, and the failures look like successes.

**Opening line:**
> "Rather than tell you what this does, I'm going to ask it six questions your office actually gets, and show you what a web search returns for the same question."

---

## Opening — what we plugged in (90 sec)

Seven connectors, counts verified 2026-10-19 unless marked:

| Source | What it holds | Scale |
|---|---|---|
| Council legislation | Bills, hearings, sponsors, votes | 21,743 bills |
| Charter, Code & Rules | Full text by section | 22,185 sections |
| City budget | Council discretionary expense designations | 156,544 designations · FY2009–FY2027 |
| 311 | Service requests, status, calendar | live |
| The City Record | Procurement and public notices | live |
| NY State legislation | Bills, laws, members | 231,107 bills (2026-07-27; not re-verified) |
| Open data catalog | Any dataset on the portal | live |

Then the four things a web search structurally cannot do: reach **inside a portal's search form** (crawlers see the search box, not the results), **join** four of these in one question, hand you a **citation** you can put in a letter, or tell you **when the answer last changed**.

> ⚠️ **Citywide spending (Checkbook NYC) is not on this list, but it is working as of 2026-10-19; re-test before the meeting.** It was blocked by bot protection from about 2026-07-16. On 2026-10-19 `search_spending` returned 32 records with no error, so Act 3 step two is back. If it is blocked again, the response carries `total_records: 0` **and** an `error` field. Read the error before the count: a zero with an error is not "no payments."

---

## Profile — who is the member? (2 min)

**Start with the question a search engine handles well.** Conceding the easy case is what makes the room believe you on the next five.

**Prompt:**
> "Who is NYC Council Member Carmen De La Rosa?"

**The web search (run 2026-10-19)** returns Wikipedia, a WNYC "51 Council Members, 52 Weeks" segment, a PoliticsNY Q&A (April 2026), intro.nyc and a West Side Spirit reelection story. Its summary is good on background. But **one answer names two chairmanships**: "chair of the City Council Labor Committee," and then "Technology (chair)" among her other committees. It also adds Marble Hill to the district, which we have not verified.

**What to say:**
> "Good sources. But one of those two chairmanships is out of date, and nothing on the page tells you which one, or as of when."

**The connector, verified 2026-10-19:**

| Field | Value |
|---|---|
| PersonId | **7806**, active, District10@council.nyc.gov — the key that joins to votes, funding and committees |
| Committee | Committee on Technology — **listed contact**, 5 members |
| Civil Service and Labor | listed contact **Shirley Aldebol**, District 13 |
| District office | 618 West 177th Street, Ground Floor, 10033 |
| Record last modified | **2021-11-03** — *before she took office* |

> ⚠️ **Do not say the web "made it up."** Committee chairs change between sessions, and she may well have chaired Labor previously. The honest claim is that the web result is *undated* and Legistar is current.
>
> ⚠️ **Say "listed contact," not "Chair," when citing our data.** The field is `BodyContactNameId`, conventionally the chair for council committees, but it does not literally say so.

**Also in this connector:** `get_council_member` (any member) · `list_committees` (every body) · `get_committee` (roster and volume).

---

## Act 1 — Your district, right now (3 min)

**Prompt:**
> "Top 311 complaints in NYC Council District 10, last 30 days?"

**The web search returns pages about 311, not 311 numbers.** The only figure is a 2018 citywide count on the Council's own 311 page. The rest is a 2011 DNAinfo map story, a CBS story on a Council study, Int 0478-2026 (a bill that would require district-level reports and is still in committee), and two other community boards' complaint pages. Its own summary says it found no current district data.

**What to say:**
> "It told me where I might look. It didn't look."

**Verified 2026-10-19** — 8,295 service requests created 2026-09-19 to 2026-10-18:

| Complaint type | Count |
|---|---|
| Noise – Street/Sidewalk | 1,217 |
| Noise – Residential | 952 |
| Illegal Parking | 840 |
| **UNSANITARY CONDITION** | 578 |
| **HEAT/HOT WATER** | 517 |
| PLUMBING | 361 |
| PAINT/PLASTER | 338 |
| DOOR/WINDOW | 278 |
| WATER LEAK | 212 |
| FLOORING/STAIRS | 210 |

**Where to linger.** Heat season started October 1, and housing-condition complaints have arrived: Unsanitary Condition, Heat/Hot Water, Plumbing, Paint/Plaster and Water Leak are all in the top ten. If the office reacts, follow it; that leads into Act 4.

> Don't editorialize past the data. What the numbers show is *what residents called 311 about*, which is a measure of complaint behavior as much as of underlying conditions.

**Also in these connectors:** `get_calendar` (alternate-side parking and collection) · `get_service_request` (one request by number) · `socrata` (any dataset on the portal).

---

## Act 2 — Your roll call (4 min)

**Prompt:**
> "How has NYC Council Member De La Rosa voted?"

**The web search returns two real votes.** citymeetings.nyc has her explaining her vote to override the mayor's vetoes (2024-01-30) and her vote on fire safety and DOT oversight (2024-12-19). The rest is Wikipedia, a reelection story and the Green Book. citymeetings.nyc is a civic-tech peer doing good work, so be generous: it is two votes, not a record.

**What to say:**
> "The web found two votes you talked about. This has every vote you've cast since you took office."

**The connector, verified 2026-10-19:** 3,134 votes on **2,884 distinct matters**, introduced 2022-01-20 through 2026-10-08. 3,069 Affirmative, 9 Negative, 54 Absent, 1 Abstain.

| Matter | Position | Note |
|---|---|---|
| Res 0551-2026 | Affirmative | Expense budget designations — **the resolution behind Act 3** |
| Res 0542-2026 | Affirmative | FY2027 capital budget |
| LU 0111-2026 | Affirmative | 511 West 171st Street, **her district** |
| Int 0972-2026 | Affirmative | Unincorporated business tax credit · intro.nyc/0972-2026 |

**The drill-down.** `vote_breakdown("Int 0983-2026")` returns the full split: 51 recorded, 42-6-1 at the 2026-07-16 Council meeting.

> ⚠️ **`get_voting_record` defaults to the 50 newest votes and returns no total.** An unbounded call shows October 2026 land-use items, not the rows above. Pass a large `limit` and check you got fewer rows than you asked for, or ask for a specific matter. Rows repeat across committee and full council, so **dedupe by `file_number` before you say a count out loud.**

> ⚠️ **Int 0983-2026 is the elected-official compensation bill.** She voted Affirmative. Public record, but leading with a member's own pay in her office reads as a gotcha. Drill into Res 0551 or LU 0111 unless asked.

> ⚠️ **Her nine No votes include the FY2024 budget resolutions** (Res 0706 through 0709-2023). Same rule: public record, don't lead with them. Most Council votes are consensus items, so do not characterize any of it as a voting philosophy.

> ⚠️ **Do NOT cite `PersonUsedSponsorFlag`.** It reads `0` on her record, and she is one of 28 sponsors on Int 1122-2024. It does not mean what its name suggests.

**Also in this connector:** `co_sponsors` (who she signs on with most) · `get_bill_history` (every action, in order) · `vote_breakdown` (all 51 members on any matter).

---

## Act 3 — Your funding, from allocation to check (5 min)

### Step one — the allocation

**Prompt:**
> "What did NYC Council Member De La Rosa fund in FY2027?"

**The web search finds the source, not the list.** Re-run 2026-10-19, it returns the Council's own Transparency Resolution PDFs (July 16 and August 13, 2026), her 2024 floor speech on that year's budget, two members of Congress's "Rosa" project letters, a Manhattan Community Board 2 package, and Phil Wong's budget page. Its summary quotes some of her FY2027 items by name (Latino Film Market, Centro Civico Cultural Dominicano, the Dominican Day Parade) and then says it found "no single summary of her total FY2027 funding." Be fair: the line items exist. They are scattered across long PDFs, mixed in with every other member's, with no total.

**What to say:**
> "The search found the right documents. It left me to read them. This read them, and gave me the total, the cleared status and the agency."

**Verified live 2026-10-19: 151 cleared awards, $1,777,000.** Another 46, $481,000, are Pending. FY2026 for comparison: 198 cleared, $2,390,000.

| Amount | Recipient | Initiative |
|---|---|---|
| $87,000 | Department of Sanitation | NYC Cleanup, Council District 10 |
| $65,000 | Northern Manhattan Improvement Corporation | Domestic Violence and Empowerment (DoVE) |
| $55,000 | Center for Employment Opportunities | NYC Cleanup, Council District 10 |
| $50,000 | Dominican Women's Development Center | Domestic Violence and Empowerment (DoVE) |
| $30,000 | Community League of the Heights (CLOTH) | NYC Cleanup, Council District 10 |

**What to say:** "That is your office's discretionary funding, by organization, by dollar, by agency, and whether it has cleared. The list your budget director keeps in a spreadsheet."

> This is **the Council's discretionary funding disclosure**, its own award-level list. It is a later snapshot than the adopted budget's Schedule C, so it includes designations made after adoption, and each row carries a Cleared or Pending status. Say "discretionary awards," not "Schedule C." Quote the **Cleared** figure; Pending rows move.

> ⚠️ **The Alianza Cultural Center awards to Catholic Charities ($350,000 + $150,000 in FY2027) are filed under the Speaker**, not De La Rosa. Do not present them as hers.

> ⚠️ **Query by member, never by district number.** There is no district filter. Asking with `council_district=10` is rejected by name, pointing to `council_member` or `council_member_id`. Do it on purpose in the room; see the presenter notes.

**Also in this connector:** `search_disclosure_awards` by `ein` (one org across all members) · `search_council_capital` (Council-funded capital, by district for FY2026–27) · `compare_capital_to_omb` (Council list vs OMB) · `list_available_fiscal_years` (what each year holds).

### Step two — the check

**Prompt:**
> "Now check NYC Checkbook for FY2026 spending paid to Community League of the Heights."

> ✅ **Checkbook is working as of 2026-10-19; re-test before the meeting.** `search_spending` returned 32 records with no error. If it is blocked again, the response carries `total_records: 0` **and** an `error` field. Read the error before the count. **Fallback:** keep [checkbooknyc.com](https://www.checkbooknyc.com) open in a browser and show the payment there yourself.

**Verified 2026-10-19: 32 payment records in FY2026**, including:

| Amount | Agency | Budget code |
|---|---|---|
| $238,840.00 | DYCD | 3548 (SONYC Public Schools) — COMPASS Program |
| $139,040.20 | DYCD | 9825 (Boro Needs) |
| $107,244.16 | DYCD | **3625 (Tax Levy Elected Officials)** |
| $46,500.00 | DYCD | 9825 (Boro Needs) |
| $33,000.00 | DYCD | **3625 (Tax Levy Elected Officials)** |
| $2,560.00 | DYCD | **3625 (Tax Levy Elected Officials)** |

> ⚠️ **Do not call those checks her money.** The three 3625 checks total $142,804.16. Her own FY2026 designations to CLOTH total $40,000 ($30,000 NYC Cleanup, $10,000 Community Safety and Victim Services). Code 3625 carries discretionary money from more than one source.

**What to say — this is the payoff, so slow down:**
> "Look at the budget code on those three. *Tax Levy Elected Officials.* That is Council discretionary money showing up as actual checks to an actual organization in your district. We just went from where money was *designated* to where it was *spent*, across two separate city systems, in two questions. That is the reconciliation your office does by hand."

### The digital-equity thread

**She chairs Technology. She co-sponsored the broadband law. She funds digital inclusion.** Three separate systems, one thread.

Four FY2027 awards sit under the **Digital Inclusion and Literacy Initiative**, **$90,000** in total, all administered by DYCD (verified 2026-10-19):

| Amount | Recipient | Program | Status |
|---|---|---|---|
| $25,000 | NYC First, Inc. | Youth Robotics Leagues & STEM | Cleared |
| $25,000 | Futures Ignite, Inc. | College & Career Pathways | **Pending** |
| $20,000 | Renaissance Technical Institute | Workforce Training | Cleared |
| $20,000 | Business Outreach Center Network | Council District 10 | Cleared |

FY2026 was the same four organizations, $90,000, all Cleared.

**And the law.** **Int 1122-2024**, "a plan for expanding home access to broadband internet," was **enacted 2025-11-08** as Local Law 153 of 2025, through the **Committee on Technology**. De La Rosa is among 28 sponsors. It became law without the Mayor's signature ("Returned Unsigned by Mayor," 2025-11-10).

**What to say:**
> "You chair the committee, the bill came through your committee, and you funded four organizations doing the work on the ground. I pulled that from three different city systems."

**The reveal:** open [intro.nyc/1122-2024](https://intro.nyc/1122-2024). The URL resolves and the status matches. Much better on a projector than a Legistar `LegislationDetail.aspx` URL.

> **Do not characterize how any funding decision was made.** Say what the record shows and stop. **BetaNYC is not a grantee here**, unlike District 4. This thread is about her work, not an ask.

---

## Act 4 — Looking at NYC's Laws (4 min)

**Lead-in:** "Plumbing and water leaks are in your top ten this month. So what does the law require of building owners?" If the office raises a different priority, follow it, but rehearse the query first (see the keyword warning below).

**Prompt:**
> "What are NYC building owners required to do about drinking water tanks?"

**Be scrupulous about the left column.** The web search (run 2026-10-19) is good: the Health Department's inspection FAQ and Health Code chapter, intro.nyc's page for Local Law 2017/239 (which amended § 17-194), an apartment-law article and a City & State story. Its summary gets the January 15 report deadline and the Health Department's $500 penalty (doubling on default) right. Do not say it failed.

**What to say:**
> "The search found good guidance. It didn't find the law itself, the statute's penalties, or the part your constituents can actually use."

**The connector, verified live 2026-10-19:**

> **§ 17-194(b) Admin Code — Drinking water tank inspections**
> Any owner of a building with a water tank in its drinking water supply system "shall have such water tank inspected **at least once annually**," by a licensed master plumber (or someone under one's direct supervision) or a registered design professional.

> **§ 17-194(j) Penalties**
> **$200 to $2,000 per violation** for the inspection duty. Failing to post the tenant notice: **up to $250.** An unsafe tank or support: $200 to $2,000.

Plus 24 RCNY chapter 31: report by January 15, $500, doubling on default.

### The precision point

**The tenant notice.** Subdivision (d) requires the owner to **post a notice telling tenants the results are on file and how to request them**, with a five-business-day turnaround, and that they can contact the Health Department if the owner doesn't deliver. That is directly usable by a constituent in a building with bad water, and the search summary doesn't mention it. Nor does it quote the statute's own penalties.

> ⚠️ **Charter search is keyword matching, not semantic.** `water tank inspection` works. `heat hot water residential` and `noise nighttime construction` returned **zero** when last checked (2026-07-27). **Rehearse your queries.** Improvising a phrasing in the room will demo an empty result set.

> ⚠️ **Read the legal disclaimer if anyone treats this as advice.** It is research material, not legal advice. The Charter and Administrative Code are current through **Local Law 2026/147** (enacted 2026-09-12) and the Rules through 2026-10-04, not necessarily through today.

**Also in this connector:** `get_section` (any citation, exact) · `list_titles` (browse the Code by title) · `get_version` (what the corpus is current through).

---

## Act 5 — What's in front of the Council (3 min)

**Prompt:**
> "What NYC Council hearings are coming up?"

**The web search returns old schedules.** Capalino's weekly Council hearing schedules from 2018 and other past years, and a City Limits housing calendar from March 2025. Nothing for this week.

**The connector, verified 2026-10-19** (`upcoming_events`; local index, may be 1–7 days stale):

| Date | Body | Location | Agenda |
|---|---|---|---|
| 2026-10-20 | Subcommittee on Landmarks, Public Sitings, Resiliency and Dispositions | 250 Broadway, 8th Fl, Rm 3 | **Final** |
| 2026-10-21 | Committee on Land Use | 250 Broadway, 8th Fl, Rm 3 | **Final** |
| 2026-10-21 | Committee on Public Safety | 250 Broadway, 8th Fl, Rm 2 | **Deferred** |

**The honest detail is the third row.** Public Safety shows `Deferred`, not `Final`. The tool distinguishes a settled agenda from an unsettled one.

**What to say:**
> "Two of these you can plan around. The third one it's telling you not to trust yet. That distinction is the difference between a calendar and a guess."

> ⚠️ **`get_upcoming_hearings` is extremely verbose** — land use items run to hundreds of block-and-lot references. Use `upcoming_events` for the overview, and drill into one event's agenda only on request. These are citywide; `get_event_bills` on a given event shows which council districts each land use application touches.

> ⚠️ **Re-run the morning of the meeting.** These are 2026-10-20/21 events. If you present after those dates the table is simply wrong.

**Also in this connector:** `get_event_bills` (what's on a given agenda) · `search_events` (past meetings) · `nyc-record-mcp` (public hearing notices citywide).

---

## Closing (1 min)

> "Every figure here carries the date we checked it. We would rather show you the edge of what we have than let you find it yourself."
>
> "BetaNYC built these connectors and guides in the open. Any office can point its own AI at the real city and state record instead of trusting it to remember. If there's a question your team asks constantly, that's exactly the kind of user journey we want to add."

**Then ask, and write the answers down:**

1. What is the constituent question that takes your office the longest to answer? *(The product specification.)*
2. Where do you go now, and what breaks? *(Usually: email the agency and wait.)*
3. What would you need to show the member for this to be worth ten minutes of your day? *(The adoption bar.)*

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Full prompt catalog: [`../user-journeys.md`](../user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes (verified 2026-10-19)

### Runtime

About **20 minutes** for the full arc. To land in 12, cut **Act 5** and the **digital-equity thread**. Never cut the **profile** (conceding the easy case is what makes the rest credible) or **Act 4**.

### Worth doing on purpose: the parameter the tool refuses

These servers used to accept parameters that were not in their schema, ignore them, and return **unfiltered** results with no error. On 2026-07-21, asking the budget tool for `council_district=10` returned $47.5M of **citywide** awards, which an agent would happily summarize as District 10's funding.

> **Fixed and published.** `nyc-budget-mcp` rejects `council_district` and points at `council_member` (since 1.3.0, [PR #40](https://github.com/BetaNYC/New-York-City-Budget/pull/40)); still true in 2.0.0, verified 2026-10-19, where the message also names `council_member_id`. **Budget 2.0.0 (2026-10-18) is a breaking change:** the award tool is now `search_disclosure_awards`, and the earlier Schedule C tools are gone. Published versions on 2026-10-19: budget 2.0.0, council 2.7.0, checkbook 1.6.3, record 1.1.0, 311 1.1.0, charter 0.3.1, nys 2.4.0.
>
> **Run `/mcp-update` and confirm your versions before presenting.** These load via `npx -y`, so a stale cache can still serve an old build.

Asking for District 10's awards *by district* and having the tool refuse and name the right parameter is a better trust argument than any successful query.

**The correct parameter names, verified 2026-10-19:**

| Task | Correct parameter | Do **not** use | If you get it wrong |
|---|---|---|---|
| Discretionary awards by member | `council_member_id="7806"` (or `council_member="De La Rosa"`, a substring) | `council_district`, `sponsor` | **rejected by name** |
| Checkbook payments to an org | `payee_name="COMMUNITY LEAGUE OF THE HEIGHTS"` | `vendor` | **rejected by name** |
| Socrata aggregate query | separate `select` / `where` / `group` / `order` / `limit` | a single `soql` blob | ⚠️ **still silently ignored** — third-party server |

There is **no district filter** on the budget tool, by design: the disclosure keys on the member, not the district. The agent must map district → member first. Narrate that as a feature: the money follows the member.

### Per-tool notes

- **311 aggregates come from Socrata, not the 311 MCP.** Act 1's roll-up is served by the NYC Open Data 311 dataset (`erm2-nwe9`) via the Socrata MCP. The `nyc-311-mcp` server handles single service-request lookups, the city-service calendar, and status alerts. Don't announce "the 311 MCP" for Act 1. (Same note as [`../community-boards/manhattan-cb1.md`](../community-boards/manhattan-cb1.md).)
- **The 311 field is `council_district`**, values as strings (`'10'`). Check `is_sample` in the response; if it is `true`, the numbers are meaningless.
- **⚠️ Always bound a Socrata catalog search with `limit`.** An unbounded `socrata search` once returned **581 KB** on one query, because it inlines full polygon geometry for any dataset with a `the_geom` column.
- **⚠️ Council legislation search matches keywords, not concepts.** `"broadband digital equity"` returned **zero results** (2026-07-21); `"broadband"` alone returned nine bills including Int 1122-2024 (2026-10-19). If a search comes back empty on stage, *shorten* it. `search_legislation` is an alias of `search_bills`; don't present them as two capabilities.
- **`get_voting_record` defaults to 50 rows and returns no total.** See Act 2.
- **Checkbook `smart_search` was blocked** by a WAF JavaScript challenge (last checked 2026-07-21; not re-tested). Use the structured tools; don't demo smart_search.
- **`search_contracts` cannot filter by vendor name** — the Checkbook API offers only `vendor_code` / `agency_code`. For "what did the city pay this org," use `search_spending` with `payee_name`.
- **`search_spending` requires `fiscal_year` or `issue_date_from`** and errors properly without one.

### Figures and their provenance

| Claim | How verified |
|---|---|
| De La Rosa = District 10, PersonId 7806, last modified 2021-11-03 | `get_council_member("De La Rosa")`, 2026-10-19 |
| Technology: listed contact 7806, 5 members; Civil Service and Labor: Aldebol | `get_committee`, 2026-10-19 |
| **FY2027: 151 cleared, $1,777,000; 46 pending, $481,000** | `search_disclosure_awards(council_member_id="7806", fiscal_year=2027)` — 197 rows; same result by surname. FY2027 workbook of 2026-09-14. 2026-10-19 |
| FY2026: 198 cleared, $2,390,000; 4 pending, $40,000 | `search_disclosure_awards(council_member_id="7806", fiscal_year=2026)`, 202 rows, 2026-10-19 |
| Digital Inclusion: FY2027 4 rows, $90,000 (1 Pending); FY2026 4 rows, $90,000 | `search_disclosure_awards(council_member_id="7806", source="Digital Inclusion", fiscal_year=…)`, 2026-10-19 |
| CLOTH designations FY2026: $30,000 + $10,000 | `search_disclosure_awards(council_member_id="7806", legal_name="Community League", fiscal_year=2026)`, 2026-10-19 |
| Alianza $350,000 + $150,000 filed under Speaker | `search_disclosure_awards(program_name="Alianza", fiscal_year=2027)`, QA review 2026-10-19 |
| CLOTH Checkbook payments, incl. three 3625 checks totaling $142,804.16 | `search_spending(payee_name="COMMUNITY LEAGUE OF THE HEIGHTS", fiscal_year="2026")`, 32 records, no error, 2026-10-19 |
| 3,134 votes, 2,884 matters, introduced 2022-01-20 to 2026-10-08 | `get_voting_record(member_name="De La Rosa", limit=50000)`, deduped by `file_number`, QA review 2026-10-19 |
| Int 0983-2026 split 42-6-1 | `vote_breakdown("Int 0983-2026")`, QA review 2026-10-19 |
| Int 1122-2024 enacted 2025-11-08, Local Law 153 of 2025, 28 sponsors | `search_legislation("broadband")`, `get_bill("Int 1122-2024")`, QA review 2026-10-19 |
| § 17-194 text | `get_section("17-194", corpus="admin_code")`, 2026-10-19 |
| 24 RCNY ch. 31 penalties | `search("water tank inspection")`, QA review 2026-10-19 |
| Corpus currency, 22,185 sections | `get_version`, 2026-10-19 |
| Upcoming events 2026-10-20/21 | `upcoming_events(days=21)`, 2026-10-19 |
| 311 top complaints, 8,295 total | Socrata `erm2-nwe9`, `council_district='10'`, created 2026-09-19 to 2026-10-18, `is_sample: false`, 2026-10-19 |
| Bill and budget counts; 73 Council bodies | `aggregate_bills`, `list_available_fiscal_years`, `list_committees`, QA reviews 2026-10-19 |
| Web search results, all six queries | Run live 2026-10-19, summarized in the deck |

### Still not independently verified

- **District 10's exact boundaries.** "Washington Heights and Inwood" is supported by her district office address (618 W 177th St, 10033) and by a District 10 award to the Washington Heights BID, but the boundary was never checked against a districting source. The web adds Marble Hill; we have not verified that either. Don't recite a neighborhood list to the people who represent it.
- NYS bill count (231,107) and the Council events count: no tool reports a total.

---

## Backup prompts (if one falls flat)

- "Is alternate-side parking suspended this week? What's on the city-service calendar?" *(311 MCP — always returns something)*
- "What does the NYC Administrative Code require of agency open data coordinators?" *(returns § 23-507 — clean, short, and resonates with an oversight audience)*
- "Show me FY2026 discretionary awards to Northern Manhattan Improvement Corporation." *(verified 2026-10-19: 23 rows, $1,965,296, many from citywide initiatives with no member attached)*
- "What does City Charter section 29 say about the Council's oversight powers?" *(a plain "oversight" search ranks § 857, the art commission, first)*
