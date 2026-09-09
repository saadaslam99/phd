import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const pdfPath = 'C:/Users/Abdul Nafay/.gemini/antigravity-ide/brain/8d5ef2a4-1b28-405c-9793-d5eb1a5eb605/scratch/original_reference_pdfs/PhD-Form-1.pdf';
const outImagePath = 'C:/Users/Abdul Nafay/.gemini/antigravity-ide/brain/8d5ef2a4-1b28-405c-9793-d5eb1a5eb605/scratch/original_reference_pdfs/PhD-Form-1_original.png';

async function renderPdfToImage() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
  await page.goto(`file:///${pdfPath}`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: outImagePath });
  await browser.close();
  console.log(`Rendered PDF screenshot to ${outImagePath}`);
}

renderPdfToImage().catch(console.error);
