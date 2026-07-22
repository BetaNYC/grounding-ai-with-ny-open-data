---
status: DRAFT
---

# Worked example: NYC's social media archive, from URL to FOIL

> **DRAFT.** Research conducted 2026-05-20, revised for publication 2026-07-22. The worked example behind [`foil-research-methodology.md`](foil-research-methodology.md). It follows one investigation end to end so the method can be judged against a real case, including the parts that did not resolve.
>
> **Data current as of 2026-05-20 for all contract findings.** Contract identifiers, procurement vehicle numbers, and vendor relationships change. Re-verify every identifier below before relying on it, and especially before pasting one into a filed request.
>
> **This is practical guidance from BetaNYC's own research, not legal advice.**

**Scope:** identify the contract behind NYC's social media archiving platform, establish what its API surface is, and develop FOIL language to reach the archived records.

---

## What is nyc.gov.archivesocial.com?

NYC's instance of **ArchiveSocial**, now branded **CivicPlus Social Media Archiving**. It is a compliance platform that captures and preserves government social media accounts for records-retention purposes.

CivicPlus describes the product as capturing published content along with deleted and edited posts, hidden comments, and associated metadata, with digital signatures and timestamps. **That is the vendor's description of the product, not a finding about NYC's deployment.** What New York's configuration actually captures, which accounts are enrolled, and how long content is retained are all unestablished, and they are among the reasons the DORIS request below exists.

The `nyc.gov.archivesocial.com` pattern indicates a City-managed subdomain on vendor infrastructure. The site sits behind Cloudflare, and its `robots.txt` disallows several automated crawlers by name, including ClaudeBot, GPTBot, and Google-Extended. We honored that: everything below came from public pages read normally, the vendor's own documentation, and the city's published financial records.

---

## API surface

### Is there a public API for the NYC instance?

**We found none, and we did not establish that none exists.** Six common paths return 404, and CivicPlus's published API list does not include this product. That is the width of the test.

| Path | Result |
|---|---|
| `/api` | 404 |
| `/api/v1` | 404 |
| `/api/v2` | 404 |
| `/swagger` | 404 |
| `/openapi.json` | 404 |
| `/robots.txt` | 200, Cloudflare-managed, disallows named crawlers |

### CivicPlus APIs for other products

