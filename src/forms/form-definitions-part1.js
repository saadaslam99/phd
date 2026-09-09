// Comprehensive Form Definitions for All 15 Official Iqra University Forms

export const FORMS_DATA = {
  // 1. Form PhD-A
  'phd-a': {
    id: 'phd-a',
    code: 'Form PhD-A',
    title: 'RECOMMENDATIONS FOR ADMISSION TO THE PHD PROGRAM',
    subtitle: '(To be filled by Department) — Part-II SUPERVISOR’S RECOMMENDATIONS',
    stage: 'admission',
    defaults: {
      proposedArea: 'Deep Learning Architectures for Autonomous Medical Imaging Diagnosis with Uncertainty Quantification',
      academicDeficiencies: 'None. The candidate fulfills all eligibility prerequisites as verified by Departmental Admissions Committee.',
      expectedTimePeriod: '3 Years and 6 Months',
      supervisorSpecialization: 'Computer Vision & Healthcare Informatics; 14 peer-reviewed publications directly in Medical Imaging.',
      studentsIU: '2',
      studentsOther: '1',
      studentsTotal: '3',
      supervisorName: 'Dr. Muhammad Tariq Khan',
      supervisorCampus: 'Main Campus',
      supervisorEmail: 'tariq.khan@iqra.edu.pk',
      supervisorCell: '+92 300 1234567',
      coSupervisorName: 'Dr. Aisha Siddiqui',
      coSupervisorCampus: 'North Campus',
      coSupervisorEmail: 'aisha.s@iqra.edu.pk',
      coSupervisorCell: '+92 321 7654321',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-03-15',
      deanName: 'Prof. Dr. Mirza Amin',
      deanDated: '2026-03-18'
    },
    fields: [
      { name: 'proposedArea', label: 'Proposed area of research with brief details', type: 'textarea', rows: 2 },
      { name: 'academicDeficiencies', label: 'Academic deficiencies / Pre-requisites / special conditions', type: 'textarea', rows: 2 },
      { name: 'expectedTimePeriod', label: 'Expected time period (in years & months)', type: 'text' },
      { name: 'supervisorSpecialization', label: 'Area of specialization of supervisor & relevance', type: 'textarea', rows: 2 },
      { name: 'studentsIU', label: 'Iqra University PhD Students Registered', type: 'text' },
      { name: 'studentsOther', label: 'Students of any other university', type: 'text' },
      { name: 'studentsTotal', label: 'Total PhD Students with Supervisor', type: 'text' },
      { name: 'supervisorName', label: 'Supervisor Name', type: 'text' },
      { name: 'supervisorCampus', label: 'Supervisor Campus', type: 'text' },
      { name: 'supervisorEmail', label: 'Supervisor Email', type: 'email' },
      { name: 'supervisorCell', label: 'Supervisor Cell No', type: 'text' },
      { name: 'coSupervisorName', label: 'Co-Supervisor Name (if any)', type: 'text' },
      { name: 'coSupervisorCampus', label: 'Co-Supervisor Campus', type: 'text' },
      { name: 'coSupervisorEmail', label: 'Co-Supervisor Email', type: 'email' },
      { name: 'coSupervisorCell', label: 'Co-Supervisor Cell No', type: 'text' },
      { name: 'hodName', label: 'HoD / Head of Graduate Programs Name', type: 'text' },
      { name: 'hodDated', label: 'HoD Dated', type: 'date' },
      { name: 'deanName', label: 'Dean Name', type: 'text' },
      { name: 'deanDated', label: 'Dean Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 6mm 14mm 6mm 14mm;">
        <div class="iu-official-header">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-A</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title" style="margin: 4px 0 2px 0; font-size: 10.5pt;">
          RECOMMENDATIONS FOR ADMISSION TO THE PHD PROGRAM
        </div>
        <div class="doc-subtitle" style="margin-bottom: 6px; font-size: 8.5pt;">(To be filled by Department)</div>

        <div class="official-section-title" style="font-size: 9pt; margin: 4px 0 4px 0;">
          Part-I: PARTICULARS OF THE STUDENT
        </div>

        <div style="font-size: 8pt; line-height: 1.25;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
            <div style="flex: 1;">Name: <span class="field-underline" style="width: 230px; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1;">Father’s Name: <span class="field-underline" style="width: 220px;">${data.fatherName || ''}</span></div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
            <div style="flex: 1;">Campus: <span class="field-underline" style="width: 220px;">${data.campus || ''}</span></div>
            <div style="flex: 1;">Department: <span class="field-underline" style="width: 230px;">${data.department || ''}</span></div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
            <div style="width: 45%;">CNIC No: <span class="field-underline" style="width: 170px;">${data.cnic || ''}</span></div>
            <div style="width: 55%;">Mailing Address: <span class="field-underline" style="width: 215px;">${data.address || ''}</span></div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
            <div style="flex: 1;">Email: <span class="field-underline" style="width: 230px;">${data.email || ''}</span></div>
            <div style="flex: 1;">Cell No: <span class="field-underline" style="width: 240px;">${data.cellNo || ''}</span></div>
          </div>

          <!-- Degrees -->
          <div style="margin-bottom: 2px;">
            Bachelors in <span class="field-underline" style="width: 170px;">${data.bachelorsDegree || ''}</span>
            From <span class="field-underline" style="width: 200px;">${data.bachelorsInst || ''}</span>
            Year <span class="field-underline" style="width: 45px; text-align: center;">${data.bachelorsYear || ''}</span>
            CGPA/ % age <span class="field-underline" style="width: 50px; text-align: center;">${data.bachelorsCgpa || ''}</span>
          </div>
          <div style="margin-bottom: 2px;">
            Masters (MSc) in <span class="field-underline" style="width: 145px;">${data.mastersDegree || ''}</span>
            From <span class="field-underline" style="width: 200px;">${data.mastersInst || ''}</span>
            Year <span class="field-underline" style="width: 45px; text-align: center;">${data.mastersYear || ''}</span>
            CGPA/ % age <span class="field-underline" style="width: 50px; text-align: center;">${data.mastersCgpa || ''}</span>
          </div>
          <div style="margin-bottom: 2px;">
            MS/MPhil in <span class="field-underline" style="width: 165px;">${data.msDegree || ''}</span>
            From <span class="field-underline" style="width: 200px;">${data.msInst || ''}</span>
            Year <span class="field-underline" style="width: 45px; text-align: center;">${data.msYear || ''}</span>
            CGPA/ % age <span class="field-underline" style="width: 50px; text-align: center;">${data.msCgpa || ''}</span>
          </div>

          <div style="margin-bottom: 1px;">
            GAT General/GRE General / Graduate -IU Entrance Test / HAT General Test Score:
            <span class="field-underline" style="width: 110px; font-weight: bold; text-align: center;">${data.gatScore || ''}</span>
          </div>
          <div style="margin-bottom: 1px;">
            For intra-disciplinary qualifications, GRE Subject Test/ IU Subject Test Score:
            <span class="field-underline" style="width: 110px; text-align: center;">${data.greScore || ''}</span>
          </div>
          <div style="font-style: italic; font-size: 7pt; margin-bottom: 3px;">(Attach a copy of the Score Report)</div>

          <div class="official-section-title" style="font-size: 9pt; margin: 3px 0 3px 0;">
            Part-II SUPERVISOR’S RECOMMENDATIONS
          </div>

          <div style="margin-bottom: 2px;">
            a. Proposed area of research with brief details <i>(use additional sheet)</i>:
            <span class="field-underline" style="width: 50%;">${data.proposedArea || ''}</span>
          </div>
          <div style="margin-bottom: 2px;">
            b. Academic deficiencies/Pre-requisites/special conditions if any required to be fulfilled by the student or Campuses, before finally admitting the student <i>(use additional sheet)</i>:
            <span class="field-underline" style="width: 25%;">${data.academicDeficiencies || ''}</span>
          </div>
          <div style="margin-bottom: 2px;">
            c. Expected time period (in years and months) for completion of research/PhD program:
            <span class="field-underline" style="width: 200px;">${data.expectedTimePeriod || ''}</span>
          </div>
          <div style="margin-bottom: 2px;">
            d. Area of specialization of the supervisor and its relevance to the proposed research interest <i>(use additional sheet)</i>:
            <span class="field-underline" style="width: 30%;">${data.supervisorSpecialization || ''}</span>
          </div>

          <div style="margin-bottom: 3px;">
            e. No of PhD students already registered with the Supervisor: <span style="margin-left: 20px;">:</span> <span class="field-underline" style="width: 100px; text-align: center;">${data.studentsTotal || ''}</span><br/>
            <span style="margin-left: 15px;">(1) IQRA University Students</span> <span style="margin-left: 95px;">:</span> <span class="field-underline" style="width: 100px; text-align: center;">${data.studentsIU || ''}</span><br/>
            <span style="margin-left: 15px;">(2) Students of any other university</span> <span style="margin-left: 54px;">:</span> <span class="field-underline" style="width: 100px; text-align: center;">${data.studentsOther || ''}</span>
          </div>

          <div style="margin-bottom: 2px;">
            Supervisor’s Name: <span class="field-underline" style="width: 200px;">${data.supervisorName || ''}</span>
            Campus: <span class="field-underline" style="width: 110px;">${data.supervisorCampus || ''}</span>
            Signature: <span class="field-underline" style="width: 110px;"></span>
          </div>
          <div style="margin-bottom: 2px;">
            Email: <span class="field-underline" style="width: 260px;">${data.supervisorEmail || ''}</span>
            Cell No. <span class="field-underline" style="width: 180px;">${data.supervisorCell || ''}</span>
          </div>

          <div style="margin-bottom: 2px;">
            Co-Supervisor Name (If any): <span class="field-underline" style="width: 175px;">${data.coSupervisorName || ''}</span>
            Campus: <span class="field-underline" style="width: 110px;">${data.coSupervisorCampus || ''}</span>
            Signature: <span class="field-underline" style="width: 110px;"></span>
          </div>
          <div style="margin-bottom: 3px;">
            Email: <span class="field-underline" style="width: 260px;">${data.coSupervisorEmail || ''}</span>
            Cell No. <span class="field-underline" style="width: 180px;">${data.coSupervisorCell || ''}</span>
          </div>

          <div style="text-align: center; font-weight: bold; margin-top: 2px;">RECOMMENDED BY</div>
          <div style="text-align: center; font-size: 7.5pt; font-style: italic; margin-bottom: 2px;">
            (Give reasons if the applicant is not accepted for the PhD program, use additional sheet if required)
          </div>

          <div class="signature-row" style="margin-top: 8px; font-size: 8pt;">
            <div class="signature-col" style="width: 48%;">
              <div class="signature-line" style="border-top: 1px solid #000; border-bottom: none; height: 1px;"></div>
              <div>HoD / Head of Graduate Programs</div>
              <div style="margin-top: 2px;">Name: <span class="field-underline" style="width: 170px;">${data.hodName || ''}</span></div>
              <div>Dated: <span class="field-underline" style="width: 140px;">${data.hodDated || ''}</span></div>
            </div>
            <div class="signature-col" style="width: 48%; text-align: right;">
              <div class="signature-line" style="border-top: 1px solid #000; border-bottom: none; height: 1px; width: 80%; margin-left: auto;"></div>
              <div>Dean</div>
              <div style="margin-top: 2px;">Name: <span class="field-underline" style="width: 170px;">${data.deanName || ''}</span></div>
              <div>Dated: <span class="field-underline" style="width: 140px;">${data.deanDated || ''}</span></div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 4px; font-size: 7pt;">
            <strong>Distribution:</strong><br/>
            • 1 x Original copy each to office of DAASR, Examination Department at Main Campus, IU and student dossier at constituent campus.<br/>
            • 1 x photocopy to supervisor, student and sponsoring agency
          </div>
        </div>
      </div>
    `
  },

  // 2. Form PhD-B
  'phd-b': {
    id: 'phd-b',
    code: 'Form PhD-B',
    title: 'PROVISIONAL ADMISSION TO THE PhD PROGRAM',
    subtitle: '(To be filled by Admission Department)',
    stage: 'admission',
    defaults: {
      faculty: 'FEST',
      studentName: 'Syed Ali Hamza',
      dateOfBirth: '1995-04-12',
      fatherName: 'Syed Tariq Hussain',
      regNo: 'PhD-CS-2026-0042',
      cnicNo: '42101-1234567-1',
      mobileNo: '+92 333 1234567',
      odooId: 'OD-78921',
      email: 'ali.hamza@gmail.com',
      campus: 'Main Campus',
      department: 'Computer Science',
      proposedArea: 'Artificial Intelligence & Explainable Neuromorphic Computing',
      supervisor: 'Prof. Dr. Muhammad Tariq Khan',
      coSupervisor: 'Dr. Aisha Siddiqui',
      sponsoringAgency: 'Higher Education Commission (HEC) Indigenous Fellowship',
      dateOfProvisionalAdmission: '2026-03-20',
      directorAdmissionsName: 'Engr. Farhan Lodhi',
      directorAdmissionsDate: '2026-03-21',
      daasrDirectorName: 'Prof. Dr. Zeeshan Ul Hassan',
      daasrDirectorDate: '2026-03-22'
    },
    fields: [
      { name: 'faculty', label: 'Faculty', type: 'select', options: ['FBA', 'FADESS', 'FEST', 'FMS'] },
      { name: 'studentName', label: 'Student Name', type: 'text' },
      { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
      { name: 'fatherName', label: 'Father’s Name', type: 'text' },
      { name: 'regNo', label: 'Registration No', type: 'text' },
      { name: 'cnicNo', label: 'CNIC No', type: 'text' },
      { name: 'mobileNo', label: 'Mobile No', type: 'text' },
      { name: 'odooId', label: 'Odoo ID', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'campus', label: 'Campus', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'proposedArea', label: 'Proposed Area of Research', type: 'text' },
      { name: 'supervisor', label: 'Supervisor', type: 'text' },
      { name: 'coSupervisor', label: 'Co-Supervisor (if appointed)', type: 'text' },
      { name: 'sponsoringAgency', label: 'Sponsoring Agency (if any)', type: 'text' },
      { name: 'dateOfProvisionalAdmission', label: 'Date of Provisional Admission', type: 'date' },
      { name: 'directorAdmissionsName', label: 'Director (Admissions) Name', type: 'text' },
      { name: 'directorAdmissionsDate', label: 'Director (Admissions) Date', type: 'date' },
      { name: 'daasrDirectorName', label: 'Director DAASR Name', type: 'text' },
      { name: 'daasrDirectorDate', label: 'Director DAASR Date', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 10mm 15mm 8mm 15mm;">
        <div class="iu-official-header">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-B</div>
            <div class="doc-program">DOCTORAL PROGRAM OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title" style="margin-top: 6px; margin-bottom: 2px;">
          PROVISIONAL ADMISSION TO THE PhD PROGRAM
        </div>
        <div class="doc-subtitle" style="margin-bottom: 12px;">(To be filled by Admission Department)</div>

        <div style="font-size: 9.5pt; line-height: 1.45;">
          <div style="margin-bottom: 12px;">
            Following student is admitted to the PhD Program of IQRA University in the Faculty of:
            <div style="margin-top: 6px; display: flex; gap: 24px;">
              <span class="iu-checkbox"><span class="iu-box ${data.faculty === 'FBA' ? 'checked' : ''}"></span> FBA</span>
              <span class="iu-checkbox"><span class="iu-box ${data.faculty === 'FADESS' ? 'checked' : ''}"></span> FADESS</span>
              <span class="iu-checkbox"><span class="iu-box ${data.faculty === 'FEST' ? 'checked' : ''}"></span> FEST</span>
              <span class="iu-checkbox"><span class="iu-box ${data.faculty === 'FMS' ? 'checked' : ''}"></span> FMS</span>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div style="flex: 2;">Name: <span class="field-underline" style="width: 75%; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Date of Birth: <span class="field-underline" style="width: 60%;">${data.dateOfBirth || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div style="flex: 2;">Father’s Name: <span class="field-underline" style="width: 75%;">${data.fatherName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Registration No: <span class="field-underline" style="width: 55%; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div>CNIC No: <span class="field-underline" style="width: 140px;">${data.cnicNo || ''}</span></div>
            <div>Mobile No: <span class="field-underline" style="width: 130px;">${data.mobileNo || ''}</span></div>
            <div>Odoo ID: <span class="field-underline" style="width: 100px;">${data.odooId || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <div style="flex: 2;">Email: <span class="field-underline" style="width: 80%;">${data.email || ''}</span></div>
            <div style="flex: 1; text-align: right;">Campus: <span class="field-underline" style="width: 65%;">${data.campus || ''}</span></div>
          </div>

          <div style="margin-bottom: 8px;">
            Department: <span class="field-underline" style="width: 85%;">${data.department || ''}</span>
          </div>

          <div style="margin-bottom: 8px;">
            Proposed Area of Research: <span class="field-underline" style="width: 74%;">${data.proposedArea || ''}</span>
          </div>

          <div style="margin-bottom: 8px;">
            Supervisor: <span class="field-underline" style="width: 88%;">${data.supervisor || ''}</span>
          </div>

          <div style="margin-bottom: 8px;">
            Co-Supervisor (if appointed): <span class="field-underline" style="width: 75%;">${data.coSupervisor || ''}</span>
          </div>

          <div style="margin-bottom: 8px;">
            Sponsoring Agency (if any): <span class="field-underline" style="width: 75%;">${data.sponsoringAgency || ''}</span>
          </div>

          <div style="margin-bottom: 14px;">
            Date of Provisional Admission: <span class="field-underline" style="width: 70%; font-weight: bold;">${data.dateOfProvisionalAdmission || ''}</span>
          </div>

          <div class="signature-row" style="margin-top: 24px;">
            <div class="signature-col">
              <div class="signature-line"></div>
              <div style="text-align: center; font-weight: bold;">Director (Admissions)</div>
              <div style="margin-top: 6px;">Name: <span class="field-underline" style="width: 180px;">${data.directorAdmissionsName || ''}</span></div>
              <div>Date: <span class="field-underline" style="width: 140px;">${data.directorAdmissionsDate || ''}</span></div>
            </div>
            <div class="signature-col" style="text-align: right;">
              <div class="signature-line" style="margin-left: auto; width: 85%;"></div>
              <div style="text-align: center; font-weight: bold;">Director Academics, Advanced Studies and Research</div>
              <div style="margin-top: 6px;">Name: <span class="field-underline" style="width: 180px;">${data.daasrDirectorName || ''}</span></div>
              <div>Date: <span class="field-underline" style="width: 140px;">${data.daasrDirectorDate || ''}</span></div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 18px;">
            <strong>Distribution:</strong><br/>
            The admission department will distribute the signed copy of this form to all of the following:<br/>
            • 2 x copies retained at Main Campus (1 each with the Office of DAASR and Examination Department).<br/>
            • 1 x copy of this form shall be maintained in the student’s dossier at the Constituent Campus.<br/>
            • 1 x copy each to Supervisor, Co-Supervisor (if appointed).<br/>
            • 1 x copy for sponsoring organization (if any).<br/>
            • 1 x copy of this form will be retained by the student.
          </div>
        </div>
      </div>
    `
  },

  // 3. Form PhD-1: GSEC Formulation
  'phd-01': {
    id: 'phd-01',
    code: 'Form PhD-1',
    title: 'FORMULATION OF GRADUATE STUDENT EVALUATION COMMITTEE (GSEC)',
    subtitle: '',
    stage: 'gsec',
    defaults: {
      studentName: 'Zubair Ahmed Siddiqui',
      regNo: '023-18-10982',
      department: 'Computer Science',
      campus: 'Main Campus',
      areaOfResearch: 'Secure Distributed Ledger Consensus Mechanisms for Decentralized Healthcare Systems',
      formulationDate: '2026-03-25',
      supName: 'Prof. Dr. Muhammad Tariq Khan',
      supEmail: 'tariq.khan@iqra.edu.pk',
      supDept: 'Computer Science',
      supContact: '+92 300 1234567',
      coSupName: 'Dr. Aisha Siddiqui',
      coSupEmail: 'aisha.s@iqra.edu.pk',
      coSupDept: 'Computer Science',
      coSupContact: '+92 321 7654321',
      exp1Name: 'Prof. Dr. Asim Imdad Wagan',
      exp1Email: 'asim.wagan@iba.edu.pk',
      exp1Dept: 'Computer Science',
      exp1Contact: '+92 333 9876543',
      exp1Org: 'Institute of Business Administration (IBA)',
      exp2Name: 'Dr. Farrukh Nadeem',
      exp2Email: 'farrukh@ned.edu.pk',
      exp2Dept: 'Software Engineering',
      exp2Contact: '+92 345 8765432',
      exp2Org: 'NED University of Engineering & Technology',
      candidateDated: '2026-03-25',
      meetingNo: 'GSEC-48',
      agendaItemNo: '4.2',
      docCommDate: '2026-04-02',
      hodName: 'Prof. Dr. Kamran Raza',
      hodDated: '2026-04-03',
      deanName: 'Prof. Dr. Mirza Amin',
      deanDated: '2026-04-05'
    },
    fields: [
      { name: 'studentName', label: 'Student’s Name', type: 'text' },
      { name: 'regNo', label: 'Reg. No (xxx-xx-xxxxx)', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'campus', label: 'Campus', type: 'text' },
      { name: 'areaOfResearch', label: 'Area of Research', type: 'textarea', rows: 2 },
      { name: 'formulationDate', label: 'Date of formulation of GSEC', type: 'date' },
      { name: 'supName', label: 'Supervisor Name', type: 'text' },
      { name: 'supEmail', label: 'Supervisor Email', type: 'email' },
      { name: 'supDept', label: 'Supervisor Dept', type: 'text' },
      { name: 'supContact', label: 'Supervisor Contact No', type: 'text' },
      { name: 'coSupName', label: 'Co-Supervisor Name', type: 'text' },
      { name: 'coSupEmail', label: 'Co-Supervisor Email', type: 'email' },
      { name: 'coSupDept', label: 'Co-Supervisor Dept', type: 'text' },
      { name: 'coSupContact', label: 'Co-Supervisor Contact No', type: 'text' },
      { name: 'exp1Name', label: '1st Expert Name', type: 'text' },
      { name: 'exp1Email', label: '1st Expert Email', type: 'email' },
      { name: 'exp1Dept', label: '1st Expert Dept', type: 'text' },
      { name: 'exp1Contact', label: '1st Expert Contact No', type: 'text' },
      { name: 'exp1Org', label: '1st Expert Organization', type: 'text' },
      { name: 'exp2Name', label: '2nd Expert Name', type: 'text' },
      { name: 'exp2Email', label: '2nd Expert Email', type: 'email' },
      { name: 'exp2Dept', label: '2nd Expert Dept', type: 'text' },
      { name: 'exp2Contact', label: '2nd Expert Contact No', type: 'text' },
      { name: 'exp2Org', label: '2nd Expert Organization', type: 'text' },
      { name: 'candidateDated', label: 'Student Signature Dated', type: 'date' },
      { name: 'meetingNo', label: 'Doctoral Committee Meeting No', type: 'text' },
      { name: 'agendaItemNo', label: 'Agenda Item No', type: 'text' },
      { name: 'docCommDate', label: 'Doctoral Committee Dated', type: 'date' },
      { name: 'hodName', label: 'HoD / Head of Graduate Programs', type: 'text' },
      { name: 'hodDated', label: 'HoD Dated', type: 'date' },
      { name: 'deanName', label: 'Dean Name', type: 'text' },
      { name: 'deanDated', label: 'Dean Dated', type: 'date' }
    ],
    renderTemplate: (data) => `
      <div class="doc-page" style="padding: 12mm 16mm 8mm 16mm;">
        <div class="iu-official-header">
          <div class="iu-logo-container">
            <img src="/assets/iqra-logo.png" alt="Iqra University" class="iu-logo-img" />
          </div>
          <div class="iu-header-text-block">
            <div class="form-id">Form PhD-1</div>
            <div class="doc-program">DOCTORAL PROGRAM<br/>OF STUDY</div>
            <div class="type-written">(Must be type written)</div>
          </div>
        </div>

        <div class="doc-main-title underlined" style="margin-top: 6px; margin-bottom: 8px; font-size: 11pt;">
          GSEC FORMULATION FORM
        </div>

        <div style="font-size: 9pt; line-height: 1.35;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div style="flex: 2;">Student’s Name: <span class="field-underline" style="width: 72%; font-weight: bold;">${data.studentName || ''}</span></div>
            <div style="flex: 1; text-align: right;">Reg. No (xxx-xx-xxxxx): <span class="field-underline" style="width: 48%; font-weight: bold;">${data.regNo || ''}</span></div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <div>Department: <span class="field-underline" style="width: 250px;">${data.department || ''}</span></div>
            <div>Campus: <span class="field-underline" style="width: 220px;">${data.campus || ''}</span></div>
          </div>

          <div style="margin-bottom: 6px;">
            Area of Research: <span class="field-underline auto-scale-text" style="width: 84%;">${data.areaOfResearch || ''}</span>
          </div>

          <div class="official-section-title" style="font-size: 9.5pt; margin: 6px 0 2px 0;">
            GSEC MEMBERS
          </div>
          <div style="margin-bottom: 4px;">Date of formulation of GSEC: <span class="field-underline" style="width: 180px;">${data.formulationDate || ''}</span></div>

          <!-- Supervisor Block -->
          <div style="border-top: 1px solid #000; padding-top: 3px; margin-bottom: 3px;">
            <div style="font-weight: bold; text-decoration: underline; margin-bottom: 2px;">Supervisor</div>
            <div style="display: flex; justify-content: space-between;">
              <div>Name: <span class="field-underline" style="width: 280px;">${data.supName || ''}</span></div>
              <div>Email: <span class="field-underline" style="width: 240px;">${data.supEmail || ''}</span></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 2px;">
              <div>Dept: <span class="field-underline" style="width: 286px;">${data.supDept || ''}</span></div>
              <div>Contact No.: <span class="field-underline" style="width: 200px;">${data.supContact || ''}</span></div>
            </div>
            <div style="margin-top: 2px;">Signature: <span class="field-underline" style="width: 200px;"></span></div>
          </div>

          <!-- Co-Supervisor Block -->
          <div style="border-top: 1px solid #ccc; padding-top: 3px; margin-bottom: 3px;">
            <div style="font-weight: bold; text-decoration: underline; margin-bottom: 2px;">Co-Supervisor (if appointed)</div>
            <div style="display: flex; justify-content: space-between;">
              <div>Name: <span class="field-underline" style="width: 280px;">${data.coSupName || ''}</span></div>
              <div>Email: <span class="field-underline" style="width: 240px;">${data.coSupEmail || ''}</span></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 2px;">
              <div>Dept: <span class="field-underline" style="width: 286px;">${data.coSupDept || ''}</span></div>
              <div>Contact No.: <span class="field-underline" style="width: 200px;">${data.coSupContact || ''}</span></div>
            </div>
            <div style="margin-top: 2px;">Signature: <span class="field-underline" style="width: 200px;"></span></div>
          </div>

          <!-- 1st Expert Block -->
          <div style="border-top: 1px solid #ccc; padding-top: 3px; margin-bottom: 3px;">
            <div style="font-weight: bold; text-decoration: underline; margin-bottom: 2px;">1st Expert from the field of research</div>
            <div style="display: flex; justify-content: space-between;">
              <div>Name: <span class="field-underline" style="width: 280px;">${data.exp1Name || ''}</span></div>
              <div>Email: <span class="field-underline" style="width: 240px;">${data.exp1Email || ''}</span></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 2px;">
              <div>Dept: <span class="field-underline" style="width: 286px;">${data.exp1Dept || ''}</span></div>
              <div>Contact No.: <span class="field-underline" style="width: 200px;">${data.exp1Contact || ''}</span></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 2px;">
              <div>Organization: <span class="field-underline" style="width: 245px;">${data.exp1Org || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 180px;"></span></div>
            </div>
          </div>

          <!-- 2nd Expert Block -->
          <div style="border-top: 1px solid #ccc; padding-top: 3px; margin-bottom: 4px;">
            <div style="font-weight: bold; text-decoration: underline; margin-bottom: 2px;">2nd Expert from the field of research (if appointed)</div>
            <div style="display: flex; justify-content: space-between;">
              <div>Name: <span class="field-underline" style="width: 280px;">${data.exp2Name || ''}</span></div>
              <div>Email: <span class="field-underline" style="width: 240px;">${data.exp2Email || ''}</span></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 2px;">
              <div>Dept: <span class="field-underline" style="width: 286px;">${data.exp2Dept || ''}</span></div>
              <div>Contact No.: <span class="field-underline" style="width: 200px;">${data.exp2Contact || ''}</span></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 2px;">
              <div>Organization: <span class="field-underline" style="width: 245px;">${data.exp2Org || ''}</span></div>
              <div>Signature: <span class="field-underline" style="width: 180px;"></span></div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; margin: 3px 0 6px 0;">
            <div>Dated: <span class="field-underline" style="width: 140px;">${data.candidateDated || ''}</span></div>
            <div style="text-align: right;"><span class="field-underline" style="width: 180px;"></span><br/>Student’s Signature</div>
          </div>

          <div style="border-top: 1px solid #000; padding-top: 3px;">
            <div class="official-section-title" style="font-size: 9.5pt; margin: 2px 0;">APPROVAL OF DOCTORAL COMMITTEE</div>
            <div style="display: flex; justify-content: space-between; margin-top: 2px;">
              <div>Meeting No: <span class="field-underline" style="width: 120px;">${data.meetingNo || ''}</span></div>
              <div>Agenda Item No.: <span class="field-underline" style="width: 100px;">${data.agendaItemNo || ''}</span></div>
              <div>Dated: <span class="field-underline" style="width: 120px;">${data.docCommDate || ''}</span></div>
            </div>
          </div>

          <div class="signature-row" style="margin-top: 8px;">
            <div class="signature-col">
              <div class="official-section-title" style="font-size: 9pt; text-align: left; margin-bottom: 4px;">DEPARTMENTAL APPROVAL</div>
              <div class="signature-line" style="margin-top: 8px;"></div>
              <div>Name of HoD / Head of Graduate Programs: <span class="field-underline" style="width: 140px;">${data.hodName || ''}</span></div>
              <div>Dated: <span class="field-underline" style="width: 120px;">${data.hodDated || ''}</span></div>
            </div>
            <div class="signature-col" style="text-align: right;">
              <div class="official-section-title" style="font-size: 9pt; text-align: right; margin-bottom: 4px;">COUNTERSIGNED BY DEAN</div>
              <div class="signature-line" style="margin-top: 8px; margin-left: auto; width: 80%;"></div>
              <div>Name: <span class="field-underline" style="width: 160px;">${data.deanName || ''}</span></div>
              <div>Dated: <span class="field-underline" style="width: 120px;">${data.deanDated || ''}</span></div>
            </div>
          </div>

          <div class="doc-distribution" style="margin-top: 6px;">
            <strong>Distribution:</strong> 1 copy each to Examination Department, Dean, Office of DAASR, in student’s dossier, the student and each member of GSEC.
          </div>
        </div>
      </div>
    `
  }
};
