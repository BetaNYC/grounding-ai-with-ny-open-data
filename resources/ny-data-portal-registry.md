---
title: "New York data directory"
description: "Where to find public data about New York State, its counties and cities, and New York City, and how to get it."
status: draft
created: 2026-11-05
last_verified: 2026-11-05
---

# New York data directory

Where to find public data about New York: from the state, counties, cities (including New York City), and universities and nonprofits. For each source, it shows how you can get the data and whether you need to sign up for a key.

<link rel="stylesheet" href="{{ '/assets/css/registry.css' | relative_url }}">

<div id="registry-explorer" class="rx full" data-src="ny-data-portal-registry.json" hidden></div>

## Using this directory

### Other ways to use this page

- **Look up a county or city.** Every county and city has its own details page, listed by region in the [county and city index](portals/README.md).
- **Share what you found.** Your search and filters are saved in the page address. Copy it to share that view.
- **Download everything.** The full list is available as a spreadsheet ([CSV](ny-data-portal-registry.csv)) and as [JSON](ny-data-portal-registry.json) for code. Both include the API address for each source and notes not shown in the lists below.

### What the columns mean

For any other term, see the [glossary](../guides/glossary.md).

- **Data site:** the website where the data lives.
- **Built on:** the software behind the site. Many use Socrata (Tyler Technologies) or ArcGIS (Esri).
- **How to get the data:** how software can request the data. An *API* (application programming interface) lets a program ask for the data directly. *SODA* is Socrata's API. *ArcGIS REST* is Esri's. *Bulk download* means you download whole files.
- **Key needed?** "Yes" means you must sign up for a free key or token before using the API.
- **Datasets:** how many datasets the source says it has. Different platforms count in different ways, so compare with care.
- **Status:** *Live* means the site worked when we checked. *No data site* means we found no public data catalog for that place. *Offline* means the site is gone. *Not yet confirmed* means we could not verify it.

## All sources

### State data sites

Statewide data catalogs run by New York State.

