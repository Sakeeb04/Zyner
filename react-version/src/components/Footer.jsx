import React from 'react';

/**
 * Footer Component (Beginner Friendly)
 * Brand overview, links, and modal trigger.
 */
export default function Footer({ onOpenModal }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="brand-logo">
              <span className="logo-symbol">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </span>
              <span>JAPOLIC</span>
            </div>
            <p className="footer-desc">
              Developer infrastructure company building a new type of high-performance distributed file system for AI applications and data-intensive workloads.
            </p>
            <div className="status-pill" style={{ width: 'fit-content' }}>
              <span className="status-dot" aria-hidden="true"></span>
              All Infrastructure Systems Normal
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Architecture</h4>
            <ul className="footer-nav-list">
              <li><a href="#about" className="footer-link">File System Design</a></li>
              <li><a href="#solutions" className="footer-link">Distributed Mounts</a></li>
              <li><a href="#solutions" className="footer-link">S3 Object Tiering</a></li>
              <li><a href="#how-it-works" className="footer-link">POSIX Interface</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Target Audience</h4>
            <ul className="footer-nav-list">
              <li><a href="#about" className="footer-link">Developers</a></li>
              <li><a href="#about" className="footer-link">Engineering Teams</a></li>
              <li><a href="#use-cases" className="footer-link">AI &amp; ML Teams</a></li>
              <li><a href="#benefits" className="footer-link">Infrastructure Leaders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Assessment &amp; Contact</h4>
            <ul className="footer-nav-list">
              <li>
                <button
                  type="button"
                  className="footer-link"
                  onClick={onOpenModal}
                  style={{ padding: 0, textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Internship Assessment Brief
                </button>
              </li>
              <li><a href="#inquiry" className="footer-link">Request Access</a></li>
              <li><a href="mailto:engineering@japolic.io" className="footer-link">engineering@japolic.io</a></li>
              <li><a href="#hero" className="footer-link">Back to Top &uarr;</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            &copy; 2026 Japolic Technologies Inc. Built for Zyner Web Design Internship Assessment.
          </div>
          <div className="footer-bottom-links">
            <span>React + Vite</span>
            <span>Clean Vanilla CSS</span>
            <span>Zero Python</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
