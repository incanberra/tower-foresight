/* ==========================================================================
   TOWER FORESIGHT — INTERACTIVE EXECUTIVE BRIEFING & ADVISORY LOGIC
   ========================================================================== */

const COERCION_VECTORS = [
  {
    id: 'vector-1',
    index: '01',
    shortTitle: 'Non-Market Capital & Limit Pricing',
    tag: 'VECTOR 01 // MARKET STRUCTURE MANIPULATION',
    title: 'State-Subsidised Overcapacity & Predatory Limit Pricing',
    summary:
      'State-backed industrial champions operate under strategic self-sufficiency mandates rather than commercial return thresholds. By maintaining structural overcapacity and deploying limit pricing, state actors periodically flood global markets to depress commodity prices below the marginal cost of Western competitors—choking off private project finance and forcing non-allied mine and refinery closures.',
    stat1Value: '−59% to −73%',
    stat1Label: 'Cobalt & Nickel price compression (2022–2025) driving allied mine curtailments',
    stat2Value: 'US$18B+',
    stat2Label: 'Allied public-private counter-capital catalysed via price floors & DPA Title III',
    implication:
      'For ASX boards and project sponsors: Standard consensus commodity price decks fail to price strategic market flooding. Capital allocation in critical minerals and midstream refining requires sovereign price-floor underwriting, firm allied offtake, or balance-sheet insulation against multi-year price suppression.'
  },
  {
    id: 'vector-2',
    index: '02',
    shortTitle: 'Calibrated Export Control Architecture',
    tag: 'VECTOR 02 // LEGAL & REGULATORY CHOKEPOINTS',
    title: 'Precision-Calibrated Export Licensing & Extraterritorial Reach',
    summary:
      'Scattered trade restrictions have been consolidated into a centralised, legally binding export control regime (anchored by the Export Control Law and Dual-Use Regulations). Rather than crude embargoes, licensing controls on gallium, germanium, battery-grade graphite, antimony, and heavy rare earths (Dy/Tb) allow authorities to dial supply pressure up or down with surgical precision.',
    stat1Value: '98% / 70%',
    stat1Label: 'Global refined primary gallium & germanium supply subject to export licensing',
    stat2Value: '0.1% Rule',
    stat2Label: 'Extraterritorial threshold claiming jurisdiction over foreign downstream products',
    implication:
      'For Australian exporters & industrial procurers: Compliance risk now extends deep into third-country value chains. Firms must audit bill-of-materials exposure to controlled midstream oxides, magnets, and precursors before committing to long-term delivery contracts.'
  },
  {
    id: 'vector-3',
    index: '03',
    shortTitle: 'Midstream Technology & Process Lock-In',
    tag: 'VECTOR 03 // INDUSTRIAL KNOW-HOW & CAPEX GATES',
    title: 'Technology Export Bans across Extraction, Separation & Magnetics',
    summary:
      'Upstream ore abundance does not equate to supply security when midstream processing know-how is locked down. Comprehensive export prohibitions now cover solvent extraction equipment, rare earth separation flowsheets, NdFeB permanent magnet manufacturing tools, and specialised ion-exchange resins for gallium recovery.',
    stat1Value: '37–48 Mos',
    stat1Label: 'Typical construction & wet-commissioning horizon for greenfield allied refineries',
    stat2Value: 'Midstream',
    stat2Label: 'Primary binding constraint: cracking, leaching, metallisation & qualification',
    implication:
      'For investors & government funding agencies: Headline nameplate capacity is not saleable output. Technical due diligence must distinguish bulk concentrate tonnes from separated, customer-qualified oxides and verify independent engineering flowsheets.'
  },
  {
    id: 'vector-4',
    index: '04',
    shortTitle: 'Supply Chain Intelligence ("Spy Glass")',
    tag: 'VECTOR 04 // BUREAUCRATIC TRACEABILITY & IP EXPOSURE',
    title: 'Mandatory End-User Traceability as an Industrial "Spy Glass"',
    summary:
      'Export licensing procedures require foreign buyers to submit exhaustive documentation detailing chemical formulations, production facilities, inventory buffers, and final customer identities. This administrative architecture acts as a high-resolution "spy glass" to map Western defence and industrial networks while holding shipments in administrative limbo.',
    stat1Value: '45+ Days',
    stat1Label: 'Routine administrative licensing review extensions creating working-capital strain',
    stat2Value: 'Tier 2–4',
    stat2Label: 'Sub-tier supplier visibility exposed through mandatory end-user certificates',
    implication:
      'For General Counsel & Chief Risk Officers: Submitting granular customer and formulation disclosures to foreign trade ministries can create severe commercial IP leakage and sovereign compliance conflicts with allied security frameworks.'
  },
  {
    id: 'vector-5',
    index: '05',
    shortTitle: 'Defence Squeeze & Coercive Linkage ("Crowbar")',
    tag: 'VECTOR 05 // STRATEGIC LEVERAGE & DIPLOMATIC LINKAGE',
    title: 'Categorical Defence Denials & Cross-Sector Policy "Crowbars"',
    summary:
      'Categorical licence denials for military end-uses directly target allied munitions, night-vision optics, guided weapons, and subsea systems (particularly via antimony, germanium, and heavy rare earths). Simultaneously, raw material access is deployed as a diplomatic "crowbar" to extract concessions on unrelated tariff or technology disputes.',
    stat1Value: '3× Surge',
    stat1Label: 'Global antimony price escalation following dual-use export restrictions',
    stat2Value: 'AUKUS / Allies',
    stat2Label: 'Direct exposure across sovereign defence-industrial sustainment & rearmament',
    implication:
      'For Defence & National Security Agencies: Sovereign industrial base assessments must stress-test sub-tier contractor stockpiles and establish pre-qualified allied supply corridors before geopolitical crises crystallise.'
  },
  {
    id: 'vector-6',
    index: '06',
    shortTitle: 'Downstream Reshoring ("Fish Trap") & Asset Capture',
    tag: 'VECTOR 06 // VALUE-CHAIN CAPTURE & UPSTREAM ACQUISITION',
    title: 'The Downstream "Fish Trap" & Counter-Cyclical Resource Capture',
    summary:
      'By capping raw material and magnet exports to historical averages while permitting unrestricted exports of finished motors and assemblies, policy settings pressure Western OEMs to relocate high-value manufacturing onshore ("fish trap"). Concurrently, state-backed entities acquire distressed upstream deposits across Africa, Southeast Asia, and Latin America.',
    stat1Value: '>US$14B',
    stat1Label: 'Strategic capital deployed into Indonesian nickel & regional midstream processing',
    stat2Value: '15 of 19',
    stat2Label: 'Major DRC cobalt operations under Chinese state-backed equity or offtake control',
    implication:
      'For FIRB, Treasury & M&A Boards: Foreign investment proposals, joint ventures, and complex structured offtake agreements require rigorous assessment of strategic factor bias, ultimate beneficial control, and national interest remedies.'
  }
];

