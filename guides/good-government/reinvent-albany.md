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

**Verified live 2026-07-21:** **54 Schedule C awards totaling $6,455,750** in FY2026 — the same organization funded separately by **41 distinct council members**, district by district, nearly all under the **NYC Cleanup** initiative via DYCD. Individual awards range from **$7,750 to $280,000**. Re-run at `limit: 500`; 54 against a limit of 500, so complete.

**What to say:**
> "One vendor, 54 separate discretionary decisions by 41 different council members, six and a half million dollars, and no single line item anywhere that says so. Assembling this by hand means reading the Schedule C PDF end to end. That's the afternoon this replaces."

**Then the reconciliation, on a smaller organization so the numbers stay legible:**

> "Community League of the Heights received $30,000 from Council Member De La Rosa in FY2026. In Checkbook, the same organization shows 32 FY2026 payment records — including **$107,244.16 and $33,000 under budget code `3625 (Tax Levy Elected Officials)`**."

**The line to land:** "That budget code is the join. It's discretionary money appearing as an actual disbursement. Allocation in one system, check in another, connected in two questions."

> **Sharpen it for this room:** the interesting output of this pattern is not the match — it's the **mismatch**. Allocations with no corresponding spending, or spending that exceeds allocation, are the thing worth chasing. The tooling makes that comparison cheap enough to run across every organization rather than the three you already suspected.

---

## Act 3 — What got taken back (5 min)

**Build the meeting around this act.** It is the least visible money in the system and the tooling handles it directly.

**Prompt:**
> "Show FY2026 NYC Council transparency resolution rescissions — discretionary money that was de-designated after adoption."

**A PARTIAL sample from FY2026 Resolution 1, adopted 2025-08-14** — each row verified live 2026-07-21, but this is **not** the full set. See the correction below the table before you present it:

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

> ⚠️ **Corrected 2026-07-21 — read this before presenting the table above.** That table is **not** the complete FY2026 rescission set. It came from a query that hit its 50-row limit and truncated part-way through the alphabet, at "Cultural After-School Adventure." Every row shown verifies individually, but **there are substantially more, including larger ones.**
>
> Two specific corrections, both of which this audience will find if you don't say them first:
>
> - **−$213,000 is not the largest.** `Louis → Department of Cultural Affairs` is **−$480,000** (CASA).
> - **−$213,000 is not uniquely unattributed.** At least four other rows carry no council member, including **−$200,000** (Staten Island Chamber of Commerce Foundation), **−$200,000** (DYCD, Citywide Young Adult Entrepreneurship), **−$160,000** (DCLA, Coalition Theaters of Color), and **−$99,986** (HPD).
>
> **Run this live with an explicit high limit** — `search_transparency_resolutions(action="rescind", fiscal_year=2026, limit=500)` — and read the real total off the result rather than the table above. Presenting a truncated list as complete, to the organization whose job is catching exactly that, is the one unforced error available in this act.

**The unattributed rescissions are the thing to point at**, and there are several. −$213,000 to Adult Literacy Forward is a good one to open on: no council member attached, and a program whose name tells you who it serves. Then note it is not alone, and not the biggest. Ask the room what they'd want to know next. That is the demo doing its job — not answering the question, but getting them to the question in ten seconds instead of a week.

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

