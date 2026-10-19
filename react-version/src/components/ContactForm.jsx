import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    workload: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailPattern.test(form.email.trim())) newErrors.email = true;
    if (!form.role) newErrors.role = true;
    if (!form.workload) newErrors.workload = true;
    if (!form.message.trim() || form.message.trim().length < 10) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const random = Math.floor(1000 + Math.random() * 9000);
    setRefId(`REF: JAP-${random}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', role: '', workload: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="section contact-section" id="inquiry">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-details">
            <span className="badge">Contact Us</span>
            <h2>Ready to try Japolic on your cluster?</h2>
            <p className="section-desc">
              Whether you are an engineer looking to test Japolic on your servers or an infrastructure lead wanting to optimize storage costs, we would love to help you get started.
            </p>

            <ul className="contact-highlights">
              <li>
                <strong>Free proof-of-concept setup:</strong> Test with your real workloads on your existing servers.
              </li>
              <li>
                <strong>Direct engineer support:</strong> Work directly with our team to configure your S3 connection.
              </li>
              <li>
                <strong>No hardware lock-in:</strong> Use your existing servers and cloud storage.
              </li>
            </ul>
          </div>

          <div className="form-container">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="inquiry-form" noValidate>
                <div className="form-row">
                  <div className="field-wrap">
                    <label htmlFor="name">Your Name <span className="req">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`input ${errors.name ? 'error' : ''}`}
                      placeholder="e.g. Alex Rivera"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="error-msg visible">Please enter your name.</span>}
                  </div>

                  <div className="field-wrap">
                    <label htmlFor="email">Work Email <span className="req">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`input ${errors.email ? 'error' : ''}`}
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error-msg visible">Please enter a valid email address.</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="field-wrap">
                    <label htmlFor="role">Your Role <span className="req">*</span></label>
                    <select
                      id="role"
                      name="role"
                      className={`input ${errors.role ? 'error' : ''}`}
                      value={form.role}
                      onChange={handleChange}
                    >
                      <option value="">Select your role</option>
                      <option value="developer">Developer / AI Engineer</option>
                      <option value="lead">Engineering Team Lead</option>
                      <option value="infra">Infrastructure / DevOps / FinOps</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.role && <span className="error-msg visible">Please select your role.</span>}
                  </div>

                  <div className="field-wrap">
                    <label htmlFor="workload">Primary Workload <span className="req">*</span></label>
                    <select
                      id="workload"
                      name="workload"
                      className={`input ${errors.workload ? 'error' : ''}`}
                      value={form.workload}
                      onChange={handleChange}
                    >
                      <option value="">Select workload</option>
                      <option value="training">AI / Deep Learning Training</option>
                      <option value="checkpointing">Model Checkpointing</option>
                      <option value="analytics">Data Analytics &amp; ETL</option>
                      <option value="s3_optimization">S3 Storage Cost Optimization</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.workload && <span className="error-msg visible">Please select your primary workload.</span>}
                  </div>
                </div>

                <div className="field-wrap">
                  <label htmlFor="message">Tell us about your project <span className="req">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    className={`input textarea ${errors.message ? 'error' : ''}`}
                    placeholder="What are your current storage bottlenecks or setup goals?"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <span className="error-msg visible">Please share a brief message (at least 10 characters).</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-block">Send Request</button>
              </form>
            ) : (
              <div className="success-card active">
                <div className="success-check">&#10003;</div>
                <h3>Thank you for reaching out!</h3>
                <p>We have received your message. Our engineering team will review your requirements and reach out within 24 hours.</p>
                <div className="ref-badge">{refId}</div>
                <button type="button" className="btn btn-secondary btn-small" onClick={handleReset}>
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
