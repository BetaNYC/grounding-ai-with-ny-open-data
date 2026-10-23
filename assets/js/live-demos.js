/* Live-result demos on guides/user-journeys.md.

   Every result below is copied from a real call made on 2026-10-23 at about
   12:10 AM Eastern, through the BetaNYC MCP servers. They are a snapshot, not a
   live feed: rerun the prompt to see today's answer.

   Each <div class="live-demo" data-demo="KEY"> on the page is filled from DEMOS[KEY].
   Animation follows mta-mcp/docs/index.html: ONE requestAnimationFrame loop that
   reads elapsed time, never a chain of setTimeouts (browsers throttle timers in
   background tabs, which strands a timed sequence halfway). */
(function(){
  var DEMOS = {
    '311': {
      tool: 'nyc-311-mcp',
      q: 'Is alternate-side parking suspended in the next three weeks?',
      takeaway: 'Two suspensions: Election Day (Nov 3) and Veterans Day (Nov 11).',
      call: 'get_calendar(from_date: "2026-10-23", to_date: "2026-11-13")',
      out: [
        ['Fri Oct 23  ASP in effect · collections on schedule · schools open'],
        ['Sun Oct 25  ASP not in effect on Sundays'],
        ['Tue Nov  3  ASP SUSPENDED — Election Day 2026', 's'],
        ['            collections suspended · schools remote only', 'c'],
        ['Wed Nov 11  ASP SUSPENDED — Veterans Day 2026', 's'],
        ['            collections suspended · schools closed', 'c'],
        ['All other days: ASP in effect (not in effect on Sundays)', 'c']
      ],
      source: 'NYC 311 city-service calendar'
    },
    'council': {
      tool: 'nyc-council-mcp',
      q: 'Which NYC Council hearings are coming up, and which bills are on each agenda?',
      takeaway: '23 meetings in the next two weeks; one agenda is marked deferred.',
      call: 'get_upcoming_hearings(days_ahead: 14)',
      out: [
        ['23 meetings, Oct 26 – Nov 2', 's'],
        ['Mon Oct 26 10:00 AM  Criminal Justice · Int 1104-2026'],
        ['Mon Oct 26  1:00 PM  General Welfare · agenda DEFERRED', 'c'],
        ['Tue Oct 27  9:30 AM  Transportation and Infrastructure · 6 items'],
        ['Wed Oct 28  1:00 PM  Housing and Buildings + Finance (joint) · 11 items'],
        ['Thu Oct 29  2:00 PM  Contracts · Int 1064, 1065, 0991 and more'],
        ['Fri Oct 30  1:00 PM  Public Safety + Governmental Operations'],
        ['                     (joint) · Council Chambers, City Hall', 'c']
      ],
      source: 'Legistar, the Council’s legislative system'
    },
    'checkbook': {
      tool: 'nyc-checkbook-mcp',
      q: 'Which DOT expense contracts over $500,000 were registered in FY2025?',
      takeaway: '121 contracts. Four from the first page of results:',
      call: 'search_contracts(agency_code: "841", fiscal_year: "2025",\n                 amount_min: 500000)',
      out: [
        ['121 contracts (first page of 10 shown)', 's'],
        ['$2,291,020  Sam Schwartz Engineering · Conduit Avenue Corridor Study'],
        ['$1,306,238  AECOM USA · Dining Out review'],
        ['$1,000,000  Marine Design Dynamics · negotiated acquisition extension'],
        ['  $974,691  LIRO Engineers · retaining wall inspection and design'],
        ['Source: Checkbook NYC, NYC Comptroller. Verify at checkbooknyc.com', 'c']
      ],
      source: 'Checkbook NYC (NYC Comptroller)'
    },
    'budget': {
      tool: 'nyc-budget-mcp',
      q: 'What were the largest Council discretionary awards in FY2027?',
      takeaway: '10,407 designations; $590 million has cleared so far.',
      call: 'search_disclosure_awards(fiscal_year: 2027, limit: 5)',
      out: [
        ['10,407 designations', 's'],
        ['Cleared  $590,253,954  ·  Pending  $115,450,046'],
        ['$15,753,469  CUNY · Peter F. Vallone Academic Scholarship'],
        [' $9,201,000  DYCD · Food Pantries'],
        [' $8,300,000  Bronx Defenders · NY Immigrant Family Unity Project'],
        [' $8,300,000  Brooklyn Defender Services · same initiative'],
        [' $8,300,000  Legal Aid Society · same initiative'],
        ['Council workbook dated Sep 14, 2026; pending rows clear over time', 'c']
      ],
      source: 'NYC Council expense funding disclosure'
    },
    'record': {
      tool: 'nyc-record-mcp',
      q: 'Which city solicitations close soonest?',
      takeaway: 'Three are due the day this was run; the list is soonest-first.',
      call: 'get_open_solicitations(limit: 10)',
      out: [
        ['Oct 23  2:00 PM  NYCHA · personal injury claims investigation (RFP)'],
        ['Oct 23  3:00 PM  NYC Health + Hospitals · Rubrik backup (bid)'],
        ['Oct 23  5:00 PM  Campaign Finance Board · security services (M/WBE)'],
        ['Oct 26  3:00 PM  Finance · business and excise tax debt collection'],
        ['Oct 26  5:00 PM  Trust for Governors Island · Buildings 324/330'],
        ['Oct 27 10:00 AM  Environmental Protection · helicopter maintenance'],
        ['Oct 28 10:00 AM  Environmental Protection · Bowery Bay WWTP'],
        ['Each row links to the City Record notice and its contact', 'c']
      ],
      source: 'The City Record Online'
    },
    'charter': {
      tool: 'nyc-charter-laws-rules',
      q: 'What does the NYC Charter say about community boards?',
      takeaway: 'Five sections, each with its citation, ready to quote.',
      call: 'search(query: "community board", corpus: "charter", limit: 5)',
      out: [
        ['§ 2800  Community boards: up to 50 members, appointed by the', 's'],
        ['        borough president, at least half from Council nominees', 's'],
        ['§ 2801  Actions: a majority of appointed members is a quorum'],
        ['§ 230   Boards submit expense and capital budget priorities'],
        ['§ 238   Boards review the preliminary budget by February 15'],
        ['§ 1135  Staff of a Council member or borough president can’t'],
        ['        sit on a board they appoint or nominate to'],
        ['Not legal advice. Verify at codelibrary.amlegal.com', 'c']
      ],
      source: 'NYC Charter (American Legal Publishing)'
    },
    'nys': {
      tool: 'nys-openlegislation-mcp',
      q: 'Find this session’s state bills on tenant protection.',
      takeaway: 'Four bills, all still in committee.',
      call: 'search_bills(term: \'title:"tenant" AND title:"protection"\',\n             session_year: 2025)',
      out: [
        ['A9033A  Tapia   "Extreme weather tenant protection act"', 's'],
        ['        in Assembly Judiciary · same as S8960A', 'c'],
        ['S8960A  Bailey  same act · in Senate Housing'],
        ['S7977   Ramos   protections for tenants of co-ops · Senate Housing'],
        ['S4307   Parker  "Innocent tenant protection act" · Senate Housing'],
        ['All four are still in committee', 'c'],
        ['Corpus synced 2026-10-22 from legislation.nysenate.gov', 'c']
      ],
      source: 'NYS Open Legislation (NY State Senate)'
    },
    'socrata': {
      tool: 'socrata',
      q: 'How many NYC restaurants earned an A grade in 2026, by borough?',
      takeaway: 'Found the dataset, then counted it: 11,213 restaurants.',
      call: 'search(query: "restaurant inspection results")\n' +
            'get_data(dataset_id: "43nn-pn8j", query: "SELECT boro,\n  count(distinct camis) WHERE grade = \'A\' AND\n  grade_date >= \'2026-01-01\' GROUP BY boro")',
      out: [
        ['43nn-pn8j  DOHMH Restaurant Inspection Results', 's'],
        ['Manhattan      4,376'],
        ['Brooklyn       2,933'],
        ['Queens         2,506'],
        ['Bronx          1,014'],
        ['Staten Island    380'],
        ['(4 rows carry no borough)', 'c']
      ],
      source: 'NYC Open Data'
    },
    'xA': {
      tool: 'Crosswalk A · socrata → nyc-council-mcp → nyc-charter-laws-rules',
      q: 'Top 311 complaints in Manhattan CD1 this quarter, Council action on the top one, and the law behind it.',
      takeaway: 'Illegal parking leads. The Council last held oversight hearings on it in 2021. The Admin Code covers how tickets are handled.',
      call: '1 socrata.get_data(erm2-nwe9: complaint_type, count(*)\n    WHERE community_board = "01 MANHATTAN" AND created_date >= 2026-10-01)\n' +
            '2 search_legislation_live(query: "illegal parking")\n' +
            '3 search(query: "parking violations", corpus: "admin_code")',
      out: [
        ['1  311, Oct 1-22, 2026', 's'],
        ['   Illegal Parking 464 · Vendor Enforcement 450 · Noise - Residential 189'],
        ['2  Council, newest first', 's'],
        ['   T2021-8043  Oversight: Rethinking Vision Zero: Stopping Illegal Parking (2021)'],
        ['   T2021-7005  Oversight: Illegal Parking and Bike Lanes (2021)'],
        ['   no newer bill or hearing titled "illegal parking"', 'c'],
        ['3  Administrative Code', 's'],
        ['   § 19-201  Parking violations bureau created'],
        ['   § 19-203  Its powers: hear charges, set penalties'],
        ['   § 19-211  Extra penalties for not answering a ticket']
      ],
      source: 'NYC Open Data 311, Legistar and the Admin Code'
    },
    'xC': {
      tool: 'Crosswalk C · nyc-record-mcp → nyc-checkbook-mcp → nyc-council-mcp',
      q: 'Follow DOT contracting from City Record notices to Checkbook to Council oversight.',
      takeaway: 'DOT is buying software help. Checkbook shows two registered software developer contracts in FY2026. The Contracts committee meets Oct 29.',
      call: '1 get_notices_by_agency(agency_name: "Transportation", limit: 8)\n' +
            '2 search_contracts(agency_code: "841", fiscal_year: "2026",\n                   purpose: "software")\n' +
            '3 get_upcoming_hearings(days_ahead: 14)',
      out: [
        ['1  City Record, DOT, Oct 15-21', 's'],
        ['   Award  $999,050  Spruce Technology · Software Technical Lead'],
        ['   Award  $420,794  K Systems Solutions · M365 cloud backup'],
        ['   Intent  JCDecaux sole source · real-time info at 1,446 bus shelters'],
        ['2  Checkbook, DOT FY2026, purpose "software": 2 contracts', 's'],
        ['   $454,090  InfoPeople Corp · end-to-end software developer'],
        ['   $405,188  Universal Technologies · full stack software developer'],
        ['3  Council', 's'],
        ['   Thu Oct 29 2:00 PM  Committee on Contracts · Int 1064, 1065, 0991 and more']
      ],
      source: 'The City Record, Checkbook NYC and Legistar'
    },
    'xD': {
      tool: 'Crosswalk D · nys-openlegislation-mcp → nyc-council-mcp → socrata',
      q: 'E-bike safety: what Albany and City Hall are each doing, and what the data shows.',
      takeaway: 'Bills at both levels, all still in committee. 1,940 cyclists injured and 11 killed in NYC crashes reported so far this year.',
      call: '1 search_bills(term: \'title:"bicycle" AND title:"electric"\', session_year: 2025)\n' +
            '2 search_legislation_live(query: "bicycle")\n' +
            '3 socrata.get_data(h9gi-nx95: cyclists injured and killed\n    WHERE crash_date >= 2026-01-01)',
      out: [
        ['1  Albany (all in committee)', 's'],
        ['   A1546   Simon       rules for e-bikes · Assembly Transportation'],
        ['   A10156 / S9402      e-bike safety course and certificate'],
        ['   A4083   Cunningham  liability insurance for e-bikes in NYC'],
        ['2  City Council (all in committee)', 's'],
        ['   Int 1110-2026  ban class 3 e-bikes (introduced Oct 8)'],
        ['   Int 1102-2026  sidewalk-riding detection on share e-bikes'],
        ['   Int 0876-2026  15 mph speed limit for e-bikes'],
        ['3  NYC crash data since Jan 1, 2026 (as reported so far)', 's'],
        ['   1,909 crashes · 1,940 cyclists injured · 11 killed']
      ],
      source: 'NYS Open Legislation, Legistar and NYC Open Data'
    },
    'mta': {
      tool: 'mta-mcp (early alpha)',
      q: 'Is the 6 train disrupted this Saturday at 68 St-Hunter College?',
      takeaway: 'Yes: reduced service all weekend. Unofficial; confirm at mta.info.',
      call: 'check_route_on_date(route_id: "6", date: "2026-10-24",\n                    station: "68 St-Hunter College")',
      out: [
        ['disrupted: true', 's'],
        ['[6] runs every 8 minutes · Sat and Sun, Oct 24-25'],
        ['why: [4] and [6] share a track in Manhattan (track maintenance)'],
        ['station_level_detail: false · the alert names no stations', 'c'],
        ['Unofficial. May not be real time. Confirm at mta.info', 'c']
      ],
      source: 'MTA service alerts feed'
    }
  };

  var CPS = 24;          // typing speed, characters per second
  var ROW_MS = 900;      // gap between result rows
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var state = {};

  function el(tag, cls, text){
    var n = document.createElement(tag);
    if(cls) n.className = cls;
    if(text != null) n.textContent = text;
    return n;
  }

  function build(box){
    var key = box.getAttribute('data-demo'), d = DEMOS[key];
    if(!d) return;
    box.textContent = '';
    box.classList.add('ld-closed');
    var side = el('div', 'ld-side');
    side.appendChild(el('p', 'ld-tool', d.tool));
    side.appendChild(el('p', 'ld-q', '“' + d.q + '”'));
    side.appendChild(el('p', 'ld-takeaway', d.takeaway));
    side.appendChild(el('p', 'ld-meta', 'Real results from ' + d.source +
      ', run Oct 23, 2026. Rerun the prompt to see today’s answer.'));
    var bar = el('div', 'ld-buttons');
    var run = el('button', 'ld-btn ld-run', '▶ Run it');
    var hide = el('button', 'ld-btn ld-hide', 'Collapse');
    run.type = hide.type = 'button';
    hide.hidden = true;
    bar.appendChild(run); bar.appendChild(hide);
    side.appendChild(bar);
    var term = el('div', 'ld-term');
    term.hidden = true;
    box.appendChild(side);
    box.appendChild(term);
    var st = state[key] = {box: box, term: term, run: run, hide: hide, t0: null, sig: null};
    run.addEventListener('click', function(){ start(key); });
    hide.addEventListener('click', function(){ collapse(key); });
  }

  // Draw the terminal as it should look `ms` milliseconds into the run.
  // Returns true once everything is shown.
  function render(key, ms){
    var d = DEMOS[key], st = state[key], term = st.term;
    var q = '> ' + d.q, call = d.call;
    var qMs = q.length * 1000 / CPS, callMs = call.length * 1000 / (CPS * 2);
    var qn = Math.min(q.length, Math.floor(ms * CPS / 1000));
    var t0 = ms - qMs - 500, cn = Math.floor(t0 * CPS * 2 / 1000);
    var tr = t0 - callMs - 700, rows = Math.floor(tr / ROW_MS) + 1;
    var done = tr >= 0 && rows >= d.out.length;
    // Only touch the DOM when the visible text would change.
    var sig = qn + '|' + (t0 < 0 ? -1 : Math.min(cn, call.length)) + '|' +
              (tr < 0 ? -1 : Math.min(rows, d.out.length));
    if(sig === st.sig) return done;
    st.sig = sig;
    term.textContent = '';
    term.appendChild(el('span', 'p', q.slice(0, qn)));
    if(t0 < 0){ term.appendChild(el('span', 'ld-cursor')); return false; }
    term.appendChild(document.createTextNode('\n\n'));
    term.appendChild(el('span', 'k', call.slice(0, Math.min(cn, call.length))));
    if(cn < call.length){ term.appendChild(el('span', 'ld-cursor')); return false; }
    term.appendChild(document.createTextNode('\n'));
    if(tr < 0){ term.appendChild(el('span', 'c', '// running…')); return false; }
    term.appendChild(document.createTextNode('\n'));
    for(var i = 0; i < Math.min(rows, d.out.length); i++){
      term.appendChild(el('span', d.out[i][1] || '', d.out[i][0]));
      term.appendChild(document.createTextNode('\n'));
    }
    return done;
  }

  function start(key){
    var st = state[key];
    st.box.classList.remove('ld-closed');
    st.term.hidden = false;
    st.hide.hidden = false;
    // Reserve the finished height first, so the page doesn't grow line by line.
    st.term.style.minHeight = '';
    st.sig = null; render(key, Infinity);
    st.term.style.minHeight = st.term.offsetHeight + 'px';
    st.sig = null;
    st.run.textContent = '↻ Replay';
    if(reduce){ st.t0 = null; return; }
    render(key, 0);
    st.t0 = performance.now();
    st.run.disabled = true;
    tick();
  }

  function collapse(key){
    var st = state[key];
    st.t0 = null;
    st.term.hidden = true;
    st.hide.hidden = true;
    st.run.disabled = false;
    st.run.textContent = '▶ Run it';
    st.box.classList.add('ld-closed');
  }

  // ONE requestAnimationFrame loop that reads elapsed time, running only while a
  // demo is playing. It stops at the end of each run: no looping.
  var ticking = false;
  function tick(){ if(!ticking){ ticking = true; requestAnimationFrame(frame); } }
  function frame(now){
    var any = false;
    for(var key in state){
      var st = state[key];
      if(st.t0 == null) continue;
      if(render(key, now - st.t0)){ st.t0 = null; st.run.disabled = false; }
      else any = true;
    }
    ticking = false;
    if(any) tick();
  }

  document.querySelectorAll('.live-demo[data-demo]').forEach(build);
})();