> **✅ Fixed and published 2026-07-21 — volunteer this to this audience.** All seven BetaNYC servers now reject an undeclared parameter and name the ones they accept. Minimum versions: budget **1.3.0**, council **2.5.0**, checkbook **1.4.0**, record **1.1.0**, 311 **1.1.0**, charter **0.2.0**, nys **2.3.0**. Verified live against the published packages.
>
> **The honest framing, which this room will respect more than a clean demo:** we found this in our own tooling midday on **2026-07-21** while rehearsing these very scripts, filed **seven public issues**, and shipped, merged, and published all seven fixes **the same evening** — merges at 20:52–20:54, npm publishes at 21:06. The bug was that a guessed parameter produced *real, correctly sourced data answering a different question* — the exact failure mode this session is about. Being able to say "we caught it in ourselves, here are the issues, here are the commits" is a stronger provenance argument than a clean demo.
>
> **One carve-out, and volunteer it rather than being caught on it:** six of the seven servers name the accepted parameters in the refusal. **`nyc-checkbook-mcp` does not** — outside `search_contracts` it returns zod's bare "Unrecognized key(s) in object" as a raw JSON validation dump, with no accepted-parameter list and no pointer. If you demo the refusal deliberately, **demo it on the budget or charter server**, not Checkbook.
>
> **The Socrata rows below are a third-party server and are NOT covered.** They still drop silently. Do not let the fix be described as fleet-wide when part of the fleet is not ours.

| Task | Correct parameter | Do **not** use | If you get it wrong |
|---|---|---|---|
| Schedule C by member | `council_member="[SURNAME]"` | `council_district`, `sponsor` | **rejected by name** (fixed) |
| Checkbook payments | `payee_name="[ORG]"` | `vendor` | **rejected by name** (fixed) |
| Socrata aggregate | discrete `select`/`where`/`group`/`order`/`limit` | a single `soql` blob | ⚠️ **still silently ignored** — third-party |
| 311 by district | `council_district='04'` — zero-padded | `'4'` | ⚠️ **still zero rows, silently** — a data-value trap, not a parameter one, so schema strictness cannot catch it |

