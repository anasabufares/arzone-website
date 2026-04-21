'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

type ColorVariant = {
  name: string;
  hex: string;
  imgSrc: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
  variants: ColorVariant[];
};

const keyboards: Product[] = [
  {
    id: 'kb-1',
    name: 'Apex Pro TKL',
    price: 229,
    rating: 4.9,
    reviews: 2841,
    badge: 'New',
    variants: [
      { name: 'Stealth Black', hex: '#1A1A1A', imgSrc: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=85' },
      { name: 'Arctic White', hex: '#E8E8E8', imgSrc: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=85' },
      { name: 'Phantom Red', hex: '#CC2200', imgSrc: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=600&q=85' },
    ],
  },
  {
    id: 'kb-2',
    name: 'Huntsman V3',
    price: 189,
    rating: 4.8,
    reviews: 1920,
    variants: [
      { name: 'Midnight', hex: '#0D0D0D', imgSrc: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=85' },
      { name: 'Purple Strike', hex: '#A855F7', imgSrc: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=85' },
    ],
  },
  {
    id: 'kb-3',
    name: 'BlackWidow V4',
    price: 159,
    rating: 4.7,
    reviews: 3102,
    badge: 'Best Seller',
    variants: [
      { name: 'Obsidian', hex: '#111111', imgSrc: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=600&q=85' },
      { name: 'Steel', hex: '#8899AA', imgSrc: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=85' },
      { name: 'Gold', hex: '#D4AF37', imgSrc: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=85' },
    ],
  },
  {
    id: 'kb-4',
    name: 'Ornata V3 X',
    price: 99,
    rating: 4.6,
    reviews: 887,
    variants: [
      { name: 'Charcoal', hex: '#2A2A2A', imgSrc: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=85' },
      { name: 'Frost', hex: '#D0E8FF', imgSrc: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=600&q=85' },
    ],
  },
];

const mice: Product[] = [
  {
    id: 'ms-1',
    name: 'DeathAdder V3 Pro',
    price: 149,
    rating: 4.9,
    reviews: 4210,
    badge: 'Top Rated',
    variants: [
      { name: 'Void Black', hex: '#0A0A0A', imgSrc: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=85' },
      { name: 'Ghost White', hex: '#F0F0F0', imgSrc: 'https://images.unsplash.com/photo-1629429407756-446d66b1b6b5?w=600&q=85' },
    ],
  },
  {
    id: 'ms-2',
    name: 'Viper V3 HyperSpeed',
    price: 129,
    rating: 4.8,
    reviews: 2880,
    badge: 'New',
    variants: [
      { name: 'Matte Black', hex: '#141414', imgSrc: 'https://images.unsplash.com/photo-1629429407756-446d66b1b6b5?w=600&q=85' },
      { name: 'Neon Purple', hex: '#A855F7', imgSrc: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=85' },
      { name: 'Cobalt', hex: '#1E40AF', imgSrc: 'https://images.unsplash.com/photo-1629429407756-446d66b1b6b5?w=600&q=85' },
    ],
  },
  {
    id: 'ms-3',
    name: 'Basilisk V3 X',
    price: 109,
    rating: 4.7,
    reviews: 1543,
    variants: [
      { name: 'Shadow', hex: '#1A1A2E', imgSrc: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=85' },
      { name: 'Silver', hex: '#CCCCCC', imgSrc: 'https://images.unsplash.com/photo-1629429407756-446d66b1b6b5?w=600&q=85' },
    ],
  },
  {
    id: 'ms-4',
    name: 'Naga V2 Pro',
    price: 199,
    rating: 4.8,
    reviews: 988,
    variants: [
      { name: 'Phantom', hex: '#0D0D0D', imgSrc: 'https://images.unsplash.com/photo-1629429407756-446d66b1b6b5?w=600&q=85' },
      { name: 'Crimson', hex: '#DC2626', imgSrc: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=85' },
    ],
  },
];

const headsets: Product[] = [
  {
    id: 'hs-1',
    name: 'Kraken V4 Pro',
    price: 249,
    rating: 4.9,
    reviews: 3710,
    badge: 'New',
    variants: [
      { name: 'Stealth', hex: '#111111', imgSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=85' },
      { name: 'Mercury', hex: '#ADADAD', imgSrc: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=85' },
      { name: 'Quartz', hex: '#E8D5C4', imgSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=85' },
    ],
  },
  {
    id: 'hs-2',
    name: 'BlackShark V2 X',
    price: 99,
    rating: 4.7,
    reviews: 5210,
    badge: 'Best Seller',
    variants: [
      { name: 'Midnight', hex: '#0D0D0D', imgSrc: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=85' },
      { name: 'Team Green', hex: '#16A34A', imgSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=85' },
    ],
  },
  {
    id: 'hs-3',
    name: 'Nari Ultimate',
    price: 199,
    rating: 4.8,
    reviews: 1902,
    variants: [
      { name: 'Gunmetal', hex: '#3D3D3D', imgSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=85' },
      { name: 'Rose Gold', hex: '#B5838D', imgSrc: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=85' },
    ],
  },
  {
    id: 'hs-4',
    name: 'Barracuda X',
    price: 149,
    rating: 4.6,
    reviews: 1244,
    variants: [
      { name: 'Void Black', hex: '#0A0A0A', imgSrc: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=85' },
      { name: 'Electric Purple', hex: '#A855F7', imgSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=85' },
      { name: 'Indigo', hex: '#4338CA', imgSrc: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=85' },
    ],
  },
];

const categories = [
  { key: 'keyboards', label: 'Keyboards', products: keyboards },
  { key: 'mice', label: 'Mice', products: mice },
  { key: 'headsets', label: 'Headsets', products: headsets },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-lime' : 'text-[#333333]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [activeVariant, setActiveVariant] = useState(0);

  return (
    <div className="product-float-card group flex flex-col items-center text-center">
      {/* Floating image area */}
      <div className="relative w-full flex items-center justify-center" style={{ minHeight: '220px' }}>
        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-2 left-2 z-20 bg-lime text-black text-[0.6rem] font-bold uppercase tracking-[0.12em] px-2.5 py-1"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {product.badge}
          </span>
        )}

        {/* Product image — transparent float */}
        <AppImage
          src={product.variants[activeVariant].imgSrc}
          alt={`${product.name} in ${product.variants[activeVariant].name} color, floating on black background, professional gaming peripheral`}
          width={280}
          height={200}
          className="product-img object-contain w-full max-w-[280px] h-[200px]"
          style={{ mixBlendMode: 'lighten' }}
        />

        {/* Add to cart — appears on hover */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[240px]">
          <Link href="/checkout" className="add-to-cart-btn block w-full text-center">
            Add to Cart
          </Link>
        </div>
      </div>

      {/* Product info — centered below */}
      <div className="mt-5 space-y-3 w-full">
        {/* Rating */}
        <div className="flex items-center justify-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-[#555555] text-[0.6875rem]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Name */}
        <h3 className="text-white font-semibold text-[1rem] tracking-tight">{product.name}</h3>

        {/* Price */}
        <p className="text-lime font-bold text-lg">${product.price}</p>

        {/* Color pickers */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {product.variants.map((v, i) => (
            <button
              key={v.name}
              onClick={() => setActiveVariant(i)}
              className={`color-swatch ${i === activeVariant ? 'active' : ''}`}
              style={{ backgroundColor: v.hex }}
              aria-label={`Select ${v.name} color`}
              title={v.name}
            />
          ))}
        </div>

        {/* Active variant name */}
        <p
          className="text-[#555555] text-[0.6875rem] uppercase tracking-[0.1em]"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          {product.variants[activeVariant].name}
        </p>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState('keyboards');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = categories.find((c) => c.key === activeTab)!;

  const filteredProducts = currentCategory.products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="products-section" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span
              className="text-lime text-[0.6875rem] font-bold uppercase tracking-[0.3em] block mb-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              // Collection 2026
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter text-white leading-tight">
              CHOOSE YOUR
              <br />
              <span className="text-[#888888] font-light">WEAPON.</span>
            </h2>
          </div>

          {/* Tab navigation */}
          <div className="flex items-center gap-8 border-b border-[#1A1A1A] pb-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => { setActiveTab(cat.key); setSearchQuery(''); }}
                className={`tab-btn ${activeTab === cat.key ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search bar + category filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555555] pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${currentCategory.label.toLowerCase()}…`}
              className="w-full bg-[#0D0D0D] border border-[#1E1E1E] text-white placeholder-[#444444] text-sm pl-11 pr-4 py-3 focus:outline-none focus:border-[#A855F7] transition-colors duration-200"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555] hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => { setActiveTab(cat.key); setSearchQuery(''); }}
                className={`px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] border transition-all duration-200 ${
                  activeTab === cat.key
                    ? 'bg-[#A855F7] border-[#A855F7] text-white'
                    : 'bg-transparent border-[#1E1E1E] text-[#666666] hover:border-[#A855F7] hover:text-[#A855F7]'
                }`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid — 4 columns on desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg className="w-12 h-12 text-[#333333] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <p className="text-[#555555] text-sm uppercase tracking-[0.2em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              No products found for &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-[#A855F7] text-xs uppercase tracking-[0.15em] hover:text-white transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}