const CAREER_TIMELINE = [
  {
    period: '2020 – 2026',
    level: 'SES Band 1 // National Intelligence Community',
    role: 'Assistant Director-General, Economic Analysis Branch',
    org: 'Office of National Intelligence (ONI), Canberra',
    category: ['intelligence', 'all'],
    desc: 'Led the Australian intelligence community’s peak economic assessment branch through the COVID-19 pandemic, global inflation shock, and the escalation of US–China geoeconomic rivalry. Delivered authoritative, contestable analysis to the Prime Minister, National Security Committee of Cabinet, and senior corporate leaders on economic coercion, critical minerals, supply-chain weaponisation, energy transitions, sovereign debt, and digital currencies.',
    chips: ['NSC Cabinet Briefings', 'Geoeconomic Coercion', 'Executive Business Outreach', 'NIC Leadership']
  },
  {
    period: '2019 – 2020',
    level: 'SES Band 1 // Central Economic Agency',
    role: 'Principal Adviser, Centre for Population',
    org: 'Australian Department of the Treasury, Canberra',
    category: ['treasury', 'all'],
    desc: 'Established the research architecture and analytical capability of the newly formed Centre for Population. Coordinated across Commonwealth and State governments, academic demographers, and the Treasurer’s Office to build demographic and labour-supply forecasting models.',
    chips: ['Demographic Modelling', 'Intergovernmental Strategy', 'Long-Run Growth']
  },
  {
    period: '2018 – 2019',
    level: 'Postgraduate Sabbatical // Distinction & Policy Prize',
    role: 'MSc in Economic Development & Policy Analysis',
    org: 'School of Economics, University of Nottingham (UK)',
    category: ['treasury', 'all'],
    desc: 'Graduated with Distinction and awarded the prize for Best Dissertation in the Policy Stream. Conducted empirical gravity-model research on "Strategic Factor Bias in China’s Outward Foreign Direct Investment", examining state-owned enterprise behaviour and strategic asset acquisition.',
    chips: ['Distinction', 'Best Policy Dissertation Prize', 'Chinese Outward FDI Research']
  },
  {
    period: '2018',
    level: 'SES Band 1 // Investment Security & Critical Infrastructure',
    role: 'Principal Adviser, Foreign Investment Division (Complex Cases)',
    org: 'Australian Department of the Treasury, Canberra',
    category: ['treasury', 'intelligence', 'all'],
    desc: 'Spearheaded the assessment and negotiation of Australia’s most sensitive, high-profile foreign investment applications (including landmark critical infrastructure transactions such as CKI/APA). Briefed the Foreign Investment Review Board (FIRB) weekly, advised the Treasurer, and negotiated enforceable national security conditions across intelligence agencies, the Critical Infrastructure Centre, and global sovereign investors (including Temasek and StateGrid).',
    chips: ['FIRB Complex Cases', 'Critical Infrastructure', 'National Interest Test', 'Sovereign Investors']
  },
  {
    period: '2015 – 2018',
    level: 'SES Band 1 // Diplomatic Posting & Regional Finance',
    role: 'Treasury Senior Representative, South-East Asia',
    org: 'Australian Embassy, Jakarta & ASEAN Region',
    category: ['diplomacy', 'treasury', 'all'],
    desc: 'Represented the Australian Treasury across ASEAN from Australia’s largest diplomatic mission. Served as Australia’s APEC Senior Finance Official during the Philippines (2015) and Vietnam (2017) host years. Built an extensive network spanning central bank governors, finance ministries, Penang semiconductor fabricators, Singaporean sovereign asset managers, and Hanoi policy economists.',
    chips: ['Head of Treasury Post Jakarta', 'APEC Senior Finance Official', 'ASEAN Macroeconomic Reporting']
  },
  {
    period: '2011 – 2014',
    level: 'Executive Level 2 ( & Acting SES Band 1 General Manager)',
    role: 'Manager, G20 Policy Engagement & International Development Unit',
    org: 'Australian Department of the Treasury, Canberra',
    category: ['diplomacy', 'treasury', 'all'],
    desc: 'Directed policy coordination and Ministerial secretariat operations for Australia’s 2014 G20 Presidency (Washington, Cairns Finance Ministers’ meetings, and the Brisbane Leaders’ Summit). Previously managed Australia’s engagement with the Asian Development Bank and African Development Bank, overseeing DFAT aid budget scrutiny and serving as Acting SES Band 1 General Manager of the International Finance & Development Division.',
    chips: ['G20 Brisbane Summit', 'Multilateral Development Banks', 'ODA Budget Oversight']
  },
  {
    period: '2008 – 2011',
    level: 'Executive Level 2 // International Crisis & Sovereign Reform',
    role: 'Senior Adviser & Team Leader, Economic Reform Unit (RAMSI)',
    org: 'Ministry of Finance & Treasury, Solomon Islands',
    category: ['diplomacy', 'all'],
    desc: 'Embedded within the Solomon Islands Ministry of Finance during the Global Financial Crisis. Negotiated and implemented an IMF Standby Credit Facility, led the deregulation of the telecommunications and aviation markets (driving major gains in World Bank Ease of Doing Business rankings), reformed State-Owned Enterprises, and transformed the unit into a locally led economic policy division.',
    chips: ['IMF Program Negotiation', 'Telco & Aviation Deregulation', 'SOE Privatisation', 'GFC Crisis Response']
  },
  {
    period: '2006 – 2008',
    level: 'Executive Level 2 // Financial System Stability & Trade',
    role: 'Senior Adviser, Financial System Division',
    org: 'Australian Department of the Treasury, Canberra',
    category: ['treasury', 'all'],
    desc: 'Worked alongside the RBA, APRA, and the Council of Financial Regulators to design and legislate Australia’s Financial Claims Scheme (the banking and general insurance guarantee) from initial concept to Cabinet approval and statutory drafting. Represented Australia on financial services chapters in the Australia–China FTA, AANZFTA, and AUSFTA committees in Washington.',
    chips: ['Council of Financial Regulators', 'Financial Claims Scheme Legislation', 'FTA Financial Services Negotiator']
  },
  {
    period: '1994 – 2006',
    level: 'Ministerial Offices & Federal Parliamentary Press Gallery',
    role: 'Senior Ministerial Adviser & Federal Press Gallery Journalist',
    org: 'Parliament House Canberra & The West Australian',
    category: ['comms', 'all'],
    desc: 'Served as Senior Political & Parliamentary Adviser to the Minister for Communications, IT & the Arts (steering Telstra privatisation legislation, media ownership reform, and Cabinet strategy) and Insurance, Prudential & Media Adviser to the Minister for Revenue & Assistant Treasurer (tort law reform, medical indemnity, superannuation). Earlier spent six years as a journalist at The West Australian, including two years in the Canberra Federal Parliamentary Press Gallery covering the 1998 Federal Election and 1999–2000 Commonwealth Budgets.',
    chips: ['Telstra Sale Legislation', 'Cabinet & Senate Strategy', 'Canberra Press Gallery', 'Crisis Communications']
  }
];

