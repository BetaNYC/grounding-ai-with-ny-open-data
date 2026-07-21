---
status: DRAFT
---

# Demo script — CUNY computer science curriculum

> **DRAFT.** First pass, 2026-07-21. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to **CUNY faculty and staff who design computer science curriculum**. Every prompt below was dry-run against the live MCPs on 2026-07-21 — see the presenter notes for what each one actually returned.

Companion to the general [`../user-journeys.md`](../user-journeys.md) catalog, framed for an academic audience. The other demo scripts in this repo ([`../council-members/`](../council-members/), [`../community-boards/`](../community-boards/)) ask *"what is happening in my district?"* This one asks a different question: **"what does this teach, and is it assignable?"**

**The point:** grounding is not a product feature, it is a *curricular concept*. A student who understands why an agent must cite a dataset ID understands provenance, API contracts, and verification — three things that outlive whichever model is current. NYC's open data portal is an unusually good teaching corpus because the data is real, local, free, and messy in instructive ways.

---

## Before you start (2 min)

- Have the agent open with the MCPs connected.
- Keep one tab on [NYC Open Data](https://data.cityofnewyork.us) so you can show that a dataset ID resolves to a real page.
- Nothing here needs an API key. That matters for a classroom — see [Act 5](#act-5--what-it-takes-to-put-this-in-a-classroom-3-min).

**Opening line:**
> "I'm not here to show you a chatbot. I'm here to show you a teachable failure and how students fix it. Watch what happens when an AI has to prove where a number came from."

---

## Act 1 — The failure mode, demonstrated not asserted (3 min)

Don't tell the room that ungrounded models hallucinate. Make it visible.

**Prompt:**
> "What NYC Council legislation exists on broadband access? Give me the Intro numbers and current status."

**What to say while it runs:** "Ask any general-purpose chatbot this and you will get confident, plausible, wrong Intro numbers — often from the wrong legislative session, sometimes invented outright. This one reads the Council's own Legistar system."

**The reveal:** the agent returns real records. Pick **Int 1122-2024** — "a plan for expanding home access to broadband internet," **Enacted 2025-11-08** — and open [intro.nyc/1122-2024](https://intro.nyc/1122-2024) in the browser tab. The URL resolves. The status matches.

> **The teaching beat:** ask the room *how a student would know* the ungrounded answer was wrong. That is the whole course in one question. The answer is not "trust a better model" — it is "demand a resolvable identifier." Every claim in this demo has one: an Intro number, a dataset ID, a section of the Administrative Code.

---

## Act 2 — The catalog is an API, and that is the lesson (4 min)

**Prompt:**
> "Search NYC Open Data for datasets about career and technical education. Limit to 8 results and just give me titles, dataset IDs, and column names."

**What to say:** "This is a catalog search against Socrata, the platform NYC Open Data runs on. Notice what came back is not prose — it is *metadata*: an ID, a column list, data types. That is an API contract. A student can go straight from this response to writing a query."

**Follow-up prompt:**
> "For dataset gyjk-fbss, show me the programs in the Information Technology cluster with their enrolled student counts."

**What to say:** "Now we have moved from discovery to query, and the agent picked the right dataset because the previous step gave it a real ID to work with. That two-step — find the contract, then query against it — is the pattern worth teaching. It generalizes far past this portal."

---

## Act 3 — The CS pipeline, in the city's own data (4 min)

The act this audience cares about most. It is about *their* students, before those students arrive at CUNY.

**Prompt:**
> "Using the 2019-2020 Local Law 174 CTE report, which NYC high schools run Information Technology cluster programs, how many students are enrolled, and how many have NYSED approval?"

**What to say:** "These are the CTE programs feeding computer science pathways — 'Computer Programming/Programmer, General,' 'Computer Software and Media Applications.' School by school, with enrollment counts and whether the state has approved the program. This is the pipeline into your intro courses, and it is a public file."

**Where to linger:** the `is_nysed_approved` column. Programs run whether or not they carry state approval, and the split is visible in the data. That is a curriculum-policy conversation the room can have on the spot, grounded in a specific file rather than an impression.

> **A detail worth stopping on.** In the companion enrollment dataset (`8vqd-3345`), some cells contain the literal string `"s"` instead of a number. That is **suppression** — the city masks small cell counts so individual students cannot be re-identified from a demographic cross-tab.
>
> This is a gift for a CS classroom. It is k-anonymity in a file students can open today, and it breaks naive code: a student who writes `int(row["n_students_enrolled_in_cte"])` gets a crash, and a student who writes a silent `try/except` gets a *wrong average*. Real data teaches defensive parsing better than any synthetic exercise, and it opens the privacy-versus-utility discussion without a hypothetical.

---

## Act 4 — When the finding is the absence (3 min)

**Prompt:**
> "Local Law 174 of 2016 requires an annual CTE report. What is the most recent year available as a dataset on the NYC open data portal?"

**What to say:** "The law says annual. The portal's most recent CTE report covers **2019-2020**, published September 2021. It is now 2026."

**Then, immediately, the honest correction — this is the most important thirty seconds of the demo:**

> "Now, careful. What we just established is that *the dataset is not on the portal*. That is not the same as *the report was never made*. It may well have been delivered to the Council as a PDF and never published as open data. A good researcher — and a good student — states the narrower claim and then goes and checks the wider one."

**What to say next:** "That discipline is the actual deliverable of a course like this. An agent will happily overstate a negative if you let it. Teaching students to say 'here is what my search covered, and here is what it therefore cannot prove' is a transferable research skill that has nothing to do with AI."

> **Optional follow-through**, if the room is engaged: the Council's oversight power over agency reporting is itself in the record. Ask *"What does the NYC Administrative Code say about agency open data coordinators?"* and the agent returns **§ 23-507** — every agency must designate a coordinator responsible for compliance. There is a named, accountable role behind every gap like this one.

---

## Act 5 — What it takes to put this in a classroom (3 min)

**Say plainly:**
- **No API key required.** Both the NYC and NYS Socrata portals are open. An optional app token raises rate limits; it is not needed for coursework.
- **The setup is a config file**, not an integration project. [`../../mcp-configs/socrata-nyc-nys.mcp.json`](../../mcp-configs/socrata-nyc-nys.mcp.json) is a drop-in.
- **The material is CC BY-SA.** This whole repo can be forked into a syllabus and adapted, as long as attribution and share-alike hold.

**Assignment shapes that fall out of this demo:**

| Assignment | What it actually assesses |
|---|---|
| Pick a dataset, document its contract | Reading schemas, data types, and column semantics without documentation |
| Reproduce a published city statistic from source data | Verification; the gap between a headline number and its underlying file |
| Find a mandated report that is not on the portal | Research honesty; distinguishing "not found" from "does not exist" |
| Write a parser that survives suppressed values | Defensive coding, and privacy as a design constraint rather than a lecture topic |
| Chain two sources to answer one question | Data integration, and joining on identifiers that were never designed to join |

**Closing:**
> "The durable skill here is not prompting. It is insisting that a claim resolve to a source, and knowing what your evidence does and does not cover. The AI is just what makes students care about it."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Why grounding matters: [`../grounding-ai-agents.md`](../grounding-ai-agents.md)
- Query syntax: [`../query-patterns.md`](../query-patterns.md)
- BetaNYC training programs: [`../training-resources.md`](../training-resources.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes (verified 2026-07-21)

Every note below came from an actual dry run against the live MCPs. Read these before presenting.

- **⚠️ Always say "limit to N results" on a catalog search.** An unbounded `socrata search` returned **581 KB** on the query "broadband internet access" — it inlines full polygon geometry into preview rows for any dataset with a `the_geom` column. With `limit: 5` the same style of query returns cleanly. This is the single most likely way to stall this demo.
- **⚠️ Council legislation search matches keywords, not concepts.** `"broadband digital equity"` returned **zero results**; `"broadband"` alone returned six real bills. Use one or two plain keywords. If a search comes back empty in the room, shorten it rather than rephrasing it.
- `search_legislation` and `search_bills` returned **identical** results in testing. Either is fine; do not present them as two different capabilities.
- **Act 1's Int 1122-2024 is verified**: Enacted 2025-11-08, Committee on Technology, 28 sponsors. The `intro.nyc` short URL pattern resolves reliably and is much better on a projector than a Legistar `LegislationDetail.aspx` link.
- **Act 3's dataset `gyjk-fbss`** ("2019 -2020 Local Law 174 CTE Report") is verified present, with columns `program_name`, `industry_cluster`, `enrolled_student_counts`, `is_nysed_approved`. Note the irregular space in the official title.
- **Act 4's claim is bounded deliberately.** Catalog searches on both "career technical education" and "Local Law 174 CTE" (2026-07-21) returned six CTE report datasets spanning 2015-16 through 2019-2020 and nothing newer. That supports "not on the portal." It does **not** support "the city stopped reporting" — do not let the demo drift into that stronger claim, which is exactly the failure mode Act 4 is teaching against.
- **The `"s"` suppression marker** is confirmed in `8vqd-3345`, in the `n_students_enrolled_in_schools`, `n_students_enrolled_in_cte`, and `students_enrolled_in_cte` columns.
- Charter/code search for "open data" reliably returns § 23-507, § 23-504, and Charter § 20-f (Office of Data Analytics). All three are good improvisation material for an academic audience.

---

## Backup prompts (if one falls flat)

- "What does the NYC Charter say about the Office of Data Analytics?" *(Charter § 20-f — clean, short, always returns)*
- "Show me NYC Council legislation with the keyword 'algorithm'." *(single keyword, on-topic for a CS audience)*
- "What were the top 311 complaint types in Manhattan over the last 30 days?" *(the reliable crowd-pleaser; see the note in [`../community-boards/manhattan-cb1.md`](../community-boards/manhattan-cb1.md) about which server actually serves this)*
- "Find NYC Open Data datasets with the keyword 'wifi'. Limit to 5." *(digital-equity angle, small payload)*
