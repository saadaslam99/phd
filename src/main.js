import { FORM_REGISTRY, FORM_STAGES } from './core/registry.js';
import { ALL_FORMS, getFormById } from './forms/index.js';
import { applyTextGuard } from './core/text-guard.js';
import { downloadServerPDF, triggerBrowserPrint, exportFormDataAsJson } from './core/pdf-client.js';

// Application State
let activeFormId = 'phd-01'; // Default initial form: Form PhD-1
let activeFormData = {};
let currentZoom = 0.90;

// DOM Elements
const sidebarNav = document.getElementById('sidebar-nav-container');
const searchInput = document.getElementById('form-search-input');
const formInputsContainer = document.getElementById('form-inputs-container');
const previewContainer = document.getElementById('preview-container');
const activeFormTitle = document.getElementById('active-form-title');
const activeFormCode = document.getElementById('active-form-code');
const pageBudgetBadge = document.getElementById('page-budget-badge');
const previewStatus = document.getElementById('preview-status');
const zoomSelect = document.getElementById('zoom-select');
const btnSampleData = document.getElementById('btn-sample-data');
const btnResetForm = document.getElementById('btn-reset-form');
const btnExportJson = document.getElementById('btn-export-json');
const btnBrowserPrint = document.getElementById('btn-browser-print');
const btnServerPdf = document.getElementById('btn-server-pdf');

// Initialize Application
function initApp() {
  renderSidebar();
  setupEventListeners();
  loadForm(activeFormId);
}

// Render Navigation Sidebar with Grouped Stages
function renderSidebar(filterQuery = '') {
  sidebarNav.innerHTML = '';
  const query = filterQuery.toLowerCase().trim();

  Object.values(FORM_STAGES).forEach(stage => {
    const stageForms = FORM_REGISTRY.filter(f => f.stage === stage.id && 
      (f.title.toLowerCase().includes(query) || f.code.toLowerCase().includes(query))
    );

    if (stageForms.length === 0) return;

    const groupEl = document.createElement('div');
    groupEl.className = 'stage-group';

    const titleEl = document.createElement('div');
    titleEl.className = 'stage-title';
    titleEl.textContent = stage.title;
    groupEl.appendChild(titleEl);

    stageForms.forEach(f => {
      const btn = document.createElement('button');
      btn.className = `form-item-btn ${f.id === activeFormId ? 'active' : ''}`;
      btn.innerHTML = `
        <span class="form-badge">${f.code}</span>
        <span style="flex:1;">${f.title}</span>
      `;
      btn.addEventListener('click', () => loadForm(f.id));
      groupEl.appendChild(btn);
    });

    sidebarNav.appendChild(groupEl);
  });
}

// Load Selected Form
function loadForm(formId) {
  activeFormId = formId;
  const formDef = getFormById(formId);
  const formMeta = FORM_REGISTRY.find(f => f.id === formId);

  if (!formDef || !formMeta) {
    console.error(`Form not found: ${formId}`);
    return;
  }

  // Update active state in sidebar
  document.querySelectorAll('.form-item-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.form-item-btn'))
    .find(b => b.querySelector('.form-badge')?.textContent === formMeta.code);
  if (activeBtn) activeBtn.classList.add('active');

  // Update Pane Headers
  activeFormTitle.textContent = formMeta.title;
  activeFormCode.textContent = `${formMeta.code} — Official Master/PhD Form (${formMeta.pageCount} Page${formMeta.pageCount > 1 ? 's' : ''})`;
  pageBudgetBadge.textContent = `${formMeta.pageCount} Page${formMeta.pageCount > 1 ? 's' : ''} Official`;

  // Initialize data with defaults
  activeFormData = { ...(formDef.defaults || {}) };

  // Render Inputs & Preview
  renderFormInputs(formDef.fields);
  updatePreview();
}

