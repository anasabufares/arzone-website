'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

type AccountTab = 'orders' | 'addresses' | 'profile' | 'security';

const orders = [
  {
    id: 'ARZ-20260418-4421',
    date: '04/18/2026',
    status: 'Delivered',
    statusColor: 'text-lime border-lime/30 bg-lime/5',
    total: 378,
    items: [
      {
        name: 'Apex Pro TKL',
        variant: 'Stealth Black',
        price: 229,
        img: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=200&q=80',
      },
      {
        name: 'DeathAdder V3 Pro',
        variant: 'Void Black',
        price: 149,
        img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&q=80',
      },
    ],
  },
  {
    id: 'ARZ-20260310-2188',
    date: '03/10/2026',
    status: 'Delivered',
    statusColor: 'text-lime border-lime/30 bg-lime/5',
    total: 249,
    items: [
      {
        name: 'Kraken V4 Pro',
        variant: 'Stealth',
        price: 249,
        img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80',
      },
    ],
  },
  {
    id: 'ARZ-20260220-0991',
    date: '02/20/2026',
    status: 'Shipped',
    statusColor: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
    total: 99,
    items: [
      {
        name: 'BlackShark V2 X',
        variant: 'Midnight',
        price: 99,
        img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&q=80',
      },
    ],
  },
];

const addresses = [
  {
    id: 'addr-1',
    label: 'Home',
    name: 'Marcus Webb',
    line1: '2847 Oak Street',
    line2: 'Apt 4B',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    isDefault: true,
  },
  {
    id: 'addr-2',
    label: 'Office',
    name: 'Marcus Webb',
    line1: '500 West 2nd Street',
    line2: 'Suite 1900',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    isDefault: false,
  },
];

const navLinks: { key: AccountTab; label: string; icon: string }[] = [
  { key: 'orders', label: 'Order History', icon: 'ClipboardDocumentListIcon' },
  { key: 'addresses', label: 'Saved Addresses', icon: 'MapPinIcon' },
  { key: 'profile', label: 'Profile', icon: 'UserIcon' },
  { key: 'security', label: 'Security', icon: 'LockClosedIcon' },
];

