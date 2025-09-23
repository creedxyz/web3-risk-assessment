// Risk Assessment Data Structure
const controlsData = {
    govern: [
        { id: 'GV.OC-01', requirement: 'The organizational mission is understood and informs cybersecurity risk management.' },
        { id: 'GV.OC-02', requirement: 'Internal and external stakeholders are understood, and their needs and expectations regarding cybersecurity risk management are understood and considered.' },
        { id: 'GV.OC-03', requirement: 'Legal, regulatory, and contractual requirements regarding cybersecurity – including privacy and civil liberties obligations – are understood and managed.' },
        { id: 'GV.OC-04', requirement: 'Critical objectives, capabilities, and services stakeholders depend on or expect from the organization are understood and communicated.' },
        { id: 'GV.OC-05', requirement: 'Outcomes, capabilities, and services that the organization depends on are understood and communicated.' },
        { id: 'GV.RM-01', requirement: 'Risk management objectives are established and agreed to by organizational stakeholders.' },
        { id: 'GV.RM-02', requirement: 'Risk appetite and risk tolerance statements are established, communicated, and maintained.' },
        { id: 'GV.RM-03', requirement: 'Cybersecurity risk management activities and outcomes are included in enterprise risk management processes.' },
        { id: 'GV.RM-04', requirement: 'A strategic direction that describes appropriate risk response options is established and communicated.' },
        { id: 'GV.RM-05', requirement: 'Lines of communication across the organization are established for cybersecurity risks, including risks from suppliers and other third parties.' },
        { id: 'GV.RM-06', requirement: 'A standardized method for calculating, documenting, categorizing, and prioritizing cybersecurity risks is established and communicated.' },
        { id: 'GV.RM-07', requirement: 'Strategic opportunities (i.e., positive risks) are characterized and are included in organizational cybersecurity risk discussions.' },
        { id: 'GV.RR-01', requirement: 'Organizational leadership is responsible and accountable for cybersecurity risk and fosters a risk-aware, ethical, and continually improving culture.' },
        { id: 'GV.RR-02', requirement: 'Roles, responsibilities, and authorities related to cybersecurity risk management are established, communicated, understood, and enforced.' },
        { id: 'GV.RR-03', requirement: 'Adequate resources are allocated commensurate with the cybersecurity risk strategy, roles, responsibilities, and policies.' },
        { id: 'GV.RR-04', requirement: 'Cybersecurity is included in human resources practices (onboarding, offboarding, etc).' },
        { id: 'GV.PO-01', requirement: 'Policy for managing cybersecurity risks is established based on organizational context, cybersecurity strategy, and priorities and is communicated and enforced.' },
        { id: 'GV.PO-02', requirement: 'Policy for managing cybersecurity risks is reviewed, updated, communicated, and enforced to reflect changes in requirements, threats, technology, and organizational mission.' },
        { id: 'GV.OV-01', requirement: 'Cybersecurity risk management strategy outcomes are reviewed to inform and adjust strategy and direction.' },
        { id: 'GV.OV-02', requirement: 'The cybersecurity risk management strategy is reviewed and adjusted to ensure coverage of organizational requirements and risks.' },
        { id: 'GV.OV-03', requirement: 'Organizational cybersecurity risk management performance is evaluated and reviewed for adjustments needed.' },
        { id: 'GV.SC-01', requirement: 'A cybersecurity supply chain risk management program, strategy, objectives, policies, and processes are established and agreed to by organizational stakeholders.' },
        { id: 'GV.SC-02', requirement: 'Cybersecurity roles and responsibilities for suppliers, customers, and partners are established, communicated, and coordinated internally and externally.' },
        { id: 'GV.SC-03', requirement: 'Cybersecurity supply chain risk management is integrated into cybersecurity and enterprise risk management, risk assessment, and improvement processes.' },
        { id: 'GV.SC-04', requirement: 'Suppliers are known and prioritized by criticality.' },
        { id: 'GV.SC-05', requirement: 'Requirements to address cybersecurity risks in supply chains are established, prioritized, and integrated into contracts and other types of agreements with suppliers and other relevant third parties.' },
        { id: 'GV.SC-06', requirement: 'Planning and due diligence are performed to reduce risks before entering into formal supplier or other third-party relationships.' },
        { id: 'GV.SC-07', requirement: 'The risks posed by a supplier, their products and services, and other third parties are understood, recorded, prioritized, assessed, responded to, and monitored over the course of the relationship.' },
        { id: 'GV.SC-08', requirement: 'Relevant suppliers and other third parties are included in incident planning, response, and recovery activities.' },
        { id: 'GV.SC-09', requirement: 'Supply chain security practices are integrated into cybersecurity and enterprise risk management programs, and their performance is monitored throughout the technology product and service life cycle.' },
        { id: 'GV.SC-10', requirement: 'Cybersecurity supply chain risk management plans include provisions for activities that occur after the conclusion of a partnership or service agreement.' }
    ],
    identify: [
        { id: 'ID.AM-01', requirement: 'Inventories of hardware managed by the organization are maintained.' },
        { id: 'ID.AM-02', requirement: 'Inventories of software, services, and systems managed by the organization are maintained.' },
        { id: 'ID.AM-03', requirement: 'Representations of the organization\'s authorized network communication and internal and external network data flows are maintained.' },
        { id: 'ID.AM-04', requirement: 'Inventories of services provided by suppliers are maintained.' },
        { id: 'ID.AM-05', requirement: 'Assets are prioritized based on classification, criticality, resources, and impact on the mission.' },
        { id: 'ID.AM-07', requirement: 'Inventories of data and corresponding metadata for designated data types are maintained.' },
        { id: 'ID.AM-08', requirement: 'Systems, hardware, software, services, and data are managed throughout their life cycles.' },
        { id: 'ID.RA-01', requirement: 'Vulnerabilities in assets are identified, validated, and recorded.' },
        { id: 'ID.RA-02', requirement: 'Cyber threat intelligence is received from information-sharing forums and sources.' },
        { id: 'ID.RA-03', requirement: 'Internal and external threats to the organization are identified and recorded.' },
        { id: 'ID.RA-04', requirement: 'Potential impacts and likelihoods of threats exploiting vulnerabilities are identified and recorded.' },
        { id: 'ID.RA-05', requirement: 'Threats, vulnerabilities, likelihoods, and impacts are used to understand inherent risk and inform risk response prioritization.' },
        { id: 'ID.RA-06', requirement: 'Risk responses are chosen, prioritized, planned, tracked, and communicated.' },
        { id: 'ID.RA-07', requirement: 'Changes and exceptions are managed, assessed for risk impact, recorded, and tracked.' },
        { id: 'ID.RA-08', requirement: 'Processes for receiving, analyzing, and responding to vulnerability disclosures are established.' },
        { id: 'ID.RA-09', requirement: 'Hardware and software\'s authenticity and integrity are assessed before acquisition and use.' },
        { id: 'ID.RA-10', requirement: 'Critical suppliers are assessed before acquisition.' },
        { id: 'ID.IM-01', requirement: 'Improvements are identified from evaluations.' },
        { id: 'ID.IM-02', requirement: 'Improvements are identified from security tests and exercises, including those done in coordination with suppliers and relevant third parties.' },
        { id: 'ID.IM-03', requirement: 'Improvements are identified from the execution of operational processes, procedures, and activities.' },
        { id: 'ID.IM-04', requirement: 'Incident response plans and other cybersecurity plans that affect operations are established, communicated, maintained, and improved.' }
    ],
    protect: [
        { id: 'PR.AA-01', requirement: 'Identities and credentials for authorized users, services, and hardware are managed by the organization.' },
        { id: 'PR.AA-02', requirement: 'Identities are proofed and bound to credentials based on the context of interactions.' },
        { id: 'PR.AA-03', requirement: 'Users, services, and hardware are authenticated.' },
        { id: 'PR.AA-04', requirement: 'Identity assertions are protected, conveyed, and verified.' },
        { id: 'PR.AA-05', requirement: 'Access permissions, entitlements, and authorizations are defined in a policy, managed, enforced, and reviewed, and incorporate the principles of least privilege and separation of duties.' },
        { id: 'PR.AA-06', requirement: 'Physical access to assets is managed, monitored, and enforced commensurate with risk.' },
        { id: 'PR.AT-01', requirement: 'Personnel are provided with awareness and training so that they possess the knowledge and skills to perform general tasks with cybersecurity risks in mind.' },
        { id: 'PR.AT-02', requirement: 'Individuals in specialized roles are provided with awareness and training so that they possess the knowledge and skills to perform relevant tasks with cybersecurity risks in mind.' },
        { id: 'PR.DS-01', requirement: 'The confidentiality, integrity, and availability of data-at-rest are protected.' },
        { id: 'PR.DS-02', requirement: 'The confidentiality, integrity, and availability of data-in-transit are protected.' },
        { id: 'PR.DS-10', requirement: 'The confidentiality, integrity, and availability of data-in-use are protected.' },
        { id: 'PR.DS-11', requirement: 'Backups of data are created, protected, maintained, and tested.' },
        { id: 'PR.PS-01', requirement: 'Configuration management practices are established and applied.' },
        { id: 'PR.PS-02', requirement: 'Software is maintained, replaced, and removed commensurate with risk.' },
        { id: 'PR.PS-03', requirement: 'Hardware is maintained, replaced, and removed commensurate with risk.' },
        { id: 'PR.PS-04', requirement: 'Log records are generated and made available for continuous monitoring.' },
        { id: 'PR.PS-05', requirement: 'Installation and execution of unauthorized software are prevented.' },
        { id: 'PR.PS-06', requirement: 'Secure software development practices are integrated, and their performance is monitored throughout the software development life cycle.' },
        { id: 'PR.IR-01', requirement: 'Networks and environments are protected from unauthorized logical access and usage.' },
        { id: 'PR.IR-02', requirement: 'The organization\'s technology assets are protected from environmental threats.' },
        { id: 'PR.IR-03', requirement: 'Mechanisms are implemented to achieve resilience requirements in normal and adverse situations.' },
        { id: 'PR.IR-04', requirement: 'Adequate resource capacity to ensure availability is maintained.' }
    ],
    detect: [
        { id: 'DE.CM-01', requirement: 'Networks and network services are monitored to find potentially adverse events.' },
        { id: 'DE.CM-02', requirement: 'The physical environment is monitored to find potentially adverse events.' },
        { id: 'DE.CM-03', requirement: 'Personnel activity and technology usage are monitored to find potentially adverse events.' },
        { id: 'DE.CM-06', requirement: 'External service provider activities and services are monitored to find potentially adverse events.' },
        { id: 'DE.CM-09', requirement: 'Computing hardware and software, runtime environments, and their data are monitored to find potentially adverse events.' },
        { id: 'DE.AE-02', requirement: 'Potentially adverse events are analyzed to better understand associated activities.' },
        { id: 'DE.AE-03', requirement: 'Information is correlated from multiple sources.' },
        { id: 'DE.AE-04', requirement: 'The estimated impact and scope of adverse events are understood.' },
        { id: 'DE.AE-06', requirement: 'Information on adverse events is provided to authorized staff and tools.' },
        { id: 'DE.AE-07', requirement: 'Cyber threat intelligence and other contextual information are integrated into the analysis.' },
        { id: 'DE.AE-08', requirement: 'Incidents are declared when adverse events meet the defined incident criteria.' }
    ],
    respond: [
        { id: 'RS.MA-01', requirement: 'The incident response plan is executed in coordination with relevant third parties once an incident is declared.' },
        { id: 'RS.MA-02', requirement: 'Incident reports are triaged and validated.' },
        { id: 'RS.MA-03', requirement: 'Incidents are categorized and prioritized.' },
        { id: 'RS.MA-04', requirement: 'Incidents are escalated or elevated as needed.' },
        { id: 'RS.MA-05', requirement: 'The criteria for initiating incident recovery are applied.' },
        { id: 'RS.AN-03', requirement: 'Analysis is performed to establish what has taken place during an incident and the root cause of the incident.' },
        { id: 'RS.AN-06', requirement: 'Actions performed during an investigation are recorded, and the records\' integrity and provenance are preserved.' },
        { id: 'RS.AN-07', requirement: 'Incident data and metadata are collected, and their integrity and provenance are preserved.' },
        { id: 'RS.AN-08', requirement: 'An incident\'s magnitude is estimated and validated.' },
        { id: 'RS.CO-02', requirement: 'Internal and external stakeholders are notified of incidents.' },
        { id: 'RS.CO-03', requirement: 'Information is shared with designated internal and external stakeholders.' },
        { id: 'RS.MI-01', requirement: 'Incidents are contained.' },
        { id: 'RS.MI-02', requirement: 'Incidents are eradicated.' }
    ],
    recover: [
        { id: 'RC.RP-01', requirement: 'The recovery portion of the incident response plan is executed once initiated from the incident response process.' },
        { id: 'RC.RP-02', requirement: 'Recovery actions are selected, scoped, prioritized, and performed.' },
        { id: 'RC.RP-03', requirement: 'The integrity of backups and other restoration assets is verified before using them for restoration.' },
        { id: 'RC.RP-04', requirement: 'Critical mission functions and cybersecurity risk management are considered to establish post-incident operational norms.' },
        { id: 'RC.RP-05', requirement: 'The integrity of restored assets is verified, systems and services are restored, and normal operating status is confirmed.' },
        { id: 'RC.RP-06', requirement: 'The end of incident recovery is declared based on criteria, and incident-related documentation is completed.' },
        { id: 'RC.CO-03', requirement: 'Recovery activities and progress in restoring operational capabilities are communicated to designated internal and external stakeholders.' },
        { id: 'RC.CO-04', requirement: 'Public updates on incident recovery are shared using approved methods and messaging.' }
    ]
};

