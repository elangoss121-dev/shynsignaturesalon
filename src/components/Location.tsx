'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Sparkles } from 'lucide-react';

export default function Location() {
  const mapLink = 'https://maps.app.goo.gl/MddbA8Tpy49nztn68';
  const whatsappUrl = `https://wa.me/916382748121?text=${encodeURIComponent(
    'Hello SHYN Signature Salon, I would like directions / inquiries about visiting the salon.'
  )}`;

  return (
    <section id="location" className="relative bg-[#0F0F0F] py-24 sm:py-32 border-t border-[#D4AF37]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]"
          >
            <MapPin className="h-4 w-4" />
            Visit Our Salon
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-extrabold text-[#F7F7F7] sm:text-4xl md:text-5xl"
          >
            Location & <span className="text-gold-gradient">Directions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#F7F7F7]/70"
          >
            Conveniently situated on EVN Road, Periyar Nagar in Erode. Ample parking & private entrance.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 items-stretch">
          {/* Address Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card flex flex-col justify-between p-8 sm:p-10 lg:col-span-5"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-[#0F0F0F] shadow-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#F7F7F7]">
                    SHYN Signature Salon
                  </h3>
                  <p className="text-xs text-[#D4AF37]">
                    EVN Road, Erode
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <Navigation className="h-5 w-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F7F7F7]">
                      Full Address
                    </h4>
                    <p className="mt-1 text-sm text-[#F7F7F7]/80 leading-relaxed">
                      SHYN Signature Salon, EVN Road, Periyar Nagar, Erode, Tamil Nadu 638001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F7F7F7]">
                      Working Hours
                    </h4>
                    <p className="mt-1 text-sm text-[#F7F7F7]/80">
                      Monday — Sunday: 9:30 AM – 8:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Sparkles className="h-5 w-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F7F7F7]">
                      Google Business Rating
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-[#D4AF37]">
                      ★ 5.0 Rating (24+ Top Guest Reviews)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-10 flex flex-col gap-3 pt-6 border-t border-[#D4AF37]/20">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] py-3 text-xs font-bold uppercase tracking-wider text-[#0F0F0F] shadow-lg transition-all hover:scale-[1.02]"
              >
                <Navigation className="h-4 w-4" />
                <span>Open Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+916382748121"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#1B1B1B] py-3 text-xs font-semibold text-[#F7F7F7] transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#1B1B1B] py-3 text-xs font-semibold text-[#25D366] transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Embedded Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative min-h-[400px] overflow-hidden rounded-2xl border border-[#D4AF37]/40 shadow-2xl"
          >
            <iframe
              title="SHYN Signature Salon Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.89785868825!2d77.71720000000001!3d11.341000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f0000000001%3A0x0!2zMTHCsDIwJzI3LjYiTiA3N8KwNDMnMDEuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
