import React, { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const cmd = "curl -fsSL https://get.japolic.io | bash && japolic mount /mnt/ai-data --tier s3://my-dataset";

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <span className="badge">Developer Infrastructure</span>
          <h1 className="hero-title">
            Shared storage as fast as <span className="highlight">local disks.</span>
          </h1>
          <p className="hero-subtitle">
            Japolic connects multiple servers to shared storage at local disk speeds. Works seamlessly with S3, so your team can use lower-cost storage for large amounts of data while keeping active files fast and accessible.
          </p>

          <div className="hero-actions">
            <a href="#inquiry" className="btn btn-primary btn-large">Get Started</a>
            <a href="#how-it-works" className="btn btn-secondary btn-large">See How It Works</a>
          </div>

          <div className="terminal-card">
            <div className="terminal-bar">
              <span className="terminal-label">Quick Mount Command</span>
              <button type="button" className="copy-btn" onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <code className="terminal-code">{cmd}</code>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-frame">
            <img
              src="/assets/japolic_hero_servers.jpg"
              alt="Enterprise server racks in a modern AI datacenter"
              className="hero-img"
            />
            <div className="image-caption">
              <div>
                <strong>Shared Storage Cluster</strong>
                <span>Near-local disk latency for multi-node training</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
