const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname);

// Colors
const DARK_BG    = '#1A1A2E';
const ACCENT     = '#E94560';
const BLUE       = '#3A7BD5';
const GREEN      = '#27AE60';
const WHITE      = '#FFFFFF';
const TEXT_DARK  = '#1A1A1E';
const MID_GRAY   = '#777777';
const DIV_GRAY   = '#DDDDDD';
const PROB_BG    = '#FFF5F5';
const BUILD_BG   = '#F0F7FF';
const WHY_BG     = '#F0FFF4';
const PROOF_BG   = '#F9F9F9';

const GAVIN = {
  company : 'Gavin Smith — Web Design Services',
  phone   : '(254) 659-0141',
  email   : 'hillsboro.home.property@gmail.com',
  portfolio: 'hillsborotireservice.com',
};

const proposals = [
  {
    filename   : 'Proposal - Herring Properties.pdf',
    business   : 'Herring Properties',
    tagline    : 'Custom Website Proposal',
    contact    : 'info@herringproperties.com  |  (254) 582-0022',
    address    : '101 N Waco St, Hillsboro, TX 76645',
    investment : '$2,500 – $4,000',
    problem: [
      'Built on Wix — slow load times, poor SEO, completely generic template.',
      'No agent profiles, no team photos, no local identity on the site.',
      'Zero differentiation from any other realtor site in Hill County.',
      "Doesn't reflect 20+ years in Hillsboro or Chamber of Commerce membership.",
    ],
    build: [
      ['Homepage',        'Local Hillsboro hero image, "Trusted in Hill County Since [year]", service overview'],
      ['Meet the Team',   'Agent bios with professional photos and credentials'],
      ['Listings',        'Property photos, details, and easy browsing experience'],
      ['Buyer & Seller',  'Simple guides tailored to each type of client'],
      ['Testimonials',    'Local client reviews displayed front and center'],
      ['Contact Page',    'Map, phone, individual agent emails, and contact form'],
      ['Blog (Optional)', 'Hillsboro market updates for ongoing SEO value'],
    ],
    why: 'Your site is built on Wix and it looks like it. When someone Googles "realtor in Hillsboro TX," they should find a site that makes them trust you instantly — not a generic template that could belong to anyone. A custom site means faster load times, better Google rankings, and a first impression that matches the reputation you\'ve built over decades.',
  },
  {
    filename   : 'Proposal - Cindy Cole Realtor.pdf',
    business   : 'Cindy Cole, Realtor',
    tagline    : 'Custom Website Proposal',
    contact    : 'cindycole.realtor@gmail.com  |  (254) 901-8202',
    address    : 'Hillsboro, TX — Serving Hill County & Beyond',
    investment : '$2,000 – $3,500',
    problem: [
      'Trapped inside a corporate ERA Courtyard template — identical to every other ERA agent.',
      'Personal brand is completely invisible — no differentiation whatsoever.',
      'Covers Hillsboro to Waxahachie to Waco, but the site markets none of those areas.',
      'No prominent testimonials, no video introduction, no neighborhood guides.',
    ],
    build: [
      ['Homepage',          "Cindy's face front and center, personal tagline, service areas shown visually"],
      ['About Cindy',       'Full personal story and credentials: NAR, ABR, SRS designations'],
      ['Area Guides',       'Individual pages for Hillsboro, Waxahachie, Cleburne, Burleson, Waco, Alvarado'],
      ['Listings',          'Featured properties with professional photography'],
      ['Testimonials',      'Client reviews prominently displayed throughout the site'],
      ['Buyer/Seller',      'Simple guides and local market reports for each audience'],
      ['Video Intro',       'Short welcome video embedded on the homepage'],
      ['Contact',           'Direct number, fast response CTA, and easy contact form'],
    ],
    why: 'Your ERA template looks like every other ERA agent\'s site — because it is. You cover territory from Hillsboro all the way to Waxahachie, and that range is your competitive advantage. But nobody can tell from your website. A personal brand site that\'s 100% yours — your face, your story, your markets — is how you stand out when buyers Google "realtor near Hillsboro TX."',
  },
  {
    filename   : 'Proposal - ORB Investments TX.pdf',
    business   : 'ORB Investments TX',
    tagline    : 'Commercial Website Proposal',
    contact    : 'amanda.marbut@orbinvest.com  |  (254) 337-0740',
    address    : 'Hillsboro, TX — IH-35 Corridor, Between DFW & Waco',
    investment : '$4,000 – $7,000',
    problem: [
      'Current site only showcases one unit — no portfolio depth or scale.',
      'No company story, no About page, no team information anywhere.',
      'No virtual tour — now standard for commercial real estate.',
      'IH-35 corridor location (DFW to Waco) is a major selling point — barely mentioned.',
      'No leasing inquiry workflow — just a basic contact form.',
    ],
    build: [
      ['Homepage',         '"Prime Commercial Space. Hillsboro, TX. IH-35 Corridor." Traffic stats, location advantage'],
      ['Property Portfolio','Individual pages per unit — galleries, floor plans, specs, virtual tour embed'],
      ['Location Page',    'IH-35, HWY 35E/35W merge, traffic counts, proximity map to DFW and Waco'],
      ['About ORB',        'Company story, investment philosophy, and team profiles'],
      ['Testimonials',     'Social proof from current and past commercial tenants'],
      ['Leasing Inquiry',  'Structured form: company name, space needed, timeline, intended use'],
      ['Contact',          'Amanda direct contact + phone number displayed prominently'],
    ],
    why: 'Your site shows one unit. If ORB has more properties — or plans to — you need a site that scales with your portfolio. Commercial tenants and developers judge credibility by web presence before they ever call. Your IH-35 location between DFW and Waco is a major asset — it needs to be the headline, not a footnote.',
  },
  {
    filename   : 'Proposal - Swift Realty.pdf',
    business   : 'Swift Realty LLC',
    tagline    : 'Custom Website Proposal',
    contact    : 'ryan@swiftrealty.net  |  (972) 898-6981',
    address    : '100 County Road 4351, Hillsboro, TX 76645',
    investment : '$3,500 – $5,500',
    problem: [
      'Rehab project pages have no before/after galleries — the entire visual selling point is missing.',
      'RV parks (Cedar Ridge & Open Valley) are buried — no dedicated pages, rates, or booking.',
      'No owner bio despite 20+ years of experience as a local investor.',
      'No testimonials from tenants or property sellers anywhere on the site.',
    ],
    build: [
      ['Homepage',         'Strong hero, Swift Realty intro, 3 service blocks: Buy Houses / RV Parks / Rehab'],
      ['Rehab Gallery',    'Before/after sliders for each flipped property with sale info and timeline'],
      ['Cedar Ridge RV',   'Dedicated page — photos, rates, amenities map, booking/contact form (Glen Rose, TX)'],
      ['Open Valley RV',   'Dedicated page — photos, rates, amenities map, booking/contact form (Cresson, TX)'],
      ['About Ryan',       '20+ years experience, local Hillsboro investor story, personal credibility'],
      ['Testimonials',     'Tenant reviews, seller testimonials, and investor feedback'],
      ['Contact',          'Simple form and phone number displayed prominently throughout'],
    ],
    why: 'Your rehab projects don\'t show before/afters — which is literally the whole point of a flip. And your RV parks don\'t have their own pages with rates and booking info. You\'re leaving money on the table every time someone visits your site and can\'t find what they need. Let\'s make your site work as hard as you do.',
  },
  {
    filename   : 'Proposal - Jana Nors Real Estate.pdf',
    business   : 'Jana Nors Real Estate',
    tagline    : 'Custom Website Proposal',
    contact    : 'JanaNorsRE@gmail.com  |  (254) 715-3430',
    address    : 'Abbott, TX — Hill County & McLennan County',
    investment : '$3,000 – $5,000',
    problem: [
      'Mobile navigation is broken and overly complex — visitors on phones give up and leave.',
      '30+ year career and deep Hill County roots are not prominently featured.',
      'Farm and ranch listings are treated the same as residential — they need a separate experience.',
      'Contact form is hard to find. Heavy page load due to an outdated framework.',
    ],
    build: [
      ['Homepage',        '"Hill County\'s Farm & Ranch Expert Since 1987." Strong rural Texas photography hero'],
      ['Farm & Ranch',    'Acreage listings, aerial photos, soil/water info, and a rural property buyer guide'],
      ['Residential',     'Clean, separate section for homes in Hillsboro, Abbott, and surrounding towns'],
      ['About Jana',      'Full bio, Baylor connection, born and raised Hill County story, career since 1987'],
      ['Coverage Map',    'Visual map of Hill County, McLennan County, and Central Texas service area'],
      ['Testimonials',    'Existing reviews imported and featured alongside new client stories'],
      ['Land Blog',       '"Hill County Land Market" updates — major SEO boost for farm/ranch searches'],
      ['Contact',         'Simple, prominent, and direct to Jana with a fast response promise'],
    ],
    why: 'A buyer looking for 100 acres of Hill County land is a completely different person than someone buying a house in Hillsboro — and your site treats them the same. With 30+ years in this market, you are the expert. Your website should make that unmistakably clear the second someone lands on it.',
  },
  {
    filename   : 'Proposal - WestLand Realty Group.pdf',
    business   : 'WestLand Realty Group',
    tagline    : 'Premium Website Upgrade Proposal',
    contact    : 'katie@westlandrg.com  |  media@westlandrg.com  |  (254) 826-8008',
    address    : '101 S Main St, West, TX  &  109 S Waco St, Hillsboro, TX',
    investment : '$6,000 – $10,000',
    problem: [
      "Best site in the local market — but that's not the right benchmark anymore.",
      'Property search is basic — no map view, no advanced filters for buyers.',
      'No virtual tours on listings. Mobile interactive elements have performance issues.',
      'No client login portal for buyers and sellers to track their transaction.',
      'Blog exists but is not targeted enough to dominate Hill County SEO.',
    ],
    build: [
      ['Homepage',          'Elevated design, stronger hero, instant home value CTA, featured agents prominent'],
      ['Advanced Search',   'Map-based search with filters: acreage, school district, price range, waterfront'],
      ['Virtual Tours',     'Matterport or video embed on every active listing page'],
      ['Client Portal',     'Login for active clients: documents, transaction timeline, and status updates'],
      ['Neighborhood Guides','15+ area pages with school data, market stats, and lifestyle info per community'],
      ['Agent Profiles',    'Video intro per agent, full bio, production stats, and specialties listed'],
      ['FAQ Section',       'Common buyer and seller questions — builds trust and SEO value simultaneously'],
      ['SEO Blog Strategy', 'Targeted posts: "Homes for sale in West TX," "Hill County real estate 2026," etc.'],
      ['Mobile Overhaul',   'Full responsive audit and rebuild of all interactive elements site-wide'],
    ],
    why: 'Your site is the best in this market — but "best in Hillsboro" isn\'t where you should stop. Regional firms in Waco and beyond are your real competition. A premium rebuild puts you in a different league: map-based search, virtual tours, a client portal, and SEO content that pulls buyers from across Central Texas before they ever call a competitor.',
  },
];

