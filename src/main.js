import { FORM_REGISTRY, FORM_STAGES } from './core/registry.js';
import { ALL_FORMS, getFormById } from './forms/index.js';
import { applyTextGuard } from './core/text-guard.js';
import { downloadServerPDF, triggerBrowserPrint, exportFormDataAsJson } from './core/pdf-client.js';

// Application State
let activeFormId = 'phd-01'; // Default initial form: Form PhD-1
let activeFormData = {};
let currentZoom = window.innerWidth < 1024 ? 'auto' : 0.90;
let activeViewMode = 'form'; // 'form' | 'preview'

// DOM Elements
const sidebarNav = document.getElementById('sidebar-nav-container');
const searchInput = document.getElementById('form-search-input');
const formInputsContainer = document.getElementById('form-inputs-container');
const previewContainer = document.getElementById('preview-container');
const previewViewport = document.getElementById('preview-viewport');
const activeFormTitle = document.getElementById('active-form-title');
const activeFormCode = document.getElementById('active-form-code');
const pageBudgetBadge = document.getElementById('page-budget-badge');
const previewStatus = document.getElementById('preview-status');
const zoomSelect = document.getElementById('zoom-select');
const btnFitScreen = document.getElementById('btn-fit-screen');

// Desktop Action Buttons
const btnSampleData = document.getElementById('btn-sample-data');
const btnResetForm = document.getElementById('btn-reset-form');
const btnExportJson = document.getElementById('btn-export-json');
const btnBrowserPrint = document.getElementById('btn-browser-print');
const btnServerPdf = document.getElementById('btn-server-pdf');

// Responsive & Mobile Navigation Elements
const appSidebar = document.getElementById('app-sidebar');
const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
const btnCloseSidebar = document.getElementById('btn-close-sidebar');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');
const workspacePanels = document.getElementById('workspace-panels');

// Responsive Tabs
const tabBtnForm = document.getElementById('tab-btn-form');
const tabBtnPreview = document.getElementById('tab-btn-preview');
const btnQuickPreviewSwitch = document.getElementById('btn-quick-preview-switch');

// Mobile Bottom Nav
const mobileNavForms = document.getElementById('mobile-nav-forms');
const mobileNavEdit = document.getElementById('mobile-nav-edit');
const mobileNavPreview = document.getElementById('mobile-nav-preview');
const mobileNavDownload = document.getElementById('mobile-nav-download');

// Mobile Actions Sheet
const btnMobileMore = document.getElementById('btn-mobile-more');
const mobileActionsMenu = document.getElementById('mobile-actions-menu');
const btnCloseMobileMenu = document.getElementById('btn-close-mobile-menu');
const menuItemSample = document.getElementById('menu-item-sample');
const menuItemReset = document.getElementById('menu-item-reset');
const menuItemExport = document.getElementById('menu-item-export');
const menuItemPrint = document.getElementById('menu-item-print');

// Initialize Application
function initApp() {
  renderSidebar();
  setupEventListeners();
  
  // Set initial view mode based on screen width
  if (window.innerWidth < 1024) {
    if (zoomSelect) zoomSelect.value = 'auto';
    currentZoom = 'auto';
    setViewMode('form');
  } else {
    if (zoomSelect) zoomSelect.value = '0.90';
    currentZoom = 0.90;
    setViewMode('form');
  }

  loadForm(activeFormId);
}

// Sidebar Drawer Control
function openSidebar() {
  appSidebar?.classList.add('open');
  sidebarBackdrop?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  appSidebar?.classList.remove('open');
  sidebarBackdrop?.classList.remove('active');
  document.body.style.overflow = '';
}

// Responsive View Mode Switcher ('form' or 'preview')
function setViewMode(mode) {
  activeViewMode = mode;
  if (workspacePanels) {
    workspacePanels.className = `workspace-panels view-${mode}`;
  }

  // Update tabs
  tabBtnForm?.classList.toggle('active', mode === 'form');
  tabBtnPreview?.classList.toggle('active', mode === 'preview');

  // Update bottom bar
  mobileNavEdit?.classList.toggle('active', mode === 'form');
  mobileNavPreview?.classList.toggle('active', mode === 'preview');

  // If on mobile or tablet, default to auto-fit zoom so the document fits the screen width perfectly
  if (window.innerWidth < 1024 && mode === 'preview') {
    if (zoomSelect) zoomSelect.value = 'auto';
    currentZoom = 'auto';
  }

  // Recalculate zoom on next animation frame once panel is visible
  requestAnimationFrame(() => {
    applyCurrentZoom();
  });
}

