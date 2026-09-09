// Form Definitions Part 5: Form PhD-7 (Main Report + Sub-sheets 7a to 7i - 10 Pages Total)

const EVALUATOR_SUB_SHEETS = [
  { code: 'Form PhD-7a', role: 'GSEC Member (Supervisor)', nameField: 'supervisorName', contactField: 'm1Contact', emailField: 'm1Email', desigField: 'm1Desig', q1Field: 'm1Q1', q2Field: 'm1Q2', q3Field: 'm1Q3', dateField: 'm1Date' },
  { code: 'Form PhD-7b', role: 'GSEC Member (Co-Supervisor)', nameField: 'coSupervisorName', contactField: 'm2Contact', emailField: 'm2Email', desigField: 'm2Desig', q1Field: 'm2Q1', q2Field: 'm2Q2', q3Field: 'm2Q3', dateField: 'm2Date' },
  { code: 'Form PhD-7c', role: 'GSEC Member (1st Expert from the field of research)', nameField: 'exp1Name', contactField: 'm3Contact', emailField: 'm3Email', desigField: 'm3Desig', q1Field: 'm3Q1', q2Field: 'm3Q2', q3Field: 'm3Q3', dateField: 'm3Date' },
  { code: 'Form PhD-7d', role: 'GSEC Member (2nd Expert from the field of research)', nameField: 'exp2Name', contactField: 'm4Contact', emailField: 'm4Email', desigField: 'm4Desig', q1Field: 'm4Q1', q2Field: 'm4Q2', q3Field: 'm4Q3', dateField: 'm4Date' },
  { code: 'Form PhD-7e', role: 'IU Internal Evaluator', nameField: 'iuEvalName', contactField: 'm5Contact', emailField: 'm5Email', desigField: 'm5Desig', q1Field: 'm5Q1', q2Field: 'm5Q2', q3Field: 'm5Q3', dateField: 'm5Date' },
  { code: 'Form PhD-7f', role: 'National Evaluator 1', nameField: 'nat1Name', contactField: 'm6Contact', emailField: 'm6Email', desigField: 'm6Desig', q1Field: 'm6Q1', q2Field: 'm6Q2', q3Field: 'm6Q3', dateField: 'm6Date' },
  { code: 'Form PhD-7g', role: 'National Evaluator 2', nameField: 'nat2Name', contactField: 'm7Contact', emailField: 'm7Email', desigField: 'm7Desig', q1Field: 'm7Q1', q2Field: 'm7Q2', q3Field: 'm7Q3', dateField: 'm7Date' },
  { code: 'Form PhD-7h', role: 'External/Foreign Evaluator 1', nameField: 'ext1Name', contactField: 'm8Contact', emailField: 'm8Email', desigField: 'm8Desig', q1Field: 'm8Q1', q2Field: 'm8Q2', q3Field: 'm8Q3', dateField: 'm8Date' },
  { code: 'Form PhD-7i', role: 'External/Foreign Evaluator 2', nameField: 'ext2Name', contactField: 'm9Contact', emailField: 'm9Email', desigField: 'm9Desig', q1Field: 'm9Q1', q2Field: 'm9Q2', q3Field: 'm9Q3', dateField: 'm9Date' }
];