// Application state
let assessmentData = {
    metadata: {
        website: '',
        documentation: '',
        contracts: '',
        github: '',
        twitter: '',
        discord: '',
        telegram: ''
    },
    controls: {}
};

// Initialize controls data structure
Object.keys(controlsData).forEach(functionName => {
    assessmentData.controls[functionName] = {};
    controlsData[functionName].forEach(control => {
        assessmentData.controls[functionName][control.id] = {
            status: '',
            explanation: ''
        };
    });
});

// DOM Elements
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const importBtn = document.getElementById('importBtn');
const exportBtn = document.getElementById('exportBtn');
const exportPdfBtn = document.getElementById('exportPdfBtn');
const fileInput = document.getElementById('fileInput');
const clearCacheBtn = document.getElementById('clearCacheBtn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeControls();
    loadFromLocalStorage();
    setupEventListeners();
    updateSummaryTable();
});

// Tab functionality
function initializeTabs() {
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
}

function switchTab(targetTab) {
    // Update tab buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');

    // Update tab content
    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(targetTab).classList.add('active');
}

// Initialize controls for each function
function initializeControls() {
    Object.keys(controlsData).forEach(functionName => {
        const container = document.getElementById(`${functionName}-controls`);
        if (!container) return;

        controlsData[functionName].forEach(control => {
            const controlElement = createControlElement(functionName, control);
            container.appendChild(controlElement);
        });
    });
}

