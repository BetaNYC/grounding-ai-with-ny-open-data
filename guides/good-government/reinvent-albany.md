---
status: DRAFT
---

# Demo script — good-government / watchdog audience (Reinvent Albany)

> **DRAFT.** First pass, 2026-07-21. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to a **good-government or watchdog organization** — written for **Reinvent Albany**, and reusable for Citizens Union, CBC, NYPIRG, the Fiscal Policy Institute, or an investigative newsroom.
>
> **Every figure was pulled live on 2026-07-21**, with provenance in the presenter notes.

This audience is different from every other script in this repo, and the difference should shape the whole meeting.

**They are not the constituency. They are the oversight.** A council member wants to see their own district; a watchdog wants to see the thing nobody has assembled yet. So this script is not district-scoped, and it does not try to impress with a clean lookup. It goes straight at the three questions this audience actually lives on: **where did the money go, what got taken back, and what was supposed to be published but wasn't.**

They also already know this domain better than you do. Do not explain Schedule C to Reinvent Albany. The pitch is not "here is discretionary funding" — it is "here is discretionary funding, queryable in seconds, by an agent that cites its source and refuses to guess."

---

## Before you start (2 min)

- No district to pre-fill. This script runs citywide.
- Have [Checkbook NYC](https://www.checkbooknyc.com) and [NYC Open Data](https://data.cityofnewyork.us) open.
- Expect to be interrupted with hard questions about provenance and coverage. **That is the good outcome.** The presenter notes below are written so you can answer them.

**Opening line:**
> "You already know where this data lives — you've FOILed for worse. What I want to show you is how fast the assembly step gets when an agent can reach all of it at once, and what it does when a number isn't there."

---

## Act 1 — The transparency law, read back to you (3 min)

Open on their own turf.

**Prompt:**
> "What does the NYC Administrative Code require about open data, and which Council legislation established it?"

**Verified — the agent returns the actual statutory chain:**

| Citation | What it does |
|---|---|
| **Int 0029-2010** | The original open data law, enacted 2012-03-07 |
| **§ 23-507** | Every agency must designate an **open data coordinator** responsible for compliance |
| **§ 23-504** | Open data legal policy — the no-warranty provision |
| **L.L. 2016/008** (Int 0916-2015) | Open data law **agency compliance examination** |
| **Charter § 20-f** | Office of Data Analytics |

**What to say:** "The law you helped pass, with its compliance machinery, retrievable by citation. Note § 23-507 in particular — there is a *named, accountable role* at every agency. That matters for Act 4."

---

## Act 2 — Follow one vendor across the whole city (5 min)

Not one district. The whole map.

**Prompt:**
> "Show every FY2026 Council discretionary award to the Association of Community Employment Programs for the Homeless, then check NYC Checkbook for what the city actually paid them."

**Verified:** **54 Schedule C awards totaling $6,455,750** in FY2026 — the same organization funded separately by roughly three dozen council members, district by district, nearly all under the **NYC Cleanup** initiative via DYCD. Individual awards range from **$7,750 to $280,000**.

**What to say:**
> "One vendor, three dozen separate discretionary decisions, six and a half million dollars, and no single line item anywhere that says so. Assembling this by hand means reading the Schedule C PDF end to end. That's the afternoon this replaces."

**Then the reconciliation, on a smaller organization so the numbers stay legible:**

> "Community League of the Heights received $30,000 from Council Member De La Rosa in FY2026. In Checkbook, the same organization shows 32 FY2026 payment records — including **$107,244.16 and $33,000 under budget code `3625 (Tax Levy Elected Officials)`**."

**The line to land:** "That budget code is the join. It's discretionary money appearing as an actual disbursement. Allocation in one system, check in another, connected in two questions."

> **Sharpen it for this room:** the interesting output of this pattern is not the match — it's the **mismatch**. Allocations with no corresponding spending, or spending that exceeds allocation, are the thing worth chasing. The tooling makes that comparison cheap enough to run across every organization rather than the three you already suspected.

---

## Act 3 — What got taken back (5 min)

**Build the meeting around this act.** It is the least visible money in the system and the tooling handles it directly.

**Prompt:**
> "Show FY2026 NYC Council transparency resolution rescissions — discretionary money that was de-designated after adoption."

**Verified — FY2026 Resolution 1, adopted 2025-08-14:**

| Amount | Member | Recipient |
|---|---|---|
| −$213,000 | *(none listed)* | DYCD — Adult Literacy Forward |
| −$145,000 | Bottcher | DYCD |
| −$40,000 | Menin | Council on the Environment |
| −$25,000 | Bottcher | Friends of the High Line |
| −$25,000 | Marmorato | Horticultural Society of New York |
| −$25,000 | Bottcher | DYCD |
| −$10,000 | Marmorato | Billion Oyster Project |
| −$5,000 | Marte | Council on the Environment |

**What to say:**
> "Adopted budgets get amended all year by transparency resolution, and rescissions carry negative amounts. This is money that was announced, then quietly withdrawn. A transfer shows up as a rescind and a designate on the same EIN — so the tool can distinguish 'moved' from 'taken away,' which is precisely the distinction a press release will not make."

**The −$213,000 row is the one to point at.** It has **no council member attached** and hits Adult Literacy Forward. Ask the room what they'd want to know next. That is the demo doing its job — not answering the question, but getting them to the question in ten seconds instead of a week.

> **Say the coverage caveat out loud before they ask it.** Transparency resolutions are parsed for FY2010–FY2024 and FY2026 — **FY2025 is not in this dataset.** And for FY2010–FY2013 the organization and member *text* is low-confidence (garbled PDF text layer); the financial columns are reliable, so **join on EIN, not on name** for those years. Volunteering this is worth more with this audience than any figure you could show them.

---

## Act 4 — The report that was mandated and isn't there (4 min)

The act that speaks their language most directly.

**Prompt:**
> "Local Law 174 of 2016 requires an annual Career and Technical Education report. What's the most recent one available as a dataset on the NYC open data portal?"

**Verified:** catalog searches on both "career technical education" and "Local Law 174 CTE" return **six CTE report datasets spanning 2015-16 through 2019-2020** — the most recent published 2021-09-22 — **and nothing newer.**

**What to say:**
> "The law says annual. The portal's most recent is 2019-2020. It is 2026."

**Then the discipline that makes it credible, and do not skip it:**
> "What we've established is that *the dataset isn't on the portal*. That is not the same as *the report was never produced* — it may well have gone to the Council as a PDF and never been published as open data. Those are different findings with different remedies, and the second one is § 23-507's problem: there's a named coordinator at DOE accountable for exactly this."

**Why this lands with this audience specifically:** it is a reproducible method, not a one-off. Any reporting mandate in the Administrative Code can be checked against the portal the same way. That's a survey they could run, and the agent won't overstate the result if it's prompted not to.

> **Second, live example if you want one:** NYC's "Broadband Adoption and Infrastructure by State Senate District" dataset (`9bjg-n96a`) contains 26 rows covering Senate Districts 10–34 plus 36, all created 2020-06-19. It does not contain District 59 — the file predates the current district lines. A digital-equity dataset that cannot answer a question about a third of the state senate districts in the city.

---

## Act 5 — Live procurement, if there's time (2 min)

**Prompt:**
> "What NYC procurement solicitations are currently open, and which agencies posted them?"

**Verified:** returns live City Record notices with agency, PIN/EPIN, selection method, due date, and contact — e.g. FDNY `05726B0010` (mark-out and core drilling, competitive sealed bids, due 2026-07-21 14:00), NYCHA `522172`, DEP `82626B0026`.

**What to say:** "The City Record, queryable. Same source as the daily PDF, without reading the daily PDF."

---

## Closing (1 min)

> "All of this is open. The connectors are public repos, the guides are CC BY-SA, and none of it requires an API key. We'd rather you fork it and find the things we got wrong than take our word for any of it. And if there's a query your team runs constantly by hand, that's exactly the user journey we want to add."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Structured budget data: [`BetaNYC/New-York-City-Budget`](https://github.com/BetaNYC/New-York-City-Budget)
- Full prompt catalog: [`../user-journeys.md`](../user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes (verified 2026-07-21)

**This audience will interrogate provenance.** Answer precisely or concede. A hedge you can defend beats a figure you can't.

### Coverage limits — know these cold, and volunteer them

From `list_available_fiscal_years`:

- **Schedule C awards: FY2015–FY2027** at EIN level. **FY2009–FY2014 is initiatives-only** (no per-organization rows, no EINs) and is deliberately excluded from the award tools. **FY2008 is unparsed** (blocked source document).
- **Transparency Resolutions: FY2010–FY2024 + FY2026.** **FY2025 is absent.** FY2010–FY2013 org/member text is low-confidence — join on EIN.
- **Terms & Conditions: FY2015–FY2018 + FY2021–FY2027.** FY2019–FY2020 absent.
- **§254 capital: FY2020 + FY2022–FY2027.** No FY2021 detail book exists.
- The Legistar crosswalk covers FY2008–FY2027 even where no CSV is parsed, and surfaces a `status` of `confirmed` / `candidate` / `not_located`. **Do not cite a `candidate` or `not_located` row as authoritative** — the tool says so itself.

### Parameter traps (all silent — no error, real-looking wrong output)

| Task | Correct parameter | Do **not** use |
|---|---|---|
| Schedule C by member | `council_member="[SURNAME]"` | `council_district`, `sponsor` |
| Checkbook payments | `payee_name="[ORG]"` | `vendor` |
| Socrata aggregate | discrete `select`/`where`/`group`/`order`/`limit` | a single `soql` blob |
| 311 by district | `council_district='04'` — zero-padded | `'4'` |

- **There is no district filter on Schedule C**, by design — it keys on sponsoring member. Asking by district returns **citywide** awards with no warning. ([Issue filed.](https://github.com/BetaNYC/New-York-City-Budget/issues/37))
- **`council_member` matches as a substring** and will return the wrong member — `"Powers"` returns Selvena **Brooks-Powers**.
- **Fiscal sponsors merge grantees.** EIN 13-2612524 (Fund for the City of New York) is a passthrough for dozens of programs. Filter by `program` as well as `organization`/`ein`, or you will silently aggregate unrelated recipients. This is a real analytical hazard for this audience, and worth mentioning to them as such.

### Tool behavior

- **Checkbook `smart_search` is blocked** by an Incapsula WAF challenge. Use the structured tools. `search_contracts` has **no vendor-name filter** at all; `search_spending` requires `fiscal_year` or `issue_date_from`.
- **`search_legislation` matches bill titles, not subject matter.** Single keywords work; multi-word conceptual phrases return `[]`. A sensible keyword can miss entirely — `"encampment"` finds nothing.
- **`get_voting_record` returns `[]` for every member tested.** Do not use it, and do not present an empty result as a finding.
- **`get_open_solicitations` and Socrata catalog searches are very verbose** — City Record notices embed raw HTML; catalog searches inline geometry (581 KB unbounded on the NYC portal, ~83 KB even at `limit: 5` on the state portal). Always bound them.
- **Socrata catalog search is federated** and does not honor `domain` as a restriction. Check returned dataset IDs before saying which portal you're in.
- **Check `is_sample` on every Socrata query.** If `true`, you got a raw row sample rather than an aggregate.

### Figures and their provenance

| Claim | How verified |
|---|---|
| Open data statutory chain | `nyc-charter-laws-rules search("open data")`; `nyc-council-mcp search_legislation("open data")` |
| ACE: 54 FY2026 awards, $6,455,750 | `search_awards(organization="Association of Community Employment", fiscal_year=2026, limit=60)` |
| CLOTH $30,000 De La Rosa; 32 Checkbook records; Tax Levy Elected Officials | `search_awards(...)`; `search_spending(payee_name=…, fiscal_year=2026)` |
| FY2026 rescissions, Reso 1 of 2025-08-14 | `search_transparency_resolutions(action="rescind", fiscal_year=2026)` |
| CTE datasets stop at 2019-2020 | Socrata catalog, two independent search terms |
| Broadband dataset covers SD 10–34 + 36 only | Socrata `9bjg-n96a` |
| Open solicitations | `nyc-record-mcp get_open_solicitations` |

**Not independently verified this session:**
- **Whether the Local Law 174 CTE report was actually produced** and simply not published as open data. Only the portal's contents were checked. State the narrow claim.
- **Whether the −$213,000 rescission's missing member attribution is a data-extraction artifact or genuinely absent from the source document.** Do not assert it is a transparency failure. If asked, offer to check the source resolution PDF via the Legistar crosswalk.
- **That $6,455,750 is ACE's complete FY2026 total** — the query returned 54 rows against a limit of 60, so it is very likely complete, but re-run with a higher limit before publishing the figure.

---

## Backup prompts (if one falls flat)

- "Which NYC agencies posted the most City Record procurement notices in the last month?" *(procurement volume — on-theme)*
- "Show FY2027 Schedule C awards under the Digital Inclusion and Literacy Initiative." *(cross-district initiative view)*
- "What does the City Charter say about the Office of Data Analytics?" *(Charter § 20-f — short and reliable)*
- "Search Schedule C for every award to [organization] across all available fiscal years." *(longitudinal single-org view; the strongest general-purpose watchdog query in the toolset)*
