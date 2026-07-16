---
status: DRAFT
---

# Community board demo scripts

Run-it-live demo scripts for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to a **specific community board**. Each file is pre-filled for one board's district so it can be read straight off the page in a meeting — no on-the-fly substitution.

These are the board-specific companions to the general prompt catalog in [`../user-journeys.md`](../user-journeys.md).

## Available demos

| Board | File | District coverage |
|---|---|---|
| Manhattan CB1 | [`manhattan-cb1.md`](manhattan-cb1.md) | Financial District, Tribeca, Battery Park City, South Street Seaport, Civic Center |

## Naming convention

One file per board, named `[borough]-cb[N].md` (lowercase, no spaces):

- `manhattan-cb1.md`, `brooklyn-cb6.md`, `queens-cb2.md`, `bronx-cb4.md`, `staten-island-cb1.md`

Borough spelled out in full; `staten-island` hyphenated. This sorts predictably and reads clearly in a file list.

## How to add a board (customization checklist)

Don't edit an existing board's file — **copy the closest one** and adjust. To spin up a new board demo:

1. **Copy** `manhattan-cb1.md` to `[borough]-cb[N].md`.
2. **Title + intro** — replace the board name and the neighborhood list (the district's actual coverage).
3. **District references** — swap every `Manhattan Community District 1` and `Council District 1` for the new board's community district and the Council district(s) that overlap it. (A community district can overlap more than one Council district — name all of them, or pick the primary.)
4. **Act 4 (their issue)** — replace the Lower Manhattan waterfront example with a live issue that board is actually working on. This is the act that lands hardest, so make it local.
5. **Backup prompts** — keep as-is; they're district-parameterized and reliable.
6. **Add a row** to the "Available demos" table above.

Keep the four-act arc (one clean answer → grounded-vs-ungrounded → follow-the-money → their-issue-sourced). The structure is what makes the demo land; only the district specifics change.

## See also

- [`../council-members/`](../council-members/) — the parallel set of demos tuned for Council members and their districts.
- [`../user-journeys.md`](../user-journeys.md) — the full, audience-neutral prompt catalog these scripts draw from.
