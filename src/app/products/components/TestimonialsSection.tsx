'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  id: 1,
  name: 'Jordan Alvarez',
  role: 'Pro FPS Player, Team Nexus',
  quote: 'The DeathAdder V3 Pro changed how I play. Sub-1ms clicks, 90g weight — I feel every micro-adjustment. Nothing comes close at this price.',
  product: 'DeathAdder V3 Pro',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10080fd1d-1764792423309.png"
},
{
  id: 2,
  name: 'Priya Nair',
  role: 'Streamer & Content Creator',
  quote: 'The Kraken V4 Pro makes my streams sound professional. My community keeps asking what headset I use — the answer is always Arzone.',
  product: 'Kraken V4 Pro',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16f4c4e7b-1767898682314.png"
},
{
  id: 3,
  name: 'Marcus Webb',
  role: 'Competitive RTS Player',
  quote: 'The Apex Pro TKL is the only keyboard I\'ve ever used where every switch feels identical. After 12 months of heavy use — still perfect.',
  product: 'Apex Pro TKL',
  rating: 5,
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1ffbab6-1772313920673.png"
}];


function Stars({ count }: {count: number;}) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) =>
      <svg key={i} className="w-4 h-4 text-lime" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </div>);

}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="py-24 bg-black border-t border-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-lime text-[0.6875rem] font-bold uppercase tracking-[0.3em] block mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            
            // Community
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter text-white leading-tight">
            PROS TRUST
            <br />
            <span className="text-[#888888] font-light">ARZONE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Featured testimonial */}
          <div className="space-y-8">
            <div className="bento-card p-10 space-y-6">
              <Stars count={current.rating} />
              <blockquote className="text-white text-xl font-light leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#1A1A1A]">
                  <AppImage
                    src={current.avatar}
                    alt={`${current.name}, ${current.role}, smiling headshot on dark background`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover grayscale" />
                  
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{current.name}</div>
                  <div
                    className="text-[#555555] text-[0.6875rem] uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    
                    {current.role}
                  </div>
                </div>
                <div className="ml-auto">
                  <span
                    className="text-lime text-[0.625rem] font-bold uppercase tracking-[0.1em] border border-lime/30 px-2.5 py-1"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    
                    {current.product}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) =>
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                i === active ?
                'w-8 h-1 bg-lime' : 'w-4 h-1 bg-[#333333] hover:bg-[#555555]'}`
                }
                aria-label={`View testimonial ${i + 1}`} />

              )}
            </div>
          </div>

          {/* Right: Stacked mini testimonials */}
          <div className="space-y-3">
            {testimonials.map((t, i) =>
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`w-full text-left bento-card p-6 transition-all duration-300 ${
              i === active ? 'border-lime/30 bg-[#0D0D0D]' : ''}`
              }>
              
                <div className="flex items-center gap-4">
                  <div
                  className={`w-10 h-10 rounded-full overflow-hidden border transition-all duration-300 ${
                  i === active ? 'border-lime/50' : 'border-[#1A1A1A]'}`
                  }>
                  
                    <AppImage
                    src={t.avatar}
                    alt={`${t.name} headshot`}
                    width={40}
                    height={40}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                    i === active ? 'grayscale-0' : 'grayscale'}`
                    } />
                  
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div
                    className="text-[#555555] text-[0.625rem] uppercase tracking-[0.1em] truncate"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    
                      {t.product}
                    </div>
                  </div>
                  <Stars count={t.rating} />
                </div>
              </button>
            )}

            {/* Social proof bar */}
            <div className="bento-card p-6 flex items-center justify-between">
              <div>
                <div className="text-white font-bold text-2xl">4.8</div>
                <div
                  className="text-[#555555] text-[0.6875rem] uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  
                  Avg Rating
                </div>
              </div>
              <div className="h-10 w-px bg-[#1A1A1A]" />
              <div>
                <div className="text-white font-bold text-2xl">18K+</div>
                <div
                  className="text-[#555555] text-[0.6875rem] uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  
                  Reviews
                </div>
              </div>
              <div className="h-10 w-px bg-[#1A1A1A]" />
              <div>
                <div className="text-white font-bold text-2xl">97%</div>
                <div
                  className="text-[#555555] text-[0.6875rem] uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  
                  Recommend
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}