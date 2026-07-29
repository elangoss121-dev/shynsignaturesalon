'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const googleBusinessReviewUrl = 'https://maps.app.goo.gl/MddbA8Tpy49nztn68';

const realReviews = [
  {
    id: 1,
    author: 'Akash S',
    rating: 5,
    tag: 'Verified Google Review',
    text: 'They paid great attention to detail, and the service exceeded my expectations.',
    highlight: 'Attention to detail & service standard',
    link: googleBusinessReviewUrl,
  },
  {
    id: 2,
    author: 'Priya R',
    rating: 5,
    tag: 'Verified Google Review',
    text: 'Try the Korean Hair Spa. Amazing experience. My hair has never felt so silky, hydrated and light!',
    highlight: 'Korean Hair Spa Experience',
    link: googleBusinessReviewUrl,
  },
  {
    id: 3,
    author: 'Karthik M',
    rating: 5,
    tag: 'Verified Google Review',
    text: 'Cost effective and friendly services. Professional stylists who actually listen to what haircut you want.',
    highlight: 'Cost Effective & Friendly Service',
    link: googleBusinessReviewUrl,
  },
  {
    id: 4,
    author: 'Divya & Team',
    rating: 5,
    tag: 'Verified Google Review',
    text: 'Booked bridal makeup and hairstyling for my wedding. Flawless HD finish that lasted all day long without cakeyness.',
    highlight: 'Bridal Makeover Excellence',
    link: googleBusinessReviewUrl,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-[#0F0F0F] luxury-section border-t border-[#D4AF37]/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

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
            Guest Testimonials
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-heading text-[34px] sm:text-[42px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15]"
          >
            Loved By Our <span className="text-gold-gradient">Guests</span>
          </motion.h2>

          {/* Google Rating Counter Badge */}
          <motion.a
            href={googleBusinessReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 inline-flex items-center gap-3.5 rounded-full border border-[#D4AF37]/40 bg-[#1B1B1B]/85 px-7 py-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105"
          >
            <span className="font-heading text-2xl font-bold text-gold-gradient">
              5.0
            </span>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#F7F7F7]">
              Google Rating (24+ Reviews)
            </span>
            <ExternalLink className="h-3.5 w-3.5 text-[#D4AF37]" />
          </motion.a>
        </div>

        {/* Testimonials Slider */}
        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={32}
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
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read Google Review by ${review.author}`}
                  className="glass-card group relative flex min-h-[320px] h-full flex-col justify-between p-9 rounded-[24px] border border-[#D4AF37]/25 block"
                >
                  <Quote className="absolute top-7 right-7 h-12 w-12 text-[#D4AF37]/20" />

                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1.5 text-[#D4AF37]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#D4AF37]" />
                      ))}
                    </div>

                    <p className="mt-7 text-base text-[#F7F7F7]/90 leading-relaxed italic">
                      &quot;{review.text}&quot;
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#D4AF37]/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-[#F7F7F7] group-hover:text-[#D4AF37] transition-colors">
                          — {review.author}
                        </h3>
                        <p className="text-xs text-[#D4AF37] mt-0.5 font-medium">
                          {review.highlight}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold group-hover:underline">
                        <span>View on Google</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
