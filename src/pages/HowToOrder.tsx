import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Info } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Cake',
      desc: 'Browse our menu or send us reference pictures of a custom design you have in mind. We love bringing your ideas to life!'
    },
    {
      num: '02',
      title: 'Tell Us Your Requirements',
      desc: 'Message us on WhatsApp with the date, required size/weight, flavor preferences, and any specific customization details.'
    },
    {
      num: '03',
      title: 'Confirm Your Order',
      desc: 'Once we confirm availability and finalize the design, we will share the price. A small advance payment secures your order.'
    },
    {
      num: '04',
      title: 'Collect & Celebrate',
      desc: 'Pick up your freshly baked masterpiece from our studio in Pandesara at the agreed time, and enjoy your celebration!'
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-brand-brown font-serif mb-6"
          >
            Ordering Your Cake Is Easy 🎂
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-brown/80 max-w-2xl mx-auto"
          >
            We've kept the process simple so you can focus on the celebration. 
            Here is how you can get a customized homemade cake.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-brand-pink/20 rounded-2xl p-6 mb-16 flex items-start space-x-4 border border-brand-pink/50"
        >
          <Info className="w-6 h-6 text-brand-cocoa shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-brand-brown font-serif text-lg mb-1">Please Note:</h3>
            <p className="text-brand-brown/80 leading-relaxed">
              CakeStudioSurat accepts <strong>pre-orders only</strong>. Since every cake is baked fresh from scratch, 
              please contact us at least 24-48 hours in advance to check availability.
            </p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 group"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-cream border-2 border-brand-pink flex items-center justify-center group-hover:bg-brand-pink transition-colors duration-300">
                <span className="text-2xl font-bold text-brand-cocoa font-serif">{step.num}</span>
              </div>
              <div className="flex-grow bg-brand-cream rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-brand-pink/30">
                <h3 className="text-xl font-bold text-brand-brown font-serif mb-2">{step.title}</h3>
                <p className="text-brand-brown/70">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="https://wa.me/919830216551"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-[#25D366] hover:bg-[#1EBE59] transition-colors shadow-lg hover:shadow-xl space-x-2"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Order on WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
