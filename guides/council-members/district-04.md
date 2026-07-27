---
status: DRAFT
---

# Demo script — Council District 4 (Virginia Maloney)

> **DRAFT.** Revised 2026-07-27. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to Council Member **Virginia Maloney** and staff. District 4 covers the East Side of Manhattan — Midtown East, the Upper East Side south, Murray Hill, and Stuyvesant Town/Peter Cooper Village.
>
> **Slide companion:** [`district-04-deck.html`](district-04-deck.html). Same structure, same figures. The deck carries every warning below in its presenter notes (press `N`), so you can run the meeting from either one. **This file stays the source of truth for figures and provenance.**

> ⚠️ **Structure changed 2026-07-27.** Every act is now a **side-by-side**: the same question run through a real web search, then through the connector. The searches were run live on 2026-07-27 and are reproduced verbatim in the deck. This replaced the earlier "newly seated member has no record" framing, which is **no longer accurate** — see the retraction under Act 2.

---

## Before you start (2 min)

- District is **4**. Sponsoring-member surname in budget data is **Maloney**.
- ⚠️ **In 311 queries the district is the string `'04'`, zero-padded.** Querying `'4'` returns **zero rows, with no error**. Affects districts 1–9 only.
- Her first discretionary budget is **FY2027**, not FY2026. FY2026 was adopted before she was seated, so querying it by her surname correctly returns nothing.
- ⚠️ **Re-run the web searches before the meeting.** Ranking drifts. If a flagged result has moved, update the slide or drop the flag rather than reading a stale one aloud.
- ⚠️ **Re-pull the 311 figures.** They are from 2026-07-21 and were not refreshed for the 2026-07-27 revision.

**Opening line:**
> "Rather than tell you what this does, I'm going to ask it five questions your office actually gets, and show you what a web search returns for the same question."

---

## Opening — what we plugged in (90 sec)

Seven connectors, counts verified 2026-07-27:

| Source | What it holds | Scale |
|---|---|---|
| Council legislation | Bills, hearings, sponsors, votes | 21,467 bills · 17,314 events |
| Charter, Code & Rules | Full text by section | 22,131 sections |
| City budget | Schedule C, capital, terms | 33,638 awards · FY2015–FY2027 |
| 311 | Service requests, status, calendar | live |
| The City Record | Procurement and public notices | live |
| NY State legislation | Bills, laws, members | 231,107 bills |
| Open data catalog | Any dataset on the portal | SoQL |

Then the four things a web search structurally cannot do: reach **inside a portal's search form** (crawlers see the search box, not the results), **join** four of these in one question, hand you a **citation** you can put in a letter, or tell you **when the answer last changed**.

> ⚠️ **Citywide spending (Checkbook NYC) is deliberately off this list.** Imperva bot protection has fronted the site including its documented XML API since around 2026-07-16. **Do not promise contract or spending data.** If asked, say it plainly: it's built, the city is currently blocking it, and we're asking. Note the MCP returns `total_records: 0` alongside its error field during an outage, so a naive caller reports "no records exist."

---

## Profile — who is the member? (2 min)

**Start with the question a search engine handles well.** Conceding the easy case is what makes the room believe you on the next five.

**Prompt:**
> "Who is Council Member Virginia Maloney?"

**The web search (run 2026-07-27) does this one well.** It returns her council staff directory, a Murray Hill Neighborhood Association profile, Ballotpedia, LinkedIn and Wikipedia — and assembles phone, district email, office hours and a committee from across them.

**What to say:**
> "I'm going to start with the one question a search engine handles well, so you know I'm not selling you something. Now watch what happens when we ask what she's *done*."

**The connector, verified 2026-07-27:**

| Field | Value |
|---|---|
| PersonId | **7894** — the key that joins to 46 votes and 77 budget awards |
| Committee | Committee on Economic Development — **listed contact**, 7 members |
| Contact | District4@council.nyc.gov · 212-818-0580 |
| Legistar | `PersonDetail.aspx?ID=329370` |
| Record last modified | **2025-11-06** — *before she took office* |