export default function AccountClient() {
  const [tab, setTab] = useState<AccountTab>('orders');
  const [expandedOrder, setExpandedOrder] = useState<string | null>('ARZ-20260418-4421');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <AppLogo size={36} />
                <span className="text-white font-bold text-xl tracking-tighter">
                  AR<span className="text-lime">ZONE</span>
                </span>
              </div>
            </div>
            <h1 className="text-white text-3xl font-bold tracking-tighter mb-2">Welcome Back</h1>
            <p className="text-[#888888] text-sm">Sign in to view your orders and account details</p>
          </div>
          <div className="bento-card p-8 space-y-5">
            <div className="space-y-1.5">
              <label className="form-label">Email <span className="text-lime">*</span></label>
              <input type="email" className="form-input" placeholder="you@example.com" />
            </div>
            <div className="space-y-1.5">
              <label className="form-label">Password <span className="text-lime">*</span></label>
              <input type="password" className="form-input" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-lime" />
                <span className="text-[#888888]">Remember me</span>
              </label>
              <button type="button" className="text-lime hover:underline text-sm">Forgot password?</button>
            </div>
            <button type="button" onClick={() => setIsLoggedIn(true)} className="lime-btn w-full text-center py-3.5">
              Sign In
            </button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#1A1A1A]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#0A0A0A] px-4 text-[#555555] text-xs uppercase tracking-[0.1em]">or</span>
              </div>
            </div>
            <Link href="/checkout" className="outline-btn w-full text-center py-3 block">
              Continue as Guest
            </Link>
          </div>
          <p className="text-center text-[#555555] text-sm mt-6">
            No account?{' '}
            <button type="button" className="text-lime hover:underline">Create one free</button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span
              className="text-lime text-[0.6875rem] font-bold uppercase tracking-[0.3em] block mb-2"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              // My Account
            </span>
            <h1 className="text-white text-4xl font-bold tracking-tighter">Marcus Webb</h1>
            <p
              className="text-[#555555] text-[0.75rem] uppercase tracking-[0.12em] mt-1"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              marcus.webb@email.com · Member since Feb 2026
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-[#888888] hover:text-white text-sm font-medium transition-colors"
          >
            <Icon name="ArrowRightOnRectangleIcon" size={16} variant="outline" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
          {/* Sidebar */}
          <div className="bento-card p-3 h-fit lg:sticky lg:top-28">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => setTab(link.key)}
                className={`account-nav-link w-full text-left ${tab === link.key ? 'active' : ''}`}
              >
                <Icon name={link.icon as Parameters<typeof Icon>[0]['name']} size={16} variant="outline" />
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-[#1A1A1A]">
              <Link href="/products" className="account-nav-link w-full text-left flex">
                <Icon name="ShoppingBagIcon" size={16} variant="outline" />
                Shop Products
              </Link>
              <Link href="/checkout" className="account-nav-link w-full text-left flex">
                <Icon name="ShoppingCartIcon" size={16} variant="outline" />
                View Cart
              </Link>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-4">
            {/* Orders Tab */}
            {tab === 'orders' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-white font-semibold text-xl tracking-tight">Order History</h2>
                  <span
                    className="text-[#555555] text-[0.6875rem] uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {orders.length} Orders
                  </span>
                </div>

                {orders.map((order) => (
                  <div key={order.id} className="bento-card overflow-hidden">
                    {/* Order header */}
                    <button
                      type="button"
                      onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                      className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-left">
                        <div>
                          <div
                            className="text-lime text-[0.6875rem] font-bold uppercase tracking-[0.1em]"
                            style={{ fontFamily: 'JetBrains Mono, monospace' }}
                          >
                            #{order.id}
                          </div>
                          <div
                            className="text-[#555555] text-[0.625rem] uppercase tracking-[0.1em] mt-0.5"
                            style={{ fontFamily: 'JetBrains Mono, monospace' }}
                          >
                            {order.date}
                          </div>
                        </div>
                        <span
                          className={`status-badge border ${order.statusColor} self-start sm:self-auto`}
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 self-end sm:self-auto">
                        <span className="text-white font-bold text-base">${order.total}</span>
                        <Icon
                          name={expandedOrder === order.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                          size={16}
                          className="text-[#555555]"
                          variant="outline"
                        />
                      </div>
                    </button>

                    {/* Order items */}
                    {expandedOrder === order.id && (
                      <div className="border-t border-[#1A1A1A] p-5 space-y-4">
                        {order.items.map((item) => (
                          <div key={item.name} className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#0D0D0D] border border-[#1A1A1A] flex-shrink-0 overflow-hidden">
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
                                {item.variant}
                              </div>
                            </div>
                            <div className="text-white font-bold text-sm">${item.price}</div>
                          </div>
                        ))}
                        <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#1A1A1A]">
                          <button
                            type="button"
                            className="lime-btn text-[0.75rem] px-5 py-2.5 text-center"
                          >
                            Track Shipment
                          </button>
                          <button
                            type="button"
                            className="outline-btn text-[0.75rem] px-5 py-2.5 text-center"
                          >
                            Reorder
                          </button>
                          <button
                            type="button"
                            className="text-[#888888] hover:text-white text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-colors px-2"
                          >
                            Download Invoice
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Addresses Tab */}
            {tab === 'addresses' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-white font-semibold text-xl tracking-tight">Saved Addresses</h2>
                  <button type="button" className="lime-btn text-[0.75rem] px-4 py-2.5 flex items-center gap-2">
                    <Icon name="PlusIcon" size={14} variant="outline" />
                    Add Address
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="bento-card p-6 space-y-3 relative">
                      {addr.isDefault && (
                        <span
                          className="absolute top-4 right-4 text-lime text-[0.625rem] font-bold uppercase tracking-[0.1em] border border-lime/30 px-2 py-0.5"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          Default
                        </span>
                      )}
                      <div className="flex items-center gap-2">
                        <Icon name="MapPinIcon" size={16} className="text-lime" variant="outline" />
                        <span
                          className="text-[#888888] text-[0.6875rem] font-bold uppercase tracking-[0.1em]"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          {addr.label}
                        </span>
                      </div>
                      <div className="text-white text-sm font-semibold">{addr.name}</div>
                      <div className="text-[#888888] text-sm font-light leading-relaxed">
                        {addr.line1}
                        {addr.line2 && <>, {addr.line2}</>}
                        <br />
                        {addr.city}, {addr.state} {addr.zip}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button type="button" className="text-[#888888] hover:text-white text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-colors">
                          Edit
                        </button>
                        {!addr.isDefault && (
                          <>
                            <span className="text-[#333333]">·</span>
                            <button type="button" className="text-[#888888] hover:text-lime text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-colors">
                              Set Default
                            </button>
                            <span className="text-[#333333]">·</span>
                            <button type="button" className="text-[#888888] hover:text-red-400 text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-colors">
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {tab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-white font-semibold text-xl tracking-tight">Profile Information</h2>
                <div className="bento-card p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="form-label">First Name</label>
                      <input type="text" defaultValue="Marcus" className="form-input" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="form-label">Last Name</label>
                      <input type="text" defaultValue="Webb" className="form-input" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="form-label">Email Address</label>
                    <input type="email" defaultValue="marcus.webb@email.com" className="form-input" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" defaultValue="+1 (512) 555-0183" className="form-input" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="form-label">Gaming Handle</label>
                    <input type="text" defaultValue="m.webb_gg" className="form-input" />
                  </div>
                  <div className="pt-2">
                    <button type="button" className="lime-btn">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Preferences */}
                <div className="bento-card p-8 space-y-5">
                  <h3 className="text-white font-semibold text-base tracking-tight">Communication Preferences</h3>
                  {[
                    { id: 'pref-drops', label: 'New product drops', checked: true },
                    { id: 'pref-deals', label: 'Exclusive deals & promotions', checked: true },
                    { id: 'pref-news', label: 'Arzone newsletter', checked: false },
                    { id: 'pref-order', label: 'Order status updates', checked: true },
                  ].map((pref) => (
                    <label key={pref.id} className="flex items-center justify-between cursor-pointer group">
                      <span className="text-[#888888] text-sm group-hover:text-white transition-colors">{pref.label}</span>
                      <div className="relative">
                        <input type="checkbox" defaultChecked={pref.checked} className="sr-only peer" id={pref.id} />
                        <div className="w-10 h-5 bg-[#1A1A1A] rounded-full peer-checked:bg-lime transition-colors" />
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-black rounded-full transition-all peer-checked:translate-x-5" />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Security Tab */}
            {tab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-white font-semibold text-xl tracking-tight">Security Settings</h2>
                <div className="bento-card p-8 space-y-5">
                  <h3 className="text-white font-semibold text-base tracking-tight">Change Password</h3>
                  <div className="space-y-1.5">
                    <label className="form-label">Current Password</label>
                    <input type="password" className="form-input" placeholder="••••••••" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="form-label">New Password</label>
                    <input type="password" className="form-input" placeholder="••••••••" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="form-label">Confirm New Password</label>
                    <input type="password" className="form-input" placeholder="••••••••" />
                  </div>
                  <button type="button" className="lime-btn">Update Password</button>
                </div>

                <div className="bento-card p-8 space-y-5">
                  <h3 className="text-white font-semibold text-base tracking-tight">Two-Factor Authentication</h3>
                  <p className="text-[#888888] text-sm font-light leading-relaxed">
                    Add an extra layer of security to your account. When enabled, you&apos;ll be required to enter a verification code in addition to your password.
                  </p>
                  <div className="flex items-center justify-between p-4 border border-[#1A1A1A] bg-[#0D0D0D]">
                    <div className="flex items-center gap-3">
                      <Icon name="ShieldCheckIcon" size={20} className="text-[#555555]" variant="outline" />
                      <div>
                        <div className="text-white text-sm font-semibold">Authenticator App</div>
                        <div
                          className="text-[#555555] text-[0.625rem] uppercase tracking-[0.1em]"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          Not Enabled
                        </div>
                      </div>
                    </div>
                    <button type="button" className="outline-btn text-[0.75rem] px-4 py-2">Enable</button>
                  </div>
                </div>

                <div className="bento-card p-8 space-y-5 border-red-900/20">
                  <h3 className="text-white font-semibold text-base tracking-tight">Danger Zone</h3>
                  <p className="text-[#888888] text-sm font-light leading-relaxed">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <button
                    type="button"
                    className="border border-red-900/40 text-red-400 hover:bg-red-900/10 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] px-5 py-2.5 transition-all"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}