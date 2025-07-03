import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Box,
  Video,
  Clipboard,
  Calendar,
  Gavel,
  Book,
  Home,
} from 'lucide-react';

import ServiceModal from './ServiceModal';

const services = [
  {
    icon: Box,
    title: 'BIM (3D–7D)',
    description: 'Advanced multi-dimensional Building Information Modelling for precise planning and visualization.',
  },
  {
    icon: Video,
    title: 'Multimedia Visualisation',
    description: 'Photo-realistic renderings, fly-throughs, and VR experiences to bring ideas to life.',
  },
  {
    icon: Clipboard,
    title: 'Construction Lifecycle Management',
    description: 'Comprehensive planning, coordination, and control from project start to finish.',
  },
  {
    icon: Calendar,
    title: 'Project Control & Management',
    description: 'BIM-driven scheduling, risk analysis, and reporting to ensure project success.',
  },
  {
    icon: Gavel,
    title: 'Tender & Subcontractor Programs',
    description: 'Expert planning and coordination for tender, construction, and subcontractor timelines.',
  },
  {
    icon: Book,
    title: 'Project Forensic Analysis',
    description: 'Dispute resolution through expert delay analysis, EOT/NOD review, and forensic reporting.',
  },
  {
    icon: Book,
    title: 'Education & Training',
    description: 'Tailored digital education solutions for infrastructure professionals and RTOs.',
  },
  {
    icon: Home,
    title: 'Interior Design',
    description: 'End-to-end interior design aligning aesthetics, functionality, and brand identity.',
  },
];

const ServicesCarousel = () => {
  const paginationRef = useRef(null);
  const [paginationReady, setPaginationReady] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setPaginationReady(true);
  }, []);

  return (
    <section id="services" className=" py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Core Services
        </h2>

        {paginationReady && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
                swiper.params.pagination.el = paginationRef.current;
              }
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-white to-[#f0f1ee] border border-gray-200 rounded-lg shadow-md p-6 min-h-[300px] flex flex-col justify-between items-center text-center cursor-pointer transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
                  onClick={() => {
                    if (!selectedService) setSelectedService(service);
                  }}
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#d3d6cb] text-accent shadow">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div ref={paginationRef} className="mt-8 flex justify-center gap-2" />
      </div>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default ServicesCarousel;
