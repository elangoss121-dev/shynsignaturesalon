'use client';

import { motion } from 'framer-motion';
import { Sparkles, Award, Gem, Coins, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Sparkles,
    title: 'Premium Ambience',
    description:
      'Immerse yourself in a serene, temperature-controlled, ultra-hygienic private suite designed for complete relaxation.',
    perks: ['Sanitised Workstations', 'Aromatherapy Ambient Air', 'Private Styling Suites'],
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description:
      'Our senior hair masters and skincare aestheticians are trained in global cut, colour, and scalp therapy techniques.',
    perks: ['Master Stylists', 'Continuous Hair Craft Training', 'Personalised Consultations'],
  },
  {
    icon: Gem,
    title: 'Luxury Products',
    description:
      'We exclusively work with world-leading beauty brands including Dyson, L’Oréal Professionnel, and organic scalp elixirs.',
    perks: ['No Harsh Chemicals', 'Authentic Global Brands', 'Scalp-Safe Formulations'],
  },
  {
    icon: Coins,
    title: 'Affordable Luxury',
    description:
      'Experience ₹10 Lakh salon aesthetic, high-end hospitality, and top-tier treatments priced transparently for Erode.',
    perks: ['Transparent Pricing', 'Value Package Offers', 'Zero Hidden Fees'],
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#0F0F0F] py-24 sm:py-32 overflow-hidden border-t border-[#D4AF37]/10">
      {/* Subtle Background Mesh Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]"
          >
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
            The SHYN Difference
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-extrabold text-[#F7F7F7] sm:text-4xl md:text-5xl"
          >
            Why Choose <span className="text-gold-gradient">SHYN Signature</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#F7F7F7]/70"
          >
            We raise the standard of salon care by pairing world-class expertise with unforgettable luxury hospitality.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass-card relative flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#1B1B1B] to-[#0F0F0F] text-[#D4AF37] shadow-lg group-hover:border-[#D4AF37]">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold text-[#F7F7F7]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs text-[#F7F7F7]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Perk checklist */}
                <div className="mt-6 pt-6 border-t border-[#D4AF37]/15">
                  <ul className="space-y-2">
                    {item.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2 text-[11px] text-[#F7F7F7]/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
