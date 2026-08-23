import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data';
import axios from 'axios';

// Simulating a larger gallery by repeating images with slightly different keys/order
type Cake = {
  image: string;
  name: string;
  subCategory: string;
  description: string;
  weight: string;
  price: string;
};

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);
  const [filterLabel , setFilterLabel] = useState('All');
  const [data, setData] = useState<Cake[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
  { label: "All", value: "all" },
  { label: "Birthday", value: "birthday" },
  { label: "Anniversary", value: "anniversary" },
  { label: "Kids", value: "kids cake" },
  { label: "Celebration", value: "celebration cake" },
  { label: "Cupcakes", value: "cupcake" },
  { label: "Brownies", value: "brownie" },
];

 const getData = () => {
    setLoading(true);
    axios.get(`https://website-backend-node-api.onrender.com/api/product/show?category=cakeStudio&subCategory=${filter}`)
      .then(response => {
        setLoading(false);
        // Handle the response data
        console.log(response.data);
        setData(response.data.data);
      })
      .catch(error => {
        setLoading(false);
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getData();
  }, [filter]);

  const filterCakes = (obj:any) => {
    setFilter(obj.value);
    setFilterLabel(obj.label);
  }

  

  return (
    <div className="bg-brand-cream min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-brand-brown font-serif mb-6"
          >
            Made for Moments Worth Celebrating
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-brown/80 max-w-2xl mx-auto"
          >
            A visual journey through some of our favorite creations.
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
              key={cat.label}
              onClick={() => filterCakes(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 border ${
                filter === cat.label 
                  ? 'bg-brand-cocoa text-white border-brand-cocoa shadow-md' 
                  : 'bg-brand-cream text-brand-brown border-brand-pink/50 hover:border-brand-cocoa hover:text-brand-cocoa'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid Simulation */}
        <motion.div 
          layout 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence>
            {data.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={index}
                className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-sm hover:shadow-lg transition-all"
                onClick={() => setSelectedImage(img.image)}
              >
                <img 
                  src={img.image} 
                  alt="Gallery Cake" 
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-brand-cocoa" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-white p-12 rounded-[3rem] shadow-sm border border-brand-pink/20"
        >
          <h2 className="text-3xl font-bold text-brand-brown font-serif mb-6">Like what you see? Let's create yours.</h2>
          <a
            href="https://wa.me/919830216551"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-brand-cocoa hover:bg-brand-brown transition-colors shadow-lg"
          >
            Order Your Cake
          </a>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-pink transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Lightbox view"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
