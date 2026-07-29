'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';

const instagramHighlights = [
  {
    id: 1,
    title: 'Korean Scalp Hydro Therapy in Action',
    likes: '1.4k',
    comments: '128',
    image: '/images/korean-spa.png',
    link: 'https://www.instagram.com/shynsignaturesalon/',
  },
  {
    id: 2,
    title: 'Luxury Hair Colour & Balayage Transformation',
    likes: '2.1k',
    comments: '194',
    image: '/images/about-stylist.png',
    link: 'https://www.instagram.com/shynsignaturesalon/',
  },
  {
    id: 3,
    title: 'HD Bridal Makeover & Hair Styling Ritual',
    likes: '3.5k',
    comments: '310',
    image: '/images/bridal-makeup.png',
    link: 'https://www.instagram.com/shynsignaturesalon/',
  },
];

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram official embed script if needed
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative bg-[#0F0F0F] py-24 sm:py-32 overflow-hidden border-t border-[#D4AF37]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              <InstagramIcon className="h-4 w-4" />
              Instagram Showcase
            </div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-[#F7F7F7] sm:text-4xl md:text-5xl">
              Follow Our <span className="text-gold-gradient">Beauty Journey</span>
            </h2>
            <p className="mt-2 text-sm text-[#F7F7F7]/70">
              Catch daily Korean Hair Spa reels, makeover videos & salon aesthetics at @shynsignaturesalon
            </p>
          </div>

          <a
            href="https://www.instagram.com/shynsignaturesalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-[#D4AF37]/50 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0F0F0F] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-105"
          >
            <InstagramIcon className="h-4 w-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Reels Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {instagramHighlights.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#1B1B1B] shadow-xl"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/20 to-transparent" />

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-[#0F0F0F]/70 text-[#D4AF37] shadow-2xl backdrop-blur-md transition-transform group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F]">
                    <Play className="h-7 w-7 fill-current ml-1" />
                  </div>
                </div>

                {/* Top Instagram Reel Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#0F0F0F]/80 px-3 py-1 text-[11px] font-medium text-[#F7F7F7] backdrop-blur-md">
                  <InstagramIcon className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Reel</span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-heading text-base font-bold text-[#F7F7F7] group-hover:text-[#D4AF37] transition-colors">
                    {post.title}
                  </p>

                  <div className="mt-3 flex items-center gap-4 text-xs text-[#F7F7F7]/80">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5 text-[#D4AF37]" />
                      {post.comments}
                    </span>
                    <span className="ml-auto text-[11px] text-[#D4AF37]">
                      @shynsignaturesalon
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
