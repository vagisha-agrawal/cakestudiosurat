import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-brand-pink/30 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
      <div className="flex items-center justify-around h-16">
        <a 
          href="tel:+919830216551"
          className="flex flex-col items-center justify-center w-full h-full text-brand-brown hover:bg-brand-pink/10 transition-colors"
        >
          <Phone className="w-5 h-5 mb-1 text-brand-cocoa" />
          <span className="text-[10px] font-medium tracking-wide">Call</span>
        </a>
        
        <div className="w-px h-8 bg-brand-pink/50"></div>
        
        <a 
          href="https://wa.me/919830216551"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full h-full text-brand-brown hover:bg-brand-pink/10 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-1 text-green-600" />
          <span className="text-[10px] font-medium tracking-wide">WhatsApp</span>
        </a>

        <div className="w-px h-8 bg-brand-pink/50"></div>

        <a 
          href="https://instagram.com/cakestudio.surat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full h-full text-brand-brown hover:bg-brand-pink/10 transition-colors"
        >
          <Instagram className="w-5 h-5 mb-1 text-pink-600" />
          <span className="text-[10px] font-medium tracking-wide">Instagram</span>
        </a>
      </div>
    </div>
  );
}