> ✅ **Committee assignment is now verified — the earlier "do not name one" warning is lifted (2026-07-27).** `get_committee("Committee on Economic Development")` returns `BodyContactNameId: 7894`, `BodyContactFullName: "Virginia Maloney"`, `BodyNumberOfMembers: 7`. The web independently reports her as **Chair** of that committee.
>
> ⚠️ **Say "listed contact," not "Chair," when citing our data.** The Legistar field is `BodyContactNameId`, which for council committees is conventionally the chair but does not literally say so. Two independent sources agreeing is good; overstating what our field says is exactly the failure this demo is about.

> ⚠️ **The two sources disagree on the district office address, and this is worth telling her staff.**
>
> | Source | Address |
> |---|---|
> | Legistar (`PersonAddress1`) | 211 East 43rd Street, Suite 1205 |
> | Web search | 420 Lexington Avenue, Suite 650 |
>
> The Legistar record was last modified **2025-11-06**, before she was seated, which points to Legistar being the stale one. **Do not assert which is correct.** Show the disagreement, note the date, and let her office tell you. It reads as a service, not a gotcha — and it demonstrates the "when did this last change" point better than any argument.

---

## Act 1 — Your district, right now (3 min)

**Prompt:**
> "What were the top 311 complaint types in Council District 4 over the last 30 days?"

**The web search returns nine links to portals and tools. Not one number.** Notable: documentation for a database product (MotherDuck), and the 311 page for filing a complaint *about* a council member, which matched on the words.

**What to say:**
> "Nine results, and every one of them is a door. Not one of them walked through it."

**Verified 2026-07-21** — 4,767 service requests in the window:

| Complaint type | Count |
|---|---|
| Illegal Parking | 735 |
| **Encampment** | 390 |
| **Homeless Person Assistance** | 242 |
| Noise | 207 |
| Street Condition | 197 |
| Vendor Enforcement | 193 |
| Traffic Signal Condition | 181 |
| For Hire Vehicle Complaint | 148 |

**Where to linger.** Encampment and Homeless Person Assistance at #2 and #3 is a distinctive signature. District 10 uptown has no homelessness category in its top five at all. Same city, same 30 days, completely different constituent pressure.

> Don't editorialize past the data. What the numbers show is *what residents called 311 about*, which is a measure of complaint behavior as much as of underlying conditions. Say that out loud if the room starts drawing policy conclusions — it is the kind of caveat that earns trust rather than spending it.

**Also in these connectors:** `get_calendar` (alternate-side parking and collection) · `get_service_request` (one request by number) · `get_status` (agency status) · `socrata` (any dataset on the portal).

---

## Act 2 — Your roll call (4 min)

> ✅ **REWRITTEN 2026-07-27. The previous version of this act is retracted.**
>
> This act previously said `get_voting_record` raises a named error because the `votes` table has zero rows, and built the whole act around an honest refusal. **That is no longer true.** Votes shipped over the weekend of 2026-07-25/26. Verified live 2026-07-27: `get_voting_record(member_name="Maloney")` returns **46 distinct matters**.
>
> The refusal framing is gone. Do not use it, and do not read the old text aloud.

**Prompt:**
> "How has Council Member Maloney voted?"

**The web search returns nine pages about a person and zero votes.** Two of the nine are not her: **Carolyn Maloney**, who served in Congress, and a **Cornell graduate student assembly** "Voting Members" roster. Both rank because the words match.

**What to say:**
> "Nine results, not one of them a vote, and two aren't even about you. It isn't lying to you. It has no idea it missed."

**The connector, verified 2026-07-27:** 46 matters from the 2026-06-30 and 2026-07-16 sessions, each with a file number and date.

| Matter | Position | Note |
|---|---|---|
| Res 0551-2026 | Affirmative | Expense budget designations — **the resolution behind Act 3** |
| Res 0546-2026 | Affirmative | FY2027 tax levy |
| LU 0112-2026 | Affirmative | East Harlem/El Barrio Article XI |
| Int 0972-2026 | Affirmative | Unincorporated business tax credit · intro.nyc/0972-2026 |

**The drill-down.** `vote_breakdown("Int 0983-2026")` returns the full split: **51 recorded, 42 affirmative, 6 negative, 1 abstain**, plus the committee stage (7 recorded, 5-1). Named negatives (Carr, Morano, Vernikov, Ariola, Wong, Zhuang), a named abstention (Menin), named absences (Mealy, Paladino).

