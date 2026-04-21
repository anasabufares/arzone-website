'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const specs = [
  {
    id: 'switches',
    label: '// Switches',
    title: 'Analog Optical',
    value: '0.1mm',
    unit: 'actuation',
    desc: 'Hall-effect magnetic sensors eliminate debounce entirely. Every keystroke registers at the speed of light.',
    icon: 'BoltIcon',
    span: 'col-span-1',
  },
  {
    id: 'polling',
    label: '// Polling Rate',
    title: 'HyperPolling',
    value: '8,000',
    unit: 'Hz',
    desc: 'Report position 8× faster than standard 1000Hz mice for near-zero perceived latency.',
    icon: 'SignalIcon',
    span: 'col-span-1',
  },
  {
    id: 'rgb',
    label: '// Lighting',
    title: 'Chroma RGB',
    value: '16.8M',
    unit: 'colors',
    desc: 'Per-key addressable RGB with 8-zone audio visualization. Syncs across your entire setup.',
    icon: 'SparklesIcon',
    span: 'col-span-1',
  },
  {
    id: 'build',
    label: '// Build',
    title: 'Aircraft-Grade',
    value: '100%',
    unit: 'aluminum',
    desc: 'CNC-milled 6061 aluminum top plate. Gasket-mounted PCB for a flex-forward, premium typing feel that lasts a decade.',
    icon: 'ShieldCheckIcon',
    span: 'col-span-2',
  },
  {
    id: 'latency',
    label: '// Wireless',
    title: 'HyperSpeed Pro',
    value: '2.4',
    unit: 'GHz',
    desc: 'Sub-1ms wireless. 300-hour battery. No compromises on freedom.',
    icon: 'WifiIcon',
    span: 'col-span-1',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            (entry.target as HTMLElement).style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features-section" ref={sectionRef} className="py-24 bg-black border-t border-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span
            className="text-lime text-[0.6875rem] font-bold uppercase tracking-[0.3em] block mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            // Engineering
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter text-white leading-tight">
            SPECS THAT
            <br />
            <span className="text-[#888888] font-light">MATTER.</span>
          </h2>
        </div>

        {/* Bento Grid — 3 cols */}
        {/* BENTO AUDIT:
            Cards: [switches cs-1, polling cs-1, rgb cs-1, build cs-2, latency cs-1] = 5 cards
            Row 1: [col-1: switches] [col-2: polling] [col-3: rgb]
            Row 2: [col-1+2: build cs-2] [col-3: latency]
            Placed 5/5 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Row 1: switches, polling, rgb */}
          {specs.slice(0, 3).map((spec, i) => (
            <div
              key={spec.id}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="bento-card p-8 space-y-4 opacity-0"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-lime text-[0.625rem] font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {spec.label}
                </span>
                <Icon name={spec.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-[#333333]" variant="outline" />
              </div>
              <div>
                <div className="text-[#888888] text-sm font-medium mb-1">{spec.title}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-white text-4xl font-bold tracking-tight">{spec.value}</span>
                  <span
                    className="text-lime text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {spec.unit}
                  </span>
                </div>
              </div>
              <p className="text-[#555555] text-sm font-light leading-relaxed">{spec.desc}</p>
            </div>
          ))}

          {/* Row 2: build (col-span-2), latency */}
          <div
            ref={(el) => { cardsRef.current[3] = el; }}
            className="bento-card md:col-span-2 p-8 space-y-4 opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-start justify-between">
              <span
                className="text-lime text-[0.625rem] font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {specs[3].label}
              </span>
              <Icon name={specs[3].icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-[#333333]" variant="outline" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <div>
                <div className="text-[#888888] text-sm font-medium mb-1">{specs[3].title}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-white text-5xl font-bold tracking-tight">{specs[3].value}</span>
                  <span
                    className="text-lime text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {specs[3].unit}
                  </span>
                </div>
              </div>
              <p className="text-[#555555] text-sm font-light leading-relaxed">{specs[3].desc}</p>
            </div>
            {/* Visual bar */}
            <div className="pt-2">
              <div className="h-px bg-[#1A1A1A] relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-lime"
                  style={{ width: '100%', animation: 'scanLine 3s ease-in-out infinite' }}
                />
              </div>
            </div>
          </div>

          <div
            ref={(el) => { cardsRef.current[4] = el; }}
            className="bento-card p-8 space-y-4 opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-start justify-between">
              <span
                className="text-lime text-[0.625rem] font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {specs[4].label}
              </span>
              <Icon name={specs[4].icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-[#333333]" variant="outline" />
            </div>
            <div>
              <div className="text-[#888888] text-sm font-medium mb-1">{specs[4].title}</div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-white text-4xl font-bold tracking-tight">{specs[4].value}</span>
                <span
                  className="text-lime text-xs uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {specs[4].unit}
                </span>
              </div>
            </div>
            <p className="text-[#555555] text-sm font-light leading-relaxed">{specs[4].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}