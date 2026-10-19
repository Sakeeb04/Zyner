import React from 'react';

/**
 * Solutions Component (Beginner Friendly)
 * 4 core solution cards with feature lists.
 */
export default function Solutions() {
  const solutionsData = [
    {
      badge: "Core Engine",
      title: "Distributed High-Speed File System",
      desc: "A purpose-built distributed storage architecture connecting multiple servers to a shared file hierarchy. Provides direct POSIX access with zero proprietary SDK lock-in.",
      features: [
        "POSIX file path compatibility (/mnt/shared-storage)",
        "Concurrent read throughput across all connected servers",
        "Transparent distributed metadata synchronization"
      ]
    },
    {
      badge: "Cloud Integration",
      title: "Automated S3 Object Tiering",
      desc: "Transparently bridges high-speed server cache with standard Amazon S3 buckets. Teams store massive datasets in affordable object storage while Japolic orchestrates fast access.",
      features: [
        "Direct bucket binding without manual data copy scripts",
        "Automated background tiering for cold & historical data",
        "Significant reduction in dedicated all-flash SAN hardware costs"
      ]
    },
    {
      badge: "Workload Acceleration",
      title: "AI & Data-Intensive Pipeline Caching",
      desc: "Designed to saturate PyTorch and TensorFlow data loaders by serving frequently accessed training batches directly from high-speed distributed memory and local flash tiers.",
      features: [
        "Drastic reduction in GPU idle time during data loading",
        "Fast checkpointing to shared storage across multi-node runs",
        "Optimized for millions of small files, shards, and vector embeddings"
      ]
    },
    {
      badge: "Orchestration",
      title: "Cluster & Kubernetes Integration",
      desc: "Deployable across bare-metal server clusters, on-premises datacenters, or cloud environments using standard Linux kernel mounts or Kubernetes CSI drivers.",
      features: [
        "ReadWriteMany persistent volumes across multi-GPU pods",
        "Compatible with Slurm, Kubernetes, and Ray cluster frameworks",
        "Zero infrastructure redesign required to get started"
      ]
    }
  ];

  return (
    <section className="section section-divider" id="solutions" aria-labelledby="solutionsTitle">
      <div className="container">
        <div className="section-header text-center">
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Product Architecture
          </div>
          <h2 className="section-title" id="solutionsTitle">High-Performance File System Solutions</h2>
          <p className="section-subtitle">
            Engineered to remove storage bottlenecks across AI training clusters, large data lakes, and distributed engineering workflows.
          </p>
        </div>

        <div className="solutions-grid">
          {solutionsData.map((item, index) => (
            <article className="solution-card" key={index}>
              <div>
                <div className="solution-badge">{item.badge}</div>
                <h3 className="solution-title">{item.title}</h3>
                <p className="solution-desc">{item.desc}</p>
              </div>
              <ul className="solution-feature-list">
                {item.features.map((feat, fIdx) => (
                  <li className="solution-feature-item" key={fIdx}>
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
