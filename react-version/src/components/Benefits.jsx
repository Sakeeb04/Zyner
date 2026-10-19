import React from 'react';

export default function Benefits() {
  const benefits = [
    {
      title: "Speeds Closer to Local Disks",
      desc: "Your servers read shared datasets at high speeds, avoiding the lag of traditional network storage."
    },
    {
      title: "Lower Cloud Storage Costs",
      desc: "Store petabytes cheaply in standard S3 while Japolic handles local caching automatically."
    },
    {
      title: "Single Shared Directory",
      desc: "Every server sees the exact same folder structure. No manual copying or syncing required."
    },
    {
      title: "Zero Code Rewrites",
      desc: "Mount it as a standard folder. Python scripts, PyTorch, and bash commands run out of the box."
    }
  ];

  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        <div className="section-intro">
          <span className="badge">Why Choose Japolic</span>
          <h2>The speed of local disks with the scale of the cloud</h2>
          <p className="section-desc">
            Why developers discover and test Japolic first, and infrastructure leaders choose it for long-term savings.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div className="benefit-item" key={i}>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="comparison-card">
          <h3 className="comparison-heading">How Japolic Compares</h3>
          <div className="table-wrap">
            <table className="simple-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="table-brand">Japolic</th>
                  <th>Traditional Network Storage</th>
                  <th>Direct S3 Access Only</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shared Multi-Server Access</td>
                  <td className="table-brand"><strong>Yes, native mount</strong></td>
                  <td>Yes</td>
                  <td>Requires custom code</td>
                </tr>
                <tr>
                  <td>Active Read Speed</td>
                  <td className="table-brand"><strong>Closer to local disks</strong></td>
                  <td>Network bottleneck</td>
                  <td>Slow API requests</td>
                </tr>
                <tr>
                  <td>Cost for Large Datasets</td>
                  <td className="table-brand"><strong>Low (uses cheap S3)</strong></td>
                  <td>Very expensive hardware</td>
                  <td>Low (uses cheap S3)</td>
                </tr>
                <tr>
                  <td>Standard File Path (/mnt)</td>
                  <td className="table-brand"><strong>Yes, standard POSIX</strong></td>
                  <td>Yes</td>
                  <td>No (uses object keys)</td>
                </tr>
                <tr>
                  <td>Developer Setup</td>
                  <td className="table-brand"><strong>1-line command</strong></td>
                  <td>Complex network setup</td>
                  <td>Rewrite app with SDKs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
