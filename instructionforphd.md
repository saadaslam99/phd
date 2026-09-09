# MASTER PROMPT — Iqra University Digital Master’s & PhD Forms System

## Project Objective

Build a production-ready **Digital Forms & PDF Generation System for Iqra University** for its official **Master's and PhD academic/administrative forms**.

The objective is to convert the existing manually filled paper/Word-based forms into **interactive digital web forms**, where authorized users enter information digitally and the system generates a final PDF that visually matches the original official Iqra University Word document.

### MOST IMPORTANT REQUIREMENT

**The original Word/PDF form is the source of truth.**

Do NOT redesign, modernize, simplify, beautify, rearrange, or reinterpret the official form.

The generated PDF must preserve the original form's:

* Page size
* Page count
* Margins
* Header
* Footer
* Iqra University branding
* Logos
* Fonts
* Font sizes
* Font weights
* Text alignment
* Line spacing
* Paragraph spacing
* Tables
* Table borders
* Column widths
* Row heights
* Underlines
* Checkboxes
* Signature areas
* Approval sections
* Dates
* Labels
* Field positions
* Section positions
* Blank spaces
* Overall visual hierarchy
* Relative positioning of every element

The digital version should essentially behave like a **fillable electronic version of the existing official form**, not like a newly designed form.

---

# 1. INPUT DOCUMENTS

The project will be provided with the original Iqra University forms in Word/PDF format.

Forms may include both:

* `.doc`
* `.docx`
* `.pdf`

Some legacy forms are Microsoft Word 97–2003 `.doc` binary files.

Examples include forms such as:

* Supervisor Approval Form
* Form PhD-1
* Form PhD-2
* Form PhD-4
* Form PhD-5a
* Proposal Defense Schedule
* GSEC Minutes
* Comprehensive Exam Report
* Form PhD-A
* Form PhD-B
* Form PhD-3
* Master's forms
* Other official Iqra University postgraduate forms

The system must be designed so additional forms can be added later without rewriting the entire application.

---

# 2. DOCUMENT ANALYSIS BEFORE DEVELOPMENT

Before writing the application, inspect **every supplied original document carefully**.

For every form determine:

1. Page dimensions
2. Number of pages
3. Margins
4. Header structure
5. Footer structure
6. Logo position
7. Font family
8. Font size
9. Font weight
10. Line height
11. Paragraph spacing
12. Table dimensions
13. Table borders
14. Row heights
15. Column widths
16. Existing form fields
17. Existing blank lines
18. Checkbox locations
19. Signature locations
20. Approval sections
21. Date fields
22. Dynamic text fields
23. Sections that may contain long text
24. Sections that must remain on the same page
25. Sections that may expand
26. Sections that must NEVER expand

Create a mapping between:

**Original Form → Digital Form Fields → PDF Output Position**

Do not begin implementing the final UI until the structure of the original forms has been understood.

---

# 3. TECHNOLOGY APPROACH

Use:

### Frontend

* HTML
* CSS
* JavaScript
* Vite

A framework may be used only if genuinely necessary.

### PDF Generation

Use:

**Puppeteer + Headless Chromium**

The preferred pipeline is:

User → Digital Form → HTML Form Representation → Print CSS → Puppeteer → PDF

Do NOT depend on Microsoft Word being installed on the production server.

Do NOT depend on LibreOffice for the primary PDF-generation mechanism.

---

# 4. HTML/CSS AS THE PRINT TEMPLATE

Each official form should have a dedicated HTML/CSS print template.

The HTML template must reproduce the original document as accurately as possible.

Use:

* CSS Grid
* CSS Flexbox
* HTML tables where appropriate
* Fixed dimensions where necessary
* Print-specific CSS
* Absolute positioning only where required to reproduce fixed official layouts

Use:

```css
@page {
    size: A4;
    margin: 12mm;
}
```

However, **do not blindly use these values**.

If the original document uses different margins or dimensions, reproduce the original document's actual layout.

The goal is not to force every form into the same CSS structure.

Each form should preserve its original layout.

---

# 5. EXACT PDF REQUIREMENT

The PDF generated from the digital form must be visually equivalent to the original document.

The system must prevent:

* Unexpected page breaks
* Text overflowing tables
* Fields shifting
* Headers moving
* Signatures moving
* Tables splitting incorrectly
* Content being pushed to another page
* Long text unexpectedly destroying the layout
* Different browser rendering from development to production

