'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';

const footerNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Korean Hair Spa', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
  { name: 'Book Appointment', href: '#booking' },
];

const serviceHighlights = [
  'Korean Hair Spa',
  'Precision Hair Cut',
  'Balayage & Hair Colour',
  'Hair Botox & Keratin',
  'Facial & Skin Hydration',
  'HD Bridal Makeover',
  'Gentlemen Grooming',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0F0F0F] pt-[100px] pb-[60px] border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="luxury-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 pb-16 border-b border-[#D4AF37]/15">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4">
            <Link href="#home" className="flex items-center gap-3.5">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#D4AF37]/70 p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Image
                  src="/logo.png"
                  alt="SHYN Unisex Signature Salon Logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover rounded-full filter contrast-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-widest text-[#F7F7F7]">
                  SHYN
                </span>
                <span className="text-[9px] font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
                  Signature Salon
                </span>
              </div>
            </Link>

            <p className="mt-5 text-sm text-[#F7F7F7]/70 leading-relaxed max-w-sm">
              Erode’s premier luxury unisex salon offering Korean Hair Spa, precision haircutting, advanced skincare therapies, and high-definition bridal styling.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/shynsignaturesalon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#1B1B1B] text-[#D4AF37] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>

              <a
                href="https://maps.app.goo.gl/MddbA8Tpy49nztn68"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#1B1B1B] text-[#D4AF37] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
              >
                <MapPin className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/916382748121"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#1B1B1B] text-[#25D366] transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-[#F7F7F7]/70 transition-colors hover:text-[#D4AF37]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Signature Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceHighlights.map((svc) => (
                <li key={svc} className="text-xs text-[#F7F7F7]/70">
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Salon Hours & Location */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Hours & Info
            </h3>

            <div className="mt-5 space-y-4 text-xs text-[#F7F7F7]/70">
              <div>
                <p className="font-bold text-[#F7F7F7]">Opening Hours</p>
                <p className="mt-1">Mon – Sun: 9:30 AM – 8:30 PM</p>
              </div>

              <div>
                <p className="font-bold text-[#F7F7F7]">Address</p>
                <p className="mt-1">EVN Road, Periyar Nagar, Erode, TN</p>
              </div>

              <div>
                <p className="font-bold text-[#F7F7F7]">Direct Phone</p>
                <a href="tel:+916382748121" className="mt-1 block text-[#D4AF37] font-semibold">
                  +91 63827 48121
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F7F7]/50">
          <p>© {new Date().getFullYear()} SHYN Signature Salon. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#1B1B1B] px-5 py-2.5 text-xs font-semibold text-[#D4AF37] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
