import React, { useState, useEffect } from "react";
import { 
  Building, 
  FileText, 
  Calendar, 
  Shield, 
  Activity, 
  MessageSquare, 
  Folder, 
  Layers, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Send, 
  ArrowRight, 
  Clock, 
  User, 
  Plus, 
  FileUp, 
  Search, 
  Share2, 
  FileSignature, 
  TrendingDown, 
  Compass,
  FileCheck,
  RefreshCw,
  HelpCircle,
  AlertCircle,
  Zap
} from "lucide-react";
import { businessPersonas } from "./mockData";

// Simple inline markdown: **bold**, *italic*, and newlines
function renderMarkdown(text) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function App() {
  // Navigation and State
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [onboardStep, setOnboardStep] = useState(1);
  const [activePersonaKey, setActivePersonaKey] = useState("fintech");
  const [activeTab, setActiveTab] = useState("dashboard");

  // Onboarding Form Inputs
  const [formInputs, setFormInputs] = useState({
    companyName: "",
    cin: "",
    gstin: "",
    pan: "",
    businessType: "Private Limited",
    industry: "FinTech / Digital Payments",
    state: "Karnataka",
    employeeCount: "50-100",
    revenueRange: "₹10 Cr - ₹50 Cr"
  });

  // Simulation states
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanningProgressText, setScanningProgressText] = useState("");
  const [mappingRoadmap, setMappingRoadmap] = useState([]);
  const [filingPipeline, setFilingPipeline] = useState({});
  const [activePersona, setActivePersona] = useState(businessPersonas.fintech);

  // Calendar filter state
  const [calendarFilter, setCalendarFilter] = useState("All");
  const [activeCalendar, setActiveCalendar] = useState([]);

  // Copilot Chat logs
  const [chatMessages, setChatMessages] = useState([]);
  const [customQuestion, setCustomQuestion] = useState("");

  // Document Vault State
  const [selectedVaultCategory, setSelectedVaultCategory] = useState("All");
  const [selectedVaultDoc, setSelectedVaultDoc] = useState(null);

  // Cap table dynamic calculator state
  const [capSharesList, setCapSharesList] = useState([]);

  // Toast notification state
  const [toasts, setToasts] = useState([]);

  // Risk Engine parameters
  const [stressAuditRate, setStressAuditRate] = useState(90);
  const [stressStaffCount, setStressStaffCount] = useState(85);

  // GSTR-3B Quick File Modal
  const [showFilingModal, setShowFilingModal] = useState(false);
  const [selectedFilingItem, setSelectedFilingItem] = useState(null);
  const [filingStep, setFilingStep] = useState("draft"); // draft -> paying -> success

  // Show toast notification
  const showToast = (title, desc) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, desc }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Initialize Persona Data on load or toggle
  useEffect(() => {
    const data = businessPersonas[activePersonaKey];
    if (data) {
      setActivePersona(data);
      // Reset pipeline state
      if (data.pipeline) {
        setFilingPipeline(JSON.parse(JSON.stringify(data.pipeline)));
      }
      // Reset Calendar state
      if (data.calendar) {
        setActiveCalendar(JSON.parse(JSON.stringify(data.calendar)));
      }
      // Reset Copilot Chat
      setChatMessages([
        { sender: "ai", text: `Hello! I am your RegVia Compliance Copilot for **${data.companyName}**. I've indexed your corporate documents, licenses, and transaction ledgers. Ask me anything about your GST, TDS, PF, or corporate filings due this month!` }
      ]);
      // Reset document selection
      setSelectedVaultDoc(null);
      // Reset cap table dynamically from persona data
      if (data.governance && data.governance.capTable) {
        setCapSharesList(data.governance.capTable.investors.map(inv => ({ ...inv })));
      } else {
        setCapSharesList([]);
      }
    }
  }, [activePersonaKey]);

  // Pre-fill Onboarding Form to help User
  const prefillOnboarding = (type) => {
    if (type === "fintech") {
      setFormInputs({
        companyName: "PayVia Technologies Private Limited",
        cin: "U72200KA2021PTC145622",
        gstin: "29AAACP1234A1Z5",
        pan: "AACP1234A",
        businessType: "Private Limited",
        industry: "FinTech / Digital Payments",
        state: "Karnataka",
        employeeCount: "85",
        revenueRange: "₹10 Cr - ₹50 Cr"
      });
      setActivePersonaKey("fintech");
    } else if (type === "nbfc") {
      setFormInputs({
        companyName: "RegCred Finance India Limited",
        cin: "L65910MH1998PLC115321",
        gstin: "27AABCR5678B1ZX",
        pan: "ABCR5678B",
        businessType: "Public Limited (NBFC)",
        industry: "Non-Banking Financial Services (Lending)",
        state: "Maharashtra",
        employeeCount: "240",
        revenueRange: "₹50 Cr - ₹100 Cr"
      });
      setActivePersonaKey("nbfc");
    } else if (type === "saas") {
      setFormInputs({
        companyName: "SaaSFlow Software Private Limited",
        cin: "U72900DL2022PTC398450",
        gstin: "07AACCX9876C2ZS",
        pan: "AACCX9876C",
        businessType: "Private Limited",
        industry: "B2B SaaS / Software Products",
        state: "Delhi",
        employeeCount: "25",
        revenueRange: "₹2 Cr - ₹10 Cr"
      });
      setActivePersonaKey("saas");
    } else if (type === "manufacturing") {
      setFormInputs({
        companyName: "InduForge Components Private Limited",
        cin: "U34100TG2015PTC099412",
        gstin: "36AADCI4321D1ZH",
        pan: "ADCI4321D",
        businessType: "Private Limited",
        industry: "Manufacturing / Auto Parts",
        state: "Telangana",
        employeeCount: "150",
        revenueRange: "₹5 Cr - ₹20 Cr"
      });
      setActivePersonaKey("manufacturing");
    }
  };

  // Step 2 Document Upload simulator
  const handleFileUpload = (docName) => {
    if (uploadedFiles.includes(docName)) return;
    setUploadedFiles([...uploadedFiles, docName]);
    
    // Trigger Scanning Animation
    setIsScanning(true);
    setScanningProgressText("Initializing OCR Engine...");
    
    setTimeout(() => {
      setScanningProgressText("Extracting metadata... Identifying Entity seals...");
    }, 1000);

    setTimeout(() => {
      setScanningProgressText(`Successfully extracted data from ${docName}! Matching details against MCA V3 database.`);
    }, 2000);

    setTimeout(() => {
      setIsScanning(false);
    }, 2800);
  };

  const handleAllUploads = () => {
    const list = ["Certificate of Incorporation", "PAN Certificate", "GST REG-06", "MOA & AOA", "MSME Certificate"];
    setUploadedFiles(list);
    setIsScanning(true);
    setScanningProgressText("AI OCR: Parsing all uploaded documents concurrently...");
    setTimeout(() => setScanningProgressText("Extracting clauses from MOA & AOA object keys..."), 1200);
    setTimeout(() => setScanningProgressText("Cross-matching GSTRN validation seals with GST Network logs..."), 2200);
    setTimeout(() => {
      setIsScanning(false);
    }, 3200);
  };

  // Step 3 compliance mapping trigger
  const runComplianceMapping = () => {
    setOnboardStep(3);
    const mappings = [
      { name: "GST GSTR-1 & GSTR-3B Filings", desc: "Monthly tax filings under CGST, SGST, IGST rules.", confidence: 99 },
      { name: "Corporate MCA Annual Returns (AOC-4, MGT-7)", desc: "Statutory financials and shareholding pattern compliance.", confidence: 98 },
      { name: "Income Tax TDS returns (Form 24Q / 26Q)", desc: "Quarterly statements of tax deducted at source.", confidence: 96 }
    ];

    if (activePersonaKey === "fintech") {
      mappings.push({ name: "RBI PPI Quarterly Performance Log (DNBS)", desc: "Capital requirements, volume logging and audits.", confidence: 95 });
      mappings.push({ name: "CERT-In Cyber Security Audit SAR", desc: "Annual digital system safety certification.", confidence: 94 });
    } else if (activePersonaKey === "nbfc") {
      mappings.push({ name: "RBI Capital Adequacy Return (DNBS-01)", desc: "Prudential parameters, net owned funds tracker.", confidence: 97 });
      mappings.push({ name: "CERSAI Asset Security Registrations", desc: "Online mortgage/collateral charges documentation.", confidence: 95 });
      mappings.push({ name: "FIU-IND Anti-Money Laundering Node", desc: "Suspicious transaction logs audits.", confidence: 93 });
    } else if (activePersonaKey === "saas") {
      mappings.push({ name: "GST Letter of Undertaking (LUT)", desc: "Exempts export sales from integrated GST deposits.", confidence: 99 });
      mappings.push({ name: "Delhi Shop & Establishment Act Logs", desc: "State labour declarations for technology assets.", confidence: 95 });
    } else if (activePersonaKey === "manufacturing") {
      mappings.push({ name: "Factories Act 1948 Compliance", desc: "Health, ventilation, shifts log and inspector files.", confidence: 97 });
      mappings.push({ name: "TSPCB Air & Water Act CTO Returns", desc: "State environmental board emission level logs.", confidence: 92 });
      mappings.push({ name: "EPF & ESIC Statutory Subscriptions", desc: "Monthly staff pension and health coverage.", confidence: 98 });
    }

    setMappingRoadmap(mappings);
  };

  // Advance Kanban Stage
  const movePipelineCard = (cardId, currentStage) => {
    const updated = { ...filingPipeline };
    const stages = ["draft", "review", "pendingApproval", "readyForFiling", "filed", "completed"];
    const currentIdx = stages.indexOf(currentStage);
    if (currentIdx === -1 || currentIdx === stages.length - 1) return;

    const nextStage = stages[currentIdx + 1];
    const card = updated[currentStage].find(c => c.id === cardId);
    if (card) {
      // Remove from current
      updated[currentStage] = updated[currentStage].filter(c => c.id !== cardId);
      // Add to next
      updated[nextStage] = [...updated[nextStage], card];
      setFilingPipeline(updated);
    }
  };

  // Calendar quick file triggers
  const openFilingFlow = (item) => {
    setSelectedFilingItem(item);
    setFilingStep("draft");
    setShowFilingModal(true);
  };

  const processFilingSubmit = () => {
    setFilingStep("paying");
    setTimeout(() => {
      // Complete filing
      const updated = activeCalendar.map(c => {
        if (c.id === selectedFilingItem.id) {
          return { ...c, status: "Completed" };
        }
        return c;
      });
      setActiveCalendar(updated);
      setFilingStep("success");
    }, 2000);
  };

  // AI Copilot presets or custom questions handler
  const handleCopilotQuery = (queryText) => {
    const userMsg = { sender: "user", text: queryText };
    setChatMessages(prev => [...prev, userMsg]);

    // Check presets
    const match = activePersona.copilotPresets.find(p => p.q.toLowerCase().includes(queryText.toLowerCase()) || queryText.toLowerCase().includes(p.q.toLowerCase()));
    
    // Typing simulation
    setTimeout(() => {
      let replyText = "";
      if (match) {
        replyText = match.a;
      } else {
        replyText = `RegVia AI Engine has analyzed your workspace details:\n\nBased on your profile as a **${activePersona.businessType}** operating in **${activePersona.state}**, filing obligations like GST, PAN tax brackets, and Labour Codes are active. The query matches standard MCA and CBDT norms.\n\n*Drafting Recommendation:* We recommend running a direct document reconciliation scan in your vault. Do you want me to write the board resolution or outline draft emails to your CA partners?`;
      }
      setChatMessages(prev => [...prev, { sender: "ai", text: replyText }]);
    }, 1000);
  };

  // Total calculated shares
  const capSum = capSharesList.reduce((a, inv) => a + inv.shares, 0) || 1;

  return (
    <div className="app">
      {/* ======================================================== */}
      {/* ONBOARDING FLOW MODAL */}
      {/* ======================================================== */ }
      {!isOnboarded && (
        <div className="onboarding-screen">
          <div className="onboarding-container">
            <div className="onboarding-header">
              <h1><Building size={28} /> RegVia Onboarding Portal</h1>
              <p>Initialize India's AI-Native Compliance and Corporate OS for your Venture</p>
            </div>

            <div className="onboarding-steps">
              <div className={`step-indicator ${onboardStep >= 1 ? "active" : ""} ${onboardStep > 1 ? "completed" : ""}`}>
                {onboardStep > 1 ? <CheckCircle size={16} /> : "1"} Organization Info
              </div>
              <div className={`step-indicator ${onboardStep >= 2 ? "active" : ""} ${onboardStep > 2 ? "completed" : ""}`}>
                {onboardStep > 2 ? <CheckCircle size={16} /> : "2"} Upload Documents
              </div>
              <div className={`step-indicator ${onboardStep === 3 ? "active" : ""}`}>
                3 AI Compliance Map
              </div>
            </div>

            <div className="onboarding-body">
              {/* STEP 1: CREATE ORG */}
              {onboardStep === 1 && (
                <div>
                  <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", alignSelf: "center", color: "var(--text-secondary)" }}>PILOT DEMO PRESETS:</span>
                    <button className="restart-demo-btn" onClick={() => prefillOnboarding("fintech")}>1. FinTech Startup (PayVia)</button>
                    <button className="restart-demo-btn" onClick={() => prefillOnboarding("nbfc")}>2. NBFC Lender (RegCred)</button>
                    <button className="restart-demo-btn" onClick={() => prefillOnboarding("saas")}>3. Cloud SaaS (SaaSFlow)</button>
                    <button className="restart-demo-btn" onClick={() => prefillOnboarding("manufacturing")}>4. MSME Mfg (InduForge)</button>
                  </div>

                  <div className="form-grid">
                    <div className="form-group-full">
                      <label className="form-label">Company Legal Name</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="E.g. Acme Technologies Private Limited" 
                        value={formInputs.companyName}
                        onChange={(e) => setFormInputs({...formInputs, companyName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="form-label">CIN (Corporate Identification Number)</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="E.g. U72200KA2021PTC145622" 
                        value={formInputs.cin}
                        onChange={(e) => setFormInputs({...formInputs, cin: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="form-label">GSTIN (GST Identification Number)</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="E.g. 29AAACP1234A1Z5" 
                        value={formInputs.gstin}
                        onChange={(e) => setFormInputs({...formInputs, gstin: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="form-label">Permanent Account Number (PAN)</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="E.g. AACP1234A" 
                        value={formInputs.pan}
                        onChange={(e) => setFormInputs({...formInputs, pan: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="form-label">Business Structure</label>
                      <select 
                        className="form-select"
                        value={formInputs.businessType}
                        onChange={(e) => setFormInputs({...formInputs, businessType: e.target.value})}
                      >
                        <option>Private Limited</option>
                        <option>Public Limited (NBFC)</option>
                        <option>Partnership Firm</option>
                        <option>LLP</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">State Hub</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="E.g. Karnataka" 
                        value={formInputs.state}
                        onChange={(e) => setFormInputs({...formInputs, state: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="form-label">Industry Classification</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="E.g. SaaS / E-commerce / Lending" 
                        value={formInputs.industry}
                        onChange={(e) => setFormInputs({...formInputs, industry: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="form-label">Employee Size</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="E.g. 85" 
                        value={formInputs.employeeCount}
                        onChange={(e) => setFormInputs({...formInputs, employeeCount: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="form-label">Annual Revenue Range</label>
                      <select 
                        className="form-select"
                        value={formInputs.revenueRange}
                        onChange={(e) => setFormInputs({...formInputs, revenueRange: e.target.value})}
                      >
                        <option>Under ₹2 Cr</option>
                        <option>₹2 Cr - ₹10 Cr</option>
                        <option>₹10 Cr - ₹50 Cr</option>
                        <option>₹50 Cr - ₹100 Cr</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: DOCUMENT UPLOAD SANDBOX */}
              {onboardStep === 2 && (
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "20px" }}>
                    Upload key structural and license files. RegVia's proprietary OCR models will extract, check against registries, and compile regulatory liabilities.
                  </p>

                  <div className="upload-zone" onClick={handleAllUploads}>
                    <FileUp size={48} className="upload-icon" />
                    <p className="upload-text">Drag & drop your Corporate Certificates here</p>
                    <p className="upload-sub">Supports PDF, JPG, PNG, DOCX (Max 25MB)</p>
                    <button className="renew-workflow-btn" style={{ marginTop: "15px" }}>Click to Auto-Upload Sandbox Assets</button>
                  </div>

                  <div className="document-pills">
                    {["Certificate of Incorporation", "PAN Card", "GST Certificate", "MOA & AOA", "MSME/Udyam Registration", "Labour Logs", "Shop Act License"].map((doc) => {
                      const isUp = uploadedFiles.includes(doc);
                      return (
                        <div 
                          key={doc} 
                          className={`document-pill ${isUp ? "active" : ""}`}
                          onClick={() => handleFileUpload(doc)}
                        >
                          {isUp ? "✓ " : "+ "} {doc}
                        </div>
                      );
                    })}
                  </div>

                  {isScanning && (
                    <div className="ai-loader-container" style={{ marginTop: "24px", background: "#fdfcff", border: "1px solid #7c3aed33", padding: "20px", borderRadius: "10px" }}>
                      <div className="ai-scanner">
                        <div className="ai-scanner-inner">
                          <div className="ai-scanner-dot"></div>
                        </div>
                      </div>
                      <div className="ai-loader-title">AI Extraction Engine Running</div>
                      <div className="ai-loader-desc">{scanningProgressText}</div>
                    </div>
                  )}

                  {uploadedFiles.length > 0 && !isScanning && (
                    <div style={{ marginTop: "20px", color: "var(--green)", fontWeight: "600", fontSize: "14px" }}>
                      ✓ successfully processed {uploadedFiles.length} corporate documents. Ready for mapping.
                    </div>
                  )}
                </div>
              )}

              {/* STEP 3: MAPPING PREVIEW */}
              {onboardStep === 3 && (
                <div>
                  <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <CheckCircle size={44} style={{ color: "var(--green)", marginBottom: "8px" }} />
                    <h2 style={{ fontFamily: "var(--font-heading)" }}>AI Compliance Matrix Mapped!</h2>
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                      Based on your state (**{activePersona.state}**), business type (**{activePersona.businessType}**), and extracted files, the following recurring compliance items are active:
                    </p>
                  </div>

                  <div className="mapping-grid">
                    {mappingRoadmap.map((item, idx) => (
                      <div key={idx} className="mapping-card">
                        <div className="mapping-info">
                          <h3>{item.name}</h3>
                          <p>{item.desc}</p>
                        </div>
                        <div className="mapping-confidence">
                          <div className="confidence-score">{item.confidence}%</div>
                          <div className="confidence-label">AI Confidence</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="onboarding-footer">
              <button 
                className="restart-demo-btn"
                style={{ visibility: onboardStep > 1 ? "visible" : "hidden" }}
                disabled={isScanning}
                onClick={() => setOnboardStep(onboardStep - 1)}
              >
                Back
              </button>

              {onboardStep < 3 ? (
                <button 
                  className="chat-send-btn"
                  disabled={onboardStep === 1 ? !formInputs.companyName : (onboardStep === 2 ? uploadedFiles.length === 0 || isScanning : false)}
                  onClick={() => {
                    if (onboardStep === 1) {
                      setOnboardStep(2);
                    } else if (onboardStep === 2) {
                      runComplianceMapping();
                    }
                  }}
                >
                  Continue <ArrowRight size={16} />
                </button>
              ) : (
                <button 
                  className="chat-send-btn"
                  style={{ background: "var(--green)" }}
                  onClick={() => setIsOnboarded(true)}
                >
                  Enter Main Dashboard <CheckCircle size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MAIN SAAS PORTAL */}
      {/* ======================================================== */}
      {isOnboarded && (
        <div className="saas-layout">
          {/* SIDEBAR NAVIGATION */}
          <aside className="saas-sidebar">
            <div className="sidebar-brand">
              <div className="sidebar-logo">RV</div>
              <div>
                <span className="brand-text">RegVia</span>
                <span className="brand-badge" style={{ marginLeft: "6px" }}>OS</span>
              </div>
            </div>

            <div className="sidebar-menu">
              <div 
                className={`sidebar-link ${activeTab === "dashboard" ? "active" : ""}`}
                onClick={() => setActiveTab("dashboard")}
              >
                <Activity size={18} /> Overview Dashboard
              </div>
              <div 
                className={`sidebar-link ${activeTab === "copilot" ? "active" : ""}`}
                onClick={() => setActiveTab("copilot")}
              >
                <MessageSquare size={18} /> AI Copilot chat
              </div>
              <div 
                className={`sidebar-link ${activeTab === "calendar" ? "active" : ""}`}
                onClick={() => setActiveTab("calendar")}
              >
                <Calendar size={18} /> Compliance Calendar
              </div>
              <div 
                className={`sidebar-link ${activeTab === "vault" ? "active" : ""}`}
                onClick={() => setActiveTab("vault")}
              >
                <Folder size={18} /> Document Vault
              </div>
              <div 
                className={`sidebar-link ${activeTab === "licenses" ? "active" : ""}`}
                onClick={() => setActiveTab("licenses")}
              >
                <Shield size={18} /> License Manager
              </div>
              <div 
                className={`sidebar-link ${activeTab === "pipeline" ? "active" : ""}`}
                onClick={() => setActiveTab("pipeline")}
              >
                <Layers size={18} /> Filing Pipeline
              </div>
              <div 
                className={`sidebar-link ${activeTab === "governance" ? "active" : ""}`}
                onClick={() => setActiveTab("governance")}
              >
                <FileSignature size={18} /> Board & Governance
              </div>
              <div 
                className={`sidebar-link ${activeTab === "intelligence" ? "active" : ""}`}
                onClick={() => setActiveTab("intelligence")}
              >
                <Compass size={18} /> Regulatory Intel
              </div>
              <div 
                className={`sidebar-link ${activeTab === "risk" ? "active" : ""}`}
                onClick={() => setActiveTab("risk")}
              >
                <AlertTriangle size={18} /> Risk Engine
              </div>
            </div>

            <div className="sidebar-footer">
              RegVia v1.0.4 Premium<br />Powered by RegOS AI Engine
            </div>
          </aside>

          {/* MAIN SPACE */}
          <main className="saas-content">
            <header className="top-bar">
              <div className="persona-switcher">
                <span className="persona-label">ACTIVE COMPANY DEMO:</span>
                <select 
                  className="persona-select" 
                  value={activePersonaKey}
                  onChange={(e) => setActivePersonaKey(e.target.value)}
                >
                  <option value="fintech">FinTech Startup (PayVia Pvt Ltd)</option>
                  <option value="nbfc">NBFC Lending (RegCred Finance Ltd)</option>
                  <option value="saas">SaaS Startup (SaaSFlow Software)</option>
                  <option value="manufacturing">Manufacturing SME (InduForge Components)</option>
                  <option value="cafirm">CA Firm Client Portal (Sharma CA)</option>
                </select>
              </div>

              <div className="top-actions">
                <button className="restart-demo-btn" onClick={() => {
                  setUploadedFiles([]);
                  setOnboardStep(1);
                  setIsOnboarded(false);
                }}>
                  Restart Onboarding
                </button>
                <div className="company-badge-display">
                  <div className="company-badge-dot"></div>
                  <span>{activePersona.companyName.split(" ")[0]}</span>
                </div>
              </div>
            </header>

            {/* TAB CONTAINER */}
            <div className="page-container">

              {/* ==================================================== */}
              {/* TAB 1: OVERVIEW DASHBOARD */}
              {/* ==================================================== */}
              {activeTab === "dashboard" && (
                <div>
                  {/* Persona-specific CA firm client overview banner if in CA mode */}
                  {activePersonaKey === "cafirm" ? (
                    <div className="saas-card" style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", color: "#fff", border: "none" }}>
                      <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "20px" }}>CA firm Multi-Tenant Workspace</h2>
                      <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>
                        Aggregating 4 client businesses: GSTR filing status, overdue alarms, and pending approval records.
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginTop: "20px" }}>
                        {activePersona.clients.map((c, idx) => (
                          <div key={idx} style={{ background: "rgba(255,255,255,0.05)", padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "var(--blue-light)" }}>{c.industry}</span>
                              <span style={{ fontSize: "12px", color: c.health > 80 ? "var(--green)" : "#d97706", fontWeight: "700" }}>{c.health}% Health</span>
                            </div>
                            <h4 style={{ fontSize: "13px", fontWeight: "600", marginTop: "6px", color: "#fff" }}>{c.name}</h4>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px", fontSize: "11px", color: "#94a3b8" }}>
                              <span>Tasks: <strong>{c.openTasks}</strong></span>
                              <span>Missed: <strong style={{ color: c.missed > 0 ? "#dc2626" : "#94a3b8" }}>{c.missed}</strong></span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* Standard KPI counter panel */}
                  <div className="kpi-row">
                    <div className="kpi-card">
                      <div className="kpi-icon blue"><Activity size={22} /></div>
                      <div className="kpi-info">
                        <h4>Compliance Health</h4>
                        <p>{activePersona.healthScore}%</p>
                      </div>
                    </div>
                    <div className="kpi-card">
                      <div className="kpi-icon purple"><Clock size={22} /></div>
                      <div className="kpi-info">
                        <h4>Active Tasks</h4>
                        <p>{activePersona.stats?.openTasks || 0}</p>
                      </div>
                    </div>
                    <div className="kpi-card">
                      <div className="kpi-icon red"><AlertTriangle size={22} /></div>
                      <div className="kpi-info">
                        <h4>Missed Filings</h4>
                        <p style={{ color: (activePersona.stats?.missedFilings || 0) > 0 ? "#dc2626" : "inherit" }}>
                          {activePersona.stats?.missedFilings || 0}
                        </p>
                      </div>
                    </div>
                    <div className="kpi-card">
                      <div className="kpi-icon green"><CheckCircle size={22} /></div>
                      <div className="kpi-info">
                        <h4>Active Registrations</h4>
                        <p>{activePersona.stats?.activeRegistrations || 0}</p>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-grid">
                    {/* Compliance circular chart */}
                    <div className="saas-card health-card">
                      <div className="saas-card-title">Compliance Health Dial</div>
                      <div className="health-svg-container">
                        <svg width="140" height="140" viewBox="0 0 140 140">
                          <circle cx="70" cy="70" r="60" stroke="#f1f5f9" strokeWidth="10" fill="transparent" />
                          <circle 
                            cx="70" 
                            cy="70" 
                            r="60" 
                            stroke={activePersona.healthScore > 85 ? "var(--green)" : "#d97706"} 
                            strokeWidth="10" 
                            fill="transparent" 
                            strokeDasharray="377" 
                            strokeDashoffset={377 - (377 * activePersona.healthScore) / 100}
                            strokeLinecap="round"
                            transform="rotate(-90 70 70)"
                          />
                        </svg>
                        <div className="health-svg-text">
                          <div className="health-percentage">{activePersona.healthScore}%</div>
                          <div className="health-label">HEALTH RATE</div>
                        </div>
                      </div>
                      <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                        {activePersona.healthScore > 85 ? "Excellent structural posture. No severe regulatory risks detected." : "Attention needed! Critical licenses require filing renewals."}
                      </p>
                    </div>

                    {/* Open Alerts list */}
                    <div className="saas-card card-span-2">
                      <div className="saas-card-header">
                        <div className="saas-card-title"><AlertCircle size={18} style={{ color: "#dc2626" }} /> Actionable Alerts Panel</div>
                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#dc2626", textTransform: "uppercase" }}>Critical attention required</span>
                      </div>
                      <div className="alerts-list">
                        {activePersona.alerts?.map((item) => (
                          <div key={item.id} className="alert-row">
                            <div className={`alert-indicator ${item.severity}`}></div>
                            <div className="alert-content">
                              <div className="alert-meta">
                                <span>{item.category}</span>
                                <span>Due: {item.dueDate}</span>
                              </div>
                              <div className="alert-text">{item.text}</div>
                              <button className="alert-action-btn" onClick={() => setActiveTab("calendar")}>
                                {item.action} &rarr;
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Advisor recommendations */}
                    <div className="saas-card card-span-2">
                      <div className="saas-card-header">
                        <div className="saas-card-title"><Shield size={18} style={{ color: "var(--accent-purple)" }} /> RegOS Compliance Insights</div>
                        <span style={{ fontSize: "11px", fontWeight: "700", color: "var(--accent-purple)", textTransform: "uppercase" }}>Generated live</span>
                      </div>
                      <div>
                        <div className="rec-card">
                          <TrendingUp size={20} className="rec-icon" />
                          <div>
                            <div className="rec-title">Dynamic Cash Liability Shield</div>
                            <div className="rec-desc">GSTR-3B auto-reconciliation complete. Recommending GSTR-1 ledger filing match by 11th to avoid late filing charges.</div>
                          </div>
                        </div>
                        <div className="rec-card">
                          <CheckCircle size={20} className="rec-icon" />
                          <div>
                            <div className="rec-title">Filing Audit Check Complete</div>
                            <div className="rec-desc">All payroll deposits (EPF, ESIC, Professional Tax) mapped correctly to corporate ledger profiles. Integrity test passes.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Company details preview card */}
                    <div className="saas-card">
                      <div className="saas-card-title"><Building size={18} /> Company Meta-Registry</div>
                      <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "var(--text-muted)" }}>CIN:</span>
                          <strong style={{ fontFamily: "monospace" }}>{activePersona.cin}</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "var(--text-muted)" }}>GSTIN:</span>
                          <strong style={{ fontFamily: "monospace" }}>{activePersona.gstin}</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "var(--text-muted)" }}>PAN:</span>
                          <strong style={{ fontFamily: "monospace" }}>{activePersona.pan}</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "var(--text-muted)" }}>Jurisdiction:</span>
                          <strong>{activePersona.state}</strong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "var(--text-muted)" }}>Staff Size:</span>
                          <strong>{activePersona.employeeCount} employees</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================================================== */}
              {/* TAB 2: AI COMPLIANCE COPILOT */}
              {/* ==================================================== */}
              {activeTab === "copilot" && (
                <div className="copilot-container">
                  <div className="chat-panel">
                    <div className="chat-header">
                      <div className="chat-avatar"><Building size={18} /></div>
                      <div className="chat-title">
                        <h3>RegVia Copilot Desk</h3>
                        <p>Ask anything regarding Indian corporate regulation and tax liabilities</p>
                      </div>
                    </div>

                    <div className="chat-body">
                      {chatMessages.map((msg, idx) => (
                        <div key={idx} className={`chat-message ${msg.sender}`}>
                          {renderMarkdown(msg.text)}
                        </div>
                      ))}
                    </div>

                    <div className="chat-input-panel">
                      <input 
                        type="text" 
                        className="chat-input" 
                        placeholder="Type standard questions or select a recommended query from the side panel..."
                        value={customQuestion}
                        onChange={(e) => setCustomQuestion(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && customQuestion.trim()) {
                            handleCopilotQuery(customQuestion);
                            setCustomQuestion("");
                          }
                        }}
                      />
                      <button className="chat-send-btn" onClick={() => {
                        if (customQuestion.trim()) {
                          handleCopilotQuery(customQuestion);
                          setCustomQuestion("");
                        }
                      }}>
                        <Send size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Sidebar preset panel */}
                  <div className="presets-panel">
                    <span className="preset-title">Recommended for {activePersona.companyName.split(" ")[0]}</span>
                    {activePersona.copilotPresets?.map((p, idx) => (
                      <button key={idx} className="preset-btn" onClick={() => handleCopilotQuery(p.q)}>
                        "{p.q}"
                      </button>
                    ))}
                    <button className="preset-btn" onClick={() => handleCopilotQuery("Which licenses are expiring?")}>
                      "Which licenses are expiring?"
                    </button>
                    <button className="preset-btn" onClick={() => handleCopilotQuery("What happens if GST filing is delayed?")}>
                      "What happens if GST filing is delayed?"
                    </button>
                  </div>
                </div>
              )}

              {/* ==================================================== */}
              {/* TAB 3: COMPLIANCE CALENDAR */}
              {/* ==================================================== */}
              {activeTab === "calendar" && (
                <div className="saas-card">
                  <div className="saas-card-header">
                    <div className="saas-card-title"><Calendar size={18} /> Statutory Compliance Calendar (June 2026)</div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {["All", "GST", "TDS", "Labour", "MCA", "RBI", "Governance", "Licenses"].map(tab => (
                        <button 
                          key={tab} 
                          className={`restart-demo-btn ${calendarFilter === tab ? "active" : ""}`}
                          style={{ background: calendarFilter === tab ? "var(--blue)" : "transparent", color: calendarFilter === tab ? "#fff" : "inherit" }}
                          onClick={() => setCalendarFilter(tab)}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <table className="calendar-table">
                    <thead>
                      <tr>
                        <th>Obligation Title</th>
                        <th>Tax Category</th>
                        <th>Filing Target Date</th>
                        <th>Responsible Officer</th>
                        <th>Priority Rating</th>
                        <th>Filing Status</th>
                        <th>Action Sandbox</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeCalendar
                        .filter(item => calendarFilter === "All" || item.category === calendarFilter)
                        .map(item => (
                          <tr key={item.id}>
                            <td style={{ fontWeight: "700" }}>{item.title}</td>
                            <td>{item.category}</td>
                            <td style={{ fontFamily: "monospace" }}>{item.date}</td>
                            <td>{item.owner}</td>
                            <td>
                              <span className={`priority-badge ${item.priority}`}>{item.priority}</span>
                            </td>
                            <td>
                              <span className={`status-badge ${item.status.toLowerCase().replace(" ", "")}`}>{item.status}</span>
                            </td>
                            <td>
                              {item.status !== "Completed" ? (
                                <button className="quick-file-btn" onClick={() => openFilingFlow(item)}>
                                  Quick File &rarr;
                                </button>
                              ) : (
                                <span style={{ color: "var(--green)", fontWeight: "700", fontSize: "11px" }}>✓ Filed</span>
                              )}
                            </td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ==================================================== */}
              {/* TAB 4: DOCUMENT VAULT */}
              {/* ==================================================== */}
              {activeTab === "vault" && (
                <div className="vault-layout">
                  <div className="vault-categories">
                    <span className="preset-title" style={{ paddingLeft: "14px", marginBottom: "8px" }}>Categories</span>
                    {["All", "Corporate", "Tax", "Labour", "Licenses", "Governance", "Contracts"].map(cat => (
                      <button 
                        key={cat}
                        className={`vault-cat-btn ${selectedVaultCategory === cat ? "active" : ""}`}
                        onClick={() => setSelectedVaultCategory(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div>
                    <div className="vault-files-grid">
                      {activePersona.documents
                        ?.filter(doc => selectedVaultCategory === "All" || doc.category === selectedVaultCategory)
                        .map((doc, idx) => (
                          <div 
                            key={idx} 
                            className="vault-file-card"
                            onClick={() => setSelectedVaultDoc(doc)}
                          >
                            <div className="file-header">
                              <FileText className="file-icon" size={24} />
                              <div className="file-name">{doc.name}</div>
                            </div>
                            <div className="file-meta">
                              <span>Impact: <strong style={{ color: doc.impact === "Critical" ? "#dc2626" : "inherit" }}>{doc.impact}</strong></span>
                              <span>Expiry: <strong>{doc.expiry}</strong></span>
                            </div>
                            <button className="file-ai-btn" onClick={(e) => { e.stopPropagation(); setSelectedVaultDoc(doc); }}>
                              Open AI Analysis Drawer
                            </button>
                          </div>
                      ))}
                    </div>

                    {/* AI Doc Summary Drawer panel */}
                    {selectedVaultDoc && (
                      <div className="saas-card" style={{ marginTop: "24px", border: "1px solid var(--accent-purple)", background: "#faf5ff" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                          <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-purple)" }}>
                            <FileCheck size={20} /> AI Summary: {selectedVaultDoc.name}
                          </h4>
                          <button 
                            className="restart-demo-btn" 
                            style={{ padding: "4px 8px", fontSize: "11px" }}
                            onClick={() => setSelectedVaultDoc(null)}
                          >
                            Close Summary
                          </button>
                        </div>
                        <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                          {selectedVaultDoc.summary}
                        </p>
                        <div style={{ display: "flex", gap: "24px", marginTop: "14px", borderTop: "1px solid rgba(124, 58, 237, 0.15)", paddingTop: "12px", fontSize: "11px", color: "var(--text-secondary)" }}>
                          <span>REGISTRY STATUS: <strong style={{ color: "var(--green)" }}>{selectedVaultDoc.status}</strong></span>
                          <span>COMPLIANCE IMPACT: <strong>{selectedVaultDoc.impact} Risk Rating</strong></span>
                          <span>ANNUAL EXPIRY TARGET: <strong>{selectedVaultDoc.expiry}</strong></span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ==================================================== */}
              {/* TAB 5: LICENSE MANAGEMENT */}
              {/* ==================================================== */}
              {activeTab === "licenses" && (
                <div>
                  <div className="license-grid">
                    {activePersona.licenses?.map((lic, idx) => (
                      <div key={idx} className="license-card">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                          <h4 className="license-title">{lic.name}</h4>
                          <span className={`status-badge ${lic.status === "Active" ? "completed" : "pending"}`}>
                            {lic.status}
                          </span>
                        </div>
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                          <div className="license-row">
                            <span className="license-row-label">Filing Hub:</span>
                            <span className="license-row-val">{lic.team}</span>
                          </div>
                          <div className="license-row">
                            <span className="license-row-label">Next Renewal:</span>
                            <span className="license-row-val" style={{ fontFamily: "monospace" }}>{lic.renewalDate}</span>
                          </div>
                          <div className="license-row">
                            <span className="license-row-label">Workflow:</span>
                            <span className="license-row-val">{lic.workflow}</span>
                          </div>
                          <div className="license-row">
                            <span className="license-row-label">AI Risk Parameter:</span>
                            <span className="license-row-val" style={{ color: lic.risk === "High" ? "#dc2626" : "inherit" }}>
                              {lic.risk} Risk
                            </span>
                          </div>
                        </div>
                        <button 
                          className="renew-workflow-btn"
                          onClick={() => showToast(`Renewal: ${lic.name}`, `Initiating automated renewal workflow. Pre-filling applications and matching DSC keys.`)}
                        >
                          Trigger Automated Renewal
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ==================================================== */}
              {/* TAB 6: FILING PIPELINE (KANBAN BOARD) */}
              {/* ==================================================== */}
              {activeTab === "pipeline" && (
                <div>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px" }}>
                    Visual stage tracker for current active filing operations. <strong>Click on any card</strong> to advance it to the next compliance phase of the filing pipeline!
                  </p>
                  <div className="pipeline-container">
                    {["draft", "review", "pendingApproval", "readyForFiling", "filed", "completed"].map(stage => {
                      const stageLabel = stage.replace(/([A-Z])/g, " $1");
                      const cards = filingPipeline[stage] || [];
                      return (
                        <div key={stage} className="pipeline-column">
                          <div className="column-header">
                            <span>{stageLabel}</span>
                            <span className="column-badge">{cards.length}</span>
                          </div>
                          <div className="column-cards">
                            {cards.map(card => (
                              <div 
                                key={card.id} 
                                className="pipeline-card"
                                onClick={() => movePipelineCard(card.id, stage)}
                              >
                                <div className="pipeline-card-title">{card.title}</div>
                                <div className="pipeline-card-desc">{card.desc}</div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "9px", fontWeight: "700" }}>
                                  <span style={{ color: card.priority === "Critical" ? "#dc2626" : "#d97706" }}>
                                    {card.priority}
                                  </span>
                                  <span style={{ color: "var(--blue)" }}>Click to advance &rarr;</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ==================================================== */}
              {/* TAB 7: BOARD & GOVERNANCE */}
              {/* ==================================================== */}
              {activeTab === "governance" && (
                <div className="governance-layout">
                  {/* Statutory metrics */}
                  <div className="saas-card">
                    <div className="saas-card-title"><FileSignature size={18} /> Statutory Board Records</div>
                    <div style={{ marginTop: "16px" }}>
                      <h4 className="cap-table-title">Resolutions Ledger</h4>
                      {activePersona.governance?.resolutions?.map((res, idx) => (
                        <div key={idx} className="stat-item-row">
                          <span>{res.id}: <strong>{res.title}</strong></span>
                          <span style={{ color: "var(--green)", fontWeight: "700" }}>{res.status}</span>
                        </div>
                      ))}

                      <h4 className="cap-table-title" style={{ marginTop: "24px" }}>Board Meetings Schedule</h4>
                      {activePersona.governance?.meetings?.map((meet, idx) => (
                        <div key={idx} className="stat-item-row">
                          <span>{meet.title} ({meet.agenda})</span>
                          <span style={{ color: meet.status === "Scheduled" ? "var(--blue)" : "var(--text-muted)", fontWeight: "700" }}>
                            {meet.status} ({meet.date})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Cap Table */}
                  <div className="saas-card">
                    <div className="saas-card-header">
                      <div className="saas-card-title"><Share2 size={18} /> Interactive Shareholder Cap Table</div>
                      <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>Current Val: <strong>{activePersona.governance?.capTable?.valuation || "N/A"}</strong></span>
                    </div>

                    {activePersona.governance?.capTable ? (
                      <div>
                        <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "16px" }}>
                          Simulate changes to founder holdings or dilution variables by adjusting share counts directly.
                        </p>
                        <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
                          <thead>
                            <tr style={{ background: "#f8fafc", textAlign: "left" }}>
                              <th style={{ padding: "8px" }}>Shareholder</th>
                              <th style={{ padding: "8px" }}>Type</th>
                              <th style={{ padding: "8px" }}>Share Count</th>
                              <th style={{ padding: "8px" }}>Equity %</th>
                            </tr>
                          </thead>
                          <tbody>
                            {capSharesList.map((inv, idx) => (
                              <tr key={idx}>
                                <td style={{ padding: "8px" }}>{inv.name}</td>
                                <td style={{ padding: "8px", fontSize: "11px", color: "var(--text-muted)" }}>{inv.type}</td>
                                <td style={{ padding: "8px" }}>
                                  <input 
                                    type="number" 
                                    className="cap-input-cell"
                                    value={inv.shares}
                                    onChange={(e) => {
                                      const updated = [...capSharesList];
                                      updated[idx] = { ...updated[idx], shares: Number(e.target.value) || 0 };
                                      setCapSharesList(updated);
                                    }}
                                  />
                                </td>
                                <td style={{ padding: "8px", fontWeight: "700" }}>
                                  {((inv.shares / capSum) * 100).toFixed(1)}%
                                </td>
                              </tr>
                            ))}
                            <tr style={{ borderTop: "2px solid #e2e8f0", fontWeight: "700" }}>
                              <td style={{ padding: "8px" }}>Total Mapped Shares</td>
                              <td style={{ padding: "8px" }}></td>
                              <td style={{ padding: "8px" }}>{capSum.toLocaleString()}</td>
                              <td style={{ padding: "8px" }}>100.0%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>Cap table not configured for this entity type.</p>
                    )}
                  </div>
                </div>
              )}

              {/* ==================================================== */}
              {/* TAB 8: REGULATORY INTELLIGENCE */}
              {/* ==================================================== */}
              {activeTab === "intelligence" && (
                <div>
                  <div style={{ marginBottom: "20px" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "16px" }}>AI Regulation Stream</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
                      RegVia AI continuously monitors notifications from RBI, CBDT, SEBI, and GST portals to assess impact on your specific business.
                    </p>
                  </div>

                  {activePersona.intelligence?.map((feed) => (
                    <div key={feed.id} className="intel-card">
                      <div className="intel-header">
                        <span className="intel-source">{feed.source}</span>
                        <span className={`status-badge ${feed.priority === "Critical" ? "overdue" : "pending"}`}>
                          {feed.priority} Priority
                        </span>
                      </div>
                      <h4 className="intel-title">{feed.title}</h4>
                      
                      <div className={`intel-impact-box ${feed.priority.toLowerCase()}`}>
                        <strong>REGULATORY IMPACT PROFILE:</strong> {feed.impact}
                      </div>

                      <div className="intel-action-panel">
                        <span><strong>RECOMMENDED ACTION:</strong> {feed.action}</span>
                        <button 
                          className="intel-action-btn"
                          onClick={() => showToast("Impact Assessment Started", "Generating legal memo draft and risk vector analysis for director board distribution.")}
                        >
                          Assess Impact Metrics
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ==================================================== */}
              {/* TAB 9: RISK ENGINE */}
              {/* ==================================================== */}
              {activeTab === "risk" && (
                <div>
                  <div className="risk-grid">
                    <div className="risk-score-card">
                      <div className="preset-title">Compliance Risk Score</div>
                      <div className={`risk-num ${activePersona.riskScores?.compliance > 20 ? "red" : "green"}`}>
                        {activePersona.riskScores?.compliance || 0}/100
                      </div>
                      <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "8px" }}>
                        Aggregates missing files, license deadlines, and tax delays.
                      </p>
                    </div>

                    <div className="risk-score-card">
                      <div className="preset-title">Regulatory Risk Score</div>
                      <div className={`risk-num ${activePersona.riskScores?.regulatory > 25 ? "yellow" : "green"}`}>
                        {activePersona.riskScores?.regulatory || 0}/100
                      </div>
                      <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "8px" }}>
                        Analyzes legislative shifts and changes in government guidelines.
                      </p>
                    </div>

                    <div className="risk-score-card">
                      <div className="preset-title">Operational Risk Score</div>
                      <div className={`risk-num ${activePersona.riskScores?.operational > 25 ? "red" : "green"}`}>
                        {activePersona.riskScores?.operational || 0}/100
                      </div>
                      <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "8px" }}>
                        Monitors employee sizes, machinery safety indexes, and contractor checks.
                      </p>
                    </div>
                  </div>

                  <div className="saas-card stress-card">
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "15px", marginBottom: "12px" }}>
                      Interactive Risk Sensitivity & Stress Test Simulation
                    </h3>
                    <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "20px" }}>
                      Model organizational pivots to check if fresh compliances trigger automatically.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", marginBottom: "6px" }}>
                          <span>Internal Audit Verification Target:</span>
                          <span>{stressAuditRate}% Complete</span>
                        </div>
                        <input 
                          type="range" 
                          style={{ width: "100%" }}
                          min="30" 
                          max="100" 
                          value={stressAuditRate} 
                          onChange={(e) => setStressAuditRate(Number(e.target.value))}
                        />
                        <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                          Reducing internal checks increases compliance risk metrics.
                        </span>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "700", marginBottom: "6px" }}>
                          <span>Target Employee Headcount:</span>
                          <span>{stressStaffCount} Workers</span>
                        </div>
                        <input 
                          type="range" 
                          style={{ width: "100%" }}
                          min="5" 
                          max="300" 
                          value={stressStaffCount} 
                          onChange={(e) => setStressStaffCount(Number(e.target.value))}
                        />
                        <span style={{ fontSize: "11px", color: "#b45309", fontWeight: "700" }}>
                          {stressStaffCount >= 20 ? "⚠ Threshold Crossed: PF/ESIC Employee deposits are legally mandatory (>20 staff)." : "Under threshold requirements."}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </main>
        </div>
      )}

      {/* ======================================================== */}
      {/* QUICK FILE FLOW MODAL */}
      {/* ======================================================== */}
      {showFilingModal && selectedFilingItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", marginBottom: "8px" }}>
              RegVia QuickFile Portal
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "20px" }}>
              Automated compilation ledger and auto-submit to Government common portal.
            </p>

            <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid var(--border-color)", marginBottom: "20px", fontSize: "13px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
                <span>Filing Duty:</span>
                <strong>{selectedFilingItem.title}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
                <span>Category Node:</span>
                <strong>{selectedFilingItem.category}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
                <span>Date Target:</span>
                <strong>{selectedFilingItem.date}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderTop: "1px dashed var(--border-color)", marginTop: "8px", paddingTop: "8px" }}>
                <span>Simulated Fee/Tax Due:</span>
                <strong style={{ color: "var(--blue)" }}>
                  {activePersonaKey === "fintech" ? "₹18,45,210" : (activePersonaKey === "nbfc" ? "₹54,12,050" : "₹1,84,000")}
                </strong>
              </div>
            </div>

            {filingStep === "draft" && (
              <div>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "20px" }}>
                  AI has matched all invoices with GSTN records. Integrity checks have passed with a score of <strong>99.4%</strong>.
                </p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button className="restart-demo-btn" onClick={() => setShowFilingModal(false)}>
                    Cancel
                  </button>
                  <button className="chat-send-btn" onClick={processFilingSubmit}>
                    Confirm & File Instantly
                  </button>
                </div>
              </div>
            )}

            {filingStep === "paying" && (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div className="ai-scanner" style={{ margin: "0 auto 16px" }}>
                  <div className="ai-scanner-inner">
                    <div className="ai-scanner-dot"></div>
                  </div>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "700" }}>Securing connection with Government Gateway...</div>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>Filing return ledger and transferring Challan payments...</p>
              </div>
            )}

            {filingStep === "success" && (
              <div style={{ textAlign: "center", padding: "10px 0" }}>
                <CheckCircle size={48} style={{ color: "var(--green)", margin: "0 auto 12px" }} />
                <div style={{ fontSize: "16px", fontWeight: "700", color: "var(--green)" }}>Filing Completed Successfully!</div>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "6px" }}>
                  ARN receipt has been generated and filed in your Corporate Vault. Calendar status updated.
                </p>
                <button 
                  className="chat-send-btn" 
                  style={{ background: "var(--green)", marginTop: "20px", width: "100%" }}
                  onClick={() => setShowFilingModal(false)}
                >
                  Close Panel
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map(t => (
            <div key={t.id} className="toast">
              <CheckCircle size={20} className="toast-icon" />
              <div>
                <div className="toast-title">{t.title}</div>
                <div className="toast-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
