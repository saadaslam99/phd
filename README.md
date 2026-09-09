# Iqra University Digital Master's & PhD Forms & PDF Generation System

An official, production-ready digital conversion and precision PDF generation system for **Iqra University** postgraduate academic forms.

---

## Authoritative Principle & Philosophy

**The original official Iqra University Word documents (`.doc` and `.docx`) are the source of truth.**

This application converts paper/Word forms into interactive web interfaces while preserving the exact layout, margins, typography (Times New Roman / Calibri), table widths, column structures, checkboxes, official logos, and signature blocks in the generated PDF. Single-page forms strictly stay single-page documents.

---

## All 15 Officially Supported Forms

The system provides complete digital forms and authoritative print templates for all 15 university postgraduate documents, categorized by academic lifecycle:

### Stage 1: Admission & Enrolment
1. **Form PhD-A** (`phd-a`): *Recommendations for Admission to the PhD Program* (Department and Supervisor's Recommendations)
2. **Form PhD-B** (`phd-b`): *Provisional Admission to the PhD Program* (Faculty selection, Odoo ID, Admission & DAASR approvals)

### Stage 2: GSEC Formulation & Progress
3. **Form PhD-1** (`phd-01`): *Formulation of Graduate Student Evaluation Committee (GSEC)* (Supervisor, Co-Supervisor, 2 Experts, Doctoral Committee signoff)
4. **Form PhD-2** (`phd-02`): *Petition for Change in Research Topic and/or GSEC* (Parallel Old vs New topic columns, Delete vs Add committee member tables)
5. **Form PhD-3** (`phd-03`): *Minutes of GSEC Meeting* (Campus checkboxes, 5-row Agenda Points vs Decisions table, Quorum notes)

### Stage 3: Comprehensive Examination
6. **Comprehensive Exam Supervisor Approval** (`phd-comp-sup`): *PHD Comprehensive Examination — Supervisor Approval Form* (7-course Coursework Record table, candidate declaration, supervisor recommendation)
7. **Form PhD-4** (`phd-04`): *Report of Comprehensive Examination* (1st and 2nd attempt blocks, Written/Oral/Total marks, Pass/Fail, HoD/Dean countersign)

### Stage 4: Thesis Proposal Defense
8. **PhD Proposal Defense Schedule** (`phd-proposal`): *Schedule for PhD Proposal Defense* (Candidate info, Supervisor & Expert availability certificate, Department Use section)
9. **Form PhD-5 Internal** (`phd-5-internal`): *Schedule for PhD Proposal Defense (Internal Used Only variant)*
10. **Form PhD-5a** (`phd-05a`): *Proposal Defense Evaluation Report* (6-member Qualified/Not Qualified table, final pass/fail result, second chance conditions)
11. **Form PhD-5b** (`phd-05b`): *PhD Thesis Proposal Defense Certificate* (Formal certification paragraph, 7 official signoffs)

### Stage 5: Dissertation Evaluation & Final Defense
12. **Form PhD-6a** (`phd-06a`): *Internal Evaluation Form for PhD Dissertation* (Title, Evaluator details, report attachment confirmation, HOD acknowledgment)
13. **Form PhD-6b** (`phd-06b`): *Pre-Defense Form for PhD Dissertation* (Date/Venue/Time, 3-member Evaluator panel, HOD acknowledgment)
14. **Form PhD-7 & 7a–7i** (`phd-07`): *Thesis Evaluation Report* (Department Summary sheet + 9 individual TEC response sheets for Supervisor, Co-Supervisor, Experts, Internal, National, and Foreign evaluators)
15. **Form PhD-8** (`phd-08`): *Report of Doctoral Thesis Defense* (Doctor of Philosophy Degree recommendation, 9 TEC committee signoffs, foreign expert video-conference note)

---

## System Architecture

```text
phd-forms-system/
├── public/
│   └── assets/
│       └── iqra-logo.png             # Official high-resolution Iqra University logo
├── server/
│   └── pdf-server.js                 # Express + Puppeteer Headless Chromium PDF API
├── src/
│   ├── index.html                    # Single-page academic portal
│   ├── main.js                       # State orchestrator & live preview renderer
│   ├── styles/
│   │   ├── app.css                   # Administrative portal UI
│   │   └── print-base.css            # Strict print stylesheet (@page, page budget)
│   ├── core/
│   │   ├── registry.js               # Central catalog of all 15 forms
│   │   ├── validator.js              # Schema validation & length constraints
│   │   ├── pdf-client.js             # Dual PDF trigger (Puppeteer + browser print)
│   │   └── text-guard.js             # Long text scaling & single-page guard
│   └── forms/
│       ├── form-definitions-part1.js # Forms PhD-A, PhD-B, PhD-1
│       ├── form-definitions-part2.js # Forms PhD-2, PhD-3, Comp Sup, PhD-4
│       ├── form-definitions-part3.js # Proposal Schedule, PhD-5 Int, PhD-5a, PhD-5b
│       ├── form-definitions-part4.js # Forms PhD-6a, PhD-6b, PhD-8
│       ├── form-definitions-part5.js # Form PhD-7 & 7a-7i
│       └── index.js                  # Unified forms aggregator
├── package.json
└── vite.config.js
```

---

## Installation & Setup

### Prerequisites
- **Node.js**: v18+ (tested with Node v25)
- **NPM**: v9+ (tested with NPM v11)
- **Google Chrome** or **Microsoft Edge** (automatically detected by the PDF generation backend)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Launch the System

**Option A: Run Frontend (Vite Dev Server)**
```bash
npm run dev
```
Access the application at `http://localhost:5173/`.

**Option B: Run PDF Generation Server**
```bash
npm run server
```
PDF service starts on `http://localhost:3000/`.

**Option C: Run Full Production-Ready Environment**
Start both servers concurrently or run each in separate terminals:
```bash
# Terminal 1:
node server/pdf-server.js

# Terminal 2:
npx vite --port 5173
```

---

## How PDF Generation Works

The system implements a **dual-pipeline PDF generation architecture**:

1. **Headless Chromium Pipeline (`POST /api/generate-pdf`)**:
   - The digital form data is compiled into a standalone, self-contained HTML page using the dedicated form print template.
   - Puppeteer launches the local Chromium engine (`chrome.exe` / `msedge.exe`).
   - Content is rendered with `preferCSSPageSize: true`, `printBackground: true`, and zero margins, letting the CSS `@page` rule dictate exact official page boundaries.
   - Generates a vector PDF that downloads immediately.

2. **Native Direct Print Engine (`window.print()`)**:
   - When the user clicks `🖨️ Direct Print / PDF`, the portal uses `@media print` rules in `print-base.css`.
   - All navigation sidebars, headers, and form input controls are hidden, leaving only the A4 document page.
   - The native operating system / browser print dialog opens, allowing direct printing or saving as PDF without server overhead.

---

## How to Add a New Form

Adding an additional form (such as Master's MS forms) is completely modular:

1. **Add metadata to `src/core/registry.js`**:
   ```javascript
   {
     id: 'ms-01',
     code: 'Form MS-1',
     title: 'Master Thesis Supervisor Allocation',
     stage: 'admission',
     pageCount: 1,
     pageSize: 'A4',
     margins: '12mm',
     fileSource: 'MS-Form-1.docx'
   }
   ```
2. **Define fields, default values, and HTML template in `src/forms/`**:
   ```javascript
   export const MS_FORM_1 = {
     id: 'ms-01',
     defaults: { studentName: '', ... },
     fields: [ { name: 'studentName', label: 'Student Name', type: 'text' }, ... ],
     renderTemplate: (data) => `
       <div class="doc-page" style="padding: 12mm 18mm;">
         ...
       </div>
     `
   };
   ```
3. **Register in `src/forms/index.js`**:
   Import and add the new form object to `ALL_FORMS`. The system will automatically display it in the navigation sidebar, generate digital input controls, and enable live preview and PDF generation.

---

## How to Update an Existing Form

- **To update labels or input validation**: Edit the `fields` array for the target form in `src/forms/form-definitions-*.js`.
- **To update official text, spacing, or table dimensions**: Edit the `renderTemplate` function in the respective form definition file.
- **To adjust print margins**: Update the inline padding or `@page` definition in `src/styles/print-base.css`.

---

## Visual QA Checklist

For every official form, perform visual comparison against the original Word document:
- [x] Official Iqra University logo present and aligned top-left.
- [x] Correct Form ID (e.g. `Form PhD-1`, `Form PhD-5a`) top-right with `DOCTORAL PROGRAM OF STUDY` and `(Must be type written)`.
- [x] Main heading matching official text, uppercase styling, and underline format.
- [x] All underline fillable fields expand dynamically without destroying table structure.
- [x] Exact table rows and columns (e.g. 7 coursework rows in Comp Exam, 5 agenda rows in PhD-3).
- [x] Committee member titles, designation lines, and signature placeholders preserved.
- [x] Single-page document budget strictly enforced (`1 Page Official` badge).
- [x] Official distribution notice present in footer.
