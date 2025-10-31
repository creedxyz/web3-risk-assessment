// Data loaded from external JSON files
let controlsData = null;
let pdfContent = null;

// Load data from JSON files
async function loadData() {
    try {
        const [controlsResponse, pdfResponse] = await Promise.all([
            fetch('data/controls.json'),
            fetch('data/pdf-content.json')
        ]);

        controlsData = await controlsResponse.json();
        pdfContent = await pdfResponse.json();

        return true;
    } catch (error) {
        console.error('Error loading data files:', error);
        alert('Failed to load assessment data. Please refresh the page.');
        return false;
    }
}

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
document.addEventListener('DOMContentLoaded', async function() {
    // Load data from JSON files first
    const dataLoaded = await loadData();
    if (!dataLoaded) return;

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

    // Set initial state: About active by default
    switchPrimaryTab('about');
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
    // Creed logo click to navigate to About page
    const creedLogoLink = document.getElementById('creedLogoLink');
    if (creedLogoLink) {
        creedLogoLink.addEventListener('click', function(e) {
            e.preventDefault();
            switchPrimaryTab('about');
        });
    }

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
async function exportToPDF() {
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
    yPosition = addWrappedText(pdfContent.tiersIntro, margin, yPosition, maxLineWidth, 10);
    yPosition += 15;

    pdfContent.tiers.forEach((tier) => {
        // Estimate minimum space needed for tier header
        yPosition = checkPageBreak(yPosition, 40);

        // Tier name
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.primaryDark);
        yPosition = addWrappedText(tier.name, margin, yPosition, maxLineWidth, 11);
        yPosition += 8;

        // Check space before governance section
        yPosition = checkPageBreak(yPosition, 25);

        // Risk Governance
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.black);
        doc.text('Risk Governance:', margin + 10, yPosition);
        yPosition += 6;

        doc.setFont('helvetica', 'normal');
        yPosition = addWrappedText(tier.governance, margin + 15, yPosition, maxLineWidth - 15, 9);
        yPosition += 8;

        // Check space before management section
        yPosition = checkPageBreak(yPosition, 25);

        // Risk Management
        doc.setFont('helvetica', 'bold');
        setTextColor(colors.black);
        doc.text('Risk Management:', margin + 10, yPosition);
        yPosition += 6;

        doc.setFont('helvetica', 'normal');
        yPosition = addWrappedText(tier.management, margin + 15, yPosition, maxLineWidth - 15, 9);
        yPosition += 12;
    });

    // Appendix A.2: Risk Maturity Levels (Nested Approach)
    yPosition = checkPageBreak(yPosition, 60);

    setFillColor(colors.accent);
    doc.rect(margin, yPosition - 5, maxLineWidth, 12, 'F');

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    setTextColor(colors.primary);
    doc.text('Appendix A.2: Risk Maturity Levels (Nested Approach to Maturity)', margin + 5, yPosition + 5);
    yPosition += 20;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    setTextColor(colors.black);

    yPosition = addWrappedText(pdfContent.maturityDescription, margin, yPosition, maxLineWidth, 10);
    yPosition += 15;

    // Add visual representation of maturity levels
    yPosition = checkPageBreak(yPosition, 100);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    setTextColor(colors.gray);

    yPosition = addWrappedText(pdfContent.maturityNote, margin, yPosition, maxLineWidth, 9);
    yPosition += 10;

    // Add the maturity levels image
    yPosition = checkPageBreak(yPosition, 120);

    try {
        // Load and add the maturity levels diagram
        const img = await new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = 'assets/riskassessment_maturity_levels.png';
        });

        // Calculate image dimensions to fit page width while maintaining aspect ratio
        const imgWidth = maxLineWidth;
        const imgHeight = (img.height / img.width) * imgWidth;

        // Check if we need a new page for the image
        if (yPosition + imgHeight > pageHeight - margin - 20) {
            addFooter();
            doc.addPage();
            addHeader();
            yPosition = 50;
        }

        doc.addImage(img, 'PNG', margin, yPosition, imgWidth, imgHeight);
        yPosition += imgHeight + 10;
    } catch (error) {
        // If image fails to load, show a note instead
        console.warn('Failed to load maturity levels image:', error);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        setTextColor(colors.gray);
        const imageNote = 'Note: Each level incorporates capabilities from all previous levels, creating a cumulative maturity progression. View the complete maturity levels diagram at: thecreed.xyz/riskassessments';
        yPosition = addWrappedText(imageNote, margin, yPosition, maxLineWidth, 9);
        yPosition += 15;
    }

    // Reset text formatting to normal after image section
    doc.setFont('helvetica', 'normal');
    setTextColor(colors.black);

    // Appendix B: Identifier Glossary
    yPosition = checkPageBreak(yPosition, 60);

    setFillColor(colors.accent);
    doc.rect(margin, yPosition - 5, maxLineWidth, 12, 'F');

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    setTextColor(colors.primary);
    doc.text('Appendix B: Identifier Glossary', margin + 5, yPosition + 5);
    yPosition += 20;

    pdfContent.glossary.forEach((entry) => {
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