// Auto-Fit Zoom Calculation for Perfect Responsive Document Viewing
function applyCurrentZoom() {
  if (!previewContainer || !previewViewport) return;

  if (currentZoom === 'auto') {
    const isMobile = window.innerWidth < 768;
    const padding = isMobile ? 24 : 48;
    const availableWidth = previewViewport.clientWidth - padding;
    // Standard A4 page width is 794px
    if (availableWidth > 80) {
      const autoScale = Math.min(Math.max(availableWidth / 794, 0.30), 1.20);
      previewContainer.style.transform = `scale(${autoScale.toFixed(3)})`;
    }
  } else {
    const numericZoom = parseFloat(currentZoom) || 0.90;
    previewContainer.style.transform = `scale(${numericZoom})`;
  }
}

// Render Navigation Sidebar with Grouped Stages
function renderSidebar(filterQuery = '') {
  if (!sidebarNav) return;
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
      btn.addEventListener('click', () => {
        loadForm(f.id);
        // On mobile/tablet, close drawer upon selection
        if (window.innerWidth < 1024) {
          closeSidebar();
        }
      });
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
  if (activeFormTitle) activeFormTitle.textContent = formMeta.title;
  if (activeFormCode) activeFormCode.textContent = `${formMeta.code} — Official IU Form (${formMeta.pageCount} Page${formMeta.pageCount > 1 ? 's' : ''})`;
  if (pageBudgetBadge) pageBudgetBadge.textContent = `${formMeta.pageCount} Page${formMeta.pageCount > 1 ? 's' : ''} Official`;

  // Initialize data with defaults
  activeFormData = { ...(formDef.defaults || {}) };

  // Render Inputs & Preview
  renderFormInputs(formDef.fields);
  updatePreview();
}

// Render Interactive Form Inputs
function renderFormInputs(fields = []) {
  if (!formInputsContainer) return;
  formInputsContainer.innerHTML = '';

  // Group fields by section
  const sections = {};
  fields.forEach(field => {
    const sec = field.section || 'General Information';
    if (!sections[sec]) sections[sec] = [];
    sections[sec].push(field);
  });

  Object.entries(sections).forEach(([secTitle, secFields]) => {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'form-section';

    const titleEl = document.createElement('div');
    titleEl.className = 'form-section-title';
    titleEl.innerHTML = `<span>📋</span> <span>${secTitle}</span>`;
    sectionEl.appendChild(titleEl);

    // Group adjacent half-width fields into responsive form rows
    let currentRow = null;

    secFields.forEach(field => {
      const isHalf = field.width === 'half';

      if (isHalf) {
        if (!currentRow) {
          currentRow = document.createElement('div');
          currentRow.className = 'form-row';
          sectionEl.appendChild(currentRow);
        }
        currentRow.appendChild(createInputField(field));
      } else {
        currentRow = null;
        sectionEl.appendChild(createInputField(field));
      }
    });

    formInputsContainer.appendChild(sectionEl);
  });
}

// Create Individual Input Element
function createInputField(field) {
  const group = document.createElement('div');
  group.className = 'form-group';

  const label = document.createElement('label');
  label.textContent = field.label;
  if (field.required) {
    label.innerHTML += ' <span style="color: var(--danger)">*</span>';
  }
  group.appendChild(label);

  let input;

  if (field.type === 'select') {
    input = document.createElement('select');
    (field.options || []).forEach(opt => {
      const optEl = document.createElement('option');
      optEl.value = opt.value !== undefined ? opt.value : opt;
      optEl.textContent = opt.label !== undefined ? opt.label : opt;
      if (optEl.value === activeFormData[field.name]) {
        optEl.selected = true;
      }
      input.appendChild(optEl);
    });
  } else if (field.type === 'textarea') {
    input = document.createElement('textarea');
    input.rows = field.rows || 3;
    input.value = activeFormData[field.name] || '';
  } else if (field.type === 'checkbox') {
    const checkWrap = document.createElement('div');
    checkWrap.style.display = 'flex';
    checkWrap.style.alignItems = 'center';
    checkWrap.style.gap = '8px';
    checkWrap.style.padding = '8px 0';

    input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = !!activeFormData[field.name];
    input.style.width = '18px';
    input.style.height = '18px';

    const checkLabel = document.createElement('span');
    checkLabel.style.fontSize = '13px';
    checkLabel.textContent = field.description || 'Confirmed';

    checkWrap.appendChild(input);
    checkWrap.appendChild(checkLabel);
    group.appendChild(checkWrap);

    input.addEventListener('change', (e) => {
      activeFormData[field.name] = e.target.checked;
      updatePreview();
    });

    return group;
  } else {
    input = document.createElement('input');
    input.type = field.type || 'text';
    input.value = activeFormData[field.name] || '';
    if (field.placeholder) input.placeholder = field.placeholder;
  }

  input.name = field.name;

  // Real-time bidirectional binding
  input.addEventListener('input', (e) => {
    activeFormData[field.name] = e.target.value;
    updatePreview();
  });

  group.appendChild(input);
  return group;
}

