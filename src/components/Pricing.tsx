'use client';

import { motion } from 'framer-motion';
import { Tag, CheckCircle2, MessageCircle } from 'lucide-react';

const pricingList = [
  {
    service: 'Korean Hair Spa',
    price: '₹1,499',
    unit: 'Starting from',
    duration: '60 Mins Therapy',
    popular: true,
    inclusions: [
      'Micro-Scalp Camera Detox',
      'Nano-Mist Steam Hydro Therapy',
      'Acupressure Scalp & Neck Massage',
      'Korean Hydro-Gloss Shine Mask',
    ],
  },
  {
    service: 'Hair Botox Fibre Filler',
    price: '₹2,999',
    unit: 'Starting from',
    duration: '90 Mins Therapy',
    popular: false,
    inclusions: [
      'Intensive Fibre Reconstruction',
      'Damage & Cuticle Sealing',
      'Moisture Lock & Anti-Frizz',
      'Dyson Heat Styling Polish',
    ],
  },
  {
    service: 'Keratin Smoothing',
    price: '₹3,499',
    unit: 'Starting from',
    duration: '120 Mins System',
    popular: true,
    inclusions: [
      'Protein Infusion Smoothing',
      'Long-Lasting Frizz Control',
      'Manageable Silky Finish',
      'Complimentary Post-Care Guide',
    ],
  },
  {
    service: 'Balayage & Hair Colour',
    price: '₹2,499',
    unit: 'Starting from',
    duration: '90 Mins Custom',
    popular: false,
    inclusions: [
      'Ammonia-Free Global Tint',
      'Dimensional Balayage / Ombre',
      'Bond Builder Protection',
      'Shine Sealing Gloss Rinse',
    ],
  },
  {
    service: 'HD Bridal Makeup Package',
    price: '₹9,999',
    unit: 'Starting from',
    duration: 'Bespoke Package',
    popular: true,
    inclusions: [
      'HD Airbrush Makeover & Trial',
      'Bespoke Hair Styling & Draping',
      'Luminous Skin Hydration Prep',
      'Full Bridal Accessories Placement',
    ],
  },
  {
    service: 'Precision Hair Cut & Style',
    price: '₹499',
    unit: 'Starting from',
    duration: '45 Mins Craft',
    popular: false,
    inclusions: [
      'Face-Shape Stylist Consultation',
      'Scalp Cleansing Wash & Conditioning',
      'Precision Scissors Cut',
      'Dyson Blowout & Finish',
    ],
  },
];

export default function Pricing() {
  const getWhatsAppLink = (serviceName: string, price: string) => {
    const text = `Hello SHYN Signature Salon, I would like to inquire about booking the "${serviceName}" (${price}). Please let me know available slots.`;
    return `https://wa.me/916382748121?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="relative bg-[#0F0F0F] luxury-section border-t border-[#D4AF37]/10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

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
            <Tag className="h-4 w-4" />
            Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-heading text-[34px] sm:text-[42px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15]"
          >
            Signature Treatment <span className="text-gold-gradient">Pricing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base lg:text-lg text-[#F7F7F7]/80 leading-relaxed max-w-[680px] mx-auto"
          >
            World-class luxury beauty rituals priced transparently. Pre-qualify your slot instantly with our concierge.
          </motion.p>
        </div>

        {/* 12-Column Grid: 6 Services Cards (6 Cols Each Desktop) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pricingList.map((item, idx) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card relative flex flex-col justify-between p-8 rounded-[24px] ${
                item.popular ? 'border-2 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]' : ''
              }`}
            >
              {item.popular && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0F0F0F]">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-[11px] font-medium text-[#D4AF37] uppercase tracking-wider">
                  {item.duration}
                </span>

                <h3 className="mt-2 font-heading text-2xl font-bold text-[#F7F7F7]">
                  {item.service}
                </h3>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-xs text-[#F7F7F7]/60">{item.unit}</span>
                  <span className="font-heading text-3xl font-extrabold text-gold-gradient">
                    {item.price}
                  </span>
                </div>

                {/* Inclusions List */}
                <ul className="mt-6 space-y-3 pt-6 border-t border-[#D4AF37]/15">
                  {item.inclusions.map((inc) => (
                    <li key={inc} className="flex items-center gap-2.5 text-xs text-[#F7F7F7]/85">
                      <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry CTA */}
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/15">
                <a
                  href={getWhatsAppLink(item.service, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Inquire about ${item.service}`}
                  className="btn-luxury-secondary w-full h-[52px] min-h-[52px] text-xs"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
