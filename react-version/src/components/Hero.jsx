import React, { useState } from 'react';

/**
 * Hero Component (Beginner Friendly)
 * Displays primary headline, description, CTAs, copyable command, and datacenter hardware visual.
 */
export default function Hero() {
  const [copied, setCopied] = useState(false);
  const commandText = "curl -fsSL https://get.japolic.io | bash && japolic mount /mnt/ai-data --tier s3://dataset-bucket";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }).catch(() => {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section className="section hero-section" id="hero" aria-labelledby="heroTitle">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Developer Infrastructure for AI
          </div>
          <h1 className="hero-headline" id="heroTitle">
            Shared storage with <span className="text-accent">local disk performance.</span> Built for AI scale.
          </h1>
          <p className="hero-description">
            Japolic connects multiple servers to shared storage at speeds closer to local disks. Seamlessly federated with Amazon S3 so engineering teams keep hot data fast while leveraging low-cost storage for massive datasets.
          </p>

          <div className="hero-cta-group">
            <a href="#inquiry" className="btn btn-primary btn-lg">
              Request Technical Access
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#how-it-works" className="btn btn-secondary btn-lg">Explore Architecture</a>
          </div>

          {/* Quickstart Terminal Command Box */}
          <div className="quickstart-box" aria-label="1-line quickstart command">
            <div className="quickstart-header">
              <span>Quickstart Mount Command</span>
              <span>POSIX / Linux</span>
            </div>
            <div className="quickstart-code-wrapper">
              <code className="quickstart-code">
                <span className="cmd-prompt">$</span> {commandText}
              </code>
              <button
                type="button"
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
                aria-label="Copy terminal mount command"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Datacenter Hardware Photographic Card */}
        <div className="hero-media-wrapper">
          <div className="hero-visual-card">
            <div className="hero-image-container">
              <img
                src="/assets/japolic_hero_servers.jpg"
                alt="High-density enterprise server racks with illuminated optical fiber cabling in a modern AI datacenter"
                className="hero-image"
                loading="eager"
                width="1280"
                height="800"
              />
            </div>
            <div className="hero-telemetry-overlay" aria-label="System Specifications Summary">
              <div className="telemetry-item">
                <span className="telemetry-label">Architecture</span>
                <span className="telemetry-val">Distributed POSIX</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-label">Read Latency</span>
                <span className="telemetry-val accent">Local Disk Speed</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-label">Object Tier</span>
                <span className="telemetry-val">Native S3 Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
