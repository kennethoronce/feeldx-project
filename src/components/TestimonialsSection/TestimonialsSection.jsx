import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "FEELDX delivered exactly what we needed – professional, timely, and visually impressive!",
    role: "Project Manager, City of Greater Dandenong",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "Their 3D methodologies truly transformed the way we approached planning.",
    role: "Senior Engineer, Hutchinson Builders",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote: "We were blown away by the quality and clarity of the completion visuals.",
    role: "Architect, Built Environs",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "The team was responsive, collaborative, and always one step ahead.",
    role: "Director, FKG Group",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tailLeft, setTailLeft] = useState(0);
  const avatarRefs = useRef([]);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex]);

  const updateTailPosition = () => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const activeAvatar = avatarRefs.current[activeIndex];
    if (containerRect && activeAvatar) {
      const avatarRect = activeAvatar.getBoundingClientRect();
      const centerX = avatarRect.left + avatarRect.width / 2 - containerRect.left;
      setTailLeft(centerX);
    }
  };

  useEffect(() => {
    updateTailPosition();
    window.addEventListener("resize", updateTailPosition);
    return () => window.removeEventListener("resize", updateTailPosition);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-20 px-4 max-w-4xl mx-auto">
      <div
        ref={containerRef}
        className="relative bg-gray-100 p-10 rounded-3xl shadow-lg max-w-xl mx-auto"
      >
        <p className="text-xl md:text-2xl font-medium text-gray-800 italic">
          “{testimonials[activeIndex].quote}”
        </p>
        <div className="mt-6">
          <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
        </div>

        <div
          className="absolute bottom-[-16px] w-5 h-5 bg-gray-100 rotate-45 transition-left duration-300"
          style={{ left: tailLeft ? tailLeft - 10 : 0 }}
        />
      </div>

      <div className="mt-12 flex justify-center gap-8">
        {testimonials.map((t, i) => (
          <button
            key={i}
            ref={(el) => (avatarRefs.current[i] = el)}
            onClick={() => setActiveIndex(i)}
            className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-colors duration-300
              ${i === activeIndex ? "border-accent" : "border-transparent hover:border-gray-400"}`}
            aria-label={`Show testimonial from ${t.role}`}
          >
            <img
              src={t.avatar}
              alt={t.role}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
