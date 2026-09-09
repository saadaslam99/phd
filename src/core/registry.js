// Central Registry of Official Iqra University PhD & Master's Forms

export const FORM_STAGES = {
  ADMISSION: {
    id: 'admission',
    title: '1. Admission & Enrolment',
    description: 'Initial recommendation, supervisor allocation, and provisional admission'
  },
  GSEC: {
    id: 'gsec',
    title: '2. GSEC Formulation & Progress',
    description: 'Committee formation, topic updates, and periodic meeting minutes'
  },
  COMPREHENSIVE: {
    id: 'comprehensive',
    title: '3. Comprehensive Examination',
    description: 'Coursework verification, supervisor approval, and examination reporting'
  },
  PROPOSAL: {
    id: 'proposal',
    title: '4. Thesis Proposal Defense',
    description: 'Defense schedule, committee evaluation, and qualification certification'
  },
  DEFENSE: {
    id: 'defense',
    title: '5. Dissertation Evaluation & Final Defense',
    description: 'Internal evaluation, pre-defense, thesis evaluation reports, and doctoral defense'
  }
};

export const FORM_REGISTRY = [
  // Stage 1: Admission
  {
    id: 'phd-a',
    code: 'Form PhD-A',
    title: 'Recommendations for Admission to the PhD Program',
    stage: 'admission',
    pageCount: 1,
    pageSize: 'A4',
    margins: '9pt 59.8pt 4.5pt 36pt',
    hasAttachmentNote: true,
    fileSource: 'Form-PhD-A-RECOMMENDATIONS-FOR-ADMISSION-TO-THE-PhD-PROGRAM.docx'
  },
  {
    id: 'phd-b',
    code: 'Form PhD-B',
    title: 'Provisional Admission to the PhD Program',
    stage: 'admission',
    pageCount: 1,
    pageSize: 'A4',
    margins: '9pt 36pt 36pt 36pt',
    fileSource: 'Form-PhD-B-ADMISSION-TO-THE-PhD-PROGRAMME.docx'
  },

  // Stage 2: GSEC
  {
    id: 'phd-01',
    code: 'Form PhD-1',
    title: 'Formulation of Graduate Student Evaluation Committee (GSEC)',
    stage: 'gsec',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '12mm',
    fileSource: 'PhD-Form-1.doc'
  },
  {
    id: 'phd-02',
    code: 'Form PhD-2',
    title: 'Petition for Change in Research Topic and/or GSEC',
    stage: 'gsec',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '12mm',
    fileSource: 'PhD-Form-2.doc'
  },
  {
    id: 'phd-03',
    code: 'Form PhD-3',
    title: 'Minutes of GSEC Meeting',
    stage: 'gsec',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '9pt 43.2pt 27pt 43.2pt',
    fileSource: 'PhD-Form-3.docx'
  },

  // Stage 3: Comprehensive Exam
  {
    id: 'phd-comp-sup',
    code: 'IU-COMP-SUP',
    title: 'Comprehensive Exam — Supervisor Approval Form & Coursework Record',
    stage: 'comprehensive',
    pageCount: 1,
    pageSize: 'A4',
    margins: '12mm',
    fileSource: 'Comprehensive Exam Supervisor approval form (1).doc'
  },
  {
    id: 'phd-04',
    code: 'Form PhD-4',
    title: 'Report of Comprehensive Examination',
    stage: 'comprehensive',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '12mm',
    fileSource: 'PhD-Form-4.doc'
  },

  // Stage 4: Proposal Defense
  {
    id: 'phd-proposal',
    code: 'IU-PROP-SCHED',
    title: 'Schedule for PhD Proposal Defense',
    stage: 'proposal',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '72pt 72pt 4.5pt 72pt',
    fileSource: 'PhD proposal form.docx'
  },
  {
    id: 'phd-5-internal',
    code: 'Form PhD-5',
    title: 'Schedule for PhD Proposal Defense (Internal Used Only)',
    stage: 'proposal',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '72pt 72pt 4.5pt 72pt',
    fileSource: 'Form PhD-5 for Internal Used Only.docx'
  },
  {
    id: 'phd-05a',
    code: 'Form PhD-5a',
    title: 'Proposal Defense Evaluation Report',
    stage: 'proposal',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '12mm',
    fileSource: 'PhD-Form-5a.doc'
  },
  {
    id: 'phd-05b',
    code: 'Form PhD-5b',
    title: 'PhD Thesis Proposal Defense Certificate',
    stage: 'proposal',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '12mm',
    fileSource: 'PhD-Form-5b.doc'
  },

  // Stage 5: Evaluation & Final Defense
  {
    id: 'phd-06a',
    code: 'Form PhD-6a',
    title: 'Internal Evaluation Form for PhD Dissertation',
    stage: 'defense',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '12mm',
    fileSource: 'Phd-Form-6a.doc'
  },
  {
    id: 'phd-06b',
    code: 'Form PhD-6b',
    title: 'Pre-Defense Form for PhD Dissertation',
    stage: 'defense',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '12mm',
    fileSource: 'Phd-Form-6b.doc'
  },
  {
    id: 'phd-07',
    code: 'Form PhD-7',
    title: 'Thesis Evaluation Report (Department Summary & TEC Responses 7a-7i)',
    stage: 'defense',
    pageCount: 10,
    pageSize: 'Letter',
    margins: '12mm',
    fileSource: 'Phd-Form-7.doc'
  },
  {
    id: 'phd-08',
    code: 'Form PhD-8',
    title: 'Report of Doctoral Thesis Defense',
    stage: 'defense',
    pageCount: 1,
    pageSize: 'Letter',
    margins: '12mm',
    fileSource: 'PhD-Form-8.doc'
  }
];
