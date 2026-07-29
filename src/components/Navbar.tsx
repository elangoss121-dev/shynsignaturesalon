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
  { name: 'Pricing', href: '#pricing' },
  { name: 'Team', href: '#team' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Visit Us', href: '#location' },
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[900] h-[88px] transition-all duration-500 flex items-center ${
        isScrolled
          ? 'glass-nav shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent'
      }`}
    >
      <div className="luxury-container w-full flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-3.5 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative h-13 w-13 overflow-hidden rounded-full border-2 border-[#D4AF37]/70 p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
            <Image
              src="/logo.png"
              alt="SHYN Unisex Signature Salon Official Seal Logo"
              width={56}
              height={56}
              priority
              className="h-full w-full object-cover rounded-full filter contrast-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold tracking-widest text-[#F7F7F7]">
              SHYN
            </span>
            <span className="text-[9px] font-medium tracking-[0.28em] text-[#D4AF37] uppercase">
              Signature Salon
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-xs font-semibold tracking-widest text-[#F7F7F7]/85 transition-colors duration-300 hover:text-[#D4AF37] group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] to-[#FBF0B9] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Desktop CTA Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="#booking"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] p-[1px] text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          >
            <span className="inline-flex h-full items-center gap-2 rounded-full bg-[#0F0F0F] px-6 text-[#D4AF37] transition-all duration-300 group-hover:bg-transparent group-hover:text-[#0F0F0F]">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#1B1B1B]/80 text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] lg:hidden"
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
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[995] flex flex-col justify-between bg-[#0F0F0F]/98 px-6 pt-28 pb-10 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center pb-4 border-b border-[#D4AF37]/20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Navigation Menu
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
                  transition={{ delay: 0.1 + idx * 0.04, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between font-heading text-2xl font-bold text-[#F7F7F7] transition-colors hover:text-[#D4AF37]"
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
                className="btn-whatsapp w-full text-center"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
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