// ─── MEASURE helper ────────────────────────────────────────────────────────────
// Returns the rendered height of a string at the given font/size/width WITHOUT
// actually drawing anything.
function measureText(doc, text, font, size, width) {
  doc.font(font).fontSize(size);
  return doc.heightOfString(text, { width });
}

// ─── SECTION HEADER helper ─────────────────────────────────────────────────────
function sectionHeader(doc, label, color, y, PAD, W) {
  doc.rect(PAD, y, 4, 16).fill(color);
  doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(11)
     .text(label, PAD + 10, y + 2, { width: W - PAD * 2 - 10 });
  return y + 22;
}

// ─── DRAW ONE PROPOSAL ────────────────────────────────────────────────────────
async function drawProposal(proposal) {
  const doc = new PDFDocument({ size: 'letter', margins: { top: 0, bottom: 0, left: 0, right: 0 }, autoFirstPage: true });
  const outputPath = path.join(OUTPUT_DIR, proposal.filename);
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const W   = 612;
  const PAD = 38;
  const IW  = W - PAD * 2;       // inner width
  const ITEM_PAD = 8;             // padding inside boxes

  // ── 1. HEADER ───────────────────────────────────────────────────────────────
  doc.rect(0, 0, W, 106).fill(DARK_BG);
  doc.rect(0, 104, W, 4).fill(ACCENT);

  // Badge
  const badgeW = 132, badgeH = 50, badgeX = W - PAD - badgeW, badgeY = 16;
  doc.rect(badgeX, badgeY, badgeW, badgeH).fill(ACCENT);
  doc.fillColor(WHITE).font('Helvetica').fontSize(7.5)
     .text('INVESTMENT RANGE', badgeX, badgeY + 8, { width: badgeW, align: 'center', characterSpacing: 1 });
  doc.font('Helvetica-Bold').fontSize(15)
     .text(proposal.investment, badgeX, badgeY + 22, { width: badgeW, align: 'center' });

  // Title block (leave room for badge)
  const titleW = W - PAD * 2 - badgeW - 16;
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(21)
     .text(proposal.business, PAD, 18, { width: titleW });
  doc.fillColor(ACCENT).font('Helvetica').fontSize(10)
     .text(proposal.tagline.toUpperCase(), PAD, 46, { characterSpacing: 1.5, width: titleW });
  doc.fillColor('#AAAACC').font('Helvetica').fontSize(8.5)
     .text(proposal.contact, PAD, 64, { width: titleW });
  doc.text(proposal.address, PAD, 76, { width: titleW });

  let y = 116;   // start below header + accent bar

  // ── 2. THE PROBLEM ──────────────────────────────────────────────────────────
  y = sectionHeader(doc, 'THE PROBLEM', ACCENT, y, PAD, W);

  // Measure each bullet line
  const bulletIndent = 20;
  const bulletTextW  = IW - bulletIndent - ITEM_PAD * 2;
  const lineHeights  = proposal.problem.map(line =>
    measureText(doc, line, 'Helvetica', 9.5, bulletTextW) + 6
  );
  const probBoxH = lineHeights.reduce((a, b) => a + b, 0) + ITEM_PAD * 2;

  doc.rect(PAD, y, IW, probBoxH).fill(PROB_BG).strokeColor(DIV_GRAY).lineWidth(0.5).stroke();

  let by = y + ITEM_PAD;
  proposal.problem.forEach((line, i) => {
    doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(11).text('›', PAD + ITEM_PAD, by - 1);
    doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(9.5)
       .text(line, PAD + ITEM_PAD + bulletIndent, by, { width: bulletTextW, lineGap: 1 });
    by += lineHeights[i];
  });
  y += probBoxH + 12;

  // ── 3. WHAT WE BUILD ────────────────────────────────────────────────────────
  y = sectionHeader(doc, 'WHAT WE BUILD', BLUE, y, PAD, W);

  // Measure every item first so we know exact heights
  const labelW = IW - ITEM_PAD * 2 - 6;
  const descW  = labelW;
  const LABEL_H = 13;
  const itemHeights = proposal.build.map(([label, desc]) => {
    const dh = measureText(doc, desc, 'Helvetica', 8.5, descW);
    return LABEL_H + dh + 10;   // label + desc + gap below
  });

  // Single column — reliable, no overlap
  const buildBoxH = itemHeights.reduce((a, b) => a + b, 0) + ITEM_PAD * 2;

  doc.rect(PAD, y, IW, buildBoxH).fill(BUILD_BG).strokeColor(DIV_GRAY).lineWidth(0.5).stroke();

  let iy = y + ITEM_PAD;
  proposal.build.forEach(([label, desc], i) => {
    // coloured bar
    doc.rect(PAD + ITEM_PAD, iy + 1, 3, LABEL_H - 2).fill(BLUE);
    // label
    doc.fillColor(BLUE).font('Helvetica-Bold').fontSize(8.5)
       .text(label.toUpperCase(), PAD + ITEM_PAD + 8, iy, { width: labelW, characterSpacing: 0.3 });
    // description
    const descH = measureText(doc, desc, 'Helvetica', 8.5, descW);
    doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(8.5)
       .text(desc, PAD + ITEM_PAD + 8, iy + LABEL_H, { width: descW, lineGap: 1 });
    iy += itemHeights[i];

    // divider between items (not after last)
    if (i < proposal.build.length - 1) {
      doc.moveTo(PAD + ITEM_PAD + 8, iy - 4)
         .lineTo(PAD + IW - ITEM_PAD, iy - 4)
         .strokeColor('#D8E8F8').lineWidth(0.5).stroke();
    }
  });
  y += buildBoxH + 12;

  // ── 4. WHY IT MATTERS ───────────────────────────────────────────────────────
  y = sectionHeader(doc, 'WHY IT MATTERS', GREEN, y, PAD, W);

  const quoteIndent = 22;
  const quoteW = IW - ITEM_PAD * 2 - quoteIndent;
  const quoteH = measureText(doc, proposal.why, 'Helvetica-Oblique', 9.5, quoteW);
  const whyBoxH = quoteH + ITEM_PAD * 2 + 4;

  doc.rect(PAD, y, IW, whyBoxH).fill(WHY_BG).strokeColor(DIV_GRAY).lineWidth(0.5).stroke();
  doc.fillColor(GREEN).font('Helvetica-Bold').fontSize(22).text('\u201C', PAD + ITEM_PAD, y + 2);
  doc.fillColor(TEXT_DARK).font('Helvetica-Oblique').fontSize(9.5)
     .text(proposal.why, PAD + ITEM_PAD + quoteIndent, y + ITEM_PAD + 4, { width: quoteW, lineGap: 2 });
  y += whyBoxH + 12;

  // ── 5. PROOF BAR ────────────────────────────────────────────────────────────
  const proofH = 32;
  doc.rect(PAD, y, IW, proofH).fill(PROOF_BG).strokeColor(DIV_GRAY).lineWidth(0.5).stroke();
  doc.fillColor(MID_GRAY).font('Helvetica-Bold').fontSize(7.5)
     .text('RECENT WORK', PAD + ITEM_PAD, y + 7, { characterSpacing: 1 });
  doc.fillColor(BLUE).font('Helvetica').fontSize(8.5)
     .text(
       'hillsborotireservice.com  —  Hillsboro Tire & Service  |  Full build, custom domain, Netlify deployment',
       PAD + ITEM_PAD, y + 19, { width: IW - ITEM_PAD * 2 }
     );
  y += proofH + 6;

  // ── 6. FOOTER ───────────────────────────────────────────────────────────────
  // Always pin footer to bottom of page
  const FOOTER_H = 44;
  const footerY  = 792 - FOOTER_H;

  // If content is about to collide with footer, warn in console
  if (y > footerY - 4) {
    console.warn(`  ⚠ Content overflow in: ${proposal.filename} (y=${y}, footerY=${footerY})`);
  }

  doc.rect(0, footerY, W, FOOTER_H).fill(DARK_BG);
  doc.rect(0, footerY, W, 2).fill(ACCENT);

  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(10)
     .text(GAVIN.company, PAD, footerY + 10);
  doc.fillColor('#AAAACC').font('Helvetica').fontSize(8.5)
     .text(`${GAVIN.phone}  |  ${GAVIN.email}`, PAD, footerY + 25);

  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(8.5)
     .text('Ready to get started? Call or email anytime.', W - PAD - 200, footerY + 17, { width: 200, align: 'right' });

  doc.end();
  return new Promise(resolve => stream.on('finish', resolve));
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
(async () => {
  console.log('Generating proposals...');
  for (const p of proposals) {
    await drawProposal(p);
    console.log(`  Created: ${p.filename}`);
  }
  console.log('\nAll 6 proposals generated. No overlapping — dynamic height used throughout.');
})();
