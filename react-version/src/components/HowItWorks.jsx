import React from 'react';

/**
 * HowItWorks Component (Beginner Friendly)
 * 4-step deployment timeline with CLI snippets.
 */
export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Install the Client",
      desc: "Deploy the lightweight Japolic client daemon onto your physical servers, cloud instances, or Kubernetes worker nodes.",
      snippet: "curl -fsSL https://get.japolic.io | bash"
    },
    {
      num: "02",
      title: "Mount Shared Namespace",
      desc: "Execute the mount command to bind the shared storage namespace to any local POSIX mount point on each server.",
      snippet: "japolic mount /mnt/shared-storage"
    },
    {
      num: "03",
      title: "Connect S3 Storage",
      desc: "Link your existing Amazon S3 buckets. Japolic maps the directory hierarchy and manages active data caching automatically.",
      snippet: "--tier s3://ai-datasets-bucket"
    },
    {
      num: "04",
      title: "Train & Scale at Speed",
      desc: "Your applications read and write directly at speeds closer to local disks. S3 stores large amounts of data at lower cost.",
      snippet: "japolic start-cluster --data /mnt/shared-storage"
    }
  ];

  return (
    <section className="section section-divider" id="how-it-works" aria-labelledby="howItWorksTitle">
      <div className="container">
        <div className="section-header text-center">
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Deployment Flow
          </div>
          <h2 className="section-title" id="howItWorksTitle">How Japolic Works</h2>
          <p className="section-subtitle">
            Four simple steps to connect your compute clusters to high-speed shared storage backed by low-cost S3.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div className="step-card" key={idx}>
              <div className="step-marker" aria-hidden="true">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              <div className="step-code-snippet">{step.snippet}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
