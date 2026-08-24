import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials, galleryImages } from '../data';
import axios from 'axios';

type Testimony = {
  customerName: string;
  rating: Number;
  review: string;
  status: string;
};

export default function HappyCustomers() {

  const [data, setData] = useState<Testimony[]>([]);

  const getData = () => {
    axios.get(`https://website-backend-node-api.onrender.com/api/testimonial/show?category=cakeStudio`)
      .then(response => {
        // Handle the response data
        console.log(response.data);
        setData(response.data.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-brand-cream min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-brand-brown font-serif mb-6"
          >
            Loved by Cake Lovers in Surat ❤️
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-3 text-brand-brown"
          >
            <div className="bg-white px-6 py-3 rounded-full shadow-sm flex items-center space-x-2 border border-brand-pink/30">
              <span className="font-bold text-xl font-serif">4.8</span>
              <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
              <span className="text-brand-pink mx-2">|</span>
              <span className="font-medium">39+ Google Reviews</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {data.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute top-8 right-8 text-brand-pink opacity-20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <div className="flex items-center space-x-3 relative z-10 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-pink/50 flex items-center justify-center font-bold text-brand-cocoa font-serif">
                  {testimonial.customerName.charAt(0)}
                </div>
                <p className="font-bold text-brand-brown text-xl font-serif truncate">{testimonial.customerName}</p>
              </div>
              
              <div className="flex space-x-1 text-brand-gold mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-brand-brown/80 mb-8 text-lg leading-relaxed relative z-10">
                "{testimonial.review.length > 200 ? testimonial.review.slice(0, 200) + '...' : testimonial.review}"
              </p>
              
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-brand-brown font-serif mb-10">Customer Celebrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((img, idx) => (
              <div key={idx} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-2xl shadow-sm">
                <img 
                  src={img} 
                  alt="Customer Cake Celebration" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <a
            href="https://wa.me/919830216551"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-cocoa hover:bg-brand-brown transition-colors shadow-md"
          >
            Become a Happy Customer
          </a>
        </div>

      </div>
    </div>
  );
}
