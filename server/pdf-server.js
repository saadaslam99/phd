import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer-core';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '20mb' }));

// Detect browser executable
function findChromiumExecutable() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      return c;
    }
  }
  return null;
}

const executablePath = findChromiumExecutable();
console.log(`[PDF Server] Using browser executable: ${executablePath}`);

// PDF Cache in memory (15-minute expiration)
const pdfCache = new Map();
setInterval(() => {
  const now = Date.now();
  for (const [id, item] of pdfCache.entries()) {
    if (now - item.timestamp > 15 * 60 * 1000) {
      pdfCache.delete(id);
    }
  }
}, 5 * 60 * 1000);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    system: 'Iqra University Digital Forms PDF Generator',
    browserPath: executablePath
  });
});

app.get('/api/download-pdf/:id', (req, res) => {
  const item = pdfCache.get(req.params.id);
  if (!item) {
    return res.status(404).send('PDF download expired or not found. Please click generate again.');
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${item.filename}"; filename*="UTF-8''${encodeURIComponent(item.filename)}"`);
  res.setHeader('Content-Length', item.buffer.length);
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  return res.end(item.buffer);
});

app.get('/api/preview-pdf/:id', (req, res) => {
  const item = pdfCache.get(req.params.id);
  if (!item) {
    return res.status(404).send('PDF preview expired or not found.');
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `inline; filename="${item.filename}"`);
  res.setHeader('Content-Length', item.buffer.length);

  return res.end(item.buffer);
});

app.post('/api/generate-pdf', async (req, res) => {
  const { formId = 'document', html } = req.body;

  if (!html) {
    return res.status(400).json({ error: 'No HTML content provided' });
  }

  if (!executablePath) {
    return res.status(500).json({ error: 'No Chromium/Chrome/Edge browser executable detected on system' });
  }

  let browser = null;
  try {
    browser = await puppeteer.launch({
      executablePath,
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--font-render-hinting=none'
      ]
    });

    const page = await browser.newPage();
    
    // Set standard viewport
    await page.setViewport({ width: 1200, height: 1600 });
    
    // Load rendered content
    await page.setContent(html, {
      waitUntil: ['load', 'networkidle0'],
      timeout: 30000
    });

    // Emulate print media for strict CSS @media print
    await page.emulateMediaType('print');

    // Generate high-resolution PDF
    const pdfBuffer = await page.pdf({
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      }
    });

    await browser.close();
    browser = null;

    const sanitizedFormId = String(formId || 'IU_Document').replace(/[^a-zA-Z0-9_-]/g, '_').toUpperCase();
    const downloadFileName = `${sanitizedFormId}_Official_Iqra_University.pdf`;

    // Cache the generated PDF for clean direct HTTP downloading
    const downloadId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    pdfCache.set(downloadId, {
      buffer: pdfBuffer,
      filename: downloadFileName,
      timestamp: Date.now()
    });

    // If client requested JSON metadata with download URL, return structured response
    const acceptHeader = req.headers.accept || '';
    if (acceptHeader.includes('application/json')) {
      return res.json({
        success: true,
        downloadId,
        downloadUrl: `/api/download-pdf/${downloadId}`,
        previewUrl: `/api/preview-pdf/${downloadId}`,
        filename: downloadFileName,
        size: pdfBuffer.length
      });
    }

    // Direct binary stream fallback
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${downloadFileName}"; filename*="UTF-8''${encodeURIComponent(downloadFileName)}"`);
    res.setHeader('Content-Length', pdfBuffer.length);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    return res.end(pdfBuffer);
  } catch (error) {
    console.error('[PDF Server] Error generating PDF:', error);
    if (browser) {
      await browser.close().catch(() => {});
    }
    return res.status(500).json({
      error: 'Failed to generate PDF',
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`[PDF Server] Running on http://localhost:${PORT}`);
});
