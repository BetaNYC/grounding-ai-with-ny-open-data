---
status: DRAFT
---

# Demo script — liberal arts and general education

> **DRAFT.** First pass, 2026-07-29. A run-it-live script for showing grounded AI plus NYC/NYS open data to **faculty who teach writing, critical thinking, and political science** — not computer science. Every query below was dry-run against the live connectors on **2026-07-29**; results are in the presenter notes at the bottom.
>
> Companion to [`cuny-cs-curriculum.md`](cuny-cs-curriculum.md), which is the same arc aimed at a computer science curriculum audience. **Read the [folder README](README.md) first** for the act structure and the standing dry-run rule.

**The point:** for a CS audience, grounding is a systems property — provenance, API contracts, verification. For a liberal-arts audience it is a **reading and writing** property. The same connector that teaches a CS student about resolvable identifiers teaches a composition student about source evaluation, and teaches a political science student that a stated priority and a budget line are different claims.

The companion deck for this script is [`cuny-liberal-arts-deck.html`](cuny-liberal-arts-deck.html) — a self-contained HTML deck, no network required, with eleven clickable demos and presenter notes on `N`.

---

## Before you start

- Four of the seven connectors need **no API key and no account**: Charter/Laws/Rules, Checkbook, City Record, and Council discretionary funding. Open with one of those.
- Keep a browser tab on [intro.nyc](https://intro.nyc) so an Intro number can be resolved live.
- Have the license answer ready. Faculty ask it early and it decides whether they adapt anything. See [Act 5](#act-5--what-it-takes-to-put-this-in-a-classroom).

**Opening line:**
> "Most AI-literacy material teaches people how to use the tools. You are better placed than we are to teach them how to question the tools. Here is the raw material for that."

---

## Act 1 — The failure mode, demonstrated not asserted

Unchanged from the CS script, and it is the load-bearing act for every audience.

**Prompt:**
> "What NYC Council legislation exists on broadband access? Give me the Intro numbers and current status."

**The reveal:** the grounded agent returns **Int 1122-2024**, "a plan for expanding home access to broadband internet," **Enacted 2025-11-08**. Open [intro.nyc/1122-2024](https://intro.nyc/1122-2024). The URL resolves and the status matches.

> **The teaching beat, and it is a humanities question:** ask the room *how a student would know the ungrounded answer was wrong.* The answer is not "use a better model." It is "demand a resolvable identifier." That is citation discipline restated for a world where the source may be fabricated.

---

## Act 2 — The catalog is an API, and that is the lesson

Unchanged. Catalog search returns metadata — an ID, a column list, data types — not prose. Then query against the ID the first step produced.

**Why it matters outside CS:** the two-step is *find the contract, then query against it*. For a research-writing unit, that is the difference between "I found a website" and "I found a source whose scope I can state."

---

## Act 3 — Swap this act to the discipline in the room

This is the act that changes. Three worked versions, all dry-run.

### First-year writing and composition

**Prompt:**
> "Show me Sanitation's registered contracts for FY2026."

**What came back (2026-07-29):** 254 registered contracts. The largest is Veolia ES Technical Solutions, waste removal and processing, contract `MMA182720268802706`, **$18,100,000 committed** against **$478,414.64 spent to date**.

**Where to linger:** the two dollar figures. Committed is not spent — 2.6% of it has moved. Both numbers sit in the same record, correctly labelled, and a writer who reads "$18 million contract" as "$18 million spent" has made a claim the source does not support.

> **The assignment this unlocks — "Verify, then rewrite."** Give each student one real agency document. (1) Identify every checkable claim. (2) Check each against a primary source, recording the resolvable identifier. (3) Rewrite for a named audience at a stated reading level. (4) Submit a verification table, the rewrite, **and a note on what could not be verified and why.**
>
> Step 4 carries the weight. It is the bounded negative, and it is where the writing gets honest.

**On academic integrity, which this audience raises early.** The deliverable is not prose a model could produce; it is a verification table plus a rewrite plus a documented gap. The process is the artifact. A student who outsources it has to outsource the checking, and the checking is what leaves a trail. That is a more useful answer than a detection tool.

### Critical thinking

**Prompt:**
> "Search NYC Open Data for datasets about career and technical education."

**What came back (2026-07-29):** datasets `gyjk-fbss` (Local Law 174 CTE programs) and `8vqd-3345` (companion enrollment counts). In `8vqd-3345`, some enrollment cells contain the literal string `"s"`.

**That `"s"` is suppression** — the city masks small cell counts so individual students cannot be re-identified from a demographic cross-tab.

> **Why this is the best single artifact in the repo for a reasoning course.** A student who writes `int(row["n_students_enrolled_in_cte"])` gets a crash, which is a *good* failure: it announces itself. A student who wraps it in a silent `try/except` gets a **wrong average** — an error that produces a plausible number and never announces itself at all.
>
> No code is required to teach it. The lesson is that the dangerous error is the one that still returns something.
>
> **The assignment — "Two answers, one wrong."** The same civic question answered twice, once grounded and once not, without telling students which is which. They sort claims into checkable and uncheckable, check, then write up **what made the wrong answer persuasive.** Fluency, confidence, specificity, and plausible structure are the mechanisms — and they are the same mechanisms in a bad argument from a human source.

### Political science and government

**Prompt:**
> "Which organizations did Council Member Restler fund in FY2026?"

**What came back (2026-07-29):** 12 awards, **$836,000** total, Council District 33. Including $300,000 to ExpandED Schools for high-impact tutoring, $40,000 to the Department of Sanitation for rat-resistant basket replacement, and $25,000 to the Fund for the City of New York for **BetaNYC**, under the Digital Inclusion and Literacy Initiative, via DYCD.

**Then the cross-connector move, which no single dataset answers.** Query Checkbook for the same agency and three contracts appear whose purpose reads **"CITY COUNCIL FUNDING — BID CONTAINERIZATION PROGRAM"**, award method `BORO NEEDS / DISCRETIONARY FUND`: Hudson Square District Management Association ($168,750), Neighborhood Initiatives Development Corporation ($143,261), NoHo NY District Management Association ($75,000).

Council decides → an agency contracts → a named organization is paid. Three separate public records, two connectors, one money trail.

> **The assignment — "Your district, on the record."** Each student takes their own Council district: trace one bill, find one discretionary award, identify one 311 pattern, then write a memo assessing whether stated priorities match the record, citing identifiers throughout. Personal stake, primary sources, individually verifiable, and it teaches institutions by using them rather than describing them.

---

## Act 4 — When the finding is the absence

Keep this act in every version. Two options, both verified.

**The oversight gap.** Local Law 174 of 2016 requires an *annual* career and technical education report. The most recent one published to the portal covers **2019–2020**, published September 2021. It is 2026.

Then the honest correction, which is the most important thirty seconds: this shows what is *on the portal*, not that no report exists anywhere. Saying precisely what you checked and did not find is a **bounded negative**, and it is harder than finding a source.

**The tool that cannot answer your question.** `nyc-311-mcp` exposes `get_calendar`, `get_service_request`, `get_service_request_list`, and `get_status`. It answers status questions — alternate-side parking, collections, school session, emergency conditions — and has **no aggregation at all.** "Top complaint types in my district" is not a question this connector can answer; that needs the 311 dataset on the open data portal via Socrata.

> An earlier draft of this material asked the 311 connector exactly that question. **Knowing which tool cannot answer your question is part of the literacy**, and demonstrating a limit you walked into yourself is more persuasive than describing one.

---

## Act 5 — What it takes to put this in a classroom

**Cost.** Four of seven connectors need no key and no account. The other three need free keys. A real first assignment costs nothing and requires no signup.

> The cautionary precedent is ours. A 2024 School of Data workshop on open data and AI required a paid ChatGPT Plus account to follow along. The 2026 replacement removed that requirement, because a paid-tool dependency excludes students unevenly. Raise this before someone else does.

**Setup.** School of Data 2026 ran setup through **GitHub Codespaces**, which avoids local installation entirely — the answer for a locked-down lab.

**Licensing, stated up front rather than in a follow-up email.** Most BetaNYC material is **CC BY-SA 4.0**, crediting "BetaNYC, a partner project of the Fund for the City of New York." ShareAlike means an adaptation carries the same license, which suits faculty building a course packet. BetaNYC's **AI 101** material additionally carries a **Data & Society** credit (their AI Civics curriculum) and involves the NYC Council **AICE Initiative** as a named partner.

**Privacy.** The suppression case in Act 3 does double duty. The city masks small counts in its own published data so individuals cannot be re-identified; the same reasoning keeps student data out of these tools. It demonstrates better than it lectures.

---

## Extending the act structure

Three rows to add to the [folder README](README.md)'s swap table. Acts 1, 2, and 5 stay as written.

| Discipline | Act 3 dataset | Act 4 (the honesty act) |
|---|---|---|
| First-year writing | One agency document plus the record behind its central claim | What the document asserts that the data does not support |
| Critical thinking | The suppressed-cell CTE enrollment file (`8vqd-3345`) | The silent `try/except` that yields a wrong average |
| Political science | Council discretionary funding for the student's own district | Local Law 174: the law says annual, the record stops at 2019–2020 |

---

## Presenter notes (verified 2026-07-29)

Per the [folder README](README.md)'s standing rule: *a script without verified notes is a draft, not a demo.*

| Connector | Query run | Result |
|---|---|---|
| Checkbook (no key) | Sanitation registered contracts, FY2026, `agency_code: 827` | 254 contracts. Veolia ES Technical Solutions, **$18,100,000 committed / $478,414.64 spent**, `MMA182720268802706`, 2025-12-01 to 2030-11-30. |
| City Record (no key) | Open solicitations, soonest deadline first | 12 live. NYPD "Gun Cleaning Kit" and "Police Officer Eight Point Cap"; SCA kitchen-design RFP up to $500,000; DOF summons printing and mailing. |
| Discretionary funding (no key) | Council Member Restler, FY2026 | 12 awards, $836,000, District 33 — including $25,000 to Fund for the City of New York for BetaNYC. |
| Council Legistar (free key) | Broadband access legislation | `Int 1122-2024`, enacted 2025-11-08, resolves at intro.nyc. |
| Socrata (no key) | CTE datasets | `gyjk-fbss`, `8vqd-3345`; suppression as the literal string `"s"`. |
| 311 (free key) | Service calendar, 2026-07-30 | ASP **in effect**; collections **on schedule**; schools **not in session** ("Summer 2026"). |
| NYS OpenLegislation (free key) | Search members, "Kavanagh", Senate | Two rows: 2025 session district 27; 2017 session district 74. Same surname, different chamber. **A name is not an identifier.** |

**What we could not verify:** the Checkbook NYC website blocks automated requests, so that link is unconfirmed from a script. Figures on live systems change; a number true on 2026-07-29 may not be true when you run it.

---

## See also

- [`cuny-cs-curriculum.md`](cuny-cs-curriculum.md) — the computer science version of this arc
- [`../user-journeys.md`](../user-journeys.md) — the audience-neutral prompt catalog
- [`../grounding-ai-agents.md`](../grounding-ai-agents.md) — the rationale these demos dramatize
- [`../good-government/foil-research-methodology.md`](../good-government/foil-research-methodology.md) — where the bounded-negative discipline is worked out at length