const BRIEFING_MODALS = {
  'brief-minerals': {
    classification: 'EXECUTIVE INTELLIGENCE ASSESSMENT // CRITICAL MINERALS',
    title: 'Dismantling the Geoeconomic "Assassin’s Mace": Allied Counter-Strategies in Critical Minerals',
    date: 'October 2026 • Prepared by Shaun Anthony',
    lead: 'An empirical examination of state-directed market manipulation, formalized export control architecture, and the US$18B+ allied policy response across rare earths, battery anodes, and defence metals.',
    judgments: [
      'Non-market price flooding is a deliberate capital-denial weapon: The 59.5% collapse in cobalt and 73.1% decline in nickel (2022–2025) were engineered through state-subsidised overcapacity to render Western greenfield mines unbankable.',
      'Allied policy has crossed the Rubicon into direct market-making: Landmark interventions—including the US$550M DoD partnership and price floor for MP Materials and the US$8.5B US–Australia Critical Minerals Framework—confirm that sovereign price floors and offtake guarantees are now permanent features of industrial policy.',
      'Midstream processing remains the binding bottleneck: Export bans on solvent extraction equipment, gallium ion-exchange resins, and NdFeB magnet tooling mean upstream Australian miners must secure non-Chinese refining flowsheets to capture strategic premia.'
    ],
    body: 'This briefing equips ASX resource boards, institutional investors, and government agencies with a six-vector diagnostic framework to stress-test capital projects against state-backed price suppression, MOFCOM administrative licensing delays, and extraterritorial dual-use controls.'
  },
  'brief-readiness': {
    classification: 'TECHNICAL AUDIT & MATERIAL BALANCE // SUPPLY READINESS 2026–2032',
    title: 'Australian Rare Earths Supply Readiness: Separating Nameplate Claims from Physical Delivery',
    date: 'October 2026 • Evidence-Based Material Balance Audit',
    lead: 'A rigorous engineering and commercial reality check on Australia’s flagship rare earth projects (Lynas, Iluka Eneabba, Arafura Nolans, and Northern Minerals Browns Range) through 2032.',
    judgments: [
      'Concentrate tonnes are not separated oxide tonnes: Physical delivery follows Ore × Grade × Beneficiation Recovery = Contained TREO, followed by element-specific cracking, leaching, separation recovery, and customer qualification.',
      'Schedule and feed blend risks are systematically understated in equity presentations: While Lynas provides an operating anchor (7,260t NdPr in FY26) and Iluka approaches commissioning from mid-2027, heavy rare earth (DyTb) output depends heavily on third-party feed blends and unresolved FID gates.',
      'Contractual offtake secures a market, not new physical supply: Offtake term sheets and conditional government announcements do not substitute for satisfied lender precedent conditions, wet commissioning, and on-spec product acceptance.'
    ],
    body: 'Designed for sovereign debt/equity funds, offtakers, and government grant assessors, this technical methodology reconciles ASX quarterly tables, definitive feasibility studies (DFS), and lender ramp profiles without fabricated interpolation.'
  },
  'brief-fdi': {
    classification: 'EMPIRICAL RESEARCH & FIRB ADVISORY // INVESTMENT SECURITY',
    title: 'Strategic Factor Bias in State-Directed Outward FDI: Navigating Australia’s National Interest Test',
    date: '2026 Updated Edition • Foundation: University of Nottingham MSc Prize Dissertation',
    lead: 'How state-owned and state-influenced enterprises deviate from purely commercial gravity models—and how transaction principals can structure cross-border infrastructure and resource deals to satisfy FIRB scrutiny.',
    judgments: [
      'Empirical evidence of strategic factor bias: Econometric gravity-model analysis demonstrates that state-directed outward FDI systematically over-weights strategic resources, critical infrastructure nodes, and dual-use technology assets relative to risk-adjusted commercial yields.',
      'Early architectural remediation saves transactions: High-profile rejections in Australian critical infrastructure demonstrate that waiting for formal security agency objections is fatal to deal timelines.',
      'Constructive behavioural and structural undertakings: Proactive ring-fencing of operational data, independent Australian board governance, and local operational control protocols can align commercial capital requirements with national security imperatives.'
    ],
    body: 'Drawing on direct SES Band 1 experience leading Complex Cases in Treasury’s Foreign Investment Division and weekly briefings to the Foreign Investment Review Board, this advisory framework guides corporate boards, global funds, and legal counsel from pre-bid structuring to post-approval compliance.'
  },
  'brief-fragmentation': {
    classification: 'MACRO-STRATEGIC HORIZON SCAN // INDO-PACIFIC TRADE',
    title: 'Fragmentation, Decoupling & Friend-Shoring: ASEAN’s Balancing Act in a Bifurcating Global Economy',
    date: 'Q4 2026 • Indo-Pacific Macroeconomic Outlook',
    lead: 'Distinguishing structural decoupling from selective de-risking across Southeast Asian manufacturing, semiconductor packaging, and capital flows.',
    judgments: [
      'ASEAN is the primary arena of supply-chain re-routing, not autarky: Rather than clean bloc separation, "connector economies" (Indonesia, Vietnam, Malaysia, Singapore) are absorbing massive dual-track capital inflows—exemplified by >US$14B in Indonesian nickel processing alongside Western semiconductor packaging expansion in Penang.',
      'The compliance squeeze on regional subsidiaries: Australian firms operating in ASEAN face rising friction between US extraterritorial technology/entity controls and Chinese midstream input dependencies.',
      'Board-level scenario architecture: Replaces single-point macroeconomic forecasts with signposted early-warning indicators across tariff escalation, currency swap lines, and regional industrial policy.'
    ],
    body: 'Informed by three years on the ground as Australian Treasury’s Senior Representative in Jakarta and APEC Senior Finance Official, this briefing translates regional political economy shifts into actionable corporate strategy.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initAudienceTabs();
  initVectorLab();
  initCareerTimeline();
  initModals();
  initConsultationForm();
});

