import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import FeaturedService from '@/components/FeaturedService';
import Gallery from '@/components/Gallery';
import InstagramFeed from '@/components/InstagramFeed';
import Reviews from '@/components/Reviews';
import Booking from '@/components/Booking';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0F0F0F] text-[#F7F7F7] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <FeaturedService />
      <Gallery />
      <InstagramFeed />
      <Reviews />
      <Booking />
      <Location />
      <Footer />
    </main>
  );
}
