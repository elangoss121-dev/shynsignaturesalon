'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Phone, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = `https://wa.me/916382748121?text=${encodeURIComponent(
    'Hello SHYN Signature Salon, I would like to book an appointment.'
  )}`;

  return (
    <section
      id="home"
      className="relative flex min-h-[95vh] lg:min-h-screen w-full items-center justify-center overflow-hidden bg-[#0F0F0F] pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Background Luxury Ambient Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="SHYN Signature Salon High End Ambience"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105 filter brightness-[0.38] contrast-125"
        />

        {/* Multi-layered Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-[#0F0F0F]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0F0F0F_85%)] opacity-90" />
      </div>

      {/* Decorative Gold Radial Glow Background Elements */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[150px]" />

      {/* Hero Content Box - Centered Container (1200px max width) */}
      <div className="luxury-container relative z-10 flex flex-col items-center text-center">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#1B1B1B]/80 px-5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)]"
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

        {/* Main Title: 72px Desktop / 42px Mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-heading text-[42px] sm:text-[56px] lg:text-[72px] font-bold tracking-tight text-[#F7F7F7] leading-[1.1]"
        >
          SHYN <span className="text-gold-gradient">SIGNATURE</span> SALON
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xs sm:text-sm md:text-base font-semibold tracking-[0.35em] uppercase text-[#D4AF37]"
        >
          Luxury Hair • Skin • Beauty | Where Beauty Meets Perfection
        </motion.p>

        {/* Concise Luxury Hero Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-[650px] text-[18px] lg:text-[22px] text-[#F7F7F7]/90 leading-relaxed font-normal"
        >
          Experience premier hair styling, Korean scalp hydro therapy, and bespoke luxury beauty in Erode.
        </motion.p>

        {/* HERO CTA BUTTONS - Perfectly Centered & Equal Dimensions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-[48px] flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-[320px] sm:max-w-none mx-auto"
        >
          {/* WhatsApp Book Appointment Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-5 w-5 fill-current shrink-0" />
            <span>Book Appointment</span>
          </a>

          {/* Call Now Button */}
          <a
            href="tel:+916382748121"
            className="btn-gold w-full sm:w-auto transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span>Call Now</span>
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <Link
          href="#about"
          className="group flex flex-col items-center gap-2 text-xs font-medium tracking-widest text-[#D4AF37]/70 transition-colors hover:text-[#D4AF37]"
        >
          <span className="uppercase text-[10px] tracking-[0.2em]">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex h-8 w-5 items-center justify-center rounded-full border border-[#D4AF37]/40 p-1"
          >
            <ChevronDown className="h-4 w-4 text-[#D4AF37]" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
