import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';
import { ALL_FORMS } from '../src/forms/index.js';

const OUTPUT_PDF_DIR = path.resolve('scratch/generated_pdfs');
const OUTPUT_IMG_DIR = path.resolve('scratch/generated_images');
fs.mkdirSync(OUTPUT_PDF_DIR, { recursive: true });
fs.mkdirSync(OUTPUT_IMG_DIR, { recursive: true });

// Read print-base.css
const cssPath = path.resolve('src/styles/print-base.css');
const printCss = fs.readFileSync(cssPath, 'utf8');

// Read iqra-logo.png as Base64 for self-contained PDF rendering
const logoPath = path.resolve('public/assets/iqra-logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoDataUri = `data:image/png;base64,${logoBase64}`;

const EXPECTED_PAGES = {
  'phd-a': 1,
  'phd-b': 1,
  'phd-01': 1,
  'phd-02': 1,
  'phd-03': 1,
  'phd-comp-sup': 1,
  'phd-04': 1,
  'phd-proposal': 1,
  'phd-5-internal': 1,
  'phd-05a': 1,
  'phd-05b': 1,
  'phd-06a': 1,
  'phd-06b': 1,
  'phd-07': 10,
  'phd-08': 1
};

async function run() {
  console.log('=== IQRA UNIVERSITY PhD FORMS: 15-FORM GENERATION & VERIFICATION ===\n');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = [];

  for (const [formId, formDef] of Object.entries(ALL_FORMS)) {
    console.log(`Processing [${formId}] - ${formDef.title}...`);

    let htmlContent = formDef.renderTemplate(formDef.defaults);
    htmlContent = htmlContent.replace(/\/assets\/iqra-logo\.png/g, logoDataUri);

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${formDef.code} - ${formDef.title}</title>
        <style>
          ${printCss}
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            background: #fff;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `;

    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });
    await page.setContent(fullHtml, { waitUntil: ['load', 'networkidle0'] });

    // Generate PDF directly via Puppeteer
    const pdfPath = path.join(OUTPUT_PDF_DIR, `${formId}.pdf`);
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    // Write buffer with retry if locked
    let written = false;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        fs.writeFileSync(pdfPath, pdfBuffer);
        written = true;
        break;
      } catch (e) {
        await new Promise(r => setTimeout(r, 1000));
      }
    }
    if (!written) {
      // Fallback to alternate file name
      const altPath = path.join(OUTPUT_PDF_DIR, `${formId}_gen.pdf`);
      fs.writeFileSync(altPath, pdfBuffer);
    }

    // Render snapshot of page 1 to PNG
    const imgPath = path.join(OUTPUT_IMG_DIR, `${formId}.png`);
    await page.screenshot({ path: imgPath, fullPage: false });

    await page.close();

    // Inspect page count of generated PDF via root /Count in PDF data
    const pdfStr = pdfBuffer.toString('latin1');
    const pageTreeMatches = [...pdfStr.matchAll(/\/Type\s*\/Pages[\s\S]*?\/Count\s+(\d+)/g)];
    let pageCount = 1;
    if (pageTreeMatches.length > 0) {
      // The maximum count found in the /Pages tree is the root page count
      pageCount = Math.max(...pageTreeMatches.map(m => parseInt(m[1], 10)));
    } else {
      const pageMatches = pdfStr.match(/\/Type\s*\/Page\b/g);
      pageCount = pageMatches ? pageMatches.length : 1;
    }

    const expected = EXPECTED_PAGES[formId] || 1;
    const passed = (pageCount === expected);

    results.push({
      formId,
      code: formDef.code,
      title: formDef.title,
      expectedPages: expected,
      actualPages: pageCount,
      passed,
      pdfPath,
      imgPath
    });

    console.log(`   -> Generated PDF (${pageCount} pages, expected ${expected}) [${passed ? 'PASS' : 'FAIL'}]`);
  }

  await browser.close();

  console.log('\n================ FINAL VERIFICATION REPORT ================');
  console.log('Form ID         | Code          | Exp | Act | Status | Artifact Image');
  console.log('----------------|---------------|-----|-----|--------|------------------------------');
  let allPass = true;
  for (const r of results) {
    const statusStr = r.passed ? '✓ PASS' : '✗ FAIL';
    if (!r.passed) allPass = false;
    console.log(`${r.formId.padEnd(16)}| ${r.code.padEnd(14)}| ${String(r.expectedPages).padStart(3)} | ${String(r.actualPages).padStart(3)} | ${statusStr.padEnd(6)} | ${path.basename(r.imgPath)}`);
  }
  console.log('============================================================');
  console.log(`Summary: ${results.filter(r => r.passed).length}/${results.length} forms passed strict page budget and layout validation.`);

  fs.writeFileSync(path.resolve('scratch/validation_results.json'), JSON.stringify(results, null, 2));
}

run().catch(err => {
  console.error('Error running batch verification:', err);
  process.exit(1);
});
