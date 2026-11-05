---
title: "Glossary"
description: "Plain-language definitions of the data, technology and government terms used on this site."
---

# Glossary

Plain-language definitions of the terms used across this site. Terms are in alphabetical order, grouped by topic.

**Jump to:** [Open data basics](#open-data-basics) · [Getting data with code](#getting-data-with-code) · [Data platforms](#data-platforms) · [Maps and places](#maps-and-places) · [File formats](#file-formats) · [AI and connectors](#ai-and-connectors) · [Government and records](#government-and-records) · [The data directory](#the-data-directory)

## Open data basics

- **Bulk download**: Getting a whole dataset as a file, instead of asking for parts of it through an API.
- **Catalog**: A searchable list of datasets on a portal, with a description of each one.
- **Data site** (or data portal): A website where a government or organization publishes its data for anyone to use. NYC Open Data and data.ny.gov are examples.
- **Dataset**: One collection of related data, usually a table. For example, "311 Service Requests" is one dataset.
- **Dataset ID**: The short code that identifies a dataset. On Socrata portals it is two groups of four letters and numbers, like `abcd-1234`.
- **Metadata**: Information about a dataset rather than the data itself: its title, who publishes it, when it was last updated, and what each column means.
- **Open data**: Data that anyone can use, reuse and share for free, usually published by a government.
- **Open data portal**: See *Data site*.

## Getting data with code

- **API** (application programming interface): A way for a program to ask a website for data directly, instead of a person clicking through pages.
- **API address** (or endpoint): The specific web address a program sends requests to.
- **API key, token or app token**: A code you get by signing up, which a program sends with each request. Some APIs require one; others accept one to allow more requests. Keep keys private.
- **Error 403**: A response meaning "forbidden": the site refused the request. Some sites send it to scripts but not to browsers.
- **Error 404**: A response meaning "not found": nothing is at that address.
- **Query**: A request for specific data, such as "311 complaints in Brooklyn in 2026."
- **Rate limit**: A cap on how many requests a site will answer in a given time. Going over it gets requests blocked for a while.
- **REST**: A common style of web API, where each kind of data has its own web address and requests are ordinary web requests.
- **Undocumented API**: An API that a site uses for its own pages but has not published for others. It can work, but it can change or disappear without notice.
- **User-Agent**: A line a program sends with each request saying what it is, such as a web browser. Some servers block requests that don't look like a browser.

## Data platforms

- **ArcGIS**: Esri's family of mapping software. Many New York counties use it to publish map data.
- **ArcGIS Enterprise**: A version of ArcGIS that an organization runs on its own servers.
- **ArcGIS Hub**: Esri's tool for building an open data site on top of ArcGIS Online. Many county data sites are Hub sites.
- **ArcGIS Online**: Esri's hosted mapping service. Organizations publish maps and map layers there.
- **ArcGIS REST**: The API that ArcGIS servers use. Programs can ask it for map layers and the data inside them.
- **CKAN**: Open-source software for running a data catalog. The federal catalog, data.gov, has been built on it.
- **DCAT-US**: A standard way to describe datasets so catalogs can share them. Federal agencies use it, and ArcGIS Hub sites publish a DCAT-US list of their datasets.
- **Discovery API**: Socrata's API for searching across Socrata catalogs to find datasets.
- **Esri**: The company that makes ArcGIS.
- **Feature service** (FeatureServer, MapServer): An ArcGIS map layer published so that programs can request it, including the data behind each map shape.
- **Socrata**: The software behind NYC Open Data, data.ny.gov and several other portals. It is now part of Tyler Technologies.
- **SODA** (Socrata Open Data API): Socrata's API for reading data from a dataset.
- **SoQL** (Socrata Query Language): The query language SODA uses to filter, sort and summarize data, similar to SQL.
- **Tyler Technologies**: The company that owns Socrata, now sold as Tyler Data & Insights.

## Maps and places

- **BBL** (borough, block and lot): The number New York City uses to identify a tax lot.
- **BIN** (building identification number): The number New York City uses to identify a building.
- **Community district**: One of New York City's 59 areas, each served by a community board.
- **FIPS code**: A standard federal number for a state or county. New York State is 36.
- **Geocoding**: Turning an address into a location on a map, or into an identifier like a BBL.
- **GIS** (geographic information system): Software and data for making and analyzing maps.
- **Layer**: One set of map data, such as roads or tax parcels, that can be shown on a map.
- **Parcel**: A piece of land with its own tax record.

## File formats

- **CSV** (comma-separated values): A plain-text table, one row per line. Opens in any spreadsheet program.
- **GeoJSON**: A JSON format for map shapes and their data.
- **GTFS** (General Transit Feed Specification): A standard format for transit schedules, routes and stops. GTFS-Realtime adds live arrival and alert information.
- **JSON**: A text format for structured data that programs read easily.
- **Shapefile**: An older but common file format for map data, made by Esri.
- **XLSX**: A Microsoft Excel spreadsheet file.

## AI and connectors

- **AI assistant**: A chat tool, such as Claude or ChatGPT, that answers questions in plain language.
- **Connector** (MCP server): A small program that lets an AI assistant use an outside tool or data source, such as a data portal.
- **Grounding**: Making an AI assistant answer from real, checkable sources instead of from memory. See [why grounding matters](grounding-ai-agents.md).
- **Hallucination**: When an AI assistant states something false as if it were true, such as a bill number that does not exist.
- **MCP** (Model Context Protocol): An open standard for connecting AI assistants to tools and data. The connectors on this site use it.

## Government and records

- **311**: New York City's line and app for non-emergency service requests and city information.
- **Community board**: An appointed local body that advises on land use, budget and services for a community district.
- **FOIL** (Freedom of Information Law): New York State's public-records law. It lets anyone request records from state and local government.
- **Legistar**: The legislative records system that the New York City Council uses for bills, hearings and votes.
- **Public authority**: A state or local public corporation that runs a service, such as the MTA or the Port Authority.

## The data directory

These terms are used in the [New York data directory](../resources/ny-data-portal-registry.md).

- **Built on**: The software behind a data site, such as Socrata or ArcGIS.
- **How to get the data**: Whether a program can pull the data (an API), or whether you download files or search by hand.
- **Key needed?**: Whether you must sign up for a key before using the API.
- **Live**: The site worked when we checked it.
- **No data site**: We found no public data catalog for that place. It may still have a map viewer or a property search.
- **Not yet confirmed**: We could not verify the details. Check before you rely on them.
- **Offline**: The site is gone.
- **Type of source**: Which group a source belongs to: state data sites; state agencies, the Legislature and authorities; counties, cities and New York City agencies; or universities, libraries and nonprofits.

---

Missing a term, or is a definition unclear? [Give us feedback](../feedback.md).
