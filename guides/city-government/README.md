---
status: DRAFT
---

# City government material

Material for **people who work inside city government** — agency program staff, data and analytics teams, budget and procurement, communications, and agency counsel. One genre lives here for now: a **run-it-live demo script** with a slide companion.

## Demo scripts

| Audience | Script | Deck |
|---|---|---|
| General city-government room (reusable for a single agency, an interagency working group, or a civic-tech-curious team) | [`city-government.md`](city-government.md) | [`city-government-deck.html`](city-government-deck.html) |

## How this audience differs

Every other folder in this repo demos to someone outside government looking in. **This audience works inside the thing being queried**, which inverts two assumptions the other scripts make.

| | Constituency and watchdog scripts | City-government script |
|---|---|---|
| What they lack | Assembled data about themselves | The **cross-agency** view, and the **computed** answer |
| Their own data | Worse than the public record | **Better than the public record**, for their own operations |
| Best frame | Accountability, or "here is your district" | **Procurement and program intelligence they cannot currently assemble** |
| Coverage gaps | Content, or a caveat to manage | A caveat, and a reason to trust the rest |
| Riskiest move | Overclaiming a finding | **Implying a public dataset beats their system of record** |

**Do not pitch published data as a substitute for a system of record.** An agency program manager does not need NYC Open Data to tell them about their own caseload, and suggesting otherwise loses the room in the first two minutes. The deck concedes this on slide 2 and the concession is load-bearing.

**"Accountability" is not the frame.** The same Checkbook query a watchdog room hears as oversight, this room hears as procurement intelligence it is missing. Both readings are true; the second earns a second meeting.

## The two things this material is actually for

1. **The cross-agency view.** Any agency can see its own spending. No agency can see the other twenty-one paying the same vendor. That view exists in the Comptroller's published data and nowhere in an agency's own system.

2. **The computed answer.** A search engine can only return a document somebody already wrote, and **an aggregate over live rows is not a document.** This is the thesis of the script's longest chapter and it is worth stating in those words rather than claiming the assistant is smarter than a search box.

## The rule that matters most in this folder

**A complete, correct query can still be the wrong query.**

The Checkbook chapter is built entirely on this. Searching Checkbook for payments to `MICROSOFT` in FY2026 returns 49 checks and $14,482,518.24 — a complete, untruncated, verifiable result. It is also missing the City's $53,006,444.85 Microsoft enterprise license agreement, because that is paid to a reseller and the payee name on the check is Dell Marketing LP.

Nothing in the result signals the gap. **The tool did not save us from the mistake; reading the result did.** That is the transferable lesson, and it generalizes well past this one vendor.

It also comes with a discipline. **Do not sum the two figures.** We have not established they are disjoint or exhaustive, and the claim is about the search, not about a citywide total. Overstating it in front of a room of procurement staff would be exactly the failure the script spends ten minutes warning against.

## Chapter 4 is unusual and should stay

The last four slides are about **how BetaNYC runs on these tools itself** — the newsletter pipeline, an accessibility audit of our own site, and membership-gated community infrastructure. No other script in this repo turns the lens inward like this.

It is here because a demo you do not use yourself is a brochure, and because non-technical staff in the room usually engage with this chapter more than with the query demos. **If the room is mostly communications and operations, consider moving it earlier.**

## See also

- [`../good-government/`](../good-government/README.md) — the same connectors for an oversight audience, where coverage gaps become the content
- [`../council-members/`](../council-members/README.md) and [`../state-legislators/`](../state-legislators/README.md) — the constituency-facing scripts
- [`../when-to-use-which-portal.md`](../when-to-use-which-portal.md) — which portal or connector actually has a given answer