function createControlElement(functionName, control) {
    const div = document.createElement('div');
    div.className = 'control-item';

    div.innerHTML = `
        <div class="save-indicator" id="${control.id}-indicator">Saved</div>
        <div class="control-main">
            <div class="control-left">
                <div class="control-header">
                    <div class="control-id">${control.id}</div>
                    <div class="control-status">
                        <select id="${control.id}-status" data-function="${functionName}" data-control="${control.id}">
                            <option value="">Select Status</option>
                            <option value="Implemented">Implemented</option>
                            <option value="Not Implemented">Not Implemented</option>
                            <option value="Not Applicable">Not Applicable</option>
                        </select>
                    </div>
                </div>
                <div class="control-requirement">${control.requirement}</div>
            </div>
            <div class="control-right">
                <div class="control-explanation">
                    <textarea
                        id="${control.id}-explanation"
                        placeholder="Add notes..."
                        data-function="${functionName}"
                        data-control="${control.id}"
                    ></textarea>
                </div>
            </div>
        </div>
    `;

    return div;
}

// Event listeners
function setupEventListeners() {
    // Import/Export functionality
    importBtn.addEventListener('click', () => fileInput.click());
    exportBtn.addEventListener('click', exportToJSON);
    exportPdfBtn.addEventListener('click', exportToPDF);
    fileInput.addEventListener('change', importFromJSON);

    // Clear cache functionality
    clearCacheBtn.addEventListener('click', clearAllData);

    // Form field listeners
    document.addEventListener('change', function(e) {
        if (e.target.matches('select[data-control]')) {
            handleStatusChange(e.target);
        }
        if (e.target.matches('textarea[data-control]')) {
            handleExplanationChange(e.target);
        }
        if (e.target.matches('#summary input')) {
            handleMetadataChange(e.target);
        }
    });

    // Auto-save on blur
    document.addEventListener('blur', function(e) {
        if (e.target.matches('input, textarea, select')) {
            saveToLocalStorage();
        }
    }, true);
}

