---
status: DRAFT
---

# State legislator demo scripts

Run-it-live demo scripts for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to a **New York State Senator or Assemblymember** (or their staff).

The parallel to [`../council-members/`](../council-members/), with one structural difference: the spine is **NYS Open Legislation** rather than Legistar, and there is **no state equivalent of Schedule C discretionary awards** in our tooling. So the four-act arc is different, not just re-pointed.

## Available demos

| District | Member | File |
|---|---|---|
| Senate 59 | Kristen Gonzalez | [`senate-district-59.md`](senate-district-59.md) |
| _(template)_ | — | [`TEMPLATE.md`](TEMPLATE.md) |

_Add rows as district demos are drafted._

## Naming convention

Chamber first, then zero-padded district number:

- `senate-district-59.md`, `senate-district-01.md`
- `assembly-district-73.md`

Districts are the stable unit; members change.

## How the state arc differs from the Council arc

| | Council script | State script |
|---|---|---|
| Legislative spine | Legistar via `nyc-council-mcp` | NYS Open Legislation via `nys-openlegislation-mcp` |
| Money act | Schedule C → Checkbook, a genuinely strong chain | **No equivalent.** Don't fake one |
| District data | 311 by `council_district` is rich and current | Thinner — city datasets cut by state district are rarer and often older |
| Best closing act | Follow the money | **Find the gap** |

**The money act does not port.** There is no state analogue to `nyc-budget-mcp` in this toolset. Attempting a state "follow the money" act will produce a weak imitation of the Council one. Replace it rather than approximate it.

**What replaces it is usually stronger:** city datasets cut by state district exist but are frequently stale, and demonstrating a real, specific gap in a legislator's own subject area is more valuable to them than another clean lookup. The Senate District 59 script is built this way — its central act is a dataset that does not contain the member's district.

## How to add a district (customization checklist)

1. **Copy** [`TEMPLATE.md`](TEMPLATE.md) to `[chamber]-district-[NN].md`.
2. Resolve the member: `search_members(term, chamber)` then `get_member(member_id, session_year, chamber)`. Record the member ID.
3. **Check committee roles before writing anything about them.** `get_committee` returns a `title` field per member — `CHAIR_PERSON` vs `MEMBER`. Verify; do not infer a chairmanship from a member's public profile.
4. Find one bill they actually sponsor and build Acts 1 and 2 on it. Look for an Assembly/Senate companion, and for a NYC Council bill on the same subject — the three-way pairing is the strongest routine moment available.
5. **Look for a data gap in their portfolio.** Datasets cut by state district are the place to look. A verified absence, honestly explained, beats a generic lookup.
6. **Dry-run every prompt live** and fill in the "Presenter notes (verified YYYY-MM-DD)" section, including a provenance table for every figure and an explicit list of what you did *not* verify.
7. Add a row to the table above.

## A standing rule for this folder

**Report a negative at the width you actually tested.** These scripts trade on the claim that a grounded agent won't invent an answer. That credibility is spent instantly if the script itself overstates a finding.

If a dataset lacks a district, say the dataset lacks the district — not that the city stopped collecting the data, and not that redistricting caused it, unless you checked. State the observation, then state the inference separately and label it as one.

## See also

- [`../council-members/`](../council-members/) — the parallel demos for NYC Council districts.
- [`../educators/`](../educators/) — demos framed around what the material teaches.
- [`../user-journeys.md`](../user-journeys.md) — the full, audience-neutral prompt catalog.