// Update Live Preview Document
function updatePreview() {
  const formDef = getFormById(activeFormId);
  if (!formDef || !previewContainer) return;

  // 1. Render Template HTML with active form data
  const renderedHtml = formDef.renderTemplate(activeFormData);
  previewContainer.innerHTML = renderedHtml;

  // 2. Apply Text-Guard on rendered elements
  try {
    applyTextGuard(previewContainer);
  } catch (err) {
    console.warn('Text guard warning:', err);
  }

  // 3. Ensure responsive zoom is computed
  applyCurrentZoom();

  // 4. Validate Page Budget
  validateBudget();
}

// Check if preview fits exact page budget
function validateBudget() {
  const pages = previewContainer?.querySelectorAll('.doc-page');
  const formMeta = FORM_REGISTRY.find(f => f.id === activeFormId);
  if (!pages || !previewStatus) return;

  const actualPageCount = pages.length;
  const expectedCount = formMeta ? formMeta.pageCount : 1;

  if (actualPageCount === expectedCount) {
    previewStatus.className = 'status-pill success';
    previewStatus.textContent = `✓ Validated (${actualPageCount} Page${actualPageCount > 1 ? 's' : ''})`;
  } else {
    previewStatus.className = 'status-pill warning';
    previewStatus.textContent = `⚠️ Page Budget Alert (${actualPageCount}/${expectedCount} Pages)`;
  }
}

// Unified Handler for PDF Download
async function handleDownloadPdf() {
  const formDef = getFormById(activeFormId);
  if (!formDef) return;

  const buttons = [btnServerPdf, mobileNavDownload].filter(Boolean);
  buttons.forEach(b => {
    b.disabled = true;
    if (b.classList.contains('mobile-nav-item')) {
      b.querySelector('.nav-label').textContent = 'Loading...';
    } else {
      b.innerHTML = `<span>⏳ Generating...</span>`;
    }
  });

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

  try {
    const downloadResult = await downloadServerPDF(activeFormId, fullHtml, activeFormData);

    if (downloadResult && downloadResult.success) {
      showToast(`
        <div style="font-weight: 600; margin-bottom: 4px;">✅ Official PDF Ready!</div>
        <div style="font-size: 11px; opacity: 0.9; margin-bottom: 6px;">Saved: <code>${downloadResult.filename}</code></div>
        ${downloadResult.previewUrl ? `<a href="${downloadResult.previewUrl}" target="_blank" style="color: #60a5fa; text-decoration: underline; font-size: 12px; font-weight: 600;">Open / View in new tab ↗</a>` : ''}
      `);
    } else if (downloadResult && downloadResult.fallbackUsed) {
      showToast(`
        <div style="font-weight: 600; margin-bottom: 4px;">🖨️ Print Dialog Opened</div>
        <div style="font-size: 11px; opacity: 0.9;">Choose "Save as PDF" to save directly to your device.</div>
      `, 6000);
    }
  } catch (err) {
    showToast(`
      <div style="font-weight: 600; margin-bottom: 4px; color: #f87171;">⚠️ Download Notice</div>
      <div style="font-size: 11px;">Opening print engine to save document...</div>
    `);
    triggerBrowserPrint();
  } finally {
    buttons.forEach(b => {
      b.disabled = false;
      if (b.classList.contains('mobile-nav-item')) {
        b.querySelector('.nav-label').textContent = 'Get PDF';
      } else {
        b.innerHTML = `<span>📄 Download Official PDF</span>`;
      }
    });
  }
}

