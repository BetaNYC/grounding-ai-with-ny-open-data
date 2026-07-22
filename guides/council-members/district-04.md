---
status: DRAFT
---

# Demo script — Council District 4 (Virginia Maloney)

> **DRAFT.** First pass, 2026-07-21. A run-it-live script for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to Council Member **Virginia Maloney** and staff. District 4 covers the East Side of Manhattan — Midtown East, the Upper East Side south, Murray Hill, and Stuyvesant Town/Peter Cooper Village.
>
> **Every figure below was pulled live on 2026-07-21** with provenance in the presenter notes.

> ⚠️ **This script is deliberately structured differently from [`district-10.md`](district-10.md), because Council Member Maloney took office in January 2026.** A newly seated member has no legislative record to show, and the standard Act 2 ("what have you introduced?") will come back empty. That is not a failure to work around — handled honestly, it is the most persuasive two minutes in the demo. See Act 2.

---

## Before you start (2 min)

- District is **4**. Sponsoring-member surname in budget data is **Maloney**.
- ⚠️ **In 311 queries the district is the string `'04'`, zero-padded.** Querying `'4'` returns **zero rows, with no error**. This will make you look broken in the member's own office. See presenter notes.
- Her first discretionary budget is **FY2027**, not FY2026. FY2026 was adopted before she was seated.
- Keep [Legistar](https://legistar.council.nyc.gov) or [NYC Open Data](https://data.cityofnewyork.us) open to show a number resolves.

**Opening line:**
> "You're seven months in, so I'm not going to pretend there's a long record to search. What I'll show you instead is what the public record *does* say about your district right now — and what it honestly says it doesn't know."

---

## Act 1 — Your district, right now (3 min)

**Prompt:**
> "What were the top 311 complaint types in Council District 4 over the last 30 days?"

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

**What to say:** "Live 311, your district, last thirty days."

**Where to linger — this is the real content of Act 1.** Encampment and Homeless Person Assistance sitting at #2 and #3 is a distinctive signature. Compare it to District 10 uptown, where the top five are noise, water, and parking with no homelessness category at all. Same city, same 30 days, completely different constituent pressure.

> Don't editorialize past the data. What the numbers show is *what residents called 311 about*, which is a measure of complaint behavior as much as of underlying conditions. Say that out loud if the room starts drawing policy conclusions — it is the kind of caveat that earns trust rather than spending it.

---

## Act 2 — The honest empty result (3 min)

**The act that matters most in this particular meeting.**

**Prompt:**
> "What legislation has Council Member Virginia Maloney introduced, and how has she voted?"

**What comes back: essentially nothing.** She was seated in January 2026.

**What to say:**
> "That's the correct answer, and I want to sit on it for a second. You know you don't have a two-year sponsorship record. But an ungrounded chatbot asked this question will *give you one*. It will produce Intro numbers, committee names, and vote tallies that read perfectly and are entirely fabricated — often by blending in your predecessor's record, or a different Maloney's."

**Then the second half, which is the actual sales point:**
> "The failure mode isn't that AI is wrong. It's that it's wrong *fluently*, and the more senior the person reading the output, the less likely anyone is to check. What you're watching here is a system that would rather return nothing than fill a gap. Everything else it tells you is worth more because of that."

> **✅ Changed 2026-07-21 — this act got stronger, but what appears on screen is different.** `get_voting_record` no longer returns an empty list. As of `nyc-council-mcp` **2.5.0** it raises a named error explaining that the `votes` table is not indexed, that the source archive holds roll-call *attendance* rather than aye/nay positions, and listing three tools that do work ([#19](https://github.com/BetaNYC/nyc-council-mcp/issues/19), [PR #24](https://github.com/BetaNYC/nyc-council-mcp/pull/24)). Verified live against the published package.
>
> **What this means for Act 2.** The old script leaned on an empty result and warned you not to overclaim it. That risk is gone — the tool now says why it cannot answer. **Read the refusal aloud.** It is a cleaner version of the point you were already making: the system declines rather than fills the gap, and it tells you where to go instead.
>
> **Still do not overclaim.** The refusal is about the *corpus*, not about Council Member Maloney. It appears identically for a four-term incumbent. Keep Act 2 framed on the *newness of the member* — verifiable from her Legistar record and her FY2027-only budget — and use the refusal as evidence about the tool's honesty, never as evidence about her record.

---

## Act 3 — Your first budget (5 min)

Her legislative record is thin. **Her budget is not**, and it is entirely hers.

**Prompt:**
> "Show the FY2027 NYC Council discretionary (Schedule C) awards sponsored by council member Maloney."

**Re-verified live 2026-07-21: 77 awards totaling $1,538,000.**

> ⚠️ **Corrected.** This script previously read "at least 40 awards totaling $1,148,000," from a query capped at `limit: 40` that returned exactly 40 rows. It understated her budget by **$390,000 and 37 awards**. The `limit` truncates the total as well as the list, so a capped query reports a capped sum with no indication it is partial. **Always pass `limit: 200` or higher for a member-year query, and check that the returned count is below the limit.**

Representative:

| Amount | Recipient | Initiative |
|---|---|---|
| $200,000 | Association of Community Employment Programs for the Homeless | NYC Cleanup |
| $70,000 | Department of Sanitation | NYC Cleanup, CD 4 |
| $50,000 | STPCV Tenants Association Foundation | Speaker's Initiative |
| $40,000 | Justice Innovation, Inc. | Community Safety and Victim Services |
| $35,000 | City Parks Foundation | Parks Equity |
| $30,000 | Carnegie Hill Neighbors | Neighborhood Development Grant |
| $25,000 | CEC Stuyvesant Cove | A Greener NYC — Clean Energy Workforce |

**What to say:** "This is the thing that *is* yours after seven months, and it's a million dollars of it. Forty-plus organizations, by name, by initiative, by agency."

> **The digital-equity thread — this is BetaNYC's opening.** Four FY2027 awards sit under the **Digital Inclusion and Literacy Initiative**, $80,000 in total:
>
> | Amount | Recipient | Program |
> |---|---|---|
> | $20,000 | **Fund for the City of New York** | **AI Training Program** — *this is BetaNYC* |
> | $20,000 | Older Adults Technology Services (OATS) | Older Adults Digital Literacy |
> | $20,000 | Simon Wiesenthal Center | Digital Equity Program |
> | $20,000 | WNET | Arts Broadcasting |
>
> A newly seated member put real money into AI training and digital literacy in her first budget. That is the conversation.
>
> **Do not characterize how that decision was made.** An earlier draft said it was "her own choice rather than something being pitched to her." Nothing in the data supports a claim about her office's internal process, and BetaNYC is the grantee of the line in question. Say what the record shows and stop there.
>
> **The $20,000 Fund for the City of New York line is BetaNYC's own AI Training Program** — FCNY is our fiscal sponsor (EIN 13-2612524), so our awards appear under its name. Confirmed 2026-07-21.
>
> Handle this with some care. The strongest version is *not* leading with "you already fund us." It is running the demo straight, letting the agent surface the award from the public record alongside the other three, and only then noting that one of those lines is us. The tool finding your own funding in the same query that found everyone else's is far more persuasive than saying so up front — and it keeps the meeting about her office's data rather than about an ask.

**A genuine data subtlety worth showing, if the room is engaged:** Fund for the City of New York is a **fiscal sponsor** — a passthrough carrying dozens of distinct programs under one EIN (13-2612524). So "Fund for the City of New York" in the recipient column is not the actual grantee; the `[AI Training Program]` bracket is. Filtering by organization alone would silently merge unrelated grantees. Say this out loud: it is exactly the kind of thing that makes a naive spreadsheet analysis wrong, and the tool documents the trap in its own description.

---

## Act 4 — What's in front of the Council this week (3 min)

**Prompt:**
> "What Council hearings are coming up, and what land use applications are on their agendas?"

**Verified 2026-07-21:** returns real scheduled events with full agendas — e.g. the Subcommittee on Zoning and Franchises, 2026-07-21 at 11:00 AM, 250 Broadway Hearing Room 3, carrying LU 0115-2026 through LU 0119-2026 with the full application text and affected council districts.

**What to say:** "Agendas, matter numbers, hearing rooms, and which districts each application touches — before the meeting, not after the minutes post. For a new member's office still building its calendar muscle, this is the least glamorous and most immediately useful thing in the demo."

---

## Closing (1 min)

> "BetaNYC built these connectors and guides in the open. Any office can point its own AI at the real city and state record instead of trusting it to remember. And as your record grows, the same questions that came back empty today start coming back full — with citations."

**Leave-behind links:**
- This repo: [`grounding-ai-with-ny-open-data`](https://github.com/BetaNYC/grounding-ai-with-ny-open-data)
- Full prompt catalog: [`../user-journeys.md`](../user-journeys.md)
- BetaNYC: [beta.nyc](https://beta.nyc)

---

## Presenter notes (figures verified 2026-07-21 · MCP behavior re-verified 2026-07-21)

### ⚠️ Two traps that will silently break this specific demo

**1. Council districts are zero-padded strings in 311 data.** `council_district='4'` returns **zero rows**. `council_district='04'` returns 4,767. No error either way. This affects **districts 1–9 only**, which is why the District 10 script never hit it. Verified by querying `IN ('4','04','10')` — only `'04'` and `'10'` come back.

**2. `council_member` matches as a substring, and the result depends on the fiscal year.** Clarified 2026-07-21 — neither this note's earlier wording nor its first correction stated the fiscal year, and **the fiscal year is the whole answer.**

| Query | Returns |
|---|---|
| `council_member="Powers", fiscal_year=2027` | **80 awards, $1,797,000 — Brooks-Powers (D31) only.** Keith Powers is correctly absent: District 4's FY2027 member is Maloney |
| `council_member="Powers", fiscal_year=2026` | **156 awards, $3,405,000 — BOTH members summed.** Keith Powers held District 4 through FY2026, his last adopted budget |

**For this script, which runs on FY2027, the collision does not bite.** Searching "Powers" returns only Brooks-Powers, and District 4 is Maloney's. Keith Powers is archival here.

**It bites any historical query.** In FY2020–FY2026 a "Powers" search silently sums two members across two districts into one total, with the sponsor column the only tell. That is worse than returning the wrong member, because the number looks reasonable.

**Check the sponsor column before reading any figure aloud, and state the fiscal year when you do.** Unfixed — [New-York-City-Budget#38](https://github.com/BetaNYC/New-York-City-Budget/issues/38) is open. The strict-parameter fix does **not** catch it: `council_member` is a valid parameter receiving a valid value, so there is nothing for a schema to reject.

### Other verified behavior

- **✅ `get_voting_record` now raises a named error instead of `[]`** (`nyc-council-mcp` 2.5.0, verified 2026-07-21). The `votes` table still has 0 rows against 228,385 event_items and 136,066 sponsors — that has not changed — but the tool now says so and names three working alternatives rather than returning an empty list ([#19](https://github.com/BetaNYC/nyc-council-mcp/issues/19)). See Act 2 for how to use it. `vote_breakdown` behaves identically; **`get_votes` does not** — it reads the live Legistar API, not the local table.
- **`get_council_member(name="Powers")`** returns only Brooks-Powers. The member lookup has the same substring behavior as the budget tool.
- **`search_legislation` can return `[]` even for a reasonable single keyword** — `"encampment"` finds nothing, because the term doesn't appear in bill titles. It matches titles, not subject matter. Try a synonym before concluding no legislation exists.
- **`get_upcoming_hearings` is extremely verbose** — full agenda item text, including land-use applications that run to hundreds of block-and-lot references. Ask for a summary rather than raw output, or cap the limit low.
- **FY2026 has no Maloney awards.** Her first Schedule C is FY2027. Querying FY2026 by her surname returns nothing, correctly — the FY2026 budget was adopted before she took office. Don't let this read as a tool failure.

### Figures and their provenance

| Claim | How verified |
|---|---|
| Maloney = District 4, PersonId 7894 | `get_council_member(name="Maloney")`; record last modified 2025-11-06 |
| 4,767 complaints; top types | Socrata `erm2-nwe9`, `council_district='04'`, `is_sample: false` |
| **77 awards, $1,538,000, FY2027** | `search_awards(council_member="Maloney", fiscal_year=2027, limit=200)` — re-verified live 2026-07-21; returned 77 against a limit of 200, so complete |
| $20,000 FCNY "AI Training Program" | `search_awards(organization="Fund for the City of New York", program="AI Training")` — exactly one match |
| Upcoming hearings and agendas | `get_upcoming_hearings` |

**Not independently verified this session:**
- **Her committee assignments.** Not checked. Do not name one.
- ~~**That the $1,148,000 is her complete FY2027 total.**~~ **Resolved 2026-07-21 — it was not.** Re-run at `limit: 200`: **77 awards, $1,538,000**. The original caveat was correct and the figure shipped anyway. Treat "returned exactly N against a limit of N" as a truncation until proven otherwise.
- **District 4's exact boundaries.** The neighborhood list above is inferred from award recipients (Carnegie Hill Neighbors, Friends of the Upper East Side Historic Districts, Murray Hill Committee, STPCV Tenants Association) rather than from a districting source. It is well supported but not authoritative — don't recite it to the people who represent it.
- ~~Whether the FCNY "AI Training Program" award is BetaNYC's own program.~~ **Resolved 2026-07-21: it is BetaNYC**, via our fiscal sponsor Fund for the City of New York. See the note in Act 3 on how to raise it.

---

## Backup prompts (if one falls flat)

- "Is alternate-side parking suspended this week? What's on the city-service calendar?" *(311 MCP — always returns something)*
- "Show me FY2027 Schedule C awards under the Digital Inclusion and Literacy Initiative." *(on-theme, and broader than one district)*
- "What does the NYC Charter say about the Council's oversight powers?" *(reliable, resonates with a new member's office)*
- "What NYC Council legislation exists on broadband access?" *(returns Int 1122-2024, enacted 2025-11-08 — a real recent law)*
