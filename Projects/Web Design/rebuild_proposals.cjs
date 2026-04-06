const PDFDocument = require('./node_modules/pdfkit');
const fs = require('fs');
const path = require('path');

const GAVIN = {
  phone: '(254) 659-0141',
  email: 'hillsborowebdesign@outlook.com',
  location: 'Hillsboro, TX'
};

const BLUE   = '#2563eb';
const DARK   = '#0f172a';
const MID    = '#1e293b';
const LIGHT  = '#f8fafc';
const MUTED  = '#64748b';
const WHITE  = '#ffffff';
const GREEN  = '#16a34a';

const proposals = [
  {
    file: 'Proposal - Cindy Cole Realtor.pdf',
    client: 'Cindy Cole',
    biz: 'Cindy Cole, Realtor',
    site: 'cindycolerealtor.com',
    price: '$2,000–$3,500',
    tier: 'Business Pro',
    phone: '(254) 901-8202',
    contact: 'cindycole.realtor@gmail.com',
    tagline: 'A personal brand site that\'s 100% yours — not a corporate template.',
    problem: 'Your current site is built on the ERA Courtyard corporate template — the same one every ERA agent in Texas uses. Your personal brand is invisible. You cover a huge territory from Hillsboro to Waxahachie to Cleburne to Waco, and nobody can tell that from your website.',
    pitch: 'I can build you a personal brand site that belongs to you — your face, your story, your markets — with neighborhood guides for every city you work in. Something that makes you stand out when a buyer Googles "realtor near Hillsboro TX."',
    features: [
      'Custom homepage with your face and personal tagline front and center',
      'Area guides for Hillsboro, Waxahachie, Cleburne, Burleson, Waco, Alvarado',
      'Full personal bio — credentials (NAR, ABR, SRS), why you do this',
      'Featured listings with great photos',
      'Client testimonials front and center',
      'Buyer / Seller resource pages',
      'Your direct number — not a corporate line'
    ]
  },
  {
    file: 'Proposal - Herring Properties.pdf',
    client: 'Herring Properties',
    biz: 'Herring Properties',
    site: 'herringproperties.com',
    price: '$2,500–$4,000',
    tier: 'Business Pro',
    phone: '(254) 582-0022',
    contact: 'info@herringproperties.com',
    tagline: 'A custom site that actually reflects 20+ years in Hillsboro.',
    problem: 'Your current site is a standard Wix template — slow, hard to update, and terrible for Google rankings. It looks like any other realtor site. No agent profiles, no listings showcase, no "why Herring" story. For a firm that\'s been in Hillsboro as long as you have, you deserve better.',
    pitch: 'I can build you something custom — with your team\'s faces, your listings, your local story — that actually brings people in off a Google search. No more Wix. No more generic templates.',
    features: [
      'Custom homepage with local Hillsboro hero image and your firm\'s story',
      'Team profiles — agent bios with photos, credentials, specialties',
      'Listings showcase with photos',
      'Buyer and Seller guide pages',
      'Client testimonials — local reviews that build trust',
      'Contact page with map, phone, and individual agent emails',
      'Optional blog — Hillsboro market updates for SEO'
    ]
  },
  {
    file: 'Proposal - Jana Nors Real Estate.pdf',
    client: 'Jana Nors',
    biz: 'Jana Nors Real Estate',
    site: 'jananorsrealestate.com',
    price: '$3,000–$5,000',
    tier: 'Growth',
    phone: '',
    contact: 'JanaNorsRE@gmail.com',
    tagline: 'Your 30+ year legacy deserves a site that shows it.',
    problem: 'Your current site has more personality than most around here — the dark and gold look is distinct. But the mobile navigation is a mess, the contact form is hard to find, and your 30+ year career in Hill County isn\'t front and center. Your farm and ranch listings deserve their own experience — a buyer looking for 100 acres isn\'t the same as someone buying a house in Hillsboro.',
    pitch: 'I can rebuild this with a dedicated farm and ranch section, a cleaner mobile experience, and your legacy as the centerpiece. "Hill County\'s Farm & Ranch Expert Since 1987" — that\'s your headline.',
    features: [
      'Hero featuring Jana\'s 30+ year Hill County story',
      'Dedicated Farm & Ranch section — acreage listings, aerial photos, rural buying guide',
      'Separate residential section for Hillsboro and surrounding areas',
      'Full bio — Baylor connection, born and raised Hill County',
      'Visual coverage map — Hill County, McLennan County, Central Texas',
      'Rebuilt mobile navigation — clean, fast, works on every device',
      'Blog option — "Hill County Land Market" updates for SEO'
    ]
  },
  {
    file: 'Proposal - ORB Investments TX.pdf',
    client: 'Amanda Marbut',
    biz: 'ORB Investments TX',
    site: 'orbinvesttx.com',
    price: '$4,000–$7,000',
    tier: 'Premium',
    phone: '',
    contact: 'amanda.marbut@orbinvest.com',
    tagline: 'A full commercial real estate platform — not a one-unit showcase.',
    problem: 'Your current site only shows one unit. If ORB has more properties — or will have more — none of them are visible. There\'s no company history, no About ORB page, no virtual tours, and no leasing inquiry workflow. You\'re sitting on the IH-35 corridor between Dallas and Waco, which is a major selling point — but it\'s nowhere on your site.',
    pitch: 'I can build a full commercial real estate showcase with a property portfolio, your IH-35 location as a major headline, virtual tour support, and a proper leasing inquiry system. Something that makes developers and tenants take you seriously before they ever call.',
    features: [
      'Bold homepage hero: "Prime Commercial Space. Hillsboro, TX. IH-35 Corridor."',
      'Property portfolio — individual pages per unit with gallery, floor plans, specs',
      'Location Advantage page — IH-35, traffic counts, proximity to DFW and Waco',
      'About ORB — company story, team, investment philosophy',
      'Virtual tour embed support per property',
      'Structured leasing inquiry form — company name, space needed, timeline, use type',
      'Tenant testimonials for social proof'
    ]
  },
  {
    file: 'Proposal - Swift Realty.pdf',
    client: 'Ryan',
    biz: 'Swift Realty LLC',
    site: 'swiftrealty.net',
    price: '$3,500–$5,500',
    tier: 'Growth',
    phone: '(972) 898-6981',
    contact: 'ryan@swiftrealty.net',
    tagline: 'Your rehab projects and RV parks deserve their own showcase.',
    problem: 'Your site looks solid but it isn\'t working as hard as it could be. Your rehab projects have no before/after galleries — which is your biggest selling point and it\'s buried in text. Your RV parks (Cedar Ridge and Open Valley) don\'t have their own pages with availability, rates, and booking info. Your 20+ years of experience isn\'t prominently featured.',
    pitch: 'I can build a full rebuild with dedicated RV park landing pages, before/after project galleries, and a proper investor profile. People who visit your site should want to do business with you before they ever pick up the phone.',
    features: [
      'Strong homepage — service blocks for We Buy Houses / RV Parks / Rehab Projects',
      'Before/after gallery for each rehab project — sliders with sale info',
      'Dedicated RV park pages — Cedar Ridge & Open Valley with photos, rates, booking form',
      'About Ryan — 20+ years, local Hillsboro investor, personal story',
      'Client and tenant testimonials',
      'Prominent contact with phone number front and center',
      'Clean mobile experience throughout'
    ]
  },
  {
    file: 'Proposal - WestLand Realty Group.pdf',
    client: 'Katie Miller & Katie Smith',
    biz: 'WestLand Realty Group',
    site: 'westlandrg.com',
    price: '$6,000–$10,000',
    tier: 'Premium',
    phone: '',
    contact: '',
    tagline: '"Best in Hillsboro" isn\'t the bar you should be shooting for.',
    problem: 'Your site is the most developed in this market — neighborhood guides, team profiles, a valuation tool. Genuinely solid. But your property search is basic with no map or advanced filters, there are no virtual tours, no client portal, and your mobile experience has rough spots. You have the foundation — it just needs to be taken to the next level.',
    pitch: 'I do premium rebuilds for firms like yours — $6,000–$10,000 range — that take what you have and turn it into something that competes with regional firms in Waco and beyond. Your site should reflect the caliber of your team.',
    features: [
      'Elevated design — stronger hero, featured agents, instant home value CTA',
      'Map-based property search with advanced filters (acreage, school district, price range)',
      'Virtual tour support — Matterport or video embed per listing',
      'Client portal — login for active buyers/sellers to track documents and timeline',
      'Expanded neighborhood guides — 15+ areas with school data and market stats',
      'Agent profile videos — intro video per agent, full bio, production stats',
      'Full mobile overhaul — responsive audit and rebuild of all interactive elements'
    ]
  }
];

