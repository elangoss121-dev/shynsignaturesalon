'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, MessageCircle, Heart, ArrowUp } from 'lucide-react';

const footerNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services Menu', href: '#services' },
  { name: 'Treatment Pricing', href: '#pricing' },
  { name: 'Master Stylists', href: '#team' },
  { name: 'Salon Gallery', href: '#gallery' },
  { name: 'Guest Reviews', href: '#reviews' },
  { name: 'Visit Location', href: '#location' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/916382748121?text=${encodeURIComponent(
    'Hello SHYN Signature Salon, I would like to book an appointment.'
  )}`;

  return (
    <footer className="relative bg-[#0F0F0F] pt-[100px] pb-[60px] border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Background Ambient Radial Overlay */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="luxury-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 pb-16 border-b border-[#D4AF37]/15">
          {/* Column 1: Brand Info & Official Seal Logo (5 Cols) */}
          <div className="lg:col-span-5">
            <Link href="#home" className="group inline-flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#D4AF37]/70 p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                <Image
                  src="/logo.png"
                  alt="SHYN Unisex Signature Salon Official Seal Logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover rounded-full filter contrast-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-widest text-[#F7F7F7]">
                  SHYN
                </span>
                <span className="text-[10px] font-medium tracking-[0.3em] text-[#D4AF37] uppercase">
                  Signature Salon
                </span>
              </div>
            </Link>

            <p className="mt-6 text-sm text-[#F7F7F7]/80 leading-relaxed max-w-[680px]">
              Erode&apos;s premier unisex luxury beauty destination specializing in precision hair styling, Korean scalp hydro therapy, advanced skin care, and bespoke bridal makeovers.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/shynsignaturesalon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#1B1B1B] text-[#D4AF37] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Concierge"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#1B1B1B] text-[#25D366] transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-6">
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-[#F7F7F7]/75 transition-colors hover:text-[#D4AF37]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours (4 Cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-6">
              Salon Concierge
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs text-[#F7F7F7]/80 leading-relaxed">
                <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  SHYN Signature Salon, EVN Road, Periyar Nagar, Erode, Tamil Nadu 638001
                </span>
              </li>
              <li className="flex items-center gap-3 text-xs text-[#D4AF37] font-semibold">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+916382748121" className="hover:underline">
                  +91 63827 48121
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs text-[#F7F7F7]/80">
                <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Open Everyday: 9:30 AM – 8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F7F7]/60">
          <p>© {new Date().getFullYear()} SHYN Signature Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[#D4AF37]">
              Crafted with <Heart className="h-3.5 w-3.5 fill-[#D4AF37]" /> for Luxury Beauty
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#1B1B1B] text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
