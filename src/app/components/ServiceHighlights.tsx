import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const services = [
  {
    title: "Book Hotels",
    text: "Search hotels by ratings, price & reviews. Find your perfect stay from cozy B&Bs to luxury resorts.",
    image: "https://images.unsplash.com/photo-1741506131058-533fcf894483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzEyMTQxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    reverse: false
  },
  {
    title: "Book Flights",
    text: "Instant flight options with flexible dates. Compare airlines and find the best routes worldwide.",
    image: "https://images.unsplash.com/photo-1710028267880-f34d75a5ead6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmRvdyUyMHZpZXclMjBza3l8ZW58MXx8fHwxNzcxMjI2Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    reverse: true
  },
  {
    title: "Book Buses",
    text: "Affordable & comfortable bus travel. Connect between cities with ease and budget-friendly options.",
    image: "https://images.unsplash.com/photo-1655520553517-1e5fa3fa976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXMlMjBpbnRlcmlvciUyMGNvbWZvcnRhYmxlfGVufDF8fHx8MTc3MTIyNjc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    reverse: false
  },
  {
    title: "Book Trains",
    text: "Live train availability & seats. Scenic routes and high-speed connections for the modern traveler.",
    image: "https://images.unsplash.com/photo-1768224278506-b9c1c3ecfe29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc3BlZWQlMjB0cmFpbiUyMGxhbmRzY2FwZSUyMHZpZXd8ZW58MXx8fHwxNzcxMjI2Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    reverse: true
  }
];

export function ServiceHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-16 items-center ${service.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Decorative Border */}
                  <div className="absolute inset-4 border border-white/30 z-20 pointer-events-none"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <h3 className="text-4xl font-serif font-bold text-[#111827]">{service.title}</h3>
                <p className="text-lg text-[#4B5563] font-light leading-relaxed max-w-md mx-auto md:mx-0">
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
