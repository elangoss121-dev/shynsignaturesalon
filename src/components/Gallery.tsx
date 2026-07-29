'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryCategories = ['All', 'Hair Crafts', 'Korean Spa', 'Bridal', 'Ambience'];

const galleryItems = [
  {
    id: 1,
    category: 'Ambience',
    title: 'Ultra Luxury Salon Interior',
    subtitle: 'State-of-the-Art Styling Stations',
    src: '/images/hero-bg.png',
  },
  {
    id: 2,
    category: 'Korean Spa',
    title: 'Signature Korean Hair Hydro Spa',
    subtitle: 'Deep Scalp Detox & Hydro Steam',
    src: '/images/korean-spa.png',
  },
  {
    id: 3,
    category: 'Hair Crafts',
    title: 'Precision Layering & Styling',
    subtitle: 'Crafted by Master Stylists',
    src: '/images/about-stylist.png',
  },
  {
    id: 4,
    category: 'Bridal',
    title: 'Royal Indian Bridal Transformation',
    subtitle: 'HD Airbrush Makeup & Hair Styling',
    src: '/images/bridal-makeup.png',
  },
  {
    id: 5,
    category: 'Korean Spa',
    title: 'Scalp Therapy Hydro Massage',
    subtitle: 'Botanical Nourishment Elixir',
    src: '/images/korean-spa.png',
  },
  {
    id: 6,
    category: 'Ambience',
    title: 'Private Spa & Treatment Suites',
    subtitle: 'Hygienic Calm Sanctuary',
    src: '/images/hero-bg.png',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="relative bg-[#0F0F0F] luxury-section border-t border-[#D4AF37]/10">
      <div className="luxury-container">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
            Visual Portfolio
            <span className="h-[1px] w-6 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-heading text-[34px] lg:text-[48px] font-bold text-[#F7F7F7] leading-[1.15]"
          >
            Salon <span className="text-gold-gradient">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-base lg:text-lg text-[#F7F7F7]/75 leading-relaxed"
          >
            Immerse yourself in our aesthetic salon environment, hair transformations, and bridal artistry.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3.5">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#0F0F0F] shadow-[0_0_25px_rgba(212,175,55,0.4)] font-bold'
                  : 'border border-[#D4AF37]/30 bg-[#1B1B1B]/70 text-[#F7F7F7]/80 hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid with 24px Rounded Corners & 32px Gap */}
        <motion.div layout className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#D4AF37]/20 bg-[#1B1B1B] shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-7">
                  <div className="flex justify-end">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0F0F0F]/80 text-[#D4AF37] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-[#F7F7F7]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#F7F7F7]/70 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal Popup */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-6 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#1B1B1B] text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F]"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#1B1B1B] text-[#D4AF37] hover:border-[#D4AF37]"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main Lightbox Content */}
            <div className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-[24px] border border-[#D4AF37]/40 bg-[#0F0F0F]">
              <div className="relative aspect-[16/10] w-full min-w-[320px] sm:min-w-[600px] md:min-w-[800px]">
                <Image
                  src={filteredItems[selectedImageIndex].src}
                  alt={filteredItems[selectedImageIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="border-t border-[#D4AF37]/20 bg-[#1B1B1B] p-5 text-center">
                <h3 className="font-heading text-lg font-bold text-[#F7F7F7]">
                  {filteredItems[selectedImageIndex].title}
                </h3>
                <p className="text-xs text-[#D4AF37] mt-1">
                  {filteredItems[selectedImageIndex].subtitle}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#1B1B1B] text-[#D4AF37] hover:border-[#D4AF37]"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
