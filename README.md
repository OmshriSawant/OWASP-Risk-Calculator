# OWASP Risk Rating Calculator

## Overview
As part of my research into Governance, Risk, and Compliance (GRC) within organizational structures, I explored the **Open Worldwide Application Security Project (OWASP)**—a non-profit foundation dedicated to improving software security.

The **OWASP Risk Rating Methodology** emphasizes the importance of estimating risks to organizations, highlighting the need for adherence to regulations and proactive infrastructure management to ensure business continuity.

## About the OWASP Risk Rating Calculator
The **OWASP Risk Rating Calculator** helps estimate the severity of various risks that could impact an organization's reputation and structure. It does this by assessing two key components:

### 1. Likelihood Assessment
This estimates the probability of a potential risk affecting an organization. Likelihood is determined by:
- **Threat Agent Factors**:
  - **Skill Level**: The expertise required to exploit the vulnerability.
  - **Motive**: The attacker's motivation to exploit the vulnerability.
  - **Opportunity**: The ease of access to the system.
  - **Size of Threat Group**: The number of attackers capable of exploiting the vulnerability.
- **Vulnerability Factors**:
  - **Ease of Discovery**: How easily an attacker can identify the vulnerability.
  - **Ease of Exploit**: How simple it is to execute an attack.
  - **Awareness**: Whether security teams or the public are aware of the vulnerability.
  - **Intrusion Detection**: The likelihood of detecting an attack.

### 2. Impact Assessment
Evaluates the consequences of a successful exploitation by measuring:
- **Technical Impact**:
  - **Loss of Confidentiality**: Exposure of sensitive data.
  - **Loss of Integrity**: Unauthorized modifications to data or systems.
  - **Loss of Availability**: System downtime or denial of service.
  - **Loss of Accountability**: Difficulty in tracking attacks due to lack of logs or audit trails.
- **Business Impact**:
  - **Financial Damage**: Losses due to fraud, theft, or downtime.
  - **Reputation Damage**: Loss of customer trust due to breaches or failures.
  - **Regulatory Non-Compliance**: Violations of industry standards or laws.
  - **Privacy Violation**: Exposure of personal or sensitive user data.

The **Overall Risk Severity** is determined by combining the severity levels of **Likelihood and Impact**, categorizing risks as **Low, Medium, High, or Critical**.

## Advanced Version Enhancements
I've developed an **advanced version** of the OWASP Risk Rating Calculator with several key improvements:

### 🔹 **Enhanced UI/UX**
- Modernized interface for better usability
- Intuitive input forms for easier risk evaluation

### 🔹 **Expanded Risk Assessment**
- **New Input Sections:**
  - Risk Context (Category and Threat Type)
  - Confidence Level selection
- **More sophisticated calculations:**
  - Weighted average risk assessment
  - Confidence level adjustments for more precise analysis

### 🔹 **Detailed Recommendations**
- Tailored suggestions based on risk severity
- Context-aware recommendations for different risk categories
- Granular severity determination for better decision-making

## Key Features
✅ **Weighted calculations** for more accurate risk scoring  
✅ **Context-aware recommendations** for proactive risk mitigation  
✅ **Confidence level input** to refine risk severity estimates  
✅ **Improved visual design** for better user experience  
✅ **Comprehensive risk analysis** for better risk management strategies  

## Why It Matters
Having a structured risk evaluation framework is essential for organizations to:
- Identify and mitigate potential security threats
- Improve compliance with industry regulations
- Safeguard business continuity by proactively addressing risks

## Get Started
To explore the enhanced **OWASP Risk Rating Calculator**, follow these steps:
1. Clone this repository:  
   ```sh
   git clone https://github.com/OmshriSawant/owasp_risk_rating_calculator.git
   ```
2. Navigate to the project directory:  
   ```sh
   cd owasp_risk_rating_calculator
   ```
3. Run the application and start assessing risks!

---
🔹 **Contributions & Feedback**: Contributions are welcome! Feel free to open issues or submit pull requests to enhance this project further. 

🔹 **License**: This project follows the OWASP open-source licensing guidelines.


