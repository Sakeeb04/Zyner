import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Solutions from './components/Solutions.jsx';
import Benefits from './components/Benefits.jsx';
import UseCases from './components/UseCases.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Benefits />
        <UseCases />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
