import type { SchemeRecord } from '../types/scheme';

export const SCHEMES: SchemeRecord[] = [
  // =========================================================================
  // 1. EDUCATION & SCHOLARSHIPS (5)
  // =========================================================================
  {
    id: 'svmcm',
    name: 'Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)',
    bengaliName: 'স্বামী বিবেকানন্দ মেরিট-কাম-মিনস স্কলারশিপ',
    categoryId: 'education',
    providerLevel: 'West Bengal State',
    department: 'Higher Education Department, Govt. of West Bengal',
    beneficiaryTypes: ['Students', 'Low-Income Households'],
    benefitType: 'Scholarship',
    benefitSummary:
      'Annual merit-cum-means scholarship ranging from ₹12,000 to ₹60,000 per year for meritorious West Bengal students in Class XI–XII, undergraduate, postgraduate, and professional courses.',
    overview:
      'SVMCM supports economically disadvantaged yet meritorious students domiciled in West Bengal pursuing higher secondary, diploma, undergraduate, postgraduate, engineering, medical, and doctoral education in recognised institutions within the state.',
    whoCanBenefit: [
      'Students permanently domiciled in West Bengal studying in Class XI–XII, UG, PG, Diploma, or professional courses',
      'Meritorious learners from families with annual household income up to ₹2.5 lakh',
      'Both fresh applicants and eligible renewal students maintaining requisite marks',
    ],
    eligibilityConditions: [
      'Applicant must be a permanent resident (domicile) of West Bengal.',
      'Annual family income must not exceed ₹2,50,000.',
      'Minimum 60% marks in the last qualifying board examination (Madhyamik/HS) or 53% in Honours graduation for PG courses.',
      'Must be enrolled full-time in a recognised school, college, or university in West Bengal.',
    ],
    benefitDetails: [
      'Class XI–XII and UG Arts/Commerce: ₹1,000 per month (₹12,000/year).',
      'UG Science & Diploma/Polytechnic: ₹1,500 per month (₹18,000/year).',
      'PG Arts/Commerce: ₹2,000/month; PG Science: ₹2,500/month.',
      'UG Engineering, Medical & Professional Courses: ₹5,000 per month (₹60,000/year).',
      'Disbursed directly to the student’s bank account via Direct Benefit Transfer (DBT).',
    ],
    requiredDocuments: [
      'Domicile Certificate (West Bengal)',
      'Family Income Certificate (BDO / SDO / Municipal Executive Officer)',
      'Marksheets of last qualifying examination',
      'Institution Admission Receipt / Bonafide Certificate',
      'Student Bank Passbook (IFSC & Account verification)',
    ],
    howToApply: [
      'Visit the official SVMCM portal at svmcm.wb.gov.in and register for fresh or renewal application.',
      'Complete academic, household income, and institution details online.',
      'Upload scanned copies of marksheets, admission receipt, and income certificate.',
      'Submit the application for online verification by the Head of Institution (HOI) and Directorate.',
    ],
    applicationAvailability: 'Annual academic cycle (typically opens after board/university admissions)',
    deadline: 'Check active 2026–27 academic cycle window on portal',
    deadlineNote: 'Renewal and fresh windows open separately each academic session.',
    officialSourceName: 'SVMCM Official Portal (Higher Education Dept., WB)',
    officialSourceUrl: 'https://svmcm.wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresStudent: true,
      maxIncomeBracket: '1l-2.5l',
      familyRoles: ['student', 'girl-student'],
    },
  },
  {
    id: 'aikyashree',
    name: 'Aikyashree Scholarship',
    bengaliName: 'ঐক্যশ্রী স্কলারশিপ',
    categoryId: 'education',
    providerLevel: 'West Bengal State',
    department: 'West Bengal Minorities’ Development & Finance Corporation (WBMDFC)',
    beneficiaryTypes: ['Students', 'SC / ST / Minority Communities', 'Low-Income Households'],
    benefitType: 'Scholarship',
    benefitSummary:
      'State-funded Pre-Matric, Post-Matric, Merit-cum-Means, and Talent Support scholarships for students belonging to notified minority communities in West Bengal.',
    overview:
      'Administered by WBMDFC, Aikyashree provides financial assistance covering admission fees, tuition, and maintenance allowances for Muslim, Christian, Sikh, Buddhist, Jain, and Parsi students studying from Class I to postgraduate and technical levels.',
    whoCanBenefit: [
      'Students from notified minority communities domiciled in West Bengal',
      'School students (Class I–X), Higher Secondary, College, and Technical/Professional learners',
      'Low-income minority households meeting scheme-specific income ceilings',
    ],
    eligibilityConditions: [
      'Must be a domicile of West Bengal belonging to a notified minority community.',
      'Annual family income ceiling: up to ₹2 lakh for Pre-Matric / Post-Matric / TSP, and up to ₹2.5 lakh for Merit-cum-Means.',
      'Minimum 50% marks in the previous final examination (waived for Class I and Talent Support Stipend).',
    ],
    benefitDetails: [
      'Pre-Matric (Class I–X): ₹1,100 to ₹11,000 per year depending on class and day-scholar/hosteller status.',
      'Post-Matric (Class XI to PhD): ₹10,200 to ₹16,500 per year covering course fees and maintenance.',
      'Merit-cum-Means (Professional/Technical): Up to ₹33,000 per year.',
    ],
    requiredDocuments: [
      'Community / Minority Self-Declaration Certificate',
      'Family Income Certificate',
      'Previous Examination Marksheet',
      'School / College Verification Form (Institution ID)',
      'Bank Account details in the student’s name',
    ],
    howToApply: [
      'Go to the official WBMDFC Aikyashree portal (wbmdfcscholarship.in / wbmdfc.org).',
      'Select District of your institution and complete New Registration or Renewal.',
      'Submit the online form and print a copy for verification at your school or college.',
    ],
    applicationAvailability: 'Annual academic session cycle',
    deadline: 'Check current academic year closing date on WBMDFC portal',
    officialSourceName: 'WBMDFC Official Portal',
    officialSourceUrl: 'https://www.wbmdfc.org/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresStudent: true,
      maxIncomeBracket: '1l-2.5l',
      familyRoles: ['student', 'girl-student'],
    },
  },
  {
    id: 'kanyashree',
    name: 'Kanyashree Prakalpa (K1, K2 & K3)',
    bengaliName: 'কন্যাশ্রী প্রকল্প',
    categoryId: 'education',
    secondaryCategories: ['women'],
    providerLevel: 'West Bengal State',
    department: 'Department of Women and Child Development & Social Welfare, WB',
    beneficiaryTypes: ['Students', 'Women & Girls'],
    benefitType: 'Scholarship',
    benefitSummary:
      'Annual scholarship of ₹1,000 (K1) for schoolgoing girls aged 13–18, a one-time grant of ₹25,000 (K2) at age 18 if unmarried and studying, plus PG support (K3).',
    overview:
      'Kanyashree Prakalpa incentivises adolescent girls in West Bengal to remain in school, college, or vocational training and prevents child marriage through conditional direct bank transfers.',
    whoCanBenefit: [
      'Unmarried girls aged 13 to 18 enrolled in Classes VIII–XII or equivalent vocational courses (K1)',
      'Unmarried young women turning 18 who remain enrolled in educational/vocational institutions (K2)',
      'Kanyashree K2 recipients pursuing postgraduate university degrees in West Bengal (K3)',
    ],
    eligibilityConditions: [
      'Resident of West Bengal and unmarried at the time of application.',
      'Regularly enrolled in a recognised school, college, university, or vocational training centre.',
      'Income ceiling waived for K1/K2 enrolment as per state policy; verify latest institution guidelines for K3.',
    ],
    benefitDetails: [
      'K1 Annual Grant: ₹1,000 per year from age 13 to 18.',
      'K2 One-Time Grant: ₹25,000 transferred directly upon turning 18 while unmarried and continuing education.',
      'K3 Postgraduate Support: ₹2,000/month (Arts/Commerce) or ₹2,500/month (Science) via SVMCM-K3 portal.',
    ],
    requiredDocuments: [
      'Age Proof / Birth Certificate',
      'Unmarried Status Declaration certified by Head of Institution',
      'Enrollment Certificate from School / College',
      'Bank Account Passbook in the girl student’s own name',
    ],
    howToApply: [
      'Collect the Kanyashree K1 or K2 application form directly from your school or college Head of Institution.',
      'Submit filled form with age proof, bank details, and passport photographs to the institution.',
      'The Head of Institution uploads and verifies the application on wbkanyashree.gov.in.',
    ],
    applicationAvailability: 'Open throughout the academic year via educational institutions',
    deadline: null,
    deadlineNote: 'Applications are processed annually through schools and colleges based on age eligibility.',
    officialSourceName: 'Kanyashree Prakalpa Official Portal',
    officialSourceUrl: 'https://www.wbkanyashree.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresStudent: true,
      requiresWomanInHousehold: true,
      maxIncomeBracket: 'any',
      familyRoles: ['girl-student', 'student'],
    },
  },
  {
    id: 'sikshashree',
    name: 'Sikshashree Scholarship (SC & ST Day Scholars)',
    bengaliName: 'শিক্ষাশ্রী প্রকল্প',
    categoryId: 'education',
    providerLevel: 'West Bengal State',
    department: 'Backward Classes Welfare & Tribal Development Departments, WB',
    beneficiaryTypes: ['Students', 'SC / ST / Minority Communities', 'Low-Income Households'],
    benefitType: 'Scholarship',
    benefitSummary:
      'Annual pre-matric financial grant for Scheduled Caste (SC) and Scheduled Tribe (ST) day-scholar students studying in Classes V to VIII in West Bengal.',
    overview:
      'Sikshashree helps reduce middle-school dropout rates among SC and ST families by providing an annual educational grant directly into the student’s bank account to meet books, uniforms, and learning expenses.',
    whoCanBenefit: [
      'SC and ST students domiciled in West Bengal studying in Classes V to VIII',
      'Day scholars enrolled in government, government-aided, or recognised schools',
    ],
    eligibilityConditions: [
      'Student must belong to a recognised Scheduled Caste or Scheduled Tribe community in West Bengal.',
      'Must be enrolled in Classes V, VI, VII, or VIII as a day scholar.',
      'Annual family income should not exceed ₹2,50,000.',
    ],
    benefitDetails: [
      'Annual grant of ₹800 per student (verify current revised annual rate through school/BDO office).',
      'Credited directly via DBT to the student’s bank account.',
    ],
    requiredDocuments: [
      'SC / ST Caste Certificate',
      'Family Income Certificate',
      'School Enrolment & Attendance Verification',
      'Student Bank Passbook',
    ],
    howToApply: [
      'Submit application details through the Head of School or via the OASIS / Backward Classes Welfare workflow.',
      'Verify caste and bank account details at the Block Development Office (BDO) or Sub-Divisional Officer (SDO) office.',
    ],
    applicationAvailability: 'Annual school-level enrollment cycle',
    deadline: 'Annual submission via school before district cut-off',
    officialSourceName: 'OASIS & Backward Classes Welfare Portal, WB',
    officialSourceUrl: 'https://oasis.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresStudent: true,
      maxIncomeBracket: '1l-2.5l',
      familyRoles: ['student', 'girl-student'],
    },
  },
  {
    id: 'oasis-post-matric',
    name: 'Post-Matric Scholarships for SC, ST & OBC Students (OASIS)',
    bengaliName: 'ওয়েসিস পোস্ট-ম্যাট্রিক স্কলারশিপ',
    categoryId: 'education',
    providerLevel: 'Joint State & Central',
    department: 'Backward Classes Welfare & Tribal Development Departments, WB',
    beneficiaryTypes: ['Students', 'SC / ST / Minority Communities', 'Low-Income Households'],
    benefitType: 'Scholarship',
    benefitSummary:
      'Tuition reimbursement and monthly maintenance allowance for SC, ST, and OBC students pursuing Class XI–XII, undergraduate, postgraduate, and technical courses via OASIS.',
    overview:
      'Implemented jointly by the Government of India and the Government of West Bengal through the Online Application for Scholarship in Studies (OASIS) portal, this scheme covers non-refundable fees and maintenance stipends for post-matric students.',
    whoCanBenefit: [
      'SC, ST, and OBC students permanently residing in West Bengal studying after Class X',
      'Day scholars and hostellers in recognised schools, ITIs, polytechnics, colleges, and universities',
    ],
    eligibilityConditions: [
      'Valid digital Caste Certificate (SC / ST / OBC) issued by competent authority in West Bengal.',
      'Family annual income up to ₹2.5 lakh (for SC/ST) and up to ₹1 lakh (for OBC, verify latest revision on OASIS).',
      'Regular attendance and promotion in recognised post-matric courses.',
    ],
    benefitDetails: [
      'Compulsory non-refundable tuition and academic fees reimbursed as per institutional norms.',
      'Monthly maintenance allowance varying by course group and hosteller vs. day-scholar status.',
    ],
    requiredDocuments: [
      'Digital SC / ST / OBC Caste Certificate',
      'Family Income Certificate',
      'Previous Examination Marksheet & Admission Fee Receipt',
      'Bank Account seeded for DBT',
    ],
    howToApply: [
      'Register online at oasis.gov.in with caste certificate verification.',
      'Fill academic, fee, and bank details and download the acknowledgement slip.',
      'Submit signed printed form with supporting papers to your Institution / BDO / PO-cum-DWO.',
    ],
    applicationAvailability: 'Annual academic cycle on OASIS portal',
    deadline: 'Check active 2026–27 portal schedule at oasis.gov.in',
    officialSourceName: 'OASIS West Bengal Official Portal',
    officialSourceUrl: 'https://oasis.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresStudent: true,
      maxIncomeBracket: '1l-2.5l',
      familyRoles: ['student', 'girl-student'],
    },
  },

  // =========================================================================
  // 2. WOMEN & GIRLS (3)
  // =========================================================================
  {
    id: 'annapurna-yojana',
    name: 'Annapurna Yojana / Annapurna Bhandar',
    bengaliName: 'অন্নপূর্ণা যোজনা / অন্নপূর্ণা ভাণ্ডার',
    categoryId: 'women',
    providerLevel: 'West Bengal State',
    department: 'Department of Women & Child Development and Social Welfare, WB',
    beneficiaryTypes: ['Women & Girls', 'Low-Income Households'],
    benefitType: 'Monthly Financial Assistance',
    benefitSummary:
      'Enhanced monthly Direct Benefit Transfer (DBT) financial assistance program for eligible adult women in West Bengal, incorporating structural transitions from existing state women’s cash-transfer databases.',
    overview:
      'Annapurna Yojana / Annapurna Bhandar represents the updated state financial empowerment framework for women residents in West Bengal, providing regular monthly income security directly into Aadhaar-linked single-holder bank accounts.',
    whoCanBenefit: [
      'Adult women permanent residents of West Bengal meeting notified age and residency criteria',
      'Existing eligible beneficiaries transitioning from prior state women’s cash transfer registries',
    ],
    eligibilityConditions: [
      'Applicant must be a permanent resident woman of West Bengal.',
      'Must not be a regular salaried government/PSU employee or pensioner (verify exact exclusion rules in latest notification).',
      'Active single-holder bank account seeded with NPCI for Direct Benefit Transfer.',
    ],
    benefitDetails: [
      'Direct monthly financial assistance credited to the beneficiary’s personal bank account.',
      'Exact updated monthly payout slabs and transition schedules should be verified on the official Social Security / Social Registry portal.',
    ],
    requiredDocuments: [
      'West Bengal Residency / Swasthya Sathi or Ration Card proof',
      'Age Proof / Voter Identity Document',
      'Single-holder Bank Passbook (NPCI / DBT enabled)',
      'SC / ST Certificate (if applicable for category slab)',
    ],
    howToApply: [
      'Check beneficiary migration or registration status on the official West Bengal Social Registry portal (socialregistry.wb.gov.in).',
      'New applicants can submit physical forms at designated BDO / Municipality / Duare Sarkar facilitation desks once enrollment windows are notified.',
      'Track disbursement updates using Application ID or registered mobile number.',
    ],
    applicationAvailability: 'Rolling verification & camp-based onboarding — confirm active window',
    deadline: null,
    officialSourceName: 'West Bengal Social Registry Portal',
    officialSourceUrl: 'https://socialregistry.wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Transitioning / Verify Guidelines',
    verificationNote:
      'Existing Lakshmir Bhandar beneficiary databases have been aligning/transitioning under the Annapurna Yojana framework. Please confirm current monthly payout rates and fresh enrollment windows on the official wb.gov.in / socialregistry.wb.gov.in notification before applying.',
    matchRules: {
      requiresWomanInHousehold: true,
      maxIncomeBracket: 'any',
      familyRoles: ['woman', 'widow'],
    },
  },
  {
    id: 'lakshmir-bhandar',
    name: 'Lakshmir Bhandar (Transition Status & Legacy Registry)',
    bengaliName: 'লক্ষ্মীর ভাণ্ডার প্রকল্প',
    categoryId: 'women',
    providerLevel: 'West Bengal State',
    department: 'Department of Women & Child Development and Social Welfare, WB',
    beneficiaryTypes: ['Women & Girls', 'SC / ST / Minority Communities'],
    benefitType: 'Monthly Financial Assistance',
    benefitSummary:
      'Flagship monthly basic income assistance scheme for women aged 25–60 in West Bengal; existing records are undergoing alignment/transition with the Annapurna framework — verify current portal status.',
    overview:
      'Launched in 2021 to provide financial independence to female heads of households aged 25 to 60 across West Bengal, Lakshmir Bhandar transferred ₹1,000/month (General) and ₹1,200/month (SC/ST) directly to women’s bank accounts. Existing beneficiaries should check current portal notices regarding transition into updated state women’s assistance frameworks.',
    whoCanBenefit: [
      'Women residents of West Bengal aged 25 to 60 years not employed in regular government jobs',
      'Existing Lakshmir Bhandar beneficiaries verifying continuity or migration status',
    ],
    eligibilityConditions: [
      'Permanent resident woman of West Bengal aged 25–60 years.',
      'Not a permanent employee of Central/State Government, statutory bodies, or local bodies drawing regular salary/pension.',
      'Must hold an individual bank account seeded for DBT.',
    ],
    benefitDetails: [
      'Historical baseline benefit: ₹1,000/month for General/OBC category women and ₹1,200/month for SC/ST category women.',
      'Transition advisory: Verify updated disbursement amount and scheme continuity status via the official Social Registry portal.',
    ],
    requiredDocuments: [
      'Age Proof (25–60 years)',
      'West Bengal Resident Proof',
      'SC / ST Certificate (if applicable)',
      'Individual Bank Account Passbook (DBT / NPCI linked)',
    ],
    howToApply: [
      'Existing beneficiaries can verify payment logs and migration status at socialregistry.wb.gov.in using their Application ID or registered mobile number.',
      'New applicants should confirm at their local BDO, SDO, or KMC/Municipality office whether fresh applications are accepted under Lakshmir Bhandar or the transitioned Annapurna framework.',
    ],
    applicationAvailability: 'Existing registry active for status tracking; verify new enrollment guidelines',
    deadline: null,
    officialSourceName: 'West Bengal Social Registry / Lakshmir Bhandar Portal',
    officialSourceUrl: 'https://socialregistry.wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Transitioning / Verify Guidelines',
    verificationNote:
      'Important Transition Note: Official records indicate Lakshmir Bhandar beneficiary databases are being aligned/transitioned under the Annapurna Yojana framework. Existing recipients do not need to share OTPs or pay middlemen; verify status only on official .gov.in portals or at BDO/Municipality offices.',
    matchRules: {
      requiresWomanInHousehold: true,
      maxIncomeBracket: 'any',
      familyRoles: ['woman'],
    },
  },
  {
    id: 'rupashree',
    name: 'Rupashree Prakalpa',
    bengaliName: 'রূপশ্রী প্রকল্প',
    categoryId: 'women',
    providerLevel: 'West Bengal State',
    department: 'Department of Women & Child Development and Social Welfare, WB',
    beneficiaryTypes: ['Women & Girls', 'Low-Income Households'],
    benefitType: 'One-Time Financial Grant',
    benefitSummary:
      'One-time financial assistance of ₹25,000 paid directly to the bank account of an adult woman from an economically weaker family in West Bengal for her first marriage.',
    overview:
      'Rupashree Prakalpa helps low-income families cover marriage expenses without falling into high-interest debt, while reinforcing the legal minimum marriage age of 18 years for women and 21 years for men.',
    whoCanBenefit: [
      'Unmarried adult women aged 18 years or above permanently residing in West Bengal',
      'Families with annual household income up to ₹1.5 lakh preparing for their daughter’s first marriage',
    ],
    eligibilityConditions: [
      'Applicant must be at least 18 years old on the date of application and unmarried.',
      'Prospective groom must have completed 21 years of age.',
      'Annual family income must not exceed ₹1,50,000.',
      'Born in West Bengal, resident for the last 5 years, or parents permanently residing in West Bengal.',
    ],
    benefitDetails: [
      'One-time financial grant of ₹25,000 credited via DBT directly into the bride’s individual bank account prior to the proposed marriage date.',
    ],
    requiredDocuments: [
      'Age Proof of Applicant (18+) and Prospective Groom (21+)',
      'Family Income Self-Declaration & Residency Proof',
      'Marriage Invitation Card / Proposed Marriage Proof',
      'Individual Bank Account Passbook of the Applicant',
    ],
    howToApply: [
      'Obtain the free Rupashree form from the BDO Office (rural), SDO Office (municipal), or Municipal Corporation office.',
      'Submit the completed form 30 to 60 days prior to the proposed marriage date.',
      'An enquiry officer conducts physical verification, after which the grant is approved on wbrupashree.gov.in.',
    ],
    applicationAvailability: 'Open year-round (submit 30–60 days before marriage date)',
    deadline: null,
    deadlineNote: 'Must be submitted at least 30 days and not more than 60 days prior to the proposed wedding date.',
    officialSourceName: 'Rupashree Prakalpa Official Portal',
    officialSourceUrl: 'https://www.wbrupashree.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresWomanInHousehold: true,
      maxIncomeBracket: '1l-2.5l',
      familyRoles: ['woman'],
    },
  },

  // =========================================================================
  // 3. PENSION & SENIOR CITIZENS (3)
  // =========================================================================
  {
    id: 'wb-old-age-pension',
    name: 'West Bengal Old Age Pension (Jai Bangla)',
    bengaliName: 'বার্ধক্য ভাতা (জয় বাংলা)',
    categoryId: 'pension',
    providerLevel: 'West Bengal State',
    department: 'Department of Women & Child Development and Social Welfare, WB',
    beneficiaryTypes: ['Senior Citizens', 'Low-Income Households'],
    benefitType: 'Pension',
    benefitSummary:
      'Monthly social security pension of ₹1,000 for senior citizens aged 60 years and above from economically vulnerable households in West Bengal.',
    overview:
      'Administered under the state’s unified Jai Bangla pension umbrella (alongside IGNOAPS central components where eligible), the Old Age Pension provides assured monthly income support directly into senior citizens’ bank accounts.',
    whoCanBenefit: [
      'Senior citizens aged 60 years and above residing in West Bengal',
      'Elderly residents without regular government pension or adequate family income support',
    ],
    eligibilityConditions: [
      'Must be aged 60 years or above and a permanent resident of West Bengal for at least 10 years.',
      'Household must fall under low-income/economically vulnerable norms (verify district-level income ceiling at BDO/Municipality).',
      'Must not be receiving any other overlapping central or state old-age pension.',
    ],
    benefitDetails: [
      'Monthly pension of ₹1,000 transferred directly via DBT into the senior citizen’s bank account.',
      'Verify any updated monthly pension enhancement notices at your local BDO/Municipality office.',
    ],
    requiredDocuments: [
      'Age Proof (Voter ID / Birth Certificate / Medical Age Certificate)',
      'West Bengal Residency Proof',
      'Income / BPL Self-Declaration',
      'Individual Bank Account Passbook',
    ],
    howToApply: [
      'Collect the Jai Bangla Common Application Form from the BDO Office (rural), SDO Office (urban), or KMC Ward Office.',
      'Submit filled form with self-attested proofs at the office or designated camp.',
      'Track approval through the district administration or wb.gov.in social security desk.',
    ],
    applicationAvailability: 'Open year-round via BDO / SDO / Municipal offices & camps',
    deadline: null,
    officialSourceName: 'Government of West Bengal Portal (Jai Bangla)',
    officialSourceUrl: 'https://wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresSeniorCitizen: true,
      maxIncomeBracket: '1l-2.5l',
      familyRoles: ['senior-citizen', 'senior-70-plus'],
    },
  },
  {
    id: 'jai-johar',
    name: 'Jai Johar Pension Scheme (ST Senior Citizens)',
    bengaliName: 'জয় জোহার প্রকল্প',
    categoryId: 'pension',
    providerLevel: 'West Bengal State',
    department: 'Tribal Development Department, Govt. of West Bengal',
    beneficiaryTypes: ['Senior Citizens', 'SC / ST / Minority Communities'],
    benefitType: 'Pension',
    benefitSummary:
      'Dedicated monthly pension of ₹1,000 for Scheduled Tribe (ST) senior citizens aged 60 years and above domiciled in West Bengal.',
    overview:
      'Part of the unified Jai Bangla social security umbrella, Jai Johar ensures dignified financial security for elderly members of Scheduled Tribe communities across rural and urban districts of West Bengal.',
    whoCanBenefit: [
      'Scheduled Tribe (ST) residents of West Bengal aged 60 years or above',
      'Elderly tribal citizens not covered by any other government pension scheme',
    ],
    eligibilityConditions: [
      'Applicant must belong to a recognised Scheduled Tribe (ST) community in West Bengal.',
      'Must have attained 60 years of age and resided in West Bengal for at least 10 years.',
      'Must not be drawing another statutory old-age or service pension.',
    ],
    benefitDetails: [
      '₹1,000 per month disbursed directly to the beneficiary’s individual bank account via DBT.',
    ],
    requiredDocuments: [
      'Scheduled Tribe (ST) Caste Certificate',
      'Age Proof (60+ years)',
      'Residential Certificate / Ration or Voter ID',
      'Bank Passbook copy',
    ],
    howToApply: [
      'Fill out the Jai Bangla Common Application Form selecting the Jai Johar scheme.',
      'Submit the form to the Block Development Officer (rural) or Sub-Divisional Officer / KMC Commissioner (urban).',
    ],
    applicationAvailability: 'Open year-round via BDO / SDO / Duare Sarkar camps',
    deadline: null,
    officialSourceName: 'West Bengal Tribal Development / Jai Bangla',
    officialSourceUrl: 'https://wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresSeniorCitizen: true,
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['senior-citizen', 'senior-70-plus'],
    },
  },
  {
    id: 'taposili-bandhu',
    name: 'Taposili Bandhu Pension Scheme (SC Senior Citizens)',
    bengaliName: 'তপশিলি বন্ধু প্রকল্প',
    categoryId: 'pension',
    providerLevel: 'West Bengal State',
    department: 'Backward Classes Welfare Department, Govt. of West Bengal',
    beneficiaryTypes: ['Senior Citizens', 'SC / ST / Minority Communities'],
    benefitType: 'Pension',
    benefitSummary:
      'Dedicated monthly pension of ₹1,000 for Scheduled Caste (SC) senior citizens aged 60 years and above permanently residing in West Bengal.',
    overview:
      'Taposili Bandhu delivers direct monthly social security under the Jai Bangla umbrella specifically for elderly citizens belonging to Scheduled Caste communities who are not receiving another pension.',
    whoCanBenefit: [
      'Scheduled Caste (SC) citizens aged 60 years and above in West Bengal',
      'Low-income SC elderly households seeking assured monthly subsistence support',
    ],
    eligibilityConditions: [
      'Must hold a valid Scheduled Caste (SC) certificate issued in West Bengal.',
      'Aged 60 years or above and resident of West Bengal for at least 10 years.',
      'Not enrolled in any other conflicting government pension scheme.',
    ],
    benefitDetails: [
      '₹1,000 monthly pension credited directly into the beneficiary’s bank account.',
    ],
    requiredDocuments: [
      'Scheduled Caste (SC) Certificate',
      'Age Proof (60+ years)',
      'West Bengal Residency Proof',
      'Individual Bank Account Passbook',
    ],
    howToApply: [
      'Obtain the Jai Bangla Common Application Form and tick Taposili Bandhu.',
      'Submit with documents at the BDO Office, SDO Office, or KMC Borough Office.',
    ],
    applicationAvailability: 'Open year-round via BDO / SDO / Municipal offices',
    deadline: null,
    officialSourceName: 'Backward Classes Welfare Dept., WB',
    officialSourceUrl: 'https://wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresSeniorCitizen: true,
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['senior-citizen', 'senior-70-plus'],
    },
  },

  // =========================================================================
  // 4. WIDOW SUPPORT (2)
  // =========================================================================
  {
    id: 'wb-widow-pension',
    name: 'West Bengal Widow Pension (Bidhaba Bhata — Jai Bangla)',
    bengaliName: 'বিধবা ভাতা (জয় বাংলা)',
    categoryId: 'widow',
    secondaryCategories: ['pension', 'women'],
    providerLevel: 'West Bengal State',
    department: 'Department of Women & Child Development and Social Welfare, WB',
    beneficiaryTypes: ['Widows', 'Women & Girls', 'Low-Income Households'],
    benefitType: 'Pension',
    benefitSummary:
      'Monthly financial pension of ₹1,000 for economically vulnerable widows aged 18 years and above permanently residing in West Bengal.',
    overview:
      'Widow Pension (Bidhaba Bhata) provides sustained monthly financial protection to widows in West Bengal who have lost their spouse and lack independent institutional pension income.',
    whoCanBenefit: [
      'Widows aged 18 years or above who are permanent residents of West Bengal',
      'Economically distressed single-woman or widowed-parent households',
    ],
    eligibilityConditions: [
      'Applicant must be a widow aged 18 years or above with valid Death Certificate of spouse.',
      'Permanent resident of West Bengal.',
      'Should not be employed in a regular salaried government job or receiving another conflicting widow pension.',
    ],
    benefitDetails: [
      '₹1,000 per month transferred directly via DBT into the beneficiary’s personal bank account.',
    ],
    requiredDocuments: [
      'Death Certificate of Husband',
      'Age & Identity Proof of Applicant',
      'West Bengal Residential Proof',
      'Income Self-Declaration & Individual Bank Passbook',
    ],
    howToApply: [
      'Collect the Jai Bangla Widow Pension form from your BDO Office (rural), SDO Office (urban), or Municipality/KMC.',
      'Attach husband’s death certificate and bank passbook copy and submit for block/ward verification.',
    ],
    applicationAvailability: 'Open year-round through local administration & Duare Sarkar camps',
    deadline: null,
    officialSourceName: 'West Bengal Social Welfare / Jai Bangla',
    officialSourceUrl: 'https://wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresWidow: true,
      maxIncomeBracket: '1l-2.5l',
      familyRoles: ['widow'],
    },
  },
  {
    id: 'ignwps-widow',
    name: 'Indira Gandhi National Widow Pension Scheme (NSAP)',
    bengaliName: 'ইন্দিরা গান্ধী জাতীয় বিধবা পেনশন প্রকল্প',
    categoryId: 'widow',
    secondaryCategories: ['pension'],
    providerLevel: 'Joint State & Central',
    department: 'Ministry of Rural Development (NSAP) & Govt. of West Bengal',
    beneficiaryTypes: ['Widows', 'Low-Income Households'],
    benefitType: 'Pension',
    benefitSummary:
      'Central-state co-funded social assistance pension under NSAP for widows aged 40 to 79 years belonging to Below Poverty Line (BPL) households.',
    overview:
      'Part of the National Social Assistance Programme (NSAP), IGNWPS provides central pension support topped up by the State Government to reach the unified monthly disbursement level for BPL widows.',
    whoCanBenefit: [
      'Widows aged 40 to 79 years listed in BPL / SECC priority households',
      'Rural and urban low-income widowed women seeking assured social security',
    ],
    eligibilityConditions: [
      'Applicant must be a widow aged 40–79 years.',
      'Must belong to a household living Below Poverty Line (BPL) as per notified criteria.',
      'Not remarried and not drawing an overlapping statutory widow pension.',
    ],
    benefitDetails: [
      'Central contribution (₹300/month, increasing to ₹500/month at age 80+) combined with West Bengal state top-up to ensure unified ₹1,000/month payout.',
    ],
    requiredDocuments: [
      'Husband’s Death Certificate',
      'BPL / Priority Household Verification Proof',
      'Age Proof (40–79 years)',
      'Bank / Post Office Savings Passbook',
    ],
    howToApply: [
      'Apply through Gram Panchayat / BDO Office (rural) or Municipality / Urban Local Body (urban).',
      'Track NSAP beneficiary status on the official National Social Assistance Programme portal (nsap.nic.in).',
    ],
    applicationAvailability: 'Open year-round via local Panchayat / Municipality offices',
    deadline: null,
    officialSourceName: 'National Social Assistance Programme (NSAP)',
    officialSourceUrl: 'https://nsap.nic.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresWidow: true,
      maxIncomeBracket: 'below-1l',
      familyRoles: ['widow'],
    },
  },

  // =========================================================================
  // 5. DISABILITY SUPPORT (2)
  // =========================================================================
  {
    id: 'manabik-pension',
    name: 'Manabik Disability Pension Scheme',
    bengaliName: 'মানবিক পেনশন প্রকল্প',
    categoryId: 'disability',
    secondaryCategories: ['pension'],
    providerLevel: 'West Bengal State',
    department: 'Department of Women & Child Development and Social Welfare, WB',
    beneficiaryTypes: ['Persons with Disabilities', 'Low-Income Households'],
    benefitType: 'Disability Support & Pension',
    benefitSummary:
      'Monthly pension of ₹1,000 for West Bengal residents of any age with 40% or more certified benchmark disability.',
    overview:
      'Manabik provides unconditional age-independent monthly financial assistance under the Jai Bangla umbrella to persons with benchmark disabilities (40% or above) to support daily living, care, and dignity.',
    whoCanBenefit: [
      'West Bengal residents of any age with certified disability of 40% or more',
      'Families caring for children, adults, or seniors with physical, visual, hearing, or intellectual disabilities',
    ],
    eligibilityConditions: [
      'Certified disability of 40% or higher issued by a Government Medical Board (or valid UDID card).',
      'Resident of West Bengal for at least 10 years.',
      'Not receiving any overlapping government disability or service pension.',
    ],
    benefitDetails: [
      '₹1,000 per month credited via DBT directly into the beneficiary’s (or legal guardian’s) bank account.',
    ],
    requiredDocuments: [
      'Government Medical Board Disability Certificate (40%+) or UDID Card',
      'West Bengal Residency Proof',
      'Age & Identity Proof',
      'Bank Account Passbook (beneficiary or guardian for minors)',
    ],
    howToApply: [
      'Obtain the Jai Bangla Common Application Form selecting Manabik Pension.',
      'Submit with Disability Certificate copy to the BDO Office (rural), SDO Office (urban), or KMC Borough Office.',
    ],
    applicationAvailability: 'Open year-round via BDO / SDO / Municipal offices & camps',
    deadline: null,
    officialSourceName: 'West Bengal Social Welfare / Jai Bangla',
    officialSourceUrl: 'https://wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresDisability: true,
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['disability'],
    },
  },
  {
    id: 'udid-adip-support',
    name: 'Unique Disability ID (UDID) & ADIP Assistive Devices Scheme',
    bengaliName: 'ইউডিআইডি কার্ড ও সহায়ক উপকরণ প্রকল্প',
    categoryId: 'disability',
    providerLevel: 'Central Government',
    department: 'Department of Empowerment of Persons with Disabilities (DEPwD), Govt. of India',
    beneficiaryTypes: ['Persons with Disabilities', 'Low-Income Households'],
    benefitType: 'Disability Support & Pension',
    benefitSummary:
      'National digital disability identity card (UDID) enabling pan-India scheme access, paired with subsidised or free wheelchairs, hearing aids, prosthetics, and assistive tools under ADIP.',
    overview:
      'UDID establishes a single verified digital credential for persons with disabilities across India, unlocking railway concessions, scholarships, pensions, and free or subsidised assistive devices through the Assistance to Disabled Persons (ADIP) scheme.',
    whoCanBenefit: [
      'Any citizen with a benchmark disability (40%+) seeking official digital certification',
      'Low-income individuals requiring hearing aids, tricycles, wheelchairs, Braille kits, or prosthetics',
    ],
    eligibilityConditions: [
      'Indian citizen with 40% or more certified disability.',
      'For free ADIP assistive aids: monthly income typically up to ₹22,500 (50% subsidy up to ₹30,000 — check latest DEPwD circular).',
    ],
    benefitDetails: [
      'Pan-India digital UDID card simplifying verification for state and central disability schemes.',
      'Free or 50%-subsidised assistive devices distributed via ALIMCO and district assessment camps.',
    ],
    requiredDocuments: [
      'Existing Disability Certificate (or medical evaluation booking at District Hospital)',
      'Identity & Address Proof',
      'Income Certificate (for ADIP free assistive equipment)',
      'Recent Photograph',
    ],
    howToApply: [
      'Register online on the official Swavlamban portal at swavlambancard.gov.in.',
      'Schedule assessment at the Chief Medical Officer of Health (CMOH) / Sub-Divisional Hospital if certification is pending.',
      'Download e-UDID card and attend district ADIP camps for assistive devices.',
    ],
    applicationAvailability: 'Open year-round online and via District CMOH offices',
    deadline: null,
    officialSourceName: 'Swavlamban Card (UDID) Official Portal',
    officialSourceUrl: 'https://www.swavlambancard.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresDisability: true,
      maxIncomeBracket: 'any',
      familyRoles: ['disability'],
    },
  },

  // =========================================================================
  // 6. FARMERS & AGRICULTURE (3)
  // =========================================================================
  {
    id: 'krishak-bandhu',
    name: 'Krishak Bandhu (Notun) Scheme',
    bengaliName: 'কৃষক বন্ধু (নতুন) প্রকল্প',
    categoryId: 'farmers',
    providerLevel: 'West Bengal State',
    department: 'Department of Agriculture, Govt. of West Bengal',
    beneficiaryTypes: ['Farmers & Agricultural Workers'],
    benefitType: 'Farmer Income & Insurance',
    benefitSummary:
      'Assured annual crop-cycle assistance of ₹4,000 to ₹10,000 for farmers with cultivable land (plus ₹2,000 for eligible landless agricultural workers) and ₹2 lakh death benefit.',
    overview:
      'Krishak Bandhu provides two-instalment Kharif and Rabi cultivation support for West Bengal farmers and recorded sharecroppers (Bargadars), alongside an essential ₹2 lakh one-time social security solatium in case of untimely death of a farmer aged 18–60.',
    whoCanBenefit: [
      'Farmers owning cultivable land in West Bengal (minimum ₹4,000/yr up to ₹10,000/yr for 1 acre or more)',
      'Recorded sharecroppers (Bargadars) and eligible agricultural workers',
      'Bereaved families of registered farmers aged 18–60 years (Death Benefit)',
    ],
    eligibilityConditions: [
      'Applicant must be a recorded farmer or Bargadar in West Bengal with valid land record (RoR / Parcha) or notified agricultural worker verification.',
      'For the ₹2 lakh death benefit, the deceased farmer must have been aged between 18 and 60 years.',
    ],
    benefitDetails: [
      'Cultivable land of 1 acre or more: ₹10,000 per year (₹5,000 Kharif + ₹5,000 Rabi).',
      'Cultivable land below 1 acre: Pro-rata assistance with a guaranteed minimum of ₹4,000 per year.',
      'Death Benefit: One-time financial assistance of ₹2,00,000 to the eligible next of kin.',
    ],
    requiredDocuments: [
      'Latest Record of Rights (RoR / Parcha) or Patta / Bargadar document',
      'Voter Identity Card',
      'Active Bank Passbook (DBT / Aadhaar linked)',
      'Mobile Number for SMS confirmation',
    ],
    howToApply: [
      'Submit the Krishak Bandhu application form at the local Assistant Director of Agriculture (ADA) office or Duare Sarkar camp.',
      'Land records are verified with the Block Land & Land Reforms Office (BL&LRO).',
      'Track beneficiary status online at krishakbandhu.wb.gov.in using Voter ID.',
    ],
    applicationAvailability: 'Open before Kharif and Rabi crop cycles & via ADA offices',
    deadline: null,
    deadlineNote: 'Disbursements are released twice annually ahead of Kharif and Rabi sowing seasons.',
    officialSourceName: 'Krishak Bandhu Official Portal',
    officialSourceUrl: 'https://krishakbandhu.wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresFarmer: true,
      ruralPreferred: true,
      maxIncomeBracket: 'any',
      familyRoles: ['farmer'],
    },
  },
  {
    id: 'pm-kisan',
    name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    bengaliName: 'পিএম-কিষাণ সম্মান নিধি',
    categoryId: 'farmers',
    providerLevel: 'Central Government',
    department: 'Ministry of Agriculture & Farmers Welfare, Govt. of India',
    beneficiaryTypes: ['Farmers & Agricultural Workers'],
    benefitType: 'Farmer Income & Insurance',
    benefitSummary:
      'Direct income support of ₹6,000 per year disbursed in three equal ₹2,000 instalments to landholding farmer families across India, including West Bengal.',
    overview:
      'PM-KISAN supplements the financial needs of landholding farmer households for procuring seeds, fertilisers, and agricultural inputs through transparent three-instalment Direct Benefit Transfers.',
    whoCanBenefit: [
      'Small, marginal, and landholding farmer families with cultivable land recorded in their name',
      'West Bengal farmers meeting central PM-KISAN exclusion criteria (non-income-taxpayers)',
    ],
    eligibilityConditions: [
      'Farmer family (husband, wife, and minor children) must hold cultivable land as per state land records.',
      'Higher-income categories (income tax payers, institutional landholders, serving/retired Class I–III govt employees) are excluded.',
      'Mandatory e-KYC and land seeding verification required for instalment release.',
    ],
    benefitDetails: [
      '₹6,000 per year paid in three ₹2,000 instalments every four months directly to Aadhaar-seeded bank accounts.',
    ],
    requiredDocuments: [
      'Land Ownership Document (RoR / Parcha)',
      'Bank Account seeded with NPCI / DBT',
      'e-KYC confirmation via CSC or official portal',
    ],
    howToApply: [
      'Register via pmkisan.gov.in (“New Farmer Registration”) or through a Common Service Centre (CSC) / local agriculture office.',
      'Complete state-level land verification and e-KYC to activate quarterly transfers.',
    ],
    applicationAvailability: 'Open year-round for new registration and e-KYC',
    deadline: null,
    officialSourceName: 'PM-KISAN Official Portal',
    officialSourceUrl: 'https://pmkisan.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresFarmer: true,
      ruralPreferred: true,
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['farmer'],
    },
  },
  {
    id: 'bangla-shasya-bima',
    name: 'Bangla Shasya Bima (Crop Insurance & Agricultural Assistance)',
    bengaliName: 'বাংলা শস্য বিমা প্রকল্প',
    categoryId: 'farmers',
    providerLevel: 'West Bengal State',
    department: 'Department of Agriculture, Govt. of West Bengal',
    beneficiaryTypes: ['Farmers & Agricultural Workers'],
    benefitType: 'Farmer Income & Insurance',
    benefitSummary:
      'State-funded crop insurance where the Government of West Bengal pays the farmer’s premium for notified food crops, protecting farmers against flood, cyclone, and drought crop losses.',
    overview:
      'Bangla Shasya Bima shields West Bengal cultivators and sharecroppers from weather-induced crop failure by covering notified Kharif and Rabi crops with zero premium burden on the farmer for major food crops.',
    whoCanBenefit: [
      'All cultivating farmers, sharecroppers (Bargadars), and tenant farmers growing notified crops in West Bengal',
      'Both loanee (KCC) and non-loanee farmers',
    ],
    eligibilityConditions: [
      'Must cultivate notified crops (such as Aman paddy, Boro paddy, potato, mustard, pulses) in notified Gram Panchayats/Blocks.',
      'Must enrol before the seasonal sowing cut-off date for Kharif or Rabi.',
    ],
    benefitDetails: [
      '100% of crop insurance premium paid by the State Government for notified non-commercial food crops.',
      'Automated satellite-assisted and crop-cutting loss payouts directly to the farmer’s bank account after natural calamities.',
    ],
    requiredDocuments: [
      'Land Record (Parcha) or Sharecropper / Sowing Certificate from Gram Panchayat / ADA',
      'Identity Proof (Voter ID)',
      'Bank Account Passbook',
    ],
    howToApply: [
      'Submit the Bangla Shasya Bima enrolment form at local Agriculture Department camps, Cooperative Societies, or bank branches before the Kharif/Rabi deadline.',
      'Check policy status at banglashasyabima.net.',
    ],
    applicationAvailability: 'Seasonal enrolment (Kharif & Rabi sowing windows)',
    deadline: 'Seasonal Rabi / Kharif enrolment cut-off notified by Agriculture Dept.',
    officialSourceName: 'Bangla Shasya Bima Official Portal',
    officialSourceUrl: 'https://banglashasyabima.net/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresFarmer: true,
      ruralPreferred: true,
      maxIncomeBracket: 'any',
      familyRoles: ['farmer'],
    },
  },

  // =========================================================================
  // 7. HEALTHCARE (2)
  // =========================================================================
  {
    id: 'swasthya-sathi',
    name: 'Swasthya Sathi (State Health Cover — Integration Notice)',
    bengaliName: 'স্বাস্থ্য সাথী প্রকল্প',
    categoryId: 'healthcare',
    providerLevel: 'West Bengal State',
    department: 'Department of Health & Family Welfare, Govt. of West Bengal',
    beneficiaryTypes: ['All Resident Households', 'Women & Girls', 'Low-Income Households'],
    benefitType: 'Cashless Health Cover',
    benefitSummary:
      'Cashless secondary and tertiary hospitalisation cover of up to ₹5 lakh per family per year issued in the name of the female head of household; currently harmonising alongside Ayushman Bharat PM-JAY.',
    overview:
      'Swasthya Sathi provides paperless smart-card health coverage up to ₹5 lakh annually per family with no cap on family size, covering pre-existing diseases from day one. In 2026, existing Swasthya Sathi databases are being phased and harmonised alongside the rollout of Ayushman Bharat PM-JAY in West Bengal.',
    whoCanBenefit: [
      'West Bengal resident families not covered under formal government/employer medical reimbursement',
      'Existing Swasthya Sathi smart-card holders verifying hospital empanelment or transition to PM-JAY',
    ],
    eligibilityConditions: [
      'Permanent resident family of West Bengal.',
      'Not receiving medical allowance from government service or ESIC.',
      'Card is issued in the name of the eldest female member of the household.',
    ],
    benefitDetails: [
      'Up to ₹5,00,000 per family per year for cashless secondary and tertiary hospitalisation.',
      'No restriction on family size; covers parents of both spouses and physically challenged dependents.',
      'Pre-existing conditions covered; includes ₹200 transport allowance on discharge (per state norms).',
    ],
    requiredDocuments: [
      'West Bengal Address & Family Identity Proof',
      'Existing Swasthya Sathi Card / URN (for status check or renewal)',
      'Digital Ration Card / Khadya Sathi details',
    ],
    howToApply: [
      'Verify card status and empanelled hospitals on swasthyasathi.gov.in.',
      'For new enrolment or family member additions, submit Form B at the BDO Office, Municipality, or designated health desk.',
      'Check local Health Department advisories regarding co-coverage or migration with Ayushman Bharat PM-JAY.',
    ],
    applicationAvailability: 'Active for existing cardholders; check harmonisation updates with PM-JAY',
    deadline: null,
    officialSourceName: 'Swasthya Sathi Official Portal',
    officialSourceUrl: 'https://swasthyasathi.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Transitioning / Verify Guidelines',
    verificationNote:
      'Integration Notice: Following the 2026 rollout of Ayushman Bharat PM-JAY in West Bengal, Swasthya Sathi beneficiary databases are being harmonised with PM-JAY so resident families retain ₹5 lakh coverage and gain pan-India hospital portability. Confirm active hospital acceptance prior to planned admission.',
    matchRules: {
      universalHousehold: true,
      maxIncomeBracket: 'any',
      familyRoles: ['woman', 'household-head', 'farmer', 'worker', 'senior-citizen'],
    },
  },
  {
    id: 'ayushman-bharat-pmjay',
    name: 'Ayushman Bharat PM-JAY (West Bengal Rollout & Senior 70+)',
    bengaliName: 'আয়ুষ্মান ভারত পিএম-জেএওয়াই',
    categoryId: 'healthcare',
    secondaryCategories: ['pension'],
    providerLevel: 'Joint State & Central',
    department: 'National Health Authority (NHA) & State Health Agency',
    beneficiaryTypes: ['Low-Income Households', 'Senior Citizens', 'All Resident Households'],
    benefitType: 'Cashless Health Cover',
    benefitSummary:
      'Cashless hospitalisation cover up to ₹5 lakh per family per year with pan-India hospital portability, plus universal health coverage for all senior citizens aged 70 and above regardless of income.',
    overview:
      'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) has been rolled out in West Bengal in 2026, unlocking cashless treatment at empanelled public and private hospitals across India—crucial for families travelling out-of-state for specialised medical care—and extending dedicated ₹5 lakh cover to every citizen aged 70+.',
    whoCanBenefit: [
      'Eligible West Bengal families under SECC / state-harmonised beneficiary lists',
      'All senior citizens aged 70 years and above (Ayushman Vaya Vandana Card) irrespective of household income',
      'Families needing cashless tertiary treatment at empanelled hospitals anywhere in India',
    ],
    eligibilityConditions: [
      'Family eligibility based on SECC deprivation criteria or phased West Bengal beneficiary onboarding.',
      'Senior citizens aged 70+ qualify universally regardless of socio-economic status.',
      'e-KYC verification required to generate the Ayushman Card.',
    ],
    benefitDetails: [
      '₹5,00,000 per family per year for cashless secondary and tertiary hospitalisation.',
      'Pan-India portability across thousands of empanelled hospitals nationwide.',
      'Dedicated ₹5 lakh cover for senior citizens aged 70+ (including top-up cover for families already enrolled).',
    ],
    requiredDocuments: [
      'Identity & Age Proof (especially for 70+ Senior Citizen Vaya Vandana Card)',
      'Ration Card / Family Identification Record',
      'Active Mobile Number for portal verification',
    ],
    howToApply: [
      'Check family or 70+ eligibility on beneficiary.nha.gov.in or via the Ayushman App.',
      'Complete e-KYC at a Common Service Centre (CSC), empanelled hospital Ayushman Mitra desk, or self-service portal.',
      'Download your digital Ayushman Card for cashless admission.',
    ],
    applicationAvailability: 'Active across West Bengal (phased onboarding & 70+ open enrollment)',
    deadline: null,
    officialSourceName: 'National Health Authority (PM-JAY Beneficiary Portal)',
    officialSourceUrl: 'https://beneficiary.nha.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      universalHousehold: true,
      maxIncomeBracket: 'any',
      familyRoles: ['senior-70-plus', 'senior-citizen', 'household-head', 'woman', 'farmer', 'worker'],
    },
  },

  // =========================================================================
  // 8. HOUSING (2)
  // =========================================================================
  {
    id: 'banglar-bari',
    name: 'Banglar Bari (Banglar Awaas Yojana)',
    bengaliName: 'বাংলার বাড়ি (বাংলার আবাস যোজনা)',
    categoryId: 'housing',
    providerLevel: 'West Bengal State',
    department: 'Panchayats & Rural Development Department, Govt. of West Bengal',
    beneficiaryTypes: ['Low-Income Households', 'Farmers & Agricultural Workers'],
    benefitType: 'Housing Assistance',
    benefitSummary:
      'Financial assistance of ₹1,20,000 (₹1,30,000 in hilly/Junglemahal/Sundarbans areas) in phased instalments to help houseless or kutcha-house rural families construct a permanent pucca home.',
    overview:
      'Banglar Bari provides direct state-funded housing grants to eligible rural households living in kutcha or dilapidated shelters who were verified in rural housing waitlists and field surveys across West Bengal districts.',
    whoCanBenefit: [
      'Houseless rural families or households residing in 0, 1, or 2-room kutcha dwellings in West Bengal',
      'Verified families listed in district rural housing priority surveys',
    ],
    eligibilityConditions: [
      'Household must not already own a pucca house anywhere in India.',
      'Must be verified under the Gram Panchayat / Block field housing survey and free of motorised 3/4-wheeler or government-service exclusions.',
      'Grant is typically sanctioned in the name of the female head or jointly with spouse.',
    ],
    benefitDetails: [
      '₹1,20,000 total grant in plain areas (₹1,30,000 in notified hill/Sundarbans/Junglemahal areas), released in construction-linked instalments directly to the bank account.',
    ],
    requiredDocuments: [
      'Rural Housing Survey / Waitlist Verification Record',
      'Job Card / Residency Proof',
      'Land Possession / Homestead Proof (or Patta)',
      'Bank Account Passbook',
    ],
    howToApply: [
      'Check published block and Gram Panchayat verified beneficiary lists at your Gram Panchayat or BDO Office.',
      'Submit grievance or inclusion requests during notified district housing survey windows.',
      'Verify instalment release details through local BDO / Panchayat housing cells.',
    ],
    applicationAvailability: 'Phase-wise survey & waitlist verification by District Administration',
    deadline: null,
    officialSourceName: 'Panchayats & Rural Development Dept., WB',
    officialSourceUrl: 'https://wbprd.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Transitioning / Verify Guidelines',
    verificationNote:
      'Beneficiary selection runs via official district/Gram Panchayat verification surveys and phased instalment releases. Confirm whether your household is listed under Banglar Bari or PMAY-G at your BDO office.',
    matchRules: {
      ruralPreferred: true,
      maxIncomeBracket: '1l-2.5l',
      familyRoles: ['household-head', 'farmer', 'worker', 'widow'],
    },
  },
  {
    id: 'pmay-wb',
    name: 'Pradhan Mantri Awas Yojana (PMAY-Gramin & PMAY-Urban 2.0)',
    bengaliName: 'প্রধানমন্ত্রী আবাস যোজনা',
    categoryId: 'housing',
    providerLevel: 'Joint State & Central',
    department: 'Ministry of Rural Development & Ministry of Housing and Urban Affairs',
    beneficiaryTypes: ['Low-Income Households', 'Women & Girls'],
    benefitType: 'Housing Assistance',
    benefitSummary:
      'Central-state housing assistance for constructing pucca houses for eligible rural (PMAY-G) and urban EWS/LIG/MIG (PMAY-U 2.0) families without a permanent house.',
    overview:
      'PMAY aims to ensure permanent, weather-resilient housing with basic amenities for houseless families and residents living in kutcha dwellings across both rural blocks (PMAY-G) and municipal towns/cities (PMAY-U 2.0).',
    whoCanBenefit: [
      'Houseless rural households and families in kutcha houses identified via Awaas+ / SECC surveys (PMAY-G)',
      'Urban EWS (income up to ₹3 lakh), LIG (up to ₹6 lakh), and MIG families owning no pucca house (PMAY-U 2.0)',
    ],
    eligibilityConditions: [
      'Family (husband, wife, unmarried children) must not own a pucca house in any part of India.',
      'Must meet SECC / Awaas+ rural criteria or PMAY-U 2.0 urban income ceilings.',
      'Preference given to widows, single women, SC/ST, minorities, and persons with disabilities.',
    ],
    benefitDetails: [
      'PMAY-G: ₹1.20 lakh (plains) / ₹1.30 lakh (hilly/difficult regions) plus MGNREGA unskilled labour days & sanitation convergence.',
      'PMAY-U 2.0: Beneficiary-Led Construction (BLC) assistance or Interest Subsidy Scheme (ISS) on eligible home loans.',
    ],
    requiredDocuments: [
      'Income Proof (EWS/LIG/MIG for Urban) or SECC/Awaas+ verification (Rural)',
      'Affidavit of Not Owning a Pucca House',
      'Land / Homestead Ownership Proof (for BLC)',
      'Bank Account linked for DBT',
    ],
    howToApply: [
      'For Rural (PMAY-G): Verify status on pmayg.nic.in or via Gram Panchayat / BDO Awaas+ survey.',
      'For Urban (PMAY-U 2.0): Apply online at pmaymis.gov.in or via your local Municipality / Urban Local Body.',
    ],
    applicationAvailability: 'Active via PMAY-U 2.0 portal and rural Awaas+ verification cycles',
    deadline: null,
    officialSourceName: 'PMAY Official Portals (pmayg.nic.in / pmaymis.gov.in)',
    officialSourceUrl: 'https://pmayg.nic.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['household-head', 'worker', 'farmer', 'widow'],
    },
  },

  // =========================================================================
  // 9. FOOD & RATION (2)
  // =========================================================================
  {
    id: 'khadya-sathi',
    name: 'Khadya Sathi Scheme (West Bengal Food Security)',
    bengaliName: 'খাদ্য সাথী প্রকল্প',
    categoryId: 'food',
    providerLevel: 'West Bengal State',
    department: 'Food & Supplies Department, Govt. of West Bengal',
    beneficiaryTypes: ['All Resident Households', 'Low-Income Households'],
    benefitType: 'Food & Ration Security',
    benefitSummary:
      'State food security coverage guaranteeing free or heavily subsidised monthly food grains (rice and wheat/atta) to eligible Digital Ration Card holders across West Bengal.',
    overview:
      'Khadya Sathi expands food security across rural and urban West Bengal by ensuring priority households (AAY, PHH, SPHH, RKSY-I, RKSY-II) receive reliable monthly food grain entitlements through Fair Price Shops and Duare Ration channels.',
    whoCanBenefit: [
      'Low-income and priority households holding AAY, PHH, SPHH, RKSY-I, or RKSY-II Digital Ration Cards',
      'Families seeking new Digital Ration Card issuance, member addition, or category upgrade',
    ],
    eligibilityConditions: [
      'Resident of West Bengal holding a valid Digital Ration Card under eligible subsidy categories.',
      'e-KYC / ration card linking completed at Fair Price Shop or online portal.',
    ],
    benefitDetails: [
      'Free monthly rice and wheat/fortified atta allotments based on ration card category (AAY: 35 kg/family; PHH/SPHH/RKSY-I: 5 kg/person; RKSY-II: 2 kg/person — confirm latest monthly allotment on food.wb.gov.in).',
      'Zero cash outlay for eligible free food grain categories.',
    ],
    requiredDocuments: [
      'Digital Ration Card (or Form 3 / Form 4 for new application or member addition)',
      'Residential Proof in West Bengal',
      'Birth Certificate (when adding a child to family ration card)',
    ],
    howToApply: [
      'Apply online for new card, family member addition, or e-KYC at food.wb.gov.in.',
      'Alternatively, visit your nearest Bangla Sahayata Kendra (BSK) or Block Food Inspector Office.',
    ],
    applicationAvailability: 'Open year-round online and at Bangla Sahayata Kendras (BSK)',
    deadline: null,
    officialSourceName: 'Department of Food & Supplies, Govt. of West Bengal',
    officialSourceUrl: 'https://food.wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      universalHousehold: true,
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['household-head', 'woman', 'farmer', 'worker', 'widow', 'senior-citizen'],
    },
  },
  {
    id: 'wb-pds-onorc',
    name: 'Public Distribution System (WBPDS & One Nation One Ration Card)',
    bengaliName: 'গণবণ্টন ব্যবস্থা ও ডিজিটাল রেশন কার্ড',
    categoryId: 'food',
    providerLevel: 'Joint State & Central',
    department: 'Food & Supplies Dept., WB & Dept. of Food and Public Distribution, GoI',
    beneficiaryTypes: ['Low-Income Households', 'Unorganised & Construction Workers', 'All Resident Households'],
    benefitType: 'Food & Ration Security',
    benefitSummary:
      'Monthly NFSA food grain entitlements accessible at any Fair Price Shop in West Bengal or across India via One Nation One Ration Card (ONORC) portability—vital for migrant workers.',
    overview:
      'The West Bengal Public Distribution System integrated with NFSA and ONORC ensures that eligible families and inter-state migrant workers from West Bengal can draw their entitled food grains anywhere in the country via biometric e-POS authentication.',
    whoCanBenefit: [
      'NFSA priority households (AAY, PHH, SPHH) across West Bengal',
      'Migrant workers from West Bengal working in other districts or states needing portable ration access',
    ],
    eligibilityConditions: [
      'Valid NFSA Digital Ration Card (AAY / PHH / SPHH) seeded with e-KYC.',
      'Biometric authentication at any e-POS enabled Fair Price Shop.',
    ],
    benefitDetails: [
      'Free monthly food grains under NFSA / PMGKAY allocations without needing a new ration card when migrating for work.',
      'Family members remaining at home and migrant workers elsewhere can draw split entitlements seamlessly.',
    ],
    requiredDocuments: [
      'Digital NFSA Ration Card number',
      'Completed Ration Card e-KYC at Fair Price Shop or food.wb.gov.in',
    ],
    howToApply: [
      'Check your ration card status, family allotment, and nearest Fair Price Shop at wbpds.wb.gov.in or food.wb.gov.in.',
      'Use the Mera Ration mobile app to locate portable Fair Price Shops when outside your home district.',
    ],
    applicationAvailability: 'Continuous monthly distribution via Fair Price Shops',
    deadline: null,
    officialSourceName: 'West Bengal PDS Portal',
    officialSourceUrl: 'https://wbpds.wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      universalHousehold: true,
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['worker', 'construction-worker', 'household-head', 'farmer'],
    },
  },

  // =========================================================================
  // 10. EMPLOYMENT & SKILL DEVELOPMENT (4)
  // =========================================================================
  {
    id: 'yuva-sathi-yuvasree',
    name: 'Yuva Sathi / Yuvasree (Youth Employment Assistance)',
    bengaliName: 'যুব সাথী / যুবশ্রী প্রকল্প',
    categoryId: 'employment',
    providerLevel: 'West Bengal State',
    department: 'Department of Labour (Employment Bank), Govt. of West Bengal',
    beneficiaryTypes: ['Unemployed Youth', 'Students'],
    benefitType: 'Skill & Employment Support',
    benefitSummary:
      'Youth employment registration and unemployment assistance framework through West Bengal Employment Bank; current enrollment quotas and updated allowance guidelines require verification.',
    overview:
      'West Bengal’s Employment Bank registers job-seeking youth for employer placements, skill upgrading, and state youth assistance (historically Yuvasree offering ₹1,500/month to selected waitlisted registrants, alongside newer youth support proposals referred to as Yuva Sathi). Because fresh merit-list openings and revised rules depend on active Labour Department notifications, applicants should verify current status directly on the Employment Bank portal.',
    whoCanBenefit: [
      'Unemployed youth permanently residing in West Bengal registered with the Employment Bank',
      'Job-seekers (Class VIII pass and above) seeking placement alerts, vocational training, or state youth allowance updates',
    ],
    eligibilityConditions: [
      'Permanent resident of West Bengal enrolled as a job-seeker on employmentbankwb.gov.in.',
      'Minimum Class VIII qualification (age 18–45 under historical Yuvasree norms; verify current age/income criteria on portal).',
      'Only one member per family is typically eligible for monthly unemployment allowance when open.',
    ],
    benefitDetails: [
      'Free Employment Bank registration for job fairs, employer matching, and skill referrals.',
      'Monthly youth financial assistance (historically ₹1,500/month under Yuvasree for approved waitlisted applicants) — current active disbursement and Yuva Sathi rules require official verification.',
    ],
    requiredDocuments: [
      'Employment Bank Enrolment Number (EB ID)',
      'Educational Qualification Certificates (Class VIII / Madhyamik / HS / Graduate)',
      'Age & West Bengal Residency Proof',
      'Bank Account details (required only when selected for financial assistance)',
    ],
    howToApply: [
      'Register as a New Job Seeker at employmentbankwb.gov.in and validate enrolment at the nearest Employment Exchange within 60 days.',
      'Check the official notifications tab on employmentbankwb.gov.in before applying for any financial allowance.',
    ],
    applicationAvailability: 'Employment Bank registration open; financial allowance subject to official notification',
    deadline: null,
    officialSourceName: 'Employment Bank, Dept. of Labour, WB',
    officialSourceUrl: 'https://www.employmentbankwb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verification Required',
    verificationNote:
      'Verification Required: While Employment Bank job-seeker registration is active, fresh Yuvasree / Yuva Sathi monthly allowance approvals depend on current West Bengal Labour Department circulars and published waiting lists. Do not rely on unofficial forms; check employmentbankwb.gov.in directly.',
    matchRules: {
      requiresUnemployedOrYouth: true,
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['youth-jobseeker', 'student'],
    },
  },
  {
    id: 'utkarsh-bangla',
    name: 'Utkarsh Bangla (PBSSD Skill Development)',
    bengaliName: 'উৎকর্ষ বাংলা প্রকল্প',
    categoryId: 'employment',
    providerLevel: 'West Bengal State',
    department: 'Paschim Banga Society for Skill Development (PBSSD), Dept. of Technical Education',
    beneficiaryTypes: ['Unemployed Youth', 'Students', 'Women & Girls'],
    benefitType: 'Skill & Employment Support',
    benefitSummary:
      'Free short-term, placement-linked vocational skill training (400–1,200 hours) across IT, healthcare, apparel, electronics, retail, and hospitality with government-recognised certification.',
    overview:
      'Utkarsh Bangla is West Bengal’s flagship skill development program providing completely free, industry-aligned vocational training to school dropouts, college graduates, and unemployed youth to boost employability and wage placement.',
    whoCanBenefit: [
      'Youth and adults in West Bengal seeking free job-ready vocational skills',
      'School leavers (Class V/VIII/X/XII), ITI students, and graduates looking for placement assistance',
    ],
    eligibilityConditions: [
      'Resident of West Bengal (typically aged 15–59 depending on chosen trade/sector).',
      'Minimum educational qualification varies by job role (starting from Class V/VIII for trades up to Graduation for IT/ITES).',
    ],
    benefitDetails: [
      '100% free skill training, course materials, assessment, and recognised certification.',
      'Structured placement assistance and job-fair linkages via Training Providers across all 23 West Bengal districts.',
      'No cash payout; benefit is full-fee skill education and career placement support.',
    ],
    requiredDocuments: [
      'Identity & Age Proof',
      'West Bengal Address Proof',
      'Last Educational Qualification Marksheet / Certificate',
      'Passport-size Photographs',
    ],
    howToApply: [
      'Visit pbssd.gov.in and browse available courses and training centres in your district.',
      'Submit online candidate registration or enrol directly at an authorised PBSSD Training Centre or District Project Management Unit (DPMU).',
    ],
    applicationAvailability: 'Rolling batch enrolments throughout the year across all districts',
    deadline: null,
    officialSourceName: 'Paschim Banga Society for Skill Development (PBSSD)',
    officialSourceUrl: 'https://www.pbssd.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresUnemployedOrYouth: true,
      maxIncomeBracket: 'any',
      familyRoles: ['youth-jobseeker', 'student', 'worker', 'woman'],
    },
  },
  {
    id: 'pmkvy-skill',
    name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)',
    bengaliName: 'প্রধানমন্ত্রী কৌশল বিকাশ যোজনা',
    categoryId: 'employment',
    providerLevel: 'Central Government',
    department: 'Ministry of Skill Development and Entrepreneurship (MSDE), Govt. of India',
    beneficiaryTypes: ['Unemployed Youth', 'Unorganised & Construction Workers'],
    benefitType: 'Skill & Employment Support',
    benefitSummary:
      'Free NSQF-aligned industry skill training, upskilling, and Recognition of Prior Learning (RPL) certification for youth and experienced informal workers via Skill India Digital Hub.',
    overview:
      'PMKVY 4.0 equips Indian youth with future-ready skills in green energy, AI/data, manufacturing, healthcare, logistics, and hospitality, while also certifying experienced unorganised workers through Recognition of Prior Learning (RPL).',
    whoCanBenefit: [
      'Unemployed youth and school/college dropouts aged 15–45 seeking certified job skills',
      'Experienced informal workers (electricians, tailors, masons, mechanics) wanting formal government certification (RPL)',
    ],
    eligibilityConditions: [
      'Indian citizen aged 15 to 45 years.',
      'Valid identity document and active bank account (where applicable for assessment/conveyance norms).',
    ],
    benefitDetails: [
      'Zero tuition fee training at Pradhan Mantri Kaushal Kendras (PMKK) and empanelled centres.',
      'Nationally recognised NSQF digital certificate boosting formal employment prospects.',
    ],
    requiredDocuments: [
      'Identity & Age Proof',
      'Educational Certificate (as required by job role)',
      'Active Mobile Number for Skill India Digital Hub registration',
    ],
    howToApply: [
      'Create a candidate profile on the official Skill India Digital Hub (skillindiadigital.gov.in).',
      'Filter West Bengal training centres by district and apply for an open PMKVY 4.0 batch.',
    ],
    applicationAvailability: 'Open rolling admissions via Skill India Digital Hub',
    deadline: null,
    officialSourceName: 'Skill India Digital Hub (MSDE)',
    officialSourceUrl: 'https://www.skillindiadigital.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresUnemployedOrYouth: true,
      maxIncomeBracket: 'any',
      familyRoles: ['youth-jobseeker', 'worker', 'student'],
    },
  },
  {
    id: 'naps-apprenticeship',
    name: 'National Apprenticeship Promotion Scheme (NAPS-2)',
    bengaliName: 'জাতীয় শিক্ষানবিশ প্রকল্প (অ্যাপ্রেন্টিসশিপ)',
    categoryId: 'employment',
    providerLevel: 'Central Government',
    department: 'Ministry of Skill Development and Entrepreneurship (MSDE)',
    beneficiaryTypes: ['Unemployed Youth', 'Students'],
    benefitType: 'Skill & Employment Support',
    benefitSummary:
      'On-the-job paid apprenticeship placements in factories, PSUs, and service establishments with mandatory monthly stipend and government partial stipend DBT support.',
    overview:
      'NAPS bridges the gap between education and formal employment by connecting ITI pass-outs, diploma holders, graduates, and Class 5–12 youth with real workplace apprenticeships earning structured monthly stipends.',
    whoCanBenefit: [
      'Youth aged 14–35 (18+ for hazardous industries) seeking paid on-the-job industrial or corporate training',
      'ITI graduates, Polytechnic diploma holders, and fresh college graduates in West Bengal',
    ],
    eligibilityConditions: [
      'Minimum age 14 years (18 years for hazardous industrial establishments).',
      'Educational qualification as specified by the designated or optional trade (Class V to Graduate).',
    ],
    benefitDetails: [
      'Guaranteed monthly stipend paid by the employer (varies by qualification level, typically ₹5,000–₹9,000+ per month) with partial government DBT contribution.',
      'Verified National Apprenticeship Certificate (NAC) valued in PSU and private hiring.',
    ],
    requiredDocuments: [
      'Educational / ITI / Diploma Certificates',
      'Identity & Date of Birth Proof',
      'Bank Account details for DBT stipend component',
    ],
    howToApply: [
      'Register as a Candidate on apprenticeshipindia.gov.in.',
      'Complete e-KYC, upload academic profile, and apply directly to open apprenticeship vacancies in West Bengal.',
    ],
    applicationAvailability: 'Open year-round with live employer vacancies',
    deadline: null,
    officialSourceName: 'Apprenticeship India Official Portal',
    officialSourceUrl: 'https://www.apprenticeshipindia.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresUnemployedOrYouth: true,
      maxIncomeBracket: 'any',
      familyRoles: ['youth-jobseeker', 'student'],
    },
  },

  // =========================================================================
  // 11. BUSINESS & SELF EMPLOYMENT (3)
  // =========================================================================
  {
    id: 'bhabishyat-credit-card',
    name: 'Bhabishyat Credit Card Scheme (West Bengal)',
    bengaliName: 'ভবিষ্যৎ ক্রেডিট কার্ড প্রকল্প',
    categoryId: 'business',
    secondaryCategories: ['employment'],
    providerLevel: 'West Bengal State',
    department: 'Department of Micro, Small & Medium Enterprises and Textiles (MSME&T), WB',
    beneficiaryTypes: ['Micro-Entrepreneurs', 'Unemployed Youth', 'Women & Girls'],
    benefitType: 'Credit & Business Subsidy',
    benefitSummary:
      'Collateral-free institutional bank loans up to ₹5 lakh for young West Bengal entrepreneurs (aged 18–45) with 10% state margin-money subsidy (up to ₹25,000) and state credit guarantee.',
    overview:
      'Bhabishyat Credit Card empowers youth and aspiring self-employed citizens in West Bengal to start or expand manufacturing, service, retail, or agro-allied micro-enterprises without pledging personal collateral.',
    whoCanBenefit: [
      'West Bengal youth and aspiring micro-entrepreneurs aged 18 to 45 years',
      'Small shopkeepers, artisans, tailoring units, food processors, and local service providers',
    ],
    eligibilityConditions: [
      'Indian citizen residing in West Bengal for the past 10 years, aged 18 to 45 years.',
      'Viable micro-enterprise project proposal in manufacturing, service, trading, or agro-based sectors.',
      'Only one member per family can avail the scheme; must not be a bank loan defaulter.',
    ],
    benefitDetails: [
      'Project loan limit up to ₹5,00,000 through participating public, private, and cooperative banks.',
      'State Government margin-money subsidy of 10% of project cost (capped at ₹25,000).',
      'State-backed credit guarantee support so borrowers do not need third-party collateral.',
    ],
    requiredDocuments: [
      'West Bengal 10-Year Residency Proof',
      'Age & Identity Proof (18–45 years)',
      'Simple Project Report / Business Plan',
      'Bank Account & Educational / Skill Certificate (if any)',
    ],
    howToApply: [
      'Register and submit your project proposal online at bccs.wb.gov.in or via a Bangla Sahayata Kendra (BSK).',
      'Applications are screened at Block / Municipal level and sponsored to your preferred bank branch.',
    ],
    applicationAvailability: 'Open year-round online and via BSK centres',
    deadline: null,
    officialSourceName: 'Bhabishyat Credit Card Scheme Official Portal',
    officialSourceUrl: 'https://bccs.wb.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresBusinessInterest: true,
      maxIncomeBracket: 'any',
      familyRoles: ['entrepreneur', 'youth-jobseeker', 'woman'],
    },
  },
  {
    id: 'pm-mudra',
    name: 'Pradhan Mantri Mudra Yojana (PMMY)',
    bengaliName: 'প্রধানমন্ত্রী মুদ্রা যোজনা',
    categoryId: 'business',
    providerLevel: 'Central Government',
    department: 'Department of Financial Services, Ministry of Finance, Govt. of India',
    beneficiaryTypes: ['Micro-Entrepreneurs', 'Women & Girls'],
    benefitType: 'Credit & Business Subsidy',
    benefitSummary:
      'Collateral-free business loans under Shishu (up to ₹50,000), Kishore (₹50,000–₹5 lakh), Tarun (₹5–₹10 lakh), and Tarun Plus (up to ₹20 lakh for repeat borrowers) for non-farm micro-enterprises.',
    overview:
      'PMMY extends formal institutional credit through banks, RRBs, NBFCs, and microfinance institutions to small shopkeepers, vendors, artisans, transport operators, and women entrepreneurs who lack formal collateral.',
    whoCanBenefit: [
      'Small business owners, street vendors, artisans, repair shops, and service micro-enterprises',
      'Women entrepreneurs and first-time business founders across urban and rural West Bengal',
    ],
    eligibilityConditions: [
      'Any Indian citizen with a viable income-generating non-farm small/micro enterprise plan (or allied agriculture activity).',
      'Satisfactory credit history (no wilful bank default).',
      'Tarun Plus (up to ₹20 lakh) applies to entrepreneurs who previously availed and successfully repaid a Tarun loan.',
    ],
    benefitDetails: [
      'Shishu: Loans up to ₹50,000 for early-stage ventures.',
      'Kishore: Loans from ₹50,001 to ₹5,00,000.',
      'Tarun: Loans from ₹5,00,001 to ₹10,00,000; Tarun Plus up to ₹20,00,000 for repeat repaid borrowers.',
      'No collateral security required; standard commercial bank interest rates apply.',
    ],
    requiredDocuments: [
      'Identity & Address Proof',
      'Business Proof / Udyam Registration / Local Trade License (if existing)',
      'Quotations for machinery/equipment or working capital estimate',
      'Bank Statement (for existing businesses)',
    ],
    howToApply: [
      'Apply online through the official JanSamarth portal (jansamarth.in) or udyamimitra.in.',
      'Alternatively, visit your nearest Public Sector Bank, Regional Rural Bank (e.g., PBGB/BGVB), or cooperative bank branch.',
    ],
    applicationAvailability: 'Open year-round across participating banks & JanSamarth portal',
    deadline: null,
    officialSourceName: 'PMMY / JanSamarth National Portal',
    officialSourceUrl: 'https://www.mudra.org.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresBusinessInterest: true,
      maxIncomeBracket: 'any',
      familyRoles: ['entrepreneur', 'woman', 'youth-jobseeker'],
    },
  },
  {
    id: 'pmegp',
    name: 'Prime Minister’s Employment Generation Programme (PMEGP)',
    bengaliName: 'প্রধানমন্ত্রী কর্মসংস্থান সৃষ্টি প্রকল্প (PMEGP)',
    categoryId: 'business',
    providerLevel: 'Central Government',
    department: 'Ministry of MSME (KVIC / KVIB / District Industries Centre)',
    beneficiaryTypes: ['Micro-Entrepreneurs', 'Unemployed Youth', 'Women & Girls', 'SC / ST / Minority Communities'],
    benefitType: 'Credit & Business Subsidy',
    benefitSummary:
      'Credit-linked capital subsidy of 15% to 35% of project cost for setting up new manufacturing units (up to ₹50 lakh) or service enterprises (up to ₹20 lakh).',
    overview:
      'PMEGP generates sustainable self-employment by pairing bank term loans with substantial back-ended government margin-money subsidies, with higher subsidy rates for rural areas, women, SC/ST, OBC, minorities, and persons with disabilities.',
    whoCanBenefit: [
      'New entrepreneurs aged 18+ planning manufacturing or service micro-enterprises',
      'Higher subsidy tiers (25% urban / 35% rural) for Women, SC, ST, OBC, Minorities, and PwD applicants',
    ],
    eligibilityConditions: [
      'Applicant must be at least 18 years old.',
      'Minimum Class VIII pass required for manufacturing projects above ₹10 lakh or service projects above ₹5 lakh.',
      'Applicable strictly for setting up brand-new projects (existing units are not eligible for initial PMEGP grant).',
    ],
    benefitDetails: [
      'Maximum project cost: ₹50 lakh (Manufacturing) and ₹20 lakh (Service sector).',
      'Subsidy for General Category: 15% (Urban) / 25% (Rural).',
      'Subsidy for Special Category (Women, SC/ST/OBC/Minority/PwD): 25% (Urban) / 35% (Rural).',
    ],
    requiredDocuments: [
      'Detailed Project Report (DPR)',
      'Identity, Address & Educational Qualification Certificate',
      'Special Category Certificate (SC/ST/OBC/Minority/PwD) if claiming higher subsidy',
      'Rural Area Certificate (if setting up unit in a Gram Panchayat area)',
    ],
    howToApply: [
      'Apply online at the official KVIC PMEGP portal (kviconline.gov.in/pmegpeportal).',
      'Select implementing agency (KVIC, WB KVIB, or District Industries Centre) for screening and bank forwarding.',
      'Complete mandatory EDP (Entrepreneurship Development Programme) training before subsidy release.',
    ],
    applicationAvailability: 'Open year-round on KVIC PMEGP portal',
    deadline: null,
    officialSourceName: 'KVIC PMEGP Official Portal',
    officialSourceUrl: 'https://www.kviconline.gov.in/pmegpeportal/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresBusinessInterest: true,
      maxIncomeBracket: 'any',
      familyRoles: ['entrepreneur', 'youth-jobseeker', 'woman'],
    },
  },

  // =========================================================================
  // 12. WORKERS & SOCIAL SECURITY (3)
  // =========================================================================
  {
    id: 'bmssy',
    name: 'Bina Mulya Samajik Suraksha Yojana (BM-SSY)',
    bengaliName: 'বিনামূল্যে সামাজিক সুরক্ষা যোজনা',
    categoryId: 'workers',
    providerLevel: 'West Bengal State',
    department: 'Department of Labour, Govt. of West Bengal',
    beneficiaryTypes: ['Unorganised & Construction Workers', 'Low-Income Households'],
    benefitType: 'Worker Social Security',
    benefitSummary:
      'Zero-contribution social security cover for West Bengal’s unorganised sector workers—offering state-funded Provident Fund savings, ₹2 lakh accidental death/disability cover, health grants, and children’s education assistance.',
    overview:
      'Under BM-SSY, the Government of West Bengal pays the entire monthly social security contribution on behalf of registered unorganised workers (such as domestic workers, rickshaw pullers, weavers, transport workers, street vendors, and small shop staff), building a maturity Provident Fund payable at age 60 alongside family protection benefits.',
    whoCanBenefit: [
      'Unorganised sector workers in West Bengal aged 18 to 60 years across notified trades',
      'Construction and transport workers covered under unified WB social security benefits',
    ],
    eligibilityConditions: [
      'Permanent resident of West Bengal aged 18–60 years working in a notified unorganised industry or self-employed occupation.',
      'Monthly family income generally up to ₹6,500 (verify category-specific norms for transport/construction workers on BM-SSY portal).',
      'Not covered under formal EPF or ESIC.',
    ],
    benefitDetails: [
      '100% state-paid Provident Fund contribution (₹55/month deposited by Govt. of WB) payable with interest at age 60.',
      'Death & Disability Relief: ₹2,00,000 for accidental death or permanent total disability; ₹50,000 for natural death.',
      'Annual medical assistance grants and education stipends (₹4,000 to ₹30,000) for workers’ children in higher classes.',
    ],
    requiredDocuments: [
      'Age & West Bengal Residency Proof (18–60 years)',
      'Work / Occupation Self-Certification (verified by SLO / BDO / Councillor / Trade Union)',
      'Bank Account Passbook & Nominee Details',
    ],
    howToApply: [
      'Register online at bmssy.wblabour.gov.in or apply through your Block Labour Welfare Facilitation Centre (LWFC) / Bangla Sahayata Kendra.',
      'Obtain your Samajik Suraksha Yojana Passbook / Smart Card for claiming benefits.',
    ],
    applicationAvailability: 'Open year-round online and at Block LWFC / BSK offices',
    deadline: null,
    officialSourceName: 'BM-SSY Official Portal (Labour Dept., WB)',
    officialSourceUrl: 'https://bmssy.wblabour.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresWorkerOrUnorganised: true,
      maxIncomeBracket: '1l-2.5l',
      familyRoles: ['worker', 'construction-worker'],
    },
  },
  {
    id: 'eshram-workers',
    name: 'e-Shram Unorganised Worker Welfare & PMSBY Accident Cover',
    bengaliName: 'ই-শ্রম অসংগঠিত শ্রমিক পোর্টাল',
    categoryId: 'workers',
    providerLevel: 'Central Government',
    department: 'Ministry of Labour & Employment, Govt. of India',
    beneficiaryTypes: ['Unorganised & Construction Workers', 'Farmers & Agricultural Workers'],
    benefitType: 'Worker Social Security',
    benefitSummary:
      'National Universal Account Number (UAN) registration for unorganised workers, gig workers, domestic helpers, and agricultural labourers, integrating ₹2 lakh accidental insurance (PMSBY) and central welfare portability.',
    overview:
      'e-Shram creates a verified national database of unorganised workers aged 16–59 so migrant, gig, platform, and daily-wage workers can access social security schemes, accidental coverage, skill linkages, and disaster relief across state borders.',
    whoCanBenefit: [
      'Unorganised workers, gig & platform workers, street vendors, domestic workers, and agricultural labourers aged 16–59',
      'Inter-state migrant workers from West Bengal seeking portable central welfare access',
    ],
    eligibilityConditions: [
      'Age between 16 and 59 years.',
      'Engaged in unorganised work and not an income tax payer or member of EPFO / ESIC.',
    ],
    benefitDetails: [
      'Free nationwide 12-digit e-Shram UAN Card.',
      'Accidental death and permanent total disability cover of ₹2,00,000 (₹1,00,000 for partial disability) linked via PMSBY guidelines.',
      'Single-window discovery of central welfare schemes (e-Shram One-Stop-Solution).',
    ],
    requiredDocuments: [
      'Identity Verification & Active Mobile Number',
      'Active Savings Bank Account (IFSC)',
      'Occupation & Skill Details',
    ],
    howToApply: [
      'Self-register free of cost at eshram.gov.in or visit any Common Service Centre (CSC).',
      'Download your digital e-Shram Card immediately after registration.',
    ],
    applicationAvailability: 'Open year-round online & via CSCs',
    deadline: null,
    officialSourceName: 'e-Shram National Portal (Ministry of Labour)',
    officialSourceUrl: 'https://eshram.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresWorkerOrUnorganised: true,
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['worker', 'construction-worker', 'farmer'],
    },
  },
  {
    id: 'wb-construction-workers',
    name: 'West Bengal Building & Other Construction Workers Welfare Scheme',
    bengaliName: 'পশ্চিমবঙ্গ নির্মাণ কর্মী কল্যাণ প্রকল্প',
    categoryId: 'workers',
    providerLevel: 'West Bengal State',
    department: 'West Bengal Building & Other Construction Workers Welfare Board (Labour Dept.)',
    beneficiaryTypes: ['Unorganised & Construction Workers'],
    benefitType: 'Worker Social Security',
    benefitSummary:
      'Dedicated social security package for registered masons, carpenters, painters, electricians, and construction labourers—covering pension at 60, maternity benefit, tool grants, medical aid, and children’s education.',
    overview:
      'Administered by the West Bengal Building & Other Construction Workers Welfare Board (integrated with the BM-SSY workflow), this statutory scheme protects construction workers who have worked at least 90 days in building or construction work during the preceding year.',
    whoCanBenefit: [
      'Masons, helpers, electricians, plumbers, carpenters, bar-benders, painters, and road/building construction workers aged 18–60',
      'Families and school/college-going children of registered construction workers',
    ],
    eligibilityConditions: [
      'Aged between 18 and 60 years and engaged in building or other construction work in West Bengal for at least 90 days in the preceding 12 months.',
      'Registered as a Construction Worker beneficiary with the Labour Department (BM-SSY / WB BOCW Board).',
    ],
    benefitDetails: [
      'Monthly pension upon attaining age 60 (for workers completing minimum qualifying registration years).',
      'Accidental death benefit of ₹2,00,000; natural death relief of ₹50,000 + funeral assistance.',
      'Maternity benefit for registered female construction workers, spectacle/medical grants, and annual education assistance for children.',
    ],
    requiredDocuments: [
      '90-Day Construction Work Certificate (employer / contractor / Gram Panchayat / Councillor / Trade Union)',
      'Age & Identity Proof (18–60 years)',
      'Bank Account Passbook & Nominee Details',
    ],
    howToApply: [
      'Register under the Construction Worker category on bmssy.wblabour.gov.in or at your local Block Labour Welfare Facilitation Centre (LWFC).',
      'Keep registration active to claim education, maternity, medical, or pension benefits through the LWFC.',
    ],
    applicationAvailability: 'Open year-round via BM-SSY portal & Block LWFC offices',
    deadline: null,
    officialSourceName: 'West Bengal Labour Dept. (BM-SSY / BOCW)',
    officialSourceUrl: 'https://bmssy.wblabour.gov.in/',
    lastVerifiedDate: 'November 2026',
    verificationStatus: 'Verified Active',
    matchRules: {
      requiresWorkerOrUnorganised: true,
      maxIncomeBracket: '2.5l-5l',
      familyRoles: ['construction-worker', 'worker'],
    },
  },
];

export function getSchemeById(id: string): SchemeRecord | undefined {
  return SCHEMES.find((scheme) => scheme.id === id);
}

export function getSchemesInCategory(categoryId: string): SchemeRecord[] {
  if (categoryId === 'all') {
    return SCHEMES;
  }
  return SCHEMES.filter(
    (s) => s.categoryId === categoryId || (s.secondaryCategories && s.secondaryCategories.includes(categoryId as Exclude<typeof s.categoryId, 'all'>))
  );
}
