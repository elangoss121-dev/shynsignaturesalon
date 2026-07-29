'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingActions() {
  const whatsappNumber = '916382748121';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello SHYN Signature Salon, I would like to inquire about booking an appointment.'
  )}`;
  const phoneUrl = `tel:+916382748121`;

  return (
    <div className="fixed bottom-6 right-6 z-[990] flex flex-col items-end gap-4">
      {/* Floating Call Button */}
      <motion.a
        href={phoneUrl}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call SHYN Signature Salon"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#1B1B1B]/90 text-[#F7F7F7] shadow-xl backdrop-blur-md transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
      >
        <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
        <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md bg-[#1B1B1B] px-3 py-1.5 text-xs font-medium text-[#F7F7F7] opacity-0 shadow-lg transition-opacity group-hover:opacity-100 border border-[#D4AF37]/30">
          Call +91 63827 48121
        </span>
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        className="animate-gold-pulse group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-2xl transition-all hover:from-[#D4AF37] hover:to-[#AA7C11]"
      >
        <MessageCircle className="h-7 w-7 fill-current transition-transform group-hover:scale-110" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-[#1B1B1B] px-3 py-1.5 text-xs font-medium text-[#D4AF37] opacity-0 shadow-lg transition-opacity group-hover:opacity-100 border border-[#D4AF37]/30">
          Book Instant WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
