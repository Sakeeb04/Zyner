import React from 'react';

/**
 * About Component (Beginner Friendly)
 * Japolic purpose, problem statement, and 3 architectural pillars.
 */
export default function About() {
  return (
    <section className="section section-divider" id="about" aria-labelledby="aboutTitle">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            The Client Purpose
          </div>
          <h2 className="section-title" id="aboutTitle">Rethinking Shared Storage for Modern AI Workloads</h2>
          <p className="section-subtitle">
            Traditional network storage creates costly I/O bottlenecks when scaling compute nodes. Japolic bridges the gap between local disk velocity and cloud object durability.
          </p>
        </div>

        <div className="intro-grid">
          <div className="intro-left">
            <p className="intro-lead">
              Japolic is a developer infrastructure company building a new type of high-performance file system designed from the ground up for AI applications and data-intensive computing.
            </p>
            <div className="intro-body-text">
              <p>
                In high-density training clusters and distributed pipelines, GPU compute nodes spend significant time idle waiting for data loaders to read batches from conventional network filesystems. Moving large datasets locally is slow and consumes costly local disk space.
              </p>
              <p>
                Japolic resolves this trade-off by allowing developers to connect multiple servers directly to a unified shared storage namespace. Frequently accessed data delivers throughput closer to local NVMe disks, while cold datasets remain securely and cost-effectively stored in Amazon S3.
              </p>
            </div>
            <div className="status-pill">
              <span className="status-dot" aria-hidden="true"></span>
              Built specifically for Developers, AI Teams, and Infrastructure Leaders
            </div>
          </div>

          <div className="intro-card-stack">
            <article className="pillar-card">
              <span className="pillar-num">01 / SHARED INFRASTRUCTURE</span>
              <h3 className="pillar-title">Multi-Server Shared Storage</h3>
              <p className="pillar-desc">
                Connect dozens of training nodes or worker servers to a shared file system without complex volume management or manual synchronization scripts.
              </p>
            </article>

            <article className="pillar-card">
              <span className="pillar-num">02 / LOCAL READ LATENCY</span>
              <h3 className="pillar-title">Near-Local Disk Speeds</h3>
              <p className="pillar-desc">
                Intelligent caching and parallel data streaming ensure read access speeds that prevent GPU starvation during demanding training epochs.
              </p>
            </article>

            <article className="pillar-card">
              <span className="pillar-num">03 / COST EFFICIENCY</span>
              <h3 className="pillar-title">Seamless S3 Federation</h3>
              <p className="pillar-desc">
                Retain petabytes of data in low-cost S3 object storage without sacrificing the accessibility required by active production workloads.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
