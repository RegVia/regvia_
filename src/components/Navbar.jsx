import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setMenuOpen(false);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
            <div className="container">
                <a href="#hero" className="navbar-logo" aria-label="RegVia - Go to homepage">
                    <img src="/logo.png" alt="RegVia - Risk-Aware Compliance OS" width="180" height="72" />
                </a>

                <button
                    className="navbar-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span /><span /><span />
                </button>

                <ul className={`navbar-links${menuOpen ? ' open' : ''}`} role="navigation">
                    <li><a href="#problem" onClick={close}>Problem</a></li>
                    <li><a href="#solution" onClick={close}>Solution</a></li>
                    <li><a href="#about" onClick={close}>About</a></li>
                    <li><a href="#contact" onClick={close}>Contact</a></li>
                    <li>
                        <a href="mailto:info@regvia.in" onClick={close}>
                            <button className="navbar-cta" aria-label="Contact RegVia">Get in Touch</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