// Render Interactive Form Inputs
function renderFormInputs(fields = []) {
  formInputsContainer.innerHTML = '';

  const sectionEl = document.createElement('div');
  sectionEl.className = 'form-section';

  const sectionTitle = document.createElement('div');
  sectionTitle.className = 'form-section-title';
  sectionTitle.textContent = 'Digital Form Entry';
  sectionEl.appendChild(sectionTitle);

  fields.forEach(field => {
    const group = document.createElement('div');
    group.className = 'form-group';

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', `input-${field.name}`);
    group.appendChild(label);

    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
      input.rows = field.rows || 3;
      input.value = activeFormData[field.name] || '';
    } else if (field.type === 'select') {
      input = document.createElement('select');
      (field.options || []).forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt || '-- Select --';
        if (activeFormData[field.name] === opt) option.selected = true;
        input.appendChild(option);
      });
    } else if (field.type === 'checkbox') {
      const checkboxWrap = document.createElement('div');
      checkboxWrap.style.display = 'flex';
      checkboxWrap.style.alignItems = 'center';
      checkboxWrap.style.gap = '8px';

      input = document.createElement('input');
      input.type = 'checkbox';
      input.style.width = 'auto';
      input.checked = Boolean(activeFormData[field.name]);
      checkboxWrap.appendChild(input);

      const checkLabel = document.createElement('span');
      checkLabel.style.fontSize = '12px';
      checkLabel.textContent = 'Mark Verified / Completed';
      checkboxWrap.appendChild(checkLabel);

      group.appendChild(checkboxWrap);
      input.id = `input-${field.name}`;
      input.addEventListener('change', (e) => {
        activeFormData[field.name] = e.target.checked;
        updatePreview();
      });
      sectionEl.appendChild(group);
      return;
    } else {
      input = document.createElement('input');
      input.type = field.type || 'text';
      input.value = activeFormData[field.name] || '';
    }

    input.id = `input-${field.name}`;
    input.addEventListener('input', (e) => {
      activeFormData[field.name] = e.target.value;
      updatePreview();
    });

    group.appendChild(input);
    sectionEl.appendChild(group);
  });

  formInputsContainer.appendChild(sectionEl);
}

// Update Document Preview
function updatePreview() {
  const formDef = getFormById(activeFormId);
  if (!formDef) return;

  const html = formDef.renderTemplate(activeFormData);
  previewContainer.innerHTML = html;
  previewContainer.style.transform = `scale(${currentZoom})`;

  // Apply layout guard and text scaling
  const guard = applyTextGuard(previewContainer);
  if (guard.valid) {
    previewStatus.className = 'status-pill success';
    previewStatus.textContent = '✓ Layout Validated (1 Page)';
  } else {
    previewStatus.className = 'status-pill warning';
    previewStatus.textContent = '⚠️ Layout Overflow Detected';
  }
}

