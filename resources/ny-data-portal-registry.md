---
title: "New York data portal registry"
status: draft
created: 2026-11-05
last_verified: 2026-11-05
---

# New York data portal registry

> **DRAFT.** Every URL was requested live on 2026-11-05. Rows marked **UNCONFIRMED** need a human check before they are cited. See [Method and caveats](#method-and-caveats).

**Report generated:** 2026-11-05
**Data current as of:** 2026-11-05

One list of public sources of New York civic data — state portals, state APIs, county and city portals (including New York City), and academic and institutional sources — with whether each has an API. Built per [`2026-11-05-research-plan-ny-data-portal-registry.md`](2026-11-05-research-plan-ny-data-portal-registry.md).

- **140 sources:** 4 state portals, 24 state APIs and data services, 69 counties and cities, 17 NYC agency data services, 26 academic and institutional.
- **Status:** 89 live, 36 no portal, 11 UNCONFIRMED, 4 dead.
- **Machine-readable:** [`ny-data-portal-registry.csv`](ny-data-portal-registry.csv) and [`ny-data-portal-registry.json`](ny-data-portal-registry.json) hold every row, with endpoints, evidence and notes not shown in the tables below.
- **Per-place pages:** every county and city has its own page in [`portals/`](portals/), with a facts table, notes and a tested example query.

**Legend.** *API* is the access type (SODA = Socrata API; ArcGIS REST / Hub = Esri services). *Key*: Y = an API key or token is required, N = no key, — = no API. *Datasets* is the count the source itself reports, where it reports one.

## 1. State data portals

| Entity | Source | Platform | API | Key | Datasets | Status |
|---|---|---|---|---|---|---|
| NYS Department of Health | [Health Data NY (health.data.ny.gov)](https://health.data.ny.gov/) | Socrata (Tyler Data & Insights) | SODA 2.x | N | 324 | live |
| NYS Office of Information Technology Services (GIS Program Office) | [NYS GIS Clearinghouse (gis.ny.gov + data.gis.ny.gov)](https://data.gis.ny.gov/) | ArcGIS Hub (ArcGIS Online org 'ShareGIS NY', urlKey sharegisny); gis.ny.gov is the HTML front site | ArcGIS Hub / DCAT-US 1.1 feed; ArcGIS REST (hosted feature services) | N | 389 | live |
| NYS Office of Information Technology Services (Open NY program) | [Open NY (data.ny.gov)](https://data.ny.gov/) | Socrata (Tyler Data & Insights) | SODA 2.x (+ Socrata Discovery API) | N | 1,036 | live |
| State of New York (as harvested by data.gov) | [catalog.data.gov organization: State of New York](https://catalog.data.gov/organization/new-york) | CKAN-derived catalog (data.gov, GSA) | none verified (old CKAN action API at /api/3/action/* returns 404) | N | 1,164 | live |

## 2. State APIs and data services

Agencies that publish only on data.ny.gov have no row of their own; they are covered by the Open NY row. Public authorities are included here (entity type `authority` in the data file).

| Entity | Source | Platform | API | Key | Datasets | Status |
|---|---|---|---|---|---|---|
| Capital District Transportation Authority (CDTA) | [CDTA Developer: Route and Schedule API + GTFS](https://www.cdta.org/developer) | custom | REST + GTFS / GTFS-Realtime | UNCONFIRMED | 3 | live |
| Metropolitan Transportation Authority | [MTA Real-time Data Feeds and static GTFS](https://api.mta.info/) | custom (GTFS / GTFS-Realtime) | GTFS-Realtime (protobuf) + JSON alerts + static GTFS ZIP | N | — | live |
| Metropolitan Transportation Authority (NYCT / MTA Bus) | [MTA Bus Time API (SIRI)](https://bustime.mta.info/developers) | OneBusAway / SIRI | REST (SIRI JSON/XML) | Y | — | live |
| New York State Assembly | [Assembly Bill Search and Legislative Information](https://nyassembly.gov/leg/) | custom HTML | none (HTML query only) | N | — | live |
| New York State Energy Research and Development Authority (NYSERDA) | [DER Integrated Data System](https://der.nyserda.ny.gov/) | custom web app | bulk download (CSV) + web query | N | 91 | live |
| New York State Senate | [Open Legislation API](https://legislation.nysenate.gov/) | custom (NYS Senate OpenLeg) | REST/JSON | Y | — | live |
| Niagara Frontier Transportation Authority (NFTA) | [NFTA Metro Developer Tools (GTFS)](https://metro.nfta.com/about/developer-tools) | Drupal | GTFS static (ZIP) + GIS files | N | — | live |
| NYS Adirondack Park Agency | [Adirondack Park Agency ArcGIS Online organization and Hub](https://adirondack-park-agency-adirondack.hub.arcgis.com/) | ArcGIS Online / ArcGIS Hub | ArcGIS REST (hosted FeatureServer) | N | 25 | live |
| NYS Board of Elections | [Voter enrollment statistics (elections.ny.gov)](https://elections.ny.gov/enrollment-county) | Drupal (webny) | Bulk download (XLSX per snapshot); no API | N | — | live |
| NYS Commission on Ethics and Lobbying in Government (COELIG) | [Lobbying Public Search Query (PSQ)](https://reports.ethics.ny.gov/publicquery) | ASP.NET web app | web query (no API) + Open NY datasets | N | 14 | live |
| NYS Department of Environmental Conservation | [NYSDEC ArcGIS Online organization (nysdec)](https://services6.arcgis.com/DZHaqZm9cxOD4CWM/arcgis/rest/services) | ArcGIS Online | ArcGIS REST (hosted FeatureServer) | N | 842 | live |
| NYS Department of Labor | [Labor Statistics (statistics.labor.ny.gov)](https://statistics.labor.ny.gov/) | Custom site | UNCONFIRMED | UNCONFIRMED | — | UNCONFIRMED |
| NYS Department of State | [New York Geographic Information Gateway (opdgig.dos.ny.gov)](https://opdgig.dos.ny.gov/) | ArcGIS Hub (ArcGIS Online org NYSDOS) | ArcGIS Hub / DCAT-US 1.1 feed; ArcGIS REST | N | 1,888 | live |
| NYS Department of Transportation | [511NY developer API](https://www.511ny.org/developers/help) | 511NY traveler information platform | REST/JSON (UNCONFIRMED) | UNCONFIRMED | — | UNCONFIRMED |
| NYS Department of Transportation | [NYSDOT GIS ArcGIS Server (gis.dot.ny.gov/hostingny)](https://gis.dot.ny.gov/hostingny/rest/services) | Esri ArcGIS Server 11.5 | ArcGIS REST (MapServer/FeatureServer) | N | — | live |
| NYS Education Department | [NYSED Data Site (data.nysed.gov) downloads](https://data.nysed.gov/downloads.php) | Custom PHP site | Bulk download (ZIP of Access/Excel databases); no API found | N | 101 | live |
| NYS Office of Information Technology Services (GIS Program Office) | [NYS ITS GIS ArcGIS Server (gisservices.its.ny.gov), incl. Street and Address Composite geocoder](https://gisservices.its.ny.gov/arcgis/rest/services) | Esri ArcGIS Server | ArcGIS REST (MapServer/FeatureServer/GeocodeServer) | N | — | live |
| NYS Office of Information Technology Services (GIS Program Office) | [NYS Orthoimagery services (orthos.its.ny.gov)](https://orthos.its.ny.gov/arcgis/rest/services) | Esri ArcGIS Server | ArcGIS REST MapServer; WMS | N | — | live |
| NYS Office of Parks, Recreation and Historic Preservation | [NYS OPRHP ArcGIS Online organization (nysparks)](https://services.arcgis.com/1xFZPtKn1wKC6POA/arcgis/rest/services) | ArcGIS Online | ArcGIS REST (hosted FeatureServer) | N | 172 | live |
| NYS Unified Court System (Office of Court Administration) | [Division of Technology & Court Research - Court Data and Statistics](https://www.nycourts.gov/division-technology-court-research) | Drupal + dashboards | bulk download (CSV/XLSX) + dashboards | N | 1 | live |
| Office of the State Comptroller | [Financial Data for Local Governments](https://wwe1.osc.state.ny.us/localgov/findata/financial-data-for-local-governments.cfm) | ColdFusion web app | bulk download (CSV/ZIP via form POST) | N | — | live |
| Office of the State Comptroller | [Open Book New York (state checkbook, contracts, PARIS)](https://www.osc.ny.gov/open-book-new-york) | ColdFusion web apps (wwe2.osc.state.ny.us/transparency/) | web query + export (tab-delimited download) | N | — | live |
| Port Authority of New York and New Jersey | [RidePATH real-time arrivals JSON](https://www.panynj.gov/bin/portauthority/ridepath.json) | AEM (panynj.gov) | REST/JSON (undocumented) | N | — | UNCONFIRMED |
| Rochester-Genesee Regional Transportation Authority (RTS) | [RGRTA API (real-time + static)](https://www.myrts.com/RGRTA-API) | custom | REST (real-time) + GTFS static | UNCONFIRMED | — | UNCONFIRMED |

## 3. County and municipal portals

### 3a. Counties and cities

| Entity | Region | Source | Platform | API | Key | Datasets | Status | Page |
|---|---|---|---|---|---|---|---|---|
| Albany County | Capital Region | [Albany County NY Open Data](https://albany-county-ny-open-data-albcountygis.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | N | 41 | live | [page](portals/albany-county.md) |
| Allegany County | Western NY (Finger Lakes + WNY) | [No portal found (parcel search only)](https://beacon.schneidercorp.com/Application.aspx?App=AlleganyCountyNY&PageType=Search) | Schneider Beacon | none | — | — | no portal | [page](portals/allegany-county.md) |
| Broome County | Southern Tier | [Broome County GIS Portal](https://gis.broomecountyny.gov/website/gisweb/portal.htm) | Esri ArcGIS Server 10.61 + custom JS viewer page (not Hub) | ArcGIS REST | N | — | live | [page](portals/broome-county.md) |
| Cattaraugus County | Western NY (Finger Lakes + WNY) | [Cattaraugus County GIS Hub](https://cattaraugus-county-gis-hub-cattco.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub/REST | N | 0 | live | [page](portals/cattaraugus-county.md) |
| Cayuga County | Central NY | [No dedicated portal (Interactive GIS page)](https://www.cayugacounty.gov/687/Interactive-GIS) | ArcGIS Experience Builder viewer + ArcGIS Server (county-hosted) | ArcGIS REST | N | — | no portal | [page](portals/cayuga-county.md) |
| Chautauqua County | Western NY (Finger Lakes + WNY) | [No catalog UI (raw ArcGIS REST services)](https://maps.chautauquacounty.com/server/rest/services) | ArcGIS Server 10.91 (REST directory, no Hub front end) | ArcGIS REST | N | — | no portal | [page](portals/chautauqua-county.md) |
| Chemung County | Southern Tier | [GIS Mapping Data page](https://chemungcountyny.gov/1382/GIS-Mapping-Data) | CivicPlus static page with Document Center downloads | none | — | — | live | [page](portals/chemung-county.md) |
| Chenango County | Southern Tier | [Online GIS Information page (paid subscription)](https://www.chenangocountyny.gov/323/Online-GIS-Information) | Schneider Geospatial (paid subscription) | none | — | — | no portal | [page](portals/chenango-county.md) |
| City of Albany | Capital Region | openAlbany (offline) | Socrata (retired) | None (portal offline) | — | — | **dead** | [page](portals/city-of-albany.md) |
| City of Buffalo | Western NY (Finger Lakes + WNY) | [Open Data Buffalo](https://data.buffalony.gov/) | Socrata | SODA | N | 139 | live | [page](portals/city-of-buffalo.md) |
| City of Mount Vernon | NYC Metro / Long Island | [No catalog (public ArcGIS Enterprise services + dashboards)](https://gis.cmvny.com/server/rest/services) | ArcGIS Enterprise 11.3 (self-hosted; no Sites/Hub catalog) | ArcGIS REST (Enterprise portal + server) | N | — | no portal | [page](portals/city-of-mount-vernon.md) |
| City of New Rochelle | NYC Metro / Long Island | No portal found | — | none | — | — | no portal | [page](portals/city-of-new-rochelle.md) |
| City of Rochester | Western NY (Finger Lakes + WNY) | [DataROC](https://data.cityofrochester.gov/) | ArcGIS Hub | ArcGIS Hub/REST | N | 52 | live | [page](portals/city-of-rochester.md) |
| City of Schenectady | Capital Region | ["Open Data Portal" page (PDF reports only)](https://www.cityofschenectady.gov/605/Open-Data-Portal) | City web page (CivicPlus), PDF reports | none | — | — | no portal | [page](portals/city-of-schenectady.md) |
| City of Syracuse | Central NY | [Open Data Syracuse](https://data.syr.gov/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | N | 136 | live | [page](portals/city-of-syracuse.md) |
| City of Troy | Capital Region | No portal found | — | none | — | — | no portal | [page](portals/city-of-troy.md) |
| City of Utica | Central NY | [No dedicated portal (GIS Maps page)](https://www.cityofutica.com/maps/gis-maps/index) | ArcGIS Experience Builder viewer + Schneider Beacon | ArcGIS REST (org feature services) | N | — | no portal | [page](portals/city-of-utica.md) |
| City of White Plains | NYC Metro / Long Island | No portal found | — | none | — | — | no portal | [page](portals/city-of-white-plains.md) |
| City of Yonkers | NYC Metro / Long Island | [No general portal found](https://imo.yonkersny.gov/index.aspx) | Image Mate Online (assessment records) | none | — | — | no portal | [page](portals/city-of-yonkers.md) |
| Clinton County | North Country | [No portal found (map viewer only)](https://www.clintoncountyny.gov/planning/gis-map) | ArcGIS Online (Experience Builder app) | none | — | — | no portal | [page](portals/clinton-county.md) |
| Columbia County | Capital Region | [Columbia County Geo-Data](https://geodata-cc-ny.opendata.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | N | 55 | live | [page](portals/columbia-county.md) |
| Cortland County | Central NY | [Cortland County GIS Portal](https://cortland-county-gis-portal-cortlandplanning.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | N | 28 | live | [page](portals/cortland-county.md) |
| Delaware County | Southern Tier | [No portal found](https://www.delcony.gov/) | — | none | — | — | no portal | [page](portals/delaware-county.md) |
| Dutchess County | Hudson Valley | [Dutchess County GIS Open Data](https://opendata-dcny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | N | 28 | live | [page](portals/dutchess-county.md) |
| Erie County | Western NY (Finger Lakes + WNY) | [No confirmed catalog (GIS office pages)](https://www3.erie.gov/gis/) | Custom site + ArcGIS Online viewers | none | — | — | no portal | [page](portals/erie-county.md) |
| Essex County | North Country | [No portal found (parcel viewer + REST)](https://essex-gis.co.essex.ny.us/) | Esri ArcGIS Server 11.3 (parcel viewer) | ArcGIS REST | N | — | no portal | [page](portals/essex-county.md) |
| Franklin County | North Country | [No portal found (parcel search only)](https://beacon.schneidercorp.com/Application.aspx?App=FranklinCountyNY&PageType=Search) | Schneider Beacon | none | — | — | no portal | [page](portals/franklin-county.md) |
| Fulton County | Mohawk Valley | [No portal found (Real Property Tax Service Agency page)](https://www.fultoncountyny.gov/real-property-tax-service-agency) | Schneider Beacon / Image Mate Online (parcel viewer) | none | — | — | no portal | [page](portals/fulton-county.md) |
| Genesee County | Western NY (Finger Lakes + WNY) | [Genesee County GIS Data](https://gis-data-cogeneseeny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub/REST | N | 4 | live | [page](portals/genesee-county.md) |
| Greene County | Capital Region | [No portal found (web map viewer)](https://gis.gcgovny.com/greenewebmap/) | Esri web map (viewer) on ArcGIS Server 10.91 | ArcGIS REST (raw services behind the viewer; no catalog) | N | — | no portal | [page](portals/greene-county.md) |
| Hamilton County | North Country | [No portal found (parcel viewer only)](https://beacon.schneidercorp.com/Application.aspx?App=HamiltonCountyNY&PageType=Map) | Schneider Beacon | none | — | — | no portal | [page](portals/hamilton-county.md) |
| Herkimer County | Central NY | [No dedicated portal (County Maps page)](https://www.herkimercountyny.gov/county-maps/) | Schneider Beacon (property) + static map pages | none | — | — | no portal | [page](portals/herkimer-county.md) |
| Jefferson County | North Country | [No portal found (parcel search only)](https://www.jeffersoncountyny.gov/gis-maps-property-search) | Schneider Beacon (parcel search) | none | — | — | no portal | [page](portals/jefferson-county.md) |
| Lewis County | North Country | [No portal found (map application only)](https://lewiscountyny.gov/departments/real-property/gis-mapping-web-application/) | Schneider Beacon | none | — | — | no portal | [page](portals/lewis-county.md) |
| Livingston County | Western NY (Finger Lakes + WNY) | [Livingston County GIS Portal](https://gis.livingstoncountyny.gov/portal/home/index.html) | ArcGIS Enterprise (self-hosted Portal, no Sites catalog) | ArcGIS REST | N | — | live | [page](portals/livingston-county.md) |
| Madison County | Central NY | [No dedicated portal](https://www.madisoncounty.ny.gov/254/Prices-for-Map-Copies-GIS-Data) | Static map pages + paid data request; Schneider Beacon (property) | none | — | — | no portal | [page](portals/madison-county.md) |
| Monroe County | Western NY (Finger Lakes + WNY) | [MCGIS Hub](https://maps.monroecounty.gov/portal/apps/sites/#/mcgis) | ArcGIS Enterprise (self-hosted Sites) | ArcGIS REST (Enterprise portal) | N | 77 | live | [page](portals/monroe-county.md) |
| Montgomery County | Mohawk Valley | [No portal found (Real Property GIS page)](https://www.montgomerycountyny.gov/web/sites/departments/realproperty/gis.asp) | Static page; parcels hosted on the NYS GIS Clearinghouse | none | — | — | no portal | [page](portals/montgomery-county.md) |
| Nassau County | NYC Metro / Long Island | [Open Nassau (+ Open Payroll / Open Budget / Open Checkbook)](https://opendata.nassaucountyny.gov/) | Socrata (Tyler Technologies) | SODA | N | 17 | live | [page](portals/nassau-county.md) |
| New York City | NYC Metro / Long Island | [NYC Open Data](https://data.cityofnewyork.us/) | Socrata (Tyler Technologies) | SODA | N | 2,412 | live | [page](portals/new-york-city.md) |
| Niagara County | Western NY (Finger Lakes + WNY) | [No portal found (map viewer only)](https://niagara-county.maps.arcgis.com/apps/webappviewer/index.html?id=b5be67cf0e05477e8f4ad3161ab51422) | ArcGIS Online (Web AppViewer) | none | — | — | no portal | [page](portals/niagara-county.md) |
| Oneida County | Central NY | [No catalog; public ArcGIS Enterprise](https://oneidacountyny.gov/departments/planning/gis-servicesmapping-resources/) | ArcGIS Enterprise 11.5 (county-hosted, maps.oneidacountyny.gov) | ArcGIS REST | N | — | no portal | [page](portals/oneida-county.md) |
| Onondaga County | Central NY | [No dedicated portal (GIS Division page)](https://onondaga.gov/planning/gis/) | Hosted web viewer (spatial.vhb.com) + Map Gallery | none | — | — | no portal | [page](portals/onondaga-county.md) |
| Ontario County | Western NY (Finger Lakes + WNY) | [Ontario County GIS Mapping Center](https://ontario-county-gis-mapping-center-ontariocony.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub/REST | N | 12 | live | [page](portals/ontario-county.md) |
| Orange County | Hudson Valley | [Orange County GIS (OCGIS) site](https://gis.orangecountygov.com/portal/apps/sites/#/ocgis) | ArcGIS Enterprise (self-hosted Sites) + ArcGIS Server 10.91 | ArcGIS REST (Enterprise portal + server) | N | 1 | live | [page](portals/orange-county.md) |
| Orleans County | Western NY (Finger Lakes + WNY) | [No portal found (map viewer + PDF maps)](https://www.orleanscountyny.gov/departments/planning/geographic_information_systems_(gis).php) | County GIS page (PDF maps, viewer user guide) | none | — | — | no portal | [page](portals/orleans-county.md) |
| Oswego County | Central NY | [Oswego County Data / GIS](https://data-oswegogis.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | N | 23 | live | [page](portals/oswego-county.md) |
| Otsego County | Southern Tier | [Otsego County GIS](https://otsego-county-gis-otsegocountyny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | N | 64 | live | [page](portals/otsego-county.md) |
| Putnam County | NYC Metro / Long Island | [Putnam County, NY](https://data-pcny.opendata.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records) / ArcGIS REST | N | 26 | live | [page](portals/putnam-county.md) |
| Rensselaer County | Capital Region | [No dedicated portal](https://www.rensco.com/487/Geographic-Information-System-GIS---Mapp) | County web page (links out) | none | — | — | no portal | [page](portals/rensselaer-county.md) |
| Rockland County | NYC Metro / Long Island | [Rockland County GIS Portal](https://www.rocklandgis.com/portal/apps/sites/#/data) | ArcGIS Enterprise 11.3 (self-hosted Portal + Sites) | ArcGIS REST (Enterprise portal sharing API + ArcGIS Server) | N | — | live | [page](portals/rockland-county.md) |
| Saratoga County | Capital Region | [No dedicated portal](https://www.saratogacountyny.gov/departments/real-property-tax-service/) | Vendor map viewer (VHB) + assessment database | none | — | — | no portal | [page](portals/saratoga-county.md) |
| Schenectady County | Capital Region | [No dedicated county-level portal](https://www.schenectadycountyny.gov/taxmaps) | Schneider Beacon (parcel search); SIMS (login-gated) | none | — | — | no portal | [page](portals/schenectady-county.md) |
| Schoharie County | Capital Region | [No portal found](https://spatial.vhb.com/SchoharieMapViewer/) | Vendor map viewer (VHB) + Schneider Beacon | none | — | — | no portal | [page](portals/schoharie-county.md) |
| Schuyler County | Southern Tier | [GIS Shapefile page](https://www.schuylercountyny.gov/1066/GIS-Shapefile) | CivicPlus static page + ArcGIS Online web viewer | none | — | — | live | [page](portals/schuyler-county.md) |
| Seneca County | Western NY (Finger Lakes + WNY) | [No portal found (parcel search only)](https://beacon.schneidercorp.com/Application.aspx?App=SenecaCountyNY&PageType=Search) | Schneider Beacon | none | — | — | no portal | [page](portals/seneca-county.md) |
| St. Lawrence County | North Country | [No portal found (DANC regional viewer)](https://maps.dancgis.org/ima/?IMA=St.+Lawrence) | DANC Internet Mapping Application (custom/Esri) | ArcGIS REST (DANC regional server) | N | — | no portal | [page](portals/st-lawrence-county.md) |
| Steuben County | Southern Tier | [Steuben County GIS](https://steubencounty-scnygis.opendata.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search) + ArcGIS REST | N | 11 | live | [page](portals/steuben-county.md) |
| Suffolk County | NYC Metro / Long Island | [Suffolk County Open Data](https://opendata.suffolkcountyny.gov/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | N | 189 | live | [page](portals/suffolk-county.md) |
| Sullivan County | Hudson Valley | [Sullivan County GISOnline Geoportal](https://gis2017-04-13t155717567z-sullconygiso.opendata.arcgis.com/) | ArcGIS Hub (older Hub Basic site) | ArcGIS Hub (DCAT) / ArcGIS REST | N | 54 | live | [page](portals/sullivan-county.md) |
| Tioga County | Southern Tier | [Tioga County One Map](https://tioga-county-one-map-tiogacountyny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS REST (org feature services); Hub search returns no datasets | N | 0 | live | [page](portals/tioga-county.md) |
| Tompkins County | Southern Tier | [Tompkins County Open Data Portal](https://tcdata-tompkinscounty.opendata.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | N | 32 | live | [page](portals/tompkins-county.md) |
| Ulster County | Hudson Valley | [GIS Data (Dept. of Information Services)](https://www.ulstercountyny.gov/Departments/Information-Services/GIS-Services/GIS-Data) | County web page with direct downloads + ArcGIS Server 11.5 REST | ArcGIS REST | N | — | live | [page](portals/ulster-county.md) |
| Warren County | Capital Region | [Warren County NY GIS](https://warren-county-gis-warrencountyny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | N | 4 | live | [page](portals/warren-county.md) |
| Washington County | Capital Region | [No open data catalog (parcel viewer)](https://gis.washingtoncountyny.gov/webmap/) | Esri web map (viewer) on ArcGIS Server 10.9 | ArcGIS REST (raw services behind the viewer; no catalog) | N | — | no portal | [page](portals/washington-county.md) |
| Wayne County | Western NY (Finger Lakes + WNY) | [Open Data Portal (Wayne County GIS)](https://gis.co.wayne.ny.us/portal/apps/sites/#/wcgis/search?collection=Dataset) | ArcGIS Enterprise (self-hosted Sites) | ArcGIS REST (Enterprise portal) | N | 108 | live | [page](portals/wayne-county.md) |
| Westchester County | NYC Metro / Long Island | [Westchester GeoHub v2](https://gis.westchestercountyny.gov/) | ArcGIS Hub (custom domain) + county ArcGIS Server | ArcGIS Hub (OGC Records) / ArcGIS REST | N | 91 | live | [page](portals/westchester-county.md) |
| Wyoming County | Western NY (Finger Lakes + WNY) | [No portal found (map apps only)](https://www.wyomingcountyny.gov/645/Geographic-Information-Systems-GIS) | ArcGIS Online (individual apps) | ArcGIS REST (org services, no catalog) | N | — | no portal | [page](portals/wyoming-county.md) |
| Yates County | Western NY (Finger Lakes + WNY) | [Yates County GIS Portal](https://gisportal.yatescounty.org/portal/home/) | ArcGIS Enterprise (self-hosted Portal, no Sites catalog) | ArcGIS REST (Enterprise portal) | N | 80 | live | [page](portals/yates-county.md) |

### 3b. New York City agency data services

NYC Open Data is in 3a. These are city agencies and offices that run their own data service or API.

| Entity | Source | Platform | API | Key | Datasets | Status |
|---|---|---|---|---|---|---|
| Board of Elections in the City of New York | [Election results (vote.nyc) and Election Night Results](https://vote.nyc/page/election-results-summary) | Drupal + static ENR | bulk download (CSV/PDF) | N | — | live |
| New York City Council | [Legistar Web API (NYC Council)](https://webapi.legistar.com/v1/nyc/) | Granicus Legistar | REST/JSON (OData-style) | Y | — | live |
| New York City Police Department | [CompStat 2.0](https://compstat.nypdonline.org/) | custom dashboard | web query (no documented API) | N | — | live |
| NYC Campaign Finance Board | [Follow the Money - Data Library](https://www.nyccfb.info/follow-the-money/data-library/) | custom (nyccfb.info) | bulk download (CSV) | N | — | live |
| NYC Department of Buildings | [Building Information System (BIS)](https://a810-bisweb.nyc.gov/bisweb/bsqpm01.jsp) | Java web app | web query (no API) | N | — | live |
| NYC Department of City Planning | [BYTES of the BIG APPLE / DCP Open Data](https://www.nyc.gov/site/planning/data-maps/open-data.page) | nyc.gov CMS | bulk download (shapefile/CSV/FileGDB) | N | — | live |
| NYC Department of City Planning | [NYC DCP Mapping Portal (ArcGIS REST)](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services) | ArcGIS Online | ArcGIS REST (FeatureServer) | N | 530 | live |
| NYC Department of Citywide Administrative Services | [The City Record Online (CROL)](https://a856-cityrecord.nyc.gov/) | custom web app | web query (no API) | N | — | live |
| NYC Department of Finance | [Rolling Sales Data](https://www.nyc.gov/site/finance/property/property-rolling-sales-data.page) | nyc.gov CMS | bulk download (XLSX) | N | 5 | live |
| NYC Department of Health and Mental Hygiene | [Environment and Health Data Portal](https://a816-dohbesp.nyc.gov/IndicatorPublic/) | custom static site + GitHub | bulk download (CSV via GitHub) + web query | N | — | live |
| NYC Department of Transportation | [NYCTMC Traffic Cameras API](https://webcams.nyctmc.org/) | custom | REST/JSON | N | — | live |
| NYC Independent Budget Office | [IBO Data Center (NYC Fiscal History)](https://www.ibo.nyc.gov/content/data-center) | custom JS site | bulk download (XLSX) | N | 29 | live |
| NYC Office of Technology and Innovation (OTI) | [NYC API Developers Portal](https://api-portal.nyc.gov/) | Azure API Management | REST (multiple) | Y | 8 | live |
| NYC Office of Technology and Innovation (OTI) / Department of City Planning | [Geoclient v2](https://api-portal.nyc.gov/) | Azure API Management (Geosupport backend) | REST/JSON | Y | — | live |
| NYC Public Schools (DOE) | [InfoHub reports and data](https://infohub.nyced.org/reports) | custom CMS | bulk download (UNCONFIRMED format) | N | — | UNCONFIRMED |
| NYC311 | [NYC 311 Public API](https://api-portal.nyc.gov/) | Azure API Management | REST/JSON | Y | — | UNCONFIRMED |
| Office of the New York City Comptroller | [Checkbook NYC API](https://www.checkbooknyc.com/data-feeds/api) | Checkbook NYC 2.0 (Drupal) | REST (XML over HTTP POST) | N | — | live |

## 4. Academic and institutional sources

| Entity | Region | Source | Platform | API | Key | Datasets | Status |
|---|---|---|---|---|---|---|---|
| Association for Neighborhood and Housing Development (ANHD) | NYC Metro / Long Island | [Displacement Alert Project (DAP) Portal and API](https://portal.displacementalert.org/) | React app + Django REST API | Web portal; data access by account (by request) | Y | — | live |
| Baruch College (CUNY) Newman Library | NYC Metro / Long Island | [NYC Geodatabase (Baruch Geoportal)](https://www.baruch.cuny.edu/confluence/display/geoportal/NYC+Geodatabase) | Confluence | Bulk download (SQLite/SpatiaLite) UNCONFIRMED | UNCONFIRMED | — | UNCONFIRMED |
| Central New York Community Foundation | Central NY | [CNY Vitals](https://cnyvitals.org/) | WordPress | UNCONFIRMED | UNCONFIRMED | — | UNCONFIRMED |
| Citizens Budget Commission | Statewide | [CBC website (data tools UNCONFIRMED)](https://cbcny.org/) | Unknown | UNCONFIRMED | UNCONFIRMED | — | UNCONFIRMED |
| Citizens' Committee for Children of New York | NYC Metro / Long Island | [Keeping Track Online](https://data.cccnewyork.org/) | Custom web app | Indicator pages with Export (CSV) button; no API found | N | 124 | live |
| Columbia University Libraries | Statewide | [Columbia GeoData](https://geodata.library.columbia.edu/) | GeoBlacklight | Blacklight JSON API | N | 104,570 | live |
| Cornell University (Northeast Regional Climate Center) | Statewide | [RCC-ACIS web services](https://www.nrcc.cornell.edu/) | ACIS | REST/JSON | N | — | live |
| Cornell University (Program on Applied Demographics) | Statewide | [PAD data: county and state projections, Census 2020, school districts](https://pad.human.cornell.edu/) | ColdFusion web app | Interactive GET query form; no documented API | N | — | live |
| Cornell University Library | Statewide | [CUGIR (Cornell University Geospatial Information Repository)](https://cugir.library.cornell.edu/) | GeoBlacklight | Blacklight JSON API; bulk download per record | N | 893 | live |
| CUNY Graduate Center, Center for Urban Research | Statewide | [Redistricting & You / CUNY Mapping Service](https://redistrictingandyou.org/) | Vue app | UNCONFIRMED | UNCONFIRMED | — | UNCONFIRMED |
| Empire Center for Public Policy | Statewide | [SeeThroughNY](https://www.seethroughny.net/) | Custom web database | Web search (no public API found) | N | — | live |
| intro.nyc (independent project) | NYC Metro / Long Island | [intro.nyc and nyc_legislation data mirror](https://intro.nyc/) | Static site + GitHub data repo | Bulk JSON in GitHub repo | N | — | live |
| John Jay College (CUNY) Data Collaborative for Justice | Statewide | [DCJ Analytic Tools](https://datacollaborativeforjustice.org/analytic-tools/) | WordPress + embedded dashboards | Interactive dashboards; download UNCONFIRMED | N | — | live |
| JustFix | NYC Metro / Long Island | [Who Owns What](https://whoownswhat.justfix.org/) | Django API + React front end | REST/JSON (undocumented) | N | — | live |
| Lehman College (CUNY) | NYC Metro / Long Island | [Bronx Information Portal (Lehman College Community Connect)](https://bronx.lehman.cuny.edu/) | Socrata | SODA | N | 352 | live |
| New York Public Library | NYC Metro / Long Island | [NYC Space/Time Directory](https://spacetime.nypl.org/) | Retired | Was bulk data + APIs | — | — | **dead** |
| New York Public Library | NYC Metro / Long Island | [NYPL Digital Collections API](https://api.repo.nypl.org/) | Custom REST | REST/JSON | Y | — | live |
| New York Public Library | NYC Metro / Long Island | [NYPL Map Warper](https://maps.nypl.org/warper/) | Map Warper (retired) | Was WMS/tiles + REST | — | — | **dead** |
| New York University Libraries | Statewide | [NYU Spatial Data Repository (now in UltraViolet)](https://ultraviolet.library.nyu.edu/communities/sdr/about) | InvenioRDM | InvenioRDM REST API | N | 50 | live |
| NYC Crash Mapper | NYC Metro / Long Island | [NYC Crash Mapper](https://crashmapper.org/) | Custom web map | UNCONFIRMED | UNCONFIRMED | — | live |
| NYU Furman Center | NYC Metro / Long Island | [CoreData.nyc and Data Set Downloads](https://coredata.nyc/) | Custom web map + static file downloads | Bulk download (CSV/XLSX) | N | — | live |
| Rauch Foundation (Long Island Index) | NYC Metro / Long Island | [Long Island Index](https://www.longislandindex.org/) | Retired | None | — | — | **dead** |
| Rochester Area Community Foundation | Western NY (Finger Lakes + WNY) | [ACT Rochester](https://www.actrochester.org/) | Squarespace | Per-indicator download buttons; no API found | N | — | live |
| Rockefeller Institute of Government (SUNY) | Statewide | [NY Counts Datacenter](https://www.rockinst.org/nycounts/data/) | WordPress | UNCONFIRMED | UNCONFIRMED | — | UNCONFIRMED |
| Social Science Research Council (Measure of America) | NYC Metro / Long Island | [DATA2GO.NYC](https://www.data2go.nyc/) | Static site + open file directory | Bulk download (CSV directory) | N | — | live |
| University at Albany (NYS Mesonet) | Statewide | [NYS Mesonet data](https://www.nysmesonet.org/) | Custom | Data request form; api.nysmesonet.org exists but undocumented | Y | — | live |

## Method and caveats

- **Verification.** Every URL was requested live, read-only, on 2026-11-05, and each row records its evidence: HTTP status, the owner (for ArcGIS sites, the DCAT feed's publisher, contact email domain and map extent), the API type and endpoint, and a dataset count where the source reports one. Where an API needs no key, one small example request was run. JavaScript-only pages were read in a browser (Playwright).
- **Jurisdiction rule.** Never trust a subdomain or slug. The first county directory carried 8 rows that belonged to other states; see [`ny-open-data-portals.md`](ny-open-data-portals.md) § Known gaps.
- **Counts are not comparable across platforms.** A Socrata "dataset," an ArcGIS "feature service" and a bulk download file are different things.
- **Some self-hosted ArcGIS servers block plain scripts.** If an example request returns 403, send a browser User-Agent (for example `curl -A 'Mozilla/5.0' …`).
- **Undocumented APIs** (found in a site's own code, not published by the owner) are marked "(undocumented)" and may change without notice. Sources that grant data access by account are listed as portals, not as open APIs.
- **Not included:** federal sources (except the data.gov cross-reference), paid parcel products, PDF-only report pages, and villages and towns under ~50,000 people.
- **Upkeep.** This is a one-time pass. A scheduled link check is a planned follow-up.
