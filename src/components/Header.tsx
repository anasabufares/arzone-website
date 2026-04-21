'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navItems = [
  { label: 'Keyboards', href: '/products?cat=keyboards' },
  { label: 'Mice', href: '/products?cat=mice' },
  { label: 'Headsets', href: '/products?cat=headsets' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo size={32} />
            <span className="text-white font-bold text-xl tracking-tighter">
              AR<span className="text-lime">ZONE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems?.map((item) => (
              <Link
                key={item?.label}
                href={item?.href}
                className="text-[#888888] hover:text-white text-[0.8125rem] font-medium tracking-[0.1em] uppercase transition-colors duration-200"
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/account"
              className={`p-2 transition-colors duration-200 ${
                pathname === '/account' ? 'text-lime' : 'text-[#888888] hover:text-white'
              }`}
              aria-label="Account"
            >
              <Icon name="UserIcon" size={20} variant="outline" />
            </Link>
            <Link
              href="/checkout"
              className="relative p-2 text-[#888888] hover:text-white transition-colors duration-200"
              aria-label="Cart"
            >
              <Icon name="ShoppingBagIcon" size={20} variant="outline" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-lime text-black text-[9px] font-bold flex items-center justify-center rounded-full">
                2
              </span>
            </Link>
            <Link href="/products" className="lime-btn text-[0.75rem] px-5 py-2.5 ml-2">
              Shop Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} variant="outline" />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-10 bg-black/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2 mt-4">
            {navItems?.map((item) => (
              <Link
                key={item?.label}
                href={item?.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-semibold tracking-tight py-3 border-b border-[#1A1A1A] hover:text-lime transition-colors"
              >
                {item?.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/account" onClick={() => setMenuOpen(false)} className="outline-btn text-center py-3.5">
              My Account
            </Link>
            <Link href="/checkout" onClick={() => setMenuOpen(false)} className="lime-btn text-center py-3.5">
              Cart (2)
            </Link>
          </div>
        </div>
      )}
    </>
  );
}