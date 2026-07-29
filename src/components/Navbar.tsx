'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Visit Us', href: '#location' },
  { name: 'Contact', href: '#booking' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative h-12 w-12 rounded-full border border-[#D4AF37]/50 p-1 transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <Image
              src="/logo.svg"
              alt="SHYN Signature Salon Monogram Logo"
              width={48}
              height={48}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-widest text-[#F7F7F7] sm:text-xl">
              SHYN
            </span>
            <span className="text-[9px] font-medium tracking-[0.25em] text-[#D4AF37] uppercase">
              Signature Salon
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium tracking-wider text-[#F7F7F7]/80 transition-colors duration-300 hover:text-[#D4AF37] group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] to-[#FBF0B9] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="#booking"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] p-[1px] font-medium text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0F0F0F] px-5 py-2.5 text-[#D4AF37] transition-all duration-300 group-hover:bg-transparent group-hover:text-[#0F0F0F] font-semibold">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#1B1B1B]/80 text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] lg:hidden"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Fullscreen Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[995] flex flex-col justify-between bg-[#0F0F0F]/98 px-6 pt-24 pb-10 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center pb-4 border-b border-[#D4AF37]/20">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  Navigation
                </span>
                <span className="text-xs text-[#F7F7F7]/50">
                  SHYN UNISEX SALON
                </span>
              </div>

              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between font-heading text-2xl font-semibold text-[#F7F7F7] transition-colors hover:text-[#D4AF37]"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:text-[#D4AF37]" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Info & CTA */}
            <div className="flex flex-col gap-4 border-t border-[#D4AF37]/20 pt-6">
              <Link
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-[#0F0F0F] shadow-lg"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>

              <div className="flex items-center justify-between text-xs text-[#F7F7F7]/60 pt-2">
                <span>Erode, Tamil Nadu</span>
                <a
                  href="tel:+916382748121"
                  className="flex items-center gap-1.5 text-[#D4AF37]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +91 63827 48121
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
