import React from 'react';

/**
 * Benefits Component (Beginner Friendly)
 * 4 key benefit cards and the objective architectural comparison table.
 */
export default function Benefits() {
  const benefitsList = [
    {
      title: "Local Disk Speeds",
      desc: "Servers access active files at speeds closer to local drives, preventing compute starvation during intensive read operations.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: "Substantial S3 Savings",
      desc: "Store petabytes in low-cost S3 while Japolic handles local caching, avoiding over-provisioned local hardware costs.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      title: "Unified Shared Namespace",
      desc: "Every server sees the same directory tree. Eliminate tedious dataset synchronization scripts and duplicate files across nodes.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      title: "Zero Pipeline Rewrites",
      desc: "Standard POSIX filesystem semantics allow existing training scripts, code, and containerized tools to work out of the box.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="section section-divider" id="benefits" aria-labelledby="benefitsTitle">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Technical Advantage
          </div>
          <h2 className="section-title" id="benefitsTitle">Why Engineering Teams Choose Japolic</h2>
          <p className="section-subtitle">
            Combining the simplicity of a standard local disk with the scalability and economics of cloud object storage.
          </p>
        </div>

        <div className="benefits-grid">
          {benefitsList.map((item, idx) => (
            <article className="benefit-card" key={idx}>
              <div className="benefit-icon-box">{item.icon}</div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-desc">{item.desc}</p>
            </article>
          ))}
        </div>

        {/* Architectural Comparison Matrix */}
        <div className="comparison-wrapper">
          <div className="table-header-block">
            <h3 className="table-title">Architectural Approach Comparison</h3>
            <span className="status-pill">Evaluated for Data-Intensive Workloads</span>
          </div>
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Capability / Architecture</th>
                  <th scope="col" className="col-japolic">Japolic File System</th>
                  <th scope="col">Traditional Network Storage</th>
                  <th scope="col">Direct S3 Access Only</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-feature">Shared Multi-Server Access</td>
                  <td className="col-japolic"><span className="badge-pos">Native Shared Mount</span></td>
                  <td><span className="badge-pos">Supported</span></td>
                  <td><span className="badge-neutral">Requires Custom Code</span></td>
                </tr>
                <tr>
                  <td className="col-feature">Read Performance for Active Data</td>
                  <td className="col-japolic"><span className="badge-pos">Speeds closer to local disks</span></td>
                  <td><span className="badge-neg">Network &amp; Controller Bottleneck</span></td>
                  <td><span className="badge-neg">High API Latency</span></td>
                </tr>
                <tr>
                  <td className="col-feature">Cost for Large Data Retention</td>
                  <td className="col-japolic"><span className="badge-pos">Low S3 Object Storage Cost</span></td>
                  <td><span className="badge-neg">Expensive Dedicated Hardware</span></td>
                  <td><span className="badge-pos">Low S3 Cost</span></td>
                </tr>
                <tr>
                  <td className="col-feature">POSIX File System Compatibility</td>
                  <td className="col-japolic"><span className="badge-pos">Full POSIX Directory Path</span></td>
                  <td><span className="badge-pos">Full POSIX</span></td>
                  <td><span className="badge-neg">Non-POSIX Object Keys</span></td>
                </tr>
                <tr>
                  <td className="col-feature">Developer Setup Friction</td>
                  <td className="col-japolic"><span className="badge-pos">Single Mount Command</span></td>
                  <td><span className="badge-neutral">Complex Export Setup</span></td>
                  <td><span className="badge-neg">Application Code Rewrites</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
