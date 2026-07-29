'use client';

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const realReviews = [
  {
    id: 1,
    author: 'Akash S',
    rating: 5,
    tag: 'Verified Google Review',
    text: 'They paid great attention to detail, and the service exceeded my expectations.',
    highlight: 'Attention to detail & service standard',
  },
  {
    id: 2,
    author: 'Priya R',
    rating: 5,
    tag: 'Verified Google Review',
    text: 'Try the Korean Hair Spa. Amazing experience. My hair has never felt so silky, hydrated and light!',
    highlight: 'Korean Hair Spa Experience',
  },
  {
    id: 3,
    author: 'Karthik M',
    rating: 5,
    tag: 'Verified Google Review',
    text: 'Cost effective and friendly services. Professional stylists who actually listen to what haircut you want.',
    highlight: 'Cost Effective & Friendly Service',
  },
  {
    id: 4,
    author: 'Divya & Team',
    rating: 5,
    tag: 'Verified Google Review',
    text: 'Booked bridal makeup and hairstyling for my wedding. Flawless HD finish that lasted all day long without cakeyness.',
    highlight: 'Bridal Makeover Excellence',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-[#0F0F0F] py-24 sm:py-32 border-t border-[#D4AF37]/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

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
            Guest Testimonials
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-extrabold text-[#F7F7F7] sm:text-4xl md:text-5xl"
          >
            Loved By Our <span className="text-gold-gradient">Guests</span>
          </motion.h2>

          {/* Google Rating Counter Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-[#1B1B1B]/80 px-6 py-2.5 shadow-xl backdrop-blur-md"
          >
            <span className="font-heading text-xl font-bold text-gold-gradient">
              5.0
            </span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#F7F7F7]">
              Google Rating (24+ Reviews)
            </span>
          </motion.div>
        </div>

        {/* Testimonials Slider */}
        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {realReviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="glass-card relative flex h-full flex-col justify-between p-8 sm:p-9 border border-[#D4AF37]/25">
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-[#D4AF37]/20" />

                  <div>
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#D4AF37]" />
                      ))}
                    </div>

                    <p className="mt-6 text-sm text-[#F7F7F7]/90 leading-relaxed italic">
                      &quot;{review.text}&quot;
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D4AF37]/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading text-base font-bold text-[#F7F7F7]">
                          — {review.author}
                        </h3>
                        <p className="text-[11px] text-[#D4AF37] mt-0.5">
                          {review.highlight}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Google Verified
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
