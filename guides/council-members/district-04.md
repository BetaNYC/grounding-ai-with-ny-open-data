---
status: DRAFT
---

# Demo script — Council District 4 (Virginia Maloney)

> **DRAFT.** Revised 2026-10-19. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to Council Member **Virginia Maloney** and staff. District 4 covers the East Side of Manhattan, including Midtown East, Murray Hill, parts of the Upper East Side, and Stuyvesant Town/Peter Cooper Village.
>
> **Slide companion:** [`district-04-deck.html`](district-04-deck.html). Same structure, same figures. The deck carries every warning below in its presenter notes (press `N`), so you can run the meeting from either one. **This file stays the source of truth for figures and provenance.**

> **Structure.** Every act is a **side-by-side**: the same question run through a real web search, then through the connector. The searches were re-run live on 2026-10-19 and are summarized in the deck. Every deck prompt names "NYC", so the left column isn't padded with other cities.

---

## Before you start (2 min)

- District is **4**. In budget data she is **Maloney**, Legistar person ID **7894** (`council_member_id`).
- ⚠️ **In 311 queries the district is the string `'04'`, zero-padded.** Querying `'4'` returns **zero rows, with no error**. Affects districts 1–9 only.
- Her first discretionary budget is **FY2027**, not FY2026. FY2026 was adopted before she was seated, so querying it by her surname correctly returns nothing.
- ⚠️ **Re-run the web searches before the meeting.** Ranking drifts. If a flagged result has moved, update the slide or drop the flag rather than reading a stale one aloud.
- ⚠️ **Re-pull the 311 figures, the calendar and the web searches the morning of the meeting.** The 311 figures are from 2026-10-19 (window 2026-09-19 to 2026-10-18).

**Opening line:**
> "Rather than tell you what this does, I'm going to ask it six questions your office actually gets, and show you what a web search returns for the same question."

---

## Opening — what we plugged in (90 sec)

Seven connectors, counts verified 2026-10-19:

| Source | What it holds | Scale |
|---|---|---|
| Council legislation | Bills, hearings, sponsors, votes | 21,743 bills |
| Charter, Code & Rules | Full text by section | 22,185 sections |
| City budget | Council discretionary expense designations (plus Council capital, counted separately) | 156,544 designations · FY2009–FY2027 |
| 311 | Service requests, status, calendar | live |
| The City Record | Procurement and public notices | live |
| NY State legislation | Bills, laws, members | 231,107 bills (2026-07-27; not re-verified) |
| Open data catalog | Any dataset on the portal | SoQL |

Then the four things a web search structurally cannot do: reach **inside a portal's search form** (crawlers see the search box, not the results), **join** four of these in one question, hand you a **citation** you can put in a letter, or tell you **when the answer last changed**.

> ⚠️ **Citywide spending (Checkbook NYC) is not on this list.** It was blocked by Imperva bot protection from around 2026-07-16. It is working as of 2026-10-19 (`search_spending` returned live records); re-test before the meeting. If it answers, you can mention it as an eighth connector; if not, say plainly that it's built and access has been intermittent. During an outage the MCP returns `total_records: 0` alongside its error field, so a naive caller reports "no records exist."

---

## Profile — who is the member? (2 min)

**Start with the question a search engine handles well.** Conceding the easy case is what makes the room believe you on the next five.

**Prompt:**
> "Who is NYC Council Member Virginia Maloney?"

**The web search (run 2026-10-19) does this one well.** It returns Wikipedia, her council biography and District 4 pages, a PoliticsNY Q&A, and a few profiles, and assembles her committee chair, background and education from across them.

**What to say:**
> "I'm going to start with the one question a search engine handles well, so you know I'm not selling you something. Now watch what happens when we ask what she's *done*."

**The connector, verified 2026-10-19:**

| Field | Value |
|---|---|
| PersonId | **7894** — the key that joins to 459 voted matters and 188 FY2027 budget designations |
| Committee | Committee on Economic Development — **listed contact**, 7 members |
| Contact | District4@council.nyc.gov · 212-818-0580 |
| Legistar | `PersonDetail.aspx?ID=329369` (with GUID, from `PersonWWW2`) |