CivicPlus [publishes APIs](https://www.civicplus.help/docs/application-programming-interface-api) for several products. Social Media Archiving is not among them. Published APIs cover SeeClickFix 311 CRM, Web Central, HCMS, Meetings Essential, NextRequest, Mass Notification webhooks, Recreation Management, and Process Automation.

### A plausible reason, offered as such

ArchiveSocial *consumes* social platform APIs to ingest content. It does not appear to expose its own archive as a queryable service, and access to archived records runs through the web interface. That is consistent with a compliance and eDiscovery tool rather than a data pipeline, but it is our reading of the product's design, not something the vendor states.

---

## Contract research

### What was searched

| System | Terms | Result |
|---|---|---|
| NYC City Record | "CivicPlus", "ArchiveSocial", "social media archiving", "social media records management", "OTI social media software" | No results |
| Checkbook NYC, vendor-name URL | "CIVICPLUS", "CIVIC PLUS", "civicplus", "social media archive" | No results |
| **Checkbook NYC, smart search** | **"ArchiveSocial"** | **5 contracts** |
| PASSPort Public | "civicplus" | No results |
| Open Book NY | "CivicPlus" | Not completed. The interface requires JavaScript interaction, and this remains an open gap someone could close |

**The finding that generalizes:** every search under the software maker's name returned nothing. One search under the *product* name returned the entire procurement history. If the maker's name comes back empty, the search is not finished.

### Contracts found

Source: [Checkbook NYC smart search for "ArchiveSocial"](https://www.checkbooknyc.com/smart_search/citywide?search_term=ArchiveSocial)

| Contract ID | Vendor of record | Amount | Period | Purpose |
|---|---|---|---|---|
| CT185820171418335 | Portland Williams LLC | $68.98K | Mar 2017 – Mar 2018 | "ArchiveSocial hosted social media archiving" |
| CT185820201424467 | Portland Williams LLC | $99.17K | Mar 2020 – Mar 2021 | "ARCHIVESOCIAL" |
| DO185820232009181 | SHI International Corp | `$0` listed | — | "DORIS – Year 2 ArchiveSocial PO" |
| DO185820242008371 | SHI International Corp | `$0` listed | — | "Annual ArchiveSocial Order for DORIS (Year 3)" |
| DO185820252009241 | SHI International Corp | `$0` listed | — | "Annual ArchiveSocial Order for DORIS (Year 4)" |

**This set is probably incomplete.** The delivery orders are numbered Year 2 through Year 4, so a Year 1 order is likely to exist and did not surface in the search.

### What the records show

**Contracting agency: OTI, formerly DoITT.** All five records carry the technology agency in Checkbook's own **Agency** field, rather than the agency using the platform. Read it from that field. Do not infer it from the contract identifier, for the reason given in the methodology guide.

**End-user agency: the Department of Records and Information Services (DORIS).** The delivery order descriptions name DORIS directly. This is consistent with DORIS being the city's records management agency, which would own social media retention compliance.

**Purchased through resellers.** Portland Williams LLC from 2017 to 2021, under award methods recorded as "Small Purchase IT $25K–$100K" and "M/WBE Small Purchase." SHI International Corp from 2022 onward, as delivery orders against a master contract, PIN `85818O0028001`.

**The `$0` delivery orders are not evidence of zero spending.** Delivery orders frequently carry no amount in Checkbook when payment is tracked against the master contract. **Annual spend is not established.** The two standalone contracts were $68.98K and $99.17K; the three delivery orders are unknown. Do not extrapolate the first two across the later years, which is exactly what the FOIL request below is for.

**Year numbering** appears to run Year 2 at roughly FY2023 through Year 4 at roughly FY2025, inferred from the order dates.

### Purchasing vehicles CivicPlus publishes

| Vehicle | Identifier | Notes |
|---|---|---|
| TIPS, The Interlocal Purchasing System | #220105, Technology Solutions Products and Services | Texas-based cooperative used widely by local governments |
| GSA | GS-35F-0124U, SIN 54151S | Federal schedule, reachable by local governments through intergovernmental agreement |
| Value-added reseller | Various | The path NYC's records are consistent with |

Source: [CivicPlus procurement options](https://www.civicplus.help/docs/procurement-options).

> **Every identifier in this table needs re-verification before use.** These were read from vendor documentation in May 2026 and not independently confirmed. Cooperative and GSA contract numbers are reissued and retired on multi-year cycles, and GSA consolidated its schedules into a single Multiple Award Schedule around 2019 to 2020, so older schedule names in circulation are frequently stale. **We did not establish which vehicle NYC actually used.** The reseller pattern is consistent with CivicPlus's documented reseller path, and that is as far as the evidence goes.

### Who is who

| Role | Party |
|---|---|
| Contracting agency | OTI, formerly DoITT |
| End-user agency | Department of Records and Information Services (DORIS) |
| Vendor of record, 2017–2021 | Portland Williams LLC |
| Vendor of record, 2022–present | SHI International Corp |
| Software maker | CivicPlus / ArchiveSocial |

---

## FOIL strategy

### What the platform is likely to hold

| Record type | Why it matters |
|---|---|
| Published posts | Public already, but the archive carries richer metadata |
| **Deleted and edited posts** | High value, not otherwise obtainable |
| **Hidden or removed comments** | Frequently sought in research and reporting on how government accounts are moderated |
| Messages sent through official accounts | Official communications on non-official surfaces |
| Engagement metadata | Timestamps, reach, edit history |

### Decisions to make before filing

1. **Whose social media?** Content records belong to the agency that created them. Contract and platform records belong to OTI or DORIS. These are separate requests.
2. **Which platforms?** Name them.
3. **What date range?** Bounded ranges are granted faster.
4. **What format?** Ask for machine-readable export with metadata.
5. **Request type on the OpenRecords form:** "Existing Records."

### Timing, stated carefully

Under New York's Freedom of Information Law, an agency must respond within five business days of receiving a request by granting it, denying it, or acknowledging receipt. Where it acknowledges, it states an approximate date for its response, and twenty business days is the benchmark against which that date is judged rather than a flat production deadline. Agencies routinely state later dates with a reason. See Public Officers Law §89(3)(a) and the Committee on Open Government's published guidance before characterizing any delay as a violation.

---

## Draft FOIL language

Adapt the bracketed fields. **Re-verify every contract ID before filing** — a request pointing at a mistyped identifier is easy to deny.

### Option A — content records from a specific agency

**Title, public, 90 characters:**
```
Social media archive records including deleted/edited posts [AGENCY] [YEAR]
```

**Description, 5,000 characters:**
```
Pursuant to New York Public Officers Law Article 6 (FOIL), I request
all records maintained in or exported from the City's social media
archiving platform (ArchiveSocial / CivicPlus, accessible at
nyc.gov.archivesocial.com) for the following:

Agency: [AGENCY NAME]
Platform(s): [e.g., Twitter/X, Facebook, Instagram, LinkedIn]
Account handle(s): [OFFICIAL ACCOUNT HANDLE]
Date range: [START DATE] through [END DATE]

Specifically, I request:
1. All posts published during the date range, including full text,
   timestamps, and engagement metadata
2. All posts that were deleted, edited, or hidden during or after
   the date range, including original content, edit history, and
   deletion timestamps
3. All comments or replies that were hidden, deleted, or restricted
   on official posts during the date range, including the content
   of those comments and the timestamp of their removal
4. Any records indicating why content was removed or hidden

I request records in machine-readable format (JSON or CSV) including
all available metadata. If the agency uses the platform's native
export function, that format is acceptable.

If any portion of this request is denied, please provide an itemized
list of withheld records and the specific statutory basis for each
withholding, and provide all non-exempt responsive records promptly.
```

### Option B — contract and platform records

File two requests: one to OTI for the contract, one to DORIS for platform administration.

**To OTI — title:**
```
ArchiveSocial/CivicPlus contracts and purchase orders — OTI
```

**To OTI — description:**
```
Pursuant to New York Public Officers Law Article 6 (FOIL), I request
all records related to the City's procurement of ArchiveSocial /
CivicPlus social media archiving services, including:

1. All contracts, purchase orders, delivery orders, and amendments
   between the City and CivicPlus, Inc., ArchiveSocial, Inc., Portland
   Williams LLC, and/or SHI International Corp related to social
   media archiving services, including:
   - Contract CT185820171418335 (2017-2018)
   - Contract CT185820201424467 (2020-2021)
   - Delivery orders DO185820232009181, DO185820242008371,
     DO185820252009241
2. Any delivery order preceding DO185820232009181 for the same
   services, including a first-year order if one exists
3. The underlying master contract or procurement vehicle used
   for the SHI International delivery orders (PIN 85818O0028001)
4. Any statements of work, scope of services, or pricing schedules
   attached to the above
5. The total amount paid under each contract year

I request records in electronic format where available.
```

**To DORIS — title:**
```
ArchiveSocial platform administration, account list, retention policy
```

**To DORIS — description:**
```
Pursuant to New York Public Officers Law Article 6 (FOIL), I request
all records related to DORIS's administration of the City's social
media archiving platform (ArchiveSocial / CivicPlus, accessible at
nyc.gov.archivesocial.com), including:

1. A list of all City agencies and official social media accounts
   enrolled in or monitored by the platform, including account
   handles and platforms
2. Any records describing the retention schedule or retention policy
   for archived social media content
3. Any records describing the process by which archived content can
   be deleted, modified, or removed from the platform
4. Any records of requests from City agencies or officials to delete
   or suppress specific archived content
5. Any technical documentation or user guides provided to City
   agencies for using the platform

I request records in electronic format where available.
```

---

## Filing notes

- Portal: [a860-openrecords.nyc.gov/request/new](https://a860-openrecords.nyc.gov/request/new)
- **Category:** "Civic Services" for OTI; match the agency's mission otherwise
- **Agency:** OTI for contract and platform records; the specific agency for content
- **Request type:** "Existing Records"
- Complete your account profile before submitting so the agency's correspondence reaches you

---

## What this investigation did not resolve

The method produced a filable request. It did not produce a finished story, and the gaps are the point of filing.

- The master contract behind the SHI delivery orders, PIN `85818O0028001`
- Whether a Year 1 delivery order exists, at roughly FY2022
- The amounts paid under the three `$0` delivery orders, and therefore the actual annual cost
- Which purchasing vehicle NYC used, TIPS or GSA or another path entirely
- The retention policy, including whether deleted content is kept indefinitely
- Which agencies and accounts are enrolled
- What NYC's configuration captures, as against what the vendor markets
- Whether CivicPlus's NextRequest product is separately contracted
- The Open Book NY search, which was never completed

**No inference about the propriety of any procurement is drawn or supported by anything above.** The contracts, award methods, and vendors are recorded here because they are public records and because finding them is what the method teaches.

---

## Sources

| Source | URL |
|---|---|
| CivicPlus API overview | [civicplus.help/docs/application-programming-interface-api](https://www.civicplus.help/docs/application-programming-interface-api) |
| CivicPlus ArchiveSocial terms | [civicplus.help/docs/social-media-archiving-archivesocial-terms](https://www.civicplus.help/docs/social-media-archiving-archivesocial-terms) |
| CivicPlus procurement options | [civicplus.help/docs/procurement-options](https://www.civicplus.help/docs/procurement-options) |
| NYC City Record | [a856-cityrecord.nyc.gov](https://a856-cityrecord.nyc.gov) |
| Checkbook NYC smart search | [checkbooknyc.com/smart_search/citywide?search_term=ArchiveSocial](https://www.checkbooknyc.com/smart_search/citywide?search_term=ArchiveSocial) |
| PASSPort Public | [a0333-passportpublic.nyc.gov/contracts.html](https://a0333-passportpublic.nyc.gov/contracts.html) |
| NYC OpenRecords | [a860-openrecords.nyc.gov/request/new](https://a860-openrecords.nyc.gov/request/new) |

All source URLs were reachable when this research was conducted in May 2026 and should be re-checked before citing.