- **There is no district filter on Schedule C**, by design — it keys on sponsoring member. Asking by district now returns an error naming `council_member` ([#37](https://github.com/BetaNYC/New-York-City-Budget/issues/37), fixed in 1.3.0). **Before 2026-07-21 it returned citywide awards with no warning** — worth stating plainly to this audience, since the near-miss is the point.
- **`council_member` matches as a substring and can silently MERGE two members.** In fiscal years where both served, `council_member="Powers"` returns Selvena **Brooks-Powers** (D31) and Keith **Powers** (D4) summed into one total — FY2026: 156 awards, $3,405,000. In FY2027 only Brooks-Powers remains, so the same query is clean. **The fiscal year determines whether this bites.** Read the sponsor column; a merged total looks entirely reasonable. Unfixed — [#38](https://github.com/BetaNYC/New-York-City-Budget/issues/38).
- **Fiscal sponsors merge grantees.** EIN 13-2612524 (Fund for the City of New York) is a passthrough for dozens of programs. Filter by `program` as well as `organization`/`ein`, or you will silently aggregate unrelated recipients. This is a real analytical hazard for this audience, and worth mentioning to them as such.

### Tool behavior

- **Checkbook `smart_search` is blocked** by an Incapsula WAF challenge. Use the structured tools; `search_spending` requires `fiscal_year` or `issue_date_from`.
- **`search_contracts` genuinely cannot filter by vendor name** — the Checkbook contracts API filters vendors only by `vendor_code` and offers no name→code lookup. Credit where due: passing the *declared* `vendor_name` parameter returns an explicit error naming the limitation and listing the three supported alternatives, rather than silently returning unrelated contracts. That is the right behavior and worth showing this audience as an example of a tool that refuses rather than guesses. **The sharp edge, and the better version of the story:** until 2026-07-21 that careful guard was defeated by a one-word typo — the undeclared `vendor` bypassed it entirely and returned millions of unrelated rows. Checkbook **1.4.0** closes it: `vendor` is now rejected and the message points at `vendor_name`. A guard that only fires on the spelling you anticipated is precisely why schema strictness matters more than any individual check, and this server is now the worked example of both halves.
- **`search_legislation` matches bill titles, not subject matter.** Single keywords work; multi-word conceptual phrases return `[]`. A sensible keyword can miss entirely — `"encampment"` finds nothing.
- **✅ `get_voting_record` now refuses instead of returning `[]`** (council **2.5.0**, verified live 2026-07-21). The `votes` table still has 0 rows — that is unchanged — but the tool now says so, explains that the source archive holds attendance rather than aye/nay, and names three working alternatives ([#19](https://github.com/BetaNYC/nyc-council-mcp/issues/19)). **Read it aloud if it comes up:** for this audience, a tool that declines and explains itself is the demo. `vote_breakdown` is the same; **`get_votes` is not** — it reads the live Legistar API rather than the local table and was never affected.

  Worth knowing for this audience specifically: the underlying archive carries 159,666 roll-call **attendance** entries (Present/Absent/Excused/Medical/Conflict/…) spanning 1999–2026 that are currently discarded — but it does **not** carry aye/nay vote positions anywhere, which would need the live Legistar API. Indexing that attendance data has been **deliberately deferred** rather than rushed, because storing attendance in a table named `votes` behind a tool named `get_voting_record` would bake the confusion in permanently. The naming gets decided first. That is a defensible answer if this audience asks why the fix is partial, and an honest example of the distinction between "no data" and "different data than the name implies."
- **`get_open_solicitations` and Socrata catalog searches are very verbose** — City Record notices embed raw HTML; catalog searches inline geometry (581 KB unbounded on the NYC portal, ~83 KB even at `limit: 5` on the state portal). Always bound them.
- **Socrata catalog search is federated** and does not honor `domain` as a restriction. Check returned dataset IDs before saying which portal you're in.
- **Check `is_sample` on every Socrata query.** If `true`, you got a raw row sample rather than an aggregate.

### Figures and their provenance

| Claim | How verified |
|---|---|
| Open data statutory chain | `nyc-charter-laws-rules search("open data")`; `nyc-council-mcp search_legislation("open data")` |
| ACE: 54 FY2026 awards, $6,455,750 | `search_awards(organization="Association of Community Employment", fiscal_year=2026, limit=60)` |
| CLOTH $30,000 De La Rosa; 32 Checkbook records; Tax Levy Elected Officials | `search_awards(...)`; `search_spending(payee_name=…, fiscal_year=2026)` |
| FY2026 rescissions, Reso 1 of 2025-08-14 — **partial sample, 8 rows shown** | `search_transparency_resolutions(action="rescind", fiscal_year=2026, limit=500)`. The original run used the default limit, returned 50, and truncated mid-alphabet. Each shown row re-verified live 2026-07-21; **the set is larger and the total is not stated anywhere in this script** |
| CTE datasets stop at 2019-2020 | Socrata catalog, two independent search terms |
| Broadband dataset covers SD 10–34 + 36 only | Socrata `9bjg-n96a` |
| Open solicitations | `nyc-record-mcp get_open_solicitations` |

**Not independently verified this session:**
- **Whether the Local Law 174 CTE report was actually produced** and simply not published as open data. Only the portal's contents were checked. State the narrow claim.
- **Whether the missing member attribution on the unattributed rescissions is a data-extraction artifact or genuinely absent from the source document.** Do not assert it is a transparency failure. If asked, offer to check the source resolution PDF via the Legistar crosswalk. Note this applies to **several** rows, not just the −$213,000 one — at least five carry no member.
- **The complete FY2026 rescission count and total.** Not established. The only query run hit its row limit. Run it at `limit: 500` before quoting any aggregate.
- **That $6,455,750 is ACE's complete FY2026 total** — the query returned 54 rows against a limit of 60, so it is very likely complete, but re-run with a higher limit before publishing the figure.

---

## Backup prompts (if one falls flat)

- "Which NYC agencies posted the most City Record procurement notices in the last month?" *(procurement volume — on-theme)*
- "Show FY2027 Schedule C awards under the Digital Inclusion and Literacy Initiative." *(cross-district initiative view)*
- "What does the City Charter say about the Office of Data Analytics?" *(Charter § 20-f — short and reliable)*
- "Search Schedule C for every award to [organization] across all available fiscal years." *(longitudinal single-org view; the strongest general-purpose watchdog query in the toolset)*