function renderSubSheet(sheet, data) {
  const evalName = data[sheet.nameField] || '';
  const contact = data[sheet.contactField] || '';
  const email = data[sheet.emailField] || '';
  const desig = data[sheet.desigField] || '';
  const q1 = data[sheet.q1Field] || 'Yes';
  const q2 = data[sheet.q2Field] || 'Yes';
  const q3 = data[sheet.q3Field] || '';
  const dt = data[sheet.dateField] || '';

  return `
    <div class="doc-page" style="padding: 10mm 15mm 8mm 15mm;">
      <div class="iu-official-header" style="margin-bottom: 2px;">
        <div class="iu-logo-container">
          <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
        </div>
        <div class="iu-header-text-block">
          <div class="form-id">${sheet.code}</div>
          <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
          <div class="type-written">(Must be type written)</div>
        </div>
      </div>

      <div class="doc-main-title underlined" style="margin: 6px 0 10px 0; font-size: 11pt; text-align: center;">
        TEC MEMBERS’ RESPONSES
      </div>

      <div class="official-section-title" style="margin: 4px 0 14px 0; font-size: 9.5pt; text-align: left;">
        ${sheet.role}
      </div>

      <div style="font-size: 9pt; line-height: 1.45;">
        <div style="font-weight: bold; margin-bottom: 4px;">1. &nbsp;&nbsp; Student’s Details:</div>
        <div style="margin-left: 20px; margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div style="flex: 1.2;">a. &nbsp; Name: <span class="field-underline" style="width: 76%; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1; text-align: right;">b. &nbsp; Reg. No: <span class="field-underline" style="width: 60%; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>
          <div style="margin-bottom: 4px;">
            c. &nbsp; Department: <span class="field-underline" style="width: 82%;">${data.department || ''}</span>
          </div>
          <div style="margin-bottom: 4px;">
            d. &nbsp; Name of Supervisor: <span class="field-underline" style="width: 76%;">${data.supervisorName || ''}</span>
          </div>
          <div style="margin-bottom: 2px;">
            e. &nbsp; Thesis Title: <span class="field-underline auto-scale-text" style="width: 82%; font-weight: bold;">${data.thesisTitle || ''}</span>
          </div>
          <div style="border-bottom: 1px solid #000; height: 16px;"></div>
        </div>

        <div style="font-weight: bold; margin: 12px 0 4px 0;">2. &nbsp;&nbsp; Details of Evaluator:</div>
        <div style="margin-left: 20px; margin-bottom: 12px;">
          <div style="margin-bottom: 4px;">
            a. &nbsp; Name: <span class="field-underline" style="width: 88%; font-weight: bold;">${evalName}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div style="flex: 1;">b. &nbsp; Contact No: <span class="field-underline" style="width: 65%;">${contact}</span></div>
            <div style="flex: 1.2; text-align: right;">c. &nbsp; Email: <span class="field-underline" style="width: 75%;">${email}</span></div>
          </div>
          <div>
            d. &nbsp; Current Designation: <span class="field-underline" style="width: 74%;">${desig}</span>
          </div>
        </div>

        <div style="font-weight: bold; margin: 12px 0 6px 0;">
          3. &nbsp;&nbsp; Please tick the appropriate box while answering the following questions regarding the PhD Thesis:-
        </div>
        <div style="margin-left: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <div>a. &nbsp; Is this a significant contribution to the body of knowledge?</div>
            <div style="display: flex; gap: 24px;">
              <span style="display: flex; align-items: center; gap: 6px;">Yes <span class="iu-box ${q1 === 'Yes' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
              <span style="display: flex; align-items: center; gap: 6px;">No <span class="iu-box ${q1 === 'No' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <div>b. &nbsp; Acceptable in its present form?</div>
            <div style="display: flex; gap: 24px;">
              <span style="display: flex; align-items: center; gap: 6px;">Yes <span class="iu-box ${q2 === 'Yes' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
              <span style="display: flex; align-items: center; gap: 6px;">No <span class="iu-box ${q2 === 'No' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
            </div>
          </div>

          <div>
            <div>c. &nbsp; If No, then please tick ( &nbsp;&nbsp;&nbsp;&nbsp; ) one of the following boxes:-</div>
            <div style="margin-left: 24px; margin-top: 4px; display: flex; flex-direction: column; gap: 4px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="iu-box ${q3 === 'Minor' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span>
                <span>(i) &nbsp; Acceptable with Minor revision (Re-evaluation NOT required)</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="iu-box ${q3 === 'Major' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span>
                <span>(ii) &nbsp; Acceptable after Major revision (Re-evaluation required)</span>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top: 18px;">
          <div style="font-weight: bold;">Attachment:</div>
          <div>Attach comments on the thesis.</div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-top: 24px;">
          <div style="text-align: left; width: 260px;">
            <div>Signature of Evaluator: <span class="field-underline" style="width: 130px;"></span></div>
            <div style="margin-top: 6px;">Date: <span class="field-underline" style="width: 220px;">${dt}</span></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export const FORMS_DATA_PART5 = {
  'phd-07': {
    id: 'phd-07',
    code: 'Form PhD-7',
    title: 'THESIS EVALUATION REPORT (DEPARTMENT SUMMARY & TEC RESPONSES 7a-7i)',
    subtitle: '(To be filled by the Department)',
    stage: 'defense',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      department: 'Computer Science',
      thesisTitle: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      supervisorName: 'Prof. Dr. Muhammad Tariq Khan',
      coSupervisorName: 'Dr. Aisha Siddiqui',
      exp1Name: 'Prof. Dr. Asim Imdad Wagan',
      exp2Name: 'Dr. Farrukh Nadeem',
      iuEvalName: 'Prof. Dr. Zubair Shaikh',
      nat1Name: 'Prof. Dr. Arshad Ali',
      nat2Name: 'Prof. Dr. S. M. Aqil Burney',
      ext1Name: 'Prof. Dr. John D. MacIntyre',
      ext2Name: 'Prof. Dr. Vincenzo Piuri',
      hodDated: '2026-11-25',
      deanDated: '2026-11-28',
      
      // 7a (Supervisor)
      m1Contact: '+92 300 1234567',
      m1Email: 'tariq.khan@iqra.edu.pk',
      m1Desig: 'Professor of Computer Science, Iqra University',
      m1Q1: 'Yes',
      m1Q2: 'No',
      m1Q3: 'Minor',
      m1Date: '2026-11-20',

      // 7b (Co-Supervisor)
      m2Contact: '+92 301 2345678',
      m2Email: 'aisha.siddiqui@iqra.edu.pk',
      m2Desig: 'Associate Professor, Iqra University',
      m2Q1: 'Yes',
      m2Q2: 'Yes',
      m2Q3: '',
      m2Date: '2026-11-20',

      // 7c (1st Expert)
      m3Contact: '+92 321 3456789',
      m3Email: 'asim.wagan@iba.edu.pk',
      m3Desig: 'Professor, IBA Karachi',
      m3Q1: 'Yes',
      m3Q2: 'Yes',
      m3Q3: '',
      m3Date: '2026-11-21',

      // 7d (2nd Expert)
      m4Contact: '+92 333 4567890',
      m4Email: 'farrukh.nadeem@neduet.edu.pk',
      m4Desig: 'Associate Professor, NED University',
      m4Q1: 'Yes',
      m4Q2: 'Yes',
      m4Q3: '',
      m4Date: '2026-11-21',

      // 7e (IU Internal)
      m5Contact: '+92 333 4455667',
      m5Email: 'zubair.shaikh@iqra.edu.pk',
      m5Desig: 'Professor & Dean, Iqra University',
      m5Q1: 'Yes',
      m5Q2: 'Yes',
      m5Q3: '',
      m5Date: '2026-11-22',

      // 7f (National 1)
      m6Contact: '+92 345 5678901',
      m6Email: 'arshad.ali@nust.edu.pk',
      m6Desig: 'Professor, NUST Islamabad',
      m6Q1: 'Yes',
      m6Q2: 'Yes',
      m6Q3: '',
      m6Date: '2026-11-23',

      // 7g (National 2)
      m7Contact: '+92 300 6789012',
      m7Email: 'aqil.burney@uok.edu.pk',
      m7Desig: 'Professor (Rtd), University of Karachi',
      m7Q1: 'Yes',
      m7Q2: 'No',
      m7Q3: 'Minor',
      m7Date: '2026-11-23',

      // 7h (Foreign 1)
      m8Contact: '+44 191 515 2000',
      m8Email: 'john.macintyre@sunderland.ac.uk',
      m8Desig: 'Pro Vice-Chancellor, University of Sunderland (UK)',
      m8Q1: 'Yes',
      m8Q2: 'Yes',
      m8Q3: '',
      m8Date: '2026-11-24',

      // 7i (Foreign 2)
      m9Contact: '+39 02 2399 3400',
      m9Email: 'vincenzo.piuri@unimi.it',
      m9Desig: 'Full Professor, University of Milan (Italy)',
      m9Q1: 'Yes',
      m9Q2: 'Yes',
      m9Q3: '',
      m9Date: '2026-11-24'
    },
    fields: [
      { name: 'studentName', label: 'Student Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'thesisTitle', label: 'Thesis Title', type: 'textarea', rows: 2 },
      { name: 'supervisorName', label: 'Supervisor Name', type: 'text' },
      { name: 'coSupervisorName', label: 'Co-Supervisor Name', type: 'text' },
      { name: 'exp1Name', label: '1st Expert Name', type: 'text' },
      { name: 'exp2Name', label: '2nd Expert Name', type: 'text' },
      { name: 'iuEvalName', label: 'IU Internal Evaluator Name', type: 'text' },
      { name: 'nat1Name', label: 'National Evaluator 1 Name', type: 'text' },
      { name: 'nat2Name', label: 'National Evaluator 2 Name', type: 'text' },
      { name: 'ext1Name', label: 'External Evaluator 1 Name', type: 'text' },
      { name: 'ext2Name', label: 'External Evaluator 2 Name', type: 'text' },
      { name: 'hodDated', label: 'HoD Dated', type: 'date' },
      { name: 'deanDated', label: 'Dean Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <!-- PAGE 1: Form PhD-7 Main Department Summary Report -->
      <div class="doc-page" style="padding: 10mm 15mm 6mm 15mm;">
        <div class="iu-official-header" style="margin-bottom: 2px;">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-7</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title" style="margin: 4px 0 2px 0; font-size: 11pt; font-weight: bold; text-align: center;">
          THESIS EVALUATION REPORT
        </div>
        <div style="text-align: center; font-weight: bold; font-size: 10pt; margin-bottom: 12px;">(To be filled by the Department)</div>

        <div style="font-size: 9.5pt; line-height: 1.45;">
          <p style="margin-bottom: 4px;">
            We hereby recommend that the thesis prepared under our supervision by <span class="field-underline" style="width: 250px; font-weight: bold;">${data.studentName || ''}</span>
          </p>
          <p style="margin-bottom: 2px;">
            <span class="field-underline" style="width: 200px;"></span> Reg. No <span class="field-underline" style="width: 140px; font-weight: bold;">${data.regNo || ''}</span> titled <span class="field-underline auto-scale-text" style="width: 150px; font-weight: bold;">${data.thesisTitle || ''}</span>
          </p>
          <div style="border-bottom: 1px solid #000; height: 16px; margin-bottom: 8px;"></div>
          <p style="margin-bottom: 12px;">
            be accepted as fulfilling in part of Doctor of Philosophy Degree.
          </p>

          <div style="text-align: center; font-weight: bold; font-size: 9.5pt; margin-bottom: 2px;">
            APPROVED BY
          </div>
          <div style="text-align: center; font-weight: bold; font-size: 9.5pt; margin-bottom: 2px;">
            THESIS EVALUATION COMMITTEE (TEC) MEMBERS
          </div>
          <div style="text-align: center; font-size: 8pt; font-style: italic; margin-bottom: 10px;">
            (Each individual response is to be completed separately on the given forms)
          </div>

          <!-- 9 Member lines matching authentic Word layout -->
          <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between;">
              <div>Supervisor: <span class="field-underline" style="width: 320px;">${data.supervisorName || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>Co-Supervisor (if appointed): <span class="field-underline" style="width: 236px;">${data.coSupervisorName || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>1<sup>st</sup> Expert from the field of research: <span class="field-underline" style="width: 200px;">${data.exp1Name || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>2<sup>nd</sup> Expert from the field of research: <span class="field-underline" style="width: 200px;">${data.exp2Name || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>IU Internal Evaluator: <span class="field-underline" style="width: 280px;">${data.iuEvalName || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>National Evaluator 1: <span class="field-underline" style="width: 280px;">${data.nat1Name || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>National Evaluator 2: <span class="field-underline" style="width: 280px;">${data.nat2Name || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>External/Foreign Evaluator 1: <span class="field-underline" style="width: 230px;">${data.ext1Name || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>External/Foreign Evaluator 2: <span class="field-underline" style="width: 230px;">${data.ext2Name || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>
          </div>

          <div class="official-section-title" style="font-size: 9pt; margin: 8px 0 4px 0; text-align: center;">APPROVED BY</div>
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 6px;">
            <div>
              <div>Dated: <span class="field-underline" style="width: 180px;">${data.hodDated || ''}</span></div>
            </div>
            <div style="text-align: center; width: 240px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>HOD/Head of Graduate Programs</div>
            </div>
          </div>

          <div class="official-section-title" style="font-size: 9pt; margin: 8px 0 4px 0; text-align: center;">COUNTERSIGNED BY</div>
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px;">
            <div>
              <div>Dated: <span class="field-underline" style="width: 180px;">${data.deanDated || ''}</span></div>
            </div>
            <div style="text-align: center; width: 240px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>Dean</div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 8px; font-size: 7.5pt;">
            <strong><u>Distribution:</u></strong><br/>
            &bull;&nbsp;&nbsp;1 copy each to Examination Department, Dean, office of DAASR, in student’s dossier, the student and each member of GSEC.
          </div>
        </div>
      </div>

      <!-- PAGES 2 through 10: Evaluator Sub-sheets 7a to 7i -->
      ${EVALUATOR_SUB_SHEETS.map(sheet => renderSubSheet(sheet, data)).join('')}
    `
  }
};
