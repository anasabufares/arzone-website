'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 10;
      bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ background: '#000000' }}>
      
      {/* Background product glow */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ willChange: 'transform' }}>
        
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.06) 0%, rgba(168,85,247,0.02) 40%, transparent 70%)'
          }} />
        
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.04) 0%, transparent 60%)'
          }} />
        
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[20, 40, 60, 80].map((pos) =>
        <div
          key={pos}
          className="absolute top-0 bottom-0 w-px"
          style={{ left: `${pos}%`, background: 'rgba(255,255,255,0.03)' }} />

        )}
        {[25, 50, 75].map((pos) =>
        <div
          key={pos}
          className="absolute left-0 right-0 h-px"
          style={{ top: `${pos}%`, background: 'rgba(255,255,255,0.03)' }} />

        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left: Text */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 opacity-0 animate-fade-up stagger-1"
              style={{ animationFillMode: 'forwards' }}>
              
              <div className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              <span
                className="text-lime text-[0.6875rem] font-bold tracking-[0.35em] uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                
                Pro Series 2026
              </span>
            </div>

            {/* Headline */}
            <div
              className="opacity-0 animate-fade-up stagger-2"
              style={{ animationFillMode: 'forwards' }}>
              
              <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.88] tracking-tighter text-white">
                BUILT FOR
                <br />
                <span className="text-lime">ELITE</span>
                <br />
                <span className="font-light text-[#888888]">PLAY.</span>
              </h1>
            </div>

            {/* Sub */}
            <p
              className="text-[#888888] text-lg font-light leading-relaxed max-w-md opacity-0 animate-fade-up stagger-3"
              style={{ animationFillMode: 'forwards' }}>
              
              Precision-engineered keyboards, mice, and headsets trusted by professionals who refuse to compromise.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-4"
              style={{ animationFillMode: 'forwards' }}>
              
              <Link href="#products-section" className="lime-btn inline-block text-center">
                Shop Collection
              </Link>
              <Link href="#features-section" className="outline-btn inline-block text-center">
                See Specs
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex items-center gap-10 pt-4 opacity-0 animate-fade-up stagger-5"
              style={{ animationFillMode: 'forwards' }}>
              
              {[
              { val: '8K', label: 'Poll Rate' },
              { val: '0.2ms', label: 'Latency' },
              { val: '90g', label: 'Lightest Mouse' }].
              map((stat) =>
              <div key={stat.label}>
                  <div className="text-white text-2xl font-bold tracking-tight">{stat.val}</div>
                  <div
                  className="text-[#555555] text-[0.6875rem] uppercase tracking-[0.12em]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Hero Product Image */}
          <div
            className="relative flex items-center justify-center opacity-0 animate-fade-up stagger-3"
            style={{ animationFillMode: 'forwards' }}>
            
            {/* Glow behind product */}
            <div
              className="absolute w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
                filter: 'blur(40px)'
              }} />
            
            {/* Product */}
            <div className="relative animate-float">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_10bac0da8-1767345754766.png"
                alt="Professional mechanical gaming keyboard with RGB lighting on dark background, top-down view"
                width={600}
                height={400}
                priority
                className="relative z-10 w-full max-w-lg"
                style={{
                  filter: 'drop-shadow(0 40px 80px rgba(168,85,247,0.2)) drop-shadow(0 0 60px rgba(168,85,247,0.08))'
                }} />
              
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-8 right-0 lg:right-[-20px] bg-black border border-[#1A1A1A] px-5 py-4 animate-pulse-glow"
              style={{ backdropFilter: 'blur(12px)' }}>
              
              <div
                className="text-[0.6875rem] text-[#888888] uppercase tracking-[0.15em] mb-1"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                
                New Drop
              </div>
              <div className="text-white font-bold text-lg tracking-tight">Apex Pro TKL</div>
              <div className="text-lime font-bold text-sm mt-1">$229</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span
          className="text-[#555555] text-[0.625rem] uppercase tracking-[0.4em]"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          
          Scroll
        </span>
        <div className="w-px h-12 bg-[#1A1A1A] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-lime scroll-indicator-line" />
          
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }} />
      
    </section>);

}