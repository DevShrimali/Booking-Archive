import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    title: "Book Hotels",
    text: "Search hotels by ratings, price & reviews. Find your perfect stay from cozy B&Bs to luxury resorts.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
    reverse: false
  },
  {
    title: "Book Flights",
    text: "Instant flight options with flexible dates. Compare airlines and find the best routes worldwide.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4cad9c75?q=80&w=1200&auto=format&fit=crop",
    reverse: true
  },
  {
    title: "Book Buses",
    text: "Affordable & comfortable bus travel. Connect between cities with ease and budget-friendly options.",
    image: "https://images.unsplash.com/photo-1629974162197-7dcd4a5b4d3f?q=80&w=1200&auto=format&fit=crop",
    reverse: false
  },
  {
    title: "Book Trains",
    text: "Live train availability & seats. Scenic routes and high-speed connections for the modern traveler.",
    image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop",
    reverse: true
  }
];

export function ServiceHighlights() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="space-y-16 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${service.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                  />
                  {/* Decorative Border */}
                  <div className="absolute inset-4 border border-white/30 z-20 pointer-events-none"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <h3 className="text-2xl font-serif font-bold text-[#111827]">{service.title}</h3>
                <p className="text-sm text-[#4B5563] font-light leading-relaxed max-w-md mx-auto md:mx-0">
                  {service.text}
                </p>
                <Button variant="link" className="text-[#0055FF] font-semibold text-base p-0 h-auto hover:text-[#0044CC] group">
                  Start Booking <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
