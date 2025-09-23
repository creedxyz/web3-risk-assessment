# Creed Risk Assessment Framework

An interactive web application for conducting cybersecurity risk assessments using Creed's standardized methodology based on NIST Capability Maturity Model (CMM), Cybersecurity Framework v2.0 (CSF), and Secure Controls Framework (SCF).

## Features

- **Interactive Assessment**: Complete risk assessments across 6 critical functions (Govern, Identify, Protect, Detect, Respond, Recover)
- **106 Security Controls**: Comprehensive coverage of all NIST CSF controls
- **Auto-calculation**: Real-time summary statistics and progress tracking
- **Data Persistence**: Local storage for draft assessments
- **Import/Export**: JSON format for data portability
- **PDF Reports**: Professional assessment reports
- **Professional CTA**: Link to book professional assessment services

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

**[Book Professional Assessment →](https://example.typeform.com/to/assessment)**

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


### Data Structure
```javascript
{
  metadata: {
    website: '',
    documentation: '',
    contracts: '',
    github: '',
    twitter: '',
    discord: '',
    telegram: ''
  },
  controls: {
    govern: { "GV.OC-01": { status: '', explanation: '' }, ... },
    identify: { "ID.AM-01": { status: '', explanation: '' }, ... },
    protect: { "PR.AA-01": { status: '', explanation: '' }, ... },
    detect: { "DE.CM-01": { status: '', explanation: '' }, ... },
    respond: { "RS.MA-01": { status: '', explanation: '' }, ... },
    recover: { "RC.RP-01": { status: '', explanation: '' }, ... }
  }
}
```



## Contributing

This is an open-source framework designed to standardize web3 cybersecurity risk assessment.


## License

MIT License - See LICENSE file for details

---

*Developed by the Creed Collective - A grassroots collective of security professionals democratizing Web3 security.*