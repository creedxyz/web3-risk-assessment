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
        contracts: [''], // Changed to array for dynamic fields
        github: '',
        twitter: '',
        discord: '',
        telegram: '',
        dynamicSocials: [] // New array for additional social fields
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
const primaryTabButtons = document.querySelectorAll('.primary-tab-button');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const secondaryNav = document.getElementById('assessment-tabs');
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
    // Primary tab switching (About / Self-Assessment)
    primaryTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPrimary = this.getAttribute('data-primary');
            switchPrimaryTab(targetPrimary);
        });
    });

    // Secondary tab switching (Executive Summary and functions)
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Set initial state: Self-Assessment active, show secondary nav and Executive Summary
    switchPrimaryTab('assessment');
    switchTab('summary');
}

function switchPrimaryTab(targetPrimary) {
    // Update primary tab buttons
    primaryTabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-primary="${targetPrimary}"]`).classList.add('active');

    if (targetPrimary === 'about') {
        // Show About tab, hide secondary navigation
        secondaryNav.classList.add('hidden');
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById('about').classList.add('active');
    } else if (targetPrimary === 'assessment') {
        // Show secondary navigation and default to currently active tab
        secondaryNav.classList.remove('hidden');
        // Find active secondary tab or default to summary
        const activeSecondaryTab = document.querySelector('.tab-button.active');
        const targetTab = activeSecondaryTab ? activeSecondaryTab.getAttribute('data-tab') : 'summary';
        switchTab(targetTab);
    }
}

function switchTab(targetTab) {
    // Update secondary tab buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    const targetButton = document.querySelector(`[data-tab="${targetTab}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }

    // Update tab content
    tabContents.forEach(content => content.classList.remove('active'));
    const targetContent = document.getElementById(targetTab);
    if (targetContent) {
        targetContent.classList.add('active');
    }
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
                    <div class="control-id ${functionName}">${control.id}</div>
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
        // Collect dynamic contract fields
        const contractInputs = document.querySelectorAll('#contracts-container input[type="text"]');
        assessmentData.metadata.contracts = Array.from(contractInputs).map(input => input.value).filter(value => value.trim() !== '');

        // Collect dynamic social fields
        const dynamicSocials = [];
        const dynamicSocialFields = document.querySelectorAll('.dynamic-social-field');
        dynamicSocialFields.forEach(field => {
            const nameInput = field.querySelector('.social-name-input');
            const urlInput = field.querySelector('.social-url-input');
            if (nameInput && urlInput && nameInput.value.trim() !== '' && urlInput.value.trim() !== '') {
                dynamicSocials.push({
                    name: nameInput.value,
                    url: urlInput.value
                });
            }
        });
        assessmentData.metadata.dynamicSocials = dynamicSocials;

        // Save to localStorage
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
    // Update simple metadata fields
    ['website', 'documentation', 'github', 'twitter', 'discord', 'telegram'].forEach(field => {
        const element = document.getElementById(field);
        if (element && assessmentData.metadata[field]) {
            element.value = assessmentData.metadata[field];
        }
    });

    // Restore dynamic contract fields
    const contractsContainer = document.getElementById('contracts-container');
    if (contractsContainer && assessmentData.metadata.contracts) {
        // Clear existing dynamic fields (keep first one)
        const dynamicFields = contractsContainer.querySelectorAll('.dynamic-field-group');
        dynamicFields.forEach(field => field.remove());

        // Set first contract field
        const firstContract = document.getElementById('contracts');
        if (firstContract && assessmentData.metadata.contracts[0]) {
            firstContract.value = assessmentData.metadata.contracts[0];
        }

        // Add additional contract fields
        for (let i = 1; i < assessmentData.metadata.contracts.length; i++) {
            contractFieldCounter++;
            const fieldGroup = document.createElement('div');
            fieldGroup.className = 'dynamic-field-group';
            fieldGroup.innerHTML = `
                <input type="text" id="contracts-${contractFieldCounter}" placeholder="Contract address" value="${assessmentData.metadata.contracts[i]}">
                <button type="button" class="remove-field-btn" onclick="removeContractField(this)">×</button>
            `;
            contractsContainer.appendChild(fieldGroup);
        }
    }

    // Restore dynamic social fields
    const socialsContainer = document.getElementById('socials-container');
    if (socialsContainer && assessmentData.metadata.dynamicSocials) {
        // Remove existing dynamic social fields
        const dynamicSocialFields = socialsContainer.querySelectorAll('.dynamic-social-field');
        dynamicSocialFields.forEach(field => field.remove());

        // Add dynamic social fields
        assessmentData.metadata.dynamicSocials.forEach(social => {
            socialFieldCounter++;
            const fieldGroup = document.createElement('div');
            fieldGroup.className = 'form-group dynamic-social-field';
            fieldGroup.innerHTML = `
                <label>Social Media</label>
                <div class="social-input-row">
                    <input type="text" id="social-name-${socialFieldCounter}" placeholder="Social media name" class="social-name-input" value="${social.name}">
                    <input type="text" id="social-url-${socialFieldCounter}" placeholder="Link or handle" class="social-url-input" value="${social.url}">
                    <button type="button" class="remove-field-btn" onclick="removeSocialField(this)">×</button>
                </div>
            `;
            socialsContainer.appendChild(fieldGroup);
        });
    }

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
        primary: [89, 181, 131],      // #59b583 - Creed green
        primaryDark: [70, 150, 110],  // Darker green for better contrast
        dark: [25, 25, 25],          // #191919 - Dark background
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
        doc.text('© 2025 Creed Collective • thecreed.xyz', margin, footerY);

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
    doc.text('Comprehensive Web3 Risk Assessments Report', margin, yPosition);
    yPosition += 15;

    // Subtitle with assessment date
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    setTextColor(colors.gray);
    yPosition = addWrappedText('Cybersecurity posture & Operations Risk Assessment', margin, yPosition, maxLineWidth, 12);
    yPosition += 5;
    yPosition = addWrappedText('Creed performs detailed risk assessments for DeFi protocols, NFT platforms, DAOs, and the entire Web3 ecosystem using a newly standardized methodology based on the NIST Capability Maturity Model (CMM), Cybersecurity Framework v2.0 (CSF), and Secure Controls Framework (SCF).', margin, yPosition, maxLineWidth, 10);
    yPosition += 10;

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

    // Basic resources
    const basicResources = [
        ['Website', assessmentData.metadata.website],
        ['Documentation', assessmentData.metadata.documentation],
        ['GitHub Repository', assessmentData.metadata.github],
        ['Twitter', assessmentData.metadata.twitter],
        ['Discord', assessmentData.metadata.discord],
        ['Telegram', assessmentData.metadata.telegram]
    ];

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    // Add basic resources
    basicResources.forEach(([label, value]) => {
        if (value && value.trim()) {
            yPosition = checkPageBreak(yPosition, 8);

            setTextColor(colors.primaryDark);
            doc.text(`${label}:`, margin, yPosition);

            setTextColor(colors.black);
            doc.text(value, margin + 40, yPosition);
            yPosition += 8;
        }
    });

    // Add dynamic contracts
    if (assessmentData.metadata.contracts && assessmentData.metadata.contracts.length > 0) {
        assessmentData.metadata.contracts.forEach((contract, index) => {
            if (contract && contract.trim()) {
                yPosition = checkPageBreak(yPosition, 8);

                setTextColor(colors.primaryDark);
                const label = index === 0 ? 'Smart Contract:' : `Smart Contract ${index + 1}:`;
                doc.text(label, margin, yPosition);

                setTextColor(colors.black);
                doc.text(contract, margin + 40, yPosition);
                yPosition += 8;
            }
        });
    }

    // Add dynamic socials
    if (assessmentData.metadata.dynamicSocials && assessmentData.metadata.dynamicSocials.length > 0) {
        assessmentData.metadata.dynamicSocials.forEach((social) => {
            if (social.name && social.url && social.name.trim() && social.url.trim()) {
                yPosition = checkPageBreak(yPosition, 8);

                setTextColor(colors.primaryDark);
                doc.text(`${social.name}:`, margin, yPosition);

                setTextColor(colors.black);
                doc.text(social.url, margin + 40, yPosition);
                yPosition += 8;
            }
        });
    }

    // Risk Assessment Process Section
    yPosition = checkPageBreak(yPosition, 60);
    yPosition += 15;

    setFillColor(colors.accent);
    doc.rect(margin, yPosition - 5, maxLineWidth, 12, 'F');

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    setTextColor(colors.primary);
    doc.text('Risk Assessment Process', margin + 5, yPosition + 5);
    yPosition += 20;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    setTextColor(colors.black);
    const processText = 'To ensure a thorough and accurate risk assessment, we follow a structured and transparent approach:';
    yPosition = addWrappedText(processText, margin, yPosition, maxLineWidth, 10);
    yPosition += 10;

    const processSteps = [
        'Pre-Interview Questionnaire: We begin by sending the client a questionnaire designed to gather basic information. This helps us understand the client\'s initial risk profile and identify areas that require deeper exploration.',
        'One-Hour Interview: After reviewing the questionnaire, we conduct a one-hour interview with the client. This interview follows a set of guidelines and includes specific questions tailored to the client\'s unique circumstances. The goal is to gather detailed insights and clarify any ambiguities from the questionnaire.',
        'Recording and Documentation: The interview is recorded, and our team takes detailed notes throughout the session. These materials are used to complete the assessment, ensuring that all relevant information is captured and thoroughly evaluated.',
        'Report Compilation: Using the insights from both the questionnaire and the interview, we compile a comprehensive risk assessment report. This report reflects a complete analysis based on the data provided by the client and our evaluation.',
        'Peer Review: Once the report is drafted, it undergoes a peer review process. Another member of our team reviews the report to ensure accuracy, consistency, and that no critical aspects are overlooked. This step ensures that the risk assessment is objective and reliable.'
    ];

    processSteps.forEach((step, index) => {
        yPosition = checkPageBreak(yPosition, 20);

        // Step number
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.primaryDark);
        doc.text(`${index + 1}.`, margin, yPosition);

        // Step text
        doc.setFont('helvetica', 'normal');
        setTextColor(colors.black);
        yPosition = addWrappedText(step, margin + 15, yPosition, maxLineWidth - 15, 10);
        yPosition += 8;
    });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    setTextColor(colors.black);
    const closingText = 'By following this process, we aim to provide a clear, comprehensive, and accurate risk analysis that our clients can rely on for decision-making.';
    yPosition = addWrappedText(closingText, margin, yPosition + 5, maxLineWidth, 10);
    yPosition += 15;

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
            govern: 'The organization’s cybersecurity risk management strategy, expectations, and policy are established, communicated, and monitored. The GOVERN Function provides outcomes to inform what an organization may do to achieve and prioritize the outcomes of the other five Functions in the context of its mission and stakeholder expectations. Governance activities are critical for incorporating cybersecurity into an organization’s broader enterprise risk management (ERM) strategy. GOVERN addresses an understanding of organizational context; the establishment of cybersecurity strategy and cybersecurity supply chain risk management; roles, responsibilities, and authorities; policy; and the oversight of cybersecurity strategy.',
            identify: 'The organization’s current cybersecurity risks are understood. Understanding the organization’s assets (e.g., data, hardware, software, systems, facilities, services, people), suppliers, and related cybersecurity risks enables an organization to prioritize its efforts consistent with its risk management strategy and the mission needs identified under GOVERN. This Function also includes the identification of improvement opportunities for the organization’s policies, plans, processes, procedures, and practices that support cybersecurity risk management to inform efforts under all six Functions.',
            protect: 'Safeguards to manage the organization’s cybersecurity risks are used. Once assets and risks are identified and prioritized, PROTECT supports the ability to secure those assets to prevent or lower the likelihood and impact of adverse cybersecurity events, as well as to increase the likelihood and impact of taking advantage of opportunities. Outcomes covered by this Function include identity management, authentication, and access control; awareness and training; data security; platform security (i.e., securing the hardware, software, and services of physical and virtual platforms); and the resilience of technology infrastructure.',
            detect: 'Possible cybersecurity attacks and compromises are found and analyzed. DETECT enables the timely discovery and analysis of anomalies, indicators of compromise, and other potentially adverse events that may indicate that cybersecurity attacks and incidents are occurring. This Function supports successful incident response and recovery activities.',
            respond: 'Actions regarding a detected cybersecurity incident are taken. RESPOND supports the ability to contain the effects of cybersecurity incidents. Outcomes within this Function cover incident management, analysis, mitigation, reporting, and communication.',
            recover: 'Assets and operations affected by a cybersecurity incident are restored. RECOVER supports the timely restoration of normal operations to reduce the effects of cybersecurity incidents and enable appropriate communication during recovery efforts. While many cybersecurity risk management activities focus on preventing negative events from occurring, they may also support taking advantage of positive opportunities. Actions to reduce cybersecurity risk might benefit an organization in other ways, like increasing revenue (e.g., first offering excess facility space to a commercial hosting provider for hosting their own and other organizations’ data centers, then moving a major financial system from the organization’s in-house data center to the hosting provider to reduce cybersecurity risks).'
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
            const explanation = controlData.explanation || '';

            // Calculate row height based on requirement text and explanation
            const reqLines = doc.splitTextToSize(control.requirement, controlColWidths[2] - 5);
            let rowHeight = Math.max(12, reqLines.length * 4 + 4);

            // Add space for explanation if it exists
            if (explanation.trim()) {
                const explLines = doc.splitTextToSize(`Notes: ${explanation}`, controlColWidths[2] - 5);
                rowHeight += (explLines.length * 4) + 6; // Extra spacing between requirement and notes
            }

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
            let currentY = startY;
            reqLines.forEach((line, index) => {
                doc.text(line, xPos, currentY + (index * 4));
            });
            currentY += reqLines.length * 4;

            // Add explanation/notes if they exist
            if (explanation.trim()) {
                currentY += 4; // Add some spacing
                setTextColor(colors.gray); // Slightly lighter for notes
                doc.setFont('helvetica', 'italic');
                const explLines = doc.splitTextToSize(`Notes: ${explanation}`, controlColWidths[2] - 5);
                explLines.forEach((line, index) => {
                    doc.text(line, xPos, currentY + (index * 4));
                });
                doc.setFont('helvetica', 'normal'); // Reset font
            }

            yPosition += rowHeight;
        });

        yPosition += 10;
    });

    // Disclaimer Section
    yPosition = checkPageBreak(yPosition, 60);
    yPosition += 15;

    setFillColor(colors.accent);
    doc.rect(margin, yPosition - 5, maxLineWidth, 12, 'F');

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    setTextColor(colors.primary);
    doc.text('Disclaimer', margin + 5, yPosition + 5);
    yPosition += 20;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    setTextColor(colors.black);
    const disclaimerText = 'This Risk Assessment Report ("Report") has been prepared by the Creed collective ("Creed") for the exclusive use of the client identified herein. Its findings and recommendations are subject to the following limitations and conditions:';
    yPosition = addWrappedText(disclaimerText, margin, yPosition, maxLineWidth, 10);
    yPosition += 15;

    const disclaimerPoints = [
        'Methodology & Continuous Improvement — Creed\'s assessment methodology is a proprietary and evolving product. It benchmarks the evidence collected against two widely recognised industry references—the Capability Maturity Model (CMM) and the Secure Controls Framework (SCF). As our tooling and mapping logic mature, future assessments may apply updated criteria, weightings, or scoring thresholds.',
        'Information Source & Accuracy — All conclusions rely on information supplied by project representatives during the pre-assessment questionnaire, a one-hour interview, and any publicly available material they directed us to. Creed has accepted these inputs as accurate and complete; no independent code review, penetration test, or on-chain analysis was executed.',
        'Assessment Depth & Scope — The Report provides a high-level, capability-maturity view of the organisation\'s stated controls. It is not a comprehensive security audit and does not constitute legal, financial, or regulatory advice, nor a guarantee that undisclosed vulnerabilities, misconfigurations, or policy gaps are absent.',
        'Point-in-Time Nature — Findings reflect the organisation\'s posture as of the interview date. Because threat landscapes and internal practices evolve, Creed has no obligation to update this Report after delivery.',
        'Use & Reliance — This document should be read in full and used only for risk-management decisions within the original engagement scope. Creed disclaims all liability for any other use or for decisions made without considering the limitations above.'
    ];

    disclaimerPoints.forEach((point, index) => {
        yPosition = checkPageBreak(yPosition, 25);

        // Point number
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.primaryDark);
        doc.text(`${index + 1}.`, margin, yPosition);

        // Point text
        doc.setFont('helvetica', 'normal');
        setTextColor(colors.black);
        yPosition = addWrappedText(point, margin + 15, yPosition, maxLineWidth - 15, 10);
        yPosition += 12;
    });

    const disclaimerClosing = 'By reviewing this Report, the client acknowledges and accepts these limitations.';
    yPosition = addWrappedText(disclaimerClosing, margin, yPosition + 5, maxLineWidth, 10);
    yPosition += 20;

    // Appendix A: Risk Maturity Tiers
    yPosition = checkPageBreak(yPosition, 60);

    setFillColor(colors.accent);
    doc.rect(margin, yPosition - 5, maxLineWidth, 12, 'F');

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    setTextColor(colors.primary);
    doc.text('Appendix A: Risk Maturity Tiers', margin + 5, yPosition + 5);
    yPosition += 20;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    setTextColor(colors.black);
    const tiersIntro = 'These tiers draw upon the high-level structure of the Capability Maturity Model (CMM) and Secure Controls Framework (SCF). The Tiers characterize the rigor of an organization\'s cybersecurity risk governance practices (GOVERN) and cybersecurity risk management practices (IDENTIFY, PROTECT, DETECT, RESPOND, and RECOVER).';
    yPosition = addWrappedText(tiersIntro, margin, yPosition, maxLineWidth, 10);
    yPosition += 15;

    // Tier definitions
    const tiers = [
        { name: 'Tier 0: Non-existent', governance: 'not defined', management: 'not performed' },
        { name: 'Tier 1: Initial', governance: 'Performed Informally. The application of the organizational risk strategy is managed in an ad hoc manner. Prioritization is ad hoc and not formally based on objectives or threat environment.', management: 'Performed Informally. There is limited awareness of cybersecurity risks at the organizational level. The organization implements risk management on an irregular, case-by-case basis. The organization may not have processes that enable cybersecurity information to be shared within the organization. The organization is generally unaware of the cybersecurity risks associated with its suppliers and the products and services it acquires and uses.' },
        { name: 'Tier 2: Repeatable', governance: 'Planned & tracked. Risk management practices are approved by management but may not be established as an organization-wide policy. The prioritization of cybersecurity activities and protection needs is directly informed by organizational risk objectives, the threat environment, or business/mission requirements.', management: 'Requirements-Driven Practices. There is an awareness of cybersecurity risks at the organizational level, but an organization-wide approach to managing cybersecurity risks has not been established. Cybersecurity information is shared within the organization on an informal basis. The organization is aware of the cybersecurity risks associated with its suppliers and the products and services it acquires and uses, but it does not act consistently or formally in response to those risks.' },
        { name: 'Tier 3: Defined', governance: 'Well-defined. Risk management policies and processes are documented, standardized, and integrated across the organization. The organization has developed a formal governance structure that oversees cybersecurity risk management, ensuring alignment with business and mission objectives. Cybersecurity risk governance is explicitly included in enterprise-wide decision-making processes.', management: 'Enterprise-Wide Standardization. An organization-wide approach to managing cybersecurity risks is established and consistently applied. Cybersecurity roles and responsibilities are clearly defined, and personnel are trained to understand their security responsibilities. The organization has established formal mechanisms for sharing cybersecurity information both internally and externally with stakeholders. The organization formally assesses risks associated with its suppliers and enforces security requirements through contractual agreements and monitoring mechanisms.' },
        { name: 'Tier 4: Capable', governance: 'Quantitatively Controlled. The organization\'s risk management practices are formally approved and expressed as policy. Risk-informed policies, processes, and procedures are defined, implemented as intended, and reviewed. Organizational cybersecurity practices are regularly updated based on the application of risk management processes to changes in business/mission requirements, threats, and technological landscape.', management: 'Metrics-Driven Governance. There is an organization-wide approach to managing cybersecurity risks. Cybersecurity information is routinely shared throughout the organization. Consistent methods are in place to respond effectively to changes in risk. Personnel possess the knowledge and skills to perform their appointed roles and responsibilities. The organization consistently and accurately monitors the risks of assets. Senior cybersecurity and non-cybersecurity executives communicate regularly regarding cybersecurity risks. Executives ensure that security is considered through all lines of operation in the organization. The organization\'s risk strategy is informed by the cybersecurity risks associated with its suppliers and the products and services it acquires and uses. Personnel formally act upon those risks through mechanisms such as written agreements to communicate baseline requirements, governance structures (e.g., risk councils), and policy implementation and monitoring. These actions are implemented consistently and as intended and are continuously monitored and reviewed.' },
        { name: 'Tier 5: Efficient', governance: 'Continuously Improving. There is an organization-wide approach to managing cybersecurity risks that uses risk-informed policies, processes, and procedures to address potential cybersecurity events. The relationship between cybersecurity risks and organizational objectives is clearly understood and considered when making decisions. Executives monitor cybersecurity risks in the same context as financial and other organizational risks. The organizational budget is based on an understanding of the current and predicted risk environment and risk tolerance. Business units implement the executive vision and analyze system-level risks in the context of organizational risk tolerances.', management: 'World-Class Practices. Risk management is part of the organizational culture. It evolves from an awareness of previous activities and continuous awareness of activities on organizational systems and networks. The organization can quickly and efficiently account for changes to business/mission objectives in how risk is approached and communicated. The organization adapts its cybersecurity practices based on previous and current cybersecurity activities, including lessons learned and predictive indicators. Through a process of continuous improvement that incorporates advanced cybersecurity technologies and practices, the organization actively adapts to a changing technological landscape and responds in a timely and effective manner to evolving sophisticated threats. The organization uses real-time or near real-time information to understand and consistently act upon the cybersecurity risks associated with its suppliers and the products and services it acquires and uses. Cybersecurity information is constantly shared throughout the organization and with authorized third parties.' }
    ];

    tiers.forEach((tier) => {
        yPosition = checkPageBreak(yPosition, 30);

        // Tier name
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.primaryDark);
        yPosition = addWrappedText(tier.name, margin, yPosition, maxLineWidth, 11);
        yPosition += 8;

        // Risk Governance
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.black);
        doc.text('Risk Governance:', margin + 10, yPosition);
        yPosition += 6;

        doc.setFont('helvetica', 'normal');
        yPosition = addWrappedText(tier.governance, margin + 15, yPosition, maxLineWidth - 15, 9);
        yPosition += 8;

        // Risk Management
        doc.setFont('helvetica', 'bold');
        doc.text('Risk Management:', margin + 10, yPosition);
        yPosition += 6;

        doc.setFont('helvetica', 'normal');
        yPosition = addWrappedText(tier.management, margin + 15, yPosition, maxLineWidth - 15, 9);
        yPosition += 12;
    });

    // Appendix B: Identifier Glossary
    yPosition = checkPageBreak(yPosition, 60);

    setFillColor(colors.accent);
    doc.rect(margin, yPosition - 5, maxLineWidth, 12, 'F');

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    setTextColor(colors.primary);
    doc.text('Appendix B: Identifier Glossary', margin + 5, yPosition + 5);
    yPosition += 20;

    const glossaryEntries = [
        { category: 'Govern (GV)', items: [
            { code: 'GV.OC', name: 'Organizational Context' },
            { code: 'GV.RM', name: 'Risk Management Strategy' },
            { code: 'GV.RR', name: 'Roles, Responsibilities, And Authorities' },
            { code: 'GV.PO', name: 'Policy' },
            { code: 'GV.OV', name: 'Oversight' },
            { code: 'GV.SC', name: 'Cybersecurity Supply Chain Risk Management' }
        ]},
        { category: 'Identify (ID)', items: [
            { code: 'ID.AM', name: 'Asset Management' },
            { code: 'ID.RA', name: 'Risk Assessment' },
            { code: 'ID.IM', name: 'Improvement' }
        ]},
        { category: 'Protect (PR)', items: [
            { code: 'PR.AA', name: 'Identity Management, Authentication, And Access Control' },
            { code: 'PR.AT', name: 'Awareness And Training' },
            { code: 'PR.DS', name: 'Data Security' },
            { code: 'PR.PS', name: 'Platform Security' },
            { code: 'PR.IR', name: 'Technology Infrastructure Resilience' }
        ]},
        { category: 'Detect (DE)', items: [
            { code: 'DE.CM', name: 'Continuous Monitoring' },
            { code: 'DE.AE', name: 'Adverse Event Analysis' }
        ]},
        { category: 'Respond (RS)', items: [
            { code: 'RS.MA', name: 'Incident Management' },
            { code: 'RS.AN', name: 'Incident Analysis' },
            { code: 'RS.CO', name: 'Incident Response Reporting And Communication' },
            { code: 'RS.MI', name: 'Incident Mitigation' }
        ]},
        { category: 'Recover (RC)', items: [
            { code: 'RC.RP', name: 'Incident Recovery Plan Execution' },
            { code: 'RC.CO', name: 'Incident Recovery Communication' }
        ]}
    ];

    glossaryEntries.forEach((entry) => {
        yPosition = checkPageBreak(yPosition, entry.items.length * 6 + 10);

        // Category header
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.primaryDark);
        doc.text(entry.category, margin, yPosition);
        yPosition += 10;

        // Category items
        entry.items.forEach((item) => {
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            setTextColor(colors.black);

            doc.text(item.code, margin + 10, yPosition);
            doc.text(item.name, margin + 35, yPosition);
            yPosition += 6;
        });

        yPosition += 5; // Extra space between categories
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

// Dynamic field management
let contractFieldCounter = 1;
let socialFieldCounter = 1;

function addContractField() {
    contractFieldCounter++;
    const container = document.getElementById('contracts-container');

    const fieldGroup = document.createElement('div');
    fieldGroup.className = 'dynamic-field-group';
    fieldGroup.innerHTML = `
        <input type="text" id="contracts-${contractFieldCounter}" placeholder="Contract address">
        <button type="button" class="remove-field-btn" onclick="removeContractField(this)">×</button>
    `;

    container.appendChild(fieldGroup);

    // Trigger save
    debouncedSave();
}

function removeContractField(button) {
    const fieldGroup = button.parentElement;
    fieldGroup.remove();

    // Trigger save
    debouncedSave();
}

function addSocialField() {
    socialFieldCounter++;
    const container = document.getElementById('socials-container');

    const fieldGroup = document.createElement('div');
    fieldGroup.className = 'form-group dynamic-social-field';
    fieldGroup.innerHTML = `
        <label>Social Media</label>
        <div class="social-input-row">
            <input type="text" id="social-name-${socialFieldCounter}" placeholder="Social media name" class="social-name-input">
            <input type="text" id="social-url-${socialFieldCounter}" placeholder="Link or handle" class="social-url-input">
            <button type="button" class="remove-field-btn" onclick="removeSocialField(this)">×</button>
        </div>
    `;

    container.appendChild(fieldGroup);

    // Trigger save
    debouncedSave();
}

function removeSocialField(button) {
    const fieldGroup = button.closest('.dynamic-social-field');
    fieldGroup.remove();

    // Trigger save
    debouncedSave();
}