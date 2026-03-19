import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About Us', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">

        <a className="navbar__logo" href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home'); }}>
          <div className="navbar__logo-img-wrap">
            <img src={logo} alt="U-Turn Logo" className="navbar__logo-img" />
          </div>
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="navbar__cta"
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
        >
          Get Counselling
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a
                className={activeSection === link.id ? 'active' : ''}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="mobile-cta"
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            >
              Get Free Counselling
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
