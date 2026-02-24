import './Solution.css';

const solutions = [
    {
        iconClass: 'solution-icon--blue',
        statClass: 'solution-stat--blue',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8.11 2.79" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
        ),
        title: 'Penalty Probability %',
        description:
            'Know the exact likelihood of a regulatory penalty for each compliance gap. Data-driven risk scoring replaces guesswork.',
        stat: 'Risk quantified to \u00b12% accuracy',
    },
    {
        iconClass: 'solution-icon--green',
        statClass: 'solution-stat--green',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: 'Expected Financial Exposure',
        description:
            'See the dollar-amount exposure for every non-compliant area. Prioritize remediation by financial impact, not arbitrary checklists.',
        stat: 'Real-time exposure tracking',
    },
    {
        iconClass: 'solution-icon--green',
        statClass: 'solution-stat--green',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.26-2.24 4.47A8.5 8.5 0 0 0 12 16" />
                <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.26 2.24 4.47A8.5 8.5 0 0 1 12 16" />
                <path d="M9 18h6" /><path d="M10 22h4" />
            </svg>
        ),
        title: 'AI-Guided Remediation',
        description:
            'Get step-by-step fix recommendations powered by AI. Reduce time-to-compliance from months to days with intelligent guidance.',
        stat: 'Avg. 73% faster resolution',
    },
    {
        iconClass: 'solution-icon--blue',
        statClass: 'solution-stat--blue',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
        title: 'Audit-Ready Proof',
        description:
            'Automatically generate evidence packages and compliance documentation that satisfies auditors and regulators on first review.',
        stat: 'One-click audit packages',
    },
];

export default function Solution() {
    return (
        <section className="solution section" id="solution">
            <div className="container">
                <div className="solution-header reveal">
                    <p className="section-label">The Solution</p>
                    <h2 className="section-title"> <span> Compliance, Reimagined</span></h2>
                    <p className="section-subtitle">
                        RegVia turns compliance from a cost center into a strategic advantage with
                        risk-aware intelligence.
                    </p>
                </div>

                <div className="solution-cards">
                    {solutions.map((item, i) => (
                        <div className={`solution-card reveal reveal-delay-${i + 1}`} key={i}>
                            <div className={`solution-icon ${item.iconClass}`}>{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className={`solution-stat ${item.statClass}`}>{item.stat}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
