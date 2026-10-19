import React from 'react';

/**
 * AssessmentModal Component (Beginner Friendly)
 * Displays the internship brief and design walkthrough for reviewers.
 */
export default function AssessmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay is-active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={onClose}
    >
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title" id="modalTitle">
            Zyner Internship Assessment — Design Walkthrough &amp; Alignment
          </h3>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Assessment Modal"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div>
            <h3>Client Brief: Japolic</h3>
            <p>
              Japolic is a developer infrastructure company building a new type of high-performance file system. It allows developers to connect multiple servers to shared storage and access their data at speeds closer to local disks. It also works with S3, allowing teams to use lower-cost storage for large amounts of data while keeping frequently used data fast and accessible. The product is designed for AI applications and other data-intensive workloads.
            </p>
          </div>

          <div>
            <h3>Target Audience Alignment</h3>
            <table className="modal-meta-table">
              <tbody>
                <tr>
                  <td>Developers (Primary)</td>
                  <td>Discover and test first. Prioritize 1-line installation, POSIX directory mounting, zero SDK rewrites, and command-line speed.</td>
                </tr>
                <tr>
                  <td>Engineering &amp; AI Teams</td>
                  <td>Focus on continuous DataLoader feeding, eliminating GPU starvation, and high-speed model checkpointing.</td>
                </tr>
                <tr>
                  <td>Infrastructure Leaders</td>
                  <td>Involved in the final buying decision. Focus on S3 cost efficiency, hardware optimization, and infrastructure scalability.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3>Design &amp; Visual Strategy</h3>
            <table className="modal-meta-table">
              <tbody>
                <tr>
                  <td>Style Direction</td>
                  <td>Clean, modern, confident, minimal, and professional developer infrastructure aesthetic. No generic AI gradients or noisy glassmorphism.</td>
                </tr>
                <tr>
                  <td>Color Palette</td>
                  <td>Deep obsidian canvas (#090B0E), refined hairline borders, and warm cadmium amber accents representing high-speed NVMe flash tiers.</td>
                </tr>
                <tr>
                  <td>Technology Stack</td>
                  <td>Clean HTML5, CSS3, JavaScript, and modular React (Vite). Zero Python requirements.</td>
                </tr>
                <tr>
                  <td>Authenticity</td>
                  <td>Follows the brief strictly without inventing fake corporate statistics, fake customer testimonials, or unsupported business claims.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
