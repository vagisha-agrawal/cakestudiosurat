import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-24 md:pb-8 border-t border-brand-pink/30">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1">
            <Link to="/" className="flex-shrink-0 flex items-center mb-6 space-x-3 flex-col items-start">
              <img src="/favicon.png" alt="CakeStudioSurat Logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-brand-cocoa/20 shadow-md" />
              <span className="font-serif text lg:text-2xl md:text-xl font-bold text-brand-brown mt-1">
                CakeStudioSurat
              </span>
            </Link>
            <p className="text-brand-brown/80 text-sm leading-relaxed mb-6">
              Homemade cakes at reasonable prices. Pre-orders only. Baked fresh for your special moments.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/cakestudio.surat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-pink/30 flex items-center justify-center text-brand-brown hover:bg-brand-cocoa hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919830216551" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-pink/30 flex items-center justify-center text-brand-brown hover:bg-brand-cocoa hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-brand-brown mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-brand-brown/80 hover:text-brand-cocoa transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-brand-brown/80 hover:text-brand-cocoa transition-colors">About Us</Link></li>
              <li><Link to="/cakes" className="text-sm text-brand-brown/80 hover:text-brand-cocoa transition-colors">Our Cakes</Link></li>
              <li><Link to="/gallery" className="text-sm text-brand-brown/80 hover:text-brand-cocoa transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-sm text-brand-brown/80 hover:text-brand-cocoa transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-brand-brown mb-4">Information</h3>
            <ul className="space-y-3">
              <li><Link to="/how-to-order" className="text-sm text-brand-brown/80 hover:text-brand-cocoa transition-colors">How to Order</Link></li>
              <li><Link to="/customers" className="text-sm text-brand-brown/80 hover:text-brand-cocoa transition-colors">Happy Customers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-brand-brown mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-brand-brown/80">
                <Phone className="w-5 h-5 text-brand-cocoa shrink-0 mt-0.5" />
                <a href="tel:+919830216551" className="hover:text-brand-cocoa transition-colors">098302 16551</a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-brand-brown/80">
                <MapPin className="w-5 h-5 text-brand-cocoa shrink-0 mt-0.5" />
                <span>Shrungal Palace, Nem Nagar, Pandesara, Udhana, Surat, Gujarat 394221</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-pink/30 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-brand-brown/60">
            &copy; {new Date().getFullYear()} CakeStudioSurat. All Rights Reserved.
          </p>
          <p className="text-xs text-brand-brown/60 mt-2 md:mt-0">
            Designed with love in Surat.
          </p>
        </div>
      </div>
    </footer>
  );
}
