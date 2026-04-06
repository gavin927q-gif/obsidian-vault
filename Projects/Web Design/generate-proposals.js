const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname);

// Brand colors
const DARK_BG = '#1A1A2E';
const ACCENT = '#E94560';
const LIGHT_GRAY = '#F5F5F5';
const MID_GRAY = '#888888';
const TEXT_DARK = '#1A1A1E';
const WHITE = '#FFFFFF';
const SECTION_DIVIDER = '#E0E0E0';
const PROBLEM_BG = '#FFF5F5';
const BUILD_BG = '#F0F7FF';
const WHY_BG = '#F5FFF5';

const GAVIN = {
  name: 'Gavin Smith',
  phone: '(254) 659-0141',
  email: 'hillsboro.home.property@gmail.com',
  portfolio: 'hillsborotireservice.com',
  company: 'Gavin Smith — Web Design Services',
};

const proposals = [
  {
    filename: 'Proposal - Herring Properties.pdf',
    business: 'Herring Properties',
    tagline: 'Custom Website Proposal',
    contact: 'info@herringproperties.com  |  (254) 582-0022',
    address: '101 N Waco St, Hillsboro, TX 76645',
    investment: '$2,500 – $4,000',
    problem: [
      'Built on Wix — slow load times, poor SEO, and a completely generic template.',
      'No agent profiles, no team photos, no local identity.',
      'Zero differentiation from any other realtor site in Hill County.',
      "Doesn't reflect 20+ years in Hillsboro or Chamber of Commerce membership.",
    ],
    build: [
      ['Homepage', 'Local Hillsboro hero image, "Trusted in Hill County Since [year]", service overview'],
      ['Meet the Team', 'Agent bios with photos and professional credentials'],
      ['Listings Showcase', 'Property photos, details, and easy browsing'],
      ['Buyer & Seller Pages', 'Simple guides tailored to each audience'],
      ['Testimonials', 'Local client reviews front and center'],
      ['Contact Page', 'Map, phone, individual agent emails, and contact form'],
      ['Optional Blog', 'Hillsboro market updates for ongoing SEO value'],
    ],
    why: '"Your site is built on Wix and it looks like it. When someone Googles \'realtor in Hillsboro TX,\' they should find a site that makes them trust you instantly — not a generic template that could belong to anyone. A custom site means faster load times, better Google rankings, and a first impression that matches the reputation you\'ve built over decades."',
  },
  {
    filename: 'Proposal - Cindy Cole Realtor.pdf',
    business: 'Cindy Cole, Realtor',
    tagline: 'Custom Website Proposal',
    contact: 'cindycole.realtor@gmail.com  |  (254) 901-8202',
    address: 'Hillsboro, TX — Serving Hill County & Beyond',
    investment: '$2,000 – $3,500',
    problem: [
      'Trapped inside a corporate ERA Courtyard template — looks identical to every other ERA agent.',
      'Personal brand is invisible — no differentiation whatsoever.',
      'Covers a huge territory (Hillsboro to Waxahachie to Waco) but the site markets none of it.',
      'No testimonials featured prominently, no video introduction, no neighborhood guides.',
    ],
    build: [
      ['Homepage', "Cindy's face front and center, personal tagline, service areas shown visually"],
      ['About Cindy', 'Full personal story and credentials: NAR, ABR, SRS designations'],
      ['Area Guides', 'Individual pages for Hillsboro, Waxahachie, Cleburne, Burleson, Waco, Alvarado'],
      ['Listings', 'Featured properties with great photography'],
      ['Testimonials', 'Client reviews prominently displayed throughout'],
      ['Buyer/Seller Resources', 'Simple guides and local market reports'],
      ['Video Intro', 'Short welcome video embedded on homepage'],
      ['Contact', 'Direct number, fast response CTA, easy form'],
    ],
    why: '"Your ERA template looks like every other ERA agent\'s site — because it is. You cover territory from Hillsboro all the way to Waxahachie, and that range is your competitive advantage. But nobody can tell from your website. A personal brand site that\'s 100% yours — your face, your story, your markets — is how you stand out when buyers Google \'realtor near Hillsboro TX.\'"',
  },
  {
    filename: 'Proposal - ORB Investments TX.pdf',
    business: 'ORB Investments TX',
    tagline: 'Commercial Website Proposal',
    contact: 'amanda.marbut@orbinvest.com  |  (254) 337-0740',
    address: 'Hillsboro, TX — IH-35 Corridor, Between DFW & Waco',
    investment: '$4,000 – $7,000',
    problem: [
      'Current site only showcases one unit — no scale, no portfolio depth.',
      'No company story, no About page, no team information.',
      'No virtual tour — now standard for commercial properties.',
      'IH-35 corridor location (DFW to Waco) is a massive selling point — barely mentioned.',
      'No leasing inquiry workflow — just a basic contact form.',
    ],
    build: [
      ['Homepage', '"Prime Commercial Space. Hillsboro, TX. IH-35 Corridor." Traffic stats, location advantage'],
      ['Properties Portfolio', 'Individual pages per unit with galleries, floor plans, specs, virtual tour'],
      ['Location Advantage Page', 'IH-35, HWY 35E/35W merge, traffic counts, DFW–Waco proximity map'],
      ['About ORB', 'Company story, investment philosophy, team profiles'],
      ['Tenant Testimonials', 'Social proof for prospective commercial tenants'],
      ['Leasing Inquiry Form', 'Company name, space needed, timeline, intended use type'],
      ['Contact', 'Amanda direct + phone number displayed prominently'],
    ],
    why: '"Your site shows one unit. If ORB has more properties — or will have more — you need a site that scales with your portfolio. Commercial tenants and developers judge credibility by web presence before they ever call. Your IH-35 location between DFW and Waco is a major asset — it needs to be the headline, not a footnote."',
  },
  {
    filename: 'Proposal - Swift Realty.pdf',
    business: 'Swift Realty LLC',
    tagline: 'Custom Website Proposal',
    contact: 'ryan@swiftrealty.net  |  (972) 898-6981',
    address: '100 County Road 4351, Hillsboro, TX 76645',
    investment: '$3,500 – $5,500',
    problem: [
      'Rehab project pages have no before/after galleries — the entire visual selling point of flipping is missing.',
      'RV parks (Cedar Ridge & Open Valley) are buried with no dedicated landing pages, rates, or booking.',
      'No owner bio despite 20+ years of experience — credibility left on the table.',
      'No testimonials from tenants or property sellers.',
    ],
    build: [
      ['Homepage', 'Strong hero, Ryan/Swift Realty intro, 3 service blocks: We Buy Houses / RV Parks / Rehab'],
      ['Rehab Projects Gallery', 'Before/after sliders for each property with sale info and timeline'],
      ['Cedar Ridge RV Park', 'Photos, rates, amenities, map, contact/booking form — Glen Rose, TX'],
      ['Open Valley RV Park', 'Photos, rates, amenities, map, contact/booking form — Cresson, TX'],
      ['About Ryan', '20+ years experience, local Hillsboro investor story, personal credibility'],
      ['Testimonials', 'Tenant reviews, seller testimonials, investor feedback'],
      ['Contact', 'Simple form and phone number prominently displayed'],
    ],
    why: '"Your rehab projects don\'t show before/afters — which is literally the whole point of a flip. And your RV parks don\'t have their own pages with rates and booking info. You\'re leaving money on the table every time someone visits your site and can\'t find what they need. Let\'s make your site work as hard as you do."',
  },
  {
    filename: 'Proposal - Jana Nors Real Estate.pdf',
    business: 'Jana Nors Real Estate',
    tagline: 'Custom Website Proposal',
    contact: 'JanaNorsRE@gmail.com  |  (254) 715-3430',
    address: 'PO Box 93, Abbott, TX 76621 — Hill County & McLennan County',
    investment: '$3,000 – $5,000',
    problem: [
      'Mobile navigation is broken and overly complex — losing visitors on phones.',
      '30+ year career and deep Hill County roots are not front and center.',
      'Farm and ranch listings are not treated differently from residential — they need a separate experience.',
      'Contact form is hard to find. Heavy page load due to outdated framework.',
    ],
    build: [
      ['Homepage', '"Hill County\'s Farm & Ranch Expert Since 1987." Strong rural Texas photography hero'],
      ['Farm & Ranch Section', 'Acreage listings, aerial photos, soil/water info, rural buyer guide'],
      ['Residential Section', 'Clean separate section for homes in Hillsboro, Abbott, and surroundings'],
      ['About Jana', 'Full bio, Baylor connection, born and raised Hill County story, 1987 career start'],
      ['Coverage Map', 'Visual map: Hill County, McLennan County, Central Texas service area'],
      ['Testimonials', 'Existing reviews imported + new client stories featured'],
      ['Land Market Blog', '"Hill County Land Market" updates — major SEO boost for farm/ranch searches'],
      ['Contact', 'Simple, prominent, direct to Jana with fast response CTA'],
    ],
    why: '"A buyer looking for 100 acres of Hill County land is a completely different person than someone buying a house in Hillsboro — and your site treats them the same. With 30+ years in this market, you are the expert. Your website should make that unmistakably clear the second someone lands on it."',
  },
  {
    filename: 'Proposal - WestLand Realty Group.pdf',
    business: 'WestLand Realty Group',
    tagline: 'Premium Website Upgrade Proposal',
    contact: 'katie@westlandrg.com  |  media@westlandrg.com  |  (254) 826-8008',
    address: '101 S Main St, West, TX 76691  &  109 S Waco St, Hillsboro, TX 76645',
    investment: '$6,000 – $10,000',
    problem: [
      "Best site in the local market — but that's not the right benchmark.",
      'Property search is basic — no map view, no advanced filters.',
      'No virtual tours on listings. Mobile interactive elements have performance issues.',
      'No client login portal for buyers/sellers to track their transaction.',
      'Blog exists but is not targeted enough for Hill County SEO dominance.',
    ],
    build: [
      ['Homepage', 'Elevated design, stronger hero, instant home value CTA, featured agents prominently'],
      ['Advanced Property Search', 'Map-based search with filters: acreage, school district, price, waterfront'],
      ['Virtual Tours', 'Matterport or video embed on every listing page'],
      ['Client Portal', 'Login for active clients: documents, transaction timeline, status updates'],
      ['Neighborhood Guides', '15+ areas with school data, market stats, and lifestyle info per community'],
      ['Agent Profiles', 'Video intro per agent, full bio, production stats, specialties'],
      ['FAQ Section', 'Common buyer and seller questions — builds trust and SEO value'],
      ['SEO Blog Strategy', '"Homes for sale in West TX," "Hill County real estate market 2026," etc.'],
      ['Full Mobile Overhaul', 'Responsive audit and rebuild of all interactive elements'],
    ],
    why: '"Your site is the best in this market — but \'best in Hillsboro\' isn\'t where you should stop. Regional firms in Waco and beyond are your real competition. A premium rebuild puts you in a different league: map-based search, virtual tours, a client portal, and SEO content that pulls buyers from across Central Texas before they ever call a competitor."',
  },
];

