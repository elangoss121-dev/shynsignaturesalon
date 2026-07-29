'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Sparkles } from 'lucide-react';

const masterStylists = [
  {
    name: 'Vikram Sethi',
    role: 'Master Hairstylist & Director',
    experience: '12+ Years Experience',
    specialty: 'Precision Cut, Balayage & Hair Botox Filler',
    image: '/images/stylist-1.png',
  },
  {
    name: 'Min-seo Park',
    role: 'Korean Scalp Hydro Specialist',
    experience: '9+ Years Experience',
    specialty: 'Korean Hair Spa Therapy & Micro-Scalp Detox',
    image: '/images/stylist-2.png',
  },
  {
    name: 'Ananya Sharma',
    role: 'Senior Bridal Makeup Artist',
    experience: '10+ Years Experience',
    specialty: 'HD Airbrush Bridal Makeup & Saree Draping',
    image: '/images/bridal-makeup.png',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative bg-[#0F0F0F] luxury-section border-t border-[#D4AF37]/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="luxury-container">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            <Users className="h-4 w-4" />
            Master Craftsmen
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-heading text-[34px] sm:text-[42px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15]"
          >
            Meet Our <span className="text-gold-gradient">Master Stylists</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base lg:text-lg text-[#F7F7F7]/80 leading-relaxed max-w-[680px] mx-auto"
          >
            Our team of 15+ senior hair masters and scalp therapists are trained in international beauty rituals.
          </motion.p>
        </div>

        {/* 3 Stylist Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8">
          {masterStylists.map((stylist, idx) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group relative flex flex-col justify-between p-7 rounded-[24px]"
            >
              <div>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-[#D4AF37]/30">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-70" />

                  <div className="absolute top-4 left-4 rounded-full bg-[#0F0F0F]/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-md">
                    {stylist.experience}
                  </div>
                </div>

                <h3 className="mt-6 font-heading text-2xl font-bold text-[#F7F7F7] group-hover:text-[#D4AF37] transition-colors">
                  {stylist.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#D4AF37]">
                  {stylist.role}
                </p>

                <div className="mt-4 flex items-start gap-2 text-xs text-[#F7F7F7]/75">
                  <Sparkles className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Specialty: {stylist.specialty}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
