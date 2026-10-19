import React from 'react';

export default function UseCases() {
  const cases = [
    {
      pill: "Use Case 01",
      title: "Distributed AI Model Training",
      desc: "When training models across multiple GPU servers, data loaders must read millions of samples continuously. Japolic keeps data readily cached so GPUs never sit idle."
    },
    {
      pill: "Use Case 02",
      title: "Model Checkpointing & Resume",
      desc: "Writing huge checkpoint files from multiple nodes at once often freezes training. Japolic absorbs checkpoints quickly and syncs them to S3 in the background."
    },
    {
      pill: "Use Case 03",
      title: "Data-Intensive Analytics",
      desc: "Large ETL jobs and batch pipelines can read from a shared directory simultaneously without experiencing network storage slowdowns."
    }
  ];

  return (
    <section className="section usecases-section" id="use-cases">
      <div className="container">
        <div className="section-intro">
          <span className="badge">Real Use Cases</span>
          <h2>Where Japolic makes the biggest difference</h2>
        </div>

        <div className="usecases-grid">
          {cases.map((c, i) => (
            <div className="usecase-card" key={i}>
              <span className="usecase-pill">{c.pill}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="spotlight-card">
          <img
            src="/assets/japolic_storage_arch.jpg"
            alt="Japolic 3D storage architecture visual"
            className="spotlight-img"
          />
          <div className="spotlight-content">
            <h3>How the storage layers work together</h3>
            <p>
              Servers connect to a fast local caching layer for instant read access. In the background, Japolic syncs with your S3 buckets so all your data remains safely stored at low cost.
            </p>
            <a href="#inquiry" className="btn btn-secondary">Contact Our Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
