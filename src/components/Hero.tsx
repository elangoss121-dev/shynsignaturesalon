'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Phone, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = `https://wa.me/916382748121?text=${encodeURIComponent(
    'Hello SHYN Signature Salon, I would like to book an appointment.'
  )}`;

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0F0F0F] pt-20"
    >
      {/* Background Video / Luxury Image Fallback Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="SHYN Signature Salon High End Ambience"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105 filter brightness-75 contrast-110 animate-pulse duration-[10000ms]"
        />

        {/* Multi-layered Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-[#0F0F0F]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0F0F0F_90%)] opacity-80" />
      </div>

      {/* Decorative Gold Radial Glow Background Elements */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[120px]" />

      {/* Hero Content Box */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#1B1B1B]/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        >
          <div className="flex items-center gap-1 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-xs font-semibold tracking-wider text-[#F7F7F7]">
            5.0 Google Rating
          </span>
          <span className="text-[#D4AF37]">•</span>
          <span className="text-xs text-[#D4AF37] font-medium flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> Erode&apos;s Premier Unisex Salon
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 font-heading text-4xl font-extrabold tracking-wider text-[#F7F7F7] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          SHYN <span className="text-gold-gradient">SIGNATURE</span> SALON
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-3 text-sm font-semibold tracking-[0.3em] uppercase text-[#D4AF37] sm:text-base md:text-lg"
        >
          Luxury Hair • Skin • Beauty | Where Beauty Meets Perfection
        </motion.p>

        {/* Descriptive Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-2xl text-base text-[#F7F7F7]/80 leading-relaxed sm:text-lg"
        >
          Experience premium hair styling, Korean Hair Spa, skincare, bridal beauty and professional grooming in Erode. Delivered in an ultra-luxurious, calm and hygienic sanctuary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          {/* WhatsApp Direct CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)]"
          >
            <MessageCircle className="h-5 w-5 fill-current transition-transform group-hover:scale-110" />
            <span>Book on WhatsApp</span>
          </a>

          {/* Call Now CTA */}
          <a
            href="tel:+916382748121"
            className="group relative flex items-center justify-center gap-3 rounded-full border border-[#D4AF37]/50 bg-[#1B1B1B]/70 px-8 py-4 text-sm font-semibold text-[#D4AF37] backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] hover:shadow-[0_10px_25px_rgba(212,175,55,0.3)]"
          >
            <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
            <span>Call Now</span>
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <Link
          href="#about"
          className="group flex flex-col items-center gap-2 text-xs font-medium tracking-widest text-[#D4AF37]/70 transition-colors hover:text-[#D4AF37]"
        >
          <span className="uppercase text-[10px]">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="flex h-8 w-5 items-center justify-center rounded-full border border-[#D4AF37]/40 p-1"
          >
            <ChevronDown className="h-4 w-4 text-[#D4AF37]" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
