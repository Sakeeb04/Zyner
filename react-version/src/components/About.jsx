import React from 'react';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-intro">
          <span className="badge">What is Japolic?</span>
          <h2>Built for AI applications and heavy workloads</h2>
          <p className="section-desc">
            Modern AI models require feeding massive amounts of data into multiple servers simultaneously. Traditional network filesystems create slow bottlenecks, while local disks on each server are expensive and hard to manage.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-number">01</div>
            <h3>Connect Multiple Servers</h3>
            <p>
              Attach dozens of compute nodes to a single shared storage pool without dealing with manual synchronization scripts or duplicated files.
            </p>
          </div>

          <div className="about-card">
            <div className="about-number">02</div>
            <h3>Local Disk Performance</h3>
            <p>
              Access frequently used files at speeds closer to local NVMe drives. Keep GPUs and CPUs constantly busy instead of waiting for data to load.
            </p>
          </div>

          <div className="about-card">
            <div className="about-number">03</div>
            <h3>Seamless S3 Integration</h3>
            <p>
              Keep your large datasets and archives in low-cost Amazon S3 storage. Japolic caches active files locally so you get the best of both worlds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
