import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-28 pb-16 md:pt-36"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Engineering the Future<br className="hidden md:block" /> of Infrastructure
          </h1>
          <p className="mt-6 text-lg text-gray-700 md:pr-10">
            At <span className="font-semibold text-accent">FEELDX</span>, we drive innovation and excellence across engineering, construction, and infrastructure solutions.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block bg-accent hover:bg-tint text-white font-medium text-lg px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Explore Our Services
          </a>
        </div>

        <div className="w-full aspect-video">
          <iframe
            src="https://player.vimeo.com/video/1049585198?autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&background=1"
            className="w-full h-full rounded-xl shadow-xl"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="FEELDX Showcase Video"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
