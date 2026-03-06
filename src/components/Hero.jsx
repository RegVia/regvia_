import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Decorative background elements */}
            <div className="hero-bg-grid" />
            <div className="hero-bg-gradient" />

            <div className="hero-inner container">
                {/* Left: Content */}
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot" />
                        AI-Powered Compliance Intelligence
                    </div>
                    <h1 className="hero-title">
                        <span className="hero-title-line">The Future of</span>
                        <span className="hero-title-line hero-title-highlight">
                            <span className="hero-title-reg">Reg</span><span className="hero-title-via">Via</span>
                        </span>
                        <span className="hero-title-line hero-title-sub">Risk-Aware Compliance OS</span>
                    </h1>
                    <p className="hero-description">
                        We&rsquo;re building an AI system that quantifies regulatory penalty risk,
                        maps financial exposure, and guides remediation&mdash;so companies fix
                        compliance gaps <strong>before</strong> regulators come knocking.
                    </p>
                    <div className="hero-actions">
                        <a href="mailto:info@regvia.in" className="hero-cta hero-cta--primary">
                            Request a Demo
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#solution" className="hero-cta hero-cta--secondary">
                            Explore Our Research
                        </a>
                    </div>
                    <div className="hero-trust">
                        <div className="hero-trust-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            AI-Driven Risk Scoring
                        </div>
                        <div className="hero-trust-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>
                            Real-Time Monitoring
                        </div>
                        <div className="hero-trust-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                            Proactive Compliance
                        </div>
                    </div>
                </div>

                {/* Right: Decorative AI Visualization */}
                <div className="hero-visual">
                    {/* Central orb */}
                    <div className="hero-orb">
                        <div className="hero-orb-ring hero-orb-ring--1" />
                        <div className="hero-orb-ring hero-orb-ring--2" />
                        <div className="hero-orb-ring hero-orb-ring--3" />
                        <div className="hero-orb-core" />
                    </div>

                    {/* Floating metric cards */}
                    <div className="hero-float-card hero-float-card--1">
                        <div className="hero-float-card-icon hero-float-card-icon--blue">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8.11 2.79" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                        </div>
                        <div>
                            <span className="hero-float-card-label">Risk Score</span>
                            <span className="hero-float-card-value">94.2%</span>
                        </div>
                    </div>

                    <div className="hero-float-card hero-float-card--2">
                        <div className="hero-float-card-icon hero-float-card-icon--green">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <div>
                            <span className="hero-float-card-label">Penalties Avoided</span>
                            <span className="hero-float-card-value">$2.4M</span>
                        </div>
                    </div>

                    <div className="hero-float-card hero-float-card--3">
                        <div className="hero-float-card-icon hero-float-card-icon--purple">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.26-2.24 4.47A8.5 8.5 0 0 0 12 16" /><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.26 2.24 4.47A8.5 8.5 0 0 1 12 16" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                        </div>
                        <div>
                            <span className="hero-float-card-label">AI Insights</span>
                            <span className="hero-float-card-value">Live</span>
                        </div>
                    </div>

                    {/* Orbiting dots */}
                    <div className="hero-dot hero-dot--1" />
                    <div className="hero-dot hero-dot--2" />
                    <div className="hero-dot hero-dot--3" />
                    <div className="hero-dot hero-dot--4" />
                    <div className="hero-dot hero-dot--5" />
                    <div className="hero-dot hero-dot--6" />
                </div>
            </div>

            {/* Bottom decorative line */}
            <div className="hero-bottom-line" />
        </section>
    );
}
