---
status: DRAFT
---

# Good-government / watchdog demo scripts

Run-it-live demo scripts for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to **watchdog organizations, transparency advocates, and investigative newsrooms**.

## Available demos

| Audience | File |
|---|---|
| Reinvent Albany (reusable for Citizens Union, CBC, NYPIRG, newsrooms) | [`reinvent-albany.md`](reinvent-albany.md) |

## How this audience differs

Every other folder in this repo demos to someone who wants to see **their own** data — their district, their bills, their students. This audience wants to see **what nobody has assembled yet**. That inverts most of the script design:

| | Constituency scripts | Watchdog scripts |
|---|---|---|
| Scope | One district | Citywide, cross-cutting |
| Best act | "Here's your funding" | "Here's what got taken back" |
| Winning move | A clean, fast lookup | An assembly that was previously a week of work |
| Coverage gaps | A caveat to manage | **Content.** Volunteer them |
| Their expertise | Less than yours | **More than yours** |

**Do not explain the domain to them.** They know what Schedule C is and have FOILed for worse. The pitch is never "here is discretionary funding" — it is "here is discretionary funding, queryable in seconds, by an agent that cites its source and refuses to guess."

**Lead with limitations.** Stating a coverage gap before you're asked buys more credibility with this room than any figure. If you don't know whether the data supports a claim, say so and offer to check — they will respect that far more than a confident number they later find is wrong, and they *will* check.

## The three questions this audience lives on

Build any script in this folder around these:

1. **Where did the money go?** Allocation → disbursement, across systems. The interesting output is the **mismatch**, not the match.
2. **What got taken back?** Rescissions and mid-year amendments are the least visible money in the system, and the tooling reaches them directly.
3. **What was supposed to be published and wasn't?** Any reporting mandate in the Administrative Code can be checked against the open data portal. This is a reproducible method, not a one-off finding — which is what makes it worth showing.

## The rule that matters most in this folder

**Report a negative at exactly the width you tested.**

"This dataset is not on the portal" and "the city stopped producing this report" are different claims with different remedies, and only the first is supported by a catalog search. An audience that does oversight for a living will notice the difference immediately, and overstating once costs more than the finding was worth.

Every script here should model that distinction out loud, in front of the room. It is not a disclaimer — it is the product demonstrating what it's for.

## See also

- [`../council-members/`](../council-members/) and [`../state-legislators/`](../state-legislators/) — the constituency-facing scripts.
- [`../educators/`](../educators/) — framed around what the material teaches.
- [`../user-journeys.md`](../user-journeys.md) — the full prompt catalog, including the "follow the discretionary dollar" and "full contract lifecycle" crosswalks this folder builds on.
