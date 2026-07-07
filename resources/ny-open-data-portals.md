---
status: DRAFT
---

# NY county/municipal open data portal directory

> **DRAFT.** First research pass completed 2026-07-06 per [`research-plan-ny-open-data-portals.md`](research-plan-ny-open-data-portals.md). Covers all 57 non-NYC counties plus independent cities over ~50,000 population. Several entries are flagged **UNCONFIRMED** below — pending a manual browser check before this is cited externally. See [Known gaps and caveats](#known-gaps-and-caveats) before relying on any single row.

**Report generated:** 2026-07-06
**Data current as of:** 2026-07-06

Directory of open data portals run by New York State counties and independent municipalities. NYC is out of scope here — see [NYC Open Data](https://data.cityofnewyork.us) and BetaNYC's [purpose-built MCPs](../README.md) instead.

## Legend

- **API? Y** — a machine-readable API is exposed (SODA, ArcGIS REST/GeoServices, WMS/WFS, CKAN API, etc.)
- **API? N** — download-only (CSV/PDF/shapefile) or a map-viewer app with no queryable catalog interface
- **No portal found** — a reasonable search turned up no true open-data catalog. Listed honestly, not omitted. Most of these counties still have *some* GIS web-mapping presence (a parcel viewer, a static shapefile download page) — see each row's Notes.

---

## NYC Metro / Long Island

| County / Municipality | Portal Name | URL | Platform | API? | Notes |
|---|---|---|---|---|---|
| Nassau County | Open Nassau (+ Open Payroll/Budget/Checkbook) | https://opendata.nassaucountyny.gov/ | Socrata | Y | Run by the Comptroller's office, not the County Executive. Multiple separate Socrata sub-portals rather than one unified catalog (also opennassau, openpayroll, openbudget, opencheckbook subdomains). |
| Suffolk County | Suffolk County Open Data | https://opendata.suffolkcountyny.gov/ | ArcGIS Hub | Y | Live, browsable catalog: Budget & Finance, Housing, Environment, Public Safety, GIS categories. |
| Westchester County | Westchester GeoHub v2 | https://gis.westchestercountyny.gov/ | ArcGIS Hub/Enterprise | Y | GIS-first catalog (parcels, boundaries, infrastructure) — no budget/payroll/311-style civic datasets found. A second, possibly legacy Hub instance also surfaced (`datahub-wcgis.opendata.arcgis.com`) — **UNCONFIRMED** which is canonical. |
| Rockland County | Rockland County GIS Portal | https://www.rocklandgis.com/ | ArcGIS Enterprise (self-hosted Portal) | Partial | A gallery of map applications, not a curated dataset-download catalog. Borderline API classification — **UNCONFIRMED**, recommend a direct check. |
| Putnam County | Putnam County, NY | https://data-pcny.opendata.arcgis.com/ | ArcGIS Hub | Y | Confirmed live with real datasets (Municipal Boundary, Tax Parcels, School Districts). |
| New Rochelle (city) | No portal found | — | — | N | GIS map viewer only (vendor-hosted); relies on Westchester County GeoHub for county-level layers. |
| Mount Vernon (city) | No portal found | — | — | N | A page titled "OpenGov" is **not** the OpenGov Inc. product — confirmed it's a general city-news page, not a data catalog. |
| White Plains (city) | No portal found | — | — | N | Relies on Westchester County GeoHub. |
| Yonkers (city) | No general portal found | — | — | N | Runs Image Mate Online for property/assessment records only, not a general catalog. |

## Hudson Valley

| County / Municipality | Portal Name | URL | Platform | API? | Notes |
|---|---|---|---|---|---|
| Orange County | Orange County Open GIS Data Portal | https://data-ocpw.opendata.arcgis.com/ | ArcGIS Hub | Y | A second, possibly overlapping hub instance also exists (`data-orangecountygis.hub.arcgis.com`) — **UNCONFIRMED** which is canonical. |
| Dutchess County | Dutchess County GIS Open Data | https://opendata-dcny.hub.arcgis.com/ | ArcGIS Hub | Y | Also maintains a separate, non-downloadable "Data Catalog" metadata page. |
| Ulster County | GIS Data (Dept. of Information Services) | https://www.ulstercountyny.gov/Departments/Information-Services/GIS-Services/GIS-Data | Custom static page (not Hub/CKAN/Socrata) | N | Static list of zipped shapefile downloads. A separate ArcGIS Server REST directory exists but returned 403 to automated fetch and isn't a unified catalog. The regional outlier — no Hub instance. |
| Sullivan County | Sullivan County GIS Open Data | https://gis2017-04-13t155717567z-sullconygiso.opendata.arcgis.com/ | ArcGIS Hub | Y | Unusual auto-generated subdomain but consistently referenced; underlying ArcGIS Server also directly reachable. |

*Note: Columbia and Greene counties are both geographically part of the Hudson Valley but grouped once under Capital Region below, matching NYS's own Regional Economic Development Council convention (both were independently reported by two research passes — this avoids double-counting the same real duplicate).*

## Capital Region

| County / Municipality | Portal Name | URL | Platform | API? | Notes |
|---|---|---|---|---|---|
| Albany County | Albany County NY Open Data | https://albany-county-ny-open-data-albcountygis.hub.arcgis.com/ | ArcGIS Hub | Y | Run by County GIS Coordinator (Real Property Tax Services). |
| Rensselaer County | No dedicated portal | — | — | N | County GIS page offers PDF maps only; parcel data flows through the state's NYS GIS Clearinghouse (data.gis.ny.gov) instead of a county-run portal. |
| Saratoga County | No dedicated portal | — | — | N | Parcel/map viewer + Assessment Database only, no catalog. |
| Schenectady County | No dedicated county-level portal | — | — | N | GIS work runs through SIMS (simsgis.org); no county catalog. See City of Schenectady below — commonly conflated with the county. |
| Schoharie County | No portal found | — | — | N | Parcel viewer only. |
| Warren County | Warren County NY GIS | https://warren-county-gis-warrencountyny.hub.arcgis.com/ | ArcGIS Hub | Y | Also cross-listed on the NYS GIS Clearinghouse. |
| Washington County | No open data catalog | https://gis.washingtoncountyny.gov/webmap/ | Esri web map (viewer only) | N | **Caution:** searches for "Washington County open data" strongly surface Washington County, **Wisconsin**'s portal — a confirmed false-positive to exclude. |
| Columbia County | Columbia County Geo-Data | https://geodata-cc-ny.opendata.arcgis.com/ | ArcGIS Hub | Y | Confirmed live (Building Footprints, NYS Orthophotos 2021, 60+ layers). Run by County Planning Dept. A second hub, "OpenData - Columbia County Land Information Department" (`opendata-cclid.opendata.arcgis.com`), may be a distinct departmental portal — **UNCONFIRMED**. |
| Greene County | Greene County GIS Hub | https://gishub-gimsoh29.opendata.arcgis.com/ | ArcGIS Hub | Y | Confirmed live (Zip Codes, tax map boundaries, road centerline). Separate ArcGIS Server also live confirming REST API. |
| City of Albany | openAlbany | https://data.albanyny.gov/ | Socrata (now Tyler Technologies) | Y | Independently run, separate from the county's ArcGIS Hub. Also has a separate PD data portal and a city GIS Hub for spatial layers. |
| City of Troy | No portal found | — | — | N | Only static PDF maps; no catalog, no API. |
| City of Schenectady | **UNCONFIRMED** | http://www.cityofschenectady.gov/605/Open-Data-Portal | Unclear | N (as verified) | The city's own page links only to PDF reports. A widely-cited "portal" traces back to Rochester's ArcGIS Hub namespace — likely a stale/orphaned document, not an independent Schenectady catalog. **Do not cite as confirmed** without a direct browser check. |

## Central NY

| County / Municipality | Portal Name | URL | Platform | API? | Notes |
|---|---|---|---|---|---|
| Onondaga County | No dedicated portal | — | — | N | GIS Division offers a map viewer only; individual datasets exist as scattered items on generic hub.arcgis.com, not a county-branded catalog. |
| City of Syracuse | Open Data Syracuse | https://data.syr.gov/ | ArcGIS Hub | Y | Confirmed via DCAT-US JSON feed — 5 real, actively maintained datasets (Public Art, Vacant Properties, Parking Violations, Rental Registry, Code Violations). |
| Oneida County | No dedicated portal | — | — | N | Links to individual map viewers + Beacon property lookup, not a centralized catalog. |
| City of Utica | No dedicated portal | — | — | N | Web viewer apps + Image Mate Online only. |
| Madison County | No dedicated portal | — | — | N | Static PDF maps + paid data-request process only. |
| Oswego County | Oswego County Data / GIS | https://data-oswegogis.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed via DCAT-US feed — 26 datasets (streets, orthoimagery, basemaps, directory). |
| Cortland County | Cortland County GIS Portal | https://cortland-county-gis-portal-cortlandplanning.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed via DCAT-US feed — 51 datasets, though several have unfilled template placeholders in their metadata. |
| Cayuga County | No dedicated portal | — | — | N | Embedded map viewer only; raw ArcGIS REST MapServer endpoints exist but no catalog UI ties them together. |
| Herkimer County | No dedicated portal | — | — | N | Property data via Beacon/GIS Cloud viewer only. |

## Southern Tier

| County / Municipality | Portal Name | URL | Platform | API? | Notes |
|---|---|---|---|---|---|
| Broome County | Broome County GIS Portal | https://gis.broomecountyny.gov/website/gisweb/portal.htm | Esri (map viewer, not Hub) | N | Interactive viewer + PDF library; no dataset catalog. |
| Tioga County | Tioga County One Map | https://tioga-county-one-map-tiogacountyny.hub.arcgis.com/ | ArcGIS Hub | Y | Datasets include parcels, roads, hydro, land use, gas well/lease data. **Note:** search results also surface Tioga County, Pennsylvania's separate portal — confirmed this entry is the NY instance via subdomain. |
| Chemung County | GIS Mapping Data page | https://chemungcountyny.gov/1382/GIS-Mapping-Data | Custom + Schneider/Beacon parcel viewer | N | No Hub/Socrata catalog found. |
| Schuyler County | GIS/Shapefile pages | http://www.schuylercountyny.gov/1066/GIS-Shapefile | Custom static pages + Beacon | N | Shapefile downloads via static pages, not a searchable catalog. |
| Steuben County | Steuben County GIS | https://steubencounty-scnygis.opendata.arcgis.com/ | ArcGIS Hub | Y | CSV/KML/Zip/GeoJSON/GeoTIFF/PNG downloads; tax parcels, 911, farmland protection, flood data. |
| Chenango County | Online GIS Information page | https://www.chenangocountyny.gov/323/Online-GIS-Information | Schneider Geospatial (paid subscription) | N | Primary access is a ~$275/yr subscription product. |
| Delaware County | Delaware County GIS Data Download | https://gisdata-delco.hub.arcgis.com/ | ArcGIS Hub | Y | Distinct from Delaware County OH/PA/State-of-Delaware portals — confirmed NY. |
| Otsego County | Otsego County GIS | https://otsego-county-gis-otsegocountyny.hub.arcgis.com/ | ArcGIS Hub | Y | FEMA flood data, Marcellus Shale, school district data, NRI. |
| Tompkins County | Tompkins County Open Data Portal | https://tcdata-tompkinscounty.opendata.arcgis.com/ | ArcGIS Hub | Y | Broader than pure GIS — election districts, legislative boundaries; actively maintained (2026 data present). |
| Fulton County | No portal found | — | — | N | Schneider (SDG) parcel-search viewer only. Search results initially confused with Fulton County GA/IL/IN — confirmed those are separate. |
| Montgomery County | Montgomery County GIS Open Data | https://opendata-mcgov-gis.hub.arcgis.com/ | ArcGIS Hub | Y | **UNCONFIRMED**: at least four visually similar URLs surfaced, several belonging to Montgomery County PA (the "montcopa" ones). This entry was picked based on "mcgov" naming and Fonda-area content signals — recommend a manual click-through before citing. |

## North Country

| County / Municipality | Portal Name | URL | Platform | API? | Notes |
|---|---|---|---|---|---|
| St. Lawrence County | No portal found | https://maps.dancgis.org/ima/?IMA=St.+Lawrence | DANC regional map viewer (custom/Esri) | N | Shared regional Internet Mapping Application with Jefferson and Lewis counties — a viewer, not a catalog. |
| Jefferson County | No portal found | https://www.jeffcountymaps.com/ | ArcGIS Server (custom viewer) | N | County-run parcel/tax map viewer only; also on the DANC regional viewer. |
| Lewis County | No portal found | https://lewiscountyny.giscloud.com/ | GIS Cloud (proprietary viewer) | N | Layered map application, not a dataset catalog. |
| Clinton County | No portal found | https://www.clintoncountyny.gov/planning/gis-map | ArcGIS Online (individual viewer items) | N | Individual web-app viewers exist, but no county-branded ArcGIS Hub catalog domain. |
| Essex County | No portal found (false positive caught) | https://essex-gis.co.essex.ny.us/ | Esri ArcGIS Server (parcel viewer) | N | **Caution:** a real-looking `data-essexcounty.opendata.arcgis.com` catalog exists but belongs to Essex County, **Ontario, Canada** — confirmed false positive, excluded. |
| Franklin County | Franklin County GIS | https://data-franklincova.opendata.arcgis.com/ | ArcGIS Hub | Y | **UNCONFIRMED**: dataset content (Adirondack-lakes parcels) strongly suggests NY, but the "cova" subdomain fragment is unexplained and page content couldn't be directly confirmed (JS-rendered, blocked WebFetch). Recommend manual confirmation before citing. |
| Hamilton County | No portal found | https://www.hamcomaps.net/ | Unclear (unconfirmed platform) | N | Smallest county in NY (~4,800 pop); only a parcel/tax map viewer found. |

## Western NY (Finger Lakes + WNY)

| County / Municipality | Portal Name | URL | Platform | API? | Notes |
|---|---|---|---|---|---|
| Erie County | No confirmed catalog | https://www3.erie.gov/gis/ | Custom/Esri viewer | N | Map-and-download page, not a structured catalog. County data instead flows into the state's Health Data NY / data.ny.gov. |
| Monroe County | Monroe County GIS Hub | https://gishub-monroegis.hub.arcgis.com/ | ArcGIS Hub | Y | CSV/KML/Zip/GeoJSON/GeoTIFF/PNG downloads + REST API per layer. |
| Niagara County | No portal found | — | — | N | Only ArcGIS Web AppViewer/Experience map apps found, not a browsable catalog. |
| Genesee County | Genesee County GIS Data | https://gis-data-cogeneseeny.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed live. |
| Orleans County | No portal found | — | — | N | Only an interactive map viewer + planning-board referral webmap. |
| Wyoming County | Wyoming County ArcGIS Hub | https://www-wyomingcounty-wycopa.opendata.arcgis.com/ | ArcGIS Hub | Y | CSV/KML/Zip/GeoJSON/GeoTIFF/PNG + GeoServices/WMS/WFS API. |
| Livingston County | No portal found | — | — | N | ArcGIS Web AppViewer apps only; portal home page returned HTTP 403 on automated check — not confirmed dead, just unverifiable by fetch. |
| Ontario County | Ontario County GIS Mapping Center | https://ontario-county-gis-mapping-center-ontariocony.hub.arcgis.com/ | ArcGIS Hub | Y | County site confirms data available "via ArcGIS REST API." |
| Yates County | No portal found | — | — | N | ArcGIS Web AppViewer only, not a browsable catalog. |
| Seneca County | Seneca County GeoLibrary | https://portal-senecacountygis.hub.arcgis.com/ | ArcGIS Hub | Y | Individual dataset pages (e.g., parcels) confirmed with CSV/KML/GeoJSON + API options. |
| Chautauqua County | No catalog UI | https://maps.chautauquacounty.com/server/rest/services | Raw ArcGIS REST Services (no Hub front end) | Partial | REST endpoints are technically machine-readable but there's no catalog UI to browse them. |
| Cattaraugus County | Cattaraugus County GIS Hub | https://cattaraugus-county-gis-hub-cattco.hub.arcgis.com/ | ArcGIS Hub | Y | Confirmed live. |
| Allegany County | No portal found | — | — | N | Parcel search + map viewer only. A same-named "Allegheny County" Hub exists but is PA/MD — confirmed a different jurisdiction, excluded. |
| Wayne County | Open Data Portal (Wayne County, NY) | https://gis.co.wayne.ny.us/portal/apps/sites/#/wcgis/search?collection=Dataset | ArcGIS Enterprise (self-hosted Portal, per the county's own official page) | Y | The county's official page (waynecountyny.gov/815/Open-Data-Portal) links to this self-hosted instance. Two other candidate cloud-Hub URLs also surfaced (`data-waynecountygis.opendata.arcgis.com`, `data-wayne.opendata.arcgis.com`) — likely older/parallel instances; the county's own link is treated as canonical here. |
| City of Buffalo | Open Data Buffalo | https://data.buffalony.gov/ | Socrata | Y | Verified via HTTP headers (`X-Socrata-Region`, Socrata CDN assets). 600+ datasets. |
| City of Rochester | DataROC | https://data.cityofrochester.gov/ | ArcGIS Hub | Y | **Notable finding:** Rochester is commonly assumed to run Socrata, but direct HTML inspection this session shows ArcGIS/Esri markers with no Socrata references — appears to have migrated platforms at an undetermined date. 100+ datasets, apps, and story maps. |

---

## Known gaps and caveats

This directory was compiled from six parallel regional research passes plus one targeted follow-up (Wayne County). Read this section before citing any single row externally.

1. **Verification method.** Most ArcGIS Hub/opendata.arcgis.com pages are JavaScript-rendered and returned only thin content or page titles to automated fetch tools. Platform and dataset confirmations mostly rely on: (a) DCAT-US JSON feed endpoints (`/api/feed/dcat-us/1.1.json`) where available — the strongest evidence used, since it lists real dataset counts; (b) HTTP header/HTML-marker fingerprinting (e.g., Socrata's `X-Socrata-Region` header, `socrata.com` footer links, ArcGIS/Esri branding strings); (c) search-result snippets describing specific dataset names. None of this substitutes for a human clicking through the live page. A live browser check (Claude in Chrome) was available but not used broadly this session — it requires selecting among multiple connected browser profiles, a choice better made once, deliberately, rather than repeatedly mid-research.

2. **Rows marked UNCONFIRMED** need a direct manual check before being cited in any public-facing material: Westchester County (dual Hub instance), Rockland County (API classification), Orange County (dual Hub instance), Columbia County (dual Hub instance — Planning vs. Land Information Dept.), City of Schenectady (likely-stale cross-referenced document), Franklin County (subdomain naming is unexplained), Montgomery County (four visually similar candidate URLs, several belonging to Montgomery Co. PA).

3. **Cross-state name collisions actively caught and excluded:** Essex County NY vs. Essex County, Ontario (Canada); Washington County NY vs. Washington County, Wisconsin; Allegany County NY vs. Allegheny County PA/MD; Tioga County NY vs. Tioga County PA; Fulton County NY vs. Fulton County GA/IL/IN; Delaware County NY vs. Delaware County OH/PA and the State of Delaware. This class of error is easy to reproduce in a follow-up search — worth double-checking if this directory is regenerated later.

4. **"No portal found" is common, not rare.** Roughly half of NY's counties have no browsable open-data catalog — most rely on a bare GIS map-viewer app (ArcGIS Web AppViewer/Experience Builder), a paid subscription parcel-lookup product (Schneider/Beacon, SDG), or the state's own NYS GIS Clearinghouse (data.gis.ny.gov) as their de facto public data-sharing mechanism. These are documented in each row's Notes rather than treated as a research failure.

5. **The state-level Clearinghouse is not counted as county coverage.** Rensselaer, Saratoga, Schenectady County, and Schoharie all rely on the NYS GIS Clearinghouse for their public GIS layers. That's a state platform aggregating county-submitted data, not a county-run portal — marked "No portal found" here on that basis. Reasonable people could count this differently; flagging the judgment call.

6. **Regional grouping note.** Regions above roughly follow common colloquial NY regional names, not a single official standard — Columbia and Greene counties, for instance, are geographically Hudson Valley but grouped once under Capital Region (matching NYS's own Regional Economic Development Council convention) to avoid double-counting real duplicates found across two independent research passes.

## Next steps

- Manual browser verification of the UNCONFIRMED rows above (a good candidate for a focused `/deep-research` or a quick Claude-in-Chrome pass once a browser profile is chosen)
- Consider whether the NYS GIS Clearinghouse deserves its own row as a statewide fallback resource
- Revisit "no portal found" counties periodically — GIS/open-data adoption in smaller counties changes over time
