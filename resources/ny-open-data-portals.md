---
status: DRAFT
---

# NY county/municipal open data portal directory

> **DRAFT.** First research pass completed 2026-07-06 per [`research-plan-ny-open-data-portals.md`](research-plan-ny-open-data-portals.md). Covers all 57 non-NYC counties plus independent cities over ~50,000 population. Several entries are flagged **UNCONFIRMED** below — pending a manual browser check before this is cited externally. See [Known gaps and caveats](#known-gaps-and-caveats) before relying on any single row.

**Report generated:** 2026-07-06
**Data current as of:** 2026-07-06
**Last revised:** 2026-11-05 — URL audit: every URL re-checked; 8 out-of-state rows corrected, dead portals fixed. Audit record: BetaNYC workspace `team/research/2026-11-05-ny-portal-directory-url-audit.md`.

Directory of open data portals run by New York State counties and independent municipalities. NYC is out of scope here — see [NYC Open Data](https://data.cityofnewyork.us) and BetaNYC's [purpose-built MCPs](../README.md) instead.

**A note on sorting:** plain Markdown tables have no interactive sort — GitHub doesn't add one either. The table below is sorted alphabetically (A→Z) by place name as a static substitute; a `City of X` entry sorts next to its county (e.g. "City of Albany" sits beside "Albany County") rather than under "City." The **Region** column lets you filter visually if you want one area at a time.

## Legend

- **API? Y** — a machine-readable API is exposed (SODA, ArcGIS REST/GeoServices, WMS/WFS, CKAN API, etc.)
- **API? N** — download-only (CSV/PDF/shapefile) or a map-viewer app with no queryable catalog interface
- **No portal found** — a reasonable search turned up no true open-data catalog. Listed honestly, not omitted. Most of these counties still have *some* GIS web-mapping presence (a parcel viewer, a static shapefile download page) — see each row's Notes.

---

## Directory

| County / Municipality | Region | Portal Name | URL | Platform | API? | Notes |
|---|---|---|---|---|---|---|
| City of Albany | Capital Region | openAlbany (offline) | — | Socrata (retired) | N | `data.albanyny.gov` no longer resolves (NXDOMAIN, Audit 2026-11-05). WAMC (2026-08-13) reports OpenAlbany has been offline since about mid-January 2026; a Local Law "K" of 2026 is proposed. The city GIS Hub and the separate PD portal were not re-checked. |
| Albany County | Capital Region | Albany County NY Open Data | https://albany-county-ny-open-data-albcountygis.hub.arcgis.com/ | ArcGIS Hub | Y | Run by County GIS Coordinator (Real Property Tax Services). |
| Allegany County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | Parcel search + map viewer only. A same-named "Allegheny County" Hub exists but is PA/MD — confirmed a different jurisdiction, excluded. |
| Broome County | Southern Tier | Broome County GIS Portal | https://gis.broomecountyny.gov/website/gisweb/portal.htm | Esri (map viewer, not Hub) | N | Interactive viewer + PDF library; no dataset catalog. |
| City of Buffalo | Western NY (Finger Lakes + WNY) | Open Data Buffalo | https://data.buffalony.gov/ | Socrata | Y | Verified via HTTP headers (`X-Socrata-Region`, Socrata CDN assets). 139 datasets (355 assets, Socrata Discovery API, Audit 2026-11-05). |
| Cattaraugus County | Western NY (Finger Lakes + WNY) | Cattaraugus County GIS Hub | https://cattaraugus-county-gis-hub-cattco.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed live, NY org. The Hub catalog returns 0 items to the Hub API; the county's ArcGIS org has about 50 public feature services over REST (Audit 2026-11-05). |
| Cayuga County | Central NY | No dedicated portal | — | — | N | Embedded map viewer only; raw ArcGIS REST MapServer endpoints exist but no catalog UI ties them together. |
| Chautauqua County | Western NY (Finger Lakes + WNY) | No catalog UI | https://maps.chautauquacounty.com/server/rest/services | Raw ArcGIS REST Services (no Hub front end) | Partial | REST endpoints are technically machine-readable but there's no catalog UI to browse them. |
| Chemung County | Southern Tier | GIS Mapping Data page | https://chemungcountyny.gov/1382/GIS-Mapping-Data | Custom + Schneider/Beacon parcel viewer | N | No Hub/Socrata catalog found. |
| Chenango County | Southern Tier | Online GIS Information page | https://www.chenangocountyny.gov/323/Online-GIS-Information | Schneider Geospatial (paid subscription) | N | Primary access is a ~$275/yr subscription product. |
| Clinton County | North Country | No portal found | https://www.clintoncountyny.gov/planning/gis-map | ArcGIS Online (individual viewer items) | N | Individual web-app viewers exist, but no county-branded ArcGIS Hub catalog domain. |
| Columbia County | Capital Region | Columbia County Geo-Data | https://geodata-cc-ny.opendata.arcgis.com/ | ArcGIS Hub | Y | Confirmed live (Building Footprints, NYS Orthophotos 2021, 60+ layers). Run by County Planning Dept. `opendata-cclid.opendata.arcgis.com` is Columbia County, **Wisconsin**; excluded (Audit 2026-11-05). |
| Cortland County | Central NY | Cortland County GIS Portal | https://cortland-county-gis-portal-cortlandplanning.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed via DCAT-US feed — 51 datasets, though several have unfilled template placeholders in their metadata. |
| Delaware County | Southern Tier | No portal found | — | — | N | Previously listed `gisdata-delco.hub.arcgis.com` is Delaware County, **Ohio** (publisher and emails `co.delaware.oh.us`); excluded (Audit 2026-11-05). No NY replacement found on a light search. |
| Dutchess County | Hudson Valley | Dutchess County GIS Open Data | https://opendata-dcny.hub.arcgis.com/ | ArcGIS Hub | Y | Also maintains a separate, non-downloadable "Data Catalog" metadata page. |
| Erie County | Western NY (Finger Lakes + WNY) | No confirmed catalog | https://www3.erie.gov/gis/ | Custom/Esri viewer | N | Map-and-download page, not a structured catalog. County data instead flows into the state's Health Data NY / data.ny.gov. |
| Essex County | North Country | No portal found (false positive caught) | https://essex-gis.co.essex.ny.us/ | Esri ArcGIS Server (parcel viewer) | N | **Caution:** a real-looking `data-essexcounty.opendata.arcgis.com` catalog exists but belongs to Essex County, **Ontario, Canada** — confirmed false positive, excluded. |
| Franklin County | North Country | No portal found | — | — | N | Previously listed `data-franklincova.opendata.arcgis.com` is Franklin County, **Virginia**; excluded (Audit 2026-11-05). No NY replacement found on a light search. |
| Fulton County | Southern Tier | No portal found | — | — | N | Schneider (SDG) parcel-search viewer only. Search results initially confused with Fulton County GA/IL/IN — confirmed those are separate. |
| Genesee County | Western NY (Finger Lakes + WNY) | Genesee County GIS Data | https://gis-data-cogeneseeny.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed live. |
| Greene County | Capital Region | No portal found | https://gis.gcgovny.com/greenewebmap/ | Esri web map (viewer only) | N | Previously listed `gishub-gimsoh29.opendata.arcgis.com` is Greene County, **Ohio**; excluded (Audit 2026-11-05). |
| Hamilton County | North Country | No portal found | https://beacon.schneidercorp.com/Application.aspx?App=HamiltonCountyNY&PageType=Map | Schneider Beacon | N | Smallest county in NY (~4,800 pop); parcel/tax map viewer only. `www.hamcomaps.net` points at a deleted Azure web app; the county now uses Beacon (Audit 2026-11-05). |
| Herkimer County | Central NY | No dedicated portal | — | — | N | Property data via Beacon/GIS Cloud viewer only. |
| Jefferson County | North Country | No portal found | https://www.jeffersoncountyny.gov/gis-maps-property-search | Schneider Beacon (parcel search) | N | County parcel/tax map search only; also on the DANC regional viewer. `www.jeffcountymaps.com` points at a deleted Azure web app; the county page now links Beacon (Audit 2026-11-05). |
| Lewis County | North Country | No portal found | https://lewiscountyny.gov/departments/real-property/gis-mapping-web-application/ | Schneider Beacon | N | Map application, not a dataset catalog. The former GIS Cloud viewer says "disabled by the owner" (Audit 2026-11-05). |
| Livingston County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | ArcGIS Web AppViewer apps only; portal home page returned HTTP 403 on automated check — not confirmed dead, just unverifiable by fetch. |
| Madison County | Central NY | No dedicated portal | — | — | N | Static PDF maps + paid data-request process only. |
| Monroe County | Western NY (Finger Lakes + WNY) | MCGIS Hub | https://maps.monroecounty.gov/portal/apps/sites/#/mcgis | ArcGIS Enterprise (self-hosted Sites) | Y | Monroe County NY's own portal (Rochester-area extent, about 77 public feature services incl. parcels). Previously listed `gishub-monroegis.hub.arcgis.com` is Monroe County, **Ohio**; excluded (Audit 2026-11-05). |
| Montgomery County | Southern Tier | No portal found | https://www.montgomerycountyny.gov/web/sites/departments/realproperty/gis.asp | — | N | Previously listed `opendata-mcgov-gis.hub.arcgis.com` is Montgomery County, **Maryland**; excluded (Audit 2026-11-05). |
| Mount Vernon (city) | NYC Metro / Long Island | No portal found | — | — | N | A page titled "OpenGov" is **not** the OpenGov Inc. product — confirmed it's a general city-news page, not a data catalog. |
| Nassau County | NYC Metro / Long Island | Open Nassau (+ Open Payroll/Budget/Checkbook) | https://opendata.nassaucountyny.gov/ | Socrata | Y | Run by the Comptroller's office, not the County Executive. Multiple separate Socrata sub-portals rather than one unified catalog (also opennassau, openpayroll, openbudget, opencheckbook subdomains). |
| New Rochelle (city) | NYC Metro / Long Island | No portal found | — | — | N | GIS map viewer only (vendor-hosted); relies on Westchester County GeoHub for county-level layers. |
| Niagara County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | Only ArcGIS Web AppViewer/Experience map apps found, not a browsable catalog. |
| Oneida County | Central NY | No dedicated portal | — | — | N | Links to individual map viewers + Beacon property lookup, not a centralized catalog. |
| Onondaga County | Central NY | No dedicated portal | — | — | N | GIS Division offers a map viewer only; individual datasets exist as scattered items on generic hub.arcgis.com, not a county-branded catalog. |
| Ontario County | Western NY (Finger Lakes + WNY) | Ontario County GIS Mapping Center | https://ontario-county-gis-mapping-center-ontariocony.hub.arcgis.com/ | ArcGIS Hub | Y | County site confirms data available "via ArcGIS REST API." |
| Orange County | Hudson Valley | No general catalog found | — | — | N | Previously listed `data-ocpw.opendata.arcgis.com` is OC Public Works, Orange County, **California**, and `data-orangecountygis.hub.arcgis.com` is Orange County, **Virginia**; both excluded (Audit 2026-11-05). Topical NY hubs exist, e.g. https://openspace-ocnygis.hub.arcgis.com/. |
| Orleans County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | Only an interactive map viewer + planning-board referral webmap. |
| Oswego County | Central NY | Oswego County Data / GIS | https://data-oswegogis.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed via DCAT-US feed — 26 datasets (streets, orthoimagery, basemaps, directory). |
| Otsego County | Southern Tier | Otsego County GIS | https://otsego-county-gis-otsegocountyny.hub.arcgis.com/ | ArcGIS Hub | Y | FEMA flood data, Marcellus Shale, school district data, NRI. |
| Putnam County | NYC Metro / Long Island | Putnam County, NY | https://data-pcny.opendata.arcgis.com/ | ArcGIS Hub | Y | Confirmed live with real datasets (Municipal Boundary, Tax Parcels, School Districts). |
| Rensselaer County | Capital Region | No dedicated portal | — | — | N | County GIS page offers PDF maps only; parcel data flows through the state's NYS GIS Clearinghouse (data.gis.ny.gov) instead of a county-run portal. |
| City of Rochester | Western NY (Finger Lakes + WNY) | DataROC | https://data.cityofrochester.gov/ | ArcGIS Hub | Y | **Notable finding:** Rochester is commonly assumed to run Socrata, but direct HTML inspection this session shows ArcGIS/Esri markers with no Socrata references — appears to have migrated platforms at an undetermined date. 100+ datasets, apps, and story maps. |
| Rockland County | NYC Metro / Long Island | Rockland County GIS Portal | https://www.rocklandgis.com/portal/apps/sites/#/data | ArcGIS Enterprise (self-hosted Portal) | Partial | The portal now offers GIS data downloads (Audit 2026-11-05). REST/API access not yet checked (blocks automated requests) — **UNCONFIRMED** API classification. |
| Saratoga County | Capital Region | No dedicated portal | — | — | N | Parcel/map viewer + Assessment Database only, no catalog. |
| City of Schenectady | Capital Region | **UNCONFIRMED** | http://www.cityofschenectady.gov/605/Open-Data-Portal | Unclear | N (as verified) | The city's own page links only to PDF reports. A widely-cited "portal" traces back to Rochester's ArcGIS Hub namespace — likely a stale/orphaned document, not an independent Schenectady catalog. **Do not cite as confirmed** without a direct browser check. |
| Schenectady County | Capital Region | No dedicated county-level portal | — | — | N | GIS work runs through SIMS (simsgis.org); no county catalog. See City of Schenectady above — commonly conflated with the county. simsgis.org is login-gated (Audit 2026-11-05). |
| Schoharie County | Capital Region | No portal found | — | — | N | Parcel viewer only. |
| Schuyler County | Southern Tier | GIS/Shapefile pages | http://www.schuylercountyny.gov/1066/GIS-Shapefile | Custom static pages + Beacon | N | Shapefile downloads via static pages, not a searchable catalog. |
| Seneca County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | Previously listed `portal-senecacountygis.hub.arcgis.com` is Seneca County, **Ohio**; excluded (Audit 2026-11-05). No NY replacement found on a light search. |
| St. Lawrence County | North Country | No portal found | https://maps.dancgis.org/ima/?IMA=St.+Lawrence | DANC regional map viewer (custom/Esri) | N | Shared regional Internet Mapping Application with Jefferson and Lewis counties — a viewer, not a catalog. |
| Steuben County | Southern Tier | Steuben County GIS | https://steubencounty-scnygis.opendata.arcgis.com/ | ArcGIS Hub | Y | CSV/KML/Zip/GeoJSON/GeoTIFF/PNG downloads; tax parcels, 911, farmland protection, flood data. |
| Suffolk County | NYC Metro / Long Island | Suffolk County Open Data | https://opendata.suffolkcountyny.gov/ | ArcGIS Hub | Y | Live, browsable catalog: Budget & Finance, Housing, Environment, Public Safety, GIS categories. |
| Sullivan County | Hudson Valley | Sullivan County GIS Open Data | https://gis2017-04-13t155717567z-sullconygiso.opendata.arcgis.com/ | ArcGIS Hub | Y | Unusual auto-generated subdomain but consistently referenced; underlying ArcGIS Server also directly reachable. |
| City of Syracuse | Central NY | Open Data Syracuse | https://data.syr.gov/ | ArcGIS Hub | Y | 136 datasets (188 catalog items) via the Hub API (Audit 2026-11-05); earlier pass counted 5 in the DCAT feed. |
| Tioga County | Southern Tier | Tioga County One Map | https://tioga-county-one-map-tiogacountyny.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed NY by org name ("Tioga County NY") and `tiogacountyny.gov` emails. The Hub site lists no datasets (3 apps or StoryMaps); the county's ArcGIS org publishes about 166 public feature services over REST (Audit 2026-11-05). |
| Tompkins County | Southern Tier | Tompkins County Open Data Portal | https://tcdata-tompkinscounty.opendata.arcgis.com/ | ArcGIS Hub | Y | Broader than pure GIS — election districts, legislative boundaries; actively maintained (2026 data present). |
| City of Troy | Capital Region | No portal found | — | — | N | Only static PDF maps; no catalog, no API. |
| Ulster County | Hudson Valley | GIS Data (Dept. of Information Services) | https://www.ulstercountyny.gov/Departments/Information-Services/GIS-Services/GIS-Data | Custom static page (not Hub/CKAN/Socrata) | N | Static list of zipped shapefile downloads. A separate ArcGIS Server REST directory exists but returned 403 to automated fetch and isn't a unified catalog. The regional outlier — no Hub instance. |
| City of Utica | Central NY | No dedicated portal | — | — | N | Web viewer apps + Image Mate Online only. |
| Warren County | Capital Region | Warren County NY GIS | https://warren-county-gis-warrencountyny.hub.arcgis.com/ | ArcGIS Hub | Y | Also cross-listed on the NYS GIS Clearinghouse. |
| Washington County | Capital Region | No open data catalog | https://gis.washingtoncountyny.gov/webmap/ | Esri web map (viewer only) | N | **Caution:** searches for "Washington County open data" strongly surface Washington County, **Wisconsin**'s portal — a confirmed false-positive to exclude. |
| Wayne County | Western NY (Finger Lakes + WNY) | Open Data Portal (Wayne County, NY) | https://gis.co.wayne.ny.us/portal/apps/sites/#/wcgis/search?collection=Dataset | ArcGIS Enterprise (self-hosted Portal, per the county's own official page) | Y | The county's official page (waynecountyny.gov/815/Open-Data-Portal) links to this self-hosted instance (about 108 public feature services, NY extent). Two similarly named cloud Hubs are Wayne County, **Michigan** (`data-wayne`) and Wayne County, **Ohio** (`data-waynecountygis`); excluded (Audit 2026-11-05). |
| Westchester County | NYC Metro / Long Island | Westchester GeoHub v2 | https://gis.westchestercountyny.gov/ | ArcGIS Hub/Enterprise | Y | GIS-first catalog (parcels, boundaries, infrastructure; about 91 datasets) — no budget/payroll/311-style civic datasets found. `datahub-wcgis.opendata.arcgis.com` is a legacy site of the same county org; GeoHub v2 is canonical (Audit 2026-11-05). |
| White Plains (city) | NYC Metro / Long Island | No portal found | — | — | N | Relies on Westchester County GeoHub. |
| Wyoming County | Western NY (Finger Lakes + WNY) | No portal found | https://www.wyomingcountyny.gov/645/Geographic-Information-Systems-GIS | ArcGIS Online (individual apps) | N | County GIS page links only apps on `wyco.maps.arcgis.com`. The previously listed Hub (`www-wyomingcounty-wycopa`) matches the Wyoming County, **Pennsylvania** ArcGIS org and no longer exists (Audit 2026-11-05). |
| Yates County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | ArcGIS Web AppViewer only, not a browsable catalog. |
| Yonkers (city) | NYC Metro / Long Island | No general portal found | — | — | N | Runs Image Mate Online for property/assessment records only, not a general catalog. |

---

## Known gaps and caveats

This directory was compiled from six parallel regional research passes plus one targeted follow-up (Wayne County). Read this section before citing any single row externally.

1. **Verification method.** Most ArcGIS Hub/opendata.arcgis.com pages are JavaScript-rendered and returned only thin content or page titles to automated fetch tools. Platform and dataset confirmations mostly rely on: (a) DCAT-US JSON feed endpoints (`/api/feed/dcat-us/1.1.json`) where available — the strongest evidence used, since it lists real dataset counts; (b) HTTP header/HTML-marker fingerprinting (e.g., Socrata's `X-Socrata-Region` header, `socrata.com` footer links, ArcGIS/Esri branding strings); (c) search-result snippets describing specific dataset names. None of this substitutes for a human clicking through the live page. A live browser check (Claude in Chrome) was available but not used broadly this session — it requires selecting among multiple connected browser profiles, a choice better made once, deliberately, rather than repeatedly mid-research.

2. **Rows marked UNCONFIRMED** need a direct manual check before being cited in any public-facing material: Rockland County (API classification), City of Schenectady (likely-stale cross-referenced document), Cattaraugus County (Hub catalog empty to the API) and Tioga County (Hub lists apps only). The 2026-11-05 URL audit resolved Westchester, Orange, Columbia, Franklin and Montgomery.

3. **Cross-state name collisions.** Caught and excluded in the first pass: Essex County NY vs. Essex County, Ontario (Canada); Washington County NY vs. Washington County, Wisconsin; Allegany County NY vs. Allegheny County PA/MD; Tioga County NY vs. Tioga County PA; Fulton County NY vs. Fulton County GA/IL/IN. **Missed in the first pass and corrected by the 2026-11-05 URL audit:** Delaware (the listed portal *was* Delaware County, Ohio), Greene (Ohio), Monroe (Ohio), Seneca (Ohio), Franklin (Virginia), Montgomery (Maryland), Orange (California and Virginia), Wyoming (Pennsylvania), Wayne alternates (Michigan and Ohio), Columbia's CCLID alternate (Wisconsin). **Method rule:** verify every ArcGIS Hub by its DCAT feed's publisher name, contact email domain and `spatial` bounding box (NY ≈ lon −79.8 to −71.8, lat 40.5 to 45.0), never by its subdomain or slug.

4. **"No portal found" is common, not rare.** Roughly half of NY's counties have no browsable open-data catalog — most rely on a bare GIS map-viewer app (ArcGIS Web AppViewer/Experience Builder), a paid subscription parcel-lookup product (Schneider/Beacon, SDG), or the state's own NYS GIS Clearinghouse (data.gis.ny.gov) as their de facto public data-sharing mechanism. These are documented in each row's Notes rather than treated as a research failure.

5. **The state-level Clearinghouse is not counted as county coverage.** Rensselaer, Saratoga, Schenectady County, and Schoharie all rely on the NYS GIS Clearinghouse for their public GIS layers. That's a state platform aggregating county-submitted data, not a county-run portal — marked "No portal found" here on that basis. Reasonable people could count this differently; flagging the judgment call.

6. **Regional grouping note.** Regions in the table above roughly follow common colloquial NY regional names, not a single official standard — Columbia and Greene counties, for instance, are geographically Hudson Valley but grouped once under Capital Region (matching NYS's own Regional Economic Development Council convention) to avoid double-counting real duplicates found across two independent research passes.

## Next steps

- Manual browser verification of the UNCONFIRMED rows above (a good candidate for a focused `/deep-research` or a quick Claude-in-Chrome pass once a browser profile is chosen)
- Consider whether the NYS GIS Clearinghouse deserves its own row as a statewide fallback resource
- Revisit "no portal found" counties periodically — GIS/open-data adoption in smaller counties changes over time