| Who runs it | Data site | Built on | How to get the data | Key needed? | Datasets | Status |
|---|---|---|---|---|---|---|
| NYS Department of Health | [Health Data NY (health.data.ny.gov)](https://health.data.ny.gov/) | Socrata (Tyler Data & Insights) | SODA 2.x | No | 324 | Live |
| NYS Office of Information Technology Services (GIS Program Office) | [NYS GIS Clearinghouse (gis.ny.gov + data.gis.ny.gov)](https://data.gis.ny.gov/) | ArcGIS Hub (ArcGIS Online org 'ShareGIS NY', urlKey sharegisny); gis.ny.gov is the HTML front site | ArcGIS Hub / DCAT-US 1.1 feed; ArcGIS REST (hosted feature services) | No | 389 | Live |
| NYS Office of Information Technology Services (Open NY program) | [Open NY (data.ny.gov)](https://data.ny.gov/) | Socrata (Tyler Data & Insights) | SODA 2.x (+ Socrata Discovery API) | No | 1,036 | Live |
| State of New York (as harvested by data.gov) | [catalog.data.gov organization: State of New York](https://catalog.data.gov/organization/new-york) | CKAN-derived catalog (data.gov, GSA) | none verified (old CKAN action API at /api/3/action/* returns 404) | No | 1,164 | Live |

### State agencies, the Legislature and public authorities

State bodies that run their own data service or API. Agencies that only publish on data.ny.gov are covered by the Open NY row above.

| Who runs it | Data site | Built on | How to get the data | Key needed? | Datasets | Status |
|---|---|---|---|---|---|---|
| Capital District Transportation Authority (CDTA) | [CDTA Developer: Route and Schedule API + GTFS](https://www.cdta.org/developer) | custom | REST + GTFS / GTFS-Realtime | Not yet confirmed | 3 | Live |
| Metropolitan Transportation Authority | [MTA Real-time Data Feeds and static GTFS](https://api.mta.info/) | custom (GTFS / GTFS-Realtime) | GTFS-Realtime (protobuf) + JSON alerts + static GTFS ZIP | No | — | Live |
| Metropolitan Transportation Authority (NYCT / MTA Bus) | [MTA Bus Time API (SIRI)](https://bustime.mta.info/developers) | OneBusAway / SIRI | REST (SIRI JSON/XML) | Yes | — | Live |
| New York State Assembly | [Assembly Bill Search and Legislative Information](https://nyassembly.gov/leg/) | custom HTML | none (HTML query only) | No | — | Live |
| New York State Energy Research and Development Authority (NYSERDA) | [DER Integrated Data System](https://der.nyserda.ny.gov/) | custom web app | bulk download (CSV) + web query | No | 91 | Live |
| New York State Senate | [Open Legislation API](https://legislation.nysenate.gov/) | custom (NYS Senate OpenLeg) | REST/JSON | Yes | — | Live |
| Niagara Frontier Transportation Authority (NFTA) | [NFTA Metro Developer Tools (GTFS)](https://metro.nfta.com/about/developer-tools) | Drupal | GTFS static (ZIP) + GIS files | No | — | Live |
| NYS Adirondack Park Agency | [Adirondack Park Agency ArcGIS Online organization and Hub](https://adirondack-park-agency-adirondack.hub.arcgis.com/) | ArcGIS Online / ArcGIS Hub | ArcGIS REST (hosted FeatureServer) | No | 25 | Live |
| NYS Board of Elections | [Voter enrollment statistics (elections.ny.gov)](https://elections.ny.gov/enrollment-county) | Drupal (webny) | Bulk download (XLSX per snapshot); no API | No | — | Live |
| NYS Commission on Ethics and Lobbying in Government (COELIG) | [Lobbying Public Search Query (PSQ)](https://reports.ethics.ny.gov/publicquery) | ASP.NET web app | web query (no API) + Open NY datasets | No | 14 | Live |
| NYS Department of Environmental Conservation | [NYSDEC ArcGIS Online organization (nysdec)](https://services6.arcgis.com/DZHaqZm9cxOD4CWM/arcgis/rest/services) | ArcGIS Online | ArcGIS REST (hosted FeatureServer) | No | 842 | Live |
| NYS Department of Labor | [Labor Statistics (statistics.labor.ny.gov)](https://dol.ny.gov/labor-data) | Drupal (dol.ny.gov) + embedded Tableau dashboards + file downloads | Bulk download (ZIP/XLS) + Tableau dashboards; no API found | No | — | Live |
| NYS Department of State | [New York Geographic Information Gateway (opdgig.dos.ny.gov)](https://opdgig.dos.ny.gov/) | ArcGIS Hub (ArcGIS Online org NYSDOS) | ArcGIS Hub / DCAT-US 1.1 feed; ArcGIS REST | No | 1,888 | Live |
| NYS Department of Transportation | [511NY developer API](https://511ny.org/help/24 (title: "Requesting Access")) | 511NY traveler information platform | Data feeds: traffic events (JSON), camera inventory (XML), winter road conditions (JSON), message signs (JSON) | Yes | 4 | Live |
| NYS Department of Transportation | [NYSDOT GIS ArcGIS Server (gis.dot.ny.gov/hostingny)](https://gis.dot.ny.gov/hostingny/rest/services) | Esri ArcGIS Server 11.5 | ArcGIS REST (MapServer/FeatureServer) | No | — | Live |
| NYS Education Department | [NYSED Data Site (data.nysed.gov) downloads](https://data.nysed.gov/downloads.php) | Custom PHP site | Bulk download (ZIP of Access/Excel databases); no API found | No | 101 | Live |
| NYS Office of Information Technology Services (GIS Program Office) | [NYS ITS GIS ArcGIS Server (gisservices.its.ny.gov), incl. Street and Address Composite geocoder](https://gisservices.its.ny.gov/arcgis/rest/services) | Esri ArcGIS Server | ArcGIS REST (MapServer/FeatureServer/GeocodeServer) | No | — | Live |
| NYS Office of Information Technology Services (GIS Program Office) | [NYS Orthoimagery services (orthos.its.ny.gov)](https://orthos.its.ny.gov/arcgis/rest/services) | Esri ArcGIS Server | ArcGIS REST MapServer; WMS | No | — | Live |
| NYS Office of Parks, Recreation and Historic Preservation | [NYS OPRHP ArcGIS Online organization (nysparks)](https://services.arcgis.com/1xFZPtKn1wKC6POA/arcgis/rest/services) | ArcGIS Online | ArcGIS REST (hosted FeatureServer) | No | 172 | Live |
| NYS Unified Court System (Office of Court Administration) | [Division of Technology & Court Research - Court Data and Statistics](https://www.nycourts.gov/division-technology-court-research) | Drupal + dashboards | bulk download (CSV/XLSX) + dashboards | No | 1 | Live |
| Office of the State Comptroller | [Financial Data for Local Governments](https://wwe1.osc.state.ny.us/localgov/findata/financial-data-for-local-governments.cfm) | ColdFusion web app | bulk download (CSV/ZIP via form POST) | No | — | Live |
| Office of the State Comptroller | [Open Book New York (state checkbook, contracts, PARIS)](https://www.osc.ny.gov/open-book-new-york) | ColdFusion web apps (wwe2.osc.state.ny.us/transparency/) | web query + export (tab-delimited download) | No | — | Live |
| Port Authority of New York and New Jersey | [RidePATH real-time arrivals JSON](https://www.panynj.gov/bin/portauthority/ridepath.json) | AEM (panynj.gov) | REST/JSON (undocumented; no developer docs) | No | — | Live |
| Rochester-Genesee Regional Transportation Authority (RTS) | [RGRTA API (real-time + static)](https://www.myrts.com/RGRTA-API) | custom | REST (JSON or XML; JSON-P and CORS), static schedule + real-time | Yes | — | Live |

### Counties and cities

#### Counties and cities, including New York City

| Who runs it | Region | Data site | Built on | How to get the data | Key needed? | Datasets | Status | Details |
|---|---|---|---|---|---|---|---|---|
| Albany County | Capital Region | [Albany County NY Open Data](https://albany-county-ny-open-data-albcountygis.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | No | 41 | Live | [Albany County details](portals/albany-county.md) |
| Allegany County | Western NY (Finger Lakes + WNY) | [No portal found (parcel search only)](https://beacon.schneidercorp.com/Application.aspx?App=AlleganyCountyNY&PageType=Search) | Schneider Beacon | none | — | — | No data site | [Allegany County details](portals/allegany-county.md) |
| Broome County | Southern Tier | [Broome County GIS Portal](https://gis.broomecountyny.gov/website/gisweb/portal.htm) | Esri ArcGIS Server 10.61 + custom JS viewer page (not Hub) | ArcGIS REST | No | — | Live | [Broome County details](portals/broome-county.md) |
| Cattaraugus County | Western NY (Finger Lakes + WNY) | [Cattaraugus County GIS Hub](https://cattaraugus-county-gis-hub-cattco.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub/REST | No | 0 | Live | [Cattaraugus County details](portals/cattaraugus-county.md) |
| Cayuga County | Central NY | [No dedicated portal (Interactive GIS page)](https://www.cayugacounty.gov/687/Interactive-GIS) | ArcGIS Experience Builder viewer + ArcGIS Server (county-hosted) | ArcGIS REST | No | — | No data site | [Cayuga County details](portals/cayuga-county.md) |
| Chautauqua County | Western NY (Finger Lakes + WNY) | [No catalog UI (raw ArcGIS REST services)](https://maps.chautauquacounty.com/server/rest/services) | ArcGIS Server 10.91 (REST directory, no Hub front end) | ArcGIS REST | No | — | No data site | [Chautauqua County details](portals/chautauqua-county.md) |
| Chemung County | Southern Tier | [GIS Mapping Data page](https://chemungcountyny.gov/1382/GIS-Mapping-Data) | CivicPlus static page with Document Center downloads | none | — | — | Live | [Chemung County details](portals/chemung-county.md) |
| Chenango County | Southern Tier | [Online GIS Information page (paid subscription)](https://www.chenangocountyny.gov/323/Online-GIS-Information) | Schneider Geospatial (paid subscription) | none | — | — | No data site | [Chenango County details](portals/chenango-county.md) |
| City of Albany | Capital Region | openAlbany (offline) | Socrata (retired) | None (portal offline) | — | — | Offline | [City of Albany details](portals/city-of-albany.md) |
| City of Buffalo | Western NY (Finger Lakes + WNY) | [Open Data Buffalo](https://data.buffalony.gov/) | Socrata | SODA | No | 139 | Live | [City of Buffalo details](portals/city-of-buffalo.md) |
| City of Mount Vernon | NYC Metro / Long Island | [No catalog (public ArcGIS Enterprise services + dashboards)](https://gis.cmvny.com/server/rest/services) | ArcGIS Enterprise 11.3 (self-hosted; no Sites/Hub catalog) | ArcGIS REST (Enterprise portal + server) | No | — | No data site | [City of Mount Vernon details](portals/city-of-mount-vernon.md) |
| City of New Rochelle | NYC Metro / Long Island | No portal found | — | none | — | — | No data site | [City of New Rochelle details](portals/city-of-new-rochelle.md) |
| City of Rochester | Western NY (Finger Lakes + WNY) | [DataROC](https://data.cityofrochester.gov/) | ArcGIS Hub | ArcGIS Hub/REST | No | 52 | Live | [City of Rochester details](portals/city-of-rochester.md) |
| City of Schenectady | Capital Region | ["Open Data Portal" page (PDF reports only)](https://www.cityofschenectady.gov/605/Open-Data-Portal) | City web page (CivicPlus), PDF reports | none | — | — | No data site | [City of Schenectady details](portals/city-of-schenectady.md) |
| City of Syracuse | Central NY | [Open Data Syracuse](https://data.syr.gov/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | No | 136 | Live | [City of Syracuse details](portals/city-of-syracuse.md) |
| City of Troy | Capital Region | No portal found | — | none | — | — | No data site | [City of Troy details](portals/city-of-troy.md) |
| City of Utica | Central NY | [No dedicated portal (GIS Maps page)](https://www.cityofutica.com/maps/gis-maps/index) | ArcGIS Experience Builder viewer + Schneider Beacon | ArcGIS REST (org feature services) | No | — | No data site | [City of Utica details](portals/city-of-utica.md) |
| City of White Plains | NYC Metro / Long Island | No portal found | — | none | — | — | No data site | [City of White Plains details](portals/city-of-white-plains.md) |
| City of Yonkers | NYC Metro / Long Island | [No general portal found](https://imo.yonkersny.gov/index.aspx) | Image Mate Online (assessment records) | none | — | — | No data site | [City of Yonkers details](portals/city-of-yonkers.md) |
| Clinton County | North Country | [No portal found (map viewer only)](https://www.clintoncountyny.gov/planning/gis-map) | ArcGIS Online (Experience Builder app) | none | — | — | No data site | [Clinton County details](portals/clinton-county.md) |
| Columbia County | Capital Region | [Columbia County Geo-Data](https://geodata-cc-ny.opendata.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | No | 55 | Live | [Columbia County details](portals/columbia-county.md) |
| Cortland County | Central NY | [Cortland County GIS Portal](https://cortland-county-gis-portal-cortlandplanning.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | No | 28 | Live | [Cortland County details](portals/cortland-county.md) |
| Delaware County | Southern Tier | [No portal found](https://www.delcony.gov/) | — | none | — | — | No data site | [Delaware County details](portals/delaware-county.md) |
| Dutchess County | Hudson Valley | [Dutchess County GIS Open Data](https://opendata-dcny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | No | 28 | Live | [Dutchess County details](portals/dutchess-county.md) |
| Erie County | Western NY (Finger Lakes + WNY) | [No confirmed catalog (GIS office pages)](https://www3.erie.gov/gis/) | Custom site + ArcGIS Online viewers | none | — | — | No data site | [Erie County details](portals/erie-county.md) |
| Essex County | North Country | [No portal found (parcel viewer + REST)](https://essex-gis.co.essex.ny.us/) | Esri ArcGIS Server 11.3 (parcel viewer) | ArcGIS REST | No | — | No data site | [Essex County details](portals/essex-county.md) |
| Franklin County | North Country | [No portal found (parcel search only)](https://beacon.schneidercorp.com/Application.aspx?App=FranklinCountyNY&PageType=Search) | Schneider Beacon | none | — | — | No data site | [Franklin County details](portals/franklin-county.md) |
| Fulton County | Mohawk Valley | [No portal found (Real Property Tax Service Agency page)](https://www.fultoncountyny.gov/real-property-tax-service-agency) | Schneider Beacon / Image Mate Online (parcel viewer) | none | — | — | No data site | [Fulton County details](portals/fulton-county.md) |
| Genesee County | Western NY (Finger Lakes + WNY) | [Genesee County GIS Data](https://gis-data-cogeneseeny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub/REST | No | 4 | Live | [Genesee County details](portals/genesee-county.md) |
| Greene County | Capital Region | [No portal found (web map viewer)](https://gis.gcgovny.com/greenewebmap/) | Esri web map (viewer) on ArcGIS Server 10.91 | ArcGIS REST (raw services behind the viewer; no catalog) | No | — | No data site | [Greene County details](portals/greene-county.md) |
| Hamilton County | North Country | [No portal found (parcel viewer only)](https://beacon.schneidercorp.com/Application.aspx?App=HamiltonCountyNY&PageType=Map) | Schneider Beacon | none | — | — | No data site | [Hamilton County details](portals/hamilton-county.md) |
| Herkimer County | Central NY | [No dedicated portal (County Maps page)](https://www.herkimercountyny.gov/county-maps/) | Schneider Beacon (property) + static map pages | none | — | — | No data site | [Herkimer County details](portals/herkimer-county.md) |
| Jefferson County | North Country | [No portal found (parcel search only)](https://www.jeffersoncountyny.gov/gis-maps-property-search) | Schneider Beacon (parcel search) | none | — | — | No data site | [Jefferson County details](portals/jefferson-county.md) |
| Lewis County | North Country | [No portal found (map application only)](https://lewiscountyny.gov/departments/real-property/gis-mapping-web-application/) | Schneider Beacon | none | — | — | No data site | [Lewis County details](portals/lewis-county.md) |
| Livingston County | Western NY (Finger Lakes + WNY) | [Livingston County GIS Portal](https://gis.livingstoncountyny.gov/portal/home/index.html) | ArcGIS Enterprise (self-hosted Portal, no Sites catalog) | ArcGIS REST | No | — | Live | [Livingston County details](portals/livingston-county.md) |
| Madison County | Central NY | [No dedicated portal](https://www.madisoncounty.ny.gov/254/Prices-for-Map-Copies-GIS-Data) | Static map pages + paid data request; Schneider Beacon (property) | none | — | — | No data site | [Madison County details](portals/madison-county.md) |
| Monroe County | Western NY (Finger Lakes + WNY) | [MCGIS Hub](https://maps.monroecounty.gov/portal/apps/sites/#/mcgis) | ArcGIS Enterprise (self-hosted Sites) | ArcGIS REST (Enterprise portal) | No | 77 | Live | [Monroe County details](portals/monroe-county.md) |
| Montgomery County | Mohawk Valley | [No portal found (Real Property GIS page)](https://www.montgomerycountyny.gov/web/sites/departments/realproperty/gis.asp) | Static page; parcels hosted on the NYS GIS Clearinghouse | none | — | — | No data site | [Montgomery County details](portals/montgomery-county.md) |
| Nassau County | NYC Metro / Long Island | [Open Nassau (+ Open Payroll / Open Budget / Open Checkbook)](https://opendata.nassaucountyny.gov/) | Socrata (Tyler Technologies) | SODA | No | 17 | Live | [Nassau County details](portals/nassau-county.md) |
| New York City | NYC Metro / Long Island | [NYC Open Data](https://data.cityofnewyork.us/) | Socrata (Tyler Technologies) | SODA | No | 2,412 | Live | [New York City details](portals/new-york-city.md) |
| Niagara County | Western NY (Finger Lakes + WNY) | [No portal found (map viewer only)](https://niagara-county.maps.arcgis.com/apps/webappviewer/index.html?id=b5be67cf0e05477e8f4ad3161ab51422) | ArcGIS Online (Web AppViewer) | none | — | — | No data site | [Niagara County details](portals/niagara-county.md) |
| Oneida County | Central NY | [No catalog; public ArcGIS Enterprise](https://oneidacountyny.gov/departments/planning/gis-servicesmapping-resources/) | ArcGIS Enterprise 11.5 (county-hosted, maps.oneidacountyny.gov) | ArcGIS REST | No | — | No data site | [Oneida County details](portals/oneida-county.md) |
| Onondaga County | Central NY | [No dedicated portal (GIS Division page)](https://onondaga.gov/planning/gis/) | Hosted web viewer (spatial.vhb.com) + Map Gallery | none | — | — | No data site | [Onondaga County details](portals/onondaga-county.md) |
| Ontario County | Western NY (Finger Lakes + WNY) | [Ontario County GIS Mapping Center](https://ontario-county-gis-mapping-center-ontariocony.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub/REST | No | 12 | Live | [Ontario County details](portals/ontario-county.md) |
| Orange County | Hudson Valley | [Orange County GIS (OCGIS) site](https://gis.orangecountygov.com/portal/apps/sites/#/ocgis) | ArcGIS Enterprise (self-hosted Sites) + ArcGIS Server 10.91 | ArcGIS REST (Enterprise portal + server) | No | 1 | Live | [Orange County details](portals/orange-county.md) |
| Orleans County | Western NY (Finger Lakes + WNY) | [No portal found (map viewer + PDF maps)](https://www.orleanscountyny.gov/departments/planning/geographic_information_systems_(gis).php) | County GIS page (PDF maps, viewer user guide) | none | — | — | No data site | [Orleans County details](portals/orleans-county.md) |
| Oswego County | Central NY | [Oswego County Data / GIS](https://data-oswegogis.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | No | 23 | Live | [Oswego County details](portals/oswego-county.md) |
| Otsego County | Southern Tier | [Otsego County GIS](https://otsego-county-gis-otsegocountyny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | No | 64 | Live | [Otsego County details](portals/otsego-county.md) |
| Putnam County | NYC Metro / Long Island | [Putnam County, NY](https://data-pcny.opendata.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records) / ArcGIS REST | No | 26 | Live | [Putnam County details](portals/putnam-county.md) |
| Rensselaer County | Capital Region | [No dedicated portal](https://www.rensco.com/487/Geographic-Information-System-GIS---Mapp) | County web page (links out) | none | — | — | No data site | [Rensselaer County details](portals/rensselaer-county.md) |
| Rockland County | NYC Metro / Long Island | [Rockland County GIS Portal](https://www.rocklandgis.com/portal/apps/sites/#/data) | ArcGIS Enterprise 11.3 (self-hosted Portal + Sites) | ArcGIS REST (Enterprise portal sharing API + ArcGIS Server) | No | — | Live | [Rockland County details](portals/rockland-county.md) |
| Saratoga County | Capital Region | [No dedicated portal](https://www.saratogacountyny.gov/departments/real-property-tax-service/) | Vendor map viewer (VHB) + assessment database | none | — | — | No data site | [Saratoga County details](portals/saratoga-county.md) |
| Schenectady County | Capital Region | [No dedicated county-level portal](https://www.schenectadycountyny.gov/taxmaps) | Schneider Beacon (parcel search); SIMS (login-gated) | none | — | — | No data site | [Schenectady County details](portals/schenectady-county.md) |
| Schoharie County | Capital Region | [No portal found](https://spatial.vhb.com/SchoharieMapViewer/) | Vendor map viewer (VHB) + Schneider Beacon | none | — | — | No data site | [Schoharie County details](portals/schoharie-county.md) |
| Schuyler County | Southern Tier | [GIS Shapefile page](https://www.schuylercountyny.gov/1066/GIS-Shapefile) | CivicPlus static page + ArcGIS Online web viewer | none | — | — | Live | [Schuyler County details](portals/schuyler-county.md) |
| Seneca County | Western NY (Finger Lakes + WNY) | [No portal found (parcel search only)](https://beacon.schneidercorp.com/Application.aspx?App=SenecaCountyNY&PageType=Search) | Schneider Beacon | none | — | — | No data site | [Seneca County details](portals/seneca-county.md) |
| St. Lawrence County | North Country | [No portal found (DANC regional viewer)](https://maps.dancgis.org/ima/?IMA=St.+Lawrence) | DANC Internet Mapping Application (custom/Esri) | ArcGIS REST (DANC regional server) | No | — | No data site | [St. Lawrence County details](portals/st-lawrence-county.md) |
| Steuben County | Southern Tier | [Steuben County GIS](https://steubencounty-scnygis.opendata.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search) + ArcGIS REST | No | 11 | Live | [Steuben County details](portals/steuben-county.md) |
| Suffolk County | NYC Metro / Long Island | [Suffolk County Open Data](https://opendata.suffolkcountyny.gov/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | No | 189 | Live | [Suffolk County details](portals/suffolk-county.md) |
| Sullivan County | Hudson Valley | [Sullivan County GISOnline Geoportal](https://gis2017-04-13t155717567z-sullconygiso.opendata.arcgis.com/) | ArcGIS Hub (older Hub Basic site) | ArcGIS Hub (DCAT) / ArcGIS REST | No | 54 | Live | [Sullivan County details](portals/sullivan-county.md) |
| Tioga County | Southern Tier | [Tioga County One Map](https://tioga-county-one-map-tiogacountyny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS REST (org feature services); Hub search returns no datasets | No | 0 | Live | [Tioga County details](portals/tioga-county.md) |
| Tompkins County | Southern Tier | [Tompkins County Open Data Portal](https://tcdata-tompkinscounty.opendata.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC API Records search, DCAT-US) + ArcGIS REST | No | 32 | Live | [Tompkins County details](portals/tompkins-county.md) |
| Ulster County | Hudson Valley | [GIS Data (Dept. of Information Services)](https://www.ulstercountyny.gov/Departments/Information-Services/GIS-Services/GIS-Data) | County web page with direct downloads + ArcGIS Server 11.5 REST | ArcGIS REST | No | — | Live | [Ulster County details](portals/ulster-county.md) |
| Warren County | Capital Region | [Warren County NY GIS](https://warren-county-gis-warrencountyny.hub.arcgis.com/) | ArcGIS Hub | ArcGIS Hub (OGC Records + DCAT) / ArcGIS REST | No | 4 | Live | [Warren County details](portals/warren-county.md) |
| Washington County | Capital Region | [No open data catalog (parcel viewer)](https://gis.washingtoncountyny.gov/webmap/) | Esri web map (viewer) on ArcGIS Server 10.9 | ArcGIS REST (raw services behind the viewer; no catalog) | No | — | No data site | [Washington County details](portals/washington-county.md) |
| Wayne County | Western NY (Finger Lakes + WNY) | [Open Data Portal (Wayne County GIS)](https://gis.co.wayne.ny.us/portal/apps/sites/#/wcgis/search?collection=Dataset) | ArcGIS Enterprise (self-hosted Sites) | ArcGIS REST (Enterprise portal) | No | 108 | Live | [Wayne County details](portals/wayne-county.md) |
| Westchester County | NYC Metro / Long Island | [Westchester GeoHub v2](https://gis.westchestercountyny.gov/) | ArcGIS Hub (custom domain) + county ArcGIS Server | ArcGIS Hub (OGC Records) / ArcGIS REST | No | 91 | Live | [Westchester County details](portals/westchester-county.md) |
| Wyoming County | Western NY (Finger Lakes + WNY) | [No portal found (map apps only)](https://www.wyomingcountyny.gov/645/Geographic-Information-Systems-GIS) | ArcGIS Online (individual apps) | ArcGIS REST (org services, no catalog) | No | — | No data site | [Wyoming County details](portals/wyoming-county.md) |
| Yates County | Western NY (Finger Lakes + WNY) | [Yates County GIS Portal](https://gisportal.yatescounty.org/portal/home/) | ArcGIS Enterprise (self-hosted Portal, no Sites catalog) | ArcGIS REST (Enterprise portal) | No | 80 | Live | [Yates County details](portals/yates-county.md) |

#### New York City agencies

City agencies and offices that run their own data service or API. NYC Open Data is listed in the table above.

| Who runs it | Data site | Built on | How to get the data | Key needed? | Datasets | Status |
|---|---|---|---|---|---|---|
| Board of Elections in the City of New York | [Election results (vote.nyc) and Election Night Results](https://vote.nyc/page/election-results-summary) | Drupal + static ENR | bulk download (CSV/PDF) | No | — | Live |
| New York City Council | [Legistar Web API (NYC Council)](https://webapi.legistar.com/v1/nyc/) | Granicus Legistar | REST/JSON (OData-style) | Yes | — | Live |
| New York City Police Department | [CompStat 2.0](https://compstat.nypdonline.org/) | custom dashboard | web query (no documented API) | No | — | Live |
| NYC Campaign Finance Board | [Follow the Money - Data Library](https://www.nyccfb.info/follow-the-money/data-library/) | custom (nyccfb.info) | bulk download (CSV) | No | — | Live |
| NYC Department of Buildings | [Building Information System (BIS)](https://a810-bisweb.nyc.gov/bisweb/bsqpm01.jsp) | Java web app | web query (no API) | No | — | Live |
| NYC Department of City Planning | [BYTES of the BIG APPLE / DCP Open Data](https://www.nyc.gov/site/planning/data-maps/open-data.page) | nyc.gov CMS | bulk download (shapefile/CSV/FileGDB) | No | — | Live |
| NYC Department of City Planning | [NYC DCP Mapping Portal (ArcGIS REST)](https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services) | ArcGIS Online | ArcGIS REST (FeatureServer) | No | 530 | Live |
| NYC Department of Citywide Administrative Services | [The City Record Online (CROL)](https://a856-cityrecord.nyc.gov/) | custom web app | web query (no API) | No | — | Live |
| NYC Department of Finance | [Rolling Sales Data](https://www.nyc.gov/site/finance/property/property-rolling-sales-data.page) | nyc.gov CMS | bulk download (XLSX) | No | 5 | Live |
| NYC Department of Health and Mental Hygiene | [Environment and Health Data Portal](https://a816-dohbesp.nyc.gov/IndicatorPublic/) | custom static site + GitHub | bulk download (CSV via GitHub) + web query | No | — | Live |
| NYC Department of Transportation | [NYCTMC Traffic Cameras API](https://webcams.nyctmc.org/) | custom | REST/JSON | No | — | Live |
| NYC Independent Budget Office | [IBO Data Center (NYC Fiscal History)](https://www.ibo.nyc.gov/content/data-center) | custom JS site | bulk download (XLSX) | No | 29 | Live |
| NYC Office of Technology and Innovation (OTI) | [NYC API Developers Portal](https://api-portal.nyc.gov/) | Azure API Management | REST (multiple) | Yes | 8 | Live |
| NYC Office of Technology and Innovation (OTI) / Department of City Planning | [Geoclient v2](https://api-portal.nyc.gov/) | Azure API Management (Geosupport backend) | REST/JSON | Yes | — | Live |
| NYC Public Schools (DOE) | [InfoHub reports and data](https://infohub.nyced.org/reports) | custom CMS | Bulk download (XLSX and PDF files); no API | No | — | Live |
| NYC311 | [NYC 311 Public API](https://api-portal.nyc.gov/api-details#api=nyc-311-public-api) | Azure API Management | REST/JSON (Azure API Management; OpenAPI 3 and 2 definitions downloadable from the portal) | Yes | — | Live |
| Office of the New York City Comptroller | [Checkbook NYC API](https://www.checkbooknyc.com/data-feeds/api) | Checkbook NYC 2.0 (Drupal) | REST (XML over HTTP POST) | No | — | Live |

### Universities, libraries and nonprofits

Sources outside government that publish data about New York.

| Who runs it | Region | Data site | Built on | How to get the data | Key needed? | Datasets | Status |
|---|---|---|---|---|---|---|---|
| Association for Neighborhood and Housing Development (ANHD) | NYC Metro / Long Island | [Displacement Alert Project (DAP) Portal and API](https://portal.displacementalert.org/) | React app + Django REST API | Web portal; data access by account (by request) | Yes | — | Live |
| Baruch College (CUNY) Newman Library | NYC Metro / Long Island | [NYC Geodatabase (Baruch Geoportal)](https://www.baruch.cuny.edu/confluence/display/geoportal/NYC+Geodatabase) | Confluence | Bulk download (SpatiaLite and MS Access personal geodatabase ZIPs), per search-indexed copies only | — | — | Not yet confirmed |
| Central New York Community Foundation | Central NY | [CNY Vitals](https://pro.cnyvitals.org/) | Datawheel (D3plus front end; Tesseract OLAP API) | REST/JSON (Tesseract `data.jsonrecords`; undocumented on the site) + per-chart "Download data" | No | — | Live |
| Citizens Budget Commission | Statewide | [CBC website (data tools UNCONFIRMED)](https://cbcny.org/) | Drupal site behind Cloudflare; Datawrapper charts | none (reports, Datawrapper-chart dashboards, an AI Q&A over its publications) | — | — | No data site |
| Citizens' Committee for Children of New York | NYC Metro / Long Island | [Keeping Track Online](https://data.cccnewyork.org/) | Custom web app | Indicator pages with Export (CSV) button; no API found | No | 124 | Live |
| Columbia University Libraries | Statewide | [Columbia GeoData](https://geodata.library.columbia.edu/) | GeoBlacklight | Blacklight JSON API | No | 104,570 | Live |
| Cornell University (Northeast Regional Climate Center) | Statewide | [RCC-ACIS web services](https://www.nrcc.cornell.edu/) | ACIS | REST/JSON | No | — | Live |
| Cornell University (Program on Applied Demographics) | Statewide | [PAD data: county and state projections, Census 2020, school districts](https://pad.human.cornell.edu/) | ColdFusion web app | Interactive GET query form; no documented API | No | — | Live |
| Cornell University Library | Statewide | [CUGIR (Cornell University Geospatial Information Repository)](https://cugir.library.cornell.edu/) | GeoBlacklight | Blacklight JSON API; bulk download per record | No | 893 | Live |
| CUNY Graduate Center, Center for Urban Research | Statewide | [Redistricting & You / CUNY Mapping Service](https://newyork.redistrictingandyou.org/) | Vue + Mapbox GL web app | none (interactive web map only) | — | — | Live |
| Empire Center for Public Policy | Statewide | [SeeThroughNY](https://www.seethroughny.net/) | Custom web database | Web search (no public API found) | No | — | Live |
| intro.nyc (independent project) | NYC Metro / Long Island | [intro.nyc and nyc_legislation data mirror](https://intro.nyc/) | Static site + GitHub data repo | Bulk JSON in GitHub repo | No | — | Live |
| John Jay College (CUNY) Data Collaborative for Justice | Statewide | [DCJ Analytic Tools](https://datacollaborativeforjustice.org/analytic-tools/) | WordPress + embedded dashboards | Interactive dashboards; download UNCONFIRMED | No | — | Live |
| JustFix | NYC Metro / Long Island | [Who Owns What](https://whoownswhat.justfix.org/) | Django API + React front end | REST/JSON (undocumented) | No | — | Live |
| Lehman College (CUNY) | NYC Metro / Long Island | [Bronx Information Portal (Lehman College Community Connect)](https://bronx.lehman.cuny.edu/) | Socrata | SODA | No | 352 | Live |
| New York Public Library | NYC Metro / Long Island | [NYC Space/Time Directory](https://spacetime.nypl.org/) | Retired | Was bulk data + APIs | — | — | Offline |
| New York Public Library | NYC Metro / Long Island | [NYPL Digital Collections API](https://api.repo.nypl.org/) | Custom REST | REST/JSON | Yes | — | Live |
| New York Public Library | NYC Metro / Long Island | [NYPL Map Warper](https://maps.nypl.org/warper/) | Map Warper (retired) | Was WMS/tiles + REST | — | — | Offline |
| New York University Libraries | Statewide | [NYU Spatial Data Repository (now in UltraViolet)](https://ultraviolet.library.nyu.edu/communities/sdr/about) | InvenioRDM | InvenioRDM REST API | No | 50 | Live |
| NYC Crash Mapper | NYC Metro / Long Island | [NYC Crash Mapper](https://crashmapper.org/) | Custom web map | UNCONFIRMED | Not yet confirmed | — | Live |
| NYU Furman Center | NYC Metro / Long Island | [CoreData.nyc and Data Set Downloads](https://coredata.nyc/) | Custom web map + static file downloads | Bulk download (CSV/XLSX) | No | — | Live |
| Rauch Foundation (Long Island Index) | NYC Metro / Long Island | [Long Island Index](https://www.longislandindex.org/) | Retired | None | — | — | Offline |
| Rochester Area Community Foundation | Western NY (Finger Lakes + WNY) | [ACT Rochester](https://www.actrochester.org/) | Squarespace | Per-indicator download buttons; no API found | No | — | Live |
| Rockefeller Institute of Government (SUNY) | Statewide | [Rockefeller Institute Data Hub: New York Data Sets (NYS Statistical Yearbook tables)](https://www.rockinst.org/data-hub/new-york-data-sets-001/) | WordPress | Bulk download (XLS files) | No | 558 | Live |
| Social Science Research Council (Measure of America) | NYC Metro / Long Island | [DATA2GO.NYC](https://www.data2go.nyc/) | Static site + open file directory | Bulk download (CSV directory) | No | — | Live |
| University at Albany (NYS Mesonet) | Statewide | [NYS Mesonet data](https://www.nysmesonet.org/) | Custom | Data request form; api.nysmesonet.org exists but undocumented | Yes | — | Live |

## About this directory

**This is a draft.** 140 sources: 98 live, 37 with no data site, 1 not yet confirmed, 4 offline. Rows marked "Not yet confirmed" need a person to check them before you rely on them.

**Last checked:** 2026-11-05.

### How we checked

- We visited every web address on 2026-11-05 without logging in. For each source we recorded who runs it, how to get the data, and how many datasets it lists.
- We confirmed each source is really in New York by checking who publishes it, not just its web address. An earlier version of the county list included 8 sites from other states with similar names.
- Where an API needed no key, we ran one small test request.

### Things to know

- **Some county map servers block scripts.** If a test request gets an error 403, have it identify itself as a web browser, for example `curl -A 'Mozilla/5.0' …`.
- **Some APIs are undocumented.** They are marked "(undocumented)". The owner has not published them, so they may change without notice.
- **Some sources need an account.** Those are listed as data sites, not as open APIs.
- **Not included:** federal data (except a link to data.gov), paid property-record services, sites with only PDF reports, and villages and towns under about 50,000 people.

### Updates

- **2026-11-05:** first version. 140 sources checked, a details page for every county and city, and the search and filter tool.
- **2026-11-05:** rechecked the 11 sources marked "Not yet confirmed" in a browser. 10 now have a confirmed status; one (Baruch's NYC Geodatabase) is still unconfirmed because it only works on campus. Labor, 511NY, NYC 311 and Rockefeller rows point to new addresses.
- Planned: a monthly check that every link still works.

Spotted a wrong link, a missing source or a closed site? [Give us feedback](../feedback.md).

How this was built: [research plan](2026-11-05-research-plan-ny-data-portal-registry.md). The earlier county and city list: [ny-open-data-portals.md](ny-open-data-portals.md).

<script src="{{ '/assets/js/registry-explorer.js' | relative_url }}"></script>
