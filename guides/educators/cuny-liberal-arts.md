---
status: DRAFT
---

# Demo script — liberal arts and general education

> **DRAFT.** First pass, 2026-07-29; figures re-checked 2026-10-19. A run-it-live script for showing grounded AI plus NYC/NYS open data to **faculty who teach writing, critical thinking, and political science** — not computer science. Every query below was dry-run against the live connectors on **2026-07-29**, and the ones whose results had changed or were wrong were re-run on **2026-10-19**; results are in the presenter notes at the bottom. The deck's demos are recorded replays of those runs, each badged with its date.
>
> Companion to [`cuny-cs-curriculum.md`](cuny-cs-curriculum.md), which is the same arc aimed at a computer science curriculum audience. **Read the [folder README](README.md) first** for the act structure and the standing dry-run rule.

**Grounding** means the assistant answers from a named public record and shows you which one, instead of answering from memory.

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

Unchanged. Catalog search returns a description of each source (programmers say metadata) — an ID, a column list, what kind of value each column holds — not prose. Then query against the ID the first step produced.

**Why it matters outside CS:** the two-step is *find the contract, then query against it*. For a research-writing unit, that is the difference between "I found a website" and "I found a source whose scope I can state."

---

## Act 3 — Swap this act to the discipline in the room

This is the act that changes. Three worked versions, all dry-run.

### First-year writing and composition

**Prompt:**
> "Show me Sanitation's registered contracts for FY2026."

**What came back (2026-10-19):** 285 registered contracts. The largest is Veolia ES Technical Solutions, waste removal and processing, contract `MMA182720268802706`, **$18,100,000 committed** against **$901,404.56 spent to date**.

**Where to linger:** the two dollar figures. Committed is not spent — about 5% of it has moved. Both numbers sit in the same record, correctly labeled, and a writer who reads "$18 million contract" as "$18 million spent" has made a claim the source does not support.

> **The assignment this unlocks — "Verify, then rewrite."** Give each student one real agency document. (1) Identify every checkable claim. (2) Check each against a primary source, recording the resolvable identifier. (3) Rewrite for a named audience at a stated reading level. (4) Submit a verification table, the rewrite, **and a note on what could not be verified and why.**
>
> Step 4 carries the weight. It is the bounded negative, and it is where the writing gets honest.

**On academic integrity, which this audience raises early.** The deliverable is not prose a model could produce; it is a verification table plus a rewrite plus a documented gap. The process is the artifact. A student who outsources it has to outsource the checking, and the checking is what leaves a trail. That is a more useful answer than a detection tool.

### Critical thinking

**Prompt:**
> "Search NYC Open Data for datasets about career and technical education."

**What came back (2026-07-29):** datasets `gyjk-fbss` (Local Law 174 CTE programs) and `8vqd-3345` (the 2018–2019 report, enrollment by student group). In `8vqd-3345`, some enrollment cells contain the literal string `"s"`.

**That `"s"` is suppression** — the city masks small cell counts so individual students cannot be re-identified from a demographic cross-tab.

> **Why this is the best single artifact in the repo for a reasoning course.** A program that expects a number and finds `"s"` stops with an error, which is a *good* failure: it announces itself. A program told to skip whatever it cannot read keeps going and reports a **wrong average** — an error that produces a plausible number and never announces itself at all.
>
> No code is required to teach it. The lesson is that the dangerous error is the one that still returns something.
>
> **The assignment — "Two answers, one wrong."** The same civic question answered twice, once grounded and once not, without telling students which is which. They sort claims into checkable and uncheckable, check, then write up **what made the wrong answer persuasive.** Fluency, confidence, specificity, and plausible structure are the mechanisms — and they are the same mechanisms in a bad argument from a human source.

### Political science and government

**Prompt:**
> "Which organizations did Council Member Restler fund in FY2026?"

**What came back (2026-10-19):** 163 designations, **$2,203,000** cleared (plus $40,000 pending), Council District 33. Including $150,000 to the Association of Community Employment Programs for the Homeless for sanitation cleanup, $40,000 to the Department of Sanitation for rat-resistant basket replacement, and $25,000 to the Fund for the City of New York for **BetaNYC**, under the Digital Inclusion and Literacy Initiative, via DYCD. The source is the Council's discretionary funding disclosure, its own award-level list (`search_disclosure_awards`, budget connector 2.0.0). It is a later snapshot than the adopted budget's Schedule C, so it includes designations made after adoption, each marked Cleared or Pending. The $300,000 ExpandED Schools tutoring award is a Speaker's Initiative designation with no member attached; do not credit it to Restler.

**Then the cross-connector move, which no single dataset answers.** Query Checkbook for the same agency and three contracts appear whose purpose reads **"CITY COUNCIL FUNDING — BID CONTAINERIZATION PROGRAM"**, award method `BORO NEEDS / DISCRETIONARY FUND`: Hudson Square District Management Association ($168,750), Neighborhood Initiatives Development Corporation ($143,261), NoHo NY District Management Association ($75,000).

