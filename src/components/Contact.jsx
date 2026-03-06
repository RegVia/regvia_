import './Contact.css';

export default function Contact() {
    return (
        <>
            <section className="contact section" id="contact">
                <div className="container">
                    <div className="contact-inner reveal">
                        <p className="section-label">Get in Touch</p>
                        <h2 className="section-title"><span>Ready to De-Risk Your Compliance?</span></h2>
                        <p className="section-subtitle">
                            Let us help you quantify risk, reduce exposure, and stay audit-ready.
                        </p>

                        <div className="contact-links">
                            <a href="mailto:info@regvia.in" className="contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                info@regvia.in
                            </a>
                            <a
                                href="https://www.linkedin.com/company/regvia/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link contact-link--linkedin"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} <strong>RegVia</strong>. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
