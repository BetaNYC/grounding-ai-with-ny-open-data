// Tests the explorer's filter logic against the real registry JSON.
// Run: node --test tests/registry-explorer.test.js   (Node 18+; no dependencies)
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const X = require('../assets/js/registry-explorer.js');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'resources', 'ny-data-portal-registry.json'), 'utf8'));
const rows = data.rows;
const S = (o) => Object.assign(X.emptyState(), o);

test('no filters returns every row', () => {
  assert.equal(rows.length, 160);
  assert.equal(X.filterRows(rows, X.emptyState()).length, rows.length);
  assert.equal(X.isFiltered(X.emptyState()), false);
});

test('single filters agree with a direct count of the JSON', () => {
  for (const t of ['1', '2', '3', '4']) {
    assert.equal(X.filterRows(rows, S({ tier: t })).length, rows.filter((r) => String(r.tier) === t).length);
  }
  for (const st of Object.keys(X.STATUSES)) {
    assert.equal(X.filterRows(rows, S({ status: st })).length, rows.filter((r) => r.status === st).length);
  }
  assert.equal(X.filterRows(rows, S({ key: 'none' })).length, rows.filter((r) => r.key_required === '—').length);
  assert.equal(X.filterRows(rows, S({ region: 'Capital Region' })).length, rows.filter((r) => r.region === 'Capital Region').length);
});

test('every key_required value maps to a filter option', () => {
  for (const r of rows) assert.ok(X.KEYS[X.keyCode(r)], `unmapped key ${r.key_required} on ${r.entity}`);
  for (const r of rows) assert.ok(X.STATUSES[r.status], `unmapped status ${r.status} on ${r.entity}`);
});

test('api and platform filters partition the rows', () => {
  const yes = X.filterRows(rows, S({ api: 'yes' })).length;
  const no = X.filterRows(rows, S({ api: 'no' })).length;
  assert.equal(yes + no, rows.length);
  const fam = ['socrata', 'arcgis', 'other'].map((p) => X.filterRows(rows, S({ platform: p })).length);
  assert.equal(fam.reduce((a, b) => a + b, 0), rows.length);
});

test('hasApi reads the free-text api_type sensibly', () => {
  const t = (api_type) => X.hasApi({ api_type });
  for (const v of ['SODA 2.x', 'ArcGIS REST', 'REST/JSON (undocumented)', 'Blacklight JSON API',
    'GTFS-Realtime (protobuf) + JSON alerts + static GTFS ZIP', 'InvenioRDM REST API']) assert.ok(t(v), v);
  for (const v of ['none', 'None', '—', '', null, 'UNCONFIRMED', 'Was bulk data + APIs', 'Web search (no public API found)',
    'bulk download (CSV)', 'Bulk download (ZIP of Access/Excel databases); no API found',
    'Data request form; api.nysmesonet.org exists but undocumented', 'Web portal; data access by account (by request)',
    'none verified (old CKAN action API at /api/3/action/* returns 404)', 'web query (no documented API)']) assert.ok(!t(v), String(v));
  // A "no API" row (key —) is never classed as having one.
  for (const r of rows) if (r.key_required === '—') assert.ok(!X.hasApi(r), `${r.entity}: key — but hasApi`);
});

test('platform family', () => {
  assert.equal(X.platformFamily({ platform: 'Socrata (Tyler Data & Insights)' }), 'socrata');
  assert.equal(X.platformFamily({ platform: 'Esri ArcGIS Server 11.5' }), 'arcgis');
  assert.equal(X.platformFamily({ platform: 'Schneider Beacon' }), 'other');
  const nyc = rows.find((r) => r.page === 'portals/new-york-city.md');
  assert.equal(X.platformFamily(nyc), 'socrata');
});

test('search matches every term, case-insensitively, across the five fields', () => {
  const monroe = X.filterRows(rows, S({ q: 'MONROE' }));
  assert.ok(monroe.some((r) => r.entity === 'Monroe County'));
  for (const r of monroe) {
    const h = [r.entity, r.portal_name, r.platform, r.notes, r.region].join(' ').toLowerCase();
    assert.ok(h.includes('monroe'));
  }
  // Two terms narrow, never widen.
  assert.ok(X.filterRows(rows, S({ q: 'county hub' })).length <= X.filterRows(rows, S({ q: 'county' })).length);
  assert.equal(X.filterRows(rows, S({ q: 'zzzz-not-there' })).length, 0);
});

test('filters combine', () => {
  const hits = X.filterRows(rows, S({ tier: '3', region: 'Capital Region', status: 'live' }));
  assert.ok(hits.length > 0);
  for (const r of hits) assert.ok(r.tier === 3 && r.region === 'Capital Region' && r.status === 'live');
});

test('query string round-trips, including awkward region names', () => {
  for (const region of new Set(rows.map((r) => r.region))) {
    const s = S({ region, q: 'a b', key: 'none', api: 'yes' });
    assert.deepEqual(X.parseState(X.serializeState(s)), s);
  }
  assert.equal(X.serializeState(X.emptyState()), '');
  assert.deepEqual(X.parseState('?bogus=1&tier=2'), S({ tier: '2' }));
});

test('parses the link the place pages emit (Python urlencode form)', () => {
  // build_registry.py: urlencode({"region": "Western NY (Finger Lakes + WNY)"})
  const s = X.parseState('?region=Western+NY+%28Finger+Lakes+%2B+WNY%29');
  assert.equal(s.region, 'Western NY (Finger Lakes + WNY)');
  assert.ok(X.filterRows(rows, s).length > 0);
});

test('every place page region link lands on a non-empty view', () => {
  for (const r of rows.filter((x) => x.page)) {
    assert.ok(X.filterRows(rows, S({ region: r.region })).includes(r));
    assert.match(X.pageHref(r.page), /^portals\/[a-z0-9-]+\.html$/);
  }
});

test('activeFilterCount counts the six filters, not the search box', () => {
  assert.equal(X.activeFilterCount(X.emptyState()), 0);
  assert.equal(X.activeFilterCount(S({ q: 'parcel' })), 0);
  assert.equal(X.activeFilterCount(S({ q: 'parcel', region: 'Capital Region', api: 'yes' })), 2);
  assert.equal(X.activeFilterCount(S({ tier: '1', region: 'x', status: 'live', api: 'no', key: 'N', platform: 'other' })), 6);
  assert.equal(X.activeFilterCount(X.parseState('?region=Capital+Region&api=yes')), 2);
});
