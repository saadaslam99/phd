// Form Definitions Part 3: Proposal Defense Forms (Proposal Schedule, PhD-5 Internal, PhD-5a, PhD-5b)

export const FORMS_DATA_PART3 = {
  // 8. PhD Proposal Schedule (PhD proposal form.docx)
  'phd-proposal': {
    id: 'phd-proposal',
    code: 'IU-PROP-SCHED',
    title: 'SCHEDULE FOR PhD PROPOSAL DEFENSE',
    subtitle: '',
    stage: 'proposal',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      department: 'Computer Science',
      discipline: 'Software Engineering & Distributed Systems',
      thesisTitle: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      examDate: '2026-07-20',
      studentDated: '2026-07-10',
      supName: 'Prof. Dr. Muhammad Tariq Khan',
      supDept: 'Computer Science',
      coSupName: 'Dr. Aisha Siddiqui',
      coSupDept: 'Computer Science',
      exp1Name: 'Prof. Dr. Asim Imdad Wagan',
      exp1Dept: 'Computer Science',
      exp1Inst: 'IBA Karachi',
      exp2Name: 'Dr. Farrukh Nadeem',
      exp2Dept: 'Software Engineering',
      exp2Inst: 'NED University',
      approvalDate: '2026-07-12',
      venue: 'Main Campus, Executive Seminar Hall (3rd Floor)',
      attempt: 'First',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-07-12'
    },
    fields: [
      { name: 'studentName', label: 'Name', type: 'text' },
      { name: 'regNo', label: 'Registration No.', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'discipline', label: 'Discipline / Specialization', type: 'text' },
      { name: 'thesisTitle', label: 'Thesis Title', type: 'textarea', rows: 2 },
      { name: 'examDate', label: 'Proposed date of Examination', type: 'date' },
      { name: 'studentDated', label: 'Student Signature Dated', type: 'date' },
      { name: 'supName', label: 'Supervisor Name', type: 'text' },
      { name: 'supDept', label: 'Supervisor Dept', type: 'text' },
      { name: 'coSupName', label: 'Co-Supervisor Name', type: 'text' },
      { name: 'coSupDept', label: 'Co-Supervisor Dept', type: 'text' },
      { name: 'exp1Name', label: '1st Expert Name', type: 'text' },
      { name: 'exp1Dept', label: '1st Expert Dept', type: 'text' },
      { name: 'exp1Inst', label: '1st Expert Institution', type: 'text' },
      { name: 'exp2Name', label: '2nd Expert Name', type: 'text' },
      { name: 'exp2Dept', label: '2nd Expert Dept', type: 'text' },
      { name: 'exp2Inst', label: '2nd Expert Institution', type: 'text' },
      { name: 'approvalDate', label: 'Date of approval Proposal defense examination', type: 'date' },
      { name: 'venue', label: 'Venue', type: 'text' },
      { name: 'attempt', label: 'No of Attempt', type: 'select', options: ['First', 'Second'] },
      { name: 'hodName', label: 'HoD / Head of Graduate Programs', type: 'text' },
      { name: 'hodDated', label: 'HoD Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 10mm 15mm 8mm 15mm;">
        <div class="iu-official-header" style="margin-bottom: 4px;">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-5</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title" style="margin: 4px 0 12px 0; font-size: 11pt; font-weight: bold; text-align: center;">
          SCHEDULE FOR PhD PROPOSAL DEFENSE
        </div>

        <div style="font-size: 9pt; line-height: 1.35;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div style="flex: 1.2;">Name: <span class="field-underline" style="width: 78%; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Registration No. <span class="field-underline" style="width: 58%; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div style="flex: 1.2;">Department: <span class="field-underline" style="width: 70%;">${data.department || ''}</span></div>
            <div style="flex: 1; text-align: right;">Discipline /Specialization: <span class="field-underline" style="width: 46%;">${data.discipline || ''}</span></div>
          </div>

          <div style="margin-bottom: 4px;">
            Thesis Title: <span class="field-underline auto-scale-text" style="width: 88%; font-weight: bold;">${data.thesisTitle || ''}</span>
          </div>

          <div style="margin-bottom: 4px;">
            Proposed date of Examination: <span class="field-underline" style="width: 220px; font-weight: bold;">${data.examDate || ''}</span>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div>Student Signature: <span class="field-underline" style="width: 200px;"></span></div>
            <div>Dated: <span class="field-underline" style="width: 140px;">${data.studentDated || ''}</span></div>
          </div>

          <div style="font-weight: bold; margin: 8px 0 8px 0; font-size: 8.5pt;">
            It is certified that the time and date mentioned above are appropriate, and I will be available to attend the Proposal/tittle defence Presentation.
          </div>

          <!-- Supervisor & Co-Supervisor -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px 20px; margin-bottom: 8px;">
            <div>
              <div style="font-weight: bold;">Supervisor:</div>
              <div>Name: <span class="field-underline" style="width: 78%;">${data.supName || ''}</span></div>
              <div style="margin-top: 3px;">Department: <span class="field-underline" style="width: 68%;">${data.supDept || ''}</span></div>
              <div style="margin-top: 3px;">Signature: <span class="field-underline" style="width: 72%;"></span></div>
            </div>
            <div>
              <div style="font-weight: bold;">Co-Supervisor: <span style="font-weight: normal; text-decoration: underline;">(if appointed)</span></div>
              <div>Name: <span class="field-underline" style="width: 78%;">${data.coSupName || ''}</span></div>
              <div style="margin-top: 3px;">Department: <span class="field-underline" style="width: 68%;">${data.coSupDept || ''}</span></div>
              <div style="margin-top: 3px;">Signature: <span class="field-underline" style="width: 72%;"></span></div>
            </div>
          </div>

          <!-- 1st & 2nd Experts -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px 20px; margin-bottom: 8px;">
            <div>
              <div style="font-weight: bold;">1<sup>st</sup> Expert from the field of research:</div>
              <div>Name: <span class="field-underline" style="width: 78%;">${data.exp1Name || ''}</span></div>
              <div style="margin-top: 3px;">Department: <span class="field-underline" style="width: 68%;">${data.exp1Dept || ''}</span></div>
              <div style="margin-top: 3px;">Institution: <span class="field-underline" style="width: 72%;">${data.exp1Inst || ''}</span></div>
              <div style="margin-top: 3px;">Signature: <span class="field-underline" style="width: 72%;"></span></div>
            </div>
            <div>
              <div style="font-weight: bold;">2<sup>nd</sup> Expert from the field of research:</div>
              <div>Name: <span class="field-underline" style="width: 78%;">${data.exp2Name || ''}</span></div>
              <div style="margin-top: 3px;">Department: <span class="field-underline" style="width: 68%;">${data.exp2Dept || ''}</span></div>
              <div style="margin-top: 3px;">Institution: <span class="field-underline" style="width: 72%;">${data.exp2Inst || ''}</span></div>
              <div style="margin-top: 3px;">Signature: <span class="field-underline" style="width: 72%;"></span></div>
            </div>
          </div>

          <div style="font-size: 7.5pt; margin: 6px 0 8px 0;">
            Note: This form must be submitted to the Examination Office at least one week before the Proposed date.
          </div>

          <!-- For Department Use Only -->
          <div style="margin-top: 6px;">
            <div style="font-weight: bold; font-size: 9.5pt;">For Department Use Only</div>
            <div style="border-bottom: 1.5px solid #000; margin: 3px 0 6px 0;"></div>

            <div style="margin-bottom: 4px;">
              Date of approval Proposal/tittle defense examination: <span class="field-underline" style="width: 40%; font-weight: bold;">${data.approvalDate || ''}</span>
            </div>
            <div style="margin-bottom: 6px;">
              Venue: <span class="field-underline" style="width: 88%;">${data.venue || ''}</span>
            </div>
            <div style="margin-bottom: 6px; display: flex; align-items: center; gap: 30px;">
              <span>No of Attempt:</span>
              <span style="display: flex; align-items: center; gap: 8px;">First <span class="iu-box ${data.attempt === 'First' ? 'checked' : ''}" style="width: 15px; height: 15px; display: inline-block;"></span></span>
              <span style="display: flex; align-items: center; gap: 8px;">Second <span class="iu-box ${data.attempt === 'Second' ? 'checked' : ''}" style="width: 15px; height: 15px; display: inline-block;"></span></span>
            </div>
            <div style="margin-bottom: 12px;">Resolution with Form PhD 5a</div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <div>Name: <span class="field-underline" style="width: 180px;">${data.hodName || ''}</span></div>
                <div style="margin-top: 4px;">Dated: <span class="field-underline" style="width: 140px;">${data.hodDated || ''}</span></div>
              </div>
              <div style="text-align: center; width: 240px;">
                <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
                <div>HOD / Head of Graduate Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // 9. Form PhD-5 Internal (Form PhD-5 for Internal Used Only.docx)
  'phd-5-internal': {
    id: 'phd-5-internal',
    code: 'Form PhD-5',
    title: 'SCHEDULE FOR PhD PROPOSAL DEFENSE (INTERNAL USED ONLY)',
    subtitle: '',
    stage: 'proposal',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      department: 'Computer Science',
      discipline: 'Software Engineering & Distributed Systems',
      thesisTitle: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      examDate: '2026-07-20',
      studentDated: '2026-07-10',
      supName: 'Prof. Dr. Muhammad Tariq Khan',
      supDept: 'Computer Science',
      coSupName: 'Dr. Aisha Siddiqui',
      coSupDept: 'Computer Science',
      exp1Name: 'Prof. Dr. Asim Imdad Wagan',
      exp1Dept: 'Computer Science',
      exp1Inst: 'IBA Karachi',
      exp2Name: 'Dr. Farrukh Nadeem',
      exp2Dept: 'Software Engineering',
      exp2Inst: 'NED University',
      approvalDate: '2026-07-12',
      venue: 'Main Campus, Executive Seminar Hall (3rd Floor)',
      attempt: 'First',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-07-12'
    },
    fields: [
      { name: 'studentName', label: 'Name', type: 'text' },
      { name: 'regNo', label: 'Registration No.', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'discipline', label: 'Discipline / Specialization', type: 'text' },
      { name: 'thesisTitle', label: 'Thesis Title', type: 'textarea', rows: 2 },
      { name: 'examDate', label: 'Proposed date of Examination', type: 'date' },
      { name: 'studentDated', label: 'Student Signature Dated', type: 'date' },
      { name: 'supName', label: 'Supervisor Name', type: 'text' },
      { name: 'supDept', label: 'Supervisor Dept', type: 'text' },
      { name: 'coSupName', label: 'Co-Supervisor Name', type: 'text' },
      { name: 'coSupDept', label: 'Co-Supervisor Dept', type: 'text' },
      { name: 'exp1Name', label: '1st Expert Name', type: 'text' },
      { name: 'exp1Dept', label: '1st Expert Dept', type: 'text' },
      { name: 'exp1Inst', label: '1st Expert Institution', type: 'text' },
      { name: 'exp2Name', label: '2nd Expert Name', type: 'text' },
      { name: 'exp2Dept', label: '2nd Expert Dept', type: 'text' },
      { name: 'exp2Inst', label: '2nd Expert Institution', type: 'text' },
      { name: 'approvalDate', label: 'Date of approval Proposal defense examination', type: 'date' },
      { name: 'venue', label: 'Venue', type: 'text' },
      { name: 'attempt', label: 'No of Attempt', type: 'select', options: ['First', 'Second'] },
      { name: 'hodName', label: 'HoD / Head of Graduate Programs', type: 'text' },
      { name: 'hodDated', label: 'HoD Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 10mm 15mm 8mm 15mm;">
        <div class="iu-official-header" style="margin-bottom: 4px;">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-5</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title" style="margin: 4px 0 12px 0; font-size: 11pt; font-weight: bold; text-align: center;">
          SCHEDULE FOR PhD PROPOSAL DEFENSE
        </div>

        <div style="font-size: 9pt; line-height: 1.35;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div style="flex: 1.2;">Name: <span class="field-underline" style="width: 78%; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Registration No. <span class="field-underline" style="width: 58%; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div style="flex: 1.2;">Department: <span class="field-underline" style="width: 70%;">${data.department || ''}</span></div>
            <div style="flex: 1; text-align: right;">Discipline /Specialization: <span class="field-underline" style="width: 46%;">${data.discipline || ''}</span></div>
          </div>

          <div style="margin-bottom: 4px;">
            Thesis Title: <span class="field-underline auto-scale-text" style="width: 88%; font-weight: bold;">${data.thesisTitle || ''}</span>
          </div>

          <div style="margin-bottom: 4px;">
            Proposed date of Examination: <span class="field-underline" style="width: 220px; font-weight: bold;">${data.examDate || ''}</span>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div>Student Signature: <span class="field-underline" style="width: 200px;"></span></div>
            <div>Dated: <span class="field-underline" style="width: 140px;">${data.studentDated || ''}</span></div>
          </div>

          <div style="font-weight: bold; margin: 8px 0 8px 0; font-size: 8.5pt;">
            It is certified that the time and date mentioned above are appropriate, and I will be available to attend the Proposal/tittle defence Presentation.
          </div>

          <!-- Supervisor & Co-Supervisor -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px 20px; margin-bottom: 8px;">
            <div>
              <div style="font-weight: bold;">Supervisor:</div>
              <div>Name: <span class="field-underline" style="width: 78%;">${data.supName || ''}</span></div>
              <div style="margin-top: 3px;">Department: <span class="field-underline" style="width: 68%;">${data.supDept || ''}</span></div>
              <div style="margin-top: 3px;">Signature: <span class="field-underline" style="width: 72%;"></span></div>
            </div>
            <div>
              <div style="font-weight: bold;">Co-Supervisor: <span style="font-weight: normal; text-decoration: underline;">(if appointed)</span></div>
              <div>Name: <span class="field-underline" style="width: 78%;">${data.coSupName || ''}</span></div>
              <div style="margin-top: 3px;">Department: <span class="field-underline" style="width: 68%;">${data.coSupDept || ''}</span></div>
              <div style="margin-top: 3px;">Signature: <span class="field-underline" style="width: 72%;"></span></div>
            </div>
          </div>

          <!-- 1st & 2nd Experts -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px 20px; margin-bottom: 8px;">
            <div>
              <div style="font-weight: bold;">1<sup>st</sup> Expert from the field of research:</div>
              <div>Name: <span class="field-underline" style="width: 78%;">${data.exp1Name || ''}</span></div>
              <div style="margin-top: 3px;">Department: <span class="field-underline" style="width: 68%;">${data.exp1Dept || ''}</span></div>
              <div style="margin-top: 3px;">Institution: <span class="field-underline" style="width: 72%;">${data.exp1Inst || ''}</span></div>
              <div style="margin-top: 3px;">Signature: <span class="field-underline" style="width: 72%;"></span></div>
            </div>
            <div>
              <div style="font-weight: bold;">2<sup>nd</sup> Expert from the field of research:</div>
              <div>Name: <span class="field-underline" style="width: 78%;">${data.exp2Name || ''}</span></div>
              <div style="margin-top: 3px;">Department: <span class="field-underline" style="width: 68%;">${data.exp2Dept || ''}</span></div>
              <div style="margin-top: 3px;">Institution: <span class="field-underline" style="width: 72%;">${data.exp2Inst || ''}</span></div>
              <div style="margin-top: 3px;">Signature: <span class="field-underline" style="width: 72%;"></span></div>
            </div>
          </div>

          <div style="font-size: 7.5pt; margin: 6px 0 8px 0;">
            Note: This form must be submitted to the Examination Office at least one week before the Proposed date.
          </div>

          <!-- For Department Use Only -->
          <div style="margin-top: 6px;">
            <div style="font-weight: bold; font-size: 9.5pt;">For Department Use Only</div>
            <div style="border-bottom: 1.5px solid #000; margin: 3px 0 6px 0;"></div>

            <div style="margin-bottom: 4px;">
              Date of approval Proposal/tittle defense examination: <span class="field-underline" style="width: 40%; font-weight: bold;">${data.approvalDate || ''}</span>
            </div>
            <div style="margin-bottom: 6px;">
              Venue: <span class="field-underline" style="width: 88%;">${data.venue || ''}</span>
            </div>
            <div style="margin-bottom: 6px; display: flex; align-items: center; gap: 30px;">
              <span>No of Attempt:</span>
              <span style="display: flex; align-items: center; gap: 8px;">First <span class="iu-box ${data.attempt === 'First' ? 'checked' : ''}" style="width: 15px; height: 15px; display: inline-block;"></span></span>
              <span style="display: flex; align-items: center; gap: 8px;">Second <span class="iu-box ${data.attempt === 'Second' ? 'checked' : ''}" style="width: 15px; height: 15px; display: inline-block;"></span></span>
            </div>
            <div style="margin-bottom: 12px;">Resolution with Form PhD 5a</div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <div>Name: <span class="field-underline" style="width: 180px;">${data.hodName || ''}</span></div>
                <div style="margin-top: 4px;">Dated: <span class="field-underline" style="width: 140px;">${data.hodDated || ''}</span></div>
              </div>
              <div style="text-align: center; width: 240px;">
                <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
                <div>HOD / Head of Graduate Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // 10. Form PhD-5a: Proposal Defense Evaluation Report
  'phd-05a': {
    id: 'phd-05a',
    code: 'Form PhD-5a',
    title: 'PROPOSAL DEFENSE EVALUATION REPORT',
    subtitle: '',
    stage: 'proposal',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      department: 'Computer Science',
      defenseDate: '2026-07-20',
      topic: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      m1Result: 'QUALIFIED',
      m2Result: 'QUALIFIED',
      m3Result: 'QUALIFIED',
      m4Result: 'QUALIFIED',
      m5Result: 'QUALIFIED',
      m6Result: 'QUALIFIED',
      finalResult: 'PASS',
      finalizedTopic: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      preConditions: 'None.',
      secondAttemptDate: '',
      supDated: '2026-07-20',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-07-21',
      deanName: 'Prof. Dr. Mirza Amin',
      deanDated: '2026-07-23'
    },
    fields: [
      { name: 'studentName', label: 'Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'defenseDate', label: 'Date of Proposal Defense', type: 'date' },
      { name: 'topic', label: 'Topic', type: 'textarea', rows: 2 },
      { name: 'm1Result', label: '1. Supervisor Result', type: 'select', options: ['QUALIFIED', 'NOT QUALIFIED'] },
      { name: 'm2Result', label: '2. Co-Supervisor Result', type: 'select', options: ['QUALIFIED', 'NOT QUALIFIED'] },
      { name: 'm3Result', label: '3. 1st Expert Result', type: 'select', options: ['QUALIFIED', 'NOT QUALIFIED'] },
      { name: 'm4Result', label: '4. 2nd Expert Result', type: 'select', options: ['QUALIFIED', 'NOT QUALIFIED'] },
      { name: 'm5Result', label: '5. External Examiner Result', type: 'select', options: ['QUALIFIED', 'NOT QUALIFIED'] },
      { name: 'm6Result', label: '6. HOD Result', type: 'select', options: ['QUALIFIED', 'NOT QUALIFIED'] },
      { name: 'finalResult', label: 'FINAL RESULT (PASS / FAIL)', type: 'select', options: ['PASS', 'FAIL'] },
      { name: 'finalizedTopic', label: 'Finalized Research Topic', type: 'textarea', rows: 2 },
      { name: 'preConditions', label: 'Pre-Conditions for Second Chance, if any', type: 'textarea', rows: 2 },
      { name: 'secondAttemptDate', label: 'Date for Proposal Defense (Second Attempt)', type: 'date' },
      { name: 'supDated', label: 'Supervisor Dated', type: 'date' },
      { name: 'hodName', label: 'HOD Name', type: 'text' },
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
            <div class="form-id">Form PhD-5a</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title" style="margin: 4px 0 10px 0; font-size: 11pt; font-weight: bold; text-align: center;">
          PROPOSAL DEFENSE EVALUATION REPORT
        </div>

        <div style="font-size: 9pt; line-height: 1.35;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div style="flex: 1.4;">Name: <span class="field-underline" style="width: 78%; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Reg. No: <span class="field-underline" style="width: 60%; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div>Department: <span class="field-underline" style="width: 250px;">${data.department || ''}</span></div>
            <div>Date of Proposal Defense: <span class="field-underline" style="width: 170px;">${data.defenseDate || ''}</span></div>
          </div>

          <div style="margin-bottom: 6px;">
            Topic: <span class="field-underline auto-scale-text" style="width: 92%; font-weight: bold;">${data.topic || ''}</span>
          </div>

          <div style="border-top: 1px dashed #000; margin: 6px 0 8px 0;"></div>

          <!-- Evaluation rows 1 to 6 without table boxes, matching original Word layout -->
          <div style="display: flex; flex-direction: column; gap: 6px; margin-bottom: 8px; font-size: 8.5pt;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="width: 260px;">1. &nbsp;&nbsp; Supervisor</div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <span style="display: flex; align-items: center; gap: 6px;">QUALIFIED <span class="iu-box ${data.m1Result === 'QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
                <span style="display: flex; align-items: center; gap: 6px;">NOT QUALIFIED <span class="iu-box ${data.m1Result === 'NOT QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
              </div>
              <div>Signature <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="width: 260px;">2. &nbsp;&nbsp; Co- Supervisor (if appointed)</div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <span style="display: flex; align-items: center; gap: 6px;">QUALIFIED <span class="iu-box ${data.m2Result === 'QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
                <span style="display: flex; align-items: center; gap: 6px;">NOT QUALIFIED <span class="iu-box ${data.m2Result === 'NOT QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
              </div>
              <div>Signature <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="width: 260px;">3. &nbsp;&nbsp; 1<sup>st</sup> Expert from the field of research</div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <span style="display: flex; align-items: center; gap: 6px;">QUALIFIED <span class="iu-box ${data.m3Result === 'QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
                <span style="display: flex; align-items: center; gap: 6px;">NOT QUALIFIED <span class="iu-box ${data.m3Result === 'NOT QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
              </div>
              <div>Signature <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="width: 260px;">4. &nbsp;&nbsp; 2<sup>nd</sup> Expert from the field of research</div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <span style="display: flex; align-items: center; gap: 6px;">QUALIFIED <span class="iu-box ${data.m4Result === 'QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
                <span style="display: flex; align-items: center; gap: 6px;">NOT QUALIFIED <span class="iu-box ${data.m4Result === 'NOT QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
              </div>
              <div>Signature <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="width: 260px;">5. &nbsp;&nbsp; External Examiner (if any)</div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <span style="display: flex; align-items: center; gap: 6px;">QUALIFIED <span class="iu-box ${data.m5Result === 'QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
                <span style="display: flex; align-items: center; gap: 6px;">NOT QUALIFIED <span class="iu-box ${data.m5Result === 'NOT QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
              </div>
              <div>Signature <span class="field-underline" style="width: 140px;"></span></div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="width: 260px;">6. &nbsp;&nbsp; HOD / Head of Graduate Programs</div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <span style="display: flex; align-items: center; gap: 6px;">QUALIFIED <span class="iu-box ${data.m6Result === 'QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
                <span style="display: flex; align-items: center; gap: 6px;">NOT QUALIFIED <span class="iu-box ${data.m6Result === 'NOT QUALIFIED' ? 'checked' : ''}" style="width: 14px; height: 14px; display: inline-block;"></span></span>
              </div>
              <div>Signature <span class="field-underline" style="width: 140px;"></span></div>
            </div>
          </div>

          <div style="text-align: center; font-weight: bold; margin: 8px 0 4px 0; font-size: 9.5pt;">
            FINAL RESULT OF THE PROPOSAL DEFENSE EVALUATION
          </div>

          <div style="display: flex; justify-content: center; gap: 60px; margin-bottom: 8px;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
              <span class="iu-box ${data.finalResult === 'PASS' ? 'checked' : ''}" style="width: 16px; height: 16px; display: inline-block;"></span> PASS
            </div>
            <div style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
              <span class="iu-box ${data.finalResult === 'FAIL' ? 'checked' : ''}" style="width: 16px; height: 16px; display: inline-block;"></span> FAIL
            </div>
          </div>

          <div style="border-top: 1px dashed #000; margin: 6px 0 6px 0;"></div>

          <div style="margin-bottom: 2px;">
            <span style="font-weight: bold;">Finalized Research Topic:</span> <span class="field-underline auto-scale-text" style="width: 76%; font-weight: bold;">${data.finalizedTopic || ''}</span>
          </div>
          <div style="border-bottom: 1px solid #000; height: 14px; margin-bottom: 6px;"></div>

          <div style="border-top: 1px dashed #000; margin: 6px 0 6px 0;"></div>

          <div style="font-size: 8pt; margin-bottom: 2px;">
            Pre-Conditions for Second Chance, if any (List the conditions that must be met beforehand and the date for next proposal defense in case of failure in first attempt) <span class="field-underline auto-scale-text" style="width: 48%;">${data.preConditions || ''}</span>
          </div>
          <div style="border-bottom: 1px solid #000; height: 14px; margin-bottom: 6px;"></div>

          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 6px; margin-bottom: 6px;">
            <div>
              Date for Proposal Defense (Second Attempt) <span class="field-underline" style="width: 130px;">${data.secondAttemptDate || ''}</span>
            </div>
            <div style="text-align: left; width: 220px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>Signature of Supervisor</div>
              <div>Dated: <span class="field-underline" style="width: 90px;">${data.supDated || ''}</span></div>
            </div>
          </div>

          <div class="official-section-title" style="font-size: 9pt; margin: 4px 0 4px 0; text-align: center;">APPROVED BY</div>
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 6px;">
            <div>
              <div>Name: <span class="field-underline" style="width: 180px;">${data.hodName || ''}</span></div>
              <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 140px;">${data.hodDated || ''}</span></div>
            </div>
            <div style="text-align: center; width: 220px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>HOD / Head of Graduate Programs</div>
            </div>
          </div>

          <div class="official-section-title" style="font-size: 9pt; margin: 4px 0 4px 0; text-align: center;">COUNTERSIGNED BY</div>
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 6px;">
            <div>
              <div>Name: <span class="field-underline" style="width: 180px;">${data.deanName || ''}</span></div>
              <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 140px;">${data.deanDated || ''}</span></div>
            </div>
            <div style="text-align: center; width: 220px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>Dean</div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 6px; font-size: 7.5pt;">
            <strong><u>Distribution:</u></strong><br/>
            &bull;&nbsp;&nbsp;1 copy each to Examination Department, Dean, office of DAASR, in student’s dossier, the student and each member of GSEC.
          </div>
        </div>
      </div>
    `
  },

  // 11. Form PhD-5b: Proposal Defense Certificate (PhD-Form-5b.doc)
  'phd-05b': {
    id: 'phd-05b',
    code: 'Form PhD-5b',
    title: 'PhD Thesis Proposal Defense Certificate',
    subtitle: '',
    stage: 'proposal',
    defaults: {
      studentName: 'Mr. Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      thesisTitle: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      defenseDate: '2026-07-20',
      enrollmentDate: '2024-03-01',
      supName: 'Prof. Dr. Muhammad Tariq Khan',
      supDated: '2026-07-20',
      coSupName: 'Dr. Aisha Siddiqui',
      coSupDated: '2026-07-20',
      exp1Name: 'Prof. Dr. Asim Imdad Wagan',
      exp1Dated: '2026-07-20',
      exp2Name: 'Dr. Farrukh Nadeem',
      exp2Dated: '2026-07-20',
      extName: 'Prof. Dr. Zubair Shaikh',
      extDated: '2026-07-20',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-07-21',
      deanName: 'Prof. Dr. Mirza Amin',
      deanDated: '2026-07-23'
    },
    fields: [
      { name: 'studentName', label: 'Mr./Ms. Student Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No.', type: 'text' },
      { name: 'thesisTitle', label: 'Thesis Proposal Title', type: 'textarea', rows: 2 },
      { name: 'defenseDate', label: 'Date of proposal defense', type: 'date' },
      { name: 'enrollmentDate', label: 'Date of enrollment approved in BASR', type: 'date' },
      { name: 'supName', label: 'Supervisor Name', type: 'text' },
      { name: 'supDated', label: 'Supervisor Dated', type: 'date' },
      { name: 'coSupName', label: 'Co-Supervisor Name', type: 'text' },
      { name: 'coSupDated', label: 'Co-Supervisor Dated', type: 'date' },
      { name: 'exp1Name', label: '1st Expert Name', type: 'text' },
      { name: 'exp1Dated', label: '1st Expert Dated', type: 'date' },
      { name: 'exp2Name', label: '2nd Expert Name', type: 'text' },
      { name: 'exp2Dated', label: '2nd Expert Dated', type: 'date' },
      { name: 'extName', label: 'External Examiner Name', type: 'text' },
      { name: 'extDated', label: 'External Examiner Dated', type: 'date' },
      { name: 'hodName', label: 'HOD Name', type: 'text' },
      { name: 'hodDated', label: 'HOD Dated', type: 'date' },
      { name: 'deanName', label: 'Dean Name', type: 'text' },
      { name: 'deanDated', label: 'Dean Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 10mm 15mm 8mm 15mm;">
        <div class="iu-official-header" style="margin-bottom: 4px;">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-5b</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title underlined" style="margin: 6px 0 16px 0; font-size: 12pt; text-align: center;">
          PhD Thesis Proposal Defense Certificate
        </div>

        <div style="font-size: 9.5pt; line-height: 1.6; text-align: justify;">
          <div style="margin-bottom: 12px; text-indent: 40px;">
            This is to certify that Mr./Ms. <span class="field-underline" style="width: 380px; font-weight: bold;">${data.studentName || ''}</span>,
          </div>
          <div style="margin-bottom: 12px;">
            Reg. No. <span class="field-underline" style="width: 140px; font-weight: bold;">${data.regNo || ''}</span>, has successfully defended thesis proposal titled <span class="field-underline auto-scale-text" style="width: 320px; font-weight: bold;">${data.thesisTitle || ''}</span>
          </div>
          <div style="margin-bottom: 12px;">
            <div class="field-underline" style="width: 100%; margin-bottom: 8px;"></div>
            <span class="field-underline" style="width: 280px;"></span> on <span class="field-underline" style="width: 140px; font-weight: bold;">${data.defenseDate || ''}</span> <em>(Date of proposal defense)</em>. The scholar
          </div>
          <div style="margin-bottom: 12px;">
            was admitted in the PhD program on <span class="field-underline" style="width: 160px; font-weight: bold;">${data.enrollmentDate || ''}</span> <em>(Date of enrollment as approved in BASR)</em>.
          </div>
          <div style="margin-bottom: 14px;">
            The student is permitted to proceed with PhD research.
          </div>

          <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px;">
            <span class="iu-box checked" style="width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px;"></span>
            <div>It is hereby certified that the PhD scholar has successfully defended his/her thesis proposal within the first six semesters of the registration into the PhD program.</div>
          </div>

          <!-- 7 Official Signatures matching authentic Word layout -->
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px; font-size: 9pt;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <div>Name: <span class="field-underline" style="width: 240px;">${data.supName || ''}</span></div>
                <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 240px;">${data.supDated || ''}</span></div>
              </div>
              <div style="text-align: center; width: 240px;">
                <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
                <div>Supervisor</div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <div>Name: <span class="field-underline" style="width: 240px;">${data.coSupName || ''}</span></div>
                <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 240px;">${data.coSupDated || ''}</span></div>
              </div>
              <div style="text-align: center; width: 240px;">
                <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
                <div>Co-Supervisor (if appointed)</div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <div>Name: <span class="field-underline" style="width: 240px;">${data.exp1Name || ''}</span></div>
                <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 240px;">${data.exp1Dated || ''}</span></div>
              </div>
              <div style="text-align: center; width: 240px;">
                <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
                <div>1<sup>st</sup> Expert from the field of research</div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <div>Name: <span class="field-underline" style="width: 240px;">${data.exp2Name || ''}</span></div>
                <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 240px;">${data.exp2Dated || ''}</span></div>
              </div>
              <div style="text-align: center; width: 240px;">
                <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
                <div>2<sup>nd</sup> Expert from the field of research</div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <div>Name: <span class="field-underline" style="width: 240px;">${data.extName || ''}</span></div>
                <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 240px;">${data.extDated || ''}</span></div>
              </div>
              <div style="text-align: center; width: 240px;">
                <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
                <div>External Examiner (if any)</div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <div>Name: <span class="field-underline" style="width: 240px;">${data.hodName || ''}</span></div>
                <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 240px;">${data.hodDated || ''}</span></div>
              </div>
              <div style="text-align: center; width: 240px;">
                <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
                <div>HOD / Head of Graduate Programs</div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <div>Name: <span class="field-underline" style="width: 240px;">${data.deanName || ''}</span></div>
                <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 240px;">${data.deanDated || ''}</span></div>
              </div>
              <div style="text-align: center; width: 240px;">
                <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
                <div>Dean</div>
              </div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 10px; font-size: 7.5pt;">
            <strong><u>Distribution:</u></strong><br/>
            &bull;&nbsp;&nbsp;1 copy each to Examination Department, Dean, office of DAASR, in student’s dossier, the student and each member of GSEC.
          </div>
        </div>
      </div>
    `
  }
};
