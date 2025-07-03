import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesCarousel from './components/ServicesCarousel/ServicesCarousel';
import ValueSection from './components/ValueSection/ValueSection';
import CaseStudySection from './components/CaseStudySection/CaseStudySection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import Footer from './components/Footer/Footer';
import pattern from './assets/images/pattern.svg';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div
    style={{
        backgroundImage: `url(${pattern})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="font-sans text-gray-900 min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#b4bca3] to-[#F8FAFC]">
      <Header />
      <main>
        <HeroSection />
        <ServicesCarousel />
        <ValueSection />
        <CaseStudySection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;