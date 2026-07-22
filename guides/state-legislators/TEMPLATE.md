---
status: DRAFT
---

# Demo script — NYS [Senate/Assembly] District [NN] ([MEMBER NAME])

> **TEMPLATE.** Copy this file to `[chamber]-district-[NN].md` and fill every `[BRACKETED]` placeholder. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to **[MEMBER NAME]** and staff.

Companion to the general [`../user-journeys.md`](../user-journeys.md) catalog. The spine here is **NYS Open Legislation**, not Legistar. See [`README.md`](README.md) for how this arc differs from the Council one — in particular, **there is no state equivalent of the Schedule C money act; do not approximate it.**

---

## Before you start (2 min)

- District is **[NN]**, chamber **[senate/assembly]**. Member ID **[ID]**, session year **[YYYY]**.
- Keep [legislation.nysenate.gov](https://legislation.nysenate.gov) open so you can resolve a bill number live.
- Read the presenter notes before you walk in.

**Opening line:**
> "[Tie the opening to their committee or subject area. The stronger the alignment, the less this feels like a generic tech demo.]"

---

## Act 1 — Their own bill, from the record (3 min)

**Prompt:**
> "What is [BILL NO] of the [YYYY] session, who sponsors it, and what committee is it in?"

**The verified answer:** [Fill from a live run — bill number, prime sponsor, committee, status, action date. Quote the official summary verbatim rather than paraphrasing.]

**What to say:** "That's your bill, your committee, current status — read out of Albany's own system rather than remembered. An ungrounded chatbot asked this produces a real-looking bill number that belongs to something else."

---

## Act 2 — The same idea, in two chambers and two governments (4 min)

**Prompt:**
> "Is there an [Assembly/Senate] companion to [BILL NO], and is New York City doing anything on the same subject?"

**The verified answer:** [Fill in. Aim for a three-row table: their bill, the other chamber's companion, and a NYC Council bill on the same subject.]

| Bill | Who | Where |
|---|---|---|
| [S/A NNNN] | [member] | [committee] |
| [companion] | [member] | [committee] |
| [Int NNNN-YYYY] | NYC Council | [status] |

**What to say:** "Three separate systems in one question. That cross-government picture is what your staff assembles by hand, and it's the thing no single portal does."

---

## Act 3 — Find the gap (5 min)

**This act replaces the Council scripts' "follow the money," and it is usually the strongest thing in a state demo.** City datasets cut by state district exist but are frequently stale, and a real gap in the member's own subject area is worth more to them than another clean lookup.

**Prompt:**
> "Using [DATASET NAME], what are the numbers for [Senate/Assembly] District [NN]?"

**Then the diagnostic, whether or not the first call returns anything:**
> "What districts are actually in that dataset, and when was it created?"

**The verified answer:** [Fill in: row count, coverage, creation date, and whether the member's district is present.]

**What to say:** [If there's a gap — name it plainly, give them the dataset ID so they can cite it in a letter, and frame it as a specific, fixable ask.]

**The honesty beat — keep this in every version of this script:**
> "Notice what the agent did *not* do. It didn't interpolate from a neighboring district and it didn't hand me a plausible number. An ungrounded model asked the same question produces a percentage that looks completely reasonable and is invented."

> ⚠️ **Report the negative at the width you actually tested.** "This dataset does not contain District [NN]" is a finding. "The city stopped collecting this" is a different and much larger claim that the same evidence does not support. Keep the observation and the inference in separate sentences, and label the inference.

**If there is no gap** and the data is present and current, that is fine — run it as a straight district-data act and move the honesty beat into Act 4.

---

## Act 4 — Their committee, sourced (3 min)

**Prompt:**
> "Who sits on the [COMMITTEE NAME] committee this session, and when does it meet?"

**The verified answer:** [Fill in: member count, chair, roster, meeting day/time/room.]

⚠️ **Verify the chair from the tool, not from a public profile.** `get_committee` returns a per-member `title` field (`CHAIR_PERSON` vs `MEMBER`). Getting a chairmanship wrong in the member's own office is an unrecoverable way to open a meeting.

**What to say:** "Roster, roles, meeting day, room — from the Senate's own system. Proof that the boring operational layer is queryable too, which is where most staff time actually goes."

---

## Closing (1 min)

> "BetaNYC built these connectors and guides in the open, under a share-alike license. Any office can point its own AI at the real city and state record instead of trusting it to remember."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Full prompt catalog: [`../user-journeys.md`](../user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes (verified [YYYY-MM-DD])

**Dry-run every prompt above and record what actually happened.** A script without verified notes is a draft, not a demo. Delete this line once filled in.

### Carried forward — NYS Open Legislation required params (these fail loudly, which is good)

- `get_member`, `get_committee`, `search_members` **all require `chamber`**, **lowercase** (`"senate"` / `"assembly"`; `"SENATE"` fails enum validation).
- `get_committee` takes **`committee_name`**, not `name`.
- **⚠️ `search_bills` does not accept Lucene syntax.** `sponsor:NAME AND (x OR y)` returns zero results. Plain terms work. If a search is empty on stage, simplify rather than rephrase.

### Carried forward — data freshness

`nys-openlegislation-mcp` responses carry a `"source"` field. It has been observed serving from a **local corpus**, not a live API — e.g. `"local corpus (synced 2026-07-21T10:30:07)"`. Run `/mcp-refresh-data` before a demo, and if asked whether it's live, say "a synced local copy, last refreshed [date]."

**As of 2.3.0 (2026-07-22)** the server no longer exits when `NYS_LEGISLATION_API_KEY` is absent — it serves the corpus in local-only mode and attaches a `freshness` note saying the data is a snapshot and how to get current results. Three modes, named in the stderr startup banner: **hybrid** (key + corpus), **live-only** (key, no corpus), **local-only** (no key). With a key you will not see the `freshness` note; its absence does not mean the data is fresh. Read the `source` date regardless.

### Carried forward — Socrata failure modes that don't announce themselves

- **⚠️ Always bound a catalog search with `limit`.** Unbounded searches have returned 581 KB; even `limit: 5` against `data.ny.gov` returned ~83 KB. They inline geometry and full column lists.
- **⚠️ Catalog search is federated and `domain` does not restrict it.** Searching `domain: "data.ny.gov"` has returned `data.cityofnewyork.us` datasets. **Don't narrate "now I'm searching the state portal"** — check the returned dataset IDs first.
- Use discrete `select` / `where` / `group` / `order` / `limit`. There is no `soql` parameter; passing one is silently ignored and yields an unfiltered row sample.
- **Always check `is_sample`.** If `true`, you got raw rows, not an aggregate, and any number read off them is meaningless.

### Figures and their provenance

| Claim | How verified |
|---|---|
| [figure] | [tool + parameters] |

**Not independently verified this session:**
- [List honestly. Neighborhood composition of the district is a common one — don't recite a list to the people who represent it.]
- [Any inference you drew but did not confirm.]

---

## Backup prompts (if one falls flat)

- "What NYS bills this session mention '[keyword]'?" *(plain keyword, on-theme)*
- "What does the NYC Administrative Code say about agency open data coordinators?" *(returns § 23-507 — short, lands with oversight-minded audiences)*
- "Show me NYC Council legislation with the keyword '[keyword]'." *(single keyword only)*
- "What were the top 311 complaint types in [borough] over the last 30 days?" *(reliable; served by Socrata `erm2-nwe9`, not the 311 MCP)*
