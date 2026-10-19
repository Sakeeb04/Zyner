import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Install the Client",
      desc: "Run our lightweight installation script on each server or worker node.",
      cmd: "curl -fsSL https://get.japolic.io | bash"
    },
    {
      num: "2",
      title: "Mount Shared Storage",
      desc: "Mount the shared namespace to any folder on your server.",
      cmd: "japolic mount /mnt/ai-data"
    },
    {
      num: "3",
      title: "Link Your S3 Bucket",
      desc: "Connect your existing S3 bucket so Japolic can handle tiering automatically.",
      cmd: "--tier s3://my-dataset-bucket"
    },
    {
      num: "4",
      title: "Run Your Workload",
      desc: "Read and write data just like a normal local disk, but with S3 scale.",
      cmd: "japolic run --data /mnt/ai-data"
    }
  ];

  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <div className="section-intro text-center">
          <span className="badge">Step-by-Step</span>
          <h2>How to get started with Japolic</h2>
          <p className="section-desc">Up and running on your servers in four straightforward steps.</p>
        </div>

        <div className="steps-row">
          {steps.map((s, i) => (
            <div className="step-box" key={i}>
              <div className="step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <pre className="step-pre"><code>{s.cmd}</code></pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
