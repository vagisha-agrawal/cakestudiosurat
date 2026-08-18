import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Cakes', path: '/cakes' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const aboutLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'How to Order', path: '/how-to-order' },
    { name: 'Happy Customers', path: '/customers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-brand-cream sticky top-0 z-50 border-b border-brand-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <img src="/favicon.png" alt="CakeStudioSurat Logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-brand-cocoa/20 shadow-md" />
              <span className="font-serif text-xl md:text-2xl font-bold text-brand-cocoa sm:block mt-1">
                CakeStudioSurat
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-brand-cocoa ${isActive('/') ? 'text-brand-cocoa' : 'text-brand-brown/80'}`}>Home</Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-brand-brown/80 hover:text-brand-cocoa transition-colors py-2">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    <div className="py-1">
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`block px-4 py-2 text-sm hover:bg-brand-pink/10 transition-colors ${isActive(link.path) ? 'text-brand-cocoa bg-brand-pink/5' : 'text-brand-brown/80'}`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/cakes" className={`text-sm font-medium transition-colors hover:text-brand-cocoa ${isActive('/cakes') ? 'text-brand-cocoa' : 'text-brand-brown/80'}`}>Our Cakes</Link>
            <Link to="/gallery" className={`text-sm font-medium transition-colors hover:text-brand-cocoa ${isActive('/gallery') ? 'text-brand-cocoa' : 'text-brand-brown/80'}`}>Gallery</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-brand-cocoa ${isActive('/contact') ? 'text-brand-cocoa' : 'text-brand-brown/80'}`}>Contact</Link>
            
            <a 
              href="https://wa.me/919830216551" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-cocoa text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-brown transition-colors shadow-sm hover:shadow-md"
            >
              Order Your Cake
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-brown hover:bg-brand-pink/20 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-brand-pink/30"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-brand-pink/20 text-brand-cocoa' : 'text-brand-brown hover:bg-brand-pink/10'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <p className="px-3 text-xs font-semibold text-brand-brown/50 uppercase tracking-wider">
                  About Us
                </p>
                <div className="mt-2 space-y-1">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-brand-pink/20 text-brand-cocoa' : 'text-brand-brown/80 hover:bg-brand-pink/10 hover:text-brand-cocoa'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
