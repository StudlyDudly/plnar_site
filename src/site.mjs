const rawBasePath = process.env.SITE_BASE_PATH || "";
const siteBasePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

function applyBasePath(html) {
  if (!siteBasePath) return html;
  return html.replace(/(href|src)="\/(?!\/)/g, `$1="${siteBasePath}/`);
}

const nav = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions/insurance-carriers" },
  { label: "Products", href: "/products/capture" },
  { label: "Integrations", href: "/integrations" },
  { label: "Customers", href: "/customers" },
  { label: "Resources", href: "/resources" }
];

const solutionPages = [
  {
    path: "/solutions/insurance-carriers",
    title: "Insurance Carriers",
    eyebrow: "For carrier claims teams",
    headline: "Claim decisions start with better property intelligence.",
    copy: "Give desk and field teams structured property data from the first capture, so inspections, estimates, reviews, and handoffs move with fewer gaps.",
    challenges: ["Manual inspection capacity is hard to scale.", "Photo sets arrive incomplete or poorly organized.", "Estimators lose time recreating property context."],
    outcomes: ["Capture once and use the same property record across the claim.", "Support virtual and field workflows without specialized hardware.", "Connect intelligence into estimating and claims ecosystems."]
  },
  {
    path: "/solutions/independent-adjusters",
    title: "Independent Adjusters",
    eyebrow: "For IA networks",
    headline: "A faster field workflow without sacrificing file quality.",
    copy: "Equip adjusters with guided capture, room context, measurements, documentation, and delivery workflows that reduce return visits and help every file stand up to review.",
    challenges: ["CAT volume creates inspection bottlenecks.", "Manual sketches slow adjusters down.", "Documentation standards vary by assignment."],
    outcomes: ["Standardize capture across distributed teams.", "Turn smartphone imagery into claim-ready outputs.", "Deliver cleaner estimate inputs from the field."]
  },
  {
    path: "/solutions/restoration-companies",
    title: "Restoration Companies",
    eyebrow: "For restoration teams",
    headline: "Create carrier-ready documentation from the first walkthrough.",
    copy: "Organize job photos, room context, measurements, models, and scope inputs so teams can support approvals, supplements, and handoffs with less friction.",
    challenges: ["Scopes are delayed by missing proof.", "Large photo sets become hard to navigate.", "Carrier and contractor workflows do not always align."],
    outcomes: ["Auto-organize visual records by room and context.", "Create defensible property documentation.", "Move estimate conversations from opinion to structured data."]
  },
  {
    path: "/solutions/contractors",
    title: "Contractors",
    eyebrow: "For contractors",
    headline: "Turn site capture into estimating context your partners can use.",
    copy: "Use smartphone-first capture to document conditions, support measurements, and prepare cleaner estimate data without carrying specialized scanning equipment to every job.",
    challenges: ["Bids need credible measurements and visual proof.", "Revisits eat margin.", "Estimating packages can be hard for partners to verify."],
    outcomes: ["Capture visual evidence and dimensions together.", "Reduce manual measuring and photo sorting.", "Create a clearer record for approval conversations."]
  },
  {
    path: "/solutions/property-managers",
    title: "Property Managers",
    eyebrow: "For property managers",
    headline: "A clearer record for inspections, repairs, and property operations.",
    copy: "Document units, rooms, damage, repair needs, and property conditions with a structured visual record that teams can reuse across vendors and workflows.",
    challenges: ["Condition records are fragmented.", "Vendor handoffs lose context.", "Inspection quality varies by property and team."],
    outcomes: ["Standardize property documentation.", "Give vendors room-level visual context.", "Maintain a more usable record of property condition."]
  },
  {
    path: "/solutions/enterprise-property-operations",
    title: "Enterprise Property Operations",
    eyebrow: "For enterprise operations",
    headline: "A property intelligence layer for distributed real estate work.",
    copy: "Capture field data once, structure it automatically, and route it into the systems that support inspections, repairs, risk, and operating decisions.",
    challenges: ["Distributed assets are hard to inspect consistently.", "Teams depend on fragmented photos and notes.", "Leadership lacks visibility into property condition."],
    outcomes: ["Create repeatable capture workflows.", "Turn field imagery into searchable property records.", "Connect property data to downstream decision systems."]
  }
];

const productPages = [
  {
    path: "/products/capture",
    title: "Capture",
    eyebrow: "Product",
    headline: "Guided smartphone capture for every property workflow.",
    copy: "Capture interior and exterior imagery, room context, damage evidence, and property details with a workflow designed for policyholders, adjusters, field pros, and large loss teams.",
    bullets: ["Self-service capture for policyholders", "Field professional workflows", "Large loss documentation", "Room-aware photo organization"]
  },
  {
    path: "/products/intelligence",
    title: "Intelligence",
    eyebrow: "Product",
    headline: "Computer vision that turns capture into usable property understanding.",
    copy: "Plnar transforms imagery into spatial records, measurements, floorplans, models, damage context, and structured data that teams can review, trust, and route forward.",
    bullets: ["Spatial intelligence", "AI-assisted property analysis", "Measurement and room understanding", "Auditable outputs for claims workflows"]
  },
  {
    path: "/products/estimation",
    title: "Estimation",
    eyebrow: "Product",
    headline: "Estimate-ready property data without the manual reconstruction.",
    copy: "Create cleaner inputs for estimating, reports, analytics, and workflow systems by connecting captured property intelligence to the tools claims teams already use.",
    bullets: ["Estimate data preparation", "Measurement reports", "Claim-ready documentation", "Delivery into estimating ecosystems"]
  }
];

const basePages = [
  {
    path: "/",
    title: "Plnar | AI Property Intelligence Platform",
    description: "Plnar turns smartphone imagery into actionable property intelligence for claims, inspections, restoration, estimation, and property operations.",
    kind: "home"
  },
  {
    path: "/platform",
    title: "Platform | Plnar",
    description: "Explore Plnar's unified AI property intelligence architecture for capture, analysis, outputs, and integrations.",
    kind: "platform"
  },
  {
    path: "/integrations",
    title: "Integrations | Plnar",
    description: "Connect property intelligence into estimating, claims, analytics, and inspection workflows.",
    kind: "integrations"
  },
  {
    path: "/customers",
    title: "Customers | Plnar",
    description: "Placeholder customer proof, verified outcomes, testimonials, and case study architecture for Plnar.",
    kind: "customers"
  },
  {
    path: "/case-studies",
    title: "Case Studies | Plnar",
    description: "Verified customer stories and outcome placeholders for AI property intelligence workflows.",
    kind: "case-studies"
  },
  {
    path: "/resources",
    title: "Resources | Plnar",
    description: "Guides, checklists, product education, and category resources for AI property intelligence.",
    kind: "resources"
  },
  {
    path: "/resources/property-intelligence-guide",
    title: "AI Property Intelligence Guide | Plnar",
    description: "A practical guide to evaluating AI property intelligence platforms for claims, inspections, estimation, restoration, and property operations.",
    kind: "guide"
  },
  {
    path: "/blog",
    title: "Blog | Plnar",
    description: "Ideas and analysis for claims automation, property inspection software, and AI property intelligence.",
    kind: "blog"
  },
  {
    path: "/product-walkthrough",
    title: "Product Walkthrough | Plnar",
    description: "Walk through how Plnar turns smartphone imagery into property intelligence for capture, analysis, estimation, and delivery.",
    kind: "walkthrough"
  },
  {
    path: "/roi-calculator",
    title: "ROI Calculator | Plnar",
    description: "Estimate the operational impact of better property capture using your own claims or inspection workflow assumptions.",
    kind: "roi"
  },
  {
    path: "/about",
    title: "About | Plnar",
    description: "Plnar is building the AI property intelligence platform for modern property workflows.",
    kind: "about"
  },
  {
    path: "/careers",
    title: "Careers | Plnar",
    description: "Join Plnar to build AI property intelligence for insurance, restoration, and property operations.",
    kind: "careers"
  },
  {
    path: "/contact",
    title: "Contact | Plnar",
    description: "Contact Plnar to discuss AI property intelligence for your organization.",
    kind: "contact"
  },
  {
    path: "/demo",
    title: "Book a Demo | Plnar",
    description: "Book a Plnar product demo for claims, inspections, restoration, estimation, or property operations.",
    kind: "demo"
  }
];

export const pages = [
  ...basePages,
  ...solutionPages.map((page) => ({
    ...page,
    title: `${page.title} | Plnar Solutions`,
    description: `${page.headline} ${page.copy}`,
    kind: "solution"
  })),
  ...productPages.map((page) => ({
    ...page,
    title: `${page.title} | Plnar Products`,
    description: `${page.headline} ${page.copy}`,
    kind: "product"
  }))
];

function ctaPair() {
  return `<div class="cta-row"><a class="btn primary" href="/demo">Book a Demo</a><a class="btn secondary" href="/product-walkthrough">Watch Product Tour</a></div>`;
}

function shell(page, body) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Plnar",
    url: "https://plnar.ai/",
    description: "AI property intelligence platform fueled by smartphone imagery."
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="theme-color" content="#f7f5ef">
  <link rel="canonical" href="https://plnar.ai${page.path}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;350;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" data-reveal>
    <a class="brand" href="/" aria-label="Plnar home"><span class="brand-mark">p</span><span>plnar</span></a>
    <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false">Menu</button>
    <nav class="site-nav" aria-label="Primary navigation">
      ${nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
    </nav>
    <div class="header-actions">
      <button class="icon-btn theme-toggle" type="button" aria-label="Toggle light and dark theme"><span aria-hidden="true">T</span></button>
      <a class="btn small" href="/demo">Book a Demo</a>
    </div>
  </header>
  <main id="main">${body}</main>
  ${footer()}
  <script src="/site.js" defer></script>
</body>
</html>`;
}

function footer() {
  const groups = [
    ["Platform", [["Architecture", "/platform"], ["Capture", "/products/capture"], ["Intelligence", "/products/intelligence"], ["Estimation", "/products/estimation"], ["Integrations", "/integrations"]]],
    ["Solutions", solutionPages.slice(0, 4).map((p) => [p.title.replace(" | Plnar Solutions", ""), p.path])],
    ["Convert", [["Product Walkthrough", "/product-walkthrough"], ["ROI Calculator", "/roi-calculator"], ["Buyer Guide", "/resources/property-intelligence-guide"], ["Book a Demo", "/demo"]]],
    ["Company", [["Customers", "/customers"], ["Case Studies", "/case-studies"], ["Resources", "/resources"], ["About", "/about"], ["Careers", "/careers"]]]
  ];

  return `<footer class="site-footer">
    <div class="footer-grid">
      <div>
        <a class="brand" href="/"><span class="brand-mark">p</span><span>plnar</span></a>
        <p>AI property intelligence fueled by smartphone imagery for claims, inspections, restoration, estimation, and property operations.</p>
      </div>
      ${groups.map(([title, links]) => `<div><h2>${title}</h2>${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div>`).join("")}
    </div>
    <div class="footer-bottom"><span>&copy; 2026 Plnar. Placeholder site concept.</span><a href="/contact">Contact</a></div>
  </footer>`;
}

function home() {
  return `${hero()}
  ${trustLayer()}
  ${conversionTools()}
  ${problemSection()}
  ${architectureSection()}
  ${showcaseSection()}
  ${aiSection()}
  ${solutionsGrid()}
  ${integrationsPreview()}
  ${homeReadinessSection()}
  ${seoSection()}
  ${ctaBand("Make every property capture useful.", "See how smartphone imagery becomes the intelligence layer behind faster claims, better documentation, and clearer decisions.")}`;
}

function conversionTools() {
  const tools = [
    ["Product Walkthrough", "Follow the capture-to-delivery workflow in a guided, buyer-friendly tour.", "/product-walkthrough"],
    ["ROI Calculator", "Model the impact of cycle time, rework, and manual inspection assumptions.", "/roi-calculator"],
    ["Buyer Guide", "Review the evaluation criteria for AI property intelligence platforms.", "/resources/property-intelligence-guide"]
  ];
  return `<section class="conversion-tools section-shell" data-reveal>
    ${tools.map(([title, copy, href]) => `<a class="tool-card" href="${href}"><span>${title}</span><p>${copy}</p></a>`).join("")}
  </section>`;
}

function hero() {
  return `<section class="hero section-shell">
    <div class="hero-copy" data-reveal>
      <p class="eyebrow">The AI Property Intelligence Platform</p>
      <h1>Turn Property Photos Into Intelligence</h1>
      <p class="lede">Plnar transforms smartphone imagery into actionable property intelligence that powers claims, inspections, restoration, estimation, and property operations.</p>
      ${ctaPair()}
      <div class="hero-metrics" aria-label="Platform highlights">
        <span>Smartphone-first capture</span>
        <span>Structured property records</span>
        <span>Estimate-ready outputs</span>
      </div>
    </div>
    <div class="hero-visual" data-reveal>
      <div class="hero-system" aria-label="Plnar workflow from smartphone capture to estimate-ready output">
        <div class="hero-phone">
          <span class="system-label">Capture</span>
          <img src="/images/plnar-pro-photo-capture-ui.png" alt="Plnar mobile capture interface showing room photo documentation controls">
        </div>
        <div class="hero-panel hero-panel-analysis">
          <span class="system-label">Analysis</span>
          <img src="/images/plnar-pro-combined-scan-video-ui.png" alt="Plnar analysis view showing room context">
          <div class="system-note">
            <strong>Damage context</strong>
            <span>Room, surface, and photo evidence organized for review.</span>
          </div>
        </div>
        <div class="hero-panel hero-panel-model">
          <span class="system-label">Modeling</span>
          <img src="/images/plnar-lidar-living-room-contact-sheet.jpg" alt="Plnar floorplan and modeling preview">
        </div>
        <div class="hero-panel hero-panel-output">
          <span class="system-label">Estimation</span>
          <img src="/images/plnar-estimate-export-frame.png" alt="Plnar estimate-ready export preview">
        </div>
        <div class="hero-steps" aria-hidden="true">
          <span>Capture</span>
          <span>Analyze</span>
          <span>Model</span>
          <span>Deliver</span>
        </div>
      </div>
    </div>
  </section>`;
}

function trustLayer() {
  const items = [
    ["Built for claims, restoration, and inspection teams", "Workflow coverage"],
    ["Designed for secure property workflows", "Operational readiness"],
    ["Structured outputs for measurements, reports, and estimates", "Usable intelligence"],
    ["Ready for approved proof, references, and customer evidence", "Proof-ready surface"]
  ];
  return `<section class="trust-strip" aria-label="Workflow trust signals" data-reveal>
    <p>Built for enterprise property workflows</p>
    <div>${items.map(([title, label]) => `<span><strong>${title}</strong><em>${label}</em></span>`).join("")}</div>
  </section>`;
}

function problemSection() {
  const problems = [
    ["Long claim cycles", "Property decisions stall when teams are missing measurements, room context, or reliable documentation."],
    ["Rising operating cost", "Manual inspections, repeat visits, and fragmented vendors make every file more expensive to move."],
    ["Inconsistent inspections", "Distributed teams capture different evidence, leaving desk reviewers to reconstruct the property later."],
    ["Limited visibility", "Photos alone do not give leaders a structured view of property condition, damage, or workflow readiness."]
  ];
  return `<section class="split-section">
    <div data-reveal>
      <p class="eyebrow">Why it matters</p>
      <h2>Claims teams do not need more photos. They need usable property intelligence.</h2>
      <p>Plnar reframes capture as the upstream data layer: complete property context gathered with a phone and transformed into outputs the business can act on.</p>
    </div>
    <div class="problem-grid">
      ${problems.map(([title, copy]) => `<article class="quiet-card" data-reveal><h3>${title}</h3><p>${copy}</p></article>`).join("")}
    </div>
  </section>`;
}

function architectureSection() {
  const columns = [
    ["Capture", ["Self-Service", "Field Professional", "Large Loss"]],
    ["Intelligence", ["Computer Vision", "AI Analysis", "Measurements", "Property Understanding"]],
    ["Outputs", ["Estimates", "Reports", "Analytics", "Integrations"]]
  ];
  return `<section class="architecture section-shell dark-band">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">Unified platform architecture</p>
      <h2>Capture. Understand. Deliver.</h2>
      <p>One platform connects the people who collect property data with the systems that use it.</p>
    </div>
    <div class="architecture-grid">
      ${columns.map(([title, items], index) => `<article class="arch-card" data-reveal>
        <span class="arch-index">0${index + 1}</span>
        <h3>${title}</h3>
        ${items.map((item) => `<p>${item}</p>`).join("")}
      </article>`).join("")}
    </div>
  </section>`;
}

function showcaseSection() {
  const stages = [
    ["Capture", "Guided photo workflows collect room, damage, and property context with a smartphone.", "/images/plnar-pro-photo-capture-ui.png"],
    ["Analysis", "Computer vision and AI organize imagery into a structured spatial record.", "/images/plnar-pro-combined-scan-video-ui.png"],
    ["Modeling", "Floorplans, measurements, and models become a shared record for field and desk teams.", "/images/plnar-lidar-living-room-contact-sheet.jpg"],
    ["Estimation", "Estimate-ready data and documentation support faster review and cleaner handoffs.", "/images/plnar-estimate-export-frame.png"],
    ["Delivery", "Outputs route into reports, analytics, and connected workflow systems.", "/images/plnar-conference-backdrop-2026.png"]
  ];
  return `<section class="showcase" id="tour">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">Product experience</p>
      <h2>Explore the property intelligence workflow.</h2>
    </div>
    <div class="showcase-shell" data-reveal>
      <div class="stage-tabs" role="tablist" aria-label="Product workflow stages">
        ${stages.map(([label], i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-stage="${i}">${label}</button>`).join("")}
      </div>
      <div class="stage-panel">
        ${stages.map(([label, copy, image], i) => `<article class="stage-item ${i === 0 ? "active" : ""}" data-stage-panel="${i}">
          <div><p class="eyebrow">Stage ${i + 1}</p><h3>${label}</h3><p>${copy}</p></div>
          <div class="stage-visual stage-${label.toLowerCase()}">
            <img src="${image}" alt="Plnar ${label.toLowerCase()} product visual">
            <div class="stage-rail" aria-hidden="true">
              <span>${label}</span>
              <span>${i === 0 ? "Guided capture" : i === 1 ? "Structured analysis" : i === 2 ? "Shared model" : i === 3 ? "Estimate-ready" : "Connected delivery"}</span>
            </div>
          </div>
        </article>`).join("")}
      </div>
    </div>
  </section>`;
}

function aiSection() {
  const capabilities = ["Computer Vision", "Spatial Intelligence", "Property Understanding", "Generative AI", "Damage Analysis", "Automated Documentation", "Estimate Automation", "Workflow Automation"];
  return `<section class="ai-section section-shell">
    <div class="ai-visual" data-reveal>
      <div class="signal-map">
        ${capabilities.map((capability, index) => `<span style="--i:${index}">${capability}</span>`).join("")}
      </div>
    </div>
    <div data-reveal>
      <p class="eyebrow">AI, made practical</p>
      <h2>AI that explains the property, not just the photo.</h2>
      <p>Plnar's AI story is grounded in workflow utility: structure the visual record, surface property context, support damage analysis, and prepare outputs that humans can review and use.</p>
      <ul class="check-list">
        <li>Designed for auditable property workflows.</li>
        <li>Focused on usable data rather than black-box replacement.</li>
        <li>Built to support claims, restoration, estimation, and operations.</li>
      </ul>
    </div>
  </section>`;
}

function solutionsGrid() {
  return `<section class="section-shell">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">Solutions</p>
      <h2>Property intelligence for every team that touches the property.</h2>
    </div>
    <div class="card-grid">
      ${solutionPages.map((page) => `<a class="solution-card" href="${page.path}" data-reveal><span>${page.eyebrow}</span><h3>${page.title}</h3><p>${page.copy}</p></a>`).join("")}
    </div>
  </section>`;
}

function integrationsPreview() {
  const integrations = ["Verisk", "Xactimate", "XactAnalysis", "CoreLogic / Cotality", "Nearmap", "Source7", "OneClick Code", "Partner API"];
  return `<section class="integrations-preview">
    <div data-reveal>
      <p class="eyebrow">Ecosystem</p>
      <h2>Property intelligence where your teams already work.</h2>
      <p>Plnar should feel like a modern data layer, not another isolated tool. Integration cards are labeled without fabricating implementation details.</p>
      <a class="text-link" href="/integrations">Explore integrations</a>
    </div>
    <div class="integration-grid">
      ${integrations.map((name) => `<article class="integration-card" data-reveal><strong>${name}</strong><span>Workflow connection</span></article>`).join("")}
    </div>
  </section>`;
}

function homeReadinessSection() {
  const modules = [
    ["Enterprise-ready by design", "A product surface designed for operational teams, not a generic showcase experience."],
    ["Built for secure property workflows", "Property evidence, measurements, and reviews need clear structure from capture through delivery."],
    ["Designed for claims, restoration, and inspection teams", "The workflow story stays grounded in how real property work moves across organizations."],
    ["Reserved for approved customer evidence", "When customer proof is cleared, this module can absorb verified logos, metrics, and case stories cleanly."]
  ];
  return `<section class="proof-section section-shell">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">Enterprise readiness</p>
      <h2>Operationally credible from the first impression.</h2>
      <p>The homepage can signal trust and workflow seriousness now, while leaving room for verified customer evidence later.</p>
    </div>
    <div class="proof-grid readiness-grid">
      ${modules.map(([title, copy]) => `<article class="proof-card readiness-card" data-reveal><span>Enterprise module</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}
    </div>
  </section>`;
}

function proofSection() {
  return `<section class="proof-section section-shell">
    <div class="section-heading" data-reveal>
      <p class="eyebrow">Customer proof</p>
      <h2>Proof belongs here, once verified.</h2>
      <p>These components are intentionally ready for real evidence without inventing logos, metrics, or quotes.</p>
    </div>
    <div class="proof-grid">
      ${["Customer metric", "Customer testimonial", "Case study", "ROI outcome"].map((item) => `<article class="proof-card" data-reveal><span>${item}</span><h3>Replace with verified customer proof.</h3><p>Add source-backed details once approved by the business.</p></article>`).join("")}
    </div>
  </section>`;
}

function seoSection() {
  const keywords = ["property intelligence platform", "AI property intelligence", "property inspection software", "insurance inspection software", "claims automation platform", "property documentation software"];
  return `<section class="seo-section">
    <div data-reveal>
      <p class="eyebrow">Category SEO</p>
      <h2>Built to own the search language of property intelligence.</h2>
      <p>The site architecture supports educational pages, solution pages, product pages, and resources around the terms buyers actually use.</p>
    </div>
    <div class="keyword-cloud" aria-label="Target keyword themes">${keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</div>
  </section>`;
}

function ctaBand(headline, copy) {
  return `<section class="cta-band" data-reveal>
    <p class="eyebrow">Next step</p>
    <h2>${headline}</h2>
    <p>${copy}</p>
    ${ctaPair()}
  </section>`;
}

function walkthroughPage() {
  const steps = [
    ["01", "Capture", "Guided smartphone workflows collect photos, room context, damage evidence, and property details without specialized hardware.", "plnar-pro-photo-capture-ui.png"],
    ["02", "Structure", "Imagery is organized into a spatial property record that carries room-level context forward.", "plnar-pro-combined-scan-video-ui.png"],
    ["03", "Analyze", "Computer vision and AI-assisted review support measurements, property understanding, documentation, and damage context.", "plnar-lidar-living-room-contact-sheet.jpg"],
    ["04", "Prepare", "Teams receive estimate-ready inputs, reports, model views, and documentation designed for downstream review.", "plnar-estimate-export-frame.png"],
    ["05", "Deliver", "Property intelligence routes into the systems, reports, analytics, and partner workflows that support decisions.", "plnar-conference-backdrop-2026.png"]
  ];
  return `${interiorHero("Product Walkthrough", "See the capture-to-intelligence workflow.", "A guided view of how Plnar turns smartphone imagery into structured property records and usable downstream outputs.")}
    <section class="walkthrough section-shell">
      ${steps.map(([number, title, copy, image]) => `<article class="walk-step" data-reveal>
        <div class="walk-copy"><span>${number}</span><h2>${title}</h2><p>${copy}</p></div>
        <img src="/images/${image}" alt="Plnar ${title.toLowerCase()} walkthrough visual">
      </article>`).join("")}
    </section>
    ${ctaBand("Ready to map this to your workflow?", "Book a demo and bring the claims, inspection, restoration, or property operations process you want to improve.")}`;
}

function roiPage() {
  return `${interiorHero("ROI Calculator", "Estimate impact using your own assumptions.", "This calculator is a planning tool, not a Plnar performance claim. Replace default values with your workflow data to model potential operational impact.")}
    <section class="roi-section section-shell">
      <form class="roi-form" aria-label="ROI calculator">
        <label>Monthly property files<input type="number" min="0" value="1200" data-roi-input="files"></label>
        <label>Average manual handling cost per file<input type="number" min="0" value="95" data-roi-input="cost"></label>
        <label>Estimated rework or revisit rate (%)<input type="number" min="0" max="100" value="18" data-roi-input="rework"></label>
        <label>Assumed reduction from better capture (%)<input type="number" min="0" max="100" value="20" data-roi-input="reduction"></label>
        <label>Average cycle-time value per day<input type="number" min="0" value="12" data-roi-input="dayValue"></label>
        <label>Estimated days removed per file<input type="number" min="0" value="1.5" step="0.1" data-roi-input="days"></label>
      </form>
      <aside class="roi-output" aria-live="polite">
        <p class="eyebrow">Scenario estimate</p>
        <h2 data-roi-output="monthly">$0</h2>
        <p>Estimated monthly operational value from the assumptions entered.</p>
        <div class="roi-breakdown">
          <span><strong data-roi-output="rework">$0</strong> rework/revisit value</span>
          <span><strong data-roi-output="cycle">$0</strong> cycle-time value</span>
        </div>
        <p class="fine-print">Planning model only. Replace with validated Plnar/customer proof before using externally.</p>
        <a class="btn primary" href="/demo">Review With Plnar</a>
      </aside>
    </section>
    ${proofSection()}`;
}

function guidePage() {
  const criteria = [
    ["Capture quality", "Can policyholders, field teams, and large loss teams capture complete property context without specialized hardware?"],
    ["Structured outputs", "Does the platform generate usable measurements, room context, documentation, models, reports, and estimate-ready data?"],
    ["Workflow fit", "Can the intelligence layer enhance existing claims, estimating, restoration, and property systems?"],
    ["AI auditability", "Can human teams understand, review, and trust AI-assisted outputs before decisions are made?"],
    ["Adoption path", "Can the rollout support self-service, professional capture, training, operations, and compliance needs?"],
    ["Proof readiness", "Are accuracy, cycle-time, cost, and adoption claims supported by verified evidence?"]
  ];
  return `${interiorHero("Buyer Guide", "How to evaluate an AI property intelligence platform.", "A practical framework for claims, inspection, restoration, and enterprise property teams considering smartphone-first property intelligence.")}
    <section class="guide-section section-shell">
      <div class="section-heading"><p class="eyebrow">Evaluation framework</p><h2>Separate platform substance from feature noise.</h2><p>Use these criteria to compare property inspection software, claims automation platforms, documentation tools, and AI property intelligence systems.</p></div>
      <div class="guide-grid">
        ${criteria.map(([title, copy]) => `<article class="quiet-card" data-reveal><h3>${title}</h3><p>${copy}</p></article>`).join("")}
      </div>
    </section>
    ${ctaBand("Bring the guide into your buying process.", "Use the framework to structure a demo, pilot, or internal evaluation conversation.")}`;
}

function platformPage() {
  return `${interiorHero("Platform", "One intelligence layer for property work.", "Plnar brings smartphone capture, AI analysis, measurements, documentation, estimates, reports, analytics, and integrations into a unified property intelligence architecture.")}
    ${architectureSection()}
    ${showcaseSection()}
    ${aiSection()}
    ${ctaBand("Build a better property record from the first capture.", "Book a demo to see how the platform maps to your claims or property workflow.")}`;
}

function integrationsPage() {
  const categories = [
    ["Estimating", ["Verisk", "Xactimate", "XactAnalysis", "CoreLogic / Cotality"]],
    ["Property data", ["Nearmap", "Source7", "OneClick Code"]],
    ["Workflow", ["Claims systems", "Reports", "Analytics", "Partner API"]]
  ];
  return `${interiorHero("Integrations", "Connect property intelligence to the systems that decide the work.", "Highlight ecosystem leadership without overstating unverified implementation details.")}
    <section class="section-shell">
      <div class="integration-columns">
        ${categories.map(([title, items]) => `<article class="quiet-card"><h2>${title}</h2>${items.map((item) => `<p><strong>${item}</strong><span> Integration framework placeholder.</span></p>`).join("")}</article>`).join("")}
      </div>
    </section>
    ${ctaBand("Bring better data into existing workflows.", "See how Plnar can fit your estimating, claims, or property operations ecosystem.")}`;
}

function customersPage(kind) {
  const isCase = kind === "case-studies";
  return `${interiorHero(isCase ? "Case Studies" : "Customers", isCase ? "Verified stories should carry the proof." : "Enterprise credibility, ready for real proof.", "This page is structured for testimonials, customer logos, metrics, and detailed outcomes, with every proof component clearly labeled until verified.")}
    ${proofSection()}
    <section class="section-shell">
      <div class="resource-grid">
        ${["Carrier workflow story", "Restoration documentation story", "Field professional rollout", "Enterprise operations program"].map((item) => `<article class="resource-card"><p class="eyebrow">Placeholder</p><h2>${item}</h2><p>Replace with verified customer proof, approved metrics, and source-backed quotes.</p><a class="text-link" href="/demo">Discuss this workflow</a></article>`).join("")}
      </div>
    </section>
    ${ctaBand("Show us the workflow you want to improve.", "We will map Plnar's property intelligence layer to the outcomes your team needs.")}`;
}

function resourcePage(kind) {
  const title = kind === "blog" ? "Blog" : "Resources";
  const resources = [
    ["Guide", "How to evaluate an AI property intelligence platform"],
    ["Checklist", "Inspection workflow software readiness checklist"],
    ["Brief", "Claims automation and the structured property record"],
    ["Template", "Property documentation software buyer questions"],
    ["Article", "Virtual property inspections after the photo-only era"],
    ["Article", "What damage assessment software needs to be useful"]
  ];
  return `${interiorHero(title, "Category education for modern property teams.", "Create content that helps buyers understand property intelligence, claims automation, inspection workflows, and AI-assisted property documentation.")}
    <section class="section-shell">
      <div class="resource-grid">
        ${resources.map(([type, headline], index) => `<article class="resource-card"><p class="eyebrow">${type}</p><h2>${headline}</h2><p>SEO-ready content placeholder. Replace with published, reviewed content.</p><a class="text-link" href="${index === 0 ? "/resources/property-intelligence-guide" : "/demo"}">${index === 0 ? "Read guide" : "Request this resource"}</a></article>`).join("")}
      </div>
    </section>
    ${ctaBand("Turn category interest into pipeline.", "Use resources, tours, and demo paths to convert education into sales conversations.")}`;
}

function simplePage(kind) {
  const map = {
    about: ["About", "Plnar is building the intelligence layer for property work.", "The brand story should stay grounded: smartphone-first capture, AI-assisted property understanding, and structured data for claims and property workflows."],
    careers: ["Careers", "Build practical AI for the property world.", "This page is ready for verified roles, culture notes, and hiring content without inventing openings."],
    contact: ["Contact", "Talk with Plnar.", "Share your workflow and the team will route you to the right conversation."],
    demo: ["Book a Demo", "See property intelligence in action.", "Tell us whether you are focused on claims, inspections, restoration, estimation, or property operations."]
  };
  const [eyebrow, headline, copy] = map[kind];
  return `${interiorHero(eyebrow, headline, copy)}
    <section class="form-section">
      <form class="contact-form" aria-label="${eyebrow} form">
        <label>Work email<input type="email" name="email" autocomplete="email" required></label>
        <label>Company<input type="text" name="company" autocomplete="organization" required></label>
        <label>Primary workflow<select name="workflow"><option>Insurance claims</option><option>Restoration</option><option>Contracting</option><option>Property operations</option><option>Other</option></select></label>
        <label>What should Plnar help improve?<textarea name="message" rows="5"></textarea></label>
        <button class="btn primary" type="submit">Request Follow-Up</button>
        <p>Form is front-end only in this concept build.</p>
      </form>
    </section>`;
}

function solutionPage(page) {
  return `${interiorHero(page.eyebrow, page.headline, page.copy)}
    <section class="split-section">
      <div><p class="eyebrow">Challenges</p><h2>What slows the workflow down.</h2>${page.challenges.map((item) => `<p class="pill-line">${item}</p>`).join("")}</div>
      <div><p class="eyebrow">Outcomes</p><h2>What property intelligence changes.</h2>${page.outcomes.map((item) => `<p class="pill-line positive">${item}</p>`).join("")}</div>
    </section>
    ${showcaseSection()}
    ${integrationsPreview()}
    ${ctaBand("Bring this workflow into focus.", "Book a demo to see how Plnar can support this team without forcing a rip-and-replace transformation.")}`;
}

function productPage(page) {
  return `${interiorHero(page.eyebrow, page.headline, page.copy)}
    <section class="ai-section section-shell">
      <div><p class="eyebrow">Capabilities</p><h2>${page.title}</h2><ul class="check-list">${page.bullets.map((item) => `<li>${item}</li>`).join("")}</ul></div>
      <div class="product-asset"><img src="/images/${page.path.includes("capture") ? "plnar-pro-photo-capture-ui.png" : page.path.includes("intelligence") ? "plnar-pro-combined-scan-video-ui.png" : "plnar-estimate-export-frame.png"}" alt="Plnar ${page.title} visual"></div>
    </section>
    ${ctaBand(`Explore Plnar ${page.title}.`, "Watch the product tour or book a demo with a workflow specialist.")}`;
}

function interiorHero(eyebrow, headline, copy) {
  return `<section class="interior-hero section-shell" data-reveal>
    <p class="eyebrow">${eyebrow}</p>
    <h1>${headline}</h1>
    <p>${copy}</p>
    ${ctaPair()}
  </section>`;
}

export function renderPage(page) {
  let body = "";
  if (page.kind === "home") body = home();
  if (page.kind === "platform") body = platformPage();
  if (page.kind === "integrations") body = integrationsPage();
  if (page.kind === "customers" || page.kind === "case-studies") body = customersPage(page.kind);
  if (page.kind === "resources" || page.kind === "blog") body = resourcePage(page.kind);
  if (page.kind === "guide") body = guidePage();
  if (page.kind === "walkthrough") body = walkthroughPage();
  if (page.kind === "roi") body = roiPage();
  if (["about", "careers", "contact", "demo"].includes(page.kind)) body = simplePage(page.kind);
  if (page.kind === "solution") body = solutionPage(page);
  if (page.kind === "product") body = productPage(page);
  return applyBasePath(shell(page, body));
}
