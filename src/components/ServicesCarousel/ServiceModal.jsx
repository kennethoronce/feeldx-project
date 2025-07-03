import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const ServiceModal = ({ service, onClose }) => {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeModal = () => {
    if (animateOut) return; 
    setAnimateOut(true);
    setTimeout(() => {
      setAnimateOut(false);
      onClose();
    }, 300);
  };

  if (!service) return null;
  const { icon: Icon, title, description } = service;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50">
      <div
        className={`bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg transform transition-all duration-300 ${
          animateOut ? 'animate-fade-out' : 'animate-fade-in'
        }`}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#d3d6cb] text-accent shadow">
            <Icon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
