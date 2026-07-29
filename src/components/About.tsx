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
    <section id="about" className="relative bg-[#0F0F0F] py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Luxury Image with Floating Accent Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-6"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] lg:max-w-none">
              <Image
                src="/images/about-stylist.png"
                alt="SHYN Signature Salon Stylist Crafting Hair Masterpiece"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />

              {/* Gold Border Highlight Frame */}
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-[#D4AF37]/20" />
            </div>

            {/* Floating Luxury Experience Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-2 sm:right-6 flex items-center gap-4 rounded-2xl border border-[#D4AF37]/40 bg-[#1B1B1B]/95 p-4 shadow-2xl backdrop-blur-xl max-w-xs"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-[#0F0F0F] shadow-lg">
                <ShieldCheck className="h-6 w-6 stroke-[2.5]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  Guaranteed Luxury
                </p>
                <p className="text-xs text-[#F7F7F7]/80">
                  100% Sanitized & Personalised Styling Suites
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
              About SHYN Signature Salon
            </div>

            <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#F7F7F7] sm:text-4xl md:text-5xl leading-tight">
              Where Beauty Meets <span className="text-gold-gradient">Perfection</span>
            </h2>

            <p className="mt-6 text-base text-[#F7F7F7]/90 leading-relaxed sm:text-lg">
              At <strong className="text-[#D4AF37]">SHYN Signature Salon</strong>, beauty meets luxury. Every guest enjoys personalised beauty experiences delivered by skilled professionals using premium products in a calm and hygienic environment.
            </p>

            <p className="mt-4 text-sm text-[#F7F7F7]/70 leading-relaxed">
              Located on EVN Road in Erode, we blend international hair care rituals like our signature <strong>Korean Hair Spa</strong> with advanced skincare treatments, precision haircuts, and flawless bridal transformations.
            </p>

            {/* Statistics Cards Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                    className="glass-card p-4 sm:p-5 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-2xl font-black text-gold-gradient sm:text-3xl">
                        {stat.value}
                      </span>
                      <IconComponent className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="mt-2 text-xs font-bold uppercase tracking-wider text-[#F7F7F7]">
                      {stat.label}
                    </h3>
                    <p className="text-[11px] text-[#F7F7F7]/60 mt-0.5">
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
