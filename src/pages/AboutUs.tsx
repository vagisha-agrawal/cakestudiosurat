import React from 'react';
import { motion } from 'motion/react';
import { Star, Heart, CheckCircle, Clock } from 'lucide-react';
import aboutImage from '../assets/images/about_baker_1786293954038.jpg';

export default function AboutUs() {
  return (
    <div className="bg-brand-cream min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-brand-brown font-serif mb-6"
          >
            A Little Cake Studio with a Lot of Love
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-brand-cocoa font-medium"
          >
            <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
            <span>4.8 Google Rating</span>
            <span className="mx-2 text-brand-pink">•</span>
            <span>39+ Reviews</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-pink/30 rounded-[3rem] transform translate-x-4 translate-y-4"></div>
            <img 
              src={aboutImage} 
              alt="Baking process in our home studio" 
              className="relative rounded-[3rem] shadow-xl w-full h-[600px] object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-brand-brown font-serif mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-brand-brown/80 leading-relaxed">
                <p>
                  Welcome to CakeStudioSurat, a homegrown cake studio nestled in the heart of Surat. 
                  What started as a passionate hobby in a small home kitchen has blossomed into a beloved 
                  local bakery dedicated to making your celebrations sweeter.
                </p>
                <p>
                  We believe that every milestone deserves a cake that not only looks breathtaking 
                  but tastes unforgettable. That's why we focus on creating beautiful, premium homemade 
                  cakes crafted with high-quality ingredients and a whole lot of love.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-brand-pink/50">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-brand-cocoa shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-brown font-serif">Homemade Cakes</h3>
                  <p className="text-sm text-brand-brown/70">Baked in a clean, hygienic home environment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-brand-cocoa shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-brown font-serif">Freshly Prepared</h3>
                  <p className="text-sm text-brand-brown/70">Never frozen, baked fresh for your order.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-cocoa shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-brown font-serif">Reasonable Prices</h3>
                  <p className="text-sm text-brand-brown/70">Premium quality that fits your budget.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-6 h-6 text-brand-cocoa shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-brown font-serif">Pre-Orders Only</h3>
                  <p className="text-sm text-brand-brown/70">Ensuring perfect attention to detail.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="https://wa.me/919830216551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-brand-cocoa hover:bg-brand-brown transition-colors shadow-md hover:shadow-lg"
              >
                Let's Discuss Your Cake
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