> ✅ **Committee assignment is verified (2026-10-19).** `get_committee("Committee on Economic Development")` returns `BodyContactNameId: 7894`, `BodyContactFullName: "Virginia Maloney"`, `BodyNumberOfMembers: 7`. council.nyc.gov/district-4 lists her as **Chair** of that committee.
>
> ⚠️ **Say "listed contact," not "Chair," when citing our data.** The Legistar field is `BodyContactNameId`, which for council committees is conventionally the chair but does not literally say so. Two independent sources agreeing is good; overstating what our field says is exactly the failure this demo is about.

---

## Act 1 — Your district, right now (3 min)

**Prompt:**
> "Top 311 complaints in NYC Council District 4, last 30 days?"

**The web search returns ten links to community board pages, old news and bills. Not one current number.** Notable: two Brooklyn Community Board 4 pages and a Queens Community Board 1 page (a community board is not a Council district), a 2011 story about a 311 map, and a 2026 bill that would *require* district-level 311 reporting. The search summary says the Council's own 311 page shows 2018 figures.

**What to say:**
> "Ten results, and every one of them is a door. Not one of them walked through it."

**Verified 2026-10-19** — 5,418 service requests, 2026-09-19 to 2026-10-18:

| Complaint type | Count |
|---|---|
| Illegal Parking | 783 |
| **Homeless Person Assistance** | 444 |
| Vendor Enforcement | 321 |
| Noise | 315 |
| **Encampment** | 210 |
| Noise - Street/Sidewalk | 187 |
| Noise - Residential | 183 |
| For Hire Vehicle Complaint | 172 |

**Where to linger.** Homeless Person Assistance at #2, with Encampment at #5, is a distinctive signature. District 10 uptown has no homelessness category in its top five at all. Same city, same 30 days, completely different constituent pressure.

> Don't editorialize past the data. What the numbers show is *what residents called 311 about*, which is a measure of complaint behavior as much as of underlying conditions. Say that out loud if the room starts drawing policy conclusions — it is the kind of caveat that earns trust rather than spending it.

**Also in these connectors:** `get_calendar` (alternate-side parking and collection) · `get_service_request` (one request by number) · `get_status` (agency status) · `socrata` (any dataset on the portal).

---

## Act 2 — Your roll call (4 min)

**Prompt:**
> "How has NYC Council Member Maloney voted?"

**The web search returns ten pages and zero votes, and none of them is about her.** It returns **Carolyn Maloney**, who served in Congress, **Sean Maloney**, another former member of Congress, a congressional scorecard, and five Congressional Record pages. Its own summary says it found nothing on an NYC Council Member named Maloney. All rank because the words match.

**What to say:**
> "Ten results, not one of them a vote, and not one of them about you. It isn't lying to you. It has no idea it missed."

**The connector, verified 2026-10-19:** 459 matters she has voted on, introduced between 2024-02-28 and 2026-10-08, each with a file number. The tool carries each matter's introduction date, not the vote date; use `vote_breakdown` for the date of a vote.

| Matter | Position | Note |
|---|---|---|
| Res 0551-2026 | Affirmative | Expense budget designations — **the resolution behind Act 3** |
| Res 0546-2026 | Affirmative | FY2027 tax levy |
| LU 0112-2026 | Affirmative | East Harlem/El Barrio Article XI |
| Int 0972-2026 | Affirmative | Unincorporated business tax credit · intro.nyc/0972-2026 |

**The drill-down.** `vote_breakdown("Int 0983-2026")` returns the full split: **51 recorded, 42 affirmative, 6 negative, 1 abstain**, plus the committee stage (7 recorded, 5-1). Named negatives (Carr, Morano, Vernikov, Ariola, Wong, Zhuang), a named abstention (Menin), named absences (Mealy, Paladino).

**What to say:**
> "Four hundred fifty-nine matters, every one with a file number you can hand to anyone. And on any single one of them I can show you how all fifty-one members voted."

> ⚠️ **Int 0983-2026 is the elected-official compensation bill.** It is public record and she voted Affirmative, but leading with "here's your vote on your own pay" in her own office reads as a gotcha. **Use Res 0551-2026 or Int 0972-2026 as the drill-down unless she asks.** Judgment call, not a rule.

