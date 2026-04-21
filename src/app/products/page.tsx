import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';

export default function ProductsPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Noise & scan overlays */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />

      <Header />
      <HeroSection />
      <ProductGrid />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}