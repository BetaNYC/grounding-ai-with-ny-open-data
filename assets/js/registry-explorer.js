/* Explorer for resources/ny-data-portal-registry.md.

   Loads ny-data-portal-registry.json (the source of truth, same folder as the
   page) and renders a search box, filters and result cards into
   <div id="registry-explorer" data-src="..." hidden>. The static tables on the
   page stay in place, so the page still works without JavaScript; the explorer
   only un-hides itself once the data has loaded.

   Filter state lives in the query string (?q=&tier=&region=&status=&api=&key=
   &platform=) so a filtered view can be shared. Plain ES5-era JavaScript, no
   dependencies, no build step, no external requests.

   The pure functions (Core) are also exported for Node, so they can be tested
   against the real JSON: node --test tests/registry-explorer.test.js */
(function (root) {
  'use strict';

  // ------------------------------------------------------------ Core

  var TIERS = { '1': 'State data sites', '2': 'State agencies, Legislature, authorities',
    '3': 'Counties, cities and NYC agencies', '4': 'Universities, libraries, nonprofits' };
  var STATUSES = { 'live': 'Live', 'no-portal': 'No data site', 'UNCONFIRMED': 'Not yet confirmed', 'dead': 'Offline' };
  // "—" is awkward in a URL, so the query string says key=none.
  var KEYS = { 'N': 'No key needed', 'Y': 'Key needed', 'none': 'No API', 'UNCONFIRMED': 'Not yet confirmed' };
  var PLATFORMS = { 'socrata': 'Socrata', 'arcgis': 'ArcGIS / Esri', 'other': 'Other' };
  var APIS = { 'yes': 'Can be pulled with code (API)', 'no': 'No API found' };
  var PARAMS = ['q', 'tier', 'region', 'status', 'api', 'key', 'platform'];

  function str(v) { return v === null || v === undefined ? '' : String(v); }

  function platformFamily(row) {
    var p = str(row.platform) + ' ' + str(row.api_type);
    if (/socrata|\bSODA\b/i.test(p)) return 'socrata';
    if (/arcgis|esri/i.test(p)) return 'arcgis';
    return 'other';
  }

  // api_type is free text. An API is something a program can call: SODA,
  // REST, ArcGIS services, GTFS feeds, an explicit "API". Bulk downloads,
  // web forms, "none" and retired services ("Was ...") are not.
  function hasApi(row) {
    var t = str(row.api_type).trim();
    if (!t || t === '—') return false;
    if (/^(none|was |web portal|data request|unconfirmed$)/i.test(t)) return false;
    if (/no (public |documented )?api/i.test(t)) return false;
    return /\bSODA\b|\bREST\b|ArcGIS|GTFS|\bSIRI\b|\bOData\b|\bWMS\b|\bOGC\b|\bAPI\b/i.test(t);
  }

  function keyCode(row) { return row.key_required === '—' ? 'none' : str(row.key_required); }

  function emptyState() { return { q: '', tier: '', region: '', status: '', api: '', key: '', platform: '' }; }

  function parseState(search) {
    var s = emptyState();
    var qs = str(search).replace(/^[?#]/, '');
    if (!qs) return s;
    qs.split('&').forEach(function (pair) {
      if (!pair) return;
      var i = pair.indexOf('=');
      var k = decodeURIComponent((i < 0 ? pair : pair.slice(0, i)).replace(/\+/g, ' '));
      var v = i < 0 ? '' : decodeURIComponent(pair.slice(i + 1).replace(/\+/g, ' '));
      if (PARAMS.indexOf(k) >= 0) s[k] = v;
    });
    return s;
  }

  function serializeState(s) {
    var out = [];
    PARAMS.forEach(function (k) {
      if (s[k]) out.push(encodeURIComponent(k) + '=' + encodeURIComponent(s[k]).replace(/%20/g, '+'));
    });
    return out.length ? '?' + out.join('&') : '';
  }

  function haystack(row) {
    return [row.entity, row.portal_name, row.platform, row.notes, row.region]
      .map(str).join(' \u0001 ').toLowerCase();
  }

  function matches(row, s) {
    if (s.tier && str(row.tier) !== s.tier) return false;
    if (s.region && row.region !== s.region) return false;
    if (s.status && row.status !== s.status) return false;
    if (s.key && keyCode(row) !== s.key) return false;
    if (s.platform && platformFamily(row) !== s.platform) return false;
    if (s.api === 'yes' && !hasApi(row)) return false;
    if (s.api === 'no' && hasApi(row)) return false;
    if (s.q) {
      var h = haystack(row);
      var terms = s.q.toLowerCase().split(/\s+/).filter(Boolean);
      for (var i = 0; i < terms.length; i++) if (h.indexOf(terms[i]) < 0) return false;
    }
    return true;
  }

  function filterRows(rows, s) { return rows.filter(function (r) { return matches(r, s); }); }

  function isFiltered(s) { return PARAMS.some(function (k) { return !!s[k]; }); }

  // Filters behind the narrow-screen "Filters (n)" toggle: everything but search.
  function activeFilterCount(s) {
    return PARAMS.filter(function (k) { return k !== 'q' && !!s[k]; }).length;
  }

  // Place pages are listed as portals/x.md; Jekyll publishes them as .html.
  function pageHref(page) { return page ? str(page).replace(/\.md$/, '.html') : ''; }

  var Core = { platformFamily: platformFamily, hasApi: hasApi, keyCode: keyCode, parseState: parseState,
    serializeState: serializeState, matches: matches, filterRows: filterRows, isFiltered: isFiltered, activeFilterCount: activeFilterCount,
    pageHref: pageHref, emptyState: emptyState, TIERS: TIERS, STATUSES: STATUSES, KEYS: KEYS,
    PLATFORMS: PLATFORMS, APIS: APIS, PARAMS: PARAMS };

  if (typeof module === 'object' && module.exports) { module.exports = Core; return; }

  // ------------------------------------------------------------ UI

  var PAGE = 24;   // cards shown before "Show all"
  var doc = root.document;
  var host = doc.getElementById('registry-explorer');
  if (!host) return;

  function el(tag, attrs, kids) {
    var n = doc.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === 'text') n.textContent = attrs[k];
      else if (k === 'class') n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  function select(name, label, options, counts) {
    var id = 'rx-' + name;
    var s = el('select', { id: id, name: name });
    s.appendChild(el('option', { value: '', text: 'Any' }));
    Object.keys(options).forEach(function (v) {
      var n = counts && counts[v] !== undefined ? ' (' + counts[v] + ')' : '';
      s.appendChild(el('option', { value: v, text: options[v] + n }));
    });
    return el('div', { 'class': 'rx-field' }, [el('label', { 'for': id, text: label }), s]);
  }

  function tally(rows, fn) {
    var c = {};
    rows.forEach(function (r) { var k = fn(r); c[k] = (c[k] || 0) + 1; });
    return c;
  }

  function fact(dl, label, value) {
    if (value === null || value === undefined || value === '') value = '—';
    dl.appendChild(el('dt', { text: label }));
    var dd = el('dd');
    if (typeof value === 'string') dd.textContent = value; else dd.appendChild(value);
    dl.appendChild(dd);
  }

  function card(r) {
    var li = el('li', { 'class': 'rx-card' });
    li.appendChild(el('h3', { text: str(r.entity) }));
    var meta = el('p', { 'class': 'rx-meta' });
    meta.appendChild(el('span', { 'class': 'rx-status ' + str(r.status), text: STATUSES[r.status] || str(r.status) }));
    meta.appendChild(doc.createTextNode(' · ' + str(r.region) + ' · ' + (TIERS[str(r.tier)] || '')));
    li.appendChild(meta);

    var dl = el('dl', { 'class': 'rx-facts' });
    var src = str(r.portal_name) || '—';
    fact(dl, 'Data site', /^https?:\/\//.test(str(r.url)) ? el('a', { href: r.url, text: src }) : src);
    fact(dl, 'Built on', str(r.platform));
    fact(dl, 'How to get the data', str(r.api_type));
    fact(dl, 'Key needed?', KEYS[keyCode(r)] || str(r.key_required));
    fact(dl, 'Datasets', typeof r.dataset_count === 'number' ? r.dataset_count.toLocaleString('en-US') : str(r.dataset_count));
    li.appendChild(dl);

    if (r.api_endpoint || r.example_request) {
      var d = el('details', null, [el('summary', { text: 'API address and example request' })]);
      if (r.api_endpoint) d.appendChild(el('p', null, [el('code', { text: str(r.api_endpoint) })]));
      if (r.example_request) d.appendChild(el('pre', null, [el('code', { text: str(r.example_request) })]));
      li.appendChild(d);
    }
    if (r.page) {
      li.appendChild(el('div', { 'class': 'rx-links' },
        [el('a', { 'class': 'btn', href: pageHref(r.page), text: 'Details for ' + str(r.entity) })]));
    }
    return li;
  }

  function build(rows) {
    var form = el('form', { 'class': 'rx-form', role: 'search', 'aria-label': 'Filter the registry' });
    var q = el('input', { id: 'rx-q', name: 'q', type: 'search', autocomplete: 'off',
      placeholder: 'For example: parcels, Monroe, transit' });
    // On narrow screens the six selects collapse behind this button so results
    // follow the search box. On wide screens CSS hides the button and the
    // panel is always shown, whatever its open/closed class says.
    var toggle = el('button', { type: 'button', 'class': 'rx-toggle', 'aria-controls': 'rx-filters',
      'aria-expanded': 'false' });
    var filters = el('div', { 'class': 'rx-filters', id: 'rx-filters' });
    form.appendChild(el('div', { 'class': 'rx-field rx-search' },
      [el('label', { 'for': 'rx-q', text: 'Search by place, agency, data site or topic' }), q]));

    var regions = {};
    rows.forEach(function (r) { if (r.region) regions[r.region] = r.region; });
    var sortedRegions = {};
    Object.keys(regions).sort().forEach(function (k) { sortedRegions[k] = k; });

    filters.appendChild(select('tier', 'Type of source', TIERS, tally(rows, function (r) { return str(r.tier); })));
    filters.appendChild(select('region', 'Region', sortedRegions, tally(rows, function (r) { return r.region; })));
    filters.appendChild(select('status', 'Status', STATUSES, tally(rows, function (r) { return r.status; })));
    filters.appendChild(select('api', 'Pull data with code?', APIS, tally(rows, function (r) { return hasApi(r) ? 'yes' : 'no'; })));
    filters.appendChild(select('key', 'Key needed?', KEYS, tally(rows, keyCode)));
    filters.appendChild(select('platform', 'Built on', PLATFORMS, tally(rows, platformFamily)));
    form.appendChild(toggle);
    form.appendChild(filters);
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    function setOpen(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      form.className = 'rx-form' + (open ? '' : ' rx-collapsed');
    }
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    var count = el('p', { 'class': 'rx-count', id: 'rx-count', role: 'status', 'aria-live': 'polite' });
    var clear = el('button', { type: 'button', text: 'Clear filters' });
    // The heading id comes from kramdown, so find it rather than guess its form.
    var tables = host.nextElementSibling;
    while (tables && !(tables.tagName === 'H2' && tables.id)) tables = tables.nextElementSibling;
    var skip = tables ? el('a', { 'class': 'rx-skip', href: '#' + tables.id, text: 'Skip past the search' }) : null;
    var list = el('ol', { 'class': 'rx-results', 'aria-labelledby': 'rx-count' });
    var empty = el('p', { 'class': 'rx-empty', text: 'Nothing matches. Try a shorter search or fewer filters.' });
    var more = el('button', { type: 'button' });
    var moreWrap = el('div', { 'class': 'rx-more' }, [more]);

    host.appendChild(el('div', { 'class': 'rx-head' }, [
      el('h2', { id: 'explore', text: 'Search the directory' }),
      el('p', { text: 'Search and filter all ' + rows.length + ' sources. To share what you found, copy the page address.' }),
      form]));
    host.appendChild(el('div', { 'class': 'rx-bar' }, [count, clear, skip]));
    host.appendChild(list);
    host.appendChild(empty);
    host.appendChild(moreWrap);

    var state = parseState(root.location.search);
    var showAll = false;

    function readForm() {
      PARAMS.forEach(function (k) { state[k] = form.elements[k].value.trim(); });
    }
    function writeForm() {
      PARAMS.forEach(function (k) {
        var f = form.elements[k];
        f.value = state[k];
        if (f.tagName === 'SELECT' && f.value !== state[k]) { f.value = ''; state[k] = ''; }
      });
    }
    function render() {
      var hits = filterRows(rows, state);
      var shown = showAll ? hits : hits.slice(0, PAGE);
      list.textContent = '';
      shown.forEach(function (r) { list.appendChild(card(r)); });
      count.textContent = (isFiltered(state) ? hits.length + ' of ' + rows.length : 'All ' + rows.length) +
        ' sources' + (shown.length < hits.length ? ', showing ' + shown.length : '');
      empty.hidden = hits.length > 0;
      clear.hidden = !isFiltered(state);
      var n = activeFilterCount(state);
      toggle.textContent = 'Filters' + (n ? ' (' + n + ')' : '');
      moreWrap.hidden = shown.length >= hits.length;
      more.textContent = 'Show all ' + hits.length;
    }
    function update() {
      readForm();
      showAll = false;
      var qs = serializeState(state);
      if (root.history && root.history.replaceState) {
        root.history.replaceState(null, '', root.location.pathname + qs + root.location.hash);
      }
      render();
    }

    var t;
    q.addEventListener('input', function () { clearTimeout(t); t = setTimeout(update, 120); });
    form.addEventListener('change', update);
    clear.addEventListener('click', function () {
      state = emptyState(); writeForm(); update(); q.focus();
    });
    more.addEventListener('click', function () { showAll = true; render(); });
    root.addEventListener('popstate', function () { state = parseState(root.location.search); writeForm(); render(); });

    writeForm();
    // Arriving with filters in the URL: show them, so the view explains itself.
    setOpen(activeFilterCount(state) > 0);
    render();
    host.hidden = false;
    // Arriving with filters (a shared link, a place page's region link): bring
    // the results into view rather than leaving them below the intro.
    if (isFiltered(state) && !root.location.hash && host.scrollIntoView) host.scrollIntoView();
  }

  var src = host.getAttribute('data-src') || 'ny-data-portal-registry.json';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', src);
  xhr.onload = function () {
    var data;
    try { data = JSON.parse(xhr.responseText); } catch (e) { data = null; }
    if (xhr.status >= 200 && xhr.status < 300 && data && data.rows) { build(data.rows); return; }
    fail();
  };
  xhr.onerror = fail;
  function fail() {
    // Leave the static tables to do the job, but say why the explorer is absent.
    host.textContent = '';
    host.appendChild(el('p', { 'class': 'rx-error', text: 'The search tool could not load. The full lists below include every source.' }));
    host.hidden = false;
  }
  xhr.send();
})(typeof window !== 'undefined' ? window : this);
