---
status: DRAFT
---

# Demo script — good-government / watchdog audience (Reinvent Albany)

> **DRAFT.** Revised 2026-07-27, **revised again 2026-07-30**. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to a **good-government or watchdog organization** — written for **Reinvent Albany**, and reusable for Citizens Union, CBC, NYPIRG, the Fiscal Policy Institute, or an investigative newsroom.
>
> **Slide companion:** [`reinvent-albany-deck.html`](reinvent-albany-deck.html). Same acts, presentation medium, every warning below carried in its presenter notes (press `N`). **This file stays the source of truth for figures and provenance.**
>
> **Figures are dated individually in the presenter-notes provenance table.** Act 2's Schedule C figures, Act 3 and § 23-507 were re-verified 2026-07-27; Act 2's Checkbook figures were re-verified 2026-07-30; the open data portal findings in Act 4 are from 2026-07-21 and were **not** re-pulled.

> 🚨 **Act 3's figures changed by $90 million on 2026-07-27.** The tool that produces them caps at 500 rows without saying so. Read the Act 3 correction block before you present anything from it. [New-York-City-Budget#42](https://github.com/BetaNYC/New-York-City-Budget/issues/42).

> ### 🔄 Revision note — what changed on 2026-07-30
>
> The Checkbook material in this script was built around an outage. **That outage is over, and the reason it ended changes what Act 6 says.**
>
> - **Checkbook API access was restored 2026-07-28.** Verified live again 2026-07-30. The Act 2 reconciliation runs as originally written; the outage warnings are gone.
> - **The residual block turned out to be ours, not theirs.** We were exceeding an undocumented 1 req/sec limit. Any framing of this as "the city blocked us" is now false. Fixed in `nyc-checkbook-mcp` v1.6.0.
> - **The Comptroller's office answered our letter in two days**, fixed two drifted catalog entries, and **corrected one of our own findings**: Prime Registration Date *is* exposed.
> - **Do not attempt the 403 as a live demo.** It asked the agent for a record that no longer fails to return.
>
> ⚠️ **The 2026-07-27 scope decision still stands and is not reopened by any of this.** This act carries **no ask** and does not critique another office's dashboard. Report the failure shape, say what we did about it, and stop.

This audience is different from every other script in this repo, and the difference should shape the whole meeting.

**They are not the constituency. They are the oversight.** A council member wants to see their own district; a watchdog wants to see the thing nobody has assembled yet. So this script is not district-scoped, and it does not try to impress with a clean lookup. It goes straight at the questions this audience actually lives on: **where did the money go, what got taken back, what was supposed to be published but wasn't, and what is published but cannot be joined to anything.**

Act 6 is the one that closes the loop: it is the only act in this repo where BetaNYC is the subject rather than the tool, and where we were the ones who turned out to be wrong. For this room that is the strongest material in the script.

They also already know this domain better than you do. Do not explain Schedule C to Reinvent Albany. The pitch is not "here is discretionary funding" — it is "here is discretionary funding, queryable in seconds, by an agent that cites its source and refuses to guess."

---

## Before you start (2 min)