function buildProposal(data) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'LETTER', margin: 0 });
    const chunks = [];
    doc.on('data', c => chunks.push(c));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    const W = 612, H = 792;
    const PAD = 52;

    // ── Header bar ──
    doc.rect(0, 0, W, 90).fill(DARK);
    // Blue accent line
    doc.rect(0, 90, W, 4).fill(BLUE);

    // Logo / brand text
    doc.fontSize(18).font('Helvetica-Bold').fillColor(WHITE)
       .text('HILLSBORO WEB DESIGN', PAD, 30, { lineBreak: false });
    doc.fontSize(9).font('Helvetica').fillColor('#94a3b8')
       .text('Gavin Smith  ·  ' + GAVIN.phone + '  ·  ' + GAVIN.email + '  ·  ' + GAVIN.location, PAD, 54, { lineBreak: false });

    // "WEBSITE PROPOSAL" badge top right
    doc.rect(W - 180, 22, 130, 46).fill(BLUE);
    doc.fontSize(10).font('Helvetica-Bold').fillColor(WHITE)
       .text('WEBSITE', W - 170, 31, { width: 110, align: 'center', lineBreak: false });
    doc.text('PROPOSAL', W - 170, 45, { width: 110, align: 'center', lineBreak: false });

    // ── Client name block ──
    doc.rect(0, 94, W, 80).fill(MID);
    doc.fontSize(22).font('Helvetica-Bold').fillColor(WHITE)
       .text(data.biz, PAD, 110, { lineBreak: false });
    doc.fontSize(11).font('Helvetica').fillColor('#94a3b8')
       .text('Prepared by Gavin Smith · Hillsboro Web Design · ' + new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), PAD, 138, { lineBreak: false });

    // ── Tagline box ──
    doc.rect(PAD, 192, W - PAD * 2, 40).fill(BLUE);
    doc.fontSize(12).font('Helvetica-Bold').fillColor(WHITE)
       .text(data.tagline, PAD + 16, 205, { width: W - PAD * 2 - 32, lineBreak: false });

    let y = 252;

    // ── THE PROBLEM ──
    doc.fontSize(10).font('Helvetica-Bold').fillColor(BLUE)
       .text('THE PROBLEM', PAD, y);
    y += 16;
    // thin rule
    doc.rect(PAD, y, W - PAD * 2, 1).fill(BLUE);
    y += 10;
    doc.fontSize(10).font('Helvetica').fillColor(DARK)
       .text(data.problem, PAD, y, { width: W - PAD * 2, lineBreak: true });
    y = doc.y + 18;

    // ── THE SOLUTION ──
    doc.fontSize(10).font('Helvetica-Bold').fillColor(BLUE)
       .text('THE SOLUTION', PAD, y);
    y += 16;
    doc.rect(PAD, y, W - PAD * 2, 1).fill(BLUE);
    y += 10;
    doc.fontSize(10).font('Helvetica').fillColor(DARK)
       .text(data.pitch, PAD, y, { width: W - PAD * 2, lineBreak: true });
    y = doc.y + 18;

    // ── WHAT I'LL BUILD ──
    doc.fontSize(10).font('Helvetica-Bold').fillColor(BLUE)
       .text('WHAT I\'LL BUILD FOR YOU', PAD, y);
    y += 16;
    doc.rect(PAD, y, W - PAD * 2, 1).fill(BLUE);
    y += 10;

    for (const feat of data.features) {
      // bullet dot
      doc.rect(PAD, y + 3, 5, 5).fill(BLUE);
      doc.fontSize(10).font('Helvetica').fillColor(DARK)
         .text(feat, PAD + 14, y, { width: W - PAD * 2 - 14, lineBreak: true });
      y = doc.y + 6;
    }
    y += 10;

    // ── PRICING BOX ──
    const boxH = 84;
    // Make sure we have space; if not, just continue (single page)
    doc.rect(PAD, y, W - PAD * 2, boxH).fill('#eff6ff');
    doc.rect(PAD, y, 6, boxH).fill(BLUE); // left accent
    doc.rect(PAD, y, W - PAD * 2, 1).fill(BLUE);
    doc.rect(PAD, y + boxH - 1, W - PAD * 2, 1).fill(BLUE);

    doc.fontSize(10).font('Helvetica-Bold').fillColor(BLUE)
       .text(data.tier.toUpperCase() + ' PACKAGE', PAD + 20, y + 14);
    doc.fontSize(22).font('Helvetica-Bold').fillColor(DARK)
       .text(data.price, PAD + 20, y + 28);
    doc.fontSize(9).font('Helvetica').fillColor(MUTED)
       .text('One-time build fee. Site delivered in days, not months.', PAD + 20, y + 56);

    // Hosting note on right side of box
    doc.fontSize(9).font('Helvetica-Bold').fillColor(DARK)
       .text('+ $50/mo', W - 190, y + 20, { width: 130, align: 'right' });
    doc.fontSize(8).font('Helvetica').fillColor(MUTED)
       .text('Hosting · Domain · Unlimited Updates', W - 190, y + 36, { width: 130, align: 'right' });

    y += boxH + 20;

    // ── PROOF / REFERENCE ──
    doc.fontSize(9).font('Helvetica').fillColor(MUTED)
       .text('Proof of work: hillsborotireservice.com — live site built for Hillsboro Tire & Service, Hillsboro TX.', PAD, y, { width: W - PAD * 2 });
    y = doc.y + 6;
    doc.fontSize(9).font('Helvetica-Bold').fillColor(GREEN)
       .text('Free demo built for ' + data.biz + ' before you spend a dollar. You see it first — no commitment.', PAD, y, { width: W - PAD * 2 });

    // ── Footer bar ──
    doc.rect(0, H - 52, W, 52).fill(DARK);
    doc.rect(0, H - 52, W, 2).fill(BLUE);
    doc.fontSize(9).font('Helvetica-Bold').fillColor(WHITE)
       .text('Gavin Smith · Hillsboro Web Design', PAD, H - 37, { lineBreak: false });
    doc.fontSize(9).font('Helvetica').fillColor('#94a3b8')
       .text(GAVIN.phone + '  ·  ' + GAVIN.email + '  ·  ' + GAVIN.location,
             PAD, H - 23, { lineBreak: false });

    // CTA on right side of footer
    doc.fontSize(9).font('Helvetica-Bold').fillColor(BLUE)
       .text('Call or text to schedule a 5-minute demo', W - 280, H - 37, { width: 228, align: 'right', lineBreak: false });

    doc.end();
  });
}

(async () => {
  const dir = path.join(__dirname);
  for (const p of proposals) {
    const buf = await buildProposal(p);
    const outPath = path.join(dir, p.file);
    fs.writeFileSync(outPath, buf);
    console.log('✓ Saved: ' + p.file);
  }
  console.log('\nAll 6 proposals rebuilt with hillsborowebdesign@outlook.com');
})();
