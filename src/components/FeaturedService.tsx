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
    <section className="relative bg-[#0F0F0F] luxury-section border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[180px]" />

      <div className="luxury-container">
        {/* Banner Card with 32px Radius */}
        <div className="relative rounded-[32px] border border-[#D4AF37]/40 bg-gradient-to-b from-[#1B1B1B]/90 via-[#1B1B1B]/70 to-[#0F0F0F] p-8 sm:p-12 lg:p-16 shadow-[0_30px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <Flame className="h-4 w-4" /> Signature Luxury Highlight
          </div>

          {/* 12-Column Grid Layout */}
          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Content Column (7 Cols) */}
            <div className="lg:col-span-7">
              <h2 className="font-heading text-[34px] sm:text-[42px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15]">
                The Iconic <span className="text-gold-gradient">Korean Hair Spa</span>
              </h2>

              <p className="mt-6 text-base lg:text-lg text-[#F7F7F7]/85 leading-relaxed max-w-[680px]">
                Experience Erode’s premier scalp rejuvenation ritual. Designed to reverse scalp stress, eliminate dandruff, and transform dull hair into silky, glass-like hair perfection.
              </p>

              {/* Treatment Steps Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {steps.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 rounded-[20px] border border-[#D4AF37]/20 bg-[#0F0F0F]/70 p-5 transition-all hover:border-[#D4AF37]/60"
                  >
                    <span className="font-heading text-2xl font-bold text-gold-gradient shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#F7F7F7]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#F7F7F7]/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book Korean Hair Spa Now"
                  className="btn-gold text-[#0F0F0F]"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Book Korean Hair Spa Now</span>
                </a>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                  <CheckCircle2 className="h-4 w-4" /> 100% Organic & Scalp Safe
                </div>
              </div>
            </div>

            {/* Interactive Before/After Visualizer Frame (5 Cols) with Genuinely Distinct Photos */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[24px] border border-[#D4AF37]/40 shadow-2xl">
                {/* AFTER IMAGE (Glossy & Hydrated Result) */}
                <Image
                  src="/images/korean-spa-after.png"
                  alt="Korean Hair Spa Radiant Glossy After Result"
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 z-10 rounded-full bg-[#0F0F0F]/85 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-md">
                  AFTER: Hydrated & Glossy
                </div>

                {/* BEFORE IMAGE (Clipped Overlay - Dry & Damaged Hair) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <Image
                    src="/images/korean-spa-before.png"
                    alt="Korean Hair Spa Dry Hair Before Treatment"
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover filter contrast-110 brightness-90"
                  />
                  <div className="absolute top-4 left-4 z-10 rounded-full bg-[#0F0F0F]/85 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#F7F7F7] border border-white/20 backdrop-blur-md">
                    BEFORE: Dry & Damaged
                  </div>
                </div>

                {/* Slider Handle Line */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-1 bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0F0F0F] bg-[#D4AF37] text-[#0F0F0F] shadow-2xl">
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
                  aria-label="Before After Comparison Slider"
                  className="absolute inset-0 z-30 opacity-0 cursor-ew-resize w-full h-full"
                />
              </div>

              <p className="mt-4 text-center text-xs text-[#F7F7F7]/60 italic flex items-center justify-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" /> Drag slider left to see Korean Hair Spa gloss transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
