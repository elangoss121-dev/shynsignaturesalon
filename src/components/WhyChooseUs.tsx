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
    <section className="relative bg-[#0F0F0F] luxury-section overflow-hidden border-t border-[#D4AF37]/10">
      {/* Subtle Background Mesh Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="luxury-container">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
            The SHYN Difference
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-heading text-[34px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15]"
          >
            Why Choose <span className="text-gold-gradient">SHYN Signature</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-base lg:text-lg text-[#F7F7F7]/75 leading-relaxed"
          >
            We raise the standard of salon care by pairing world-class expertise with unforgettable luxury hospitality.
          </motion.p>
        </div>

        {/* Consistent 2-Column Desktop Grid / 1-Column Mobile Grid, 32px-40px Gap */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card relative flex flex-col justify-between p-8 sm:p-9 rounded-[24px]"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#1B1B1B] to-[#0F0F0F] text-[#D4AF37] shadow-lg group-hover:border-[#D4AF37]">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-bold text-[#F7F7F7]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#F7F7F7]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Perk checklist */}
                <div className="mt-8 pt-6 border-t border-[#D4AF37]/15">
                  <ul className="space-y-3">
                    {item.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-xs text-[#F7F7F7]/85">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
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
