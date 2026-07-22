---
status: DRAFT
---

# From a URL to a FOIL request: researching government software contracts

> **DRAFT.** First pass 2026-05-20, revised for publication 2026-07-22. A reproducible method for taking a government-facing URL and ending with a filed, specific FOIL request. Written so a journalist or researcher can run it against any government software vendor, not only the one in the worked example.
>
> **Data current as of 2026-07-22.** This guide depends on live third-party systems whose coverage, URLs, and identifiers change. Re-verify anything you intend to publish.
>
> **This is practical guidance from BetaNYC's own research, not legal advice.** FOIL is a statute with case law behind it. If a request matters legally, talk to a lawyer.

Companion to [`../user-journeys.md`](../user-journeys.md), which catalogs the individual prompts. This guide chains them into one investigation. The worked example is [`archivesocial-worked-example.md`](archivesocial-worked-example.md).

---

## What this method produces

Starting from a single URL, the workflow:

1. Identifies what the platform is and who makes it
2. Establishes what the vendor publishes about its API surface
3. Maps how the vendor sells to governments, which is what makes a contract findable
4. Locates contracts in the city's financial systems, including when the obvious search fails
5. Separates the contracting agency from the end-user agency, which are frequently different
6. Produces specific, ready-to-file FOIL language

The last step is the point. A FOIL request that names contract IDs is materially harder to deflect than one that describes a topic.

> **On speed.** This took about an hour with the tooling below. We did not run a manual control, so treat any comparison to unassisted research as an impression rather than a measurement.

---

## Access ethics

Read this before the tooling section. It is the part that makes the rest of the method defensible.

- **Honor `robots.txt`.** If a site disallows automated access to a path, do not automate that path. Read it to understand what the operator permits, not to find a way around it.
- **Do not spoof user-agents, rotate addresses to defeat a block, or harvest challenge cookies.** Beyond the ethics, it is poor engineering: a client that impersonates a browser breaks at the next challenge revision.
- **When a site blocks automation, use it by hand.** Public data reachable in an ordinary browser is still public data. Open the page, read it, cite it.
- **If access is genuinely obstructed, ask the operator to fix it.** Agencies generally want their public data usable, and a request on the record is more durable than a workaround.

None of these slow the method down. Every finding in the worked example came from public pages, a documented search interface, and a vendor's own published documentation.

---

## Tools

### Tier 1 — minimum viable setup

