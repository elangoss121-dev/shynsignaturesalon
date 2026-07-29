'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Clock, User, Phone, Mail, Sparkles, Send } from 'lucide-react';

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

    // Open WhatsApp directly
    window.open(whatsappUrl, '_blank');
  };

  const instantWhatsAppUrl = `https://wa.me/${whatsappTargetNumber}?text=${encodeURIComponent(
    'Hello SHYN Signature Salon, I would like to book an instant appointment.'
  )}`;

  return (
    <section id="booking" className="relative bg-[#0F0F0F] py-24 sm:py-32 border-t border-[#D4AF37]/10">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]"
          >
            <Sparkles className="h-4 w-4" />
            Reserve Your Luxury Experience
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-extrabold text-[#F7F7F7] sm:text-4xl md:text-5xl"
          >
            Book An <span className="text-gold-gradient">Appointment</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#F7F7F7]/70"
          >
            Select your preferred appointment method below to instantly confirm your slot with our concierge.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Method 1: Instant WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card flex flex-col justify-between p-8 sm:p-10 lg:col-span-5 border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-gradient-to-l from-[#D4AF37] to-[#AA7C11] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0F0F0F]">
              Method 1 • Fastest
            </div>

            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-xl">
                <MessageCircle className="h-8 w-8 fill-current" />
              </div>

              <h3 className="mt-6 font-heading text-2xl font-bold text-[#F7F7F7]">
                Instant WhatsApp Booking
              </h3>

              <p className="mt-3 text-sm text-[#F7F7F7]/80 leading-relaxed">
                Connect directly with our salon manager on WhatsApp for real-time slot availability, price estimates, and custom consultations.
              </p>

              <div className="mt-8 space-y-3 border-t border-[#D4AF37]/20 pt-6">
                <div className="flex items-center gap-3 text-xs text-[#F7F7F7]">
                  <span className="h-2 w-2 rounded-full bg-[#25D366] animate-ping" />
                  <span>Instant Response (Mon-Sun: 9:30 AM - 8:30 PM)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#D4AF37] font-semibold">
                  <Phone className="h-4 w-4" />
                  <span>+91 63827 48121</span>
                </div>
              </div>
            </div>

            <a
              href={instantWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5 fill-current transition-transform group-hover:scale-110" />
              <span>Book Instantly on WhatsApp</span>
            </a>
          </motion.div>

          {/* Method 2: Detailed Appointment Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-10 lg:col-span-7"
          >
            <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  Method 2
                </span>
                <h3 className="font-heading text-xl font-bold text-[#F7F7F7]">
                  Custom Appointment Request Form
                </h3>
              </div>
              <Calendar className="h-6 w-6 text-[#D4AF37]" />
            </div>

            <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F7]/80">
                    Full Name *
                  </label>
                  <div className="mt-2 relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#0F0F0F]/80 pl-10 pr-4 py-3 text-sm text-[#F7F7F7] placeholder-[#F7F7F7]/40 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F7]/80">
                    Phone Number *
                  </label>
                  <div className="mt-2 relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#0F0F0F]/80 pl-10 pr-4 py-3 text-sm text-[#F7F7F7] placeholder-[#F7F7F7]/40 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F7]/80">
                    Email Address
                  </label>
                  <div className="mt-2 relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ananya@example.com"
                      className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#0F0F0F]/80 pl-10 pr-4 py-3 text-sm text-[#F7F7F7] placeholder-[#F7F7F7]/40 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Preferred Service */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F7]/80">
                    Preferred Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-[#D4AF37]/30 bg-[#0F0F0F] px-4 py-3 text-sm text-[#F7F7F7] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F7]/80">
                    Preferred Date
                  </label>
                  <div className="mt-2 relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#0F0F0F]/80 pl-10 pr-4 py-3 text-sm text-[#F7F7F7] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F7]/80">
                    Preferred Time
                  </label>
                  <div className="mt-2 relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]" />
                    <input
                      type="text"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      placeholder="e.g. 11:30 AM"
                      className="w-full rounded-xl border border-[#D4AF37]/30 bg-[#0F0F0F]/80 pl-10 pr-4 py-3 text-sm text-[#F7F7F7] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F7F7F7]/80">
                  Message / Special Request
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any hair condition details or specific stylist requests..."
                  className="mt-2 w-full rounded-xl border border-[#D4AF37]/30 bg-[#0F0F0F]/80 px-4 py-3 text-sm text-[#F7F7F7] placeholder-[#F7F7F7]/40 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FBF0B9] to-[#AA7C11] py-4 text-sm font-bold text-[#0F0F0F] shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(212,175,55,0.6)]"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span>Submit & Generate WhatsApp Booking</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
