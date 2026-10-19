import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Solutions from './components/Solutions.jsx';
import Benefits from './components/Benefits.jsx';
import UseCases from './components/UseCases.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import AssessmentModal from './components/AssessmentModal.jsx';

/**
 * Main App Component (Beginner Friendly)
 * Assembles all 9 required sections of the Japolic landing page.
 */
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-root">
      {/* 1. Header & Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main id="mainContent">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Brand Introduction */}
        <About />

        {/* 4. Main Products & Solutions */}
        <Solutions />

        {/* 5. Key Benefits & Reasons to Choose Japolic */}
        <Benefits />

        {/* 6. Featured Use Cases & Architecture */}
        <UseCases />

        {/* 7. How It Works Timeline */}
        <HowItWorks />

        {/* 8. Final CTA & Technical Inquiry Form */}
        <ContactForm />
      </main>

      {/* 9. Professional Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Assessment Spec Walkthrough Modal */}
      <AssessmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
