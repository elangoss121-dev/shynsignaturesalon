'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Heart, MessageCircle } from 'lucide-react';

const instagramReels = [
  {
    id: 1,
    title: 'Korean Scalp Hydro Steam Treatment in Action',
    likes: '1.2k',
    comments: '148',
    image: '/images/korean-spa-after.png',
    link: 'https://www.instagram.com/shynsignaturesalon/',
  },
  {
    id: 2,
    title: 'HD Airbrush Bridal Glam Transformation',
    likes: '2.4k',
    comments: '280',
    image: '/images/bridal-makeup.png',
    link: 'https://www.instagram.com/shynsignaturesalon/',
  },
  {
    id: 3,
    title: 'Golden Balayage & Dyson Styling Reveal',
    likes: '1.8k',
    comments: '195',
    image: '/images/gallery-balayage.png',
    link: 'https://www.instagram.com/shynsignaturesalon/',
  },
];

export default function InstagramFeed() {
  const instagramUrl = 'https://www.instagram.com/shynsignaturesalon/';

  return (
    <section className="relative bg-[#0F0F0F] luxury-section border-t border-[#D4AF37]/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

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
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
            Social Reel Showcase
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-heading text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15]"
          >
            Follow Us On <span className="text-gold-gradient">Instagram</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[16px] sm:text-[18px] text-[#F7F7F7]/80 leading-relaxed max-w-[680px] mx-auto"
          >
            Join our online community <strong className="text-[#D4AF37]">@shynsignaturesalon</strong> for daily hair transformations, client reels, and exclusive styling tips.
          </motion.p>
        </div>

        {/* 12-Column Responsive Grid (4 Cols per Card Desktop) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {instagramReels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group relative flex flex-col justify-between p-8 rounded-[24px] lg:col-span-4"
            >
              <div>
                <div className="relative aspect-[9/14] w-full overflow-hidden rounded-[20px] border border-[#D4AF37]/30">
                  <Image
                    src={reel.image}
                    alt={reel.title}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />

                  {/* Play Reel Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0F0F0F]/80 text-[#D4AF37] shadow-2xl backdrop-blur-md transition-transform group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0F0F0F]">
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Social Stats Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-white">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4 fill-rose-500 text-rose-500" /> {reel.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4 fill-white/80" /> {reel.comments}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 font-heading text-lg font-bold text-[#F7F7F7] group-hover:text-[#D4AF37] transition-colors">
                  {reel.title}
                </h3>
              </div>

              <div className="mt-6 pt-5 border-t border-[#D4AF37]/15">
                <a
                  href={reel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Reel on Instagram"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] group-hover:underline"
                >
                  <span>Watch Reel on Instagram</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Instagram Profile Follow Link */}
        <div className="mt-14 text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow @shynsignaturesalon on Instagram"
            className="btn-gold inline-flex h-[58px] min-h-[58px] px-8 text-[#0F0F0F]"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Follow @shynsignaturesalon</span>
          </a>
        </div>
      </div>
    </section>
  );
}