**What to say:**
> "Forty-six matters, every one with a file number and a date you can hand to anyone. And on any single one of them I can show you how all fifty-one members voted."

> ⚠️ **Int 0983-2026 is the elected-official compensation bill.** It is public record and she voted Affirmative, but leading with "here's your vote on your own pay" in her own office reads as a gotcha. **Use Res 0551-2026 or Int 0972-2026 as the drill-down unless she asks.** Judgment call, not a rule.

> ⚠️ **All 46 came back Affirmative.** That is a real record, not an artifact — the table discriminates, and the same session shows six named negatives from other members. But it covers **two sessions only**. Do not characterize it as a voting philosophy.

> ⚠️ **`get_voting_record` returns duplicate rows** — 50 rows for 46 distinct matters, because some items are recorded at both committee and full council. **Dedupe by `file_number` before you say a count out loud.** Worth an upstream issue.

> ⚠️ **Do NOT cite `PersonUsedSponsorFlag`.** *(Retained from 2026-07-21.)* The flag reads `0` for De La Rosa too, a multi-term member who is one of 28 sponsors on Int 1122-2024. It does not mean what its name suggests.

**Also in this connector:** `co_sponsors` (who signed on, and who didn't) · `get_bill_history` (every action, in order) · `get_bill_hearings` (where a bill was heard) · `aggregate_bills` (counts by sponsor and session).

---

## Act 3 — Your first budget (5 min)

**Prompt:**
> "Show the FY2027 NYC Council discretionary (Schedule C) awards sponsored by council member Maloney."

**The web search is at its worst here.** It returns the *rules* for discretionary funding — the FY2027 Policies and Procedures PDF — and then **two other members' pages**: Oswald Feliz (D15) and Alexa Avilés (D38). Zero of her 77 awards.

**What to say:**
> "It found the policy manual and two of your colleagues. Not one of your seventy-seven awards."

**Re-verified live 2026-07-27: 77 awards totaling $1,538,000.** 77 returned against a limit of 200, so the total is complete.

| Amount | Recipient | Initiative |
|---|---|---|
| $200,000 | Association of Community Employment Programs for the Homeless | NYC Cleanup |
| $70,000 | Department of Sanitation | NYC Cleanup, CD 4 |
| $50,000 | STPCV Tenants Association Foundation | Speaker's Initiative |
| $40,000 | Justice Innovation, Inc. | Community Safety and Victim Services |
| $35,000 | City Parks Foundation | Parks Equity |
| $33,000 | Metropolitan New York Coordinating Council on Jewish Poverty | Domestic Violence and Empowerment |
| $30,000 | Carnegie Hill Neighbors | Neighborhood Development Grant |

**What to say:** "This is the thing that *is* yours after seven months, and it's a million and a half of it. Seventy-seven organizations, by name, by initiative, by agency."

> ⚠️ **Always pass `limit: 200` or higher.** This script previously read "at least 40 awards totaling $1,148,000," from a query capped at `limit: 40` that returned exactly 40 rows. It understated her budget by **$390,000 and 37 awards**. The `limit` truncates the total as well as the list. **Treat "returned exactly N against a limit of N" as truncation until proven otherwise.**

> ⚠️ **`council_member` matches as a substring, and the result depends on the fiscal year.** FY2027 is safe: searching "Powers" returns only Brooks-Powers, and District 4 is Maloney's. **It bites any historical query** — in FY2020–FY2026 a "Powers" search silently sums Keith Powers and Brooks-Powers across two districts into one total, with the sponsor column the only tell. Check the sponsor column before reading any figure aloud, and state the fiscal year when you do. Unfixed — [New-York-City-Budget#38](https://github.com/BetaNYC/New-York-City-Budget/issues/38).

**Query Schedule C by sponsoring member surname, not by district number** — there is no district filter, and asking by district silently returns citywide awards.

**Also in this connector:** `search_capital_projects` (§254 capital) · `get_awards_by_ein` (one org across all members) · `get_terms_conditions` (the strings attached) · `get_legistar_link` (back to the adopting resolution).

### The digital-equity thread — this is BetaNYC's opening

Four FY2027 awards sit under the **Digital Inclusion and Literacy Initiative**, $80,000 in total, all administered by DYCD:

| Amount | Recipient | Program |
|---|---|---|
| $20,000 | **Fund for the City of New York** | **AI Training Program** — *this is BetaNYC* |
| $20,000 | Older Adults Technology Services (OATS) | Older Adults Digital Literacy |
| $20,000 | Simon Wiesenthal Center | Digital Equity Program |
| $20,000 | WNET | Arts Broadcasting |

A newly seated member put real money into AI training and digital literacy in her first budget. That is the conversation.

> **Do not characterize how that decision was made.** An earlier draft said it was "her own choice rather than something being pitched to her." Nothing in the data supports a claim about her office's internal process, and BetaNYC is the grantee of the line in question. Say what the record shows and stop there.
>
> **The $20,000 Fund for the City of New York line is BetaNYC's own AI Training Program** — FCNY is our fiscal sponsor (EIN 13-2612524), so our awards appear under its name. Confirmed 2026-07-21, re-confirmed 2026-07-27.
>
> Handle this with care. The strongest version is *not* leading with "you already fund us." It is running the demo straight, letting the agent surface the award from the public record alongside the other three, and only then noting that one of those lines is us. The tool finding your own funding in the same query that found everyone else's is far more persuasive than saying so up front — and it keeps the meeting about her office's data rather than about an ask.

**A genuine data subtlety worth showing, if the room is engaged:** Fund for the City of New York is a **fiscal sponsor** — a passthrough carrying dozens of distinct programs under one EIN. So "Fund for the City of New York" in the recipient column is not the actual grantee; the `[AI Training Program]` bracket is. Filtering by organization alone would silently merge unrelated grantees. Say this out loud: it is exactly the kind of thing that makes a naive spreadsheet analysis wrong, and the tool documents the trap in its own description.

---

## Act 4 — Looking at NYC's Laws (4 min)

> **NEW 2026-07-27.** This act did not exist in the previous version. **It is the sharpest contrast in the demo. Don't cut it.**

**Prompt:**
> "How long can a sidewalk shed stay up?"

**This is the subtle one, and the strongest, because the web search gets the headline roughly right.** 90 days, $6,000 cap — correct. Resist the urge to say it failed. It didn't. It is *unciteable*, and it is imprecise in a way that costs you.

**Where the nine results come from:** a Mayor's Office press release, NBC New York, CityLand, and three marketing blogs belonging to companies that sell permit expediting and engineering services (`permitexpertsnyc.com`, `skybriz.com`, `randpc.com`).

**What to say:**
> "It got the number right. Now look at where it got it: a press release, a TV station, and three blogs belonging to companies that sell permit expediting. You cannot put any of those in a letter to DOB."

**The connector, verified live 2026-07-27:**

> **§ 28-105.8.1 Duration of permit**
> "Permits may be issued for a period of up to 2 years unless otherwise limited by law. **Exception: Sidewalk shed permits shall be issued for a period of 90 days** and may not be renewed until department penalties for sidewalk sheds in the public right-of-way are paid."
> *(Am. L.L. 2025/048, 4/17/2025, eff. 1/12/2026)*

> **§ 28-220.1 Department penalty for sidewalk sheds occupying the public right-of-way for an extended period**
> Beginning with the **second renewal**, and only **where work is not in progress**: $10 per linear foot per month (shed under 3 years), $100 (3 to 4 years), $200 (4 years or more), **capped at $6,000 per month**.
> **Exception: one- and two-family homes**, and sheds installed for new building, enlargement, or demolition work.

### The precision point — this is the kill shot

The web summary says penalties apply to sheds "standing longer than **180 days**." **The statute says something different.** Penalties begin at the **second renewal** and only **where work is not in progress**, tiered by how long the shed has existed. Roughly 180 days is a blog's paraphrase of a rule whose actual test is *the work*, not the clock.

**What to say:**
> "Close enough to sound right in a meeting. Wrong enough to lose the argument when the owner's lawyer shows up."

**And the exemption.** One- and two-family homes are exempt, as are sheds up for new building, enlargement, or demolition. That appears in the statute and in **none** of the blogs. It is exactly the detail a constituent letter has to get right.

> ⚠️ **Charter search is keyword matching, not semantic.** `sidewalk shed` returns nine results. `noise nighttime construction` and `heat season residential temperature` both return **zero**. **Rehearse your queries.** Improvising a phrasing in the room will demo an empty result set. Verified 2026-07-27.

> ⚠️ **Read the legal disclaimer if anyone treats this as advice.** It is research material, not legal advice. The corpus is current through **Local Law 2026/116** (enacted 2026-07-11) and rules effective 2026-07-23 — not necessarily through today.

**Also in this connector:** `get_section` (any citation, exact) · `list_titles` (browse the Code by title) · `get_version` (what the corpus is current through) · Rules as well as Charter and Administrative Code.

---

## Act 5 — What's in front of the Council (3 min)

**Prompt:**
> "What Council hearings are coming up, and what land use applications are on their agendas?"

**The web search returns portals, a raw Legistar `View.ashx` file link, and a stale CBS story about a SoHo rezoning hearing.** No agenda for the current week.

**The connector, verified 2026-07-27:**

| Date | Body | Location | Agenda |
|---|---|---|---|
| 2026-08-04 | Subcommittee on Landmarks, Public Sitings, Resiliency and Dispositions | 250 Broadway, 8th Fl, Rm 1 | **Final** |
| 2026-08-04 | Subcommittee on Zoning and Franchises | 250 Broadway, 8th Fl, Rm 1 | **Final** |
| 2026-08-04 | Committee on Land Use | 250 Broadway, 8th Fl, Rm 1 | **Deferred** |

**The honest detail is the third row.** Land Use shows `Deferred`, not `Final`. The tool distinguishes a settled agenda from an unsettled one.

**What to say:**
> "Two of these you can plan around. The third one it's telling you not to trust yet. That distinction is the difference between a calendar and a guess."
>
> "Agendas, matter numbers, hearing rooms, and which districts each application touches — before the meeting, not after the minutes post. For a new member's office still building its calendar muscle, this is the least glamorous and most immediately useful thing in the demo."

> ⚠️ **`get_upcoming_hearings` is extremely verbose** — full agenda item text, including land-use applications that run to hundreds of block-and-lot references. Use `upcoming_events` for the overview, as above, and only drill into a single event's agenda on request.

> ⚠️ **Re-run before the meeting.** These are 2026-08-04 events. If you present after that date the table is simply wrong.

**Also in this connector:** `get_event_bills` (what's on a given agenda) · `get_upcoming_hearings` (full agenda text) · `search_events` (past meetings) · `nyc-record-mcp` (public hearing notices citywide).

---

## Closing (1 min)

> "Six days ago the voting question came back empty and we would have shown you a graceful failure. It shipped over the weekend. That is what building in the open looks like."
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

**1. Council districts are zero-padded strings in 311 data.** `council_district='4'` returns **zero rows**. `council_district='04'` returns 4,767. No error either way. This affects **districts 1–9 only**, which is why the District 10 script never hit it. Verified by querying `IN ('4','04','10')` — only `'04'` and `'10'` come back.

**2. `council_member` matches as a substring, and the result depends on the fiscal year.**

| Query | Returns |
|---|---|
| `council_member="Powers", fiscal_year=2027` | **80 awards, $1,797,000 — Brooks-Powers (D31) only.** Keith Powers correctly absent |
| `council_member="Powers", fiscal_year=2026` | **156 awards, $3,405,000 — BOTH members summed.** Keith Powers held District 4 through FY2026 |

The strict-parameter fix does **not** catch this: `council_member` is a valid parameter receiving a valid value, so there is nothing for a schema to reject.

**3. Charter search is keyword, not semantic.** Rehearse the queries. See Act 4.

**4. `get_voting_record` returns duplicates.** 50 rows, 46 distinct matters. Dedupe by `file_number`.

### Other verified behavior

- **`search_legislation` matches bill *titles*, not subject matter.** `"encampment"` finds nothing, because the term doesn't appear in bill titles. Try a synonym before concluding no legislation exists, and say so if it comes up empty in the room.
- **`get_council_member(name="Powers")`** returns only Brooks-Powers. The member lookup has the same substring behavior as the budget tool.
- **FY2026 has no Maloney awards.** Her first Schedule C is FY2027. Querying FY2026 by her surname returns nothing, correctly. Don't let this read as a tool failure.

### Figures and their provenance

| Claim | How verified |
|---|---|
| First name "Virginia", District 4, PersonId 7894 | `get_council_member(name="Maloney")` → `PersonFirstName: "Virginia"`, `PersonId: 7894`, `PersonActiveFlag: 1`, `PersonEmail: District4@council.nyc.gov`. Verified 2026-07-21, re-verified 2026-07-27 |
| **Committee on Economic Development, 7 members** | `get_committee("Committee on Economic Development")` → `BodyContactNameId: 7894`, `BodyNumberOfMembers: 7`. **Verified 2026-07-27** |
| **46 distinct matters, all Affirmative** | `get_voting_record(member_name="Maloney")` → 50 rows, 46 distinct `file_number`. **Verified 2026-07-27** |
| **Int 0983-2026 split 42-6-1** | `vote_breakdown("Int 0983-2026")` → full council `recorded: 51`. **Verified 2026-07-27** |
| **77 awards, $1,538,000, FY2027** | `search_awards(council_member="Maloney", fiscal_year=2027, limit=200)` → 77 against a limit of 200, so complete. Re-verified live **2026-07-27** |
| $20,000 FCNY "AI Training Program" | Present in the same `search_awards` result. Re-confirmed 2026-07-27 |
| **§ 28-105.8.1 and § 28-220.1 full text** | `get_section(citation="28-105.8.1")` and `get_section(citation="28-220.1")`. **Verified 2026-07-27** |
| **Upcoming events 2026-08-04** | `upcoming_events(limit=6)` → 3 events, one `Deferred`. **Verified 2026-07-27** |
| Corpus counts (21,467 / 17,314 / 22,131 / 33,638 / 231,107 / 73 bodies) | `list_committees`, index rebuild output, and `/mcp-refresh-data` run **2026-07-27** |
| 4,767 complaints; top types | Socrata `erm2-nwe9`, `council_district='04'`, `is_sample: false`. **2026-07-21 — NOT re-pulled** |
| Web search results, all six queries | Run live **2026-07-27**, reproduced verbatim in the deck |

### Retracted claims — do not reuse

| Claim | Status |
|---|---|
| ~~`get_voting_record` raises a named error; the `votes` table has zero rows~~ | **Retracted 2026-07-27.** Votes shipped 2026-07-25/26. Returns 46 matters |
| ~~"She has essentially no legislative record" / the honest-empty-result act~~ | **Retracted 2026-07-27.** Superseded by the roll call in Act 2 |
| ~~No sponsorship record via `PersonUsedSponsorFlag`~~ | **Retracted 2026-07-21.** The flag reads `0` for De La Rosa too. It does not mean what its name suggests |
| ~~"At least 40 awards totaling $1,148,000"~~ | **Retracted 2026-07-21.** A `limit: 40` truncation. Actual: 77 awards, $1,538,000 |
| ~~"Do not name her committee assignments"~~ | **Lifted 2026-07-27.** Now verified via `get_committee`. Say "listed contact," not "Chair" |

### Still not independently verified

- **District 4's exact boundaries.** The neighborhood list in the header is inferred from award recipients (Carnegie Hill Neighbors, Friends of the Upper East Side Historic Districts, Murray Hill Committee, STPCV Tenants Association) rather than from a districting source. Well supported but not authoritative — don't recite it to the people who represent it.
- **Which district office address is current.** Legistar and the web disagree. See the profile section.
- **The date of the CBS SoHo rezoning story** surfaced in the Act 5 search. Described only as "stale" for that reason.

---

## Backup prompts (if one falls flat)

- "Is alternate-side parking suspended this week? What's on the city-service calendar?" *(311 MCP — always returns something)*
- "Show me FY2027 Schedule C awards under the Digital Inclusion and Literacy Initiative." *(on-theme, and broader than one district)*
- "What does the NYC Charter say about the Council's oversight powers?" *(reliable, resonates with a new member's office)*
- "What NYC Council legislation exists on broadband access?" *(returns Int 1122-2024, enacted 2025-11-08 — a real recent law)*
