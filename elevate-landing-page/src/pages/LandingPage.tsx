import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import CorePrinciples from '../components/landing/CorePrinciples';
import Features from '../components/landing/Features';
import InsightCatalystHighlight from '../components/landing/InsightCatalystHighlight';
import Testimonials from '../components/landing/Testimonials';

const LandingPage: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CorePrinciples />
        <Features />
        <InsightCatalystHighlight />
        <Testimonials />
      </main>
      <footer style={{
        backgroundColor: '#f8f9fa',
        padding: 'var(--spacing-lg) var(--spacing-lg)',
        textAlign: 'center',
        color: 'var(--color-secondary-text)',
        fontSize: '0.9rem',
        borderTop: '1px solid #e9ecef'
      }}>
        <p>© {new Date().getFullYear()} Elevate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
