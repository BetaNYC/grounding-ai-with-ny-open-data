---
status: DRAFT
---

# NY county/municipal open data portal directory

> **DRAFT.** First research pass completed 2026-07-06 per [`research-plan-ny-open-data-portals.md`](research-plan-ny-open-data-portals.md). Covers all 57 non-NYC counties plus independent cities over ~50,000 population. Several entries are flagged **UNCONFIRMED** below — pending a manual browser check before this is cited externally. See [Known gaps and caveats](#known-gaps-and-caveats) before relying on any single row.

**Report generated:** 2026-07-06
**Data current as of:** 2026-07-06

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
| City of Albany | Capital Region | openAlbany | https://data.albanyny.gov/ | Socrata (now Tyler Technologies) | Y | Independently run, separate from the county's ArcGIS Hub. Also has a separate PD data portal and a city GIS Hub for spatial layers. |
| Albany County | Capital Region | Albany County NY Open Data | https://albany-county-ny-open-data-albcountygis.hub.arcgis.com/ | ArcGIS Hub | Y | Run by County GIS Coordinator (Real Property Tax Services). |
| Allegany County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | Parcel search + map viewer only. A same-named "Allegheny County" Hub exists but is PA/MD — confirmed a different jurisdiction, excluded. |
| Broome County | Southern Tier | Broome County GIS Portal | https://gis.broomecountyny.gov/website/gisweb/portal.htm | Esri (map viewer, not Hub) | N | Interactive viewer + PDF library; no dataset catalog. |
| City of Buffalo | Western NY (Finger Lakes + WNY) | Open Data Buffalo | https://data.buffalony.gov/ | Socrata | Y | Verified via HTTP headers (`X-Socrata-Region`, Socrata CDN assets). 600+ datasets. |
| Cattaraugus County | Western NY (Finger Lakes + WNY) | Cattaraugus County GIS Hub | https://cattaraugus-county-gis-hub-cattco.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed live. |
| Cayuga County | Central NY | No dedicated portal | — | — | N | Embedded map viewer only; raw ArcGIS REST MapServer endpoints exist but no catalog UI ties them together. |
| Chautauqua County | Western NY (Finger Lakes + WNY) | No catalog UI | https://maps.chautauquacounty.com/server/rest/services | Raw ArcGIS REST Services (no Hub front end) | Partial | REST endpoints are technically machine-readable but there's no catalog UI to browse them. |
| Chemung County | Southern Tier | GIS Mapping Data page | https://chemungcountyny.gov/1382/GIS-Mapping-Data | Custom + Schneider/Beacon parcel viewer | N | No Hub/Socrata catalog found. |
| Chenango County | Southern Tier | Online GIS Information page | https://www.chenangocountyny.gov/323/Online-GIS-Information | Schneider Geospatial (paid subscription) | N | Primary access is a ~$275/yr subscription product. |
| Clinton County | North Country | No portal found | https://www.clintoncountyny.gov/planning/gis-map | ArcGIS Online (individual viewer items) | N | Individual web-app viewers exist, but no county-branded ArcGIS Hub catalog domain. |
| Columbia County | Capital Region | Columbia County Geo-Data | https://geodata-cc-ny.opendata.arcgis.com/ | ArcGIS Hub | Y | Confirmed live (Building Footprints, NYS Orthophotos 2021, 60+ layers). Run by County Planning Dept. A second hub, "OpenData - Columbia County Land Information Department" (`opendata-cclid.opendata.arcgis.com`), may be a distinct departmental portal — **UNCONFIRMED**. |
| Cortland County | Central NY | Cortland County GIS Portal | https://cortland-county-gis-portal-cortlandplanning.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed via DCAT-US feed — 51 datasets, though several have unfilled template placeholders in their metadata. |
| Delaware County | Southern Tier | Delaware County GIS Data Download | https://gisdata-delco.hub.arcgis.com/ | ArcGIS Hub | Y | Distinct from Delaware County OH/PA/State-of-Delaware portals — confirmed NY. |
| Dutchess County | Hudson Valley | Dutchess County GIS Open Data | https://opendata-dcny.hub.arcgis.com/ | ArcGIS Hub | Y | Also maintains a separate, non-downloadable "Data Catalog" metadata page. |
| Erie County | Western NY (Finger Lakes + WNY) | No confirmed catalog | https://www3.erie.gov/gis/ | Custom/Esri viewer | N | Map-and-download page, not a structured catalog. County data instead flows into the state's Health Data NY / data.ny.gov. |
| Essex County | North Country | No portal found (false positive caught) | https://essex-gis.co.essex.ny.us/ | Esri ArcGIS Server (parcel viewer) | N | **Caution:** a real-looking `data-essexcounty.opendata.arcgis.com` catalog exists but belongs to Essex County, **Ontario, Canada** — confirmed false positive, excluded. |
| Franklin County | North Country | Franklin County GIS | https://data-franklincova.opendata.arcgis.com/ | ArcGIS Hub | Y | **UNCONFIRMED**: dataset content (Adirondack-lakes parcels) strongly suggests NY, but the "cova" subdomain fragment is unexplained and page content couldn't be directly confirmed (JS-rendered, blocked WebFetch). Recommend manual confirmation before citing. |
| Fulton County | Southern Tier | No portal found | — | — | N | Schneider (SDG) parcel-search viewer only. Search results initially confused with Fulton County GA/IL/IN — confirmed those are separate. |
| Genesee County | Western NY (Finger Lakes + WNY) | Genesee County GIS Data | https://gis-data-cogeneseeny.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed live. |
| Greene County | Capital Region | Greene County GIS Hub | https://gishub-gimsoh29.opendata.arcgis.com/ | ArcGIS Hub | Y | Confirmed live (Zip Codes, tax map boundaries, road centerline). Separate ArcGIS Server also live confirming REST API. |
| Hamilton County | North Country | No portal found | https://www.hamcomaps.net/ | Unclear (unconfirmed platform) | N | Smallest county in NY (~4,800 pop); only a parcel/tax map viewer found. |
| Herkimer County | Central NY | No dedicated portal | — | — | N | Property data via Beacon/GIS Cloud viewer only. |
| Jefferson County | North Country | No portal found | https://www.jeffcountymaps.com/ | ArcGIS Server (custom viewer) | N | County-run parcel/tax map viewer only; also on the DANC regional viewer. |
| Lewis County | North Country | No portal found | https://lewiscountyny.giscloud.com/ | GIS Cloud (proprietary viewer) | N | Layered map application, not a dataset catalog. |
| Livingston County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | ArcGIS Web AppViewer apps only; portal home page returned HTTP 403 on automated check — not confirmed dead, just unverifiable by fetch. |
| Madison County | Central NY | No dedicated portal | — | — | N | Static PDF maps + paid data-request process only. |
| Monroe County | Western NY (Finger Lakes + WNY) | Monroe County GIS Hub | https://gishub-monroegis.hub.arcgis.com/ | ArcGIS Hub | Y | CSV/KML/Zip/GeoJSON/GeoTIFF/PNG downloads + REST API per layer. |
| Montgomery County | Southern Tier | Montgomery County GIS Open Data | https://opendata-mcgov-gis.hub.arcgis.com/ | ArcGIS Hub | Y | **UNCONFIRMED**: at least four visually similar URLs surfaced, several belonging to Montgomery County PA (the "montcopa" ones). This entry was picked based on "mcgov" naming and Fonda-area content signals — recommend a manual click-through before citing. |
| Mount Vernon (city) | NYC Metro / Long Island | No portal found | — | — | N | A page titled "OpenGov" is **not** the OpenGov Inc. product — confirmed it's a general city-news page, not a data catalog. |
| Nassau County | NYC Metro / Long Island | Open Nassau (+ Open Payroll/Budget/Checkbook) | https://opendata.nassaucountyny.gov/ | Socrata | Y | Run by the Comptroller's office, not the County Executive. Multiple separate Socrata sub-portals rather than one unified catalog (also opennassau, openpayroll, openbudget, opencheckbook subdomains). |
| New Rochelle (city) | NYC Metro / Long Island | No portal found | — | — | N | GIS map viewer only (vendor-hosted); relies on Westchester County GeoHub for county-level layers. |
| Niagara County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | Only ArcGIS Web AppViewer/Experience map apps found, not a browsable catalog. |
| Oneida County | Central NY | No dedicated portal | — | — | N | Links to individual map viewers + Beacon property lookup, not a centralized catalog. |
| Onondaga County | Central NY | No dedicated portal | — | — | N | GIS Division offers a map viewer only; individual datasets exist as scattered items on generic hub.arcgis.com, not a county-branded catalog. |
| Ontario County | Western NY (Finger Lakes + WNY) | Ontario County GIS Mapping Center | https://ontario-county-gis-mapping-center-ontariocony.hub.arcgis.com/ | ArcGIS Hub | Y | County site confirms data available "via ArcGIS REST API." |
| Orange County | Hudson Valley | Orange County Open GIS Data Portal | https://data-ocpw.opendata.arcgis.com/ | ArcGIS Hub | Y | A second, possibly overlapping hub instance also exists (`data-orangecountygis.hub.arcgis.com`) — **UNCONFIRMED** which is canonical. |
| Orleans County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | Only an interactive map viewer + planning-board referral webmap. |
| Oswego County | Central NY | Oswego County Data / GIS | https://data-oswegogis.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed via DCAT-US feed — 26 datasets (streets, orthoimagery, basemaps, directory). |
| Otsego County | Southern Tier | Otsego County GIS | https://otsego-county-gis-otsegocountyny.hub.arcgis.com/ | ArcGIS Hub | Y | FEMA flood data, Marcellus Shale, school district data, NRI. |
| Putnam County | NYC Metro / Long Island | Putnam County, NY | https://data-pcny.opendata.arcgis.com/ | ArcGIS Hub | Y | Confirmed live with real datasets (Municipal Boundary, Tax Parcels, School Districts). |
| Rensselaer County | Capital Region | No dedicated portal | — | — | N | County GIS page offers PDF maps only; parcel data flows through the state's NYS GIS Clearinghouse (data.gis.ny.gov) instead of a county-run portal. |
| City of Rochester | Western NY (Finger Lakes + WNY) | DataROC | https://data.cityofrochester.gov/ | ArcGIS Hub | Y | **Notable finding:** Rochester is commonly assumed to run Socrata, but direct HTML inspection this session shows ArcGIS/Esri markers with no Socrata references — appears to have migrated platforms at an undetermined date. 100+ datasets, apps, and story maps. |
| Rockland County | NYC Metro / Long Island | Rockland County GIS Portal | https://www.rocklandgis.com/ | ArcGIS Enterprise (self-hosted Portal) | Partial | A gallery of map applications, not a curated dataset-download catalog. Borderline API classification — **UNCONFIRMED**, recommend a direct check. |
| Saratoga County | Capital Region | No dedicated portal | — | — | N | Parcel/map viewer + Assessment Database only, no catalog. |
| City of Schenectady | Capital Region | **UNCONFIRMED** | http://www.cityofschenectady.gov/605/Open-Data-Portal | Unclear | N (as verified) | The city's own page links only to PDF reports. A widely-cited "portal" traces back to Rochester's ArcGIS Hub namespace — likely a stale/orphaned document, not an independent Schenectady catalog. **Do not cite as confirmed** without a direct browser check. |
| Schenectady County | Capital Region | No dedicated county-level portal | — | — | N | GIS work runs through SIMS (simsgis.org); no county catalog. See City of Schenectady above — commonly conflated with the county. |
| Schoharie County | Capital Region | No portal found | — | — | N | Parcel viewer only. |
| Schuyler County | Southern Tier | GIS/Shapefile pages | http://www.schuylercountyny.gov/1066/GIS-Shapefile | Custom static pages + Beacon | N | Shapefile downloads via static pages, not a searchable catalog. |
| Seneca County | Western NY (Finger Lakes + WNY) | Seneca County GeoLibrary | https://portal-senecacountygis.hub.arcgis.com/ | ArcGIS Hub | Y | Individual dataset pages (e.g., parcels) confirmed with CSV/KML/GeoJSON + API options. |
| St. Lawrence County | North Country | No portal found | https://maps.dancgis.org/ima/?IMA=St.+Lawrence | DANC regional map viewer (custom/Esri) | N | Shared regional Internet Mapping Application with Jefferson and Lewis counties — a viewer, not a catalog. |
| Steuben County | Southern Tier | Steuben County GIS | https://steubencounty-scnygis.opendata.arcgis.com/ | ArcGIS Hub | Y | CSV/KML/Zip/GeoJSON/GeoTIFF/PNG downloads; tax parcels, 911, farmland protection, flood data. |
| Suffolk County | NYC Metro / Long Island | Suffolk County Open Data | https://opendata.suffolkcountyny.gov/ | ArcGIS Hub | Y | Live, browsable catalog: Budget & Finance, Housing, Environment, Public Safety, GIS categories. |
| Sullivan County | Hudson Valley | Sullivan County GIS Open Data | https://gis2017-04-13t155717567z-sullconygiso.opendata.arcgis.com/ | ArcGIS Hub | Y | Unusual auto-generated subdomain but consistently referenced; underlying ArcGIS Server also directly reachable. |
| City of Syracuse | Central NY | Open Data Syracuse | https://data.syr.gov/ | ArcGIS Hub | Y | Confirmed via DCAT-US JSON feed — 5 real, actively maintained datasets (Public Art, Vacant Properties, Parking Violations, Rental Registry, Code Violations). |
| Tioga County | Southern Tier | Tioga County One Map | https://tioga-county-one-map-tiogacountyny.hub.arcgis.com/ | ArcGIS Hub | Y | Datasets include parcels, roads, hydro, land use, gas well/lease data. **Note:** search results also surface Tioga County, Pennsylvania's separate portal — confirmed this entry is the NY instance via subdomain. |
| Tompkins County | Southern Tier | Tompkins County Open Data Portal | https://tcdata-tompkinscounty.opendata.arcgis.com/ | ArcGIS Hub | Y | Broader than pure GIS — election districts, legislative boundaries; actively maintained (2026 data present). |
| City of Troy | Capital Region | No portal found | — | — | N | Only static PDF maps; no catalog, no API. |
| Ulster County | Hudson Valley | GIS Data (Dept. of Information Services) | https://www.ulstercountyny.gov/Departments/Information-Services/GIS-Services/GIS-Data | Custom static page (not Hub/CKAN/Socrata) | N | Static list of zipped shapefile downloads. A separate ArcGIS Server REST directory exists but returned 403 to automated fetch and isn't a unified catalog. The regional outlier — no Hub instance. |
| City of Utica | Central NY | No dedicated portal | — | — | N | Web viewer apps + Image Mate Online only. |
| Warren County | Capital Region | Warren County NY GIS | https://warren-county-gis-warrencountyny.hub.arcgis.com/ | ArcGIS Hub | Y | Also cross-listed on the NYS GIS Clearinghouse. |
| Washington County | Capital Region | No open data catalog | https://gis.washingtoncountyny.gov/webmap/ | Esri web map (viewer only) | N | **Caution:** searches for "Washington County open data" strongly surface Washington County, **Wisconsin**'s portal — a confirmed false-positive to exclude. |
| Wayne County | Western NY (Finger Lakes + WNY) | Open Data Portal (Wayne County, NY) | https://gis.co.wayne.ny.us/portal/apps/sites/#/wcgis/search?collection=Dataset | ArcGIS Enterprise (self-hosted Portal, per the county's own official page) | Y | The county's official page (waynecountyny.gov/815/Open-Data-Portal) links to this self-hosted instance. Two other candidate cloud-Hub URLs also surfaced (`data-waynecountygis.opendata.arcgis.com`, `data-wayne.opendata.arcgis.com`) — likely older/parallel instances; the county's own link is treated as canonical here. |
| Westchester County | NYC Metro / Long Island | Westchester GeoHub v2 | https://gis.westchestercountyny.gov/ | ArcGIS Hub/Enterprise | Y | GIS-first catalog (parcels, boundaries, infrastructure) — no budget/payroll/311-style civic datasets found. A second, possibly legacy Hub instance also surfaced (`datahub-wcgis.opendata.arcgis.com`) — **UNCONFIRMED** which is canonical. |
| White Plains (city) | NYC Metro / Long Island | No portal found | — | — | N | Relies on Westchester County GeoHub. |
| Wyoming County | Western NY (Finger Lakes + WNY) | Wyoming County ArcGIS Hub | https://www-wyomingcounty-wycopa.opendata.arcgis.com/ | ArcGIS Hub | Y | CSV/KML/Zip/GeoJSON/GeoTIFF/PNG + GeoServices/WMS/WFS API. |
| Yates County | Western NY (Finger Lakes + WNY) | No portal found | — | — | N | ArcGIS Web AppViewer only, not a browsable catalog. |
| Yonkers (city) | NYC Metro / Long Island | No general portal found | — | — | N | Runs Image Mate Online for property/assessment records only, not a general catalog. |

---

## Known gaps and caveats

This directory was compiled from six parallel regional research passes plus one targeted follow-up (Wayne County). Read this section before citing any single row externally.

1. **Verification method.** Most ArcGIS Hub/opendata.arcgis.com pages are JavaScript-rendered and returned only thin content or page titles to automated fetch tools. Platform and dataset confirmations mostly rely on: (a) DCAT-US JSON feed endpoints (`/api/feed/dcat-us/1.1.json`) where available — the strongest evidence used, since it lists real dataset counts; (b) HTTP header/HTML-marker fingerprinting (e.g., Socrata's `X-Socrata-Region` header, `socrata.com` footer links, ArcGIS/Esri branding strings); (c) search-result snippets describing specific dataset names. None of this substitutes for a human clicking through the live page. A live browser check (Claude in Chrome) was available but not used broadly this session — it requires selecting among multiple connected browser profiles, a choice better made once, deliberately, rather than repeatedly mid-research.

2. **Rows marked UNCONFIRMED** need a direct manual check before being cited in any public-facing material: Westchester County (dual Hub instance), Rockland County (API classification), Orange County (dual Hub instance), Columbia County (dual Hub instance — Planning vs. Land Information Dept.), City of Schenectady (likely-stale cross-referenced document), Franklin County (subdomain naming is unexplained), Montgomery County (four visually similar candidate URLs, several belonging to Montgomery Co. PA).

3. **Cross-state name collisions actively caught and excluded:** Essex County NY vs. Essex County, Ontario (Canada); Washington County NY vs. Washington County, Wisconsin; Allegany County NY vs. Allegheny County PA/MD; Tioga County NY vs. Tioga County PA; Fulton County NY vs. Fulton County GA/IL/IN; Delaware County NY vs. Delaware County OH/PA and the State of Delaware. This class of error is easy to reproduce in a follow-up search — worth double-checking if this directory is regenerated later.

4. **"No portal found" is common, not rare.** Roughly half of NY's counties have no browsable open-data catalog — most rely on a bare GIS map-viewer app (ArcGIS Web AppViewer/Experience Builder), a paid subscription parcel-lookup product (Schneider/Beacon, SDG), or the state's own NYS GIS Clearinghouse (data.gis.ny.gov) as their de facto public data-sharing mechanism. These are documented in each row's Notes rather than treated as a research failure.

5. **The state-level Clearinghouse is not counted as county coverage.** Rensselaer, Saratoga, Schenectady County, and Schoharie all rely on the NYS GIS Clearinghouse for their public GIS layers. That's a state platform aggregating county-submitted data, not a county-run portal — marked "No portal found" here on that basis. Reasonable people could count this differently; flagging the judgment call.

6. **Regional grouping note.** Regions in the table above roughly follow common colloquial NY regional names, not a single official standard — Columbia and Greene counties, for instance, are geographically Hudson Valley but grouped once under Capital Region (matching NYS's own Regional Economic Development Council convention) to avoid double-counting real duplicates found across two independent research passes.

## Next steps

- Manual browser verification of the UNCONFIRMED rows above (a good candidate for a focused `/deep-research` or a quick Claude-in-Chrome pass once a browser profile is chosen)
- Consider whether the NYS GIS Clearinghouse deserves its own row as a statewide fallback resource
- Revisit "no portal found" counties periodically — GIS/open-data adoption in smaller counties changes over time
