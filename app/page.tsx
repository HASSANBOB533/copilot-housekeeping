import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import PricingCalculator from '@/components/PricingCalculator';
import HowItWorks from '@/components/HowItWorks';
import SpecialOffers from '@/components/SpecialOffers';
import Testimonials from '@/components/Testimonials';
import ServiceAreas from '@/components/ServiceAreas';
import FAQ from '@/components/FAQ';
// BookingForm removed - redirecting to book.bobhomecare.com instead
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <PricingCalculator />
      <HowItWorks />
      <SpecialOffers />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      {/* BookingForm removed - redirecting to book.bobhomecare.com instead */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