Then back to the disclosure: Hudson Square District Management Association has **$45,000** in FY2026 Council "BID Containerization" designations ($30,000 + $15,000, via DSNY). The Checkbook contract is $168,750 over three years. The numbers differ because one is a single year's designation and the other a multi-year contract, and that difference is the question to hand students.

Council designates → an agency contracts → a named organization is paid. Three separate public records, two connectors, one money trail.

> **The assignment — "Your district, on the record."** Each student takes their own Council district: trace one bill, find one discretionary award, identify one 311 pattern, then write a memo assessing whether stated priorities match the record, citing identifiers throughout. Personal stake, primary sources, individually verifiable, and it teaches institutions by using them rather than describing them.

---

## Act 4 — When the finding is the absence

Keep this act in every version. Two options, both verified.

**The oversight gap.** Local Law 174 of 2016 requires an *annual* career and technical education report. The most recent one published to the portal covers **2019–2020**, published September 2021, more than five years before this review.

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
| Critical thinking | The suppressed-cell CTE enrollment file (`8vqd-3345`) | The program that skips unreadable cells and reports a wrong average |
| Political science | Council discretionary funding for the student's own district | Local Law 174: the law says annual, the record stops at 2019–2020 |

---

## Presenter notes (verified 2026-07-29; re-checked 2026-10-19)

Per the [folder README](README.md)'s standing rule: *a script without verified notes is a draft, not a demo.*

| Connector | Query run | Result |
|---|---|---|
| Checkbook (no key) | Sanitation registered contracts, FY2026, `agency_code: 827` | 285 contracts (2026-10-19). Veolia ES Technical Solutions, **$18,100,000 committed / $901,404.56 spent**, `MMA182720268802706`, 2025-12-01 to 2030-11-30. |
| City Record (no key) | Open solicitations, soonest deadline first | 2026-10-19 (`get_open_solicitations`): City Council "Initiative Reporting Application for the Division of Finance" RFP, due 2026-10-20 11:00; Parks LiDAR street tree inventory, due 2026-10-20; NYCHA plumbing supplies; DCAS skimmer vessel for DEP, bid opening 2026-10-21. |
| Discretionary funding (no key) | Council Member Restler, FY2026 (`search_disclosure_awards`, `council_member_id: 7820`) | 163 designations, $2,203,000 cleared (Council disclosure, 2026-09-14 export), District 33 — including $25,000 to Fund for the City of New York for BetaNYC. 2026-10-19. |
| Council Legistar (free key) | Broadband access legislation | `Int 1122-2024`, enacted 2025-11-08, resolves at intro.nyc. |
| Socrata (no key) | CTE datasets | `gyjk-fbss`, `8vqd-3345`; suppression as the literal string `"s"`. |
| 311 (free key) | Service calendar, 2026-10-20 | `get_calendar(date="2026-10-20")`, run 2026-10-19: ASP **in effect**; collections **on schedule**; public schools **open**. |
| NYS OpenLegislation (free key) | Search members, "Kavanagh", session year 2017, no chamber filter | Two rows: 2025 session district 27; 2017 session district 74. Same surname, different chamber. **A name is not an identifier.** |

**What we could not verify:** the Checkbook NYC website has blocked automated requests at times (it returned 200 on 2026-10-19), so the link may not open from a script. Figures on live systems change; a number true on its verification date may not be true when you run it.

**BetaNYC's own Council funding, FY2026** (the deck's closing slide lists all of it): **$190,000, all Cleared**, all via DYCD under the Fund for the City of New York's name, because BetaNYC is a project of the Fund. Seven designations, $140,000: six Digital Inclusion and Literacy Initiative designations, $115,000 (Restler $25,000; Epstein, Powers, Dinowitz and Won $20,000 each; Brewer $10,000), found with `search_disclosure_awards(fiscal_year=2026, program_name="BetaNYC")`; and Council Member Gutiérrez's $25,000 for the Civic Innovation Fellowship (FY26 02121, which the disclosure files under "Speaker"; the Gutiérrez attribution is from our own records). Plus $50,000, our share of the Artificial Intelligence Community Engagement (AICE) initiative: the disclosure shows one $208,000 Fund line with no member named (FY26 11643), and the $50,000 split comes from the Fund's records, not the disclosure. All rows verified 2026-10-19. **Two of these rows never say "BetaNYC"**, which is why a search on our name finds only six; that is a good teaching point for this room.

---

## See also

- [`cuny-cs-curriculum.md`](cuny-cs-curriculum.md) — the computer science version of this arc
- [`../user-journeys.md`](../user-journeys.md) — the audience-neutral prompt catalog
- [`../grounding-ai-agents.md`](../grounding-ai-agents.md) — the rationale these demos dramatize
- [`../good-government/foil-research-methodology.md`](../good-government/foil-research-methodology.md) — where the bounded-negative discipline is worked out at length
