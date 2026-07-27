---
status: DRAFT
---

# Council member demo scripts

Run-it-live demo scripts for showing BetaNYC's grounded AI + NYC/NYS open data MCPs to a **specific NYC Council member** (or their staff). Each file is pre-filled for one district so it can be read straight off the page in a meeting.

Same idea as the [`../community-boards/`](../community-boards/) demos, framed for a Council audience: their district's 311, *their own* legislation, *their* discretionary funding, and oversight of the agencies they question at hearings.

These are the district-specific companions to the general prompt catalog in [`../user-journeys.md`](../user-journeys.md).

## Available demos

| District | Member | Script | Deck |
|---|---|---|---|
| 4 | Virginia Maloney | [`district-04.md`](district-04.md) | [`district-04-deck.html`](district-04-deck.html) |
| 10 | Carmen N. De La Rosa | [`district-10.md`](district-10.md) | [`district-10-deck.html`](district-10-deck.html) |
| _(template)_ | — | [`TEMPLATE.md`](TEMPLATE.md) | — |

**Demoing to a newly seated member?** [`district-04.md`](district-04.md) is the worked example. The standard Act 2 ("what have you introduced?") returns nothing for a member in their first year, and the script turns that into the strongest moment in the meeting rather than routing around it. Their first discretionary budget is the fiscal year *after* they took office.

_Add rows as district demos are drafted._

## Naming convention

Council districts are the stable unit (members change; districts don't), so name by district as the primary key:

- `district-01.md`, `district-33.md`, `district-51.md` — zero-padded to two digits so they sort 01…51.

Optional thematic demos (a committee or role rather than one district) use a `theme-` prefix:

- `theme-finance-committee.md`, `theme-land-use.md`

## How to add a district (customization checklist)

1. **Copy** [`TEMPLATE.md`](TEMPLATE.md) to `district-[NN].md`.
2. Fill the placeholders: `[NN]` district number, `[MEMBER NAME]`, `[NEIGHBORHOODS]`, and the overlapping community district(s).
3. **Tailor Act 3 (their legislation + funding)** — this is the act a Council audience cares about most. Pull the member's actual recent bills and their discretionary awards so the demo is about *them*, not a generic district. **Query Schedule C by sponsoring member surname, not by district number** — there is no district filter, and asking by district silently returns citywide awards. See the parameter table in the template's presenter-notes section.
4. **Dry-run every prompt against the live MCPs** and fill in the "Presenter notes (verified YYYY-MM-DD)" section with what actually happened, including the figures you plan to say out loud and how you got each one. This is not optional polish — several of these tools fail silently, returning real-looking data for the wrong question.
5. Add a row to the "Available demos" table above.

Keep the four-act arc. Only the district and member specifics change.

## Decks (optional)

A `district-[NN]-deck.html` is the script in a presentation medium, for meetings where reading off a Markdown file is the wrong register. It is a **companion to the script, never a replacement** — the script stays the source of truth for figures and provenance.

**Structure: every act is a side-by-side.** Left panel is a real web search for the same question, right panel is the connector. This is what answers "how is this better than a search engine" without asserting it. Rules for the left panel:

- **Run the searches and reproduce them verbatim.** Never invent or paraphrase a result. The whole act collapses if one line is made up and someone checks.
- **Flag the wrong-target results** — a different person with the same surname, another member's page, an unrelated institution. Those are the strongest single items in the deck and they occur naturally in almost every query.
- **Don't claim the search lied.** It usually hasn't. It returns portals instead of answers, secondary sources instead of the law, or the right number from a source you can't cite. Say *that* — it's true and it survives someone checking.
- **Date the search on the slide.** Ranking drifts; re-run before the meeting.

- **Self-contained.** One file, no build step, no network requests, no external fonts. It has to work on a council office's wifi, or without it.
- **Presenter notes are in the deck.** Press `N`. Every trap from the script's presenter-notes section rides along on the relevant slide, so you can run the meeting without a second screen or a printout.
- **Keys:** `←`/`→` move · `N` notes · `R` replay an animation · `F` full screen.
- **Label every figure with the date it was verified**, on the slide, not just in the notes. A deck outlives the session that built it, and a number with no date on it will get read aloud a month later.
- Animations are CSS. Don't embed recorded GIFs of terminal sessions — they go stale silently against a corpus that moves, and they can't be replayed on demand.

## See also

- [`../community-boards/`](../community-boards/) — the parallel demos tuned for community boards.
- [`../user-journeys.md`](../user-journeys.md) — the full, audience-neutral prompt catalog.
