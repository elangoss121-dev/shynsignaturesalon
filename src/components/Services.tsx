'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scissors,
  Sparkles,
  Droplets,
  Heart,
  UserCheck,
  CheckCircle2,
  MessageCircle,
  Clock,
  ChevronRight,
} from 'lucide-react';

const serviceCategories = ['All Services', 'Hair Crafts', 'Korean Spa', 'Skin & Facials', 'Bridal', 'Gentlemen'];

const servicesData = [
  {
    id: 'korean-spa',
    title: 'Korean Scalp Hydro Spa',
    category: 'Korean Spa',
    duration: '60 Mins',
    price: 'Starting from ₹1,499',
    description: 'Deep micro-scalp camera diagnosis, organic exfoliation detox, nano-mist hydro steam, and acupressure scalp massage.',
    highlights: ['Deep Follicle Unclogging', 'Nano-Steam Moisture Infusion', 'Peptide Hydro-Gloss Finish'],
    icon: Droplets,
    featured: true,
  },
  {
    id: 'hair-botox',
    title: 'Hair Botox Fibre Filler',
    category: 'Hair Crafts',
    duration: '90 Mins',
    price: 'Starting from ₹2,999',
    description: 'Advanced amino-acid fibre reconstruction that seals damaged cuticles, eliminating 95% frizz with extreme shine.',
    highlights: ['Cuticle Repair Therapy', 'Anti-Frizz Moisture Lock', 'Dyson Blowout Finish'],
    icon: Sparkles,
    featured: true,
  },
  {
    id: 'balayage',
    title: 'Balayage & Hair Colouring',
    category: 'Hair Crafts',
    duration: '90 Mins',
    price: 'Starting from ₹2,499',
    description: 'Hand-painted dimensional highlights using ammonia-free global bond-builder formulations tailored to your skin tone.',
    highlights: ['Ammonia-Free Formulations', 'Custom Shade Consultation', 'Shine Sealing Gloss Rinse'],
    icon: Scissors,
    featured: false,
  },
  {
    id: 'keratin',
    title: 'Keratin Smoothing System',
    category: 'Hair Crafts',
    duration: '120 Mins',
    price: 'Starting from ₹3,499',
    description: 'Long-lasting protein smoothing system that transforms unruly frizzy hair into manageable, silky soft tresses.',
    highlights: ['Long-Lasting Frizz Control', 'Protein Infusion System', 'Complimentary Post-Care Guide'],
    icon: Sparkles,
    featured: false,
  },
  {
    id: 'bridal-makeup',
    title: 'HD Royal Bridal Makeover',
    category: 'Bridal',
    duration: 'Bespoke Package',
    price: 'Starting from ₹9,999',
    description: 'Complete HD airbrush bridal makeup, luxury hair styling, saree draping, and pre-wedding trial session.',
    highlights: ['HD Airbrush Finish', 'Saree & Dupatta Draping', 'Pre-Wedding Trial Included'],
    icon: Heart,
    featured: true,
  },
  {
    id: 'skin-facial',
    title: 'Luminous Hydra-Facial',
    category: 'Skin & Facials',
    duration: '60 Mins',
    price: 'Starting from ₹1,999',
    description: 'Deep pore vacuum extraction, hyaluronic acid serum infusion, and LED light therapy for instantaneous glass skin glow.',
    highlights: ['Vacuum Pore Extraction', 'Hyaluronic Acid Infusion', 'LED Collagen Boost'],
    icon: Sparkles,
    featured: false,
  },
  {
    id: 'men-grooming',
    title: 'Gentlemen Beard & Hair Sculpting',
    category: 'Gentlemen',
    duration: '45 Mins',
    price: 'Starting from ₹499',
    description: 'Precision scissors hair cut, hot towel beard sculpting, scalp wash, and Dyson finish styling for the modern man.',
    highlights: ['Precision Cut & Fade', 'Hot Towel Beard Sculpt', 'Scalp Refresh Massage'],
    icon: UserCheck,
    featured: false,
  },
  {
    id: 'precision-cut',
    title: 'Precision Layered Hair Cut',
    category: 'Hair Crafts',
    duration: '45 Mins',
    price: 'Starting from ₹499',
    description: 'Personalised face-shape analysis, cleansing wash, precision layer cut, and professional Dyson blowout styling.',
    highlights: ['Face-Shape Analysis', 'Conditioning Cleansing Wash', 'Dyson Blowout Style'],
    icon: Scissors,
    featured: false,
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('All Services');

  const filteredServices =
    activeTab === 'All Services'
      ? servicesData
      : servicesData.filter((service) => service.category === activeTab);

  const getWhatsAppLink = (serviceName: string) => {
    const text = `Hello SHYN Signature Salon, I would like to inquire about booking the "${serviceName}". Please share available slots.`;
    return `https://wa.me/916382748121?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="relative bg-[#0F0F0F] luxury-section border-t border-[#D4AF37]/10">
      {/* Background Ambient Radial Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

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
            <Sparkles className="h-4 w-4" />
            Curated Menu
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-heading text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15]"
          >
            Signature <span className="text-gold-gradient">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[16px] sm:text-[18px] text-[#F7F7F7]/80 leading-relaxed max-w-[680px] mx-auto"
          >
            Bespoke beauty, hair, skin, and scalp rituals delivered with world-class precision formulations.
          </motion.p>
        </div>

        {/* Filter Categories Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0F0F0F] font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'border border-[#D4AF37]/30 bg-[#1B1B1B]/70 text-[#F7F7F7]/80 hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12-Column Responsive Grid (6 Cols per Card Desktop) */}
        <motion.div layout className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <AnimatePresence>
            {filteredServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`glass-card group relative flex flex-col justify-between p-8 rounded-[24px] lg:col-span-6 ${
                    service.featured ? 'border-2 border-[#D4AF37]/40 shadow-xl' : ''
                  }`}
                >
                  {service.featured && (
                    <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0F0F0F]">
                      Featured Highlight
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#1B1B1B] text-[#D4AF37] shadow-lg">
                        <IconComp className="h-7 w-7" />
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    <span className="mt-6 block text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      {service.category}
                    </span>

                    <h3 className="mt-1 font-heading text-[24px] sm:text-[30px] font-bold text-[#F7F7F7] group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#F7F7F7]/75 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Highlights Checklist */}
                    <div className="mt-6 space-y-2.5 border-t border-[#D4AF37]/15 pt-5">
                      {service.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-xs text-[#F7F7F7]/85">
                          <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Inquiry CTA (58px Button Height Standard) */}
                  <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#D4AF37]/15 gap-4">
                    <span className="font-heading text-lg font-bold text-gold-gradient shrink-0">
                      {service.price}
                    </span>

                    <a
                      href={getWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Book ${service.title} via WhatsApp`}
                      className="btn-luxury-secondary h-[58px] min-h-[58px] text-xs shrink-0"
                    >
                      <MessageCircle className="h-4 w-4 fill-current" />
                      <span>Book on WhatsApp</span>
                      <ChevronRight className="h-4 w-4" />
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
