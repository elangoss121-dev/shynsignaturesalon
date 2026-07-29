'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, Sparkles, Star } from 'lucide-react';

const stats = [
  {
    icon: Star,
    value: '5.0',
    label: 'Google Rating',
    sublabel: '24+ Verified Reviews',
  },
  {
    icon: Sparkles,
    value: '100%',
    label: 'Premium Ambience',
    sublabel: 'Calm & Hygienic',
  },
  {
    icon: Users,
    value: '15+',
    label: 'Professional Stylists',
    sublabel: 'Internationally Trained',
  },
  {
    icon: Award,
    value: '5★',
    label: 'Luxury Experience',
    sublabel: 'Dyson & L’Oréal Products',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#0F0F0F] luxury-section overflow-hidden border-t border-[#D4AF37]/10">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="luxury-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-[#D4AF37]/30 shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
              <Image
                src="/images/about-stylist.png"
                alt="SHYN Signature Salon Master Stylist"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />
              <div className="pointer-events-none absolute inset-4 rounded-[18px] border border-[#D4AF37]/20" />
            </div>

            {/* Floating Luxury Experience Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-2 sm:right-6 flex items-center gap-4 rounded-[20px] border border-[#D4AF37]/40 bg-[#1B1B1B]/95 p-5 shadow-2xl backdrop-blur-xl max-w-xs"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-[#0F0F0F] shadow-lg shrink-0">
                <ShieldCheck className="h-7 w-7 stroke-[2.5]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Guaranteed Luxury
                </p>
                <p className="text-xs text-[#F7F7F7]/80 mt-0.5">
                  100% Sanitized & Personalised Styling Suites
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Concise Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
              About SHYN Signature Salon
            </div>

            <h2 className="mt-5 font-heading text-[34px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15]">
              Where Beauty Meets <span className="text-gold-gradient">Perfection</span>
            </h2>

            {/* Concise Copy */}
            <p className="mt-7 max-w-[600px] text-base lg:text-lg text-[#F7F7F7]/85 leading-relaxed font-normal">
              At <strong className="text-[#D4AF37]">SHYN Signature Salon</strong>, every guest enjoys bespoke beauty rituals delivered by master stylists using premium global formulations in a calm, hygienic sanctuary.
            </p>

            {/* Statistics Cards Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card p-6 text-left rounded-[20px]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-3xl font-bold text-gold-gradient">
                        {stat.value}
                      </span>
                      <IconComponent className="h-6 w-6 text-[#D4AF37]" />
                    </div>
                    <h3 className="mt-3 text-xs font-bold uppercase tracking-wider text-[#F7F7F7]">
                      {stat.label}
                    </h3>
                    <p className="text-[11px] text-[#F7F7F7]/60 mt-1">
                      {stat.sublabel}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
