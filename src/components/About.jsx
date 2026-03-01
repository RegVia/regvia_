import './About.css';

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-header reveal">
                    <p className="section-label">About Us</p>
                    <h2 className="section-title"><span>About RegVia</span></h2>
                </div>

                <div className="about-content">
                    <div className="about-intro reveal reveal-delay-1">
                        <p>
                            RegVia is building India's first AI-powered Risk-Aware Compliance OS — a proactive intelligence layer that helps businesses monitor, manage, and mitigate regulatory risk in real time.
                        </p>
                        <p>
                            In India, compliance is largely reactive. Businesses often discover gaps only after notices, penalties, or audits. The process is fragmented, consultant-dependent, and operationally inefficient.
                        </p>
                        <p className="about-highlight">RegVia changes this.</p>
                        <p>
                            Our platform continuously tracks regulatory obligations, quantifies risk exposure, and provides actionable remediation pathways — enabling organizations to fix compliance gaps before regulators come knocking.
                        </p>
                    </div>

                    <div className="about-block reveal reveal-delay-2">
                        <h3>What We Do</h3>
                        <ul className="about-list">
                            <li>Automated regulatory tracking</li>
                            <li>AI-driven risk scoring</li>
                            <li>Real-time compliance monitoring</li>
                            <li>Gap detection & remediation guidance</li>
                            <li>Centralized compliance intelligence dashboard</li>
                        </ul>
                    </div>

                    <div className="about-block reveal reveal-delay-3">
                        <h3>How We Help</h3>
                        <p>We help founders, finance teams, and compliance officers:</p>
                        <ul className="about-list">
                            <li>Reduce financial exposure from penalties</li>
                            <li>Improve operational transparency</li>
                            <li>Make compliance measurable and trackable</li>
                            <li>Replace manual follow-ups with intelligent automation</li>
                            <li>Build audit-ready systems with confidence</li>
                        </ul>
                    </div>

                    <div className="about-block reveal reveal-delay-4">
                        <h3>Our Approach</h3>
                        <p>
                            RegVia combines artificial intelligence, regulatory mapping, and structured workflows to create a living compliance engine — not just a checklist.
                        </p>
                        <p>
                            Instead of reacting to compliance events, businesses can now anticipate, quantify, and manage risk proactively.
                        </p>
                    </div>

                    <div className="about-vision reveal reveal-delay-4">
                        <h3>Our Vision</h3>
                        <p>
                            To build the foundational compliance infrastructure layer for Indian businesses — making regulatory intelligence accessible, measurable, and proactive at scale.
                        </p>
                        <p>
                            We believe compliance should not slow businesses down. It should empower them to operate confidently, transparently, and sustainably.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
