import React, { useState } from 'react';

/**
 * Navbar Component (Beginner Friendly)
 * Handles desktop navigation, mobile drawer toggle, and assessment modal open.
 */
export default function Navbar({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="site-header" id="siteHeader">
        <div className="container header-inner">
          <a href="#hero" className="brand-logo" aria-label="Japolic Home">
            <span className="logo-symbol">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </span>
            <span>JAPOLIC</span>
            <span className="brand-badge">React</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <a href="#about" className="nav-link">About</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#benefits" className="nav-link">Benefits</a>
            <a href="#use-cases" className="nav-link">Use Cases</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={onOpenModal}
              aria-label="Open assessment specification modal"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Assessment Brief
            </button>
            <a href="#inquiry" className="btn btn-primary btn-sm">Request Access</a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-nav-list">
          <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About</a>
          <a href="#solutions" className="mobile-nav-link" onClick={closeMobileMenu}>Solutions</a>
          <a href="#benefits" className="mobile-nav-link" onClick={closeMobileMenu}>Benefits</a>
          <a href="#use-cases" className="mobile-nav-link" onClick={closeMobileMenu}>Use Cases</a>
          <a href="#how-it-works" className="mobile-nav-link" onClick={closeMobileMenu}>How It Works</a>
          <a href="#inquiry" className="mobile-nav-link" onClick={closeMobileMenu}>Contact Engineering</a>
        </div>
        <div className="mobile-nav-actions">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              closeMobileMenu();
              onOpenModal();
            }}
          >
            View Assessment Brief
          </button>
          <a href="#inquiry" className="btn btn-primary" onClick={closeMobileMenu}>Request Access</a>
        </div>
      </div>
    </>
  );
}
