'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scissors,
  Sparkles,
  Palette,
  Droplet,
  Flame,
  Feather,
  Zap,
  Smile,
  Sun,
  Crown,
  Heart,
  UserCheck,
  Calendar,
  Layers,
} from 'lucide-react';

const categories = ['All', 'Hair Rituals', 'Skin & Facial', 'Makeup & Grooming'];

const servicesList = [
  {
    id: 'hair-cut',
    category: 'Hair Rituals',
    name: 'Hair Cut',
    subtitle: 'Precision Styling & Face-Framing Layering',
    icon: Scissors,
    tag: 'Popular',
    description:
      'Customized haircuts crafted by master stylists using face-shape analysis and high-precision techniques.',
  },
  {
    id: 'hair-styling',
    category: 'Hair Rituals',
    name: 'Hair Styling',
    subtitle: 'Dyson Blowouts & Red Carpet Waves',
    icon: Sparkles,
    tag: 'Luxury',
    description:
      'Volume blowouts, sleek straight styles, or glam beach waves styled using Dyson heat-protection tech.',
  },
  {
    id: 'hair-colour',
    category: 'Hair Rituals',
    name: 'Hair Colour',
    subtitle: 'Balayage, Ombre & Global Shades',
    icon: Palette,
    tag: 'Trend',
    description:
      'Ammonia-free global colouring, dimension balayage, and root touchups infused with bond builders.',
  },
  {
    id: 'hair-spa',
    category: 'Hair Rituals',
    name: 'Hair Spa',
    subtitle: 'Deep Conditioning & Scalp Hydration',
    icon: Droplet,
    tag: 'Essential',
    description:
      'Nutrient-rich hair spa treatment that strengthens roots, restores shine, and tames frizz.',
  },
  {
    id: 'korean-hair-spa',
    category: 'Hair Rituals',
    name: 'Korean Hair Spa',
    subtitle: 'Signature Scalp Detox & Hydro Therapy',
    icon: Flame,
    tag: 'Signature ★',
    description:
      'Our iconic Korean scalp detox treatment combining deep cleansing steam, scalp massage, and hair glossing.',
  },
  {
    id: 'hair-botox',
    category: 'Hair Rituals',
    name: 'Hair Botox',
    subtitle: 'Intensive Fibre Reconstruction',
    icon: Feather,
    tag: 'Premium',
    description:
      'Deep filler treatment that repairs damaged cuticles, sealing split ends with intense moisture.',
  },
  {
    id: 'keratin',
    category: 'Hair Rituals',
    name: 'Keratin Treatment',
    subtitle: 'Anti-Frizz Smoothing System',
    icon: Zap,
    tag: 'Bestseller',
    description:
      'Long-lasting keratin smoothing for silky manageable hair that cuts styling time in half.',
  },
  {
    id: 'smoothening',
    category: 'Hair Rituals',
    name: 'Smoothening',
    subtitle: 'Silky Permanent Straightening',
    icon: Layers,
    tag: 'Classic',
    description:
      'Ultra-sleek smoothening process using gentle conditioning formulas for mirror-like shine.',
  },
  {
    id: 'facial',
    category: 'Skin & Facial',
    name: 'Facial',
    subtitle: 'Gold & Diamond Glow Rituals',
    icon: Smile,
    tag: 'Radiance',
    description:
      'Customized facials designed to deep cleanse, hydrate, and restore youthful elasticity to your skin.',
  },
  {
    id: 'skin-care',
    category: 'Skin & Facial',
    name: 'Skin Care',
    subtitle: 'Advanced Aesthetic Therapies',
    icon: Heart,
    tag: 'Custom',
    description:
      'Targeted skincare for hyperpigmentation, acne control, and deep hydration tailored to your skin type.',
  },
  {
    id: 'detan',
    category: 'Skin & Facial',
    name: 'Detan Therapy',
    subtitle: 'Sun Damage Correction',
    icon: Sun,
    tag: 'Quick Glow',
    description:
      'Gentle organic de-tanning mask that instantly removes sun damage and brightens complexions.',
  },
  {
    id: 'cleanup',
    category: 'Skin & Facial',
    name: 'Cleanup',
    subtitle: 'Pore Extraction & Refresh',
    icon: Sparkles,
    tag: 'Express',
    description:
      'Quick pore exfoliation and blackhead extraction for a smooth, matte, rejuvenated face.',
  },
  {
    id: 'bridal-makeup',
    category: 'Makeup & Grooming',
    name: 'Bridal Makeup',
    subtitle: 'HD & Airbrush Luxury Makeovers',
    icon: Crown,
    tag: 'VIP Luxury',
    description:
      'Bespoke bridal packages including trial, HD makeup, saree draping, hairstyling, and body polish.',
  },
  {
    id: 'party-makeup',
    category: 'Makeup & Grooming',
    name: 'Party Makeup',
    subtitle: 'Glamour & Evening Looks',
    icon: Sparkles,
    tag: 'Event Ready',
    description:
      'Luminous makeup styling for cocktail parties, sangeet, anniversaries, and red carpet events.',
  },
  {
    id: 'men-grooming',
    category: 'Makeup & Grooming',
    name: 'Men Grooming',
    subtitle: 'Beard Sculpting & Hair Crafts',
    icon: UserCheck,
    tag: 'Gentlemen',
    description:
      'Precision beard trims, gentlemen haircuts, scalp rejuvenation, and facial grooming in privacy.',
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices =
    activeCategory === 'All'
      ? servicesList
      : servicesList.filter((s) => s.category === activeCategory);

  const getWhatsAppLink = (serviceName: string) => {
    const text = `Hello SHYN Signature Salon, I am interested in booking the "${serviceName}" service. Please let me know available slots.`;
    return `https://wa.me/916382748121?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="relative bg-[#0F0F0F] py-24 sm:py-32 border-t border-[#D4AF37]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]"
          >
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
            Signature Services
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-extrabold text-[#F7F7F7] sm:text-4xl md:text-5xl"
          >
            Tailored Beauty <span className="text-gold-gradient">Rituals</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#F7F7F7]/70"
          >
            Explore our curated menu of hair styling, scalp therapies, advanced skincare, and bridal makeovers.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0F0F0F] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'border border-[#D4AF37]/30 bg-[#1B1B1B]/60 text-[#F7F7F7]/80 hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card group relative flex flex-col justify-between p-6 sm:p-7"
                >
                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#1B1B1B] text-[#D4AF37] transition-colors group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F]">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-[#D4AF37]/30 bg-[#0F0F0F]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 font-heading text-xl font-bold text-[#F7F7F7] group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#D4AF37]/80">
                      {service.subtitle}
                    </p>

                    <p className="mt-3 text-xs text-[#F7F7F7]/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Booking Link */}
                  <div className="mt-6 pt-5 border-t border-[#D4AF37]/15">
                    <a
                      href={getWhatsAppLink(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#1B1B1B] py-2.5 text-xs font-semibold text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Book {service.name}</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
