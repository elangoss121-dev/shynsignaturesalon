'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Clock, User, Phone, Mail, Sparkles, Send, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'Korean Hair Spa',
  'Hair Cut & Styling',
  'Hair Colour & Balayage',
  'Hair Botox & Keratin',
  'Facial & Skin Care',
  'Bridal Makeup Package',
  'Men Grooming',
  'Other Luxury Service',
];

const perksList = [
  'Instant Manager Slot Confirmation',
  'Personalised Hair & Scalp Consultation',
  '100% Sanitised Private Suites',
  'No Advance Payment Required',
];

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Korean Hair Spa',
    date: '',
    time: '11:00 AM',
    message: '',
  });

  const whatsappTargetNumber = '916382748121';

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello SHYN Signature Salon,

I'd like to book an appointment.

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Service: ${formData.service}
Date: ${formData.date || 'To be confirmed'}
Time: ${formData.time}
Message: ${formData.message || 'None'}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${whatsappTargetNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  const instantWhatsAppUrl = `https://wa.me/${whatsappTargetNumber}?text=${encodeURIComponent(
    'Hello SHYN Signature Salon, I would like to book an instant appointment.'
  )}`;

  return (
    <section id="booking" className="relative bg-[#0F0F0F] luxury-section border-t border-[#D4AF37]/10">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[550px] w-[550px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="luxury-container">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-4"
          >
            <Sparkles className="h-4 w-4" />
            Reserve Your Experience
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[34px] sm:text-[42px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15] mb-6"
          >
            Book An <span className="text-gold-gradient">Appointment</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-lg text-[#F7F7F7]/80 leading-relaxed max-w-[720px] mx-auto mb-[56px]"
          >
            Confirm your slot instantly via WhatsApp or fill our luxury appointment concierge form.
          </motion.p>
        </div>

        {/* 2-Card Equal-Height Layout (Desktop: 420px minmax(0, 1fr) Grid | Mobile: Stacked) */}
        <div className="grid grid-cols-1 min-[900px]:grid-cols-[420px_minmax(0,1fr)] gap-8 min-[900px]:gap-[48px] items-stretch">
          {/* LEFT CARD (Instant WhatsApp Booking) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card flex flex-col justify-between p-6 min-[900px]:p-[36px] rounded-[28px] border border-[#D4AF37]/30 shadow-2xl h-full"
          >
            <div>
              {/* Title & Icon Header */}
              <div className="flex items-center gap-3.5 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-xl shrink-0">
                  <MessageCircle className="h-6 w-6 fill-current" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#F7F7F7]">
                  Instant WhatsApp Booking
                </h3>
              </div>

              {/* Subtitle */}
              <p className="text-xs font-semibold text-[#D4AF37] mb-[20px]">
                Get an immediate confirmation from our salon manager.
              </p>

              {/* Description */}
              <p className="text-sm min-[900px]:text-base text-[#F7F7F7]/85 leading-relaxed font-normal mb-[28px]">
                Connect directly with our salon manager for instant slot confirmation, custom treatment pricing, and bespoke bridal consultations.
              </p>

              {/* Feature List */}
              <div className="space-y-3.5 mb-[28px] border-t border-[#D4AF37]/20 pt-6">
                {perksList.map((perk) => (
                  <div key={perk} className="flex items-center gap-3 text-xs text-[#F7F7F7]/90 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              {/* Working Hours & Direct Line */}
              <div className="space-y-3 border-t border-[#D4AF37]/20 pt-6 mb-8">
                <div className="flex items-center gap-3 text-xs text-[#F7F7F7]/80">
                  <Clock className="h-4 w-4 text-[#D4AF37] shrink-0" />
                  <span>Mon – Sun: 9:30 AM – 8:30 PM</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#D4AF37] font-semibold">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>Direct Line: +91 63827 48121</span>
                </div>
              </div>
            </div>

            {/* Pinned Bottom Green WhatsApp Button */}
            <a
              href={instantWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Instantly on WhatsApp"
              className="mt-auto w-full h-[56px] min-[900px]:h-[60px] rounded-full font-bold text-sm min-[900px]:text-[15px] bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-3 shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-[1.03]"
            >
              <MessageCircle className="h-6 w-6 fill-current shrink-0" />
              <span>Book Instantly on WhatsApp</span>
            </a>
          </motion.div>

          {/* RIGHT CARD (Request an Appointment Form) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card flex flex-col justify-between p-6 min-[900px]:p-[36px] rounded-[28px] border border-[#D4AF37]/30 shadow-2xl h-full"
          >
            <div>
              {/* Title & Header Icon */}
              <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-5 mb-8">
                <div>
                  <h3 className="font-heading text-xl min-[900px]:text-2xl font-bold text-[#F7F7F7]">
                    Request an Appointment
                  </h3>
                  <p className="text-xs font-semibold text-[#D4AF37] mt-1">
                    Share your preferred date and service. We&apos;ll confirm your booking via WhatsApp.
                  </p>
                </div>
                <Calendar className="h-6 w-6 text-[#D4AF37] shrink-0" />
              </div>

              {/* Form Grid */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F7F7F7]/80 mb-[10px]">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        aria-label="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full h-[56px] min-[900px]:h-[58px] rounded-[16px] border border-[#D4AF37]/30 bg-[#0F0F0F]/85 pl-12 pr-4 text-sm text-[#F7F7F7] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F7F7F7]/80 mb-[10px]">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        aria-label="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full h-[56px] min-[900px]:h-[58px] rounded-[16px] border border-[#D4AF37]/30 bg-[#0F0F0F]/85 pl-12 pr-4 text-sm text-[#F7F7F7] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F7F7F7]/80 mb-[10px]">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                      <input
                        type="email"
                        name="email"
                        aria-label="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ananya@example.com"
                        className="w-full h-[56px] min-[900px]:h-[58px] rounded-[16px] border border-[#D4AF37]/30 bg-[#0F0F0F]/85 pl-12 pr-4 text-sm text-[#F7F7F7] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Preferred Service */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F7F7F7]/80 mb-[10px]">
                      Preferred Service *
                    </label>
                    <select
                      name="service"
                      aria-label="Preferred Service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-[56px] min-[900px]:h-[58px] rounded-[16px] border border-[#D4AF37]/30 bg-[#0F0F0F]/85 px-4 text-sm text-[#F7F7F7] cursor-pointer focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#1B1B1B] text-[#F7F7F7]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F7F7F7]/80 mb-[10px]">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                      <input
                        type="date"
                        name="date"
                        aria-label="Preferred Date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full h-[56px] min-[900px]:h-[58px] rounded-[16px] border border-[#D4AF37]/30 bg-[#0F0F0F]/85 pl-12 pr-4 text-sm text-[#F7F7F7] cursor-pointer focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F7F7F7]/80 mb-[10px]">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                      <input
                        type="text"
                        name="time"
                        aria-label="Preferred Time"
                        value={formData.time}
                        onChange={handleInputChange}
                        placeholder="e.g. 11:30 AM"
                        className="w-full h-[56px] min-[900px]:h-[58px] rounded-[16px] border border-[#D4AF37]/30 bg-[#0F0F0F]/85 pl-12 pr-4 text-sm text-[#F7F7F7] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                {/* Message / Special Request */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F7F7F7]/80 mb-[10px]">
                    Message / Special Request
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    aria-label="Special Request Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any specific hair condition details or stylist requests..."
                    className="w-full min-h-[120px] min-[900px]:min-h-[140px] mt-2 rounded-[16px] border border-[#D4AF37]/30 bg-[#0F0F0F]/85 p-4 text-sm text-[#F7F7F7] placeholder-[#F7F7F7]/40 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                {/* Submit Gold Button (Matching WhatsApp Button Height) */}
                <button
                  type="submit"
                  aria-label="Submit Form and Book via WhatsApp"
                  className="mt-8 w-full h-[56px] min-[900px]:h-[60px] rounded-full font-bold text-sm min-[900px]:text-[15px] bg-gold-gradient text-[#0F0F0F] flex items-center justify-center gap-3 shadow-[0_12px_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-[1.03]"
                >
                  <Send className="h-5 w-5 shrink-0" />
                  <span>Submit & Generate WhatsApp Booking</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