/* 1. Dual Audience Switcher (ASX Boards vs Government Departments) */
function initAudienceTabs() {
  const tabs = document.querySelectorAll('.audience-tab');
  const panels = document.querySelectorAll('.audience-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');

      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const activePanel = document.getElementById(target);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/* 2. Interactive Geoeconomic Coercion Vector Explorer */
function initVectorLab() {
  const listEl = document.getElementById('vector-list');
  const stageEl = document.getElementById('vector-stage');
  if (!listEl || !stageEl) return;

  function renderStage(vector) {
    stageEl.innerHTML = `
      <div>
        <span class="vector-stage-badge">${vector.tag}</span>
        <h3 class="vector-stage-title">${vector.title}</h3>
        <p class="vector-stage-summary">${vector.summary}</p>
        <div class="vector-metrics-box">
          <div>
            <div class="vector-stat-val">${vector.stat1Value}</div>
            <div class="vector-stat-lbl">${vector.stat1Label}</div>
          </div>
          <div>
            <div class="vector-stat-val">${vector.stat2Value}</div>
            <div class="vector-stat-lbl">${vector.stat2Label}</div>
          </div>
        </div>
      </div>
      <div class="vector-implication-box">
        <h5>Tower Foresight Advisory Implication</h5>
        <p>${vector.implication}</p>
      </div>
    `;
  }

  listEl.innerHTML = COERCION_VECTORS.map(
    (v, idx) => `
    <button type="button" class="vector-btn ${idx === 0 ? 'active' : ''}" data-id="${v.id}">
      <div class="vector-btn-left">
        <span class="vector-index">${v.index}</span>
        <span class="vector-title">${v.shortTitle}</span>
      </div>
      <span aria-hidden="true" style="color: var(--accent-gold); font-family: var(--font-mono);">→</span>
    </button>
  `
  ).join('');

  renderStage(COERCION_VECTORS[0]);

  listEl.querySelectorAll('.vector-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const found = COERCION_VECTORS.find((item) => item.id === id);
      if (!found) return;

      listEl.querySelectorAll('.vector-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderStage(found);
    });
  });
}

