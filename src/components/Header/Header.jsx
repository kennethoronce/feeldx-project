import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../Common/Logo';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
  { name: 'Home', id: 'hero' },
  { name: 'Services', id: 'services' },
  { name: 'Why FEELDX', id: 'value' },
  { name: 'Case Studies', id: 'case-studies' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'footer' }
];


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-accent transition"
            >
                {item.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 w-full z-40 backdrop-blur-md bg-white/70 px-4 py-4 shadow-md"
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-800 font-medium text-base hover:text-accent transition"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;