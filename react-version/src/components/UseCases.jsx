import React from 'react';

/**
 * UseCases Component (Beginner Friendly)
 * 3 workload use cases and the 3D architecture spotlight.
 */
export default function UseCases() {
  const casesData = [
    {
      tag: "Use Case 01",
      title: "Distributed AI Model Training",
      desc: "Deep learning workloads require feeding massive datasets into multi-GPU clusters continuously. Japolic enables all worker servers to read training samples at local disk speeds, eliminating DataLoader stalls.",
      metaLeft: "Frameworks: PyTorch, Ray",
      metaRight: "Benefit: High GPU Utilization"
    },
    {
      tag: "Use Case 02",
      title: "Model Checkpointing & Recovery",
      desc: "Writing multi-gigabyte or terabyte model checkpoints simultaneously from distributed nodes can freeze training pipelines. Japolic ingests checkpoints at high local speeds and streams them back to S3.",
      metaLeft: "Workload: Checkpoint Dumps",
      metaRight: "Benefit: Zero Pipeline Freeze"
    },
    {
      tag: "Use Case 03",
      title: "Data-Intensive Analytics",
      desc: "ETL and high-throughput data processing jobs reading from shared repositories often saturate network disks. Japolic's distributed file system ensures concurrent reads remain fast across all servers.",
      metaLeft: "Workload: Parallel Batch ETL",
      metaRight: "Benefit: Consistent Throughput"
    }
  ];

  return (
    <section className="section section-divider" id="use-cases" aria-labelledby="useCasesTitle">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Real-World Application
          </div>
          <h2 className="section-title" id="useCasesTitle">Engineered for High-Demand Workloads</h2>
          <p className="section-subtitle">
            How data engineering and AI teams leverage Japolic across critical infrastructure workflows.
          </p>
        </div>

        <div className="use-cases-grid">
          {casesData.map((item, idx) => (
            <article className="use-case-card" key={idx}>
              <div>
                <span className="use-case-tag">{item.tag}</span>
                <h3 className="use-case-title">{item.title}</h3>
                <p className="use-case-desc">{item.desc}</p>
              </div>
              <div className="use-case-meta">
                <span>{item.metaLeft}</span>
                <span>{item.metaRight}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Visual Architecture Spotlight Callout */}
        <div className="arch-spotlight">
          <img
            src="/assets/japolic_storage_arch.jpg"
            alt="3D isometric technical rendering of Japolic distributed file system connecting multiple compute servers to parallel flash storage tiers and cloud S3 buckets"
            className="arch-spotlight-img"
            loading="lazy"
            width="800"
            height="500"
          />
          <div className="arch-spotlight-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              Distributed Architecture
            </div>
            <h3 className="section-title" style={{ fontSize: '1.75rem' }}>Connecting Servers Directly to Fast Shared Storage</h3>
            <p className="section-subtitle">
              By combining local server NVMe flash tiers into a coordinated distributed cache and transparently linking to Amazon S3, Japolic delivers the speed of direct-attached storage with the convenience and cost profile of the cloud.
            </p>
            <div style={{ marginTop: 'var(--space-md)' }}>
              <a href="#inquiry" className="btn btn-secondary btn-sm">Talk to Our Engineering Team</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
