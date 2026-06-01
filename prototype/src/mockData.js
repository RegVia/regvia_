// Comprehensive Mock Data for the RegVia high-fidelity Indian compliance prototype

export const businessPersonas = {
  fintech: {
    id: "fintech",
    companyName: "PayVia Technologies Private Limited",
    cin: "U72200KA2021PTC145622",
    gstin: "29AAACP1234A1Z5",
    pan: "AACP1234A",
    businessType: "Private Limited",
    industry: "FinTech / Digital Payments",
    state: "Karnataka (Bengaluru)",
    employeeCount: 85,
    revenueRange: "₹10 Cr - ₹50 Cr",
    healthScore: 92,
    riskScores: {
      compliance: 8, // Risk is 8/100 (very clean)
      regulatory: 18,
      operational: 12
    },
    alerts: [
      { id: "ft-a1", severity: "high", category: "RBI Regulatory", text: "Submit quarterly report on Prepaid Payment Instruments (PPI) transaction volumes by 15th June.", action: "Submit Report", dueDate: "2026-06-15" },
      { id: "ft-a2", severity: "medium", category: "Data Protection", text: "DPDP Act internal audit framework assessment required for customer data storage policies.", action: "Run Risk Assessment", dueDate: "2026-06-30" },
      { id: "ft-a3", severity: "low", category: "TDS Filing", text: "Quarterly TDS statement verification (Form 26Q) for vendor payouts.", action: "Verify TDS Ledger", dueDate: "2026-07-15" }
    ],
    stats: {
      openTasks: 4,
      upcomingDeadlines: 7,
      missedFilings: 0,
      activeRegistrations: 12
    },
    copilotPresets: [
      { q: "What RBI filings are due this quarter?", a: "For your PPI license, PayVia has two critical RBI compliance obligations this quarter:\n1. **Quarterly PPI Report:** Under RBI master directions, you must submit details of PPI issuance and transaction volumes by the 15th of the month succeeding the quarter end (Due 15th June).\n2. **Cyber Security Audit Certificate:** The annual system audit report (SAR) by a CERT-In empanelled auditor is scheduled for submission by 30th June.\n\n*Action Recommended:* Run the pre-audit checklist in the Governance tab to verify all security assertions." },
      { q: "What compliances apply to FinTechs in India?", a: "FinTech companies in India are governed by a multi-layered regulatory framework depending on their sub-sector:\n- **Payments:** RBI PPI Master Directions, Payment Aggregator (PA) guidelines, and BBPS guidelines.\n- **Data Privacy:** Digital Personal Data Protection (DPDP) Act 2023 (mandatory consent managers, data fiduciary audits).\n- **Taxation:** GST (GSTR-1, GSTR-3B) with special reverse-charge provisions for import of cloud services, and Section 194J/194C TDS on technical services.\n- **Corporate:** MCA filings (AOC-4, MGT-7) and FEMA compliance if there is foreign direct investment (FDI)." },
      { q: "Tell me about our GST compliance status.", a: "Your GST status is **Compliant (100% On Time)**. GSTR-1 for May 2026 has been drafted. The GSTR-3B ledger is fully reconciled with GSTR-2B. Net tax liability of ₹18,45,210 is calculated, with Input Tax Credit (ITC) of ₹4,20,500 successfully offset. Auto-payment will trigger on 18th June." }
    ],
    calendar: [
      { id: "cal-ft1", title: "GST GSTR-1 Monthly Filing", date: "2026-06-11", category: "GST", status: "Draft", priority: "high", owner: "Fin Team" },
      { id: "cal-ft2", title: "RBI PPI Quarterly Return (Q1)", date: "2026-06-15", category: "RBI", status: "Pending Approval", priority: "critical", owner: "Compliance Ops" },
      { id: "cal-ft3", title: "GST GSTR-3B Return & Payment", date: "2026-06-20", category: "GST", status: "Upcoming", priority: "high", owner: "Fin Team" },
      { id: "cal-ft4", title: "TDS Deposit (May Month)", date: "2026-06-07", category: "TDS", status: "Completed", priority: "high", owner: "Accounts Team" },
      { id: "cal-ft5", title: "PF & ESIC Statutory Deposits", date: "2026-06-15", category: "Labour", status: "Upcoming", priority: "medium", owner: "HR Team" },
      { id: "cal-ft6", title: "Q1 Board Meeting & Resolution", date: "2026-06-25", category: "Governance", status: "Review", priority: "high", owner: "Company Sec" },
      { id: "cal-ft7", title: "Professional Tax (PT) Deposit", date: "2026-06-30", category: "Labour", status: "Upcoming", priority: "low", owner: "HR Team" }
    ],
    documents: [
      { name: "Certificate of Incorporation.pdf", category: "Corporate", status: "Verified", expiry: "Permanent", impact: "High", summary: "CIN U72200KA2021PTC145622. Incorporated on 14th April 2021 as a Private Limited company. Authorized capital is ₹1,00,00,000 divided into 10,00,000 equity shares of ₹10 each." },
      { name: "GST Certificate (REG-06).pdf", category: "Tax", status: "Verified", expiry: "Permanent", impact: "High", summary: "GSTIN 29AAACP1234A1Z5. Principal place of business is HSR Layout, Bengaluru, Karnataka. Covers software services, digital gift cards, and payments facilitation." },
      { name: "RBI PPI License Authorization.pdf", category: "Licenses", status: "Verified", expiry: "2031-03-31", impact: "Critical", summary: "RBI Authorization under Payment and Settlement Systems Act 2007. Authorizes issuance of semi-closed Prepaid Payment Instruments up to limit of ₹2,00,000 per wallet. Subject to annual audit certificates." },
      { name: "Memorandum of Association (MOA).pdf", category: "Corporate", status: "Verified", expiry: "Permanent", impact: "High", summary: "Main objects clause permits digital platform development, fintech products, payment processing software, e-commerce support, and general transactional platforms." },
      { name: "Articles of Association (AOA).pdf", category: "Corporate", status: "Verified", expiry: "Permanent", impact: "High", summary: "Rules governing internal corporate administration, board appointments, transfer of shares, and dynamic drag-along and tag-along clauses standard for VC-backed entities." },
      { name: "Nikhil & Co. System Audit Report.pdf", category: "Governance", status: "Review", expiry: "2026-06-30", impact: "Critical", summary: "Cyber security and systems audit report under RBI PA/PPI norms. Recommends minor patch updates for firewall logs and role-based access reviews." }
    ],
    licenses: [
      { name: "RBI PPI Wallet License", status: "Active", renewalDate: "2031-03-31", workflow: "Fully Compliant", team: "Legal & Regulatory Ops", risk: "Low" },
      { name: "GSTIN Registration (Karnataka)", status: "Active", renewalDate: "Permanent", workflow: "Monthly Filings", team: "Finance & Taxation", risk: "Low" },
      { name: "Shop & Establishment License (KA)", status: "Active", renewalDate: "2027-10-18", workflow: "Automatic Renewal", team: "Operations", risk: "Low" },
      { name: "MSME Udyam Registration", status: "Active", renewalDate: "Permanent", workflow: "Benefit Trackers Active", team: "Finance & Legal", risk: "Low" },
      { name: "Intellectual Property / Brand Trademark", status: "Pending", renewalDate: "2026-11-05", workflow: "Hearing Stage", team: "IP Counsel", risk: "Medium" }
    ],
    pipeline: {
      draft: [
        { id: "pipe-1", title: "GSTR-1 May Data Entry", desc: "Compile invoice log from Stripe API and verify transaction export errors.", priority: "High" }
      ],
      review: [
        { id: "pipe-2", title: "Q1 Board Resolution Draft", desc: "Draft resolutions for approving employee ESOP extensions and banking mandate updates.", priority: "Medium" }
      ],
      pendingApproval: [
        { id: "pipe-3", title: "Quarterly RBI PPI Data Log", desc: "Transaction volume logs generated. Awaiting sign-off from Chief Compliance Officer.", priority: "Critical" }
      ],
      readyForFiling: [
        { id: "pipe-4", title: "Professional Tax KA Deposit", desc: "₹18,200 total PT deducted from salaries. Challan ready to deposit via Treasury website.", priority: "Low" }
      ],
      filed: [
        { id: "pipe-5", title: "TDS Form 24Q (Salary Q4)", desc: "Quarterly return for employee salaries successfully processed and filed under trace portal.", priority: "High" }
      ],
      completed: [
        { id: "pipe-6", title: "GST May Challan Payment", desc: "Auto-debit mandate triggered successfully on GST common portal.", priority: "High" }
      ]
    },
    governance: {
      meetings: [
        { title: "Q1 Board Meeting", date: "2026-06-25", agenda: "Financial Review, ESOP allocation, RBI Audit review", status: "Scheduled" },
        { title: "Extraordinary General Meeting (EGM)", date: "2026-04-10", agenda: "Increase in authorized capital for Series A funding", status: "Completed" }
      ],
      resolutions: [
        { id: "RES-2026-01", title: "Adoption of Annual Financials FY25-26", date: "2026-05-15", status: "Passed" },
        { id: "RES-2026-02", title: "Allotment of Series A Seed Shares", date: "2026-04-12", status: "Passed" }
      ],
      capTable: {
        valuation: "₹85,00,00,000",
        totalShares: 1542000,
        investors: [
          { name: "Nikhil Kamath (Founder)", shares: 600000, type: "Equity", percentage: "38.9%" },
          { name: "Rahul Prasad (Co-founder)", shares: 400000, type: "Equity", percentage: "25.9%" },
          { name: "Peak XV Partners (Series A)", shares: 400000, type: "Preference", percentage: "25.9%" },
          { name: "ESOP Pool", shares: 142000, type: "Option", percentage: "9.3%" }
        ]
      }
    },
    intelligence: [
      { id: "intel-1", source: "Reserve Bank of India (RBI)", title: "Stricter KYC rules for Digital Wallets & Prepaid Instruments", date: "2026-05-28", priority: "High", impact: "Requires transition of minimum-KYC accounts to full biometrics within 90 days. High impact on onboarding funnel.", action: "Integrate DigiLocker KYC API into wallet registration workflow immediately." },
      { id: "intel-2", source: "Ministry of Electronics & IT (MeitY)", title: "DPDP Consent Architecture Rules Notified", date: "2026-05-10", priority: "Medium", impact: "All websites collecting consumer financial logs must implement clear double opt-in consent dashboards.", action: "Deploy RegVia Consent Banner script to capture and audit consumer opt-ins." }
    ]
  },

  nbfc: {
    id: "nbfc",
    companyName: "RegCred Finance India Limited",
    cin: "L65910MH1998PLC115321",
    gstin: "27AABCR5678B1ZX",
    pan: "ABCR5678B",
    businessType: "Public Limited (NBFC)",
    industry: "Non-Banking Financial Services (Lending)",
    state: "Maharashtra (Mumbai)",
    employeeCount: 240,
    revenueRange: "₹50 Cr - ₹100 Cr",
    healthScore: 78,
    riskScores: {
      compliance: 22, // Risk is 22/100 (needs attention)
      regulatory: 35,
      operational: 28
    },
    alerts: [
      { id: "nbfc-a1", severity: "high", category: "RBI NBFC Audit", text: "Submit Fair Practices Code compliance certificate to regional RBI office. Audit report is missing signatures.", action: "Sign & Submit Code", dueDate: "2026-06-12" },
      { id: "nbfc-a2", severity: "high", category: "MCA Compliance", text: "Form PAS-3 (Return of Allotment) overdue for non-convertible debentures issued in April.", action: "File Form PAS-3", dueDate: "2026-06-08" },
      { id: "nbfc-a3", severity: "medium", category: "CIBIL Reporting", text: "CIBIL Credit Information Monthly Return verification delayed. Cross-check consumer loans data.", action: "Run Credit File Audit", dueDate: "2026-06-10" }
    ],
    stats: {
      openTasks: 9,
      upcomingDeadlines: 11,
      missedFilings: 2,
      activeRegistrations: 18
    },
    copilotPresets: [
      { q: "Which licenses are expiring?", a: "For RegCred Finance, your primary license is the **RBI Certificate of Registration (CoR)** for NBFC activity, which is **Permanent** but subject to complying with annual prudential guidelines.\n\nHowever, your **Securitization Registry Certificate (CERSAI Registration)** requires password renewals every 12 months. Current expiration date is 25th June. \n\n*Action Required:* Head over to the License Manager and trigger the automated credential rotation to complete renewal." },
      { q: "What happens if GST filing is delayed?", a: "For NBFCs, delayed GST filings (GSTR-1 or GSTR-3B) lead to heavy financial and compliance penalties:\n1. **Late Fees:** ₹50 per day (₹20 for nil returns) under CGST + SGST.\n2. **Interest Liability:** 18% per annum on the cash component of the tax liability.\n3. **Compliance Rating Drop:** Delayed filings are instantly flagged on GSTIN portals, damaging bank credit scores.\n4. **Input Tax Credit Lockout:** Your corporate borrowers cannot claim credit for the interest/fees they pay you unless you file your GSTR-1 on time." },
      { q: "What filings are due this month?", a: "RegCred Finance has **4 critical filings** due this month:\n1. **MCA Form PAS-3:** (Due 8th June - **OVERDUE**). Needs immediate action to report public debenture allotments.\n2. **CIBIL Monthly Credit Return:** (Due 10th June). Monthly compliance reporting of consumer loan accounts.\n3. **RBI DNBS-01 Return:** (Due 15th June). Financial information regarding liquidity assets.\n4. **GST GSTR-3B:** (Due 20th June). Filing and net payment of interest tax." }
    ],
    calendar: [
      { id: "cal-nb1", title: "MCA Form PAS-3 (NCD Return)", date: "2026-06-08", category: "MCA", status: "Overdue", priority: "critical", owner: "Company Sec" },
      { id: "cal-nb2", title: "CIBIL Monthly Data File", date: "2026-06-10", category: "RBI", status: "Draft", priority: "high", owner: "Risk Desk" },
      { id: "cal-nb3", title: "RBI DNBS-01 Return Deposit", date: "2026-06-15", category: "RBI", status: "Upcoming", priority: "high", owner: "Compliance Ops" },
      { id: "cal-nb4", title: "GSTR-1 Monthly Return", date: "2026-06-11", category: "GST", status: "Review", priority: "high", owner: "Accounts Team" },
      { id: "cal-nb5", title: "GST GSTR-3B Net Payment", date: "2026-06-20", category: "GST", status: "Upcoming", priority: "high", owner: "Finance Desk" },
      { id: "cal-nb6", title: "Annual Audit Board Review", date: "2026-06-24", category: "Governance", status: "Scheduled", priority: "medium", owner: "CEO Office" }
    ],
    documents: [
      { name: "RBI NBFC License (CoR).pdf", category: "Licenses", status: "Verified", expiry: "Permanent", impact: "Critical", summary: "RBI Registration No. B-14.02562. Grants NBFC Status (Non-Deposit taking Systemically Important). Active since August 1998. Requires quarterly compliance declarations." },
      { name: "CERSAI Portal Registration.pdf", category: "Licenses", status: "Verified", expiry: "2026-06-25", impact: "High", summary: "Security Interest Registration. Enables file filing for mortgage assets and car lease deeds. Renewal due in 24 days." },
      { name: "Fair Practices Code Policy.docx", category: "Governance", status: "Review", expiry: "Permanent", impact: "High", summary: "Code details interest rate policies, recovery agent guidelines, grievance redressal matrix. Requires immediate signature updates by board directors." },
      { name: "Audited Balancesheet FY25.pdf", category: "Tax", status: "Verified", expiry: "Permanent", impact: "High", summary: "Statutory financials filed with MCA. Net profits show ₹14.8 Cr on lending base of ₹420 Cr. Capital adequacy ratio stands at robust 18.2%." }
    ],
    licenses: [
      { name: "RBI Certificate of Registration", status: "Active", renewalDate: "Permanent", workflow: "Audits Active", team: "Executive Board", risk: "Low" },
      { name: "CERSAI Asset Registry Seal", status: "Active", renewalDate: "2026-06-25", workflow: "Renewal In Progress", team: "Mortgage Operations", risk: "High" },
      { name: "GSTIN (Maharashtra Head Office)", status: "Active", renewalDate: "Permanent", workflow: "Monthly Returns", team: "Taxation Cell", risk: "Low" },
      { name: "FIU-IND (Financial Intelligence Unit) Node", status: "Active", renewalDate: "Permanent", workflow: "SAR reporting", team: "KYC Desk", risk: "Medium" }
    ],
    pipeline: {
      draft: [
        { id: "pipe-nb1", title: "DNBS-03 Asset Allocation Return", desc: "Aggregate gold loan and LAP loan balances for quarterly asset backing return.", priority: "High" }
      ],
      review: [
        { id: "pipe-nb2", title: "CIBIL Monthly Borrower Ledger", desc: "Validate negative entries, write-offs, and defaults before sending to credit bureaus.", priority: "High" }
      ],
      pendingApproval: [
        { id: "pipe-nb3", title: "PAS-3 Return of Debenture Allotment", desc: "Awaiting final digital signature (DSC) of Director Sharma to submit on MCA V3 portal.", priority: "Critical" }
      ],
      readyForFiling: [
        { id: "pipe-nb4", title: "GSTR-1 May Export", desc: "Interest income invoices reconciled. Waiting to click upload button.", priority: "High" }
      ],
      filed: [
        { id: "pipe-nb5", title: "TDS Deposit May", desc: "Challan generated and payment made through corporate SBI Netbanking portal.", priority: "Medium" }
      ],
      completed: [
        { id: "pipe-nb6", title: "RBI Annual Statutory Liquidity Deposit", desc: "Return generated, verified, and sent to central audit cell.", priority: "Critical" }
      ]
    },
    governance: {
      meetings: [
        { title: "Statutory Audit Committee Meeting", date: "2026-06-24", agenda: "Prudential limits, statutory defaults, NPA provisioning", status: "Scheduled" },
        { title: "Annual General Meeting (AGM)", date: "2025-09-18", agenda: "Approval of financial dividends, director reelection", status: "Completed" }
      ],
      resolutions: [
        { id: "RES-NBFC-08", title: "Sanction of Non-Convertible Debenture issue of ₹20 Cr", date: "2026-04-05", status: "Passed" },
        { id: "RES-NBFC-09", title: "Adoption of RBI revised prompt corrective framework", date: "2026-05-10", status: "Passed" }
      ],
      capTable: {
        valuation: "₹2,40,00,00,000",
        totalShares: 12000000,
        investors: [
          { name: "RegCred Promoters Holding Group", shares: 7200000, type: "Equity", percentage: "60.0%" },
          { name: "ICICI Prudential Mutual Fund", shares: 2400000, type: "Equity", percentage: "20.0%" },
          { name: "Retail Public Shareholders", shares: 2400000, type: "Equity", percentage: "20.0%" }
        ]
      }
    },
    intelligence: [
      { id: "intel-nb1", source: "Reserve Bank of India", title: "Revision of Capital Adequacy Ratio (CAR) for Middle-Layer NBFCs", date: "2026-05-25", priority: "Critical", impact: "Increases minimum CAR to 15.5% from present 15.0%. Requires raising fresh equity or tier-2 capital in next 6 months.", action: "Initiate draft resolution for board meeting to explore fresh NCD allotments." },
      { id: "intel-nb2", source: "MCA V3 Portal Advisory", title: "Transition of all L-series company codes to V3 Portal", date: "2026-05-18", priority: "Medium", impact: "Expect signature verification delays on MCA portal for forms like PAS-3.", action: "Register all director DSCs in the revised V3 portal node." }
    ]
  },

  saas: {
    id: "saas",
    companyName: "SaaSFlow Software Private Limited",
    cin: "U72900DL2022PTC398450",
    gstin: "07AACCX9876C2ZS",
    pan: "AACCX9876C",
    businessType: "Private Limited",
    industry: "B2B SaaS / Software Products",
    state: "Delhi (New Delhi)",
    employeeCount: 25,
    revenueRange: "₹2 Cr - ₹10 Cr",
    healthScore: 96,
    riskScores: {
      compliance: 4, // Extremely clean
      regulatory: 8,
      operational: 10
    },
    alerts: [
      { id: "saas-a1", severity: "medium", category: "GST", text: "Letter of Undertaking (LUT) for FY26 GST-Free Software Exports requires filing validation.", action: "Verify LUT Status", dueDate: "2026-06-15" },
      { id: "saas-a2", severity: "low", category: "Labour", text: "Half-yearly return under Delhi Shop & Establishment Act due.", action: "Draft Return", dueDate: "2026-07-31" }
    ],
    stats: {
      openTasks: 2,
      upcomingDeadlines: 3,
      missedFilings: 0,
      activeRegistrations: 6
    },
    copilotPresets: [
      { q: "What compliances apply to B2B SaaS in India?", a: "For B2B SaaS companies targeting global clients, compliance revolves around tax-exempt exports and corporate governance:\n1. **GST LUT (Letter of Undertaking):** Filed annually to export software services without paying integrated GST (IGST) upfront.\n2. **FEMA & Softex Forms:** Compliance under RBI rules for reporting software export invoice receipts via authorized dealer banks.\n3. **TDS on tech assets:** Reconciling tax deducted at source by corporate Indian buyers (Section 194J).\n4. **Annual Corporate Filing:** Standard MCA returns like AOC-4 (Financials) and MGT-7 (Annual Return)." },
      { q: "What is an LUT and how do we check it?", a: "An **LUT (Letter of Undertaking)** is an online filing under GST that lets SaaS exporters invoice international customers at 0% IGST without blocking capital in tax refunds. SaaSFlow has registered its LUT for FY 2026-27 (ARN: AD0704260029381). Active and compliant. Next renewal is required in April 2027." }
    ],
    calendar: [
      { id: "cal-saas1", title: "GST LUT Annual Renewal Check", date: "2026-06-15", category: "GST", status: "Draft", priority: "medium", owner: "Tax Advisor" },
      { id: "cal-saas2", title: "GSTR-1 Export Invoice Upload", date: "2026-06-11", category: "GST", status: "Upcoming", priority: "high", owner: "Accounts Ops" },
      { id: "cal-saas3", title: "Quarterly TDS Deposit Form 26Q", date: "2026-07-31", category: "TDS", status: "Upcoming", priority: "medium", owner: "Finance Exec" }
    ],
    documents: [
      { name: "Incorporation Seal.pdf", category: "Corporate", status: "Verified", expiry: "Permanent", impact: "High", summary: "Delhi Inc Code U72900DL2022PTC398450. Incorporated March 2022. Operating from Okhla Phase 3, New Delhi." },
      { name: "Active GST LUT FY26.pdf", category: "Tax", status: "Verified", expiry: "2027-03-31", impact: "High", summary: "Letter of Undertaking for zero-rated software exports. Authorized under registration CGST rules." },
      { name: "Standard SaaS TermsofService.pdf", category: "Contracts", status: "Verified", expiry: "Permanent", impact: "Medium", summary: "Customer contract templates governing SLA guarantees, liability limitations, and payment terms." }
    ],
    licenses: [
      { name: "GSTIN Delhi (Export Hub)", status: "Active", renewalDate: "Permanent", workflow: "Monthly Reporting", team: "Finance Desk", risk: "Low" },
      { name: "Shop & Establishment Code (DL)", status: "Active", renewalDate: "Permanent", workflow: "Declarations Done", team: "HR Operations", risk: "Low" },
      { name: "Trademark SaaSFlow Logo", status: "Active", renewalDate: "2032-05-14", workflow: "Secured", team: "IP Counsel", risk: "Low" }
    ],
    pipeline: {
      draft: [
        { id: "pipe-s1", title: "Verify International Invoices", desc: "Match PayPal and Stripe transfers with GSTR-1 zero-rated tables.", priority: "High" }
      ],
      review: [],
      pendingApproval: [],
      readyForFiling: [
        { id: "pipe-s2", title: " दिल्ली PT registration filing", desc: "HR verification of employee professional tax brackets.", priority: "Low" }
      ],
      filed: [
        { id: "pipe-s3", title: "MCA Form DIR-3 KYC", desc: "Successfully filed KYC declarations for both directors for the year.", priority: "Medium" }
      ],
      completed: []
    },
    governance: {
      meetings: [
        { title: "Annual Review Meeting", date: "2026-05-05", agenda: "FY26 balance sheet approval", status: "Completed" }
      ],
      resolutions: [
        { id: "RES-SF-01", title: "Approve transfer of intellectual property from founders to corporate entity", date: "2022-04-10", status: "Passed" }
      ],
      capTable: {
        valuation: "₹30,00,00,000",
        totalShares: 1000000,
        investors: [
          { name: "Abhishek Goel (Founder)", shares: 450000, type: "Equity", percentage: "45.0%" },
          { name: "Vikram Seth (Co-founder)", shares: 450000, type: "Equity", percentage: "45.0%" },
          { name: "Y-Combinator (SAFE)", shares: 100000, type: "Preference", percentage: "10.0%" }
        ]
      }
    },
    intelligence: [
      { id: "intel-s1", source: "GST Council", title: "Exemption of GST on software cloud hosting servers sourced globally", date: "2026-05-18", priority: "Low", impact: "Reduces net RCM burden on overseas AWS accounts.", action: "Provide GSTIN number to AWS bill settings under export portal rules." }
    ]
  },

  manufacturing: {
    id: "manufacturing",
    companyName: "InduForge Components Private Limited",
    cin: "U34100TG2015PTC099412",
    gstin: "36AADCI4321D1ZH",
    pan: "ADCI4321D",
    businessType: "Private Limited",
    industry: "Manufacturing / Auto Parts",
    state: "Telangana (Hyderabad)",
    employeeCount: 150,
    revenueRange: "₹5 Cr - ₹20 Cr",
    healthScore: 72,
    riskScores: {
      compliance: 28, // High Risk
      regulatory: 24,
      operational: 38
    },
    alerts: [
      { id: "mfg-a1", severity: "high", category: "Labour Laws", text: "Employee Provident Fund (EPF) and Employee State Insurance (ESIC) deposits overdue for April.", action: "Deposit EPF & ESIC", dueDate: "2026-06-15" },
      { id: "mfg-a2", severity: "high", category: "Pollution Board", text: "Consents under Air & Water Act (TSPCB) expiring next month. Immediate emission logs audit required.", action: "Apply for TSPCB Renewal", dueDate: "2026-07-05" },
      { id: "mfg-a3", severity: "medium", category: "Factory Act", text: "Conduct bi-annual safety training and update register of hazardous machinery.", action: "Log Safety Audit", dueDate: "2026-06-20" }
    ],
    stats: {
      openTasks: 8,
      upcomingDeadlines: 10,
      missedFilings: 1,
      activeRegistrations: 14
    },
    copilotPresets: [
      { q: "What compliances apply to MSME manufacturing?", a: "Manufacturing MSMEs face heavy operational, labor, and safety rules:\n1. **Factories Act 1948:** Mandatory ventilation, shifts regulations, safety gear register, and annual inspector visits.\n2. **Labour Laws:** EPF (if >20 staff), ESIC (if >10 staff), and Payment of Gratuity Act.\n3. **Pollution Clearances:** Consent to Establish (CTE) & Consent to Operate (CTO) under Air & Water Acts.\n4. **MSME/Udyam Portal:** Annual filings to retain priority sector lending privileges and protections under the Delayed Payments Act." },
      { q: "What happens if PF payment is delayed?", a: "Statutory PF payments must be deposited by the 15th of the succeeding month. Delay causes serious penalties:\n- **Damages (Section 14B):** Slapped at rates ranging from 5% to 25% per annum depending on delay duration.\n- **Interest (Section 7Q):** Compulsory 12% per annum simple interest on outstanding dues.\n- **Director Liability:** Non-payment of employee-deducted PF constitutes criminal breach of trust under the Indian Penal Code (IPC 406/409)." }
    ],
    calendar: [
      { id: "cal-mfg1", title: "EPF & ESIC Monthly Deposit", date: "2026-06-15", category: "Labour", status: "Overdue", priority: "critical", owner: "HR Manager" },
      { id: "cal-mfg2", title: "TSPCB Factory Emission Return", date: "2026-07-05", category: "Licenses", status: "Draft", priority: "high", owner: "Plant Lead" },
      { id: "cal-mfg3", title: "GSTR-1 Auto Parts Sales", date: "2026-06-11", category: "GST", status: "Upcoming", priority: "high", owner: "Plant Accountant" }
    ],
    documents: [
      { name: "Factory Safety Certificate.pdf", category: "Licenses", status: "Verified", expiry: "2026-12-15", impact: "High", summary: "Factory layout license signed by Inspector of Factories Telangana. Authorized for heavy forging machinery up to 120 HP load." },
      { name: "TSPCB Air Water Clearance.pdf", category: "Licenses", status: "Verified", expiry: "2026-07-05", impact: "Critical", summary: "Consent to Operate issued by Telangana State Pollution Control Board. Requires monthly monitoring of treated sewage discharge levels." },
      { name: "EPF Register May.xlsx", category: "Labour", status: "Review", expiry: "Permanent", impact: "High", summary: "Monthly wage sheet listing base salaries, deductions, and matching employer contributions for 150 active factory workers." }
    ],
    licenses: [
      { name: "Factories Act Working License", status: "Active", renewalDate: "2026-12-15", workflow: "Physical Inspection Pending", team: "Plant Safety Committee", risk: "Medium" },
      { name: "TSPCB Consent to Operate (CTO)", status: "Active", renewalDate: "2026-07-05", workflow: "Emission Audit Commenced", team: "Environment Lead", risk: "High" },
      { name: "Udyam MSME Registration Certificate", status: "Active", renewalDate: "Permanent", workflow: "Benefits Tracker", team: "Accounts Desk", risk: "Low" },
      { name: "Boiler Safety Certificate", status: "Active", renewalDate: "2026-08-30", workflow: "Boiler Test Scheduled", team: "Engineering Desk", risk: "Low" }
    ],
    pipeline: {
      draft: [
        { id: "pipe-m1", title: "Register of Safety Equipment Audit", desc: "Update stock counts of fire extinguishers, steel toe boots, and ear muffs.", priority: "Medium" }
      ],
      review: [
        { id: "pipe-m2", title: "EPF Payroll Deduction Log", desc: "Cross-check salary sheets of 20 contractual packers with contractor invoices.", priority: "High" }
      ],
      pendingApproval: [],
      readyForFiling: [
        { id: "pipe-m3", title: "TSPCB Green Consent Renewal", desc: "Form filings prepared. Emission testing laboratory reports uploaded successfully.", priority: "Critical" }
      ],
      filed: [],
      completed: [
        { id: "pipe-m4", title: "Half-yearly Gratuity Return", desc: "Lodged with District Labour Commissioner, Hyderabad West.", priority: "Medium" }
      ]
    },
    governance: {
      meetings: [
        { title: "Workers Health Committee Meet", date: "2026-05-10", agenda: "Factory clinic supplies, heat wave adjustments", status: "Completed" }
      ],
      resolutions: [
        { id: "RES-MFG-04", title: "Approval to procure 40 Ton Forging Press", date: "2026-03-28", status: "Passed" }
      ],
      capTable: {
        valuation: "₹15,00,00,000",
        totalShares: 500000,
        investors: [
          { name: "Guruswamy Naidu (Promoter)", shares: 350000, type: "Equity", percentage: "70.0%" },
          { name: "Naidu Family Trusts", shares: 150000, type: "Equity", percentage: "30.0%" }
        ]
      }
    },
    intelligence: [
      { id: "intel-m1", source: "Ministry of Labour", title: "Revisions in Minimum Wages Act Telangana State", date: "2026-05-15", priority: "High", impact: "Increases skilled worker base wage by ₹1,200 per month. Raises statutory base for PF calculations.", action: "Apply new base rate structures in June salary sheet calculations." }
    ]
  },

  cafirm: {
    id: "cafirm",
    companyName: "Sharma & Associates CA",
    cin: "Partnership / FRN: 104562W",
    gstin: "27AADFS9999F1ZF",
    pan: "AADFS9999F",
    businessType: "Partnership Firm",
    industry: "Chartered Accountants / Audit",
    state: "Maharashtra (Mumbai)",
    employeeCount: 45,
    revenueRange: "₹5 Cr - ₹15 Cr",
    healthScore: 89,
    riskScores: {
      compliance: 11,
      regulatory: 14,
      operational: 9
    },
    stats: {
      openTasks: 23,
      upcomingDeadlines: 31,
      missedFilings: 3,
      activeRegistrations: 50
    },
    alerts: [
      { id: "ca-a1", severity: "high", category: "NBFC Client", text: "RegCred Finance MCA Form PAS-3 is overdue (due 8th June). Needs partner review.", action: "Review PAS-3", dueDate: "2026-06-08" },
      { id: "ca-a2", severity: "high", category: "Mfg Client", text: "InduForge Components EPF return is overdue (due 15th June). Client has not remitted cash.", action: "Contact Client", dueDate: "2026-06-15" },
      { id: "ca-a3", severity: "medium", category: "Fintech Client", text: "PayVia RBI PPI return status is pending authorization. Recheck figures.", action: "Audit Figures", dueDate: "2026-06-15" },
      { id: "ca-a4", severity: "low", category: "Firm Operations", text: "ICAI CPE hours deadline approaching for 3 partners. 8 hours remaining each.", action: "Schedule CPE", dueDate: "2026-06-30" }
    ],
    copilotPresets: [
      { q: "Show clients with critical warnings", a: "Here are the clients with **Critical Compliance Warnings**:\n1. **RegCred Finance Limited:** Form PAS-3 (NCD Return) is **OVERDUE** by 2 days. Fine accumulating at ₹100/day. Immediate partner signoff required.\n2. **InduForge Components:** EPF/ESIC Monthly deposits for April are **OVERDUE**. Client reported liquidity bottlenecks.\n3. **PayVia Technologies:** RBI PPI license audit pending review. Audited system logs show small security warning tags." },
      { q: "What filings are due for our audit client base?", a: "Across your CA portfolio, there are **31 filings** due this month. \n- **GST returns (GSTR-1):** 18 clients (Due 11th June)\n- **TDS deposits:** 22 clients (Due 7th June - 95% complete)\n- **Labour returns:** 5 manufacturing units (Due 15th June)\n- **MCA forms:** 3 public companies (Various dates)" },
      { q: "What is the firm's aggregate compliance health?", a: "Sharma & Associates manages **4 active client portfolios** on RegVia. Aggregate metrics:\n- **Average Compliance Health:** 84.5% (weighted by revenue exposure)\n- **Total Open Tasks:** 23 across all clients\n- **Missed Filings This Month:** 3 (RegCred: 2, InduForge: 1)\n- **At-Risk Licenses:** CERSAI renewal for RegCred Finance (25th June)\n\n*Recommendation:* Prioritize RegCred Finance — their PAS-3 is accruing daily fines and CERSAI access will lapse if not renewed." }
    ],
    clients: [
      { name: "PayVia Technologies Pvt Ltd", industry: "Fintech", health: 92, openTasks: 4, missed: 0, priority: "High" },
      { name: "RegCred Finance India Ltd", industry: "NBFC / lending", health: 78, openTasks: 9, missed: 2, priority: "Critical" },
      { name: "SaaSFlow Software Pvt Ltd", industry: "B2B SaaS", health: 96, openTasks: 2, missed: 0, priority: "Medium" },
      { name: "InduForge Components Pvt Ltd", industry: "Manufacturing", health: 72, openTasks: 8, missed: 1, priority: "High" }
    ],
    calendar: [
      { id: "cal-ca1", title: "Batch GSTR-1 Filing (18 Clients)", date: "2026-06-11", category: "GST", status: "Draft", priority: "high", owner: "Tax Team Lead" },
      { id: "cal-ca2", title: "RegCred MCA Form PAS-3", date: "2026-06-08", category: "MCA", status: "Overdue", priority: "critical", owner: "Partner Sharma" },
      { id: "cal-ca3", title: "InduForge EPF/ESIC Deposit", date: "2026-06-15", category: "Labour", status: "Overdue", priority: "critical", owner: "Associate Mehta" },
      { id: "cal-ca4", title: "Batch GSTR-3B Filing (18 Clients)", date: "2026-06-20", category: "GST", status: "Upcoming", priority: "high", owner: "Tax Team Lead" },
      { id: "cal-ca5", title: "PayVia RBI PPI Quarterly Report", date: "2026-06-15", category: "RBI", status: "Pending Approval", priority: "high", owner: "Partner Joshi" },
      { id: "cal-ca6", title: "TDS Form 24Q/26Q Batch (22 Clients)", date: "2026-07-15", category: "TDS", status: "Upcoming", priority: "medium", owner: "Compliance Desk" },
      { id: "cal-ca7", title: "Firm GST Return (Own)", date: "2026-06-20", category: "GST", status: "Draft", priority: "medium", owner: "Accounts Exec" },
      { id: "cal-ca8", title: "Quarterly Partner Review Meeting", date: "2026-06-28", category: "Governance", status: "Scheduled", priority: "medium", owner: "Managing Partner" }
    ],
    documents: [
      { name: "ICAI Firm Registration Certificate.pdf", category: "Licenses", status: "Verified", expiry: "Permanent", impact: "Critical", summary: "ICAI Firm Registration No. 104562W. Partnership firm registered with Institute of Chartered Accountants of India. 3 partners authorized for statutory audit engagements." },
      { name: "ICAI Peer Review Certificate.pdf", category: "Governance", status: "Verified", expiry: "2028-03-31", impact: "High", summary: "Peer Review Board certificate issued after satisfactory review of audit quality. Valid for 3 years. Required for audit of listed and public companies." },
      { name: "Professional Tax Registration (MH).pdf", category: "Tax", status: "Verified", expiry: "Permanent", impact: "Medium", summary: "Professional Tax Enrollment Certificate for Maharashtra. Monthly deductions deposited for 45 employees. Compliance rate: 100%." },
      { name: "GST Certificate (Own Firm).pdf", category: "Tax", status: "Verified", expiry: "Permanent", impact: "High", summary: "GSTIN 27AADFS9999F1ZF. Registered for professional audit and advisory services. Principal place of business: Nariman Point, Mumbai." },
      { name: "Tax Audit Working Papers - PayVia.xlsx", category: "Corporate", status: "Review", expiry: "2026-09-30", impact: "High", summary: "Section 44AB tax audit engagement papers for PayVia Technologies FY25-26. Includes detailed revenue verification, expense vouching, and compliance matrix." },
      { name: "Engagement Letter Template.docx", category: "Contracts", status: "Verified", expiry: "Permanent", impact: "Medium", summary: "Standard SA-210 compliant engagement letter template covering scope, responsibilities, fees, and limitation of liability for statutory audit mandates." }
    ],
    licenses: [
      { name: "ICAI Firm Registration (FRN)", status: "Active", renewalDate: "Permanent", workflow: "Annual Declaration", team: "Managing Partner", risk: "Low" },
      { name: "Peer Review Certificate", status: "Active", renewalDate: "2028-03-31", workflow: "Triennial Review", team: "Quality Control Partner", risk: "Low" },
      { name: "GSTIN (Maharashtra)", status: "Active", renewalDate: "Permanent", workflow: "Monthly Filing", team: "Firm Accounts", risk: "Low" },
      { name: "Professional Tax Registration", status: "Active", renewalDate: "Permanent", workflow: "Monthly Deposit", team: "HR & Payroll", risk: "Low" },
      { name: "UDIN Registration (3 Partners)", status: "Active", renewalDate: "Permanent", workflow: "Per-Document Generation", team: "All Partners", risk: "Low" }
    ],
    pipeline: {
      draft: [
        { id: "pipe-ca1", title: "Batch GSTR-1 Compilation (18 Clients)", desc: "Aggregate sales invoices from Tally exports and reconcile with e-Way bills.", priority: "High" },
        { id: "pipe-ca2", title: "InduForge EPF Wage Sheet Review", desc: "Client submitted updated wage registers. Cross-check contractor deductions.", priority: "Critical" }
      ],
      review: [
        { id: "pipe-ca3", title: "PayVia RBI PPI Transaction Log", desc: "Quarterly digital wallet volume data reviewed. Minor rounding variances flagged.", priority: "High" }
      ],
      pendingApproval: [
        { id: "pipe-ca4", title: "RegCred PAS-3 (NCD Allotment)", desc: "Form prepared. Waiting for Director DSC signature from client board.", priority: "Critical" }
      ],
      readyForFiling: [
        { id: "pipe-ca5", title: "SaaSFlow DIR-3 KYC (Director)", desc: "Annual director KYC verification form ready for MCA upload.", priority: "Low" }
      ],
      filed: [
        { id: "pipe-ca6", title: "Batch TDS May Challan (22 Clients)", desc: "All TDS challans deposited via OLTAS. NSDL acknowledgements archived.", priority: "High" }
      ],
      completed: [
        { id: "pipe-ca7", title: "PayVia Tax Audit Draft Report", desc: "Section 44AB audit report for FY25-26 compiled and sent to partner for review.", priority: "Medium" }
      ]
    },
    governance: {
      meetings: [
        { title: "Quarterly Partner Review", date: "2026-06-28", agenda: "Client portfolio review, revenue distribution, hiring plan", status: "Scheduled" },
        { title: "Annual Partner Retreat", date: "2026-03-15", agenda: "FY26 strategy, new service lines, technology investments", status: "Completed" }
      ],
      resolutions: [
        { id: "RES-CA-01", title: "Adoption of RegVia platform for multi-client compliance management", date: "2026-04-01", status: "Passed" },
        { id: "RES-CA-02", title: "Appointment of Associate Mehta as Labour Compliance lead", date: "2026-05-10", status: "Passed" },
        { id: "RES-CA-03", title: "Approval of CPE training budget ₹3,50,000 for FY27", date: "2026-05-20", status: "Passed" }
      ],
      capTable: {
        valuation: "₹8,00,00,000 (Firm Capital)",
        totalShares: 100,
        investors: [
          { name: "CA Rajesh Sharma (Managing Partner)", shares: 40, type: "Capital", percentage: "40.0%" },
          { name: "CA Priya Joshi (Audit Partner)", shares: 35, type: "Capital", percentage: "35.0%" },
          { name: "CA Amit Desai (Tax Partner)", shares: 25, type: "Capital", percentage: "25.0%" }
        ]
      }
    },
    intelligence: [
      { id: "intel-ca1", source: "ICAI Advisory", title: "Mandatory UDIN for all certifications and audit reports", date: "2026-05-20", priority: "High", impact: "All audit reports, tax audit certificates (Form 3CA/3CB), and GST audit certificates must carry a valid UDIN generated within 60 days of signing.", action: "Verify all pending reports have UDIN generated before submission deadlines." },
      { id: "intel-ca2", source: "CBDT Circular 08/2026", title: "Revised thresholds for Tax Audit applicability under Section 44AB", date: "2026-05-15", priority: "Medium", impact: "Turnover threshold for mandatory tax audit increased to ₹10 Cr for businesses with digital receipts exceeding 95%. Re-assess 4 clients for audit applicability.", action: "Run threshold check across client portfolio and update engagement letters." },
      { id: "intel-ca3", source: "MCA Notification", title: "Extended deadline for filing ADT-1 (Auditor Appointment)", date: "2026-05-28", priority: "Low", impact: "Form ADT-1 deadline extended by 30 days for FY26 auditor appointments. Affects 3 clients with pending board resolutions.", action: "Update compliance calendar deadlines for RegCred and InduForge ADT-1 filings." }
    ]
  }
};
