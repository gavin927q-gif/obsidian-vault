const { PDFParse } = require('./node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs');
const fs = require('fs');

const files = [
  'Proposal - Cindy Cole Realtor.pdf',
  'Proposal - Herring Properties.pdf',
  'Proposal - Jana Nors Real Estate.pdf',
  'Proposal - ORB Investments TX.pdf',
  'Proposal - Swift Realty.pdf',
  'Proposal - WestLand Realty Group.pdf'
];

(async () => {
  for (const f of files) {
    const buf = fs.readFileSync(f);
    try {
      const parser = new PDFParse();
      const data = await parser.parse(buf);
      console.log('=== ' + f + ' ===');
      console.log(JSON.stringify(data.text || data));
      console.log('---END---');
    } catch(e) {
      console.log('ERROR on ' + f + ': ' + e.message);
      console.log(e.stack);
    }
  }
})();
