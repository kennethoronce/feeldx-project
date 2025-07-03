import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blueprintBg from '../../assets/images/blueprint-bg.jpg';

const ValueSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="value"
      className="relative text-white py-16 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${blueprintBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Why<br />Choose<br /><span className='text-tint'>FEELDX?</span>
          </h2>
        </div>

        <div data-aos="fade-left">
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            FEELDX delivers visionary solutions that merge engineering precision with cutting-edge technology.
            We empower infrastructure projects with innovation, quality, and deep industry insight.
          </p>

          <div className="mt-4 italic text-sm text-gray-300">
            “Innovation is not an option — it’s our foundation.”
            <br />
            <span className="not-italic font-semibold text-white block mt-1">
              — FEELDX Team
            </span>
          </div>

          <a
            href="#footer"
            className="mt-4 inline-block text-[#c4c8b9] hover:underline text-sm font-medium"
          >
            Contact us to learn more →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
