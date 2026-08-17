import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Download } from 'lucide-react';
import { cakes } from '../data';

export default function OurCakes() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Birthday', 'Anniversary', 'Kids', 'Designer', 'Celebration'];

  const filteredCakes = filter === 'All' 
    ? cakes 
    : cakes.filter(cake => cake.category === filter);

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-brand-brown font-serif mb-6"
          >
            Our Cake Catalogue
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-brown/80 max-w-2xl mx-auto"
          >
            Browse through our collection of beautifully crafted homemade cakes. 
            See something you like? Let us know on WhatsApp!
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 border ${
                filter === cat 
                  ? 'bg-brand-cocoa text-white border-brand-cocoa shadow-md' 
                  : 'bg-brand-cream text-brand-brown border-brand-pink/50 hover:border-brand-cocoa hover:text-brand-cocoa'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCakes.map((cake, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cake.id}
                className="bg-brand-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-brand-pink/20"
              >
                <div className="relative aspect-w-4 aspect-h-3 overflow-hidden bg-white">
                  <img 
                    src={cake.image} 
                    alt={cake.name} 
                    className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href={cake.image}
                      download={`${cake.name.replace(/\s+/g, '-').toLowerCase()}.jpg`}
                      className="bg-white/90 text-brand-brown px-4 py-2 rounded-full font-medium flex items-center space-x-2 hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-pink/40 text-brand-cocoa">
                      {cake.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-brown font-serif mb-2">{cake.name}</h3>
                  <p className="text-brand-brown/70 text-sm mb-6 flex-grow line-clamp-2">{cake.description}</p>
                  
                  <a 
                    href={`https://wa.me/919830216551?text=${encodeURIComponent(`Hi, I would like to inquire about the ${cake.name} cake.\n\nReference image: ${window.location.origin}${cake.image}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-white border border-brand-cocoa text-brand-cocoa font-medium py-3 rounded-xl hover:bg-brand-cocoa hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCakes.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-serif text-brand-brown mb-2">No cakes found in this category</h3>
            <p className="text-brand-brown/70">Check back later or contact us for custom designs!</p>
          </div>
        )}

      </div>
    </div>
  );
}
