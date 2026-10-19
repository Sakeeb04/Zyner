import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header" id="header">
        <div className="container header-container">
          <a href="#hero" className="logo">
            <span className="logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </span>
            <span className="logo-text">Japolic</span>
          </a>

          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#benefits" className="nav-link">Why Japolic</a>
            <a href="#use-cases" className="nav-link">Use Cases</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
          </nav>

          <div className="header-cta">
            <a href="#inquiry" className="btn btn-primary">Request Access</a>
            <button
              className={`mobile-toggle ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
        <a href="#about" className="mobile-link" onClick={() => setIsOpen(false)}>About</a>
        <a href="#solutions" className="mobile-link" onClick={() => setIsOpen(false)}>Solutions</a>
        <a href="#benefits" className="mobile-link" onClick={() => setIsOpen(false)}>Why Japolic</a>
        <a href="#use-cases" className="mobile-link" onClick={() => setIsOpen(false)}>Use Cases</a>
        <a href="#how-it-works" className="mobile-link" onClick={() => setIsOpen(false)}>How It Works</a>
        <a href="#inquiry" className="btn btn-primary mobile-btn" onClick={() => setIsOpen(false)}>Request Access</a>
      </div>
    </>
  );
}