Use appropriate CSS such as:

```css
break-inside: avoid;
page-break-inside: avoid;
```

and where appropriate:

```css
break-before
break-after
```

Do not rely on browser auto-layout for critical official form sections.

---

# 6. DYNAMIC FIELD HANDLING

The user should fill a normal digital form.

For example:

* Student Name
* Registration Number
* Program
* Department
* Supervisor
* Co-Supervisor
* Thesis Title
* Date
* Semester
* Faculty
* Examiner
* Committee Members
* Remarks
* Approval
* Signatures
* etc.

The entered data should automatically appear in the correct location in the official PDF template.

The user should NOT have to manually position text.

---

# 7. LONG TEXT PROTECTION

This is extremely important.

Official forms often contain fixed spaces for:

* Thesis title
* Remarks
* Recommendations
* Research topic
* Committee comments
* Justification
* Other academic information

If a user enters a long value, the system must intelligently handle it.

Possible strategies:

1. Wrap text inside the predefined field boundary.
2. Reduce font size within a safe minimum.
3. Expand only sections explicitly designed to expand.
4. Reject/limit input where the original form has a strict fixed-length area.
5. Use controlled overflow handling.

NEVER allow a long value to randomly push the entire form onto another page.

If a field cannot safely contain the input, show a validation message to the user before PDF generation.

---

# 8. SINGLE-PAGE FORM PROTECTION

For forms that are officially designed as one-page forms:

**They must remain one page.**

Implement validation before generating the final PDF.

For example:

```text
Expected Pages: 1
Generated Pages: 2
→ PDF generation fails
→ Show layout overflow warning
→ Ask user to shorten the relevant field
```

Do not silently generate an incorrect two-page document.

For two-page or multi-page forms, preserve the original intended page structure.

---

# 9. OFFICIAL IQRA UNIVERSITY BRANDING

These are official **Iqra University Master's and PhD forms**.

Treat all supplied Iqra University branding as official source material.

Do not replace the university logo.

Do not create an alternative logo.

Do not change university colors unless the original document itself uses them.

Do not modify:

* Iqra University logo
* University name
* Department names
* Official headings
* Form numbering
* Academic terminology
* Official wording

If the logo exists in the supplied document, extract/reuse the original asset at appropriate resolution rather than recreating it from scratch.

---

# 10. REUSABLE UNIVERSITY HEADER

Where multiple forms share the same Iqra University header, create a reusable HTML component/template.

For example:

```text
UniversityHeader
    ├── Logo
    ├── Iqra University
    ├── Campus / Faculty information
    └── Official form heading
```

However, this reusable component must only be used when the original forms actually share the same layout.

If Form A and Form B have slightly different headers, preserve those differences.

**Do not force all forms into one generic header.**

---

# 11. FORM ARCHITECTURE

Create the application so that every form is modular.

Suggested architecture:

```text
forms/
    masters/
        form-name/
            form.html
            form.css
            form.schema.js

    phd/
        phd-1/
            form.html
            form.css
            form.schema.js

        phd-2/
            form.html
            form.css
            form.schema.js

        phd-3/
            form.html
            form.css
            form.schema.js
```

The exact structure can be improved if another architecture is cleaner.

The important requirement is:

**Adding a new official form should not require rewriting the whole application.**

---

# 12. FORM SCHEMA

Each form should define its fields separately.

Example:

```javascript
const formSchema = {
    formId: "PHD-01",

    fields: [
        {
            name: "studentName",
            type: "text",
            required: true
        },
        {
            name: "registrationNumber",
            type: "text",
            required: true
        },
        {
            name: "program",
            type: "text",
            required: true
        },
        {
            name: "date",
            type: "date",
            required: true
        }
    ]
};
```

The schema should control:

* Field name
* Label
* Type
* Required/optional status
* Validation
* Maximum length
* Formatting
* PDF output mapping

---

# 13. DIGITAL FORM UI

The data-entry interface can be cleaner and more user-friendly than the PDF.

The UI does NOT have to visually replicate the old Word document.

For example:

```text
Student Information

Student Name       [_____________________]

Registration No.   [_____________________]

Program            [_____________________]

Supervisor         [_____________________]

Thesis Title       [_____________________]

Date               [__________]
```

The user-friendly web UI is separate from the official print/PDF template.

### Important:

The UI may be modern.

