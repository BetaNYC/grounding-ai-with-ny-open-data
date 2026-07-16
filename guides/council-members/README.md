---
status: DRAFT
---

# Council member demo scripts

Run-it-live demo scripts for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to a **specific NYC Council member** (or their staff). Each file is pre-filled for one district so it can be read straight off the page in a meeting.

Same idea as the [`../community-boards/`](../community-boards/) demos, framed for a Council audience: their district's 311, *their own* legislation, *their* discretionary funding, and oversight of the agencies they question at hearings.

These are the district-specific companions to the general prompt catalog in [`../user-journeys.md`](../user-journeys.md).

## Available demos

| District | Member | File |
|---|---|---|
| _(template)_ | — | [`TEMPLATE.md`](TEMPLATE.md) |

_Add rows as district demos are drafted._

## Naming convention

Council districts are the stable unit (members change; districts don't), so name by district as the primary key:

- `district-01.md`, `district-33.md`, `district-51.md` — zero-padded to two digits so they sort 01…51.

Optional thematic demos (a committee or role rather than one district) use a `theme-` prefix:

- `theme-finance-committee.md`, `theme-land-use.md`

## How to add a district (customization checklist)

1. **Copy** [`TEMPLATE.md`](TEMPLATE.md) to `district-[NN].md`.
2. Fill the placeholders: `[NN]` district number, `[MEMBER NAME]`, `[NEIGHBORHOODS]`, and the overlapping community district(s).
3. **Tailor Act 3 (their legislation + funding)** — this is the act a Council audience cares about most. Pull the member's actual recent bills and their district's discretionary awards so the demo is about *them*, not a generic district.
4. Add a row to the "Available demos" table above.

Keep the four-act arc. Only the district and member specifics change.

## See also

- [`../community-boards/`](../community-boards/) — the parallel demos tuned for community boards.
- [`../user-journeys.md`](../user-journeys.md) — the full, audience-neutral prompt catalog.
