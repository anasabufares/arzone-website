import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutClient from './components/CheckoutClient';

export default function CheckoutPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <CheckoutClient />
      <Footer />
    </main>
  );
}