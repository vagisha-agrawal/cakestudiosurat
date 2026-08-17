import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Heart, CheckCircle, Clock, Gift } from 'lucide-react';
import { cakes, testimonials } from '../data';
import heroImage from '../assets/images/hero_cake_1786293937740.jpg';

export default function Home() {
  return (
    <div className="pb-16 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-brand-cream sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-brand-brown sm:text-5xl md:text-6xl font-serif">
                <span className="block xl:inline">Made with Love.</span>{' '}
                <span className="block text-brand-cocoa xl:inline">Baked Fresh.</span>
              </h1>
              <p className="mt-3 text-base text-brand-brown/80 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Homemade cakes in Surat, freshly prepared for your special moments. 
                Experience the taste of premium ingredients and heartfelt baking.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 sm:justify-center lg:justify-start">
                <div className="flex items-center space-x-1 text-brand-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-brand-brown ml-2 font-medium">4.8/5</span>
                </div>
                <div className="text-brand-brown/70 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-pink mx-2"></span>
                  39+ Happy Reviews
                </div>
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <a
                  href="https://wa.me/919830216551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-cocoa hover:bg-brand-brown md:py-4 md:text-lg md:px-10 transition-colors shadow-lg hover:shadow-xl"
                >
                  Order Your Cake
                </a>
                <Link
                  to="/cakes"
                  className="w-full flex items-center justify-center px-8 py-3 border-2 border-brand-cocoa text-base font-medium rounded-full text-brand-cocoa bg-transparent hover:bg-brand-pink/20 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  View Our Cakes
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-bl-[4rem] lg:rounded-bl-[8rem] shadow-xl"
            src={heroImage}
            alt="Beautiful tiered cake with pink frosting"
          />
        </div>
      </section>

      {/* Why CakeStudioSurat */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-brand-cocoa font-semibold tracking-wide uppercase">Our Promise</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-brown font-serif sm:text-4xl">
              Why CakeStudioSurat?
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Homemade with Love', icon: Heart, desc: 'Baked in a home kitchen with utmost care and hygiene.' },
                { title: 'Beautifully Crafted', icon: Star, desc: 'Every cake is a unique piece of edible art.' },
                { title: 'Reasonable Prices', icon: CheckCircle, desc: 'Premium taste without the premium bakery price tag.' },
                { title: 'Made Fresh for You', icon: Clock, desc: 'No stale cakes. Baked exactly when you need it.' },
              ].map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="pt-6"
                >
                  <div className="flow-root bg-brand-cream rounded-2xl px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-brand-pink rounded-xl shadow-sm">
                          <feature.icon className="h-6 w-6 text-brand-brown" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-6 text-lg font-medium text-brand-brown tracking-tight font-serif">{feature.title}</h3>
                      <p className="mt-3 text-base text-brand-brown/70">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="py-16 sm:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-brown font-serif sm:text-4xl">
              A Cake for Every Celebration
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-brand-brown/70 mx-auto">
              Handcrafted perfection for birthdays, anniversaries, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cakes.slice(0, 4).map((cake, index) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={cake.image} 
                    alt={cake.name} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-pink/50 text-brand-brown mb-3">
                    {cake.category}
                  </span>
                  <h3 className="text-xl font-bold text-brand-brown font-serif mb-2">{cake.name}</h3>
                  <a 
                    href="https://wa.me/919830216551"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full block text-center bg-brand-cream text-brand-cocoa font-medium py-2 rounded-xl hover:bg-brand-pink hover:text-brand-brown transition-colors"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/cakes" className="inline-flex items-center px-6 py-3 border-2 border-brand-cocoa text-base font-medium rounded-full text-brand-cocoa hover:bg-brand-cocoa hover:text-white transition-colors">
              View All Cakes
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-brown font-serif sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-brand-pink/50 z-0"></div>
            
            {[
              { step: '01', title: 'Choose Your Cake', desc: 'Browse our collection or send us your custom design ideas.' },
              { step: '02', title: 'Place Your Pre-Order', desc: 'Confirm details and secure your slot via WhatsApp.' },
              { step: '03', title: 'Pick Up & Celebrate', desc: 'Collect your freshly baked cake from our studio.' }
            ].map((item, index) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-brand-cream border-4 border-white shadow-lg flex items-center justify-center mb-6">
                  <span className="text-3xl font-serif font-bold text-brand-cocoa">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-brown font-serif mb-3">{item.title}</h3>
                <p className="text-brand-brown/70 px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-brown font-serif sm:text-4xl">
              Loved by Surat
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm"
              >
                <div className="flex space-x-1 text-brand-gold mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-brand-brown/80 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-medium text-brand-brown font-serif">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-cocoa relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif mb-8 leading-tight">
            Your Celebration Deserves a Special Cake
          </h2>
          <a
            href="https://wa.me/919830216551"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full text-brand-cocoa bg-white hover:bg-brand-cream transition-colors shadow-xl"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
