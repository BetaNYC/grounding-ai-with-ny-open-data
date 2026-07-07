---
status: DRAFT
---

# Grounding AI agents in authentic data

> **DRAFT.** First pass, 2026-07-06.

## Why this matters

A language model's training data has a cutoff date and no guarantee of accuracy for any specific civic fact — a bill number, a contract amount, a service-request status. Left ungrounded, an agent will confidently produce a plausible-sounding but unverifiable answer. Grounding means every factual claim about government data traces back to a live, authoritative, citable source — a specific dataset, a specific record — rather than the model's memory.

For civic and public-interest work specifically, this isn't a nice-to-have: bad information about government process, spending, or legislation erodes exactly the trust this kind of tooling is supposed to build.

## What grounding looks like in practice

1. **The agent has a tool, not just a prompt.** An MCP connection to an authoritative source (a government API, a Socrata catalog) means the agent can look something up instead of recalling it.
2. **Every claim is traceable to a source.** A grounded answer names the dataset, the record ID, or the API endpoint it came from — so a human can independently verify it.
3. **The agent knows what it doesn't have access to.** An agent that says "I don't have a tool for that" is more trustworthy than one that guesses. See [`when-to-use-which-portal.md`](when-to-use-which-portal.md) for mapping a question to the right (or no) tool.
4. **Configuring access isn't the same as authorization to use it.** Wiring an MCP into a config file makes a capability *possible* — actually querying a live government API in production should still go through whatever review or sign-off process an organization already uses for external data use.

## Prompt patterns for agent builders

- **Ask the agent to cite its source.** "Look up X and tell me which dataset/API endpoint the answer came from" produces more checkable output than an open-ended question.
- **Ask for the record ID, not just the summary.** For anything consequential (a contract, a bill, a service request), the specific ID lets a human pull the primary record directly.
- **Treat "no data found" as a valid, useful answer.** An agent should be comfortable saying a dataset doesn't cover something, rather than filling the gap with a guess.

## Verification checks worth building

- Does the agent's cited dataset/record actually exist when checked independently?
- Does the agent distinguish between "the portal doesn't have this" and "I didn't search for this"?
- For time-sensitive data (spending, service requests), does the agent surface how current the underlying dataset is?

## Related reading

See [`training-resources.md`](training-resources.md) for BetaNYC and partner classes that teach these concepts to a general audience, not just developers.
