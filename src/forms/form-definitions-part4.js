// Form Definitions Part 4: Dissertation Evaluation & Defense (PhD-6a, PhD-6b, PhD-8)

export const FORMS_DATA_PART4 = {
  // 12. Form PhD-6a: Internal Evaluation Form (Phd-Form-6a.doc)
  'phd-06a': {
    id: 'phd-06a',
    code: 'Form PhD-6a',
    title: 'INTERNAL EVALUATION FORM FOR PHD DISSERTATION',
    subtitle: '',
    stage: 'defense',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      department: 'Computer Science',
      supervisorName: 'Prof. Dr. Muhammad Tariq Khan',
      dissertationTitle: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      evaluatorName: 'Prof. Dr. Zubair Shaikh',
      evaluatorDesignation: 'Professor & Dean, Computer Science',
      evalDate: '2026-10-15',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-10-18'
    },
    fields: [
      { name: 'studentName', label: 'Student Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'supervisorName', label: 'Name of Supervisor', type: 'text' },
      { name: 'dissertationTitle', label: 'Title of Dissertation (as approved in Proposal Defense)', type: 'textarea', rows: 2 },
      { name: 'evaluatorName', label: 'Evaluated by', type: 'text' },
      { name: 'evaluatorDesignation', label: 'Designation', type: 'text' },
      { name: 'evalDate', label: 'Date of Internal Evaluation', type: 'date' },
      { name: 'hodName', label: 'HOD / Head of Graduate Programs Name', type: 'text' },
      { name: 'hodDated', label: 'HOD Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 12mm 18mm 8mm 18mm;">
        <div class="iu-official-header" style="margin-bottom: 4px;">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-6a</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title underlined" style="margin: 8px 0 20px 0; font-size: 12pt; text-align: center;">
          INTERNAL EVALUATION FORM FOR PHD DISSERTATION
        </div>

        <div style="font-size: 9.5pt; line-height: 1.45;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div style="flex: 1.3;">Student Name: <span class="field-underline" style="width: 72%; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Reg. No: <span class="field-underline" style="width: 65%; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div style="flex: 1.1;">Department: <span class="field-underline" style="width: 72%;">${data.department || ''}</span></div>
            <div style="flex: 1.2; text-align: right;">Name of Supervisor: <span class="field-underline" style="width: 60%;">${data.supervisorName || ''}</span></div>
          </div>

          <div style="margin-bottom: 2px;">
            Title of Dissertation (as approved in the Proposal Defense) <span class="field-underline auto-scale-text" style="width: 52%; font-weight: bold;">${data.dissertationTitle || ''}</span>
          </div>
          <div style="border-bottom: 1px solid #000; height: 16px; margin-bottom: 16px;"></div>

          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
            <span class="iu-box checked" style="width: 15px; height: 15px; display: inline-block;"></span>
            <span>The evaluation report is attached with this form.</span>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <div style="flex: 1.2;">Evaluated by: <span class="field-underline" style="width: 72%; font-weight: bold;">${data.evaluatorName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Signature: <span class="field-underline" style="width: 65%;"></span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">
            <div style="flex: 1.2;">Designation: <span class="field-underline" style="width: 74%;">${data.evaluatorDesignation || ''}</span></div>
            <div style="flex: 1; text-align: right;">Date of Internal Evaluation: <span class="field-underline" style="width: 48%;">${data.evalDate || ''}</span></div>
          </div>

          <div class="official-section-title" style="font-size: 9.5pt; margin: 16px 0 10px 0; text-align: center;">ACKNOWLEDGED BY</div>

          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 28px;">
            <div>
              <div>Name: <span class="field-underline" style="width: 200px;">${data.hodName || ''}</span></div>
              <div style="margin-top: 4px;">Dated: <span class="field-underline" style="width: 200px;">${data.hodDated || ''}</span></div>
            </div>
            <div style="text-align: center; width: 240px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>HOD/Head of Graduate Programs</div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 30px; font-size: 8pt;">
            <strong><u>Distribution:</u></strong><br/>
            &bull;&nbsp;&nbsp;1 copy each to Dean, Office of DAASR, in student’s dossier, the student and each member of GSEC.
          </div>
        </div>
      </div>
    `
  },

  // 13. Form PhD-6b: Pre-Defense Form (Phd-Form-6b.doc)
  'phd-06b': {
    id: 'phd-06b',
    code: 'Form PhD-6b',
    title: 'PRE-DEFENSE FORM FOR PHD DISSERTATION',
    subtitle: '',
    stage: 'defense',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      department: 'Computer Science',
      supervisorName: 'Prof. Dr. Muhammad Tariq Khan',
      dissertationTitle: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      preDefenseDate: '2026-11-10',
      venue: 'Faculty Conference Room, Main Campus',
      time: '11:00 AM',
      ev1Name: 'Prof. Dr. Asim Imdad Wagan',
      ev1Desig: 'Professor, IBA Karachi',
      ev2Name: 'Dr. Farrukh Nadeem',
      ev2Desig: 'Associate Professor, NED University',
      ev3Name: 'Dr. Muhammad Tariq Khan',
      ev3Desig: 'Professor, Iqra University',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-11-11'
    },
    fields: [
      { name: 'studentName', label: 'Student Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'supervisorName', label: 'Name of Supervisor', type: 'text' },
      { name: 'dissertationTitle', label: 'Title of Dissertation (as approved in Proposal Defense)', type: 'textarea', rows: 2 },
      { name: 'preDefenseDate', label: 'Date of PhD Pre-Defense', type: 'date' },
      { name: 'venue', label: 'Venue', type: 'text' },
      { name: 'time', label: 'Time', type: 'text' },
      { name: 'ev1Name', label: '1st Evaluator Name', type: 'text' },
      { name: 'ev1Desig', label: '1st Evaluator Designation', type: 'text' },
      { name: 'ev2Name', label: '2nd Evaluator Name', type: 'text' },
      { name: 'ev2Desig', label: '2nd Evaluator Designation', type: 'text' },
      { name: 'ev3Name', label: '3rd Evaluator Name', type: 'text' },
      { name: 'ev3Desig', label: '3rd Evaluator Designation', type: 'text' },
      { name: 'hodName', label: 'HOD Name', type: 'text' },
      { name: 'hodDated', label: 'HOD Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 12mm 18mm 8mm 18mm;">
        <div class="iu-official-header" style="margin-bottom: 4px;">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-6b</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title underlined" style="margin: 8px 0 16px 0; font-size: 12pt; text-align: center;">
          PRE-DEFENSE FORM FOR PHD DISSERTATION
        </div>

        <div style="font-size: 9.5pt; line-height: 1.45;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div style="flex: 1.3;">Student Name: <span class="field-underline" style="width: 72%; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Reg. No: <span class="field-underline" style="width: 65%; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div style="flex: 1.1;">Department: <span class="field-underline" style="width: 72%;">${data.department || ''}</span></div>
            <div style="flex: 1.2; text-align: right;">Name of Supervisor: <span class="field-underline" style="width: 60%;">${data.supervisorName || ''}</span></div>
          </div>

          <div style="margin-bottom: 2px;">
            Title of Dissertation (as approved in the Proposal Defense) <span class="field-underline auto-scale-text" style="width: 52%; font-weight: bold;">${data.dissertationTitle || ''}</span>
          </div>
          <div style="border-bottom: 1px solid #000; height: 16px; margin-bottom: 12px;"></div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 14px;">
            <div>Date of PhD Pre-Defense: <span class="field-underline" style="width: 120px; font-weight: bold;">${data.preDefenseDate || ''}</span></div>
            <div>Venue: <span class="field-underline" style="width: 160px;">${data.venue || ''}</span></div>
            <div>Time: <span class="field-underline" style="width: 100px;">${data.time || ''}</span></div>
          </div>

          <div class="official-section-title" style="font-size: 9.5pt; margin: 12px 0 10px 0; text-align: center;">EVALUATOR PANEL FOR PHD PRE-DEFENSE</div>

          <!-- 1st Evaluator -->
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <div style="flex: 1.2;">1<sup>st</sup> Evaluator Name: <span class="field-underline" style="width: 66%;">${data.ev1Name || ''}</span></div>
              <div style="flex: 1; text-align: right;">Designation: <span class="field-underline" style="width: 68%;">${data.ev1Desig || ''}</span></div>
            </div>
            <div>Signature: <span class="field-underline" style="width: 220px;"></span></div>
          </div>

          <!-- 2nd Evaluator -->
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <div style="flex: 1.2;">2<sup>nd</sup> Evaluator Name: <span class="field-underline" style="width: 66%;">${data.ev2Name || ''}</span></div>
              <div style="flex: 1; text-align: right;">Designation: <span class="field-underline" style="width: 68%;">${data.ev2Desig || ''}</span></div>
            </div>
            <div>Signature: <span class="field-underline" style="width: 220px;"></span></div>
          </div>

          <!-- 3rd Evaluator -->
          <div style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <div style="flex: 1.2;">3<sup>rd</sup> Evaluator Name: <span class="field-underline" style="width: 66%;">${data.ev3Name || ''}</span></div>
              <div style="flex: 1; text-align: right;">Designation: <span class="field-underline" style="width: 68%;">${data.ev3Desig || ''}</span></div>
            </div>
            <div>Signature: <span class="field-underline" style="width: 220px;"></span></div>
          </div>

          <div class="official-section-title" style="font-size: 9.5pt; margin: 14px 0 8px 0; text-align: center;">ACKNOWLEDGED BY</div>

          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px;">
            <div>
              <div>Name: <span class="field-underline" style="width: 200px;">${data.hodName || ''}</span></div>
              <div style="margin-top: 4px;">Dated: <span class="field-underline" style="width: 200px;">${data.hodDated || ''}</span></div>
            </div>
            <div style="text-align: center; width: 240px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>HOD/Head of Graduate Programs</div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 24px; font-size: 8pt;">
            <strong><u>Distribution:</u></strong><br/>
            &bull;&nbsp;&nbsp;1 copy each to Dean, office of DAASR, in student’s dossier, the student and each member of GSEC.
          </div>
        </div>
      </div>
    `
  },

  // 15. Form PhD-8: Report of Doctoral Thesis Defense (PhD-Form-8.doc)
  'phd-08': {
    id: 'phd-08',
    code: 'Form PhD-8',
    title: 'REPORT OF DOCTORAL THESIS DEFENSE',
    subtitle: '',
    stage: 'defense',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      supName: 'Prof. Dr. Muhammad Tariq Khan',
      coSupName: 'Dr. Aisha Siddiqui',
      exp1Name: 'Prof. Dr. Asim Imdad Wagan',
      exp2Name: 'Dr. Farrukh Nadeem',
      iuEvalName: 'Prof. Dr. Zubair Shaikh',
      nat1Name: 'Prof. Dr. Arshad Ali',
      nat2Name: 'Prof. Dr. S. M. Aqil Burney',
      ext1Name: 'Prof. Dr. John D. MacIntyre (UK)',
      ext2Name: 'Prof. Dr. Vincenzo Piuri (Italy)',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-12-15',
      deanName: 'Prof. Dr. Mirza Amin',
      deanDated: '2026-12-18'
    },
    fields: [
      { name: 'studentName', label: 'Student Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No.', type: 'text' },
      { name: 'supName', label: 'Supervisor Name', type: 'text' },
      { name: 'coSupName', label: 'Co-Supervisor Name', type: 'text' },
      { name: 'exp1Name', label: '1st Expert Name', type: 'text' },
      { name: 'exp2Name', label: '2nd Expert Name', type: 'text' },
      { name: 'iuEvalName', label: 'IU Internal Evaluator Name', type: 'text' },
      { name: 'nat1Name', label: 'National Evaluator 1 Name', type: 'text' },
      { name: 'nat2Name', label: 'National Evaluator 2 Name', type: 'text' },
      { name: 'ext1Name', label: 'External/Foreign Evaluator 1* Name', type: 'text' },
      { name: 'ext2Name', label: 'External/Foreign Evaluator 2* Name', type: 'text' },
      { name: 'hodName', label: 'Head of Graduate Programs Name', type: 'text' },
      { name: 'hodDated', label: 'HOD Dated', type: 'date' },
      { name: 'deanName', label: 'Dean Name', type: 'text' },
      { name: 'deanDated', label: 'Dean Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 10mm 15mm 6mm 15mm;">
        <div class="iu-official-header" style="margin-bottom: 2px;">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-8</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title" style="margin: 6px 0 14px 0; font-size: 11pt; font-weight: bold; text-align: center;">
          REPORT OF DOCTORAL THESIS DEFENSE
        </div>

        <div style="font-size: 9.5pt; line-height: 1.4;">
          <p style="margin-bottom: 8px;">
            We hereby recommend that the student <span class="field-underline" style="width: 440px; font-weight: bold;">${data.studentName || ''}</span>
          </p>
          <p style="margin-bottom: 12px;">
            Reg. No. <span class="field-underline" style="width: 200px; font-weight: bold;">${data.regNo || ''}</span> may be accepted for Doctor of Philosophy Degree.
          </p>

          <div style="font-weight: bold; text-align: center; margin: 8px 0 10px 0; font-size: 9.5pt;">
            THESIS EVALUATION COMMITTEE (TEC)
          </div>

          <!-- 9 TEC Members matching exact Word layout -->
          <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between;">
              <div>Supervisor: <span class="field-underline" style="width: 320px;">${data.supName || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>Co-Supervisor (if appointed): <span class="field-underline" style="width: 236px;">${data.coSupName || ''}</span></div>
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
              <div>External/Foreign Evaluator 1*: <span class="field-underline" style="width: 230px;">${data.ext1Name || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; justify-content: space-between;">
              <div>External/Foreign Evaluator 2*: <span class="field-underline" style="width: 230px;">${data.ext2Name || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 140px;"></span></div>
            </div>
          </div>

          <div class="official-section-title" style="font-size: 9pt; margin: 8px 0 4px 0; text-align: center;">APPROVED BY</div>
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 6px;">
            <div>
              <div>Name: <span class="field-underline" style="width: 180px;">${data.hodName || ''}</span></div>
              <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 180px;">${data.hodDated || ''}</span></div>
            </div>
            <div style="text-align: center; width: 220px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>Head of Graduate Programs</div>
            </div>
          </div>

          <div class="official-section-title" style="font-size: 9pt; margin: 8px 0 4px 0; text-align: center;">COUNTERSIGNED BY</div>
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px;">
            <div>
              <div>Name: <span class="field-underline" style="width: 180px;">${data.deanName || ''}</span></div>
              <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 180px;">${data.deanDated || ''}</span></div>
            </div>
            <div style="text-align: center; width: 220px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>Dean</div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 8px; font-size: 7.5pt;">
            <strong><u>Distribution:</u></strong><br/>
            &bull;&nbsp;&nbsp;1 copy each to Examination Department, Dean, office of DAASR, in student’s dossier, the student and each member of GSEC.<br/>
            <strong><u>Note:</u></strong><br/>
            * Decision of External Evaluators (Foreign Experts) will be sought through video conference, if possible, on the same date and their decision will be intimated (on paper) to IU at a later date.
          </div>
        </div>
      </div>
    `
  }
};
