import React from 'react';
import logo from '../assets/logo.jpeg';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
];

const PROGRAMS = [
  'Nursing Programs',
  'Pharmacy Programs',
  'Allied Health Sciences',
  'Engineering Programs',
  'Management / MBA',
  'Law Programs',
];

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__inner">

          {/* Brand col with real logo */}
          <div className="footer__brand">
            <a
              className="footer__logo"
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            >
              <div className="footer__logo-img-wrap">
                <img src={logo} alt="U-Turn Educational Consultancy" className="footer__logo-img" />
              </div>
            </a>
            <p className="footer__brand-desc">
              U-Turn Educational Consultancy — empowering students across South India to
              discover the right courses, colleges, and career paths with trusted, transparent guidance.
            </p>
            <div className="footer__contact-quick">
              <a href="tel:+916238323123" className="footer__contact-quick-item">
                <span>📞</span> +91 6238 323 123
              </a>
              <a href="tel:+919946354076" className="footer__contact-quick-item">
                <span>📞</span> +91 9946 354 076
              </a>
              <a href="mailto:uturneducationalconsultancy@gmail.com" className="footer__contact-quick-item">
                <span>✉️</span> uturneducationalconsultancy@gmail.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {QUICK_LINKS.map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>
                    <span className="footer__link-arrow">→</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Programs</h4>
            <ul className="footer__links">
              {PROGRAMS.map(p => (
                <li key={p}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); handleNav('#services'); }}>
                    <span className="footer__link-arrow">→</span> {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Offices</h4>
            <ul className="footer__offices">
              {['Bangalore', 'Kochi', 'Trivandrum', 'Kollam', 'Coimbatore'].map(city => (
                <li key={city}>
                  <span className="footer__office-dot">◆</span> {city}
                </li>
              ))}
            </ul>
            <div className="footer__stats">
              <div className="footer__stat">
                <span className="footer__stat-num">150K+</span>
                <span>Students Guided</span>
              </div>
              <div className="footer__stat">
                <span className="footer__stat-num">5+</span>
                <span>Offices</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>© {new Date().getFullYear()} U-Turn Educational Consultancy. All rights reserved.</p>
          <p className="footer__bottom-tagline">
            🎓 Your Turn to Excellence — South India's Trusted Education Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
