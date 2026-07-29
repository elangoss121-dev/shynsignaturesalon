'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Flame, CheckCircle2, MessageCircle, Sliders } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Micro-Scalp Analysis & Detox',
    desc: 'Deep camera examination followed by organic scalp exfoliation to unclog hair follicles.',
  },
  {
    step: '02',
    title: 'Nano-Mist Steam Hydro Therapy',
    desc: 'Warm herbal steam mist that opens cuticles and infuses intense moisture deep into scalp layers.',
  },
  {
    step: '03',
    title: 'Acupressure Scalp & Neck Massage',
    desc: 'Therapeutic pressure-point massage releasing tension, stimulating micro-circulation and blood flow.',
  },
  {
    step: '04',
    title: 'Korean Hydro-Gloss Sealing Treatment',
    desc: 'Luminous peptide shine mask applied to seal split ends, giving glass-like reflectivity.',
  },
];

export default function FeaturedService() {
  const [sliderPos, setSliderPos] = useState(50);

  const whatsappUrl = `https://wa.me/916382748121?text=${encodeURIComponent(
    'Hello SHYN Signature Salon, I would like to book an appointment for the Korean Hair Spa.'
  )}`;

  return (
    <section className="relative bg-[#0F0F0F] py-24 sm:py-32 overflow-hidden border-t border-[#D4AF37]/20">
      {/* Background Ambient Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="relative rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-b from-[#1B1B1B]/90 via-[#1B1B1B]/70 to-[#0F0F0F] p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <Flame className="h-4 w-4" /> Signature Luxury Highlight
          </div>

          <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Content Column */}
            <div className="lg:col-span-7">
              <h2 className="font-heading text-4xl font-extrabold text-[#F7F7F7] sm:text-5xl md:text-6xl leading-tight">
                The Iconic <span className="text-gold-gradient">Korean Hair Spa</span>
              </h2>

              <p className="mt-4 text-base text-[#F7F7F7]/90 leading-relaxed sm:text-lg">
                Experience Erode’s most sought-after scalp rejuvenation ritual. Designed to reverse urban scalp stress, eliminate dandruff, and transform dull hair into silky, glass-like hair perfection.
              </p>

              {/* Treatment Steps Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {steps.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 rounded-2xl border border-[#D4AF37]/20 bg-[#0F0F0F]/60 p-4 transition-all hover:border-[#D4AF37]/60"
                  >
                    <span className="font-heading text-2xl font-bold text-gold-gradient shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#F7F7F7]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-[#F7F7F7]/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FBF0B9] to-[#AA7C11] px-8 py-4 text-sm font-bold text-[#0F0F0F] shadow-[0_10px_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_35px_rgba(212,175,55,0.6)]"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Book Korean Hair Spa Now</span>
                </a>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                  <CheckCircle2 className="h-4 w-4" /> 100% Organic & Scalp Safe
                </div>
              </div>
            </div>

            {/* Interactive Before/After Visualizer */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-[#D4AF37]/40 shadow-2xl">
                {/* After Image (Background) */}
                <Image
                  src="/images/korean-spa.png"
                  alt="Korean Hair Spa Radiant Shiny Result"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 z-10 rounded-md bg-[#0F0F0F]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30">
                  AFTER: Hydrated & Glossy
                </div>

                {/* Before Image (Clipped Overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <Image
                    src="/images/korean-spa.png"
                    alt="Korean Hair Spa Scalp Treatment Before"
                    fill
                    className="object-cover filter grayscale contrast-125 brightness-75"
                  />
                  <div className="absolute top-4 left-4 z-10 rounded-md bg-[#0F0F0F]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#F7F7F7] border border-white/20">
                    BEFORE: Dull & Dry
                  </div>
                </div>

                {/* Slider Handle Line */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-1 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0F0F0F] bg-[#D4AF37] text-[#0F0F0F] shadow-xl">
                    <Sliders className="h-4 w-4" />
                  </div>
                </div>

                {/* Range Controller */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  aria-label="Before After Slider"
                  className="absolute inset-0 z-30 opacity-0 cursor-ew-resize w-full h-full"
                />
              </div>

              <p className="mt-3 text-center text-xs text-[#F7F7F7]/50 italic flex items-center justify-center gap-1">
                <Sparkles className="h-3 w-3 text-[#D4AF37]" /> Drag slider left to see Korean Hair Spa gloss transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
