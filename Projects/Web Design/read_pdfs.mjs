import * as pdfModule from 'pdf-parse';
const pdfParse = pdfModule.default || pdfModule;
import { readFileSync } from 'fs';

const files = [
  'Proposal - Cindy Cole Realtor.pdf',
  'Proposal - Herring Properties.pdf',
  'Proposal - Jana Nors Real Estate.pdf',
  'Proposal - ORB Investments TX.pdf',
  'Proposal - Swift Realty.pdf',
  'Proposal - WestLand Realty Group.pdf'
];

for (const f of files) {
  const buf = readFileSync(f);
  const data = await pdfParse(buf);
  console.log('=== ' + f + ' ===');
  console.log(data.text);
  console.log('---END---');
}