> ⚠️ **536 Affirmative, 2 Absent, no Negative or Abstain.** Both absences were at the 2026-03-09 Committee on Housing and Buildings meeting (Int 0421-2026, Int 0018-2026). That is a real record, not an artifact: the table discriminates, and the same sessions show named negatives from other members. Most Council votes are consensus items, so do not characterize it as a voting philosophy.

> ⚠️ **`get_voting_record` defaults to 50 rows and returns no total.** Pass `limit` well above the expected count (1000 returned 538) and confirm the result is under the limit. **Treat "returned exactly N against a limit of N" as truncation until proven otherwise.** It also returns duplicate rows (538 rows, 459 matters) because items are recorded at committee and full council. **Dedupe by `file_number` before you say a count out loud.** It carries `intro_date`, not the vote date; use `vote_breakdown` for dates. Worth an upstream issue.

> ⚠️ **Do NOT cite `PersonUsedSponsorFlag`.** *(Retained from 2026-07-21.)* The flag reads `0` for De La Rosa too, a multi-term member who is one of 28 sponsors on Int 1122-2024. It does not mean what its name suggests.

**Also in this connector:** `co_sponsors` (who she signs on with most) · `get_bill_history` (every action, in order) · `get_bill_hearings` (where a bill was heard) · `aggregate_bills` (counts by sponsor and session).

---

## Act 3 — Your first budget (5 min)

**Prompt:**
> "What did NYC Council Member Maloney fund in FY2027?"

**The web search finds the headline, not the list.** It returns her office's FY27 budget page (headline totals, no recipients), other members' budget pages (Phil Wong, Crystal Hudson), citywide budget overviews, and a member of Congress's project requests. Not one individual award.

**What to say:**
> "It found your headline number and two of your colleagues. Not one of the organizations you funded."

**Verified live 2026-10-19: $1,927,000 cleared (166 designations).** A further $221,000 is pending (22). Source: the Council's discretionary funding disclosure, its own award-level list (FY2027 workbook dated 2026-09-14). It is a later snapshot than the adopted budget's Schedule C, so it includes designations made after adoption, each marked Cleared or Pending. Quote the Cleared figure.

| Amount | Recipient | Initiative |
|---|---|---|
| $200,000 | Association of Community Employment Programs for the Homeless | NYC Cleanup |
| $70,000 | Department of Sanitation | NYC Cleanup, Council District 4 |
| $40,000 | Justice Innovation, Inc. | Community Safety and Victim Services |
| $35,000 | City Parks Foundation | Parks Equity |
| $33,000 | Metropolitan New York Coordinating Council on Jewish Poverty | Domestic Violence and Empowerment |
| $30,000 | STPCV Tenants Association Foundation | Local |
| $30,000 | Carnegie Hill Neighbors | Neighborhood Development Grant |

The STPCV Tenants Association's separate $50,000 Speaker's Initiative award is attributed to the **Speaker**, not to her.

**What to say:** "Here are the organizations you funded, by name, by initiative and by agency: about $1.9 million cleared so far."

> ⚠️ **Her office's FY27 page counts its totals differently, and we have not reconciled the two.** Don't quote its figures or compare them with ours in the room. If asked, say the disclosure lists designations under her name, and offer to reconcile.

> ℹ️ **The budget tool reports true totals whatever the `limit`** (v2.0.0: "Totals always cover every match"). The truncation trap now lives in `get_voting_record`; see Act 2.