function handleStatusChange(element) {
    const functionName = element.getAttribute('data-function');
    const controlId = element.getAttribute('data-control');

    assessmentData.controls[functionName][controlId].status = element.value;
    updateSummaryTable();
    showSaveIndicator(controlId);
    saveToLocalStorage();
}

function handleExplanationChange(element) {
    const functionName = element.getAttribute('data-function');
    const controlId = element.getAttribute('data-control');

    assessmentData.controls[functionName][controlId].explanation = element.value;
    showSaveIndicator(controlId);
    saveToLocalStorage();
}

function handleMetadataChange(element) {
    const field = element.id;
    assessmentData.metadata[field] = element.value;
    showGlobalSaveIndicator();
    saveToLocalStorage();
}

// Summary table updates
function updateSummaryTable() {
    Object.keys(controlsData).forEach(functionName => {
        const counts = {
            implemented: 0,
            notImplemented: 0,
            notApplicable: 0
        };

        Object.values(assessmentData.controls[functionName]).forEach(control => {
            switch(control.status) {
                case 'Implemented':
                    counts.implemented++;
                    break;
                case 'Not Implemented':
                    counts.notImplemented++;
                    break;
                case 'Not Applicable':
                    counts.notApplicable++;
                    break;
            }
        });

        // Update table cells
        const implementedCell = document.getElementById(`${functionName}-implemented`);
        const notImplementedCell = document.getElementById(`${functionName}-not-implemented`);
        const notApplicableCell = document.getElementById(`${functionName}-not-applicable`);

        if (implementedCell) implementedCell.textContent = counts.implemented;
        if (notImplementedCell) notImplementedCell.textContent = counts.notImplemented;
        if (notApplicableCell) notApplicableCell.textContent = counts.notApplicable;
    });
}