// Event Listeners
function setupEventListeners() {
  searchInput.addEventListener('input', (e) => {
    renderSidebar(e.target.value);
  });

  zoomSelect.addEventListener('change', (e) => {
    currentZoom = parseFloat(e.target.value);
    previewContainer.style.transform = `scale(${currentZoom})`;
  });

  btnSampleData.addEventListener('click', () => {
    const formDef = getFormById(activeFormId);
    if (formDef && formDef.defaults) {
      activeFormData = { ...formDef.defaults };
      renderFormInputs(formDef.fields);
      updatePreview();
    }
  });

  btnResetForm.addEventListener('click', () => {
    if (confirm('Clear all entered fields in this form?')) {
      activeFormData = {};
      const formDef = getFormById(activeFormId);
      renderFormInputs(formDef.fields);
      updatePreview();
    }
  });

  btnExportJson.addEventListener('click', () => {
    exportFormDataAsJson(activeFormId, activeFormData);
  });

  btnBrowserPrint.addEventListener('click', () => {
    triggerBrowserPrint();
  });

  btnServerPdf.addEventListener('click', async () => {
    const formDef = getFormById(activeFormId);
    if (!formDef) return;

    btnServerPdf.disabled = true;
    btnServerPdf.innerHTML = `<span>⏳ Generating...</span>`;

    // Construct full standalone HTML document for print
    const renderedBody = formDef.renderTemplate(activeFormData);
    const fullHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>${activeFormId.toUpperCase()}</title>
        <style>
          @page { size: A4; margin: 0; }
          body { margin: 0; padding: 0; font-family: "Times New Roman", Times, serif; background: #fff; }
          .doc-page { width: 210mm; min-height: 297mm; box-sizing: border-box; position: relative; overflow: hidden; page-break-after: always; }
          .iu-official-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 8px; }
          .iu-logo-img { height: 48px; width: auto; object-fit: contain; }
          .iu-header-text-block { text-align: right; line-height: 1.15; }
          .iu-header-text-block .form-id { font-size: 11pt; font-weight: bold; font-family: Arial, sans-serif; }
          .iu-header-text-block .doc-program { font-size: 8pt; font-weight: bold; letter-spacing: 0.5px; }
          .iu-header-text-block .type-written { font-size: 7.5pt; font-style: italic; color: #222; }
          .doc-main-title { text-align: center; font-size: 12pt; font-weight: bold; margin: 10px 0 14px 0; text-transform: uppercase; line-height: 1.25; }
          .doc-subtitle { text-align: center; font-size: 9.5pt; font-style: italic; margin-top: -8px; margin-bottom: 12px; }
          .doc-table { width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 9.5pt; }
          .doc-table th, .doc-table td { border: 1px solid #000; padding: 4px 6px; vertical-align: middle; line-height: 1.2; }
          .doc-table th { background-color: #f2f2f2; font-weight: bold; text-align: center; }
          .iu-checkbox { display: inline-flex; align-items: center; margin-right: 14px; font-size: 9pt; }
          .iu-box { display: inline-block; width: 11px; height: 11px; border: 1px solid #000; margin-right: 5px; position: relative; vertical-align: middle; background-color: #fff; }
          .iu-box.checked::after { content: "✓"; position: absolute; top: -3px; left: 1px; font-size: 11px; font-weight: bold; color: #000; }
          .field-underline { display: inline-block; border-bottom: 1px solid #000; padding: 0 4px; min-height: 15px; vertical-align: bottom; font-family: Arial, sans-serif; font-size: 9.5pt; color: #002244; font-weight: 500; }
          .signature-row { display: flex; justify-content: space-between; align-items: flex-end; margin: 10px 0; font-size: 9.5pt; }
          .signature-col { width: 48%; line-height: 1.25; }
          .signature-line { border-bottom: 1px solid #000; min-height: 16px; margin-bottom: 2px; }
          .doc-distribution { font-size: 7.5pt; line-height: 1.2; margin-top: 10px; border-top: 0.5px solid #666; padding-top: 4px; }
          .doc-notes { font-size: 7.5pt; line-height: 1.2; margin-top: 6px; }
        </style>
      </head>
      <body>
        ${renderedBody}
      </body>
      </html>
    `;

    const downloadResult = await downloadServerPDF(activeFormId, fullHtml, activeFormData);

    btnServerPdf.disabled = false;
    btnServerPdf.innerHTML = `<span>📄 Download Official PDF</span>`;

    if (downloadResult && downloadResult.success) {
      showToast(`
        <div style="font-weight: 600; margin-bottom: 4px;">✅ Official PDF Generated!</div>
        <div style="font-size: 11px; opacity: 0.9; margin-bottom: 6px;">Saved as: <code>${downloadResult.filename}</code></div>
        ${downloadResult.previewUrl ? `<a href="${downloadResult.previewUrl}" target="_blank" style="color: #60a5fa; text-decoration: underline; font-size: 11px; font-weight: 600;">Open PDF in new tab ↗</a>` : ''}
      `);
    } else if (downloadResult && downloadResult.fallbackUsed) {
      showToast(`
        <div style="font-weight: 600; margin-bottom: 4px;">🖨️ Direct Print Opened</div>
        <div style="font-size: 11px; opacity: 0.9;">Choose "Save as PDF" in your print dialog to download.</div>
      `, 6000);
    }
  });
}

function showToast(htmlMessage, duration = 6000) {
  let toastContainer = document.getElementById('iu-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'iu-toast-container';
    toastContainer.style.cssText = 'position: fixed; bottom: 24px; right: 24px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.style.cssText = 'background: #0f172a; color: #fff; border: 1px solid #10b981; border-radius: 8px; padding: 12px 18px; box-shadow: 0 10px 25px rgba(0,0,0,0.4); font-family: Inter, sans-serif; font-size: 12px; pointer-events: auto; animation: slideIn 0.25s ease-out; min-width: 280px; max-width: 360px;';
  toast.innerHTML = htmlMessage;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease-out';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// Start
initApp();
