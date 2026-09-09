// Form Definitions Part 2: Form PhD-2, Form PhD-3, Comp Exam Sup Approval, Form PhD-4

export const FORMS_DATA_PART2 = {
  // 4. Form PhD-2
  'phd-02': {
    id: 'phd-02',
    code: 'Form PhD-2',
    title: 'PETITION FOR CHANGE IN THE RESEARCH TOPIC AND/OR GRADUATE STUDENT EVALUATION COMMITTEE (GSEC)',
    subtitle: '',
    stage: 'gsec',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      campus: 'Main Campus',
      department: 'Computer Science',
      oldTopic1: 'Blockchain Distributed Consensus in Electronic Health Records',
      oldTopic2: 'and Scalability Bottlenecks in Private Medical Clouds',
      oldTopic3: '',
      newTopic1: 'Scalable Sharding and Zero-Knowledge Distributed Ledger Systems',
      newTopic2: 'for Secure Cross-Institutional Health Information Exchange',
      newTopic3: '',
      supDelName: 'Dr. Imran Khan',
      supDelInst: 'Iqra University Main Campus',
      supAddName: 'Prof. Dr. Muhammad Tariq Khan',
      supAddInst: 'Iqra University Main Campus',
      coSupDelName: 'None',
      coSupDelInst: '-',
      coSupAddName: 'Dr. Aisha Siddiqui',
      coSupAddInst: 'Iqra University North Campus',
      supDated: '2026-04-10',
      expDelName: 'Dr. Waseem Akhtar',
      expDelInst: 'Bahria University',
      expDelContact: '+92 321 1122334',
      expDelEmail: 'waseem@bahria.edu.pk',
      expAddName: 'Prof. Dr. Asim Imdad Wagan',
      expAddInst: 'IBA Karachi',
      expAddContact: '+92 333 9876543',
      expAddEmail: 'asim.wagan@iba.edu.pk',
      studentDated: '2026-04-10',
      meetingNo: 'GSEC-51',
      agendaItemNo: '2.1',
      commDated: '2026-04-15',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-04-16',
      deanName: 'Prof. Dr. Mirza Amin',
      deanDated: '2026-04-18'
    },
    fields: [
      { name: 'studentName', label: 'Student’s Name', type: 'text' },
      { name: 'regNo', label: 'Registration No', type: 'text' },
      { name: 'campus', label: 'Campus', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'oldTopic1', label: 'Old Topic (Line 1)', type: 'text' },
      { name: 'oldTopic2', label: 'Old Topic (Line 2)', type: 'text' },
      { name: 'newTopic1', label: 'New Topic (Line 1)', type: 'text' },
      { name: 'newTopic2', label: 'New Topic (Line 2)', type: 'text' },
      { name: 'supDelName', label: 'Deleted Supervisor Name', type: 'text' },
      { name: 'supDelInst', label: 'Deleted Supervisor Institution', type: 'text' },
      { name: 'supAddName', label: 'Added Supervisor Name', type: 'text' },
      { name: 'supAddInst', label: 'Added Supervisor Institution', type: 'text' },
      { name: 'coSupDelName', label: 'Deleted Co-Supervisor Name', type: 'text' },
      { name: 'coSupDelInst', label: 'Deleted Co-Supervisor Institution', type: 'text' },
      { name: 'coSupAddName', label: 'Added Co-Supervisor Name', type: 'text' },
      { name: 'coSupAddInst', label: 'Added Co-Supervisor Institution', type: 'text' },
      { name: 'expDelName', label: 'Deleted Expert Name', type: 'text' },
      { name: 'expDelInst', label: 'Deleted Expert Institution', type: 'text' },
      { name: 'expDelContact', label: 'Deleted Expert Contact', type: 'text' },
      { name: 'expDelEmail', label: 'Deleted Expert Email', type: 'email' },
      { name: 'expAddName', label: 'Added Expert Name', type: 'text' },
      { name: 'expAddInst', label: 'Added Expert Institution', type: 'text' },
      { name: 'expAddContact', label: 'Added Expert Contact', type: 'text' },
      { name: 'expAddEmail', label: 'Added Expert Email', type: 'email' },
      { name: 'studentDated', label: 'Student Signature Dated', type: 'date' },
      { name: 'meetingNo', label: 'Meeting No', type: 'text' },
      { name: 'agendaItemNo', label: 'Agenda Item No', type: 'text' },
      { name: 'commDated', label: 'Committee Dated', type: 'date' },
      { name: 'hodName', label: 'HoD Name', type: 'text' },
      { name: 'hodDated', label: 'HoD Dated', type: 'date' },
      { name: 'deanName', label: 'Dean Name', type: 'text' },
      { name: 'deanDated', label: 'Dean Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 8mm 15mm 6mm 15mm;">
        <div class="iu-official-header">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-2</div>
            <div class="doc-program">DOCTORAL<br/>PROGRAM OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title" style="margin-top: 4px; margin-bottom: 6px; font-size: 10.5pt;">
          PETITION FOR CHANGE IN THE RESEARCH TOPIC AND/OR<br/>GRADUATE STUDENT EVALUATION COMMITTEE (GSEC)
        </div>

        <div style="font-size: 8.5pt; line-height: 1.3;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
            <div>Student’s Name: <span class="field-underline" style="width: 250px; font-weight: bold;">${data.studentName || ''}</span></div>
            <div>Reg. No: <span class="field-underline" style="width: 190px; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div>Campus: <span class="field-underline" style="width: 280px;">${data.campus || ''}</span></div>
            <div>Department: <span class="field-underline" style="width: 200px;">${data.department || ''}</span></div>
          </div>

          <div class="official-section-title" style="font-size: 9pt; margin: 4px 0 2px 0;">
            CHANGE OF RESEARCH TOPIC
          </div>
          <div style="display: flex; justify-content: space-around; font-weight: bold; font-size: 8.5pt; margin-bottom: 2px;">
            <span style="text-decoration: underline;">OLD</span>
            <span style="text-decoration: underline;">NEW</span>
          </div>
          <div style="display: flex; gap: 12px; margin-bottom: 2px;">
            <div class="field-underline auto-scale-text" style="flex: 1; min-height: 16px;">${data.oldTopic1 || ''}</div>
            <div class="field-underline auto-scale-text" style="flex: 1; min-height: 16px;">${data.newTopic1 || ''}</div>
          </div>
          <div style="display: flex; gap: 12px; margin-bottom: 4px;">
            <div class="field-underline auto-scale-text" style="flex: 1; min-height: 16px;">${data.oldTopic2 || ''}</div>
            <div class="field-underline auto-scale-text" style="flex: 1; min-height: 16px;">${data.newTopic2 || ''}</div>
          </div>

          <div class="official-section-title" style="font-size: 9pt; margin: 4px 0 1px 0;">
            CHANGES OF COMMITTEE MEMBER
          </div>
          <div style="text-align: center; font-size: 7pt; font-style: italic; margin-bottom: 4px;">
            (Signatures of those to be deleted are required. If signature for deletion cannot be obtained type reasons on the signature line)
          </div>

          <!-- Supervisor Change -->
          <div style="text-align: center; font-weight: bold; font-size: 8pt; margin: 2px 0;">CHANGE OF SUPERVISOR</div>
          <div style="display: flex; justify-content: space-around; font-size: 8pt; font-weight: bold; margin-bottom: 2px;">
            <span style="text-decoration: underline;">DELETE</span>
            <span style="text-decoration: underline;">ADD</span>
          </div>
          <div style="display: flex; gap: 14px; font-size: 8pt;">
            <div style="flex: 1;">
              <div>1. Name: <span class="field-underline" style="width: 170px;">${data.supDelName || ''}</span></div>
              <div>Institution Name: <span class="field-underline" style="width: 140px;">${data.supDelInst || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 170px;"></span></div>
            </div>
            <div style="flex: 1;">
              <div>Name: <span class="field-underline" style="width: 190px;">${data.supAddName || ''}</span></div>
              <div>Institution Name: <span class="field-underline" style="width: 150px;">${data.supAddInst || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 180px;"></span></div>
            </div>
          </div>

          <!-- Co-Supervisor Change -->
          <div style="text-align: center; font-weight: bold; font-size: 8pt; margin: 4px 0 2px 0;">CHANGE OF CO-SUPERVISOR</div>
          <div style="display: flex; justify-content: space-around; font-size: 8pt; font-weight: bold; margin-bottom: 2px;">
            <span style="text-decoration: underline;">DELETE</span>
            <span style="text-decoration: underline;">ADD</span>
          </div>
          <div style="display: flex; gap: 14px; font-size: 8pt;">
            <div style="flex: 1;">
              <div>2. Name: <span class="field-underline" style="width: 170px;">${data.coSupDelName || ''}</span></div>
              <div>Institution Name: <span class="field-underline" style="width: 140px;">${data.coSupDelInst || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 170px;"></span></div>
            </div>
            <div style="flex: 1;">
              <div>Name: <span class="field-underline" style="width: 190px;">${data.coSupAddName || ''}</span></div>
              <div>Institution Name: <span class="field-underline" style="width: 150px;">${data.coSupAddInst || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 180px;"></span></div>
            </div>
          </div>
          <div style="font-size: 7.5pt; margin-top: 2px;">
            Signature of Supervisor (if the co-supervisor has been changed): <span class="field-underline" style="width: 160px;"></span>
            <span style="margin-left: 10px;">Dated: <span class="field-underline" style="width: 90px;">${data.supDated || ''}</span></span>
          </div>

          <!-- Expert Change -->
          <div style="text-align: center; font-weight: bold; font-size: 8pt; margin: 4px 0 2px 0;">CHANGE OF EXPERT FROM THE FIELD OF RESEARCH</div>
          <div style="display: flex; justify-content: space-around; font-size: 8pt; font-weight: bold; margin-bottom: 2px;">
            <span style="text-decoration: underline;">DELETE</span>
            <span style="text-decoration: underline;">ADD</span>
          </div>
          <div style="display: flex; gap: 14px; font-size: 8pt;">
            <div style="flex: 1;">
              <div>3. Name: <span class="field-underline" style="width: 170px;">${data.expDelName || ''}</span></div>
              <div>Institution Name: <span class="field-underline" style="width: 140px;">${data.expDelInst || ''}</span></div>
              <div>Contact No: <span class="field-underline" style="width: 160px;">${data.expDelContact || ''}</span></div>
              <div>Email: <span class="field-underline" style="width: 180px;">${data.expDelEmail || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 170px;"></span></div>
            </div>
            <div style="flex: 1;">
              <div>Name: <span class="field-underline" style="width: 190px;">${data.expAddName || ''}</span></div>
              <div>Institution Name: <span class="field-underline" style="width: 150px;">${data.expAddInst || ''}</span></div>
              <div>Contact No: <span class="field-underline" style="width: 170px;">${data.expAddContact || ''}</span></div>
              <div>Email: <span class="field-underline" style="width: 190px;">${data.expAddEmail || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 180px;"></span></div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; margin: 4px 0 4px 0; font-size: 8pt;">
            <div>Dated: <span class="field-underline" style="width: 120px;">${data.studentDated || ''}</span></div>
            <div style="text-align: right;"><span class="field-underline" style="width: 180px;"></span><br/>Signature of Student</div>
          </div>

          <div style="border-top: 1px solid #000; padding-top: 2px;">
            <div class="official-section-title" style="font-size: 8.5pt; margin: 2px 0;">APPROVAL OF DOCTORAL COMMITTEE</div>
            <div style="display: flex; justify-content: space-between; margin-top: 1px; font-size: 8pt;">
              <div>Meeting No: <span class="field-underline" style="width: 100px;">${data.meetingNo || ''}</span></div>
              <div>Agenda Item No.: <span class="field-underline" style="width: 90px;">${data.agendaItemNo || ''}</span></div>
              <div>Dated: <span class="field-underline" style="width: 100px;">${data.commDated || ''}</span></div>
            </div>
          </div>

          <div class="signature-row" style="margin-top: 4px; font-size: 8pt;">
            <div class="signature-col">
              <div class="official-section-title" style="font-size: 8.5pt; text-align: left; margin-bottom: 2px;">DEPARTMENTAL APPROVAL</div>
              <div class="signature-line" style="margin-top: 6px;"></div>
              <div>Name of HoD / Head of Graduate Programs: <span class="field-underline" style="width: 140px;">${data.hodName || ''}</span></div>
              <div>Dated: <span class="field-underline" style="width: 120px;">${data.hodDated || ''}</span></div>
            </div>
            <div class="signature-col" style="text-align: right;">
              <div class="official-section-title" style="font-size: 8.5pt; text-align: right; margin-bottom: 2px;">COUNTERSIGNED BY DEAN</div>
              <div class="signature-line" style="margin-top: 6px; margin-left: auto; width: 80%;"></div>
              <div>Name: <span class="field-underline" style="width: 160px;">${data.deanName || ''}</span></div>
              <div>Dated: <span class="field-underline" style="width: 120px;">${data.deanDated || ''}</span></div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 3px; font-size: 7pt;">
            <strong>Distribution:</strong> 1 copy each to Examination Department, Dean, office of DAASR, in student’s dossier, the student and each member of GSEC.
          </div>
        </div>
      </div>
    `
  },

  // 5. Form PhD-3
  'phd-03': {
    id: 'phd-03',
    code: 'Form PhD-3',
    title: 'MINUTES OF GSEC MEETING',
    subtitle: '',
    stage: 'gsec',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      discipline: 'Computer Science',
      department: 'Computer Science',
      campus: 'Main',
      researchTopic: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      lastMeetingDate: '2025-10-12',
      meetingDate: '2026-04-14',
      agenda1: 'Evaluation of Coursework results and Comprehensive Examination preparedness.',
      decision1: 'Candidate cleared all 18 credit hours coursework with CGPA 3.67. Approved to appear in Comprehensive Exam.',
      agenda2: 'Review of Literature Survey and Preliminary Research Methodology.',
      decision2: 'Literature review accepted. GSEC advised focusing on lightweight PBFT variants for latency reduction.',
      agenda3: 'Drafting of research proposal defense schedule.',
      decision3: 'Proposal defense scheduled tentatively for July 2026.',
      agenda4: '',
      decision4: '',
      agenda5: '',
      decision5: '',
      supName: 'Prof. Dr. Muhammad Tariq Khan',
      coSupName: 'Dr. Aisha Siddiqui',
      exp1Name: 'Prof. Dr. Asim Imdad Wagan',
      exp2Name: 'Dr. Farrukh Nadeem',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-04-16'
    },
    fields: [
      { name: 'studentName', label: 'Student Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No', type: 'text' },
      { name: 'discipline', label: 'Discipline', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'campus', label: 'Campus', type: 'select', options: ['Main', 'North', 'Gulshan', 'M-9', 'Airport', 'H-9 Islamabad', 'Hyderabad', 'Chak Shahzad'] },
      { name: 'researchTopic', label: 'Research Topic', type: 'textarea', rows: 2 },
      { name: 'lastMeetingDate', label: 'Date of last meeting', type: 'date' },
      { name: 'meetingDate', label: 'Meeting Held On Date', type: 'date' },
      { name: 'agenda1', label: 'Agenda Point 1', type: 'text' },
      { name: 'decision1', label: 'Decision 1', type: 'text' },
      { name: 'agenda2', label: 'Agenda Point 2', type: 'text' },
      { name: 'decision2', label: 'Decision 2', type: 'text' },
      { name: 'agenda3', label: 'Agenda Point 3', type: 'text' },
      { name: 'decision3', label: 'Decision 3', type: 'text' },
      { name: 'agenda4', label: 'Agenda Point 4', type: 'text' },
      { name: 'decision4', label: 'Decision 4', type: 'text' },
      { name: 'agenda5', label: 'Agenda Point 5', type: 'text' },
      { name: 'decision5', label: 'Decision 5', type: 'text' },
      { name: 'supName', label: 'Supervisor Name', type: 'text' },
      { name: 'coSupName', label: 'Co-Supervisor Name', type: 'text' },
      { name: 'exp1Name', label: '1st Expert Name', type: 'text' },
      { name: 'exp2Name', label: '2nd Expert Name', type: 'text' },
      { name: 'hodName', label: 'HoD / Head of Graduate Programs', type: 'text' },
      { name: 'hodDated', label: 'HoD Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 10mm 15mm 6mm 15mm;">
        <div class="iu-official-header">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-3</div>
            <div class="doc-program">DOCTORAL PROGRAM OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title underlined" style="margin-top: 6px; margin-bottom: 10px; font-size: 11pt;">
          MINUTES OF GSEC MEETING
        </div>

        <div style="font-size: 9pt; line-height: 1.35;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div>Student Name: <span class="field-underline" style="width: 280px; font-weight: bold;">${data.studentName || ''}</span></div>
            <div>Reg. No: <span class="field-underline" style="width: 170px; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div>Discipline: <span class="field-underline" style="width: 240px;">${data.discipline || ''}</span></div>
            <div>Department: <span class="field-underline" style="width: 210px;">${data.department || ''}</span></div>
          </div>

          <div style="margin-bottom: 4px;">
            Campus: 
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Main' ? 'checked' : ''}"></span> Main</span>
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'North' ? 'checked' : ''}"></span> North</span>
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Gulshan' ? 'checked' : ''}"></span> Gulshan</span>
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'M-9' ? 'checked' : ''}"></span> M-9</span>
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Airport' ? 'checked' : ''}"></span> Airport</span>
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'H-9 Islamabad' ? 'checked' : ''}"></span> H-9 Islamabad</span>
            <br/>
            <span style="margin-left: 55px;">
              <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Hyderabad' ? 'checked' : ''}"></span> Hyderabad</span>
              <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Chak Shahzad' ? 'checked' : ''}"></span> Chak Shahzad</span>
            </span>
          </div>

          <div style="margin-bottom: 4px;">
            Research Topic: <span class="field-underline auto-scale-text" style="width: 82%;">${data.researchTopic || ''}</span>
          </div>

          <div style="margin-bottom: 6px;">
            Date of last meeting: <span class="field-underline" style="width: 220px;">${data.lastMeetingDate || ''}</span>
          </div>

          <table class="doc-table" style="margin: 4px 0 6px 0;">
            <thead>
              <tr>
                <th style="width: 45%; text-decoration: underline;">Agenda Points</th>
                <th style="width: 55%; text-decoration: underline;">Decision(s) Taken</th>
              </tr>
            </thead>
            <tbody>
              <tr style="height: 30px;">
                <td style="font-size: 8.5pt;">${data.agenda1 || ''}</td>
                <td style="font-size: 8.5pt;">${data.decision1 || ''}</td>
              </tr>
              <tr style="height: 30px;">
                <td style="font-size: 8.5pt;">${data.agenda2 || ''}</td>
                <td style="font-size: 8.5pt;">${data.decision2 || ''}</td>
              </tr>
              <tr style="height: 30px;">
                <td style="font-size: 8.5pt;">${data.agenda3 || ''}</td>
                <td style="font-size: 8.5pt;">${data.decision3 || ''}</td>
              </tr>
              <tr style="height: 26px;">
                <td style="font-size: 8.5pt;">${data.agenda4 || ''}</td>
                <td style="font-size: 8.5pt;">${data.decision4 || ''}</td>
              </tr>
              <tr style="height: 26px;">
                <td style="font-size: 8.5pt;">${data.agenda5 || ''}</td>
                <td style="font-size: 8.5pt;">${data.decision5 || ''}</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-bottom: 3px;">
            <span style="font-weight: bold; text-decoration: underline;">GSEC Members attending:</span> The meeting was held on <span class="field-underline" style="width: 120px; font-weight: bold;">${data.meetingDate || ''}</span>, following members attended:-
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px 14px; font-size: 8.5pt; margin-bottom: 4px;">
            <div>1. Name: <span class="field-underline" style="width: 140px;">${data.supName || ''}</span><br/>&nbsp;&nbsp;&nbsp;(Supervisor)<br/>Signature: <span class="field-underline" style="width: 130px;"></span></div>
            <div>2. Name: <span class="field-underline" style="width: 140px;">${data.coSupName || ''}</span><br/>&nbsp;&nbsp;&nbsp;(Co-supervisor)<br/>Signature: <span class="field-underline" style="width: 130px;"></span></div>
            <div>3. Name: <span class="field-underline" style="width: 140px;">${data.exp1Name || ''}</span><br/>&nbsp;&nbsp;&nbsp;(1st Expert from the field of research)<br/>Signature: <span class="field-underline" style="width: 130px;"></span></div>
            <div>4. Name: <span class="field-underline" style="width: 140px;">${data.exp2Name || ''}</span><br/>&nbsp;&nbsp;&nbsp;(2nd Expert from the field of research)<br/>Signature: <span class="field-underline" style="width: 130px;"></span></div>
          </div>

          <div class="official-section-title" style="font-size: 9.5pt; margin: 6px 0 2px 0;">COUNTERSIGNED BY</div>

          <div class="signature-row" style="margin-top: 2px;">
            <div class="signature-col">
              <div>Name: <span class="field-underline" style="width: 180px;">${data.hodName || ''}</span></div>
              <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 140px;">${data.hodDated || ''}</span></div>
            </div>
            <div class="signature-col" style="text-align: right;">
              <div class="signature-line" style="margin-top: 14px; margin-left: auto; width: 75%;"></div>
              <div>HoD / Head of Graduate Programs</div>
            </div>
          </div>

          <div class="doc-notes" style="margin-top: 4px; font-size: 7pt; color: #000;">
            <span style="text-decoration: underline; font-weight: bold;">Notes:</span><br/>
            1. GSEC meetings of each PhD student will be held after every six months till completion of PhD program. First meeting will however be held immediately after formulation of GSEC i.e., within 30 days of student's admission.<br/>
            2. At least 2 members (including supervisor) should be present during the meeting to fulfill the quorum requirement.<br/>
            3. Agenda of the meeting will be decided by the supervisor in consultation with the student; Agenda points may include: - coursework to be undertaken, Qualifying Exam, Guidance on research work or any other point. Additional sheet may be used/attached (if required).
          </div>

          <div class="doc-distribution" style="margin-top: 3px; font-size: 7pt;">
            <strong>Distribution:</strong> 3x copies; 1x copy with the department, 1x copy with the student (for record) and 1x copy will be forwarded to office DAASR.
          </div>
        </div>
      </div>
    `
  },

  // 6. Comprehensive Exam Supervisor Approval Form
  'phd-comp-sup': {
    id: 'phd-comp-sup',
    code: 'IU-COMP-SUP',
    title: 'PHD COMPREHENSIVE EXAMINATION — SUPERVISOR APPROVAL FORM',
    subtitle: '',
    stage: 'comprehensive',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      department: 'Computer Science',
      campus: 'Main Campus',
      program: 'PhD (Computer Science)',
      email: 'zubair.siddiqui@gmail.com',
      contactNumber: '+92 301 9876543',
      c1Code: 'CS-801', c1Title: 'Advanced Distributed Systems', c1Cr: '3', c1Sem: 'Fall 2024', c1Grade: 'A',
      c2Code: 'CS-805', c2Title: 'Cryptographic Protocols & Blockchain', c2Cr: '3', c2Sem: 'Fall 2024', c2Grade: 'A-',
      c3Code: 'CS-810', c3Title: 'Advanced Algorithm Design', c3Cr: '3', c3Sem: 'Fall 2024', c3Grade: 'B+',
      c4Code: 'CS-815', c4Title: 'Machine Learning for Healthcare', c4Cr: '3', c4Sem: 'Spring 2025', c4Grade: 'A',
      c5Code: 'CS-820', c5Title: 'Cloud Computing Infrastructure', c5Cr: '3', c5Sem: 'Spring 2025', c5Grade: 'A',
      c6Code: 'CS-825', c6Title: 'Research Methodology & Ethics', c6Cr: '3', c6Sem: 'Spring 2025', c6Grade: 'A',
      c7Code: '', c7Title: '', c7Cr: '', c7Sem: '', c7Grade: '',
      allCoursesCompleted: true,
      candidateDate: '2025-09-10',
      supName: 'Prof. Dr. Muhammad Tariq Khan',
      supEmail: 'tariq.khan@iqra.edu.pk',
      supDept: 'Computer Science',
      supContact: '+92 300 1234567',
      isRecommended: true,
      supComments: 'The candidate has successfully completed the coursework with outstanding performance (CGPA 3.78). Prepared for comprehensive evaluation.',
      supDated: '2025-09-12'
    },
    fields: [
      { name: 'studentName', label: 'Student’s Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No (xxx-xx-xxxxx)', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'campus', label: 'Campus', type: 'text' },
      { name: 'program', label: 'Program', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'contactNumber', label: 'Contact Number', type: 'text' },
      { name: 'allCoursesCompleted', label: 'All courses completed checkbox', type: 'checkbox' },
      { name: 'candidateDate', label: 'Candidate Declaration Date', type: 'date' },
      { name: 'supName', label: 'Supervisor Name', type: 'text' },
      { name: 'supEmail', label: 'Supervisor Email', type: 'email' },
      { name: 'supDept', label: 'Supervisor Dept', type: 'text' },
      { name: 'supContact', label: 'Supervisor Contact Number', type: 'text' },
      { name: 'isRecommended', label: 'Supervisor Recommendation (Recommended / Not)', type: 'checkbox' },
      { name: 'supComments', label: 'Supervisor Comments', type: 'textarea', rows: 2 },
      { name: 'supDated', label: 'Supervisor Date', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 10mm 15mm 10mm 15mm;">
        <div class="iu-official-header" style="margin-bottom: 6px;">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
        </div>

        <div class="doc-main-title underlined" style="margin: 6px 0 14px 0; font-size: 11pt;">
          PHD COMPREHENSIVE EXAMINATION — SUPERVISOR APPROVAL FORM
        </div>

        <div style="font-size: 9pt; line-height: 1.4;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
            <div>Student’s Name: <span class="field-underline" style="width: 240px; font-weight: bold;">${data.studentName || ''}</span></div>
            <div>Reg. No (xxx-xx-xxxxx): <span class="field-underline" style="width: 170px; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
            <div>Department: <span class="field-underline" style="width: 255px;">${data.department || ''}</span></div>
            <div>Campus: <span class="field-underline" style="width: 220px;">${data.campus || ''}</span></div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
            <div>Program: <span class="field-underline" style="width: 275px;">${data.program || ''}</span></div>
            <div>Email: <span class="field-underline" style="width: 235px;">${data.email || ''}</span></div>
          </div>
          <div style="margin-bottom: 10px;">
            Contact Number: <span class="field-underline" style="width: 78%;">${data.contactNumber || ''}</span>
          </div>

          <div class="official-section-title" style="font-size: 9.5pt; margin: 8px 0 6px 0;">
            COURSEWORK RECORD
          </div>
          <table class="doc-table" style="margin: 4px 0 6px 0; font-size: 8.5pt;">
            <thead>
              <tr>
                <th style="width: 5%;">S. #</th>
                <th style="width: 15%;">COURSE CODE</th>
                <th style="width: 44%;">COURSE TITLE</th>
                <th style="width: 12%;">CREDIT HOURS</th>
                <th style="width: 12%;">SEMESTER</th>
                <th style="width: 12%;">GRADE OBTAINED</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="text-align:center;">1.</td><td>${data.c1Code || ''}</td><td>${data.c1Title || ''}</td><td style="text-align:center;">${data.c1Cr || ''}</td><td style="text-align:center;">${data.c1Sem || ''}</td><td style="text-align:center; font-weight:bold;">${data.c1Grade || ''}</td></tr>
              <tr><td style="text-align:center;">2.</td><td>${data.c2Code || ''}</td><td>${data.c2Title || ''}</td><td style="text-align:center;">${data.c2Cr || ''}</td><td>${data.c2Sem || ''}</td><td style="text-align:center; font-weight:bold;">${data.c2Grade || ''}</td></tr>
              <tr><td style="text-align:center;">3.</td><td>${data.c3Code || ''}</td><td>${data.c3Title || ''}</td><td style="text-align:center;">${data.c3Cr || ''}</td><td>${data.c3Sem || ''}</td><td style="text-align:center; font-weight:bold;">${data.c3Grade || ''}</td></tr>
              <tr><td style="text-align:center;">4.</td><td>${data.c4Code || ''}</td><td>${data.c4Title || ''}</td><td style="text-align:center;">${data.c4Cr || ''}</td><td>${data.c4Sem || ''}</td><td style="text-align:center; font-weight:bold;">${data.c4Grade || ''}</td></tr>
              <tr><td style="text-align:center;">5.</td><td>${data.c5Code || ''}</td><td>${data.c5Title || ''}</td><td style="text-align:center;">${data.c5Cr || ''}</td><td>${data.c5Sem || ''}</td><td style="text-align:center; font-weight:bold;">${data.c5Grade || ''}</td></tr>
              <tr><td style="text-align:center;">6.</td><td>${data.c6Code || ''}</td><td>${data.c6Title || ''}</td><td style="text-align:center;">${data.c6Cr || ''}</td><td>${data.c6Sem || ''}</td><td style="text-align:center; font-weight:bold;">${data.c6Grade || ''}</td></tr>
              <tr><td style="text-align:center;">7.</td><td>${data.c7Code || ''}</td><td>${data.c7Title || ''}</td><td style="text-align:center;">${data.c7Cr || ''}</td><td>${data.c7Sem || ''}</td><td style="text-align:center; font-weight:bold;">${data.c7Grade || ''}</td></tr>
            </tbody>
          </table>

          <div style="margin: 6px 0 10px 0;">
            <span class="iu-checkbox"><span class="iu-box ${data.allCoursesCompleted ? 'checked' : ''}"></span> All courses completed as per program requirements.</span>
          </div>

          <div class="official-section-title" style="font-size: 9.5pt; margin: 8px 0 4px 0;">
            CANDIDATE DECLARATION
          </div>
          <p style="margin-top: 4px; line-height: 1.4;">
            I, <span class="field-underline" style="width: 220px; font-weight: bold;">${data.studentName || ''}</span>, hereby confirm that the above information is accurate and that I have fulfilled the eligibility criteria as per university policy. I wish to appear in the upcoming PhD Comprehensive Examination.
          </p>
          <div class="signature-row" style="margin-top: 14px;">
            <div>Signature of Candidate: <span class="field-underline" style="width: 200px;"></span></div>
            <div>Date: <span class="field-underline" style="width: 120px;">${data.candidateDate || ''}</span></div>
          </div>

          <div class="official-section-title" style="font-size: 9.5pt; margin: 12px 0 4px 0;">
            SUPERVISOR RECOMMENDATION
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 4px;">
            <div>Name: <span class="field-underline" style="width: 250px;">${data.supName || ''}</span></div>
            <div>Email: <span class="field-underline" style="width: 230px;">${data.supEmail || ''}</span></div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 3px;">
            <div>Dept: <span class="field-underline" style="width: 256px;">${data.supDept || ''}</span></div>
            <div>Contact Number: <span class="field-underline" style="width: 190px;">${data.supContact || ''}</span></div>
          </div>

          <div style="margin: 8px 0;">
            <span class="iu-checkbox"><span class="iu-box ${data.isRecommended ? 'checked' : ''}"></span> Recommended</span>
            <span class="iu-checkbox" style="margin-left: 20px;"><span class="iu-box ${!data.isRecommended ? 'checked' : ''}"></span> Not Recommended</span>
          </div>

          <div>Comments (if any):</div>
          <div class="field-underline auto-scale-text" style="width: 100%; min-height: 20px; margin-top: 2px;">${data.supComments || ''}</div>
          <div style="border-bottom: 1px solid #000; height: 18px; margin-top: 2px;"></div>
          <div style="border-bottom: 1px solid #000; height: 18px; margin-top: 2px;"></div>

          <div class="signature-row" style="margin-top: 16px;">
            <div>Supervisor’s Signature: <span class="field-underline" style="width: 200px;"></span></div>
            <div>Date: <span class="field-underline" style="width: 120px;">${data.supDated || ''}</span></div>
          </div>
        </div>
      </div>
    `
  },

  // 7. Form PhD-4
  'phd-04': {
    id: 'phd-04',
    code: 'Form PhD-4',
    title: 'REPORT OF COMPREHENSIVE EXAMINATION',
    subtitle: '',
    stage: 'comprehensive',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      department: 'Computer Science',
      campus: 'Main',
      att1Date: '2025-10-15',
      att1Written: '82',
      att1Oral: '88',
      att1Total: '85',
      att1Result: 'PASS',
      att1PreConditions: 'N/A — Qualified in first attempt.',
      att1PropDate: '',
      att1SupDated: '2025-10-16',
      att2Date: '',
      att2Written: '',
      att2Oral: '',
      att2Total: '',
      att2Result: '',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2025-10-18',
      deanName: 'Prof. Dr. Mirza Amin',
      deanDated: '2025-10-20'
    },
    fields: [
      { name: 'studentName', label: 'Student Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'campus', label: 'Campus', type: 'select', options: ['Main', 'North', 'Gulshan', 'M-9', 'Airport', 'H-9 Islamabad', 'Hyderabad', 'Chak Shahzad'] },
      { name: 'att1Date', label: '1st Attempt Date', type: 'date' },
      { name: 'att1Written', label: '1st Attempt Written Marks', type: 'text' },
      { name: 'att1Oral', label: '1st Attempt Oral Marks', type: 'text' },
      { name: 'att1Total', label: '1st Attempt Total Marks', type: 'text' },
      { name: 'att1Result', label: '1st Attempt Result', type: 'select', options: ['PASS', 'FAIL'] },
      { name: 'att1PreConditions', label: 'Pre-conditions for 2nd Attempt (if failed)', type: 'textarea', rows: 2 },
      { name: 'att1PropDate', label: 'Proposed Date for 2nd Attempt', type: 'date' },
      { name: 'att1SupDated', label: 'Supervisor Signature Dated', type: 'date' },
      { name: 'att2Date', label: '2nd Attempt Date (if applicable)', type: 'date' },
      { name: 'att2Written', label: '2nd Attempt Written Marks', type: 'text' },
      { name: 'att2Oral', label: '2nd Attempt Oral Marks', type: 'text' },
      { name: 'att2Total', label: '2nd Attempt Total Marks', type: 'text' },
      { name: 'att2Result', label: '2nd Attempt Result', type: 'select', options: ['', 'PASS', 'FAIL'] },
      { name: 'hodName', label: 'HoD Name', type: 'text' },
      { name: 'hodDated', label: 'HoD Dated', type: 'date' },
      { name: 'deanName', label: 'Dean Name', type: 'text' },
      { name: 'deanDated', label: 'Dean Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 10mm 15mm 8mm 15mm;">
        <div class="iu-official-header" style="margin-bottom: 2px;">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-4</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title" style="margin: 4px 0 10px 0; font-size: 11pt; font-weight: bold; text-align: center;">
          REPORT OF COMPREHENSIVE EXAMINATION
        </div>

        <div style="font-size: 9pt; line-height: 1.35;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div style="flex: 2;">Name: <span class="field-underline" style="width: 78%; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Reg. No: <span class="field-underline" style="width: 60%; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>

          <div style="margin-bottom: 5px;">
            Department: <span class="field-underline" style="width: 86%;">${data.department || ''}</span>
          </div>

          <div style="margin-bottom: 8px; font-size: 8.5pt;">
            Campus: &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Main' ? 'checked' : ''}"></span> Main</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'North' ? 'checked' : ''}"></span> North</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Gulshan' ? 'checked' : ''}"></span> Gulshan</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'M-9' ? 'checked' : ''}"></span> M-9</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Airport' ? 'checked' : ''}"></span> Airport</span>
            <div style="margin-left: 65px; margin-top: 3px;">
              <span class="iu-checkbox"><span class="iu-box ${data.campus === 'H-9 Islamabad' ? 'checked' : ''}"></span> H-9 Islamabad</span> &nbsp;&nbsp;&nbsp;&nbsp;
              <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Hyderabad' ? 'checked' : ''}"></span> Hyderabad</span> &nbsp;&nbsp;&nbsp;&nbsp;
              <span class="iu-checkbox"><span class="iu-box ${data.campus === 'Chak Shahzad' ? 'checked' : ''}"></span> Chak Shahzad</span>
            </div>
          </div>

          <div style="border-top: 1px dashed #000; margin: 8px 0 6px 0;"></div>

          <!-- 1st Attempt -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
              <span class="iu-box checked" style="width: 16px; height: 16px; display: inline-block;"></span>
              <span>1<sup>st</sup> Attempt</span>
            </div>
            <div>Date: <span class="field-underline" style="width: 140px;">${data.att1Date || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin: 4px 0 6px 0;">
            <div>Written Examination <span class="field-underline" style="width: 70px; text-align: center; font-weight: bold;">${data.att1Written || ''}</span></div>
            <div>Oral Examination <span class="field-underline" style="width: 70px; text-align: center; font-weight: bold;">${data.att1Oral || ''}</span></div>
            <div>Total Marks Obtained <span class="field-underline" style="width: 70px; text-align: center; font-weight: bold;">${data.att1Total || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: center; gap: 60px; margin: 4px 0 6px 0;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
              <span class="iu-box ${data.att1Result === 'PASS' ? 'checked' : ''}" style="width: 16px; height: 16px; display: inline-block;"></span> PASS
            </div>
            <div style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
              <span class="iu-box ${data.att1Result === 'FAIL' ? 'checked' : ''}" style="width: 16px; height: 16px; display: inline-block;"></span> FAIL
            </div>
          </div>

          <div style="font-size: 8pt; margin: 4px 0 2px 0;">
            List the conditions that must be met beforehand and the date for next Comprehensive Exam in case of failure in first attempt.
          </div>
          <div>
            Pre-conditions for Second Attempt (if any) <span class="field-underline auto-scale-text" style="width: 62%;">${data.att1PreConditions || ''}</span>
          </div>
          <div style="border-bottom: 1px solid #000; height: 16px; margin-bottom: 6px;"></div>

          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 6px;">
            <div>
              Proposed Date for 2<sup>nd</sup> Attempt <span class="field-underline" style="width: 130px;">${data.att1PropDate || ''}</span>
            </div>
            <div style="text-align: left; width: 220px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>Signature of Supervisor</div>
              <div>Dated: <span class="field-underline" style="width: 90px;">${data.att1SupDated || ''}</span></div>
            </div>
          </div>

          <div style="border-top: 1px dashed #000; margin: 8px 0 4px 0;"></div>

          <!-- 2nd Attempt -->
          <div style="text-align: center; font-weight: bold; margin-bottom: 3px;">(To Be Filled For Second Attempt)</div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
              <span class="iu-box ${data.att2Date ? 'checked' : ''}" style="width: 16px; height: 16px; display: inline-block;"></span>
              <span>2<sup>nd</sup> Attempt</span>
            </div>
            <div>Date: <span class="field-underline" style="width: 140px;">${data.att2Date || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin: 4px 0 6px 0;">
            <div>Written Examination <span class="field-underline" style="width: 70px; text-align: center;">${data.att2Written || ''}</span></div>
            <div>Oral Examination <span class="field-underline" style="width: 70px; text-align: center;">${data.att2Oral || ''}</span></div>
            <div>Total Marks Obtained <span class="field-underline" style="width: 70px; text-align: center;">${data.att2Total || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: center; gap: 60px; margin: 4px 0 6px 0;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
              <span class="iu-box ${data.att2Result === 'PASS' ? 'checked' : ''}" style="width: 16px; height: 16px; display: inline-block;"></span> PASS
            </div>
            <div style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
              <span class="iu-box ${data.att2Result === 'FAIL' ? 'checked' : ''}" style="width: 16px; height: 16px; display: inline-block;"></span> FAIL
            </div>
          </div>

          <div style="border-top: 1px dashed #000; margin: 8px 0 6px 0;"></div>

          <!-- Approvals -->
          <div class="official-section-title" style="font-size: 9pt; margin: 4px 0 4px 0; text-align: center;">APPROVED BY</div>
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 6px;">
            <div>
              <div>Name: <span class="field-underline" style="width: 180px;">${data.hodName || ''}</span></div>
              <div style="margin-top: 3px;">Dated: <span class="field-underline" style="width: 140px;">${data.hodDated || ''}</span></div>
            </div>
            <div style="text-align: center; width: 220px;">
              <div class="field-underline" style="width: 100%; margin-bottom: 2px;"></div>
              <div>HoD / Head of Graduate Programs</div>
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
            &bull;&nbsp;&nbsp;1 copy each to Examination Department, Dean, Office of DAASR, in student’s dossier, the student and each member of GSEC.
          </div>
        </div>
      </div>
    `
  }
};
