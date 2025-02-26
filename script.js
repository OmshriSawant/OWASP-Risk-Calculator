// script.js
function calculateRisk() {
    // Collect all input values
    const inputs = {
        // Threat Agent Factors
        skillLevel: parseInt(document.getElementById("skillLevel").value),
        motive: parseInt(document.getElementById("motive").value),
        opportunity: parseInt(document.getElementById("opportunity").value),
        size: parseInt(document.getElementById("size").value),

        // Vulnerability Factors
        easeOfDiscovery: parseInt(document.getElementById("easeOfDiscovery").value),
        easeOfExploit: parseInt(document.getElementById("easeOfExploit").value),
        awareness: parseInt(document.getElementById("awareness").value),
        intrusionDetection: parseInt(document.getElementById("intrusionDetection").value),

        // Technical Impact Factors
        lossConfidentiality: parseInt(document.getElementById("lossConfidentiality").value),
        lossIntegrity: parseInt(document.getElementById("lossIntegrity").value),
        lossAvailability: parseInt(document.getElementById("lossAvailability").value),
        lossAccountability: parseInt(document.getElementById("lossAccountability").value),

        // Business Impact Factors
        financialDamage: parseInt(document.getElementById("financialDamage").value),
        reputationDamage: parseInt(document.getElementById("reputationDamage").value),
        nonCompliance: parseInt(document.getElementById("nonCompliance").value),
        privacyViolation: parseInt(document.getElementById("privacyViolation").value),

        // New Advanced Inputs
        riskCategory: document.getElementById("riskCategory").value,
        threatType: document.getElementById("threatType").value,
        confidenceLevel: parseFloat(document.getElementById("confidenceLevel").value)
    };

    // Calculate section severities with weighted calculations
    const calculations = {
        threatAgentSeverity: calculateWeightedAverage([
            { value: inputs.skillLevel, weight: 0.3 },
            { value: inputs.motive, weight: 0.25 },
            { value: inputs.opportunity, weight: 0.25 },
            { value: inputs.size, weight: 0.2 }
        ]),
        vulnerabilitySeverity: calculateWeightedAverage([
            { value: inputs.easeOfDiscovery, weight: 0.3 },
            { value: inputs.easeOfExploit, weight: 0.3 },
            { value: inputs.awareness, weight: 0.2 },
            { value: inputs.intrusionDetection, weight: 0.2 }
        ]),
        technicalImpactSeverity: calculateWeightedAverage([
            { value: inputs.lossConfidentiality, weight: 0.3 },
            { value: inputs.lossIntegrity, weight: 0.25 },
            { value: inputs.lossAvailability, weight: 0.25 },
            { value: inputs.lossAccountability, weight: 0.2 }
        ]),
        businessImpactSeverity: calculateWeightedAverage([
            { value: inputs.financialDamage, weight: 0.3 },
            { value: inputs.reputationDamage, weight: 0.25 },
            { value: inputs.nonCompliance, weight: 0.25 },
            { value: inputs.privacyViolation, weight: 0.2 }
        ])
    };

    // Calculate Overall Likelihoods and Impacts
    const likelihoodSeverity = (calculations.threatAgentSeverity + calculations.vulnerabilitySeverity) / 2;
    const impactSeverity = (calculations.technicalImpactSeverity + calculations.businessImpactSeverity) / 2;

    // Adjust severity based on confidence level
    const adjustedLikelihood = likelihoodSeverity * inputs.confidenceLevel;
    const adjustedImpact = impactSeverity * inputs.confidenceLevel;

    // Determine Severity Levels
    const severityLevels = {
        likelihood: getSeverityLevel(adjustedLikelihood),
        impact: getSeverityLevel(adjustedImpact),
        overall: getOverallSeverity(adjustedLikelihood, adjustedImpact)
    };

    // Generate Recommendations
    const recommendations = generateRecommendations(
        severityLevels.overall, 
        inputs.riskCategory, 
        inputs.threatType
    );

    // Display Results
    displayResults(calculations, severityLevels, recommendations);
}

function calculateWeightedAverage(items) {
    return items.reduce((sum, item) => sum + (item.value * item.weight), 0);
}

function getSeverityLevel(severity) {
    if (severity < 3) return 'low';
    if (severity < 6) return 'medium';
    if (severity < 8) return 'high';
    return 'critical';
}

function getOverallSeverity(likelihood, impact) {
    const likelihoodLevel = getSeverityLevel(likelihood);
    const impactLevel = getSeverityLevel(impact);

    const severityMatrix = {
        'low': { 'low': 'low', 'medium': 'low', 'high': 'medium', 'critical': 'high' },
        'medium': { 'low': 'low', 'medium': 'medium', 'high': 'high', 'critical': 'critical' },
        'high': { 'low': 'medium', 'medium': 'high', 'high': 'critical', 'critical': 'critical' },
        'critical': { 'low': 'high', 'medium': 'critical', 'high': 'critical', 'critical': 'critical' }
    };

    return severityMatrix[likelihoodLevel][impactLevel];
}

function generateRecommendations(overallSeverity, riskCategory, threatType) {
    const recommendationMap = {
        'low': "Implement standard security practices. Monitor and review periodically.",
        'medium': "Develop a remediation plan. Prioritize and address vulnerabilities.",
        'high': "Immediate action required. Develop comprehensive mitigation strategy.",
        'critical': "Urgent intervention needed. Suspend operations if necessary."
    };

    const specificRecommendations = {
        'application': {
            'injection': "Implement input validation, use parameterized queries.",
            'authentication': "Enforce strong authentication, multi-factor auth."
        },
        'network': {
            'injection': "Configure network firewalls, implement IDS/IPS.",
            'authentication': "Implement network segmentation, zero-trust model."
        }
        // Add more specific recommendations
    };

    let recommendation = recommendationMap[overallSeverity];
    
    // Add specific recommendation if available
    if (specificRecommendations[riskCategory] && 
        specificRecommendations[riskCategory][threatType]) {
        recommendation += " " + specificRecommendations[riskCategory][threatType];
    }

    return recommendation;
}

function displayResults(calculations, severityLevels, recommendations) {
    const detailedResults = document.getElementById('detailedResults');
    const severityBreakdown = document.getElementById('severityBreakdown');
    const recommendationsBox = document.getElementById('recommendationsBox');

    severityBreakdown.innerHTML = `
        <div class="result-box ${severityLevels.likelihood}">
            Likelihood Severity: ${severityLevels.likelihood.toUpperCase()}
        </div>
        <div class="result-box ${severityLevels.impact}">
            Impact Severity: ${severityLevels.impact.toUpperCase()}
        </div>
        <div class="result-box ${severityLevels.overall}">
            Overall Risk Severity: ${severityLevels.overall.toUpperCase()}
        </div>
    `;

    recommendationsBox.innerText = recommendations;
    recommendationsBox.classList.remove('hidden');
    recommendationsBox.classList.add(severityLevels.overall);

    detailedResults.classList.remove('hidden');
}