- No district to pre-fill. This script runs citywide.
- Have [Checkbook NYC](https://www.checkbooknyc.com) and [NYC Open Data](https://data.cityofnewyork.us) open as reference tabs. **The Checkbook API works again** as of 2026-07-28, so no step needs to be done by hand.
- Runs about 26 minutes with Act 6, 22 without. Act 5 is already marked optional. **If you are short on time, cut Act 5 rather than Act 6** — Act 6 is the one written for this audience.
- Expect to be interrupted with hard questions about provenance and coverage. **That is the good outcome.** The presenter notes below are written so you can answer them.

> ⚠️ **Check your egress IP before you demo, and before you quote any failure to anyone.**
>
> ```
> curl -s https://api.ipify.org
> ```
>
> The BetaNYC office is `50.74.128.42`. **`janus` routes through a commercial VPN by default** (`utun10`, separate from Tailscale), which egresses from a datacenter address. On 2026-07-27 that nearly produced a "your fix did not work" report to a CIO who had just done real work for us. A 403 mid-demo is far more likely to be your own network path than Checkbook.

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

**Re-verified live 2026-07-27:** **54 Schedule C awards totaling $6,455,750** in FY2026 — the same organization funded separately by **41 distinct sponsors**, nearly all under the **NYC Cleanup** initiative via DYCD. Individual awards range from **$7,750 to $280,000**. 54 returned against a limit of 500, so this one is genuinely complete.

> ⚠️ **Corrected 2026-07-27 — this previously read "41 distinct council members."** Two of the 41 are **borough delegations, not members**: `Brooklyn` (1 award, $7,750) and `Queens` (2 awards, $42,000). So it is **39 council members plus two borough delegations**.
>
> **The `member` column mixes three kinds of thing** and does not distinguish them: individual surnames, borough delegations (`Brooklyn`, `Queens`, `Staten Island`, `Manhattan`), and `Speaker`. Across all FY2026 awards the delegations alone carry **229 awards worth $25,380,937**. Anyone computing "awards per council member" from this field silently folds delegation and Speaker money into a member count. **Say this to this room** — it is exactly the kind of schema detail that quietly wrecks an analysis, and they will use the field.

**What to say:**
> "One vendor, 54 separate discretionary decisions by 41 different council members, six and a half million dollars, and no single line item anywhere that says so. Assembling this by hand means reading the Schedule C PDF end to end. That's the afternoon this replaces."

**Then the reconciliation, on a smaller organization so the numbers stay legible.**

**Prompt:**
> "Check NYC Checkbook for FY2026 spending paid to Community League of the Heights."

**Verified live 2026-07-30** (`search_spending(payee_name="Community League of the Heights", fiscal_year="2026")`): **32 payment records totaling $1,040,448.79**, across DYCD, DOE, SBS, DOT, and Small Business Services. Three of those checks sit under budget code **`3625 (TAX LEVY ELECTED OFFICIALS)`**: **$107,244.16**, **$33,000.00**, and **$2,560.00** — **$142,804.16** in total.

**The line to land:** "That budget code is the join. It's discretionary money appearing as an actual disbursement. Allocation in one system, check in another, connected in two questions."

> 🚩 **Do not say $107,244.16 is De La Rosa's $30,000 arriving. It is not, and this room will catch it.**
>
> The allocation side shows CLOTH receiving **$30,000 from Council Member De La Rosa** in FY2026. The disbursement side shows **$142,804.16** under Tax Levy Elected Officials. Those do not reconcile because **code `3625` aggregates discretionary spending from every elected official to that vendor**, not De La Rosa's award alone. Other members funded CLOTH too.
>
> **State that gap out loud — it is the more interesting finding.** The budget code gets you from an allocation to a real check. Getting from there to *whose* allocation that check discharges is a further step the code does not give you. So the join is real, and it is coarser than it looks.
>
> That is this folder's fourth question in one live example: **published, current, and still not joinable to the unit governance actually uses.** For an audience that campaigns on exactly this, a demonstrated limit is worth more than a clean match.

> **Sharpen it for this room:** the interesting output of this pattern is not the match — it's the **mismatch**. Allocations with no corresponding spending, or spending that exceeds allocation, are the thing worth chasing. The tooling makes that comparison cheap enough to run across every organization rather than the three you already suspected. Just be precise about which mismatches are findings and which are artifacts of a coarse budget code.

---

## Act 3 — What got taken back (5 min)

**Build the meeting around this act.** It is the least visible money in the system and the tooling handles it directly.

**Prompt:**
> "Show FY2026 NYC Council transparency resolution rescissions — discretionary money that was de-designated after adoption."

**The complete FY2026 set, established 2026-07-27: 1,291 rescissions totaling $212,600,875**, across transparency resolutions 1 through 10 (2025-08-14 to 2026-06-30).

> ⚠️ **These figures were read from `budget.db` directly, NOT from the tool.** `search_transparency_resolutions` caps at 500 rows and reports **$122,285,988** — low by **$90,314,887**. Do not quote a tool result for this act until [New-York-City-Budget#42](https://github.com/BetaNYC/New-York-City-Budget/issues/42) is fixed. Full explanation below the tables.

**By resolution:**

| Reso | Adopted | Rescissions | Total |
|---|---|---|---|
| 1 | 2025-08-14 | 293 | $98,357,771 |
| 2 | 2025-09-25 | 263 | $47,593,274 |
| 3 | 2025-10-29 | 219 | $35,548,076 |
| 4 | 2025-11-25 | 140 | $8,602,127 |
| 5 | 2025-12-18 | 74 | $6,486,702 |
| 6 | 2026-02-12 | 83 | $4,448,256 |
| 7 | 2026-03-10 | 30 | $2,234,633 |
| 8 | 2026-04-16 | 39 | $1,044,393 |
| 9 | 2026-05-20 | 65 | $1,956,904 |
| 10 | 2026-06-30 | 85 | $6,328,739 |

**The largest, all unattributed** — each verified 2026-07-27:

| Amount | Member | Recipient | Reso |
|---|---|---|---|
| −$12,500,000 | *(none)* | Department of Social Services (DSS/HRA) | 1 |
| −$8,300,000 | *(none)* | Department of Social Services (DSS/HRA) | 1 |
| −$8,100,000 | *(none)* | Department of Youth and Community Development | 1 |
| −$7,168,410 | *(none)* | Department of Youth and Community Development | 2 |
| −$5,750,000 | *(none)* | Department of Social Services (DSS/HRA) | 2 |

**The largest with any attribution at all is −$2,500,000, `Speaker` → Bedford Stuyvesant Restoration Corporation (SBS).** Note that "Speaker" is a value in the member column alongside individual surnames — see the Act 2 caveat about borough delegations.
| −$10,000 | Marmorato | Billion Oyster Project |
| −$5,000 | Marte | Council on the Environment |

**What to say:**
> "Adopted budgets get amended all year by transparency resolution, and rescissions carry negative amounts. This is money that was announced, then quietly withdrawn. A transfer shows up as a rescind and a designate on the same EIN — so the tool can distinguish 'moved' from 'taken away,' which is precisely the distinction a press release will not make."

> 🚨 **Corrected twice. Read this before presenting anything above — and the second correction is the interesting one.**
>
> **First correction (2026-07-21).** The original table was truncated at the default 50-row limit, part-way through the alphabet at "Cultural After-School Adventure." Its remediation said: *"Run this live with an explicit high limit — `limit: 500` — and read the real total off the result."*
>
> **Second correction (2026-07-27). That remediation is also truncated.** `search_transparency_resolutions` **hard-caps at 500 rows.** `cap()` in `src/db.ts:54` is `Math.min(Math.max(1, Math.trunc(limit)), 500)`, so `limit: 5000` returns the identical 500 rows. Nothing in the response says so — the header reads `500 row(s):`, exactly what a complete result of 500 would print.
>
> | | Rows | Total |
> |---|---|---|
> | What the tool returns | 500 | $122,285,988 |
> | What is actually there | **1,291** | **$212,600,875** |
> | Missing | 791 | **$90,314,887** |
>
> **And the truncation is not chronological.** `resolution` is stored as TEXT, and the query is `ORDER BY source_fy, resolution, chart`, so it sorts "1", "10", "2". The 500 rows you get are all of Reso 1, all of Reso 10, and 122 of Reso 2. **Resolutions 3 through 9 are entirely absent — 650 rescissions worth $60,321,091.** The remaining $29,993,796 of the gap is the 141 rows of Reso 2 that fell past the cap.
>
> **We wrote the rule and then broke it inside the fix for the last time we broke it.** This script states "treat returned exactly N against a limit of N as truncation until proven otherwise," and the `limit: 500` remediation violates exactly that. Filed as [New-York-City-Budget#42](https://github.com/BetaNYC/New-York-City-Budget/issues/42).
>
> **Until #42 lands, read this act's figures off the tables above, not off a live tool call.** If you run it live in the room — which is a legitimate choice — say the cap out loud before you say the number. **Presenting a truncated total as complete, to the organization whose job is catching exactly that, is the one unforced error available in this act.** For this audience the bug is better material than the figure: see the deck's Act 6.
>
> Two claims from the first correction, re-checked 2026-07-27 and still true but no longer the headline: `Louis → Department of Cultural Affairs` at **−$480,000** (CASA, Reso 1) is real, but it is nowhere near the largest. And −$213,000 (DYCD, Adult Literacy Forward) is far from uniquely unattributed.

**The unattributed rescissions are the thing to point at, and the scale is the story.** Of 1,291 FY2026 rescissions, **345 carry no council member at all — $176,596,955, or 83% of the total dollar value** (verified 2026-07-27). Every one of the ten largest is unattributed.

−$213,000 to Adult Literacy Forward is still a good one to open on: no member attached, and a program whose name tells you who it serves. Then widen to the 345, and note that the top of the list is agency-level money in the millions rather than the tens of thousands. Ask the room what they'd want to know next. That is the demo doing its job — not answering the question, but getting them to the question in ten seconds instead of a week.

> ⚠️ **Do not assert that missing attribution is a transparency failure.** It may be a data-extraction artifact, or the source resolution may genuinely carry agency-level rescissions with no member line. Those are different findings. Offer to check the source resolution PDF via the Legistar crosswalk rather than characterizing it.

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

**Verified 2026-07-21:** returns live City Record notices with agency, PIN/EPIN, selection method, due date, and contact — e.g. FDNY `05726B0010` (mark-out and core drilling, competitive sealed bids, due 2026-07-21 14:00), NYCHA `522172`, DEP `82626B0026`.

> ⏳ **Those examples have expired.** FDNY `05726B0010` closed 2026-07-21 14:00. **This act is only worth running live** — the whole point is that the notices are current, and reading out a solicitation that closed last week undercuts it. Run the prompt fresh in the meeting and read whatever comes back. Do not quote the three above.

**What to say:** "The City Record, queryable. Same source as the daily PDF, without reading the daily PDF."

---

## Act 6 — What happened when we asked (4 min)

**This is the act for this audience specifically.** Every other act demonstrates the tooling. This one demonstrates the *process* — what it looks like to find a public-data access problem, report it through the front door, and be told you were partly the cause. Run it only if the room is engaged. It is the strongest close available here and it needs four minutes of real attention.

> **Do not run part one as a live query.** The 2026-07-21 version of this act demoed a 403. Access was restored 2026-07-28 and re-verified 2026-07-30 — the query now simply works. This act is told, not demoed.

### Part one: the round-trip, in four dates

**What to say:**
> "Between July 16 and July 21, Checkbook's documented API started returning 403 to us. The site loaded fine in a browser. On the 22nd we sent a letter to the Comptroller's office. They answered on the 24th — two days — with a real technical response, looped in their CIO, and offered a call. On the 28th we got on that call and access was working."

**Then the part that belongs to this room, and do not soften it:**
> "And the residual block was ours. We were exceeding a rate limit of one request per second. Their fix had already worked; what we were still measuring was our own client getting itself blocked. We shipped the fix on our side — rate pacing, backoff, and we stopped following redirects, which was turning one logical API call into about forty requests against their origin."

**Why this is the right material for this audience:** they spend their working lives being told that a data problem is somebody else's fault. An organization that says "we asked, they fixed it, and then the rest of it was us" is establishing that its findings are worth trusting when they *do* point outward. **The correction is the credential.**

> **Presenter note — the near-miss, if the room is technical.** On 2026-07-27 we retested and got a fresh 403, and nearly reported "your fix did not work" to a CIO who had just done real work for us. The test had egressed through a VPN on a datacenter IP, not the office address the office had investigated. Chrome from the same address loaded the site fine, which is what caught it. **One source address, two clients, minutes apart: browser 200, command line 403.** That is how we established the discriminator was the client and not the network — and it is why the standing rule is now to check your egress IP before reporting any test result to an office whose diagnosis keys on source IP.

### Part two: what we got wrong, and who corrected it

> ⚠️ **Scope, per the 2026-07-27 decision. This part reports on our own work only.** An earlier draft critiqued a dashboard published by the Comptroller's office. **That critique is not in this script and is not reinstated by the fact that we now have more information about it.** Describe our own error; do not evaluate another office's product in front of a third party.

Our 2026-07-09 audit made two claims about reproducing a published figure. **The office answered both, and corrected us on one.**

| Our claim | What turned out to be true |
|---|---|
| A prime-expense **registration date** was not exposed | ❌ **We were wrong.** Prime Registration Date *is* exposed as a response field |
| A **non-profit vendor classification** was not published | ✅ Correct. Not exposed; they said they will consider it |

**What to say:**
> "We published two findings about data we couldn't reach. One of them was simply wrong — the field was there and we missed it. They told us so, and we corrected it. That's worth saying out loud, because it is the same standard we're asking you to hold our numbers to."

**Also confirmed by the office:** the Checkbook 2.0 migration **dropped no documented API fields or domains**, and external applications can keep using the API without going through the web interface. We can now state that rather than infer it. They also fixed two drifted NYC Open Data catalog entries we had flagged.

### Part three: the limits that are documented nowhere

> ⚠️ **This part carries NO ask.** Report the finding and stop. Do not invite the room to co-sign anything, and do not suggest their name would carry it further. That framing was removed on 2026-07-27 and is not coming back.

**What to say:**
> "Checkbook enforces two operational limits. One request per second, and twenty thousand records per call. Neither is documented anywhere on checkbooknyc.com — not on the API landing page, not in the global parameters table, not on any domain page. We only learned both numbers in conversation with the office."

> "That's the part worth knowing. Not that the limits exist — they're reasonable limits. It's that the only way we learned them was to violate one and get blocked. An independent researcher hitting the same wall just experiences an outage and concludes the data is unreliable."

**Two smaller documentation observations, if they want specifics:**

- The API landing page says **20,000 records per call**; every domain parameter table says **fewer than 1,000** and caps the field at four characters, which cannot express 20000. We tested — **20,000 is correct** and the tables are stale.
- The landing page says `records_from`; the parameter tables say `record_from`.

**How to close the act:**
> "We've passed all of that back to them. That's where it sits."

> **Presenter note — the letter's status, and get this right.** The letter was **sent 2026-07-22** and **answered 2026-07-24**. Do not describe it as pending, unsent, or unanswered. The relationship is live and cooperative: **Richard Lundy** (Assistant Comptroller, IT Operations/CIO) is the technical route, **Matt Rubin** (Chief of Staff) is the relationship owner. We replied 2026-07-29 confirming access works, owning the rate-limit fault, and asking whether the limit is scoped per IP or per client. **That question is outstanding** — and it is ours to pursue, not the room's. If someone volunteers to weigh in, that is their initiative and a fine outcome; **you do not solicit it.**

---

## Closing (1 min)

> "All of this is open. The connectors are public repos, the guides are CC BY-SA, and most of it requires no API key at all. Every bug I described in Act 6 is a public issue with our name on it, including the one where we were the problem. We'd rather you fork it and find the things we got wrong than take our word for any of it. And if there's a query your team runs constantly by hand, that's exactly the user journey we want to add."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Structured budget data: [`BetaNYC/New-York-City-Budget`](https://github.com/BetaNYC/New-York-City-Budget)
- Full prompt catalog: [`../user-journeys.md`](../user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes

**Figures carry individual verification dates — see the provenance table.** Acts 2 and 3 and § 23-507 were re-verified **2026-07-27**; Act 4's portal findings and Act 6's Checkbook status are from **2026-07-21** and were not re-pulled.

**This audience will interrogate provenance.** Answer precisely or concede. A hedge you can defend beats a figure you can't.

### 🚨 The row cap — the trap that broke this script twice

**`search_transparency_resolutions` hard-caps at 500 rows and does not say so.** `cap()` in `src/db.ts:54` clamps any `limit` to 500. The response header reads `500 row(s):` — indistinguishable from a complete result of exactly 500. There is no total, no `has_more`, no warning.

For FY2026 rescissions that understates by **$90,314,887** (500 rows / $122,285,988 reported, against 1,291 / $212,600,875 actual).

**Worse, `resolution` is stored as TEXT**, so `ORDER BY source_fy, resolution, chart` sorts "1", "10", "2" — the truncation is not chronological, and **resolutions 3 through 9 vanish entirely**.

**This script's *first* correction told presenters to fix the problem by passing `limit: 500`.** That remediation is itself the cap. Filed as [New-York-City-Budget#42](https://github.com/BetaNYC/New-York-City-Budget/issues/42).

**What to do until it's fixed:**

1. **Read Act 3's figures off the tables in this file.** They come from the database.
2. If you run it live anyway — legitimate, and good material — **say the cap before you say the number.**
3. **The same `cap()` governs four tools**, verified in `src/db.ts` on 2026-07-27: `search_awards` (line 177), `search_transparency_resolutions` (211), `search_capital_projects` (231), `get_terms_conditions` (248). **Treat any aggregate at or near 500 rows as truncated until checked against the database.** Act 2's 54 rows is safely below it, which is why that figure held.

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

- **Checkbook operates two limits, neither documented on their site:** **1 request per second** and **20,000 records per call**. Exceeding the first puts you in a block that persists past the burst and returns 403 to *every* client on that IP, a browser included — which is exactly how a rate-limit block gets misread as a site outage. `nyc-checkbook-mcp` **v1.6.0** ships a rate pacer, retry backoff, and no redirect following. Use v1.6.0 or later.
- **`smart_search` is being removed, and the reason is worth knowing.** It was never part of Checkbook's supported API surface — the office told us so directly, and their logs show our July 16 calls to it rejected on that basis. This was never a WAF problem. Tracked in [nyc-checkbook-mcp#25](https://github.com/BetaNYC/nyc-checkbook-mcp/issues/25). Use the structured tools; `search_spending` requires `fiscal_year` or `issue_date_from`.
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
| CLOTH: 32 FY2026 Checkbook records, **$1,040,448.79** total; code `3625` = **$142,804.16** across 3 checks | **Re-verified live 2026-07-30** from the office IP `50.74.128.42`: `search_spending(payee_name="Community League of the Heights", fiscal_year="2026")` → HTTP 200, `total_records: 32`, `has_more: false` |
| CLOTH $30,000 award from De La Rosa (allocation side) | `search_awards(...)`, **2026-07-21, not re-verified since.** This does **not** reconcile to the $142,804.16 above — code `3625` aggregates every elected official's discretionary money to the vendor. See the flag in Act 2 |
| **FY2026 rescissions: 1,291 rows, $212,600,875, Resos 1–10** | Read directly from `mcp/data/budget.db` on 2026-07-27, **not** from the tool: `SELECT COUNT(*), SUM(ABS(amount)) FROM transparency WHERE source_fy=2026 AND action='rescind'`. The tool caps at 500 and reports $122,285,988 — see [#42](https://github.com/BetaNYC/New-York-City-Budget/issues/42). The tool's `fiscal_year` parameter filters `source_fy`, so the comparison is like-for-like |
| **345 unattributed rescissions, $176,596,955** | Same query with `AND TRIM(COALESCE(council_member,''))=''`. Verified 2026-07-27 |
| **41 ACE sponsors = 39 members + Brooklyn and Queens delegations** | `SELECT COUNT(DISTINCT member) FROM awards WHERE fiscal_year=2026 AND organization LIKE '%Association of Community Employment%'`, then filtered for delegation values. Verified 2026-07-27 |
| **§ 23-507 full text** | `get_section(citation="23-507")` — verified live 2026-07-27. L.L. 2017/251, eff. 12/17/2017 |
| **Checkbook access restored; 1 req/sec and 20,000-record limits** | Troubleshooting session with the Comptroller's office 2026-07-28; both limits stated verbally, neither published. Re-verified from the office IP 2026-07-30 |
| CTE datasets stop at 2019-2020 | Socrata catalog, two independent search terms |
| Broadband dataset covers SD 10–34 + 36 only | Socrata `9bjg-n96a` |
| Open solicitations | `nyc-record-mcp get_open_solicitations` |

**Not independently verified this session:**
- **Whether the Local Law 174 CTE report was actually produced** and simply not published as open data. Only the portal's contents were checked. State the narrow claim.
- ✅ **RESOLVED 2026-07-24 — the Late-Contracts claims were answered, and half of ours was wrong.** Our 2026-07-09 audit said the prime-expense registration date was not exposed. **The office corrected us: it is.** The non-profit vendor classification genuinely is not published, and they will consider exposing it. This is the worked example of why the "absence we searched for is weaker than a presence we found" rule exists — we published an absence and it did not hold. Basis: `team/engineering/2026-07-09-checkbook-2.0-api-audit.md`, [nyc-checkbook-mcp#11](https://github.com/BetaNYC/nyc-checkbook-mcp/issues/11), and `team/contacts/agencies/office-of-the-new-york-city-comptroller.md`. **Per the 2026-07-27 scope decision this is background, not presentation material** — the dashboard critique is not in the script.
- ✅ **RESOLVED — the letter was SENT 2026-07-22 and ANSWERED 2026-07-24.** The old note here said "drafted and unsent"; that is now false and would be caught. We replied 2026-07-29. **One question is genuinely outstanding: whether the 1 req/sec limit is scoped per IP or per client.** That is the only part of this thread you should describe as open, and **you are not asking the room to join it.**
- **Whether Checkbook's rate limit is published anywhere we have not looked.** We checked the API landing page, the global parameters table, and every domain page, and the office confirmed verbally that it is undocumented. That is strong, but it is still our search plus their word. Say "the office told us it isn't documented, and we couldn't find it either" rather than asserting it as fact.
- **Whether the missing member attribution on the unattributed rescissions is a data-extraction artifact or genuinely absent from the source document.** Do not assert it is a transparency failure. If asked, offer to check the source resolution PDF via the Legistar crosswalk. This applies to **345 rows worth $176.6M**, not a handful.
- ~~**The complete FY2026 rescission count and total.**~~ **Established 2026-07-27: 1,291 rescissions, $212,600,875.** Read from the database, because the tool cannot return it — see [#42](https://github.com/BetaNYC/New-York-City-Budget/issues/42).
- **That $6,455,750 is ACE's complete FY2026 total** — the query returned 54 rows against a limit of 60, so it is very likely complete, but re-run with a higher limit before publishing the figure.

---

## Backup prompts (if one falls flat)

- "Which NYC agencies posted the most City Record procurement notices in the last month?" *(procurement volume — on-theme)*
- "Show FY2027 Schedule C awards under the Digital Inclusion and Literacy Initiative." *(cross-district initiative view)*
- "What does the City Charter say about the Office of Data Analytics?" *(Charter § 20-f — short and reliable)*
- "Search Schedule C for every award to [organization] across all available fiscal years." *(longitudinal single-org view; the strongest general-purpose watchdog query in the toolset)*
