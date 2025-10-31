# Creed Risk Assessment Framework

An interactive web application for conducting cybersecurity risk assessments using Creed's standardized methodology based on NIST Capability Maturity Model (CMM), Cybersecurity Framework v2.0 (CSF), and Secure Controls Framework (SCF).

Designed for Web3 projects, this framework addresses unique security challenges including smart contract upgradeability, DAO governance, bridge security, oracle dependencies, and distributed team operations.

## Features

- **Interactive Assessment**: Complete risk assessments across 6 critical functions (Govern, Identify, Protect, Detect, Respond, Recover)
- **106 Security Controls**: Comprehensive coverage of all NIST CSF v2.0 controls
- **6-Tier Maturity Model**: From Tier 0 (Non-existent) to Tier 5 (Efficient)
- **Real-time Analytics**: Auto-calculated summary statistics and maturity scoring
- **Data Persistence**: Local storage with JSON import/export
- **Professional PDF Reports**: Detailed assessment reports with maturity analysis
- **Community-Driven**: Open framework encouraging Web3-specific contributions

## Quick Start

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/creed-risk-assessment.git
   cd creed-risk-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   This will start a live server at `http://localhost:3000` with auto-reload functionality.

### Alternative Development Commands

- `npm start` - Same as `npm run dev`
- `npm run serve` - Start server on port 8080
- `npm run build` - No build step required (static site)

## Usage

### Conducting an Assessment

1. **Executive Summary**: Fill in project metadata (website, documentation, contracts, etc.)
2. **Function Tabs**: Navigate through the 6 cybersecurity functions
3. **Control Evaluation**: For each control, select status:
   - **Implemented**: Control is fully in place
   - **Not Implemented**: Control is missing or incomplete
   - **Not Applicable**: Control doesn't apply to this organization
4. **Add Notes**: Provide explanations and context in textarea fields
5. **Auto-save**: Data persists automatically in browser storage

### Data Management

- **Export JSON**: Download assessment data for backup or sharing
- **Import JSON**: Load previously saved assessments
- **Export PDF**: Generate professional assessment reports
- **Auto-save**: All changes saved automatically to local storage


## Professional Assessment Services

While this tool provides a comprehensive self-assessment framework, for critical systems and professional validation, consider booking a professional assessment with the Creed team:

**[Book Professional Assessment →](https://form.typeform.com/to/nlWHgMTF)**

Professional services include:
- Expert security analysis
- Detailed stakeholder interviews
- Peer review and validation
- Actionable improvement roadmaps
- Compliance mapping
- Executive reporting


### Functions Assessed

1. **Govern (31 controls)**: Risk management strategy and governance
2. **Identify (21 controls)**: Asset management and risk assessment
3. **Protect (22 controls)**: Access control, training, and data security
4. **Detect (11 controls)**: Monitoring and anomaly detection
5. **Respond (13 controls)**: Incident response and communication
6. **Recover (8 controls)**: Recovery planning and restoration

### Assessment Methodology

Based on Creed's professional assessment process:
1. Pre-interview questionnaire
2. Stakeholder interviews
3. Documentation review
4. Peer review validation
5. Comprehensive reporting


## Project Structure

```
creed-risk-assessment/
├── index.html              # Main application interface
├── script.js               # Application logic and PDF generation
├── styles.css              # Styling and responsive design
├── data/
│   ├── controls.json       # NIST CSF v2.0 control definitions
│   └── pdf-content.json    # Maturity tiers and glossary data
└── assets/
    ├── creed-logo.svg
    ├── creed-text.svg
    └── riskassessment_maturity_levels.png
```

### Data Architecture

The framework uses a modular data structure with controls and assessment content separated into JSON files for easy maintenance and updates:

**controls.json** - Contains all 106 NIST CSF v2.0 controls:
```json
{
  "govern": [
    { "id": "GV.OC-01", "requirement": "The organizational mission..." }
  ],
  "identify": [...],
  "protect": [...],
  "detect": [...],
  "respond": [...],
  "recover": [...]
}
```

**pdf-content.json** - Contains maturity framework content:
```json
{
  "tiersIntro": "Tier descriptions...",
  "tiers": [...],
  "maturityDescription": "...",
  "maturityNote": "...",
  "glossary": [...]
}
```

**Assessment Data** (localStorage and export format):
```javascript
{
  metadata: {
    website: '',
    documentation: '',
    contracts: [''],
    github: '',
    twitter: '',
    discord: '',
    telegram: ''
  },
  controls: {
    govern: { "GV.OC-01": { status: '', explanation: '' }, ... },
    identify: { "ID.AM-01": { status: '', explanation: '' }, ... },
    // ... other functions
  }
}
```



## Contributing

### Building Together: The Path Forward

Web3 security challenges are unique. Traditional frameworks don't fully account for smart contract upgradeability, DAO governance, bridge security, oracle dependencies, or the distributed nature of Web3 teams.

We're inviting the community to help evolve this framework. As you use it, you'll identify controls that matter specifically for Web3 projects. We encourage you to:

- **Propose new controls** relevant to DeFi, DAOs, and Web3 infrastructure
- **Share feedback** on controls that need Web3-specific refinement
- **Contribute improvements** to the assessment methodology
- **Submit enhancements** to maturity tier definitions

Every contribution helps raise the security maturity bar for all Web3 projects. When one project implements better key management practices or incident response procedures and shares those learnings, we all benefit.

### How to Update Controls/Standards

The modular architecture makes it easy to update controls or adapt the framework to different standards:

1. **Update Control Definitions** - Edit `data/controls.json`:
   ```bash
   # Add, modify, or remove controls
   # Structure: { "id": "XX.YY-##", "requirement": "Control description..." }
   ```

2. **Update Maturity Framework** - Edit `data/pdf-content.json`:
   ```bash
   # Modify tier definitions, glossary entries, or descriptions
   # Update maturity model descriptions and notes
   ```

3. **Test Changes**:
   ```bash
   npm run dev
   # Verify controls load correctly
   # Test PDF generation with updated content
   ```

4. **Submit Contribution**:
   ```bash
   git checkout -b feature/your-improvement
   git add data/controls.json data/pdf-content.json
   git commit -m "Update: [Brief description of changes]"
   git push origin feature/your-improvement
   # Open a Pull Request with detailed explanation
   ```

**Contribution Guidelines:**
- Maintain JSON structure integrity
- Include rationale for control additions/changes
- Reference relevant standards (NIST, ISO, SCF, etc.)
- Test thoroughly before submitting
- Document Web3-specific considerations

## License

MIT License 

---

*Developed by the Creed Collective - A grassroots collective of security professionals democratizing Web3 security.*