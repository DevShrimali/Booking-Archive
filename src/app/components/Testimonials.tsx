import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "Archive Travel curated the most seamless honeymoon for us. The hotel in Amalfi was beyond words.",
    date: "October 2025"
  },
  {
    id: 2,
    name: "James Chen",
    location: "San Francisco, USA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "I appreciated the transparency and the 'no hidden fees' promise. Everything was exactly as described.",
    date: "December 2025"
  },
  {
    id: 3,
    name: "Sarah Miller",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    rating: 4.8,
    text: "The 'Exclusive Offers' section is a goldmine. Found a business class upgrade that saved me thousands.",
    date: "January 2026"
  },
  {
    id: 4,
    name: "Michael Ross",
    location: "Berlin, Germany",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "A truly premium experience from start to finish. The app is intuitive and the support was instant.",
    date: "February 2026"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
              Loved by <span className="font-serif italic font-normal text-gray-400">Travelers</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-black">4.9/5 Rating</span>
              <span className="text-sm text-gray-500">• Based on 10k+ reviews</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <Reveal key={testimonial.id} delay={idx * 100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col relative overflow-hidden group">

                {/* Quote Icon BG */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-100 rotate-180 group-hover:text-blue-50 transition-colors duration-300" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 font-medium italic mb-6 leading-relaxed flex-grow relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                  <div>
                    <h4 className="text-sm font-bold text-black">{testimonial.name}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">{testimonial.location}</p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-[10px] text-gray-300 font-medium">
                  {testimonial.date}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
