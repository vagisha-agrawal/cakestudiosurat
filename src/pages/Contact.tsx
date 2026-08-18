import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Instagram, MapPin, ChevronDown, ChevronUp, Store } from 'lucide-react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you accept same-day orders?',
      a: 'We generally require 24-48 hours notice for all orders since every cake is baked fresh from scratch. However, please message us on WhatsApp to check if we can accommodate an urgent request.'
    },
    {
      q: 'How do I place an order?',
      a: 'Placing an order is easy! Simply message us on WhatsApp with your date, requirements, and any reference photos. We will confirm the details, share the price, and take a small advance to secure your slot.'
    },
    {
      q: 'Can I request a custom cake design?',
      a: 'Absolutely! We love creating custom designs. Share your reference pictures or ideas, and we will work with you to bring your vision to life.'
    },
    {
      q: 'Where are you located?',
      a: 'We are a home bakery located at Shrungal Palace, Nem Nagar, Pandesara, Udhana, Surat. Exact pickup details will be shared upon order confirmation.'
    },
    {
      q: 'How can I contact you?',
      a: 'The best way to reach us is via WhatsApp or by calling us directly at 098302 16551.'
    },
    {
      q: 'Do you have different cake sizes?',
      a: 'Yes, we offer various sizes starting from 500g (half kg) onwards. Multitier cakes have minimum weight requirements depending on the design.'
    },
    {
      q: 'What is the base price of half kg cake',
      a: 'The base price of half kg cake is 650/-. The price will differ according to your requirements'
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-brand-brown font-serif mb-6"
          >
            Let's Make Your Celebration Sweeter 🎂
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-brown/80 max-w-2xl mx-auto"
          >
            We are always here to chat about cakes! Reach out to us for orders, inquiries, or custom design consultations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <motion.a 
            href="tel:+919830216551"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-cream rounded-[2rem] p-8 text-center flex flex-col items-center hover:bg-brand-pink/20 transition-colors duration-300 border border-brand-pink/30 group"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-brand-cocoa" />
            </div>
            <h3 className="font-bold text-xl text-brand-brown font-serif mb-2">Call</h3>
            <p className="text-brand-brown/80">098302 16551</p>
          </motion.a>

          <motion.a 
            href="https://wa.me/919830216551"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-cream rounded-[2rem] p-8 text-center flex flex-col items-center hover:bg-brand-pink/20 transition-colors duration-300 border border-brand-pink/30 group"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="font-bold text-xl text-brand-brown font-serif mb-2">WhatsApp</h3>
            <p className="text-brand-brown/80">Chat with us</p>
          </motion.a>

          <motion.a 
            href="https://instagram.com/cakestudio.surat"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-brand-cream rounded-[2rem] p-8 text-center flex flex-col items-center hover:bg-brand-pink/20 transition-colors duration-300 border border-brand-pink/30 group"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Instagram className="w-7 h-7 text-pink-500" />
            </div>
            <h3 className="font-bold text-xl text-brand-brown font-serif mb-2">Instagram</h3>
            <p className="text-brand-brown/80">@cakestudio.surat</p>
          </motion.a>

          <motion.a 
            href="https://share.google/NbkkdidBiAh3jul8F"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-brand-cream rounded-[2rem] p-8 text-center flex flex-col items-center hover:bg-brand-pink/20 transition-colors duration-300 border border-brand-pink/30 group"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Store className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="font-bold text-xl text-brand-brown font-serif mb-2">Google Profile</h3>
            <p className="text-brand-brown/80">Write a Review</p>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-brown font-serif mb-8 flex items-center">
              <MapPin className="w-8 h-8 text-brand-cocoa mr-3" />
              Visit Our Studio
            </h2>
            <div className="bg-brand-cream p-8 rounded-3xl border border-brand-pink/30 mb-8">
              <h3 className="font-bold text-lg text-brand-brown mb-2">CakeStudioSurat</h3>
              <p className="text-brand-brown/80 leading-relaxed mb-6">
                Shrungal Palace, Nem Nagar, <br />
                Pandesara, Udhana, <br />
                Surat, Gujarat 394221
              </p>
              <a 
                href="https://maps.google.com/?q=Shrungal+Palace,+Nem+Nagar,+Pandesara,+Udhana,+Surat,+Gujarat+394221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-cocoa text-sm font-medium rounded-full text-brand-cocoa bg-transparent hover:bg-brand-cocoa hover:text-white transition-colors"
              >
                Get Directions
              </a>
            </div>
            
            {/* Map Placeholder for design purposes */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.22384666628!2d72.8273!3d21.1444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0x6e9f1680d222271a!2sPandesara%2C%20Udhana%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-brown font-serif mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-brand-cream border border-brand-pink/30 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className="font-bold text-brand-brown pr-4 font-serif text-lg">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-brand-cocoa shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-cocoa shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-brand-brown/70 leading-relaxed border-t border-brand-pink/20 mx-6">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
