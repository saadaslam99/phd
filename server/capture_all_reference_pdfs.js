import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const pdfDir = 'C:/Users/Abdul Nafay/.gemini/antigravity-ide/brain/8d5ef2a4-1b28-405c-9793-d5eb1a5eb605/scratch/original_reference_pdfs';
const outImgDir = 'C:/Users/Abdul Nafay/.gemini/antigravity-ide/brain/8d5ef2a4-1b28-405c-9793-d5eb1a5eb605/scratch/original_reference_images';

if (!fs.existsSync(outImgDir)) {
  fs.mkdirSync(outImgDir, { recursive: true });
}

async function renderAll() {
  const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));
  console.log(`Found ${files.length} reference PDFs to screenshot.`);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  // 1200 x 1697 is roughly A4 aspect ratio (1 : 1.414)
  await page.setViewport({ width: 1200, height: 1697, deviceScaleFactor: 1.5 });

  for (const f of files) {
    const pdfPath = path.join(pdfDir, f).replace(/\\/g, '/');
    const outPng = path.join(outImgDir, f.replace('.pdf', '.png')).replace(/\\/g, '/');

    console.log(`Rendering: ${f} ...`);
    try {
      await page.goto(`file:///${pdfPath}`, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 1500));
      await page.screenshot({ path: outPng });
      console.log(`  -> Saved: ${outPng}`);
    } catch (e) {
      console.error(`  -> Failed: ${f}`, e.message);
    }
  }

  await browser.close();
  console.log('All PDF screenshots rendered successfully.');
}

renderAll().catch(console.error);