| Tool | Purpose | Cost |
|---|---|---|
| **Claude.ai** or **ChatGPT** with web browsing | Research synthesis, prompt generation, drafting | Free / paid tiers |
| **Perplexity.ai** | Fast cited web search for vendor background | Free / paid tiers |
| **Checkbook NYC** ([checkbooknyc.com](https://www.checkbooknyc.com)) | NYC spending and contract database | Free |
| **NYC OpenRecords** ([a860-openrecords.nyc.gov](https://a860-openrecords.nyc.gov)) | File FOIL requests | Free, account required |
| **NYC City Record** ([a856-cityrecord.nyc.gov](https://a856-cityrecord.nyc.gov)) | Procurement notices and awards | Free |

These five, used by hand, carry most of the contract-discovery steps.

### Tier 2 — BetaNYC's MCP servers

These put the same public sources behind a grounded agent, so it queries the record instead of recalling it. All are published npm packages. Config: [`../../mcp-configs/`](../../mcp-configs/).

| Server | Minimum version | Use in this method |
|---|---|---|
| [`@betanyc/nyc-checkbook-mcp`](https://github.com/BetaNYC/nyc-checkbook-mcp) | 1.4.0 | Phase 3 — contracts, spending, vendor lookup |
| [`@betanyc/nyc-record-mcp`](https://github.com/BetaNYC/nyc-record-mcp) | 1.1.0 | Phase 3 — solicitations, award and hearing notices |
| [`@betanyc/nyc-budget-mcp`](https://github.com/BetaNYC/nyc-budget-mcp) | 1.3.0 | Phase 4 — discretionary awards to the same vendor |
| [`@betanyc/nyc-council-mcp`](https://github.com/BetaNYC/nyc-council-mcp) | 2.5.0 | Phase 4 — Council oversight of the agency or contract |
| [`@betanyc/nyc-charter-laws-rules`](https://github.com/BetaNYC/nyc-charter-laws-rules) | 0.2.0 | Phase 5 — the statutory text a request cites |
| [`@betanyc/nys-openlegislation-mcp`](https://github.com/BetaNYC/nys-openlegislation-mcp) | 2.3.0 | State-level context when the city buys through a state vehicle |
| [`@betanyc/nyc-311-mcp`](https://github.com/BetaNYC/nyc-311-mcp) | 1.1.0 | Service-quality context on the system under contract |
| `socrata` (third-party) | — | The general NYC and NYS open data catalog |

> **Version floors matter.** Below the versions above, these servers accepted parameters that were not in their schema, silently dropped them, and returned unfiltered results that looked correct. Check your versions before relying on a filtered answer. The `socrata` server is third-party and still behaves this way, so confirm any filter it claims to have applied.

### Tier 3 — additional sources

| Source | Use |
|---|---|
| **PASSPort Public** ([a0333-passportpublic.nyc.gov](https://a0333-passportpublic.nyc.gov)) | Newer NYC procurement system; some contracts appear only here |
| **Open Book NY** ([openbook.osc.state.ny.us](https://openbook.osc.state.ny.us)) | State contracts, if the city bought through a state vehicle |
| **USASpending.gov** | Federal contracts, if the vendor holds a GSA schedule |
| **TIPS vendor search** ([tips-usa.com](https://tips-usa.com)) | Confirm cooperative contract membership |

---

## Phase 1 — Identify the platform and vendor

**Goal:** understand what the platform does, who makes it, and what they publish about it.

**Prompt:**
```
I found this government website: [URL]. Help me:
1. Identify what platform or software this is
2. Who makes it, including a parent company if it was acquired
3. What it does and which government buyers it targets
4. What the vendor publishes about a public API or developer documentation
```

**What to look for:**

- A subdomain pattern like `cityname.gov.vendorname.com` usually means a white-labeled SaaS product.
- Recent acquisitions change brand names, and the contract may be under either.
- The vendor's own help documentation is the best source on whether an API exists.

**On establishing that no API exists.** Check the vendor's published API list first. If you also probe common paths, keep the conclusion the size of the test: *"the paths we checked return 404 and the vendor's published API list does not include this product"* is supportable. *"This platform has no API"* is not, unless the vendor says so. This distinction is the folder's house rule and it applies to your own findings before anyone else's.

**Read `robots.txt` to understand what the operator permits.** If it disallows automated access, that governs what you do next. See Access ethics above.

---

## Phase 2 — Research the procurement model

**Goal:** understand how governments buy this software, because the purchasing vehicle determines where the contract is visible.

**Prompt:**
```
[Vendor] sells software to local governments. What purchasing vehicles do they offer?
- GSA Multiple Award Schedule contract number and SIN
- TIPS (The Interlocal Purchasing System) contract number
- NASPO ValuePoint contracts
- State contracts such as New York OGS
- Any other cooperative agreements

Do they sell through resellers, and which resellers do they commonly use?
```

**Why this matters:** software bought through a cooperative vehicle or a reseller is often invisible under the maker's name in city financial systems. Knowing the vehicle explains an empty search and tells you whose name to search instead.

**Check the vendor's own procurement page.** Most government software vendors publish one. Try `[vendor site]/procurement` or the equivalent in their help documentation.

> **Verify every identifier before you publish it.** Cooperative contract numbers, GSA contract numbers, and SINs are reissued and retired on multi-year cycles, and schedule names change. GSA consolidated its schedules into a single Multiple Award Schedule around 2019 to 2020, so older references to named schedules are frequently stale. Confirm current status in GSA eLibrary or SAM.gov rather than repeating a number found in a secondary source.

---

## Phase 3 — Search the city's financial systems

**Goal:** find contracts, spending, and the vendor of record.

### Checkbook NYC

Checkbook is the highest-value source in this method. It holds contracts, delivery orders, purpose text, agency, and award method, which together let you reconstruct a procurement without filing anything.

**Use the smart search, not a vendor URL.** Searching by vendor name in the URL path fails whenever the registered name differs from the one you know. Smart search matches across fields including the purpose text, which is where product names usually appear.

```
https://www.checkbooknyc.com/smart_search/citywide?search_term=[TERM]
```

**Search terms to run, in order:**

| Term | Finds |
|---|---|
| Vendor name | Direct contracts |
| **Product name** | Contracts named for the product rather than the maker. Often the only thing that works |
| Acronym or short name | Records using an abbreviation |
| Reseller name | Purchases through a value-added reseller |

**Reading the results:**

- `CT` prefix is a standalone contract; `DO` is a delivery order under a master contract.
- `$0` on a delivery order usually means the money is tracked against the master contract, not that nothing was spent. Look up the master by its PIN, and FOIL for invoices if the amount matters.
- The **Purpose** field frequently names the product and the end-user agency even when the vendor of record is a reseller. It is the most information-dense field in the record.

**Prompt once you have results:**
```
Here are contract records from Checkbook NYC for [vendor or product]:

[paste]

Identify:
1. The contracting agency
2. The end-user agency, if different — check the Purpose field
3. Standalone contracts versus delivery orders under a master
4. The procurement method and what it implies about the vehicle
5. The timeline, including start and any renewals
6. Any reseller involved, and what that indicates about the purchasing path
```

> **Operational note, 2026-07-22.** Automated access to Checkbook is currently failing. The data is fully public and reachable in an ordinary browser, and the manual workflow above works normally. Two consequences while that is true: run these searches by hand, and **treat a zero-result programmatic response as unknown rather than as zero**. A blocked call can return an empty record set alongside an error field, and reporting "no contracts found" when the request never reached the server is a false negative about a named company. Confirm any empty result in the browser before publishing it.

### NYC City Record

Use for solicitations, award notices, and intent-to-award notices.

```
Search the NYC City Record for procurement notices mentioning [vendor] or [product].
Also try "[agency] [software category]" to catch related procurements.
```

**A null result here is weak evidence.** City Record indexing has a coverage window we have not established, and intergovernmental or cooperative purchases may generate no notice at all. "No notices found" means no notices found, not "no contract exists." Check the tool's stated coverage before drawing any inference from silence.

### PASSPort Public

[a0333-passportpublic.nyc.gov/contracts.html](https://a0333-passportpublic.nyc.gov/contracts.html) is the newer system and may carry recent contracts absent from Checkbook. Use the on-page filters.

---

## Phase 4 — Map the agency structure

**Goal:** separate who holds the contract from who uses the service. In NYC IT procurement they are usually different, and that difference decides where you file.

- **OTI**, formerly DoITT, frequently holds technology contracts on behalf of other agencies.
- The **end-user agency** typically appears in the Purpose field or the delivery order description.
- The **reseller** is the vendor of record and the party the city pays, which is not the software maker.

**Prompt:**
```
From these contracts, map:
- Contracting agency (holds the contract)
- End-user agency (uses the service)
- Prime vendor (who the city pays)
- Software maker

Contracts: [paste]
```

Two further checks worth running here: whether the same vendor received Council discretionary funding (`nyc-budget-mcp`), and whether the Council has held hearings touching the agency's contracting (`nyc-council-mcp`). Either can turn a contract into a story.

> **Do not decode contract IDs by pattern.** Contract identifiers embed agency and year information, but the conventions are not documented in this guide and we have not verified them against Comptroller documentation. Attributing a contract to the wrong agency because a substring looked like an agency code is a real error with a named agency attached. Read the agency from the record itself.

---

## Phase 5 — Draft the FOIL request

**Goal:** a request specific enough to be answered and broad enough to be worth filing.

**Prompt:**
```
I want to file a FOIL request in New York State for records about [platform].
From my research:

- Contracting agency: [agency]
- End-user agency: [agency]
- Known contract IDs: [list]
- Known vendors and resellers: [list]
- Records sought: [list]

Draft:
1. A request title, 90 characters maximum, which will be public
2. A request description, 5,000 characters maximum, seen by the agency

Make it specific enough to be actionable, referencing contract IDs where known,
and request machine-readable format where applicable.
```

**What to build into the request:**

- **Name the contract IDs you found.** It shows the work is done and makes the records easier for the agency to locate.
- **Ask for electronic, machine-readable records** where a format exists.
- **Request an itemized list of anything withheld, with the specific basis for each withholding.**
- **File separately by record type.** Content records live with the agency that created them; contract and administrative records live with the procuring agency. One request to the wrong agency returns nothing and costs weeks.
- **Bound the date range.** Agencies commonly push back on open-ended requests, citing the burden of production. A narrow range is easier to grant and faster to receive.

---

## Common failure modes

| Problem | Why | Fix |
|---|---|---|
| Vendor absent from Checkbook by name | Registered under a parent, a reseller, or a variant spelling | Search the **product name**; use smart search rather than a vendor URL |
| Contract shows `$0` | Delivery order with money tracked against the master | Find the master by PIN; FOIL for invoices |
| No City Record notices | Old award, or a cooperative purchase requiring no notice | Treat as inconclusive; check Checkbook spending history |
| Empty programmatic result | The request may not have reached the source | Re-run by hand in a browser before treating it as zero |
| Request pushed back as burdensome | Scope too broad | Narrow the date range, the accounts, or the contract IDs |
| Agency says it has no records | Records sit with the contracting agency, not the user agency | File with both, separately |

---

## Reusable prompts

### Platform identification
```
Government-facing URL: [URL]
- What product is this, and who makes it?
- Have they been acquired?
- What does the vendor publish about a public API?
- What purchasing vehicles do they offer governments?
```

### Checkbook interpretation
```
Contract records from Checkbook NYC:
[paste]

1. Contracting versus end-user agency
2. Standalone contract versus delivery order
3. Reseller versus software maker
4. Procurement method and its implications
5. Timeline and renewals
```

### FOIL language
```
Draft a FOIL request to [agency] for [records].
Known contract IDs: [list]
Known vendors: [list]
Sought: [records]
Format: electronic, machine-readable where available.
Title 90 characters maximum, public. Description 5,000 maximum.
Include a request for an itemized list of withheld records with the basis for each.
```

### Procurement research
```
How does [vendor] sell [product] to local governments?
- GSA MAS contract number and SIN
- TIPS contract number
- NASPO or other cooperative contracts
- Common government resellers
- Whether NYC or NYS agencies can buy through any of these
```

### API surface
```
Researching whether [platform] has a public API.
Vendor's published API documentation: [paste or link]
Paths checked and results: [paste]
What is supportable from this, and what would I need to establish more?
```

---

## NYC sources

For the full source-routing map, see [`../when-to-use-which-portal.md`](../when-to-use-which-portal.md). The procurement-specific set:

| Source | URL | Best for |
|---|---|---|
| Checkbook NYC | [checkbooknyc.com](https://www.checkbooknyc.com) | Contracts and spending. **Use smart search** |
| NYC City Record | [a856-cityrecord.nyc.gov](https://a856-cityrecord.nyc.gov) | Procurement notices |
| PASSPort Public | [a0333-passportpublic.nyc.gov](https://a0333-passportpublic.nyc.gov) | Newer contracts, vendor profiles |
| NYC OpenRecords | [a860-openrecords.nyc.gov](https://a860-openrecords.nyc.gov) | Filing FOIL requests |
| FOIL Officers Directory | [a860-openrecords.nyc.gov/foil-officers-directory](https://a860-openrecords.nyc.gov/foil-officers-directory) | The right officer per agency |

---

## Worked example

[`archivesocial-worked-example.md`](archivesocial-worked-example.md) runs this method end to end against NYC's social media archiving platform. In summary:

- The platform is NYC's instance of ArchiveSocial, now CivicPlus Social Media Archiving
- The paths checked returned 404 and CivicPlus's published API list does not include the product
- CivicPlus documents cooperative and reseller purchasing paths, so the contract was not under the maker's name
- Five contracts surfaced under a smart search for the **product** name after searches for the **vendor** name returned nothing
- The contracting agency is OTI, formerly DoITT; the end-user agency is the Department of Records and Information Services
- Purchases ran through resellers rather than directly from the maker
- Annual spend is not established. The three most recent delivery orders list `$0` in Checkbook; the two earlier standalone contracts were $68,980 and $99,170

That last line is the method working correctly. Two numbers are known, three are not, and the FOIL request exists to close the gap rather than to confirm a guess.
