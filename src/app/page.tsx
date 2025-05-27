
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientLogosSection from '@/components/sections/ClientLogosSection';
import TechnologyShowcaseSection from '@/components/sections/TechnologyShowcaseSection';
import ContactSection from '@/components/sections/ContactSection';
import AIChatButton from '@/components/ai/AIChatButton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ClientLogosSection />
        <TechnologyShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatButton />
    </div>
  );
}