The generated PDF must remain official and unchanged.

---

# 14. LIVE PREVIEW

Where practical, provide a PDF/form preview.

The user should be able to:

1. Open form
2. Enter information
3. Review information
4. Preview output
5. Generate final PDF

The preview should represent the actual print output as closely as possible.

---

# 15. VALIDATION

Implement proper validation.

Examples:

### Required fields

```text
Student Name is required.
```

### Date

Ensure valid dates.

### Registration number

Validate according to the actual university format if such a format is provided.

### Email

Use email validation where required.

### Long text

Prevent text from breaking fixed layouts.

### Checkboxes

Ensure only valid combinations can be selected where the official form requires this.

---

# 16. SIGNATURES

Preserve official signature areas exactly as they appear in the source document.

Depending on the actual project requirements, support:

* Blank signature areas
* Uploaded signature images
* Digital signatures
* Authorized approval workflows

Do NOT assume that a typed name automatically counts as an official signature.

The implementation should follow the university's actual approval requirements.

---

# 17. DOCUMENT VERSION CONTROL

Each form should have a version identifier.

Example:

```text
Form PhD-1
Version: 1.0
```

If Iqra University changes the official form later, the new version should be introduced without destroying the previous template.

Example:

```text
PHD-01
    v1
    v2
```

This ensures historical documents remain reproducible.

---

# 18. DATA/PDF SEPARATION

Separate:

### Form Data

```json
{
    "studentName": "...",
    "registrationNumber": "...",
    "program": "...",
    "supervisor": "..."
}
```

from:

### Presentation

```text
HTML + CSS official PDF template
```

This makes it possible to regenerate the exact same PDF later.

---

# 19. PDF GENERATION

Use Puppeteer.

Conceptually:

```javascript
const browser = await puppeteer.launch();

const page = await browser.newPage();

await page.setContent(renderedHtml, {
    waitUntil: "networkidle0"
});

await page.pdf({
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true
});

await browser.close();
```

Use appropriate settings based on the actual form.

Do not blindly use `format: "A4"` if the source document uses another page size.

---

# 20. PRINT CSS

Create dedicated print CSS.

Example:

```css
@media print {

    body {
        margin: 0;
        padding: 0;
    }

    .no-print {
        display: none !important;
    }

    .form-page {
        break-after: page;
    }

    .avoid-break {
        break-inside: avoid;
    }
}
```

But adjust this according to each original form.

---

# 21. FONT ACCURACY

Font matching is critical.

If the original document uses a specific font:

1. Identify it.
2. Determine whether it is legally/technically available for the application.
3. Use the closest exact font where possible.
4. Bundle the font with the application if licensing permits.
5. Ensure Puppeteer has access to it.

Do not casually substitute Arial, Roboto, or another font.

A different font can change:

* Line wrapping
* Table height
* Page count
* Text position

and therefore break the official layout.

---

# 22. FORM COMPARISON / QA

Create a process for comparing:

**Original Form vs Generated PDF**

For every form perform visual QA.

Compare:

* Header
* Logo
* Text
* Tables
* Borders
* Spacing
* Margins
* Page count
* Field locations
* Signature locations
* Footer
* Overall alignment

Ideally render both documents as images and perform visual comparison.

The generated output should be considered complete only after the differences are reviewed.

---

# 23. DO NOT "FIX" THE ORIGINAL DESIGN

This is one of the most important instructions.

If the original form contains:

* Large blank spaces
* Uneven spacing
* Old-fashioned typography
* Long underlines
* Strange table dimensions
* Non-standard alignment
* Awkward positioning

**KEEP IT.**

Those are characteristics of the official document.

Do not redesign them just because they appear outdated.

The goal is:

> **Digital input + Original official output**

NOT:

> **Modern redesign of the university form**

---

# 24. SECURITY

The application may contain sensitive student/academic information.

Implement appropriate security practices.

Do not expose submitted student information unnecessarily.

Do not log sensitive form data in plaintext unnecessarily.

Validate and sanitize user input.

If the application has authentication/authorization, users should only access forms and records they are authorized to access.

---

# 25. FUTURE BACKEND SUPPORT

Design the frontend/template architecture so it can later connect to a backend.

Potential future backend:

```text
Frontend
    ↓
API
    ↓
Database
    ↓
Form Data
    ↓
PDF Generator
    ↓
PDF Storage
```