> ⚠️ **`council_member` still matches as a substring, but the tool now says so.** A FY2026 "Powers" search returns 370 rows and names both Keith Powers (7741) and Brooks-Powers (7796) with separate totals. Read that note before reading any figure aloud. For one person, pass `council_member_id` (Maloney is 7894), and state the fiscal year. Background: [New-York-City-Budget#38](https://github.com/BetaNYC/New-York-City-Budget/issues/38).

**Query by member (surname or `council_member_id`), not by district number.** The tool has no district filter; `zip` and `city` are grantee mailing addresses, not where services were delivered.

**Also in this connector:** `search_council_capital` (Council-funded capital, by district for FY2026–27) · `search_disclosure_awards` by `ein` (one org across all members) · `compare_capital_to_omb` (Council list vs OMB) · `list_available_fiscal_years` (what each year holds).

### The digital-equity thread — this is BetaNYC's opening

Four FY2027 awards sit under the **Digital Inclusion and Literacy Initiative**, $80,000 in total, all Cleared and administered by DYCD (verified 2026-10-19):

| Amount | Recipient | Program |
|---|---|---|
| $20,000 | **Fund for the City of New York** | **AI Training Program** — *this is BetaNYC* |
| $20,000 | Older Adults Technology Services (OATS) | Older Adults Digital Literacy |
| $20,000 | Simon Wiesenthal Center | Digital Equity Program |
| $20,000 | WNET | Arts Broadcasting |

A newly seated member put real money into AI training and digital literacy in her first budget. That is the conversation.

> **Do not characterize how that decision was made.** An earlier draft said it was "her own choice rather than something being pitched to her." Nothing in the data supports a claim about her office's internal process, and BetaNYC is the grantee of the line in question. Say what the record shows and stop there.
>
> **The $20,000 Fund for the City of New York line is BetaNYC's own AI Training Program** — BetaNYC is a project of the Fund for the City of New York (EIN 13-2612524), so our awards appear under its name. Confirmed 2026-07-21, re-confirmed 2026-10-19 (FY27 05420, Cleared).
>
> Handle this with care. The strongest version is *not* leading with "you already fund us." It is running the demo straight, letting the agent surface the award from the public record alongside the other three, and only then noting that one of those lines is us. The tool finding your own funding in the same query that found everyone else's is far more persuasive than saying so up front — and it keeps the meeting about her office's data rather than about an ask.

**A genuine data subtlety worth showing, if the room is engaged:** FCNY carries dozens of programs under one tax ID. So "Fund for the City of New York" in the recipient column doesn't tell you which program; the `[AI Training Program]` program name does. Filtering by organization alone would silently merge unrelated grantees. Say this out loud: it is exactly the kind of thing that makes a naive spreadsheet analysis wrong, and the tool documents the trap in its own description.

---

## Act 4 — Looking at NYC's Laws (4 min)

> **It is the sharpest contrast in the demo. Don't cut it.**

**Prompt:**
> "How long can a sidewalk shed stay up in NYC?"

**This is the subtle one, and the strongest, because the web search gets close.** Re-run 2026-10-19, it says a Council package makes the limit three months with $6,000 monthly fines, then that a DOB proposal penalizes sheds up "more than 180 days," then that it can't confirm which is in effect. Resist the urge to say it failed. It is *uncitable*, and it is unsure in a way that costs you.

**Where the nine results come from:** Yahoo News, NBC New York, Untapped Cities, Time Out, Habitat magazine, a firm's blog (`coleschotz.com`) and a company that sells shed services (`skybriz.com`).

**What to say:**
> "It told you three months, then 180 days, then said it couldn't confirm either. And look where it got them: news stories, a trade magazine, and company blogs. You cannot put any of those in a letter to DOB."

**The connector, verified live 2026-10-19:**

> **§ 28-105.8.1 Duration of permit**
> "Permits may be issued for a period of up to 2 years unless otherwise limited by law. **Exception: Sidewalk shed permits shall be issued for a period of 90 days** and may not be renewed until department penalties for sidewalk sheds in the public right-of-way are paid."
> *(Am. L.L. 2025/048, 4/17/2025, eff. 1/12/2026)*

> **§ 28-220.1 Department penalty for sidewalk sheds occupying the public right-of-way for an extended period**
> Beginning with the **second renewal**, and only **where work is not in progress**: $10 per linear foot per month (shed under 3 years), $100 (3 to 4 years), $200 (4 years or more), **capped at $6,000 per month**.
> **Exception: one- and two-family homes**, and sheds installed for new building, enlargement, or demolition work.

### The precision point

The web summary says penalties apply to sheds up "more than **180 days**." **The statute says something different.** Penalties begin at the **second renewal** and only **where work is not in progress**, tiered by how long the shed has existed. Roughly 180 days is a blog's paraphrase of a rule whose actual test is *the work*, not the clock.

**What to say:**
> "Close enough to sound right in a meeting. Wrong enough to lose the argument when the owner's lawyer shows up."

**And the exemption.** One- and two-family homes are exempt, as are sheds up for new building, enlargement, or demolition. The web search mentions it only as an "earlier" provision it can't confirm still applies. The statute is current. It is exactly the detail a constituent letter has to get right.

> ⚠️ **Charter search is keyword matching, not semantic.** `sidewalk shed` returns 34 results at limit 50 (10 at the default). `noise nighttime construction` and `heat season residential temperature` both return **zero**. **Rehearse your queries.** Improvising a phrasing in the room will demo an empty result set. Verified 2026-10-19. New and worth showing: Rules § 102-07, "Sidewalk Shed Permit Renewal Requirements and Penalties," the DOB rule § 28-220.1 defers to.

> ⚠️ **Read the legal disclaimer if anyone treats this as advice.** It is research material, not legal advice. The corpus is current through **Local Law 2026/147** (enacted 2026-09-12) and rules effective 2026-10-04, not necessarily through today.

**Also in this connector:** `get_section` (any citation, exact) · `list_titles` (browse the Code by title) · `get_version` (what the corpus is current through) · Rules as well as Charter and Administrative Code.

---

## Act 5 — What's in front of the Council (3 min)

**Prompt:**
> "What NYC Council hearings are coming up?"

**The web search returns old weekly hearing schedules, most from 2018, and a March 2025 housing calendar.** No agenda for the current week.

**The connector, verified 2026-10-19** (`upcoming_events`; a local index that can lag 1–7 days):

| Date | Body | Location | Agenda |
|---|---|---|---|
| 2026-10-20 | Committee on Economic Development | Committee Room, City Hall | **Final** |
| 2026-10-21 | Committee on Land Use | 250 Broadway, 8th Fl, Rm 3 | **Final** |
| 2026-10-21 | Committee on Public Safety | 250 Broadway, 8th Fl, Rm 2 | **Deferred** |

**The honest detail is the third row.** Public Safety shows `Deferred`, not `Final`. And the first row is her own committee. The tool distinguishes a settled agenda from an unsettled one.

**What to say:**
> "Two of these you can plan around. The third one it's telling you not to trust yet. That distinction is the difference between a calendar and a guess."
>
> "Agendas, matter numbers, hearing rooms, and which districts each application touches — before the meeting, not after the minutes post. For any office planning its week, this is the least glamorous and most immediately useful thing in the demo."

> ⚠️ **`get_upcoming_hearings` is extremely verbose** — full agenda item text, including land-use applications that run to hundreds of block-and-lot references. Use `upcoming_events` for the overview, as above, and only drill into a single event's agenda on request.

> ⚠️ **Re-run the morning of the meeting.** These are 2026-10-20 and 2026-10-21 events. If you present after those dates the table is simply wrong.

**Also in this connector:** `get_event_bills` (what's on a given agenda) · `get_upcoming_hearings` (full agenda text) · `search_events` (past meetings) · `nyc-record-mcp` (public hearing notices citywide).

---

## Closing (1 min)

> "In July, the voting question came back empty. Today it returns every vote you've cast this term. That is what building in the open looks like."
>
> "BetaNYC built these connectors and guides in the open. Any office can point its own AI at the real city and state record instead of trusting it to remember. And as your record grows, the same questions that came back empty today start coming back full — with citations."

**Then ask, and write the answers down:**

1. What is the constituent question that takes your office the longest to answer? *(The product specification.)*
2. Where do you go now, and what breaks? *(Usually: email the agency and wait.)*
3. What would you need to show the member for this to be worth ten minutes of your day? *(The adoption bar.)*

**Log every question they type when you hand them the keyboard, verbatim, whether or not it worked.** The failures are worth more than the successes. This is the evaluation set.

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Full prompt catalog: [`../user-journeys.md`](../user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes

### Runtime

About **20 minutes** for the full arc. To land in 12, cut **Act 5** and the **digital-equity thread**. Never cut the **profile** (conceding the easy case is what makes the rest credible) or **Act 4** (the sharpest contrast).

### ⚠️ Traps that will silently break this specific demo

**1. Council districts are zero-padded strings in 311 data.** `council_district='4'` returns **zero rows**. `council_district='04'` returns 5,418 (2026-10-19). No error either way. This affects **districts 1–9 only**, which is why the District 10 script never hit it. Verified by querying `IN ('4','04','10')` — only `'04'` and `'10'` come back.

**2. `council_member` matches as a substring — the tool tells you; read the note.** A FY2026 `council_member="Powers"` search returns 370 rows and names both Keith Powers (7741, who held District 4 through FY2026) and Brooks-Powers (7796), with separate totals. For one person, pass `council_member_id`. Verified 2026-10-19.

**3. Charter search is keyword, not semantic.** Rehearse the queries. See Act 4.

**4. `get_voting_record` defaults to 50 rows and returns duplicates.** Pass `limit=1000`; that returned 538 rows, 459 distinct matters. Dedupe by `file_number`.

### Other verified behavior

- **`search_legislation` matches bill *titles*, not subject matter.** `"encampment"` finds nothing, because the term doesn't appear in bill titles. Try a synonym before concluding no legislation exists, and say so if it comes up empty in the room.
- **`get_council_member(name="Powers")`** returns only Brooks-Powers. The member lookup has the same substring behavior as the budget tool.
- **FY2026 has no Maloney awards.** Her first budget is FY2027. Querying FY2026 by her surname returns nothing, correctly. Don't let this read as a tool failure.

### Figures and their provenance

| Claim | How verified |
|---|---|
| First name "Virginia", District 4, PersonId 7894 | `get_council_member(name="Maloney")` → `PersonFirstName: "Virginia"`, `PersonId: 7894`, `PersonActiveFlag: 1`, `PersonEmail: District4@council.nyc.gov`. Verified 2026-07-21, re-verified 2026-10-19 |
| **Committee on Economic Development, 7 members** | `get_committee("Committee on Economic Development")` → `BodyContactNameId: 7894`, `BodyNumberOfMembers: 7`. **Re-verified 2026-10-19** |
| **459 distinct matters; 536 Affirmative, 2 Absent** | `get_voting_record(member_name="Maloney", limit=1000)` → 538 rows, 459 distinct `file_number`, introduced 2024-02-28 to 2026-10-08 (`intro_date`; the tool gives no vote date). **2026-10-19** |
| **Int 0983-2026 split 42-6-1** | `vote_breakdown("Int 0983-2026")` → full council `recorded: 51`. **Re-verified 2026-10-19** |
| **FY2027: $1,927,000 cleared (166); $221,000 pending (22)** | `search_disclosure_awards(council_member_id="7894", fiscal_year=2027)` → 188 rows; same result by surname. **2026-10-19** |
| $20,000 FCNY "AI Training Program" | `search_disclosure_awards(council_member_id="7894", fiscal_year=2027, source="Digital Inclusion")` → 4 rows, $80,000, all Cleared. **2026-10-19** |
| **§ 28-105.8.1 and § 28-220.1 full text** | `get_section(citation="28-105.8.1")` and `get_section(citation="28-220.1")`. **Re-verified 2026-10-19** |
| **Upcoming events 2026-10-20/21** | `upcoming_events(days=21, limit=20)`; three shown, one `Deferred`. **2026-10-19** |
| Corpus counts (21,743 bills / 22,185 sections / 156,544 designations / 73 bodies) | `aggregate_bills`, `get_version`, `list_available_fiscal_years`, `list_committees`, **2026-10-19**. NYS bills (231,107) from 2026-07-27, not re-verified |
| 5,418 complaints; top types | Socrata `erm2-nwe9`, `council_district='04'`, 2026-09-19 to 2026-10-18, `is_sample: false`. **2026-10-19** |
| Web search results, all six queries | Run live **2026-10-19**, summarized in the deck |

### Still not independently verified

- **District 4's exact boundaries.** The neighborhood list in the header is inferred from award recipients and a web-search summary (Carnegie Hill Neighbors, Friends of the Upper East Side Historic Districts, Murray Hill Committee, STPCV Tenants Association) rather than from a districting source. Well supported but not authoritative — don't recite it to the people who represent it.
- **What her office's FY27 budget page counts.** Its totals differ from the disclosure; not reconciled.

---

## Backup prompts (if one falls flat)

- "Is alternate-side parking suspended this week? What's on the city-service calendar?" *(311 MCP — always returns something)*
- "Show me FY2027 discretionary awards under the Digital Inclusion and Literacy Initiative." *(on-theme, and broader than one district)*
- "What does the NYC Charter say about the Council's oversight powers?" *(reliable, resonates with a new member's office)*
- "What NYC Council legislation exists on broadband access?" *(returns Int 1122-2024, enacted 2025-11-08 — a real recent law)*