function drawProposal(proposal) {
  const doc = new PDFDocument({
    size: 'letter',
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  const outputPath = path.join(OUTPUT_DIR, proposal.filename);
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const W = 612;
  const H = 792;
  const PAD = 40;

  // ── DARK HEADER ──────────────────────────────────────────────
  doc.rect(0, 0, W, 110).fill(DARK_BG);

  // Accent bar
  doc.rect(0, 108, W, 4).fill(ACCENT);

  // Business name
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(22)
    .text(proposal.business, PAD, 22, { width: W - PAD * 2 });

  // Tagline
  doc.fillColor(ACCENT).font('Helvetica').fontSize(11)
    .text(proposal.tagline.toUpperCase(), PAD, 50, { characterSpacing: 1.5 });

  // Contact line
  doc.fillColor('#AAAACC').font('Helvetica').fontSize(9)
    .text(proposal.contact, PAD, 70);
  doc.text(proposal.address, PAD, 83);

  // ── INVESTMENT BADGE (top right) ─────────────────────────────
  const badgeX = W - 160;
  doc.rect(badgeX, 18, 130, 48).fill(ACCENT).stroke();
  doc.fillColor(WHITE).font('Helvetica').fontSize(8)
    .text('INVESTMENT RANGE', badgeX, 24, { width: 130, align: 'center', characterSpacing: 1 });
  doc.font('Helvetica-Bold').fontSize(14)
    .text(proposal.investment, badgeX, 38, { width: 130, align: 'center' });

  let y = 126;

  // ── THE PROBLEM ───────────────────────────────────────────────
  // Section label
  doc.rect(PAD, y, 4, 16).fill(ACCENT);
  doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(12)
    .text('THE PROBLEM', PAD + 10, y + 1);
  y += 24;

  // Problem box
  const problemLines = proposal.problem;
  const problemBoxH = problemLines.length * 18 + 16;
  doc.rect(PAD, y, W - PAD * 2, problemBoxH).fill(PROBLEM_BG).stroke(SECTION_DIVIDER);

  let py = y + 10;
  problemLines.forEach(line => {
    doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(10).text('▸', PAD + 10, py);
    doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(10)
      .text(line, PAD + 24, py, { width: W - PAD * 2 - 30 });
    py += 18;
  });
  y += problemBoxH + 16;

  // ── WHAT WE BUILD ─────────────────────────────────────────────
  doc.rect(PAD, y, 4, 16).fill('#3A7BD5');
  doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(12)
    .text('WHAT WE BUILD', PAD + 10, y + 1);
  y += 24;

  // Build items — two columns
  const buildItems = proposal.build;
  const colW = (W - PAD * 2 - 12) / 2;
  const half = Math.ceil(buildItems.length / 2);

  const buildBoxH = half * 28 + 12;
  doc.rect(PAD, y, W - PAD * 2, buildBoxH).fill(BUILD_BG).stroke(SECTION_DIVIDER);

  buildItems.forEach((item, i) => {
    const col = i < half ? 0 : 1;
    const row = i < half ? i : i - half;
    const bx = PAD + 10 + col * (colW + 12);
    const by = y + 8 + row * 28;

    doc.rect(bx, by, 3, 18).fill('#3A7BD5');
    doc.fillColor('#3A7BD5').font('Helvetica-Bold').fontSize(9)
      .text(item[0].toUpperCase(), bx + 8, by + 1, { width: colW - 12 });
    doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(8.5)
      .text(item[1], bx + 8, by + 13, { width: colW - 14 });
  });

  y += buildBoxH + 16;

  // ── WHY IT MATTERS ────────────────────────────────────────────
  doc.rect(PAD, y, 4, 16).fill('#27AE60');
  doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(12)
    .text('WHY IT MATTERS', PAD + 10, y + 1);
  y += 24;

  const whyBoxH = 68;
  doc.rect(PAD, y, W - PAD * 2, whyBoxH).fill(WHY_BG).stroke(SECTION_DIVIDER);

  doc.fillColor('#27AE60').font('Helvetica-BoldOblique').fontSize(18)
    .text('\u201C', PAD + 10, y + 6);
  doc.fillColor(TEXT_DARK).font('Helvetica-Oblique').fontSize(9.5)
    .text(proposal.why.replace(/^"|"$/g, ''), PAD + 26, y + 10, {
      width: W - PAD * 2 - 36,
      lineGap: 2,
    });
  y += whyBoxH + 14;

  // ── PORTFOLIO / PROOF ──────────────────────────────────────────
  doc.rect(PAD, y, W - PAD * 2, 34).fill('#F9F9F9').stroke(SECTION_DIVIDER);
  doc.fillColor(MID_GRAY).font('Helvetica-Bold').fontSize(8)
    .text('RECENT WORK', PAD + 12, y + 8, { characterSpacing: 1 });
  doc.fillColor('#3A7BD5').font('Helvetica').fontSize(9)
    .text('hillsborotireservice.com  —  Hillsboro Tire & Service  |  Full website build, custom domain, Netlify deploy', PAD + 12, y + 20, { width: W - PAD * 2 - 24 });
  y += 34;

  // ── FOOTER ────────────────────────────────────────────────────
  const footerY = H - 44;
  doc.rect(0, footerY, W, 44).fill(DARK_BG);
  doc.rect(0, footerY, W, 2).fill(ACCENT);

  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(10)
    .text(GAVIN.company, PAD, footerY + 10);
  doc.fillColor('#AAAACC').font('Helvetica').fontSize(9)
    .text(`${GAVIN.phone}  |  ${GAVIN.email}`, PAD, footerY + 24);

  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(9)
    .text('Ready to get started? Call or email anytime.', W - 240, footerY + 17, { width: 200, align: 'right' });

  doc.end();

  return new Promise(resolve => stream.on('finish', resolve));
}

(async () => {
  console.log('Generating proposals...');
  for (const p of proposals) {
    await drawProposal(p);
    console.log(`  Created: ${p.filename}`);
  }
  console.log('All 6 proposals generated successfully.');
})();
