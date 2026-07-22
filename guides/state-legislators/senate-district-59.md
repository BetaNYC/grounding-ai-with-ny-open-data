---
status: DRAFT
---

# Demo script — NYS Senate District 59 (Sen. Kristen Gonzalez)

> **DRAFT.** First pass 2026-07-21; every prompt re-run live 2026-07-22. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to **State Senator Kristen Gonzalez** and staff. Senator Gonzalez chairs the Senate Committee on **Internet and Technology**, which makes this the most subject-matter-aligned audience in this repo.
>
> **Every fact below was pulled live and is reproduced in the presenter notes.** All four acts and all four backup prompts reproduced exactly on the 2026-07-22 re-run. If a live call disagrees, trust the live call and say so.

Companion to the general [`../user-journeys.md`](../user-journeys.md) catalog. Unlike the [`../council-members/`](../council-members/) scripts, the spine here is **NYS Open Legislation**, not Legistar — plus the city datasets that happen to be cut by state district.

---

## Before you start (2 min)

- District is **59**. Member ID **1513**, session member ID **2376**, session year **2025**.
- Keep [legislation.nysenate.gov](https://legislation.nysenate.gov) open in a tab so you can resolve a bill number live.
- **Read the presenter notes before you walk in.** The NYS tools have required parameters that do not do what their names suggest, and the Socrata tools have failure modes that don't announce themselves.

### 30-second pre-flight

Confirm the NYS corpus exists **on the machine you are presenting from**:

```
ls ~/Code/nys-openlegislation-mcp/data/corpus.db
```

Missing, and the server silently drops to live-only or local-only mode, which changes the behavior of Acts 1, 2, and 4. Check the `source` field on the first response either way — it should read `local corpus (synced <recent timestamp>)`. If the timestamp is stale, run `/mcp-refresh-data` before you start, not mid-demo.

### Three things not to do on stage

1. **Do not run `search_members` live.** It returns two Gonzalezes with no full names and no chamber, and its `chamber` filter does not work. Act 1 has the table prepared — read it off this script.
2. **Do not disclaim a number because `is_sample` is `true`.** It is a false positive on essentially any aggregate over a large filter. If you asked for grouped counts and got labeled counts, the number is sound.
3. **Do not explain *why* District 59 is missing.** Not "redistricting broke the dataset," and not "the file predates the district" — District 59 existed in 2020. Say only what the file shows: the rows date to June 2020, they cover 26 New York City seats, and 59 as currently drawn is not among them. If pressed on why, offer to check the city's publication history. Full wording in Act 3.

### How to sequence it, if you only get half the time

Lead with **Act 3**, then use the **Act 1 disambiguation aside** as the callback. Same failure shape twice — one at the data layer, one at the identity layer, both caught by an agent refusing to guess. For the chair of Internet and Technology, the bug is a more persuasive demonstration than the feature.

**Opening line:**
> "You chair Internet and Technology, so you already know the hard part isn't finding data — it's trusting it. I'm going to ask an AI questions about your own committee's work, wired into the actual legislative record. Watch what it does when the data *isn't* there."

---

## Act 1 — Your own bill, from the record (3 min)

Start on home ground.

**Prompt:**
> "What is S1962 of the 2025 session, who sponsors it, and what committee is it in?"

**The verified answer:** **S1962-2025**, the *"New York artificial intelligence consumer protection act."* Prime sponsor **Kristen Gonzalez**. Status: **In Senate Committee — Internet and Technology**, as of 2026-01-07. Summary, verbatim from the record:

> "Enacts the 'New York artificial intelligence consumer protection act', in relation to preventing the use of artificial intelligence algorithms to discriminate against protected classes."

**What to say:** "That's your bill, your committee, current status — read out of Albany's own system rather than remembered. An ungrounded chatbot asked this can hand you a real-looking bill number that belongs to something else entirely."

### If a staffer asks how it knows *which* Gonzalez — take the question

This is a good beat, not an interruption. Searching the Senate roster for "Gonzalez" returns two people:

| Full name | Chamber | District |
|---|---|---|
| **Kristen Gonzalez** | Senate | SD 59 |
| **Jessica Gonzalez-Rojas** | **Assembly** | AD 34 |

**What to say:** "Two matches, and the second one is in the *other chamber*. The right move here isn't to rank them and pick one — it's to stop and ask which person you meant. That's a rule we wrote down after finding this exact collision while preparing for this meeting."

**Why it lands with this audience:** District 34 is also a real *Senate* district. An agent that quietly picked the top hit would hand you a correctly formatted, confidently stated, wrong legislator — and nothing in the answer would look wrong. Same failure shape as Act 3, caught at the identity layer instead of the data layer.

> ⚠️ **Presenter:** do **not** run `search_members` alone on stage to produce this table — as of v2.3.0 its rows carry no full name and no chamber, and the `chamber` filter does not work (see presenter notes). Show the table as prepared above, or resolve each `memberId` with `get_member`. Tracked in [nys-openlegislation-mcp#17](https://github.com/BetaNYC/nys-openlegislation-mcp/issues/17).

---

## Act 2 — The same idea, in two chambers and two governments (4 min)

**Prompt:**
> "Is there an Assembly companion to S1962, and is New York City doing anything on the same subject?"

**The verified answer, three records:**

| Bill | Who | Where |
|---|---|---|
| **S1962-2025** | Sen. Kristen Gonzalez | Senate Internet and Technology |
| **A768-2025** | Assemblymember Alex Bores (AD 73) | Assembly Consumer Affairs and Protection |
| **Int 1122-2024** | NYC Council, 28 sponsors | Committee on Technology — **passed 2025-11-08, now law**; plan for expanding home broadband access |

**What to say:** "Two chambers on the identical bill text, and a third system — the New York City Council — on the adjacent problem. The city bill is already law. Yours is in your committee. That's the kind of cross-government picture your staff assembles by hand, and it's the thing no single portal does."

> ⚠️ **Presenter, two things.** First, Int 1122 is a **broadband** bill, not an AI bill — it is *adjacent* to S1962, not the same subject. Say "adjacent," and if a policy staffer notes the difference, agree immediately; they are right. Second, it does not surface from the Act 2 prompt — it was found with a separate NYC Council search for `broadband`. Either run that second search openly ("now let me ask the city's system about the related problem") or present the row as prepared. Do not imply one question returned all three. If you would rather keep Act 2 tight, drop this row and let Int 1122 open Act 3, where broadband *is* the subject and it sets up the gap.

> **Worth knowing about, if AI literacy comes up:** **A6874-2025** (active version **A6874A** — use that print number if anyone looks it up), the *Artificial Intelligence Literacy Act* (Assemblymember Emerita Torres, AD 85), sits in Assembly Education and would establish an AI literacy program inside the digital equity competitive grant program. It is adjacent to your bill rather than a companion to it.
>
> ⚠️ **Do not pitch BetaNYC here.** An earlier draft added that this is "squarely the kind of program BetaNYC exists to deliver." Said in one member's office about another member's bill, it converts a credibility demonstration into a business-development ask. If she raises the funding question herself, answer it. Do not introduce it.

---

## Act 3 — The data gap in your own portfolio (5 min)

**This is the act to build the meeting around.** It is not a trick; it is a real finding, and it is directly actionable by this office.

**Prompt:**
> "Using NYC's 'Broadband Adoption and Infrastructure by State Senate District' dataset, what are the home broadband adoption numbers for State Senate District 59?"

**What actually comes back: nothing.** Zero rows.

**Then run the diagnostic:**
> "What senate districts are actually in that dataset, and when was it created?"

**The verified answer:** 26 rows, covering **Senate Districts 10 through 34, plus 36**. Every row created **2020-06-19** (the dataset itself was published December 2019 — if a staffer pulls up the portal page and sees that date, both are right; see presenter notes). There is no District 59.

**What to say — slowly:**
> "This is New York City's flagship broadband-equity dataset, from the Internet Master Plan. It is cut by state senate district — which is exactly the right unit for your office. And your district is not in it. The rows date to June 2020, and they cover the New York City seats as they stood then."

**Why it matters, and this is the part for the chair of Internet and Technology:**
> "So when someone asks how many households in your district lack home broadband, the city's own published answer doesn't cover you. Not because the data is secret. The file simply hasn't been re-cut since 2020. That's a fixable, specific ask you could make of the city, and you now have the dataset ID to put in the letter: `9bjg-n96a`."

> ⚠️ **Do not say "the file predates the district," and do not say redistricting broke the dataset.** The first is wrong and the second is unproven. New York's senate has had 63 seats since well before 2020, so District 59 existed when this file was published — the file is a set of *New York City* districts, and 59 was not one of them then. What you can state from the data alone: the rows are from June 2020, they cover 26 city seats, and 59 as currently drawn is not among them. If asked *why*, say you'd rather check the city's publication history than reason backwards from a row date. That answer is the demo.

**The honesty beat, which is the whole point of the demo:**
> "Notice what the agent did *not* do. It did not interpolate from a neighboring district, and it did not give me a plausible number. It returned nothing, and then it showed me exactly what the file does cover. An ungrounded model asked the same question can hand you a percentage instead. It will look completely reasonable, and there is nothing behind it."

> **Comparison figure, if useful:** across the 26 districts the file *does* cover, home broadband adoption averages **0.70**, ranging from **0.58** to **0.85**. Useful for scale — but say plainly that it excludes her district rather than implying it stands in for it.

---

## Act 4 — Your committee, sourced (3 min)

**Prompt:**
> "Who sits on the NYS Senate Committee on Internet and Technology this session, and when does it meet?"

**The verified answer:** 7 members, chaired by **Sen. Gonzalez**. Members: Gounardes (SD 26), Hinchey (SD 41), Parker (SD 21), Zellner (SD 61), Stec (SD 45), Walczyk (SD 49). Meets **Mondays at 10:30**, Room 123 CAP.

**What to say:** "Roster, roles, meeting day, room — from the Senate's own system. Useful less as a fact you didn't know and more as proof that the boring operational layer is queryable too, which is where most staff time actually goes."

---

## Closing (1 min)

> "BetaNYC built these connectors and guides in the open, under a share-alike license. Any office can point its own AI at the real city and state record instead of trusting it to remember. The gap we found in Act 3 is the honest version of what this does: it won't invent an answer to make you feel served, and that's precisely why the answers it *does* give are worth something."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Full prompt catalog: [`../user-journeys.md`](../user-journeys.md)
- The broadband dataset with the gap: [`9bjg-n96a`](https://data.cityofnewyork.us/dataset/9bjg-n96a)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes (verified 2026-07-21)

### NYS Open Legislation — `chamber` is required but not enforced ⚠️

**Corrected 2026-07-22.** An earlier version of these notes described these parameters as "failing loudly, and this is good." That is only half true, and the wrong half is the dangerous one: they fail loudly when **omitted** and do nothing when **supplied**.

- `get_member`, `get_committee`, `search_members` **all require `chamber`** (`"senate"` or `"assembly"`, **lowercase** — `"SENATE"` fails enum validation). That much is real.
- **But `chamber` does not filter.** `search_members(term="Gonzalez", chamber="senate")` and `chamber="assembly"` return byte-identical results. `get_member(member_id=1468, chamber="senate")` returns Jessica Gonzalez-Rojas with `"chamber": "ASSEMBLY"` and no error.
- **`search_members` rows carry neither `fullName` nor `chamber`** — only `shortName`, `districtCode`, `memberId`. You cannot tell who you found from the search result alone. Resolve each `memberId` with `get_member` to get a real name.
- **Two causes, worth keeping straight** so nobody re-files it wrong: on `search_members` the server *does* forward `chamber` and the NYS API upstream ignores it. On `get_member` the local corpus lookup is correctly chamber-scoped, and an unscoped API fallback silently overrides it. Only the second is BetaNYC's bug. Both tracked in [nys-openlegislation-mcp#17](https://github.com/BetaNYC/nys-openlegislation-mcp/issues/17).
- **No API key? Name search is dead.** `search_members` is a pure live call, so in the local-only mode added in 2.3.0 it throws rather than degrading. `get_member` still works from the corpus.
- `get_committee` takes **`committee_name`**, not `name`.
- **⚠️ One field-syntax query returned zero — use plain terms on stage.** `sponsor:GONZALEZ AND (data OR privacy)` returned **zero results**. Plain terms work: `"artificial intelligence"` returned the relevant bills including S1962. If a search is empty on stage, simplify it.

  **Do not state that Lucene syntax is unsupported** — narrowed 2026-07-21. The server's own tool description advertises ElasticSearch syntax including boolean operators, phrase quotes, wildcards, and field targeting (`title:"climate" AND sponsor:Krueger`). The agent reads that description and will try field syntax. One zero-result query does not disprove support; `sponsor:GONZALEZ` may simply not match that field's stored value format. What we know is that *that specific query* returned nothing, and that plain terms are the reliable path in a live room.

### Data freshness

The `nys-openlegislation-mcp` responses carry `"source": "local corpus (synced 2026-07-21T10:30:07)"`. **This is a hybrid server reading a local corpus, not a live API call.** It was synced the morning this script was written. Before a demo, run `/mcp-refresh-data` — and if a staffer asks whether it's live, the honest answer is "it's a synced local copy, last refreshed [date]," not "it's live."

**New in 2.3.0 (2026-07-21) — matters if you present on a machine without the API key.** The server used to **exit at startup** with no API key, so the tools simply vanished. It now runs in local-only mode and serves the corpus, adding a `freshness` field to every locally-served payload:

> No `NYS_LEGISLATION_API_KEY` is set, so this is snapshot data and may be out of date. For current results, set `NYS_LEGISLATION_API_KEY` (free: https://legislation.nysenate.gov/register) and re-run the sync (`npm run sync`).

Three modes, and the startup banner on stderr tells you which you are in: **hybrid** (key + corpus), **live-only** (key, no corpus), **local-only** (no key). On Noel's machine this is hybrid, so you will *not* see the `freshness` note — its absence is not a sign the data is fresh. Check the `source` date either way.

### Socrata — the failure modes that don't announce themselves

- **⚠️ Always bound a catalog search with `limit`.** Even `limit: 5` against `data.ny.gov` returned **82,816 characters** — worse than the NYC portal, which returned 581 KB unbounded. These searches inline geometry and full column lists.
- **⚠️ Catalog search is federated and does not honor `domain` as a restriction.** Searching with `domain: "data.ny.gov"` returned results from `data.cityofnewyork.us`. Socrata's catalog API searches globally by default. **Do not say "now I'm searching the state portal"** — you may not be. Check the returned dataset IDs.
- **Use discrete `select` / `where` / `group` / `order` / `limit` parameters.** There is no `soql` parameter; passing one is silently ignored and you get an unfiltered row sample.
- **⚠️ `is_sample: true` does NOT mean the number is wrong — corrected 2026-07-22.** An earlier version of this note said `true` meant you got raw rows instead of your aggregate and "any number you read off them is meaningless." That is not what it tracks, and following it on stage would make you publicly disclaim a correct figure.

  Tested against the Manhattan 311 backup: the aggregate returns `is_sample: true` with **identical** top-5 counts at `limit: 5` and `limit: 300`, all 151 complaint types returned, and still reports `has_more: true, next_offset: 151` pointing at nothing. The flag appears to compare `total_rows` (59,106 — the *ungrouped* count of rows matching the filter) against rows returned, so it is `true` on essentially any aggregate over a large filter.

  **What to actually do:** confirm the shape of what came back. If you asked for `count(*)` grouped by something and you got labeled counts, you got your aggregate. Re-run once at a higher `limit` and check the top rows are unchanged. Ignore `has_more` on grouped queries. Reserve real suspicion for the case where you asked for an aggregate and got back raw detail rows — that is the failure the flag was meant to describe.

- **`>` and `<` in a `where` clause can arrive HTML-escaped** and SoQL rejects them (`soql.parser.unexpected-character: "&"`). This one fails loudly, so it costs you a retry rather than a wrong answer. `between 'A' and 'B'` sidesteps it entirely and is the safer stage formulation for date windows.

### Figures and their provenance

All figures below re-verified 2026-07-22 against a corpus synced `2026-07-22T10:30:05`.

| Claim | How verified |
|---|---|
| Gonzalez = SD 59, memberId 1513 | `search_members(term="Gonzalez")` to get candidate IDs, then **`get_member(1513)` for the authoritative name, chamber, and district**. Do not read chamber off the search result — it isn't there, and the search filter doesn't work. |
| Gonzalez-Rojas = Assembly, AD 34, memberId 1468 | `get_member(1468)` — returns `"chamber": "ASSEMBLY"`. This is the collision the Act 1 aside is built on. |
| Chairs Internet and Technology; 7 members; Mondays 10:30, Rm 123 CAP | `get_committee(committee_name="Internet and Technology", chamber="senate", session_year=2025)` — her entry carries `title: "CHAIR_PERSON"` |
| S1962-2025, her bill, in Internet and Technology | `search_bills(term="artificial intelligence", session_year=2025)` |
| A768-2025 companion, Bores AD 73 | same call |
| Int 1122-2024 enacted 2025-11-08 | `nyc-council-mcp search_legislation("broadband")` |
| Dataset covers SD 10–34 + 36, 26 rows, no SD 59 | Socrata `9bjg-n96a`, `is_sample: false`, `total_rows: 0` for SD 59 |
| Every **row** created 2020-06-19 | Socrata `:created_at`, min = max. **Note the distinction:** the dataset *asset* was created and published **2019-12-26**; 2020-06-19 is when the rows were written (`rowsUpdatedAt`). A staffer who opens the portal page sees Dec 2019 — say "the rows date to June 2020, the dataset was published in December 2019," and neither number contradicts you. |
| Avg home broadband 0.70 (0.58–0.85) | Socrata `9bjg-n96a` aggregate over the 26 covered districts |

**Not independently verified this session:**
- **The neighborhoods composing SD 59.** Don't recite a list to the people who represent it.
- **Why District 59 is absent.** The June 2020 row dates and the coverage stopping at SD 36 are facts. Any explanation of the *cause* is inference this data does not carry. **Revised 2026-07-22:** an earlier version of this note offered "the file predates the current district lines" as the safe phrasing. Drop it. It is one collapsed word away from "the file predates the district," which is flatly wrong — District 59 existed in 2020 and was not a New York City seat. Assert nothing about cause; state coverage and dates, and offer to check the city's publication history. See the warning in Act 3 for the wording to use.

---

## Backup prompts (if one falls flat)

- "What NYS bills this session mention 'open data'?" *(plain keyword, reliable — but know what it returns: the matches are the **Open Water Data Act** family, S1211A / A5254A / S9280 / A10199, sponsored by Sen. May and AM Kelles. It matches on the substring, not on open-data policy. Still a usable beat, since A5254A passed both houses and was **vetoed 2025-12-05** — a complete legislative arc in one query. Don't introduce it as "your open data bills.")*
- "What does the NYC Administrative Code say about agency open data coordinators?" *(returns § 23-507 — short, and lands with an oversight-minded audience)*
- "Show me NYC Council legislation with the keyword 'algorithm'." *(single keyword; pairs naturally with her AI bill)*
- "What were the top 311 complaint types in Manhattan over the last 30 days?" *(reliable fallback; note it's served by Socrata `erm2-nwe9`, not the 311 MCP)*