// Local storage functions
function saveToLocalStorage() {
    try {
        localStorage.setItem('creed-assessment-data', JSON.stringify(assessmentData));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('creed-assessment-data');
        if (saved) {
            const loadedData = JSON.parse(saved);

            // Merge with current structure to handle any schema changes
            assessmentData = { ...assessmentData, ...loadedData };

            // Update form fields
            updateFormFields();
            updateSummaryTable();
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
}

function updateFormFields() {
    // Update metadata fields
    Object.keys(assessmentData.metadata).forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            element.value = assessmentData.metadata[field] || '';
        }
    });

    // Update control fields
    Object.keys(assessmentData.controls).forEach(functionName => {
        Object.keys(assessmentData.controls[functionName]).forEach(controlId => {
            const control = assessmentData.controls[functionName][controlId];

            const statusElement = document.getElementById(`${controlId}-status`);
            const explanationElement = document.getElementById(`${controlId}-explanation`);

            if (statusElement) statusElement.value = control.status || '';
            if (explanationElement) explanationElement.value = control.explanation || '';
        });
    });
}

// Import/Export functions
function exportToJSON() {
    const dataStr = JSON.stringify(assessmentData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `creed-assessment-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function importFromJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);

            // Validate and merge data
            if (importedData.metadata || importedData.controls) {
                assessmentData = { ...assessmentData, ...importedData };
                updateFormFields();
                updateSummaryTable();
                saveToLocalStorage();

                alert('Assessment data imported successfully!');
            } else {
                alert('Invalid file format. Please select a valid Creed assessment JSON file.');
            }
        } catch (error) {
            console.error('Error importing data:', error);
            alert('Error importing file. Please check the file format.');
        }
    };

    reader.readAsText(file);
    event.target.value = ''; // Reset file input
}

// PDF Export function with professional Creed styling
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let yPosition = 30;
    const lineHeight = 6;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const maxLineWidth = pageWidth - (margin * 2);

    // Creed color scheme (converted to RGB for PDF) - optimized for readability
    const colors = {
        primary: [0, 255, 136],      // #00ff88 - Creed green
        primaryDark: [0, 204, 106],  // #00cc6a - Darker green for better contrast
        dark: [26, 26, 26],          // #1a1a1a - Dark background (lighter than before)
        darkTable: [35, 35, 35],     // #232323 - Table background
        gray: [102, 102, 102],       // #666666 - Gray text
        lightGray: [170, 170, 170],  // #aaaaaa - Light gray
        white: [255, 255, 255],      // #ffffff - White
        black: [0, 0, 0],            // #000000 - True black
        accent: [60, 60, 60],        // #3c3c3c - Accent gray (lighter)
        lightBackground: [245, 245, 245] // #f5f5f5 - Light background for readability
    };

    // Helper functions
    function setTextColor(colorArray) {
        doc.setTextColor(colorArray[0], colorArray[1], colorArray[2]);
    }

    function setFillColor(colorArray) {
        doc.setFillColor(colorArray[0], colorArray[1], colorArray[2]);
    }

    function setDrawColor(colorArray) {
        doc.setDrawColor(colorArray[0], colorArray[1], colorArray[2]);
    }

    function addWrappedText(text, x, y, maxWidth, fontSize = 10) {
        doc.setFontSize(fontSize);
        const lines = doc.splitTextToSize(text, maxWidth);
        lines.forEach((line, index) => {
            doc.text(line, x, y + (index * lineHeight));
        });
        return y + (lines.length * lineHeight);
    }

    function checkPageBreak(currentY, neededSpace = 40) {
        if (currentY + neededSpace > pageHeight - margin - 20) {
            addFooter();
            doc.addPage();
            addHeader();
            return 50;
        }
        return currentY;
    }

    function addHeader() {
        // Add Creed header background
        setFillColor(colors.dark);
        doc.rect(0, 0, pageWidth, 45, 'F');

        // Add Creed green accent strip
        setFillColor(colors.primary);
        doc.rect(0, 40, pageWidth, 3, 'F');

        // Creed logo/title
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.primary);
        doc.text('CREED', margin, 25);

        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        setTextColor(colors.white);
        doc.text('Risk Assessment Framework', margin, 35);

        // Date and version
        doc.setFontSize(9);
        setTextColor(colors.lightGray);
        const today = new Date().toLocaleDateString();
        doc.text(`Generated: ${today}`, pageWidth - margin - 40, 25);
        doc.text('v1.0', pageWidth - margin - 15, 35);
    }

    function addFooter() {
        const footerY = pageHeight - 15;

        // Footer line
        setDrawColor(colors.primary);
        doc.setLineWidth(0.5);
        doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);

        // Footer text
        doc.setFontSize(8);
        setTextColor(colors.gray);
        doc.text('© 2024 Creed Collective • thecreed.xyz', margin, footerY);

        // Page number
        const pageNum = doc.internal.getCurrentPageInfo().pageNumber;
        doc.text(`Page ${pageNum}`, pageWidth - margin - 20, footerY);
    }

    // Start PDF generation
    addHeader();
    yPosition = 55;

    // Report title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    setTextColor(colors.black);
    doc.text('Cybersecurity Risk Assessment Report', margin, yPosition);
    yPosition += 15;

    // Subtitle with assessment date
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    setTextColor(colors.gray);
    doc.text(`Based on NIST Cybersecurity Framework v2.0`, margin, yPosition);
    yPosition += 20;

    // Executive Summary Section
    yPosition = checkPageBreak(yPosition, 60);

    // Section header with background
    setFillColor(colors.accent);
    doc.rect(margin, yPosition - 5, maxLineWidth, 12, 'F');

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    setTextColor(colors.primary);
    doc.text('Executive Summary', margin + 5, yPosition + 5);
    yPosition += 20;

    // Summary description
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    setTextColor(colors.black);
    const summaryText = 'This assessment evaluates cybersecurity maturity across six critical functions: Govern, Identify, Protect, Detect, Respond, and Recover. Each control is assessed for implementation status.';
    yPosition = addWrappedText(summaryText, margin, yPosition, maxLineWidth, 10);
    yPosition += 10;

    // Summary Table with enhanced styling
    const functionNames = ['govern', 'identify', 'protect', 'detect', 'respond', 'recover'];
    const functionLabels = ['Govern', 'Identify', 'Protect', 'Detect', 'Respond', 'Recover'];
    const totalCounts = [31, 21, 22, 11, 13, 8];

    // Table header background
    setFillColor(colors.primary);
    doc.rect(margin, yPosition, maxLineWidth, 12, 'F');

    // Table headers
    const headers = ['Function', 'Total', 'Implemented', 'Not Impl.', 'Not Appl.', 'Progress'];
    const colWidths = [30, 20, 25, 25, 25, 25];
    let xPos = margin + 3;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    setTextColor([0, 0, 0]); // Black text on green background
    headers.forEach((header, i) => {
        doc.text(header, xPos, yPosition + 8);
        xPos += colWidths[i];
    });
    yPosition += 12;

    // Table rows with alternating colors - using light backgrounds for readability
    doc.setFont('helvetica', 'normal');
    functionNames.forEach((funcName, index) => {
        yPosition = checkPageBreak(yPosition, 15);

        // Alternating row background - light colors for better readability
        if (index % 2 === 0) {
            setFillColor(colors.lightBackground); // Light gray background
            doc.rect(margin, yPosition, maxLineWidth, 10, 'F');
        } else {
            setFillColor(colors.white); // White background
            doc.rect(margin, yPosition, maxLineWidth, 10, 'F');
        }

        const counts = {
            implemented: 0,
            notImplemented: 0,
            notApplicable: 0
        };

        Object.values(assessmentData.controls[funcName]).forEach(control => {
            switch(control.status) {
                case 'Implemented': counts.implemented++; break;
                case 'Not Implemented': counts.notImplemented++; break;
                case 'Not Applicable': counts.notApplicable++; break;
            }
        });

        const total = totalCounts[index];
        const applicable = total - counts.notApplicable;
        const progress = applicable > 0 ? Math.round((counts.implemented / applicable) * 100) : 0;

        xPos = margin + 3;
        setTextColor(colors.black); // Dark text on light background

        const rowData = [
            functionLabels[index],
            total.toString(),
            counts.implemented.toString(),
            counts.notImplemented.toString(),
            counts.notApplicable.toString(),
            `${progress}%`
        ];

        rowData.forEach((data, i) => {
            if (i === 5 && progress > 0) { // Progress column in green if > 0
                setTextColor(colors.primaryDark); // Darker green for better contrast on light background
            } else {
                setTextColor(colors.black); // Black text on light background
            }
            doc.text(data, xPos, yPosition + 7);
            xPos += colWidths[i];
        });
        yPosition += 10;
    });

    yPosition += 15;

    // Resources Section
    yPosition = checkPageBreak(yPosition, 40);

    setFillColor(colors.accent);
    doc.rect(margin, yPosition - 5, maxLineWidth, 12, 'F');

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    setTextColor(colors.primary);
    doc.text('Project Resources', margin + 5, yPosition + 5);
    yPosition += 20;

    const resources = [
        ['Website', assessmentData.metadata.website],
        ['Documentation', assessmentData.metadata.documentation],
        ['Smart Contracts', assessmentData.metadata.contracts],
        ['GitHub Repository', assessmentData.metadata.github],
        ['Twitter', assessmentData.metadata.twitter],
        ['Discord', assessmentData.metadata.discord],
        ['Telegram', assessmentData.metadata.telegram]
    ];

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    resources.forEach(([label, value]) => {
        if (value && value.trim()) {
            yPosition = checkPageBreak(yPosition, 8);

            setTextColor(colors.primaryDark);
            doc.text(`${label}:`, margin, yPosition);

            setTextColor(colors.black);
            doc.text(value, margin + 40, yPosition);
            yPosition += 8;
        }
    });

    // Control Details for each function
    functionNames.forEach((funcName, funcIndex) => {
        yPosition = checkPageBreak(yPosition, 80);
        yPosition += 15;

        // Function section header
        setFillColor(colors.primary);
        doc.rect(margin, yPosition - 8, maxLineWidth, 15, 'F');

        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        setTextColor([0, 0, 0]);
        doc.text(`Function: ${functionLabels[funcIndex]}`, margin + 5, yPosition + 3);
        yPosition += 15;

        // Function description
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        setTextColor(colors.gray);
        const descriptions = {
            govern: 'Establish cybersecurity risk management strategy, expectations, and policy.',
            identify: 'Understand organizational assets, suppliers, and related cybersecurity risks.',
            protect: 'Implement safeguards to manage cybersecurity risks.',
            detect: 'Identify cybersecurity attacks and compromises in a timely manner.',
            respond: 'Take action regarding detected cybersecurity incidents.',
            recover: 'Restore assets and operations affected by cybersecurity incidents.'
        };

        yPosition = addWrappedText(descriptions[funcName], margin, yPosition, maxLineWidth, 9);
        yPosition += 12;

        // Controls table for this function
        const controlHeaders = ['ID', 'Status', 'Control Requirement'];
        const controlColWidths = [25, 35, 110];

        // Table header - using light background with dark text
        setFillColor(colors.lightBackground);
        doc.rect(margin, yPosition, maxLineWidth, 10, 'F');

        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.black); // Dark text on light background

        let xPos = margin + 2;
        controlHeaders.forEach((header, i) => {
            doc.text(header, xPos, yPosition + 7);
            xPos += controlColWidths[i];
        });
        yPosition += 10;

        // Control rows
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);

        controlsData[funcName].forEach((control, controlIndex) => {
            const controlData = assessmentData.controls[funcName][control.id];
            const status = controlData.status || 'Not Set';

            // Calculate row height based on requirement text
            const reqLines = doc.splitTextToSize(control.requirement, controlColWidths[2] - 5);
            const rowHeight = Math.max(12, reqLines.length * 4 + 4);

            yPosition = checkPageBreak(yPosition, rowHeight + 5);

            // Alternating row background - light colors for readability
            if (controlIndex % 2 === 0) {
                setFillColor(colors.lightBackground); // Light gray background
                doc.rect(margin, yPosition, maxLineWidth, rowHeight, 'F');
            } else {
                setFillColor(colors.white); // White background
                doc.rect(margin, yPosition, maxLineWidth, rowHeight, 'F');
            }

            xPos = margin + 2;
            const startY = yPosition + 6;

            // Control ID
            setTextColor(colors.primaryDark); // Darker green for better contrast
            doc.setFont('helvetica', 'bold');
            doc.text(control.id, xPos, startY);
            xPos += controlColWidths[0];

            // Status with color coding
            doc.setFont('helvetica', 'normal');
            switch(status) {
                case 'Implemented':
                    setTextColor(colors.primaryDark); // Darker green for better contrast
                    break;
                case 'Not Implemented':
                    setTextColor([204, 50, 50]); // Darker red for better contrast
                    break;
                case 'Not Applicable':
                    setTextColor(colors.gray);
                    break;
                default:
                    setTextColor(colors.gray);
            }
            doc.text(status, xPos, startY);
            xPos += controlColWidths[1];

            // Control requirement
            setTextColor(colors.black); // Dark text on light background
            reqLines.forEach((line, index) => {
                doc.text(line, xPos, startY + (index * 4));
            });

            yPosition += rowHeight;
        });

        yPosition += 10;
    });

    // Add footer to last page
    addFooter();

    // Save the PDF
    const fileName = `creed-assessment-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Auto-save with debouncing
const debouncedSave = debounce(saveToLocalStorage, 800);

// Save indicator functions
function showSaveIndicator(controlId) {
    const indicator = document.getElementById(`${controlId}-indicator`);
    if (indicator) {
        indicator.classList.remove('saved');
        indicator.classList.add('saving');
        indicator.textContent = 'Saving...';
        indicator.classList.add('show');

        setTimeout(() => {
            indicator.classList.remove('saving');
            indicator.classList.add('saved');
            indicator.textContent = 'Saved';

            setTimeout(() => {
                indicator.classList.remove('show');
            }, 1500);
        }, 500);
    }
}

function showGlobalSaveIndicator() {
    // Create a temporary indicator for metadata changes
    const existingIndicator = document.querySelector('.global-save-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }

    const indicator = document.createElement('div');
    indicator.className = 'save-indicator global-save-indicator show saved';
    indicator.textContent = 'Saved';
    indicator.style.position = 'fixed';
    indicator.style.top = '20px';
    indicator.style.right = '20px';
    indicator.style.zIndex = '1000';

    document.body.appendChild(indicator);

    setTimeout(() => {
        indicator.classList.remove('show');
        setTimeout(() => {
            if (indicator.parentNode) {
                indicator.parentNode.removeChild(indicator);
            }
        }, 300);
    }, 1500);
}

// Clear all data function
function clearAllData() {
    if (confirm('Are you sure you want to clear all saved data? This action cannot be undone.')) {
        localStorage.removeItem('creed-assessment-data');

        // Reset assessment data
        assessmentData = {
            metadata: {
                website: '',
                documentation: '',
                contracts: '',
                github: '',
                twitter: '',
                discord: '',
                telegram: ''
            },
            controls: {}
        };

        // Reinitialize controls structure
        Object.keys(controlsData).forEach(functionName => {
            assessmentData.controls[functionName] = {};
            controlsData[functionName].forEach(control => {
                assessmentData.controls[functionName][control.id] = {
                    status: '',
                    explanation: ''
                };
            });
        });

        // Update UI
        updateFormFields();
        updateSummaryTable();

        // Show confirmation
        alert('All data has been cleared successfully.');
    }
}

// Update event listeners to use debounced save
document.addEventListener('input', function(e) {
    if (e.target.matches('input, textarea, select')) {
        debouncedSave();
    }
});