Do not tightly couple the PDF template to a specific database.

---

# 26. FORM REGISTRY

Create a central registry of available forms.

Example:

```javascript
const forms = [
    {
        id: "PHD-01",
        name: "Form PhD-1",
        category: "PhD"
    },
    {
        id: "PHD-02",
        name: "Form PhD-2",
        category: "PhD"
    },
    {
        id: "MASTER-01",
        name: "Master's Form",
        category: "Masters"
    }
];
```

This allows the application to display:

```text
Iqra University
Digital Academic Forms

Master's Forms
    • Form ...
    • Form ...

PhD Forms
    • Form PhD-1
    • Form PhD-2
    • Form PhD-3
    • Form PhD-4
    • Form PhD-5a
```

Only include forms that actually exist in the supplied source documents.

---

# 27. USER EXPERIENCE

The basic workflow should be:

```text
Login / Access
      ↓
Select Program
      ↓
Select Form
      ↓
Digital Form
      ↓
Enter Information
      ↓
Validate
      ↓
Review
      ↓
Generate PDF
      ↓
Final Official PDF
```

The process should be simple enough that administrative staff can use it without technical knowledge.

---

# 28. ERROR HANDLING

If PDF generation fails:

Do NOT silently generate a broken PDF.

Show a useful message such as:

```text
Unable to generate the PDF because the entered information
does not fit within the official form layout.

Please review:
- Thesis Title
- Remarks
- Committee Information
```

The exact message should identify the problematic field where possible.

---

# 29. IMPORTANT TECHNICAL PRINCIPLE

Do not attempt to inject dynamic text directly into `.doc` files.

Because legacy `.doc` files are binary Word 97–2003 documents, they should be treated as **reference/source documents**.

Instead:

```text
Original .doc/.docx
        ↓
Analyze layout
        ↓
Recreate layout in HTML/CSS
        ↓
Create dynamic placeholders
        ↓
Populate data
        ↓
Puppeteer
        ↓
Official PDF
```

This provides significantly better control over exact positioning and page layout.

---

# 30. DELIVERABLES

The final project should contain:

### Application

* Digital form interface
* Form selection
* Master's forms
* PhD forms
* Validation
* Preview
* PDF generation

### Templates

* One HTML/CSS template per official form
* Reusable components where appropriate
* Original Iqra University branding

### PDF Engine

* Puppeteer configuration
* Print CSS
* Page-size configuration
* PDF generation service

### Documentation

Include:

```text
README.md
```

containing:

* Installation
* Development setup
* Production setup
* Environment variables
* How to add a new form
* How to update an existing form
* How PDF generation works
* How to perform visual QA

---

# 31. ACCEPTANCE CRITERIA

The project is NOT considered complete merely because the form can generate a PDF.

A form is complete only when:

### Functional

* User can enter all required information.
* Validation works.
* PDF generates successfully.
* PDF contains the entered information.

### Visual

* Original page count is preserved.
* Original layout is preserved.
* Original tables are preserved.
* Original branding is preserved.
* Original headings are preserved.
* Original signature areas are preserved.
* Text does not unexpectedly shift.
* No unwanted second page appears.
* No content is clipped.

### Quality

* PDF looks like the original official Iqra University form.
* Different forms retain their individual layouts.
* Long inputs are handled safely.
* Fonts are consistent.
* Printing is deterministic.

---

# 32. FINAL DEVELOPMENT RULE

Always prioritize these requirements in this order:

1. **Accuracy of official Iqra University document**
2. **Correct PDF layout**
3. **Correct form data**
4. **Data validation**
5. **Reliability**
6. **Security**
7. **Maintainability**
8. **User interface aesthetics**

Never sacrifice official document accuracy to make the UI look prettier.

---

# FINAL INSTRUCTION

You are building a **digital conversion of official Iqra University Master's and PhD forms**.

Treat the original supplied Word/PDF documents as authoritative legal/administrative templates.

**Do not redesign them. Do not simplify them. Do not change their wording. Do not move their elements.**

Create a clean digital data-entry experience while generating a final PDF that is as close as technically possible to the original official document.

Before implementing each form, inspect its original source carefully and reproduce its exact structure.

When uncertain about a visual detail, prefer the original source document over assumptions.

The final result should feel like:

**"The university's existing paper form has simply become digitally fillable."**

Not:

**"Someone redesigned the university form as a modern website."**
