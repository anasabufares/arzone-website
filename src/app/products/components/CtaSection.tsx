import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function CtaSection() {
  return (
    <section className="py-24 bg-black border-t border-[#0D0D0D] relative overflow-hidden">
      {/* Background image with scrim */}
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1636036704268-017faa3b6557"
          alt="Gaming battlestation setup with RGB lighting, dark room, deep shadows, atmospheric low-key lighting on desk"
          fill
          className="object-cover opacity-20" />
        
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)' }} />
        
      </div>
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,255,0,0.08) 0%, transparent 70%)' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span
          className="text-lime text-[0.6875rem] font-bold uppercase tracking-[0.35em] block mb-6"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          
          // Limited Stock
        </span>
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-bold tracking-tighter text-white leading-[0.88] mb-6">
          LEVEL UP
          <br />
          <span className="text-lime">YOUR SETUP.</span>
        </h2>
        <p className="text-[#888888] text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Free 2-day shipping on orders over $75. Free returns within 30 days. Every order ships from our warehouse in Phoenix, AZ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#products-section" className="lime-btn inline-block text-center">
            Shop All Products
          </Link>
          <Link href="/checkout" className="outline-btn inline-block text-center">
            View Cart
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {[
          { label: 'Free 2-Day Shipping', icon: '⚡' },
          { label: '30-Day Returns', icon: '↩' },
          { label: '2-Year Warranty', icon: '🛡' },
          { label: 'Secure Checkout', icon: '🔒' }]?.
          map((badge) =>
          <div key={badge?.label} className="flex items-center gap-2">
              <span className="text-lime text-sm">{badge?.icon}</span>
              <span
              className="text-[#555555] text-[0.6875rem] uppercase tracking-[0.1em]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              
                {badge?.label}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}