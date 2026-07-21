---
status: DRAFT
---

# Educator demo scripts

Run-it-live demo scripts for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to **faculty, curriculum designers, and instructional staff**.

These differ from the other demo folders in this repo by the question they answer. [`../council-members/`](../council-members/) and [`../community-boards/`](../community-boards/) answer *"what is happening in my district?"* — the audience wants their own data back. An educator audience is asking something else: **"what does this teach, and can I assign it?"**

So the arc is built around transferable concepts rather than local findings:

- provenance and resolvable identifiers,
- API contracts and schema reading,
- verification, including the discipline of stating a bounded negative,
- privacy constraints as they actually appear in public data (suppressed cells, not hypotheticals).

## Available demos

| Audience | File |
|---|---|
| CUNY computer science curriculum | [`cuny-cs-curriculum.md`](cuny-cs-curriculum.md) |

## Adapting these

The CUNY script leans on education-sector datasets (CTE reports, graduation outcomes) because that is what a computer science curriculum audience recognizes. For a different discipline, swap the dataset in Act 3 and keep the structure:

1. **Act 1** — demonstrate the failure mode rather than asserting it.
2. **Act 2** — catalog search as an API contract.
3. **Act 3** — one dataset the audience already cares about, in depth.
4. **Act 4** — a gap, a limitation, or a data-quality problem. This act is where the honesty discipline gets taught, and it is the one worth keeping in every version.
5. **Act 5** — setup cost and assignment shapes.

For a journalism school, Act 3 might be 311 or procurement. For public policy, discretionary funding. For a statistics course, the suppression discussion in Act 3 can carry the whole session on its own.

## A standing rule for this folder

**Dry-run every prompt against the live MCPs before a demo, and record what happened in a "Presenter notes (verified YYYY-MM-DD)" block.** Prompts that read well can fail live — a search that silently returns `[]`, a response large enough to stall the room. The presenter notes in `cuny-cs-curriculum.md` document several real ones found this way. A script without verified notes is a draft, not a demo.

## See also

- [`../user-journeys.md`](../user-journeys.md) — the full, audience-neutral prompt catalog.
- [`../grounding-ai-agents.md`](../grounding-ai-agents.md) — the rationale these demos dramatize.
- [`../training-resources.md`](../training-resources.md) — BetaNYC's own classes and programs.
