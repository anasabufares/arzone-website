import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const links = [
  { label: 'Products', href: '/products' },
  { label: 'Keyboards', href: '/products?cat=keyboards' },
  { label: 'Mice', href: '/products?cat=mice' },
  { label: 'Headsets', href: '/products?cat=headsets' },
  { label: 'Account', href: '/account' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-black pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Single row layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <AppLogo size={28} />
            <span className="text-white font-bold text-lg tracking-tighter">
              AR<span className="text-lime">ZONE</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="text-[#888888] hover:text-white text-[0.875rem] font-medium transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[#555555] text-[0.8125rem] shrink-0">
            © 2026 Arzone
          </p>
        </div>
      </div>
    </footer>
  );
}