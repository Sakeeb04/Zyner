import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('japolic-theme');
    const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const initial = saved || (systemPrefersLight ? 'light' : 'dark');
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('japolic-theme', nextTheme);
  };

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
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark and light theme"
              title="Toggle theme"
            >
              <svg className="sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg className="moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
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
        <div className="mobile-drawer-bottom">
          <button
            type="button"
            className="btn btn-secondary mobile-theme-btn"
            onClick={toggleTheme}
          >
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </button>
          <a href="#inquiry" className="btn btn-primary mobile-btn" onClick={() => setIsOpen(false)}>Request Access</a>
        </div>
      </div>
    </>
  );
}
