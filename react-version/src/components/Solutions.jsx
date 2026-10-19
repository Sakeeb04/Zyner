import React from 'react';

export default function Solutions() {
  const list = [
    {
      tag: "Core Product",
      title: "Distributed Shared File System",
      desc: "A high-performance file system that spans across all your servers. Gives you standard Linux file paths like /mnt/ai-data so existing code works without any changes.",
      bullets: [
        "Standard POSIX file system support",
        "Fast concurrent reads across all servers",
        "Zero code rewrites or proprietary SDKs"
      ]
    },
    {
      tag: "Storage Tiering",
      title: "Intelligent S3 Cloud Tiering",
      desc: "Automatically moves cold data to affordable S3 buckets while keeping active training batches ready on high-speed local storage.",
      bullets: [
        "Direct integration with existing S3 buckets",
        "Huge savings on dedicated all-flash storage hardware",
        "Background caching without interrupting running jobs"
      ]
    },
    {
      tag: "AI Acceleration",
      title: "Fast DataLoaders & Caching",
      desc: "Saturate PyTorch and TensorFlow data loaders by streaming training batches directly from high-speed memory and local flash tiers.",
      bullets: [
        "Eliminates GPU idle wait times",
        "Handles millions of small files and images smoothly",
        "Fast checkpointing and quick recovery on multi-node runs"
      ]
    },
    {
      tag: "Easy Deployment",
      title: "Cluster & Kubernetes Ready",
      desc: "Works on bare-metal servers, on-premises datacenters, or cloud environments using standard mounts or Kubernetes CSI drivers.",
      bullets: [
        "Simple 1-line installation script",
        "Works with Kubernetes, Slurm, and Docker",
        "No expensive proprietary hardware appliances needed"
      ]
    }
  ];

  return (
    <section className="section solutions-section" id="solutions">
      <div className="container">
        <div className="section-intro text-center">
          <span className="badge">Solutions</span>
          <h2>Everything you need for fast, shared data</h2>
          <p className="section-desc">
            Designed to solve the real storage headaches engineering teams face every day.
          </p>
        </div>

        <div className="solutions-grid">
          {list.map((item, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="feature-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
