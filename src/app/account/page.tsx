import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccountClient from './components/AccountClient';

export default function AccountPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <AccountClient />
      <Footer />
    </main>
  );
}