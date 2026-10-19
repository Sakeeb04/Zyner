import React, { useState } from 'react';

/**
 * ContactForm Component (Beginner Friendly)
 * Form state management with React useState, real-time validation, and success card.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    userRole: '',
    workloadType: '',
    clusterDetails: '',
    projectMessage: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.workEmail.trim() || !emailRegex.test(formData.workEmail.trim())) {
      newErrors.workEmail = 'Please enter a valid work email address.';
    }

    if (!formData.userRole) {
      newErrors.userRole = 'Please select your role.';
    }

    if (!formData.workloadType) {
      newErrors.workloadType = 'Please select your primary workload.';
    }

    if (!formData.projectMessage.trim() || formData.projectMessage.trim().length < 10) {
      newErrors.projectMessage = 'Please share a brief message about your project (at least 10 characters).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success simulation
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setRefCode(`REF: JAP-2026-INQ-${randomNum}`);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      userRole: '',
      workloadType: '',
      clusterDetails: '',
      projectMessage: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className="section section-divider" id="inquiry" aria-labelledby="inquiryTitle">
      <div className="container">
        <div className="inquiry-grid">
          <div className="inquiry-info">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              Get Started
            </div>
            <h2 className="inquiry-info-title" id="inquiryTitle">Ready to Accelerate Your Storage Infrastructure?</h2>
            <p className="inquiry-info-text">
              Whether you are an AI engineer evaluating shared storage performance or an infrastructure leader seeking to optimize S3 storage costs, our engineering team is here to help you get connected.
            </p>

            <div className="inquiry-points">
              <div className="inquiry-point-item">
                <svg className="inquiry-point-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div>
                  <div className="inquiry-point-title">Proof-of-Concept Cluster Access</div>
                  <div className="inquiry-point-desc">Test Japolic on your existing GPU or CPU compute nodes with your real workloads.</div>
                </div>
              </div>

              <div className="inquiry-point-item">
                <svg className="inquiry-point-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div>
                  <div className="inquiry-point-title">Direct Engineering Support</div>
                  <div className="inquiry-point-desc">Work directly with systems engineers specializing in distributed file systems and S3 integration.</div>
                </div>
              </div>

              <div className="inquiry-point-item">
                <svg className="inquiry-point-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div>
                  <div className="inquiry-point-title">Zero Upfront Hardware Commitments</div>
                  <div className="inquiry-point-desc">Leverage your existing servers and S3 storage accounts without proprietary hardware appliances.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="inquiry-form-card">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate aria-label="Japolic Technical Access Inquiry Form">
                <div className="form-group-grid">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={`form-input ${errors.fullName ? 'is-invalid' : ''}`}
                      placeholder="e.g. Alex Rivera"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <span className="form-error-msg visible">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="workEmail" className="form-label">
                      Work Email <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      className={`form-input ${errors.workEmail ? 'is-invalid' : ''}`}
                      placeholder="alex@company.com"
                      value={formData.workEmail}
                      onChange={handleChange}
                    />
                    {errors.workEmail && <span className="form-error-msg visible">{errors.workEmail}</span>}
                  </div>
                </div>

                <div className="form-group-grid">
                  <div className="form-group">
                    <label htmlFor="userRole" className="form-label">
                      Your Role <span className="req" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="userRole"
                      name="userRole"
                      className={`form-select ${errors.userRole ? 'is-invalid' : ''}`}
                      value={formData.userRole}
                      onChange={handleChange}
                    >
                      <option value="">Select your role</option>
                      <option value="developer">Developer / AI Engineer</option>
                      <option value="engineering_lead">Engineering Team Lead</option>
                      <option value="ai_team">AI / ML Infrastructure Team</option>
                      <option value="infra_leader">Infrastructure Leader / CTO / FinOps</option>
                    </select>
                    {errors.userRole && <span className="form-error-msg visible">{errors.userRole}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="workloadType" className="form-label">
                      Primary Workload <span className="req" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="workloadType"
                      name="workloadType"
                      className={`form-select ${errors.workloadType ? 'is-invalid' : ''}`}
                      value={formData.workloadType}
                      onChange={handleChange}
                    >
                      <option value="">Select workload type</option>
                      <option value="ai_training">AI / Deep Learning Model Training</option>
                      <option value="checkpointing">Large Model Checkpointing &amp; Resume</option>
                      <option value="analytics">Data-Intensive Batch Analytics</option>
                      <option value="s3_caching">S3 Cloud Storage Cost Optimization</option>
                      <option value="other">Other High-Performance Storage Needs</option>
                    </select>
                    {errors.workloadType && <span className="form-error-msg visible">{errors.workloadType}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="clusterDetails" className="form-label">Current Cluster &amp; Storage Environment</label>
                  <input
                    type="text"
                    id="clusterDetails"
                    name="clusterDetails"
                    className="form-input"
                    placeholder="e.g. 16 on-prem GPU servers + 250TB S3 bucket"
                    value={formData.clusterDetails}
                    onChange={handleChange}
                  />
                  <span className="form-hint">Optional: approximate number of servers and cloud or on-prem environment.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="projectMessage" className="form-label">
                    Project Details / Message <span className="req" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="projectMessage"
                    name="projectMessage"
                    className={`form-textarea ${errors.projectMessage ? 'is-invalid' : ''}`}
                    placeholder="Tell us about your current storage bottlenecks or evaluation goals..."
                    value={formData.projectMessage}
                    onChange={handleChange}
                  ></textarea>
                  {errors.projectMessage && <span className="form-error-msg visible">{errors.projectMessage}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 'var(--space-xs)' }}>
                  Submit Request for Technical Access
                </button>
              </form>
            ) : (
              <div className="form-success-card visible" role="alert">
                <div className="success-icon-box">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="success-title">Inquiry Successfully Received</h3>
                <p className="success-desc">
                  Thank you for your interest in Japolic. Our developer infrastructure engineering team has received your details and will follow up with deployment instructions and technical access credentials.
                </p>
                <div className="success-ref-code">{refCode}</div>
                <button type="button" className="btn btn-secondary btn-sm" onClick={handleReset} style={{ marginTop: 'var(--space-sm)' }}>
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
