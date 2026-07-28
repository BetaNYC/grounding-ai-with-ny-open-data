---
status: DRAFT
---

# Apps

Self-contained, single-file HTML tools for exploring what BetaNYC's MCP connectors hold. No build step, no dependencies, no network requests. Open the file.

| App | What it covers |
|---|---|
| [`mcp-explorer.html`](mcp-explorer.html) | Five connectors in five panes — 311, City Record, Council, NYS legislation, Open Data — with the cross-references between them wired up |

## The data is pre-baked, and that is deliberate

**A browser page cannot call an MCP server.** MCPs speak stdio to a local process; there is no endpoint for JavaScript to reach. So every figure in these apps was pulled by running the real tool calls and baking the results into the file as JSON.

What that buys:

- **Works with no wifi.** Council offices, basements, conference rooms with captive portals.
- **Nothing to start.** No server, no port, no "did you run the thing first."
- **Nothing to fail in a room.** The most common demo failure is a live dependency, and this has none.

What it costs: **the data is as-of its verification date, not as-of now.** Every pane carries that date visibly, and the app says so on its own front page. Treat a stale date as a bug.

**To refresh:** re-run the tool calls listed in each pane's "how this was obtained" line and replace the corresponding entry in the `DATA` object near the top of the file. The tool calls are recorded verbatim precisely so this is mechanical.

## Conventions

- **One file per app.** If it needs a second file it is not an app, it is a project.
- **Every number carries the tool call that produced it.** Not a citation to a doc — the actual call, with its parameters. Anyone should be able to re-run it and get the same answer, or find out that they can't.
- **Record what the tools get wrong, in the app.** Coverage gaps, silent caps and misleading flags belong on the surface, not in a footnote. A demo that hides a limitation teaches the audience to trust something that will burn them.
- **No external requests.** No CDN, no webfonts, no analytics. A strict reading of this rule is what makes the offline guarantee real.

## Related

- Demo scripts for specific audiences: [`../guides/council-members/`](../guides/council-members/), [`../guides/good-government/`](../guides/good-government/), [`../guides/community-boards/`](../guides/community-boards/)
- The audience-neutral prompt catalog: [`../guides/user-journeys.md`](../guides/user-journeys.md)