// Sample Data Filler
function fillSampleData() {
  const formDef = getFormById(activeFormId);
  if (formDef && formDef.defaults) {
    activeFormData = { ...formDef.defaults };
    renderFormInputs(formDef.fields);
    updatePreview();
    showToast('✨ Form populated with realistic official sample data');
  }
}

// Reset Form
function resetForm() {
  if (confirm('Clear all entered fields in this form?')) {
    activeFormData = {};
    const formDef = getFormById(activeFormId);
    renderFormInputs(formDef?.fields || []);
    updatePreview();
    showToast('↺ Form fields cleared');
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search
  searchInput?.addEventListener('input', (e) => {
    renderSidebar(e.target.value);
  });

  // Zoom control
  zoomSelect?.addEventListener('change', (e) => {
    currentZoom = e.target.value;
    applyCurrentZoom();
  });

  // Fit screen button
  btnFitScreen?.addEventListener('click', () => {
    if (zoomSelect) zoomSelect.value = 'auto';
    currentZoom = 'auto';
    applyCurrentZoom();
  });

  // Window resize handler for responsive zoom
  window.addEventListener('resize', () => {
    if (currentZoom === 'auto' || window.innerWidth < 1024) {
      applyCurrentZoom();
    }
  });

  // Sidebar Drawer Handlers
  btnToggleSidebar?.addEventListener('click', openSidebar);
  btnCloseSidebar?.addEventListener('click', closeSidebar);
  sidebarBackdrop?.addEventListener('click', closeSidebar);

  // Responsive Workspace Tabs
  tabBtnForm?.addEventListener('click', () => setViewMode('form'));
  tabBtnPreview?.addEventListener('click', () => setViewMode('preview'));
  btnQuickPreviewSwitch?.addEventListener('click', () => setViewMode('preview'));

  // Mobile Bottom Bar Navigation
  mobileNavForms?.addEventListener('click', openSidebar);
  mobileNavEdit?.addEventListener('click', () => setViewMode('form'));
  mobileNavPreview?.addEventListener('click', () => setViewMode('preview'));
  mobileNavDownload?.addEventListener('click', handleDownloadPdf);

  // Desktop Header Action Buttons
  btnSampleData?.addEventListener('click', fillSampleData);
  btnResetForm?.addEventListener('click', resetForm);
  btnExportJson?.addEventListener('click', () => exportFormDataAsJson(activeFormId, activeFormData));
  btnBrowserPrint?.addEventListener('click', triggerBrowserPrint);
  btnServerPdf?.addEventListener('click', handleDownloadPdf);

  // Mobile Actions Sheet
  btnMobileMore?.addEventListener('click', () => {
    mobileActionsMenu?.classList.add('active');
  });

  btnCloseMobileMenu?.addEventListener('click', () => {
    mobileActionsMenu?.classList.remove('active');
  });

  mobileActionsMenu?.addEventListener('click', (e) => {
    if (e.target === mobileActionsMenu) {
      mobileActionsMenu.classList.remove('active');
    }
  });

  menuItemSample?.addEventListener('click', () => {
    fillSampleData();
    mobileActionsMenu?.classList.remove('active');
  });

  menuItemReset?.addEventListener('click', () => {
    resetForm();
    mobileActionsMenu?.classList.remove('active');
  });

  menuItemExport?.addEventListener('click', () => {
    exportFormDataAsJson(activeFormId, activeFormData);
    mobileActionsMenu?.classList.remove('active');
  });

  menuItemPrint?.addEventListener('click', () => {
    triggerBrowserPrint();
    mobileActionsMenu?.classList.remove('active');
  });
}

// User-friendly Toast Notification System
function showToast(htmlMessage, duration = 6000) {
  let toastContainer = document.getElementById('iu-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'iu-toast-container';
    toastContainer.style.cssText = 'position: fixed; bottom: 74px; right: 16px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none; max-width: calc(100% - 32px);';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.style.cssText = 'background: #0f172a; color: #fff; border: 1px solid #10b981; border-radius: 10px; padding: 12px 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.45); font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12.5px; pointer-events: auto; animation: slideIn 0.25s ease-out; min-width: 260px; max-width: 380px;';
  toast.innerHTML = htmlMessage;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

// Start Application
initApp();
