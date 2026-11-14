# What's changed

This page lists the changes to Grounding AI with NY Open Data that a reader would notice: new guides, demo scripts and slide decks, new data in the directory of New York's data portals, and corrections when we published something wrong. Newest first.

- **History begins:** 2026-07-06, the day the repository started on GitHub. The website opened on 2026-07-30; entries before that date describe the guides as they were on GitHub. Every correction we know of since 2026-07-06 is listed.
- **Data refresh:** none on a schedule. The directory of data portals and the figures in the guides are checked by hand, and each guide says the date its figures were run.

To report a mistake or ask for a new feature, use the [feedback page](https://betanyc.github.io/grounding-ai-with-ny-open-data/feedback.html) or [open an issue on GitHub](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/issues).

## 2026-11-13: Each data source now names the government body that runs it

- **Tags:** Data
- **What changed:** 182 of the directory's 224 sources now have a `registry_id`, up from 22. It is the id of the government body that runs the source in ny-gov-web-registry, BetaNYC's list of New York government bodies and their websites, so a program can join the two lists. Every county and city is linked, as are most state agencies, the public authorities and the NYC agencies. New York City's row points to the Office of Technology and Innovation, which runs NYC Open Data, because the list does not hold the City of New York as one body. Public universities and public libraries are linked too: 15 CUNY and SUNY sources point to CUNY or SUNY, and three point to the New York Public Library. Private universities, research centers and nonprofits are not linked. Also not linked: the State Legislature, the courts, the State Comptroller and the Kids' Well-being Indicators Clearinghouse, which are not in the list yet, and the Environmental Bond Act site, which is run by several state agencies together and names no single one. The state Health Department's data site is linked to the Department of Health, whose name is on the site. The ids come from a version of the list, still under review, that adds every county, city, town and village in the state, and SUNY. They are in the `registry_id` column of the CSV and JSON downloads.
- **More detail:** [The directory as JSON](https://betanyc.github.io/grounding-ai-with-ny-open-data/resources/ny-data-portal-registry.json) · [ny-gov-web-registry](https://github.com/BetaNYC/ny-gov-web-registry)

## 2026-11-13: Research archives in the data directory now say what they hold

- **Tags:** Data, Correction
- **What changed:** Earlier today the directory said its 15 new research archives all hold government or public data. A visit to each archive in a web browser found that seven mostly hold papers and PDF reports, or copies of national or global data. They stay listed so you know where the information is, and their notes now start "Papers, not data" (CUNY Academic Works, both SUNY archives, Binghamton's and ESF's) or "Not New York data" (UAlbany's weather server and Columbia's climate forecasts). Columbia's data platform row listed New York examples that the browser visit could not find; it now lists only what was seen, and gives its size, 497 datasets. The Roper Center row now warns that Roper's rules do not allow its survey data in AI tools. NYU's Faculty Digital Archive was down during the visit and is marked for a recheck. A person also opened, by hand, the sites no script could read. Hudson, Oneonta, Rye and Tonawanda load in a browser and have no data site, so they are no longer "Not yet confirmed". Cornell's CISER archive moved to data.socialsciences.cornell.edu and holds hundreds of New York datasets, including state health and education records, most of them public.
- **If you used the old numbers:** Do not use Roper Center survey data to ground an AI tool. Do not expect the seven archives above to hold datasets. Do not cite Columbia's data platform for New York jobs, housing-survey or drinking-water data.
- **Who it affects:** Anyone who used the directory's research archive rows on 2026-11-13.
- **More detail:** [New York data directory](https://betanyc.github.io/grounding-ai-with-ny-open-data/resources/ny-data-portal-registry.html)

## 2026-11-13: Every New York city, and 16 research archives, in the directory of data portals

- **Tags:** Data
- **What changed:** The directory now lists 224 sources, up from 160. All 62 cities in New York now have a row and a details page. The 48 that were missing were each checked on their own website on 2026-11-13. Only Lockport publishes open data (spending spreadsheets). 43 have no data site, though nine of them, including Niagara Falls and Rome, share public map layers such as tax parcels. Four sites (Hudson, Oneonta, Rye and Tonawanda) could not be read and are marked "Not yet confirmed". Also new: 15 university, library and research-center archives that hold government or public data, such as NYU's Faculty Digital Archive and Cornell's eCommons, and Columbia's data platform. Each archive row says what data it holds, and its region is the area that data covers.
- **More detail:** [New York data directory](https://betanyc.github.io/grounding-ai-with-ny-open-data/resources/ny-data-portal-registry.html) · [County and city pages](https://betanyc.github.io/grounding-ai-with-ny-open-data/resources/portals/)

## 2026-11-12: 20 more sources in the directory of New York's data portals

- **Tags:** Data
- **What changed:** The directory now lists 160 sources, up from 140. New: five state agency map services, the state's Kids' Well-being Indicators Clearinghouse, NYC's map hub and two more NYC sources, the cities of Ithaca and Watertown, and nine university, library, nonprofit and health-indicator sites, including the first CKAN site in the directory (Stony Brook University). Each was checked on 2026-11-12 and confirmed to be in New York. Buffalo's COVID-19 data site is noted on the Buffalo row.
- **More detail:** [New York data directory](https://betanyc.github.io/grounding-ai-with-ny-open-data/resources/ny-data-portal-registry.html)

## 2026-11-12: A What's changed page

- **Tags:** Site
- **What changed:** A new page lists every change to the site a reader would notice, newest first, with a filter for site changes, data changes and corrections. Every page links to it at the bottom.
- **More detail:** [What's changed on GitHub](WHATS-CHANGED.md)

## 2026-11-10: A new menu, footer and About page

- **Tags:** Site
- **What changed:** The site now has the same top bar as BetaNYC's budget site. On a phone the links fold into a Menu button. A new two-column footer links every page, and a new About page holds "Why this exists" and "What it costs", which used to be on the home page.
- **More detail:** [About](https://betanyc.github.io/grounding-ai-with-ny-open-data/about.html) · [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/32)

## 2026-11-09: A card on BetaNYC's study of AI and government websites

- **Tags:** Site
- **What changed:** A new card on the home page says BetaNYC is checking how well AI tools can read about 3,300 New York government websites, and links to the method and the list of sites. It shows no results; those stay private until the study is done.
- **More detail:** [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/31)

## 2026-11-05: A directory of New York's data portals

- **Tags:** Data, Site
- **What changed:** A new data directory lists 140 places to find New York data, from state portals to counties, cities and universities, with a page for each county and city and a search that works on a phone. A glossary and a feedback page were added. That night the home page linked the new connector that lets an AI assistant search the same directory.
- **More detail:** [The data directory](https://betanyc.github.io/grounding-ai-with-ny-open-data/resources/ny-data-portal-registry.html) · [Directory pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/26) · [Search and filters](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/28) · [Connector on the home page](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/30)

## 2026-11-05: Eight portal links went to another state

- **Tags:** Data, Correction
- **What changed:** In the list of New York open data portals, eight county rows linked to a portal in another state with a similar name, from July 6 to November 5, 2026: Delaware, Greene, Monroe and Seneca linked to Ohio, Franklin to Virginia, Montgomery to Maryland, Orange to California and Wyoming to Pennsylvania. All eight are fixed, and Monroe now links to its own New York portal. The fix also removed alternate links to out-of-state portals from the Wayne County row (Michigan and Ohio) and the Columbia County row (Wisconsin). Every link in the list was checked again on November 5.
- **If you used the old numbers:** If you used the list for any of those eight counties before November 5, 2026, the data you found came from the other state. If you followed an alternate link for Wayne or Columbia County, it also went to another state. Use the links in the list now.
- **Who it affects:** Anyone who used the portal list for those ten counties.
- **More detail:** [The portal list](https://betanyc.github.io/grounding-ai-with-ny-open-data/resources/ny-open-data-portals.html) · [The fix](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/25)

## 2026-10-23: Every prompt in the user journeys checked, and real results added

- **Tags:** Site
- **What changed:** The guide to what each BetaNYC connector can answer now matches what each one can do today, and adds MTA subway alerts. Each connector and each multi-step example now has a "Run it" box that plays back a real answer, run on October 23, 2026.
- **More detail:** [User journeys](https://betanyc.github.io/grounding-ai-with-ny-open-data/guides/user-journeys.html) · [Checked against the tools](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/23) · [Real results](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/24)

## 2026-10-20: Decode a Council hearing yourself

- **Tags:** Site
- **What changed:** A new step-by-step guide shows how anyone can turn a NYC Council hearing into a searchable transcript the way BetaNYC did, in 11 steps, with what is free and what costs money.
- **More detail:** [The guide](https://betanyc.github.io/grounding-ai-with-ny-open-data/guides/council-hearings/decode-a-council-hearing.html) · [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/21)

## 2026-10-20: The hearing pipeline page described more than the record showed

- **Tags:** Site, Correction
- **What changed:** The page on how BetaNYC turns a Council hearing into a transcript, published the night before, described all nine stages as if they had run for both hearings. They ran for the October 16 hearing; the October 5 hearing had no list of key terms and no panel timeline. The page also now says that AI assistants did the naming, clean-up and name checks at BetaNYC's direction.
- **If you used the old numbers:** If you described BetaNYC's process from this page between October 19 and the morning of October 20, 2026, check what you wrote against the page now, especially for the October 5 hearing. No figure on the page changed.
- **More detail:** [The pipeline page](https://betanyc.github.io/grounding-ai-with-ny-open-data/guides/council-hearings/hearing-transcripts-pipeline.html) · [The fix](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/21)

## 2026-10-19: Four decks checked again, and a page on the hearing pipeline

- **Tags:** Site
- **What changed:** Every figure in four slide decks was run again on October 19, 2026, after the budget connector changed to the Council's discretionary funding disclosure. A new one-page visual shows how BetaNYC turns a Council hearing into a published transcript, and the training links now go to real pages.
- **More detail:** [Deck pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/19) · [Pipeline page](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/18) · [Training links](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/20)

## 2026-10-19: Two decks misdescribed Admin Code § 2-102, and one understated BetaNYC's FY2026 Council funding

- **Tags:** Site, Data, Correction
- **What changed:** The CUNY liberal arts deck, from July 29, 2026, and the AI Civics community of practice deck, from September 18, 2026, said Administrative Code section 2-102 names the official animals of New York City. It describes the City seal. The CUNY deck's closing slide also listed one of BetaNYC's own Council awards for FY2026, $25,000, where BetaNYC's FY2026 Council funding was $190,000 in all; it now lists all of it.
- **If you used the old numbers:** If you repeated the section 2-102 example from either deck, it is about the City seal, not an official animal. If you used the $25,000 figure as BetaNYC's FY2026 Council funding, use $190,000. That total cannot be found as one line: $140,000 is in the Council's discretionary funding disclosure, and the other $50,000 is BetaNYC's share of a $208,000 line for the Artificial Intelligence Community Engagement initiative, filed under the Fund for the City of New York with no Council Member named.
- **Who it affects:** Anyone who saw or reused these two decks between July 29 and October 19, 2026.
- **More detail:** [The fix](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/19)

## 2026-09-18: A deck for the AI Civics community of practice

- **Tags:** Site
- **What changed:** A new eight-minute slide deck, made for a talk at the AI Civics community of practice.
- **More detail:** [The deck's folder](https://betanyc.github.io/grounding-ai-with-ny-open-data/guides/community-of-practice/README.html) · [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/16)

## 2026-08-04: A guide for people who work in City government

- **Tags:** Site
- **What changed:** A new demo script, slide deck and page for agency staff, data teams and budget and procurement staff, using the City's own spending and contract records.
- **More detail:** [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/14)

## 2026-08-04: The City government guide gave the wrong date for its figures

- **Tags:** Site, Correction
- **What changed:** For about 25 minutes after it was published, the City government guide said its live figures were run on August 3, 2026, and that every figure was run live that morning. They were run on August 4, and three figures came from earlier work, with their own dates in the guide's table of sources. No figure changed.
- **If you used the old numbers:** The figures are the same. If you cited the date, use August 4, 2026, and use the dates in the table of sources for the three older figures.
- **More detail:** [The fix](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/15)

## 2026-07-30: The website opens

- **Tags:** Site
- **What changed:** The guides became a website at betanyc.github.io, in the same look as the slide decks, with a page for each audience.
- **More detail:** [The website](https://betanyc.github.io/grounding-ai-with-ny-open-data/) · [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/12)

## 2026-07-30: Two Checkbook claims in the Reinvent Albany material were wrong

- **Tags:** Data, Correction
- **What changed:** From July 21 to July 30, 2026, the Reinvent Albany script said a bot-protection layer in front of checkbooknyc.com blocked automated requests, and that a prime-expense registration date was not exposed through Checkbook's public API. The block that remained after the office's fix was BetaNYC's own, for going over an unpublished limit of one request per second, fixed in nyc-checkbook-mcp 1.6.0. The Comptroller's office told us the registration date is exposed, as a response field.
- **If you used the old numbers:** Do not say the City or the Comptroller blocked BetaNYC's access to Checkbook, and do not say the registration date is unavailable. The one-request-per-second limit is not published on checkbooknyc.com, and the 20,000-record limit appears only on the API landing page. The Comptroller's office stated both on July 28, 2026.
- **Who it affects:** Anyone who used the Reinvent Albany script or repeated its account of Checkbook access.
- **More detail:** [The fix](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/11) · [Where it reached the site](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/12)

## 2026-07-29: A demo and deck for liberal arts educators

- **Tags:** Site
- **What changed:** A new demo script and slide deck for college faculty in the liberal arts and general education, with every query tried first.
- **More detail:** [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/10)

## 2026-07-27: A deck for Council District 4

- **Tags:** Site
- **What changed:** A slide deck for a demo with the Council Member for District 4, where each part compares a web search with an answer from a connector.
- **More detail:** [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/8)

## 2026-07-22: Guides on public records requests and state campaign finance

- **Tags:** Site
- **What changed:** Two new guides: how to research City contracts with a public records request, with a worked example, and how to work with New York State campaign finance data, including a join between districts that the data does not support.
- **More detail:** [Records requests](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/7) · [Campaign finance](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/6)

## 2026-07-22: Four claims in the State Senate District 59 demo were wrong

- **Tags:** Site, Correction
- **What changed:** From July 21 to the morning of July 22, 2026, the demo script for State Senate District 59 made four wrong claims. It said District 59 is missing from a broadband file because the file is older than the district; the district existed then, and it is missing because the file covers New York City districts only. It also misdescribed what one connector setting and one result field do, and presented a broadband bill as an answer to a prompt it did not answer.
- **If you used the old numbers:** If you repeated the script's explanation of the broadband file, the file covers New York City districts only. If you set aside a figure because the script said its `is_sample` flag made it meaningless, the figure was correct. The script now describes the setting and the field as they work, and labels the broadband bill as the result of a separate search.
- **More detail:** [The fix](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/5)

## 2026-07-21: Wrong figures in the Council district and Reinvent Albany demos

- **Tags:** Data, Correction
- **What changed:** For about 12 hours on July 21, 2026, the demo scripts for Council Districts 4 and 10 gave discretionary funding totals that were too low: District 4 had 77 awards, $1,538,000, not 40 awards, $1,148,000; District 10 had 105 awards, $2,165,000, not 12 awards, $960,000. The District 4 script also said Council Member Keith Powers "does not appear at all" in the funding data; in fact the answer depends on the fiscal year. In the Reinvent Albany script, the list of FY2026 budget rescissions stopped at 50 rows, partway through the alphabet.
- **If you used the old numbers:** Use 77 awards and $1,538,000 for District 4, 105 awards and $2,165,000 for District 10, and 4 awards and $90,000, not 2 and $50,000, for District 10's digital equity awards. In July, searching the FY2026 funding data for "Powers" returned both Keith Powers and Council Member Brooks-Powers, summed into one total; for FY2027 it returned only Brooks-Powers. The Reinvent Albany rescissions list was not the full FY2026 set, so do not use a copy of it as complete. When a count equals the number of rows you asked for, ask for more before you trust it.
- **Who it affects:** Anyone who used the District 4, District 10 or Reinvent Albany scripts on July 21, 2026.
- **More detail:** [The fix](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/4)

## 2026-07-21: Demo scripts for educators, state legislators and good-government groups

- **Tags:** Site
- **What changed:** New demo scripts for three audiences, starting with State Senate District 59.
- **More detail:** [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/3)

## 2026-07-16: What each connector can answer, and demos by place

- **Tags:** Site
- **What changed:** A guide to sample questions for each BetaNYC connector and for New York's open data catalogs, with examples that chain several together. Demo scripts for a community board and for Council districts, with a template to copy. The guides are now licensed CC BY-SA 4.0, with a statement on how BetaNYC uses AI.
- **More detail:** [User journeys](https://betanyc.github.io/grounding-ai-with-ny-open-data/guides/user-journeys.html) · [Pull request](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/2) · [License](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/pull/1)

## 2026-07-06: The guides start

- **Tags:** Site, Data
- **What changed:** The repository started with guides to connecting an AI assistant to New York City and State open data, and a directory of county and city open data portals in New York.
- **More detail:** [The first commit](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/commit/6b6360a) · [The portal directory](https://github.com/BetaNYC/grounding-ai-with-ny-open-data/commit/d575bc7)
