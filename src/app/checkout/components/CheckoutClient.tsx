'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type CheckoutMode = 'login' | 'register';
type Step = 'contact' | 'shipping' | 'payment' | 'review';

const cartItems = [
  {
    id: 'kb-1',
    name: 'Apex Pro TKL',
    variant: 'Stealth Black',
    price: 229,
    qty: 1,
    img: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&q=80',
  },
  {
    id: 'ms-1',
    name: 'DeathAdder V3 Pro',
    variant: 'Void Black',
    price: 149,
    qty: 1,
    img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&q=80',
  },
];

const steps: { key: Step; label: string }[] = [
  { key: 'contact', label: 'Contact' },
  { key: 'shipping', label: 'Shipping' },
  { key: 'payment', label: 'Payment' },
  { key: 'review', label: 'Review' },
];

function FormField({
  label,
  id,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="text-lime">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="form-input"
        required={required}
      />
    </div>
  );
}

export default function CheckoutClient() {
  const [mode, setMode] = useState<CheckoutMode>('login');
  const [step, setStep] = useState<Step>('contact');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 0;
  const tax = Math.round(subtotal * 0.085);
  const total = subtotal + shipping + tax;

  const stepIndex = steps.findIndex((s) => s.key === step);

  const nextStep = () => {
    const next = steps[stepIndex + 1];
    if (next) setStep(next.key);
  };

  const prevStep = () => {
    const prev = steps[stepIndex - 1];
    if (prev) setStep(prev.key);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center max-w-md">
          <div
            className="w-20 h-20 bg-lime/10 border border-lime/30 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
          >
            <Icon name="CheckIcon" size={36} className="text-lime" variant="outline" />
          </div>
          <h2 className="text-white text-4xl font-bold tracking-tighter mb-4">Order Confirmed</h2>
          <p className="text-[#888888] text-base font-light mb-3">
            Order <span className="text-lime font-mono">#ARZ-20260420-7841</span> is confirmed.
          </p>
          <p className="text-[#555555] text-sm font-light mb-10 leading-relaxed">
            You&apos;ll receive a shipping confirmation within 24 hours. Free 2-day delivery to your address.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/account" className="lime-btn text-center">
              Track Order
            </Link>
            <Link href="/products" className="outline-btn text-center">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page title */}
        <div className="mb-10">
          <span
            className="text-lime text-[0.6875rem] font-bold uppercase tracking-[0.3em] block mb-2"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            // Checkout
          </span>
          <h1 className="text-white text-4xl font-bold tracking-tighter">Complete Your Order</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
          {/* Left: Form */}
          <div className="space-y-6">
            {/* Auth mode selector */}
            <div className="bento-card p-6">
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="text-[#888888] text-[0.6875rem] uppercase tracking-[0.15em]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Checkout as:
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {(
                  [
                    { key: 'login', label: 'Sign In' },
                    { key: 'register', label: 'Create Account' },
                  ] as { key: CheckoutMode; label: string }[]
                ).map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setMode(opt.key)}
                    className={`px-5 py-2.5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] transition-all duration-200 ${
                      mode === opt.key
                        ? 'bg-lime text-black' :'border border-[#1A1A1A] text-[#888888] hover:border-[#333333] hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Login form */}
              {mode === 'login' && (
                <div className="mt-6 space-y-4 border-t border-[#1A1A1A] pt-6">
                  <FormField label="Email" id="login-email" type="email" required />
                  <FormField label="Password" id="login-password" type="password" required />
                  <button type="button" className="lime-btn w-full text-center py-3">
                    Sign In & Continue
                  </button>
                  <p className="text-[#555555] text-xs text-center">
                    <button type="button" className="text-lime hover:underline">Forgot password?</button>
                  </p>
                </div>
              )}

              {/* Register form */}
              {mode === 'register' && (
                <div className="mt-6 space-y-4 border-t border-[#1A1A1A] pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="First Name" id="reg-first" required />
                    <FormField label="Last Name" id="reg-last" required />
                  </div>
                  <FormField label="Email" id="reg-email" type="email" required />
                  <FormField label="Password" id="reg-password" type="password" required />
                  <button type="button" className="lime-btn w-full text-center py-3">
                    Create Account & Continue
                  </button>
                </div>
              )}
            </div>

            {/* Step progress */}
            {(mode === 'login' || mode === 'register') && (
              <>
                <div className="flex items-center gap-0">
                  {steps.map((s, i) => (
                    <React.Fragment key={s.key}>
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-[0.6875rem] font-bold transition-all duration-300 ${
                            i < stepIndex
                              ? 'bg-lime text-black'
                              : i === stepIndex
                              ? 'border-2 border-lime text-lime' :'border border-[#333333] text-[#555555]'
                          }`}
                        >
                          {i < stepIndex ? (
                            <Icon name="CheckIcon" size={12} variant="outline" />
                          ) : (
                            i + 1
                          )}
                        </div>
                        <span
                          className={`mt-1.5 text-[0.625rem] uppercase tracking-[0.1em] ${
                            i === stepIndex ? 'text-white' : 'text-[#555555]'
                          }`}
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          {s.label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className={`flex-1 h-px mx-2 transition-all duration-500 ${
                            i < stepIndex ? 'bg-lime' : 'bg-[#1A1A1A]'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Step content */}
                <div className="bento-card p-8">
                  {/* Contact step */}
                  {step === 'contact' && (
                    <div className="space-y-5">
                      <h3 className="text-white font-semibold text-lg tracking-tight mb-6">Contact Information</h3>
                      <FormField label="Email Address" id="email" type="email" required placeholder="you@example.com" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField label="First Name" id="first-name" required />
                        <FormField label="Last Name" id="last-name" required />
                      </div>
                      <FormField label="Phone (optional)" id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  )}

                  {/* Shipping step */}
                  {step === 'shipping' && (
                    <div className="space-y-5">
                      <h3 className="text-white font-semibold text-lg tracking-tight mb-6">Shipping Address</h3>
                      <FormField label="Address Line 1" id="addr1" required placeholder="123 Main Street" />
                      <FormField label="Address Line 2" id="addr2" placeholder="Apt, Suite, etc." />
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-1">
                          <FormField label="City" id="city" required />
                        </div>
                        <FormField label="State" id="state" required placeholder="CA" />
                        <FormField label="ZIP Code" id="zip" required placeholder="90210" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="form-label">Shipping Method</label>
                        <div className="space-y-2">
                          {[
                            { id: 'std', label: 'Standard (3-5 days)', price: 'Free' },
                            { id: 'exp', label: 'Express (2 days)', price: 'Free on orders $75+' },
                            { id: 'ovn', label: 'Overnight', price: '$24.99' },
                          ].map((opt) => (
                            <label
                              key={opt.id}
                              className="flex items-center justify-between bento-card p-4 cursor-pointer hover:border-lime/30 transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="shipping-method"
                                  defaultChecked={opt.id === 'exp'}
                                  className="accent-lime"
                                />
                                <span className="text-white text-sm">{opt.label}</span>
                              </div>
                              <span
                                className="text-lime text-[0.75rem] font-bold"
                                style={{ fontFamily: 'JetBrains Mono, monospace' }}
                              >
                                {opt.price}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Payment step */}
                  {step === 'payment' && (
                    <div className="space-y-5">
                      <h3 className="text-white font-semibold text-lg tracking-tight mb-6">Payment Details</h3>
                      {/* Backend integration point */}
                      {/* TODO: Connect payment processor (Stripe, etc.) here */}
                      <div className="bento-card p-4 border-lime/20">
                        <div className="flex items-center gap-3 mb-4">
                          <Icon name="LockClosedIcon" size={16} className="text-lime" variant="outline" />
                          <span
                            className="text-lime text-[0.6875rem] uppercase tracking-[0.1em]"
                            style={{ fontFamily: 'JetBrains Mono, monospace' }}
                          >
                            256-bit SSL Encrypted
                          </span>
                        </div>
                        <div className="flex gap-3 mb-4">
                          {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((card) => (
                            <span
                              key={card}
                              className="text-[0.625rem] font-bold border border-[#333333] px-2 py-1 text-[#888888]"
                              style={{ fontFamily: 'JetBrains Mono, monospace' }}
                            >
                              {card}
                            </span>
                          ))}
                        </div>
                      </div>
                      <FormField label="Cardholder Name" id="card-name" required placeholder="Name as on card" />
                      <FormField label="Card Number" id="card-number" required placeholder="0000 0000 0000 0000" />
                      <div className="grid grid-cols-2 gap-4">
                        <FormField label="Expiry" id="expiry" required placeholder="MM / YY" />
                        <FormField label="CVV" id="cvv" required placeholder="000" />
                      </div>
                    </div>
                  )}

                  {/* Review step */}
                  {step === 'review' && (
                    <div className="space-y-6">
                      <h3 className="text-white font-semibold text-lg tracking-tight mb-6">Review Your Order</h3>
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 border-b border-[#1A1A1A] pb-4">
                          <div className="w-14 h-14 bg-[#0D0D0D] border border-[#1A1A1A] overflow-hidden flex-shrink-0">
                            <AppImage
                              src={item.img}
                              alt={`${item.name} product thumbnail`}
                              width={56}
                              height={56}
                              className="w-full h-full object-cover"
                              style={{ mixBlendMode: 'lighten' }}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-sm font-semibold">{item.name}</div>
                            <div
                              className="text-[#555555] text-[0.625rem] uppercase tracking-[0.1em]"
                              style={{ fontFamily: 'JetBrains Mono, monospace' }}
                            >
                              {item.variant} · Qty {item.qty}
                            </div>
                          </div>
                          <div className="text-white font-bold">${item.price}</div>
                        </div>
                      ))}
                      <div className="space-y-2 pt-2 text-sm">
                        {[
                          { label: 'Subtotal', val: `$${subtotal}` },
                          { label: 'Shipping', val: shipping === 0 ? 'Free' : `$${shipping}` },
                          { label: 'Tax (8.5%)', val: `$${tax}` },
                        ].map((row) => (
                          <div key={row.label} className="flex justify-between text-[#888888]">
                            <span>{row.label}</span>
                            <span>{row.val}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-white font-bold text-base pt-3 border-t border-[#1A1A1A]">
                          <span>Total</span>
                          <span className="text-lime">${total}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#1A1A1A]">
                    {stepIndex > 0 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center gap-2 text-[#888888] hover:text-white text-sm font-medium transition-colors"
                      >
                        <Icon name="ArrowLeftIcon" size={16} variant="outline" />
                        Back
                      </button>
                    ) : (
                      <Link href="/products" className="flex items-center gap-2 text-[#888888] hover:text-white text-sm font-medium transition-colors">
                        <Icon name="ArrowLeftIcon" size={16} variant="outline" />
                        Continue Shopping
                      </Link>
                    )}

                    {step === 'review' ? (
                      <button
                        type="button"
                        onClick={() => setOrderPlaced(true)}
                        className="lime-btn flex items-center gap-2"
                      >
                        <Icon name="LockClosedIcon" size={16} variant="solid" />
                        Place Order · ${total}
                      </button>
                    ) : (
                      <button type="button" onClick={nextStep} className="lime-btn flex items-center gap-2">
                        Continue
                        <Icon name="ArrowRightIcon" size={16} variant="outline" />
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-4">
            <div className="bento-card p-6 sticky top-28">
              <h3
                className="text-[#888888] text-[0.6875rem] uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                // Order Summary
              </h3>

              {/* Cart items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#0D0D0D] border border-[#1A1A1A] flex-shrink-0 relative overflow-hidden">
                      <AppImage
                        src={item.img}
                        alt={`${item.name} thumbnail`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        style={{ mixBlendMode: 'lighten' }}
                      />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-lime text-black text-[9px] font-bold flex items-center justify-center rounded-full">
                        {item.qty}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{item.name}</div>
                      <div
                        className="text-[#555555] text-[0.625rem] uppercase tracking-[0.08em]"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {item.variant}
                      </div>
                    </div>
                    <div className="text-white text-sm font-bold shrink-0">${item.price}</div>
                  </div>
                ))}
              </div>

              {/* Promo code */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="form-input flex-1 py-2.5 text-sm"
                />
                <button
                  type="button"
                  className="px-4 py-2.5 border border-[#333333] text-[#888888] hover:border-lime hover:text-lime text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-all"
                >
                  Apply
                </button>
              </div>

              {/* Totals */}
              <div className="space-y-2.5 border-t border-[#1A1A1A] pt-4">
                <div className="flex justify-between text-sm text-[#888888]">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-[#888888]">
                  <span>Shipping</span>
                  <span className="text-lime font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm text-[#888888]">
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-[#1A1A1A]">
                  <span>Total</span>
                  <span className="text-lime">${total}</span>
                </div>
              </div>

              {/* Trust */}
              <div className="mt-5 pt-4 border-t border-[#1A1A1A] space-y-2">
                {[
                  { icon: 'LockClosedIcon', label: 'SSL Secure Checkout' },
                  { icon: 'ArrowPathIcon', label: '30-Day Free Returns' },
                  { icon: 'TruckIcon', label: 'Free 2-Day Shipping' },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-2.5">
                    <Icon name={t.icon as Parameters<typeof Icon>[0]['name']} size={14} className="text-lime" variant="outline" />
                    <span
                      className="text-[#555555] text-[0.6875rem] uppercase tracking-[0.1em]"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}