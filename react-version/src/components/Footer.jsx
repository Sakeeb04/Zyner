import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <a href="#hero" className="logo">
            <span className="logo-text">Japolic</span>
          </a>
          <p className="footer-tagline">
            High-performance distributed file system for AI and data-intensive workloads. Connecting servers to shared storage at local disk speeds.
          </p>
          <span className="footer-status">&#9679; All Systems Operational</span>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#benefits">Why Japolic</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Target Audience</h4>
          <ul>
            <li><a href="#about">Developers</a></li>
            <li><a href="#about">Engineering Teams</a></li>
            <li><a href="#use-cases">AI &amp; ML Teams</a></li>
            <li><a href="#benefits">Infrastructure Leaders</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="#inquiry">Request Technical Access</a></li>
            <li><a href="mailto:engineering@japolic.io">engineering@japolic.io</a></li>
            <li><a href="https://github.com/Sakeeb04/Zyner" target="_blank" rel="noopener noreferrer">GitHub Project</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2026 Japolic. Created by <span className="footer-author">Sakeeb</span> for <span className="footer-client">Zyner</span></p>
          <p>Built with clean HTML5, CSS3, JavaScript, and React.</p>
        </div>
      </div>
    </footer>
  );
}