/* 3. Interactive Career Track Record Timeline */
function initCareerTimeline() {
  const trackEl = document.getElementById('career-timeline-track');
  const filterBtns = document.querySelectorAll('.career-filter-btn');
  if (!trackEl) return;

  function renderTimeline(filterKey) {
    const filtered = CAREER_TIMELINE.filter((item) => item.category.includes(filterKey));
    trackEl.innerHTML = filtered
      .map(
        (item) => `
      <div class="timeline-node">
        <div class="timeline-node-header">
          <span class="timeline-period">${item.period}</span>
          <span class="timeline-level">${item.level}</span>
        </div>
        <h4 class="timeline-role">${item.role}</h4>
        <div class="timeline-org">${item.org}</div>
        <p class="timeline-desc">${item.desc}</p>
        <div class="timeline-highlights">
          ${item.chips.map((c) => `<span class="timeline-chip">${c}</span>`).join('')}
        </div>
      </div>
    `
      )
      .join('');
  }

  renderTimeline('all');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderTimeline(filter);
    });
  });
}

/* 4. Executive Briefing Reader Modal */
function initModals() {
  const backdrop = document.getElementById('briefing-modal');
  const contentEl = document.getElementById('modal-dynamic-content');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!backdrop || !contentEl) return;

  document.querySelectorAll('[data-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-modal');
      const data = BRIEFING_MODALS[key];
      if (!data) return;

      contentEl.innerHTML = `
        <div class="mono-label" style="color: var(--accent-emerald); margin-bottom: 0.5rem;">${data.classification}</div>
        <h3>${data.title}</h3>
        <div class="mono-label" style="color: var(--text-on-light-dim); margin-bottom: 1.25rem;">${data.date}</div>
        <p style="font-size: 1.08rem; font-weight: 500; color: var(--text-on-light);">${data.lead}</p>
        <div class="modal-key-judgments">
          <h4>Key Analytical Judgments</h4>
          <ul>
            ${data.judgments.map((j) => `<li>${j}</li>`).join('')}
          </ul>
        </div>
        <p>${data.body}</p>
        <div style="margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <span style="font-size: 0.85rem; color: var(--text-on-light-muted);">Available for bespoke boardroom presentation or departmental table-top exercise.</span>
          <a href="#engage" class="btn btn-dark" onclick="document.getElementById('briefing-modal').classList.remove('open')">Commission Full Briefing →</a>
        </div>
      `;
      backdrop.classList.add('open');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => backdrop.classList.remove('open'));
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) backdrop.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') backdrop.classList.remove('open');
  });
}

