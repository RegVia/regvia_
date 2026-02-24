import './Problem.css';

const problems = [
    {
        iconClass: 'problem-icon--red',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
        title: 'Compliance Tools Are Binary',
        description:
            "Existing tools only tell you pass or fail. There's no nuance, no context, and no prioritization of what actually matters to your business.",
    },
    {
        iconClass: 'problem-icon--blue',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
        title: 'No Penalty Visibility',
        description:
            "Companies have zero insight into the financial penalties they face. Without visibility, there's no way to measure or manage the true cost of non-compliance.",
    },
    {
        iconClass: 'problem-icon--green',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            </svg>
        ),
        title: 'Founder Risk Exposure',
        description:
            'Founders and executives are personally liable for compliance failures. Current tools leave leadership exposed to regulatory action and reputational damage.',
    },
];

export default function Problem() {
    return (
        <section className="problem section" id="problem">
            <div className="container">
                <div className="problem-header reveal">
                    <p className="section-label">The Problem</p>
                    <h2 className="section-title"> <span> Compliance Today Is  Broken</span></h2>
                    <p className="section-subtitle">
                        Traditional compliance tools give you a checkbox. You need a crystal ball.
                    </p>
                </div>

                <div className="problem-cards">
                    {problems.map((item, i) => (
                        <div className={`problem-card reveal reveal-delay-${i + 1}`} key={i}>
                            <div className={`problem-icon ${item.iconClass}`}>{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