/* 5. Confidential Briefing Inquiry Handler */
function initConsultationForm() {
  const form = document.getElementById('executive-inquiry-form');
  const statusEl = document.getElementById('form-status-msg');
  if (!form || !statusEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inq-name').value.trim();
    const org = document.getElementById('inq-org').value.trim();
    const topic = document.getElementById('inq-topic').value;
    const notes = document.getElementById('inq-notes').value.trim();

    statusEl.style.display = 'block';
    statusEl.innerHTML = `
      <div style="padding: 1rem 1.25rem; background: rgba(19, 78, 62, 0.35); border: 1px solid var(--accent-gold); border-radius: 4px; color: var(--text-on-dark); margin-top: 1rem;">
        <strong style="color: var(--accent-gold-light); display: block; margin-bottom: 0.25rem;">✓ Briefing Request Prepared for Principal Review</strong>
        Thank you, ${name || 'Colleague'} (${org || 'Executive Office'}). Your inquiry regarding <em>${topic}</em> has been formatted. Click below to dispatch directly via your email client or copy the reference dossier.
        <div style="margin-top: 0.75rem;">
          <a class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem;" href="mailto:incanberra@gmail.com?subject=${encodeURIComponent('Tower Foresight Briefing Inquiry: ' + topic + ' — ' + org)}&body=${encodeURIComponent('Principal Adviser Shaun Anthony,\n\nOrganisation: ' + org + '\nContact: ' + name + '\nMandate Stream: ' + topic + '\n\nScope & Context:\n' + notes)}">Open in Email Client →</a>
        </div>
      </div>
    `;
  });
}
