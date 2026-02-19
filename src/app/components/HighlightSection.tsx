import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const highlights = [
  {
    id: 1,
    category: "The Nature Edit",
    title: "Eco-Luxe",
    italicTitle: "Sanctuaries",
    description: "Sustainable villas designed for total immersion.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    theme: "from-green-900/80"
  },
  {
    id: 2,
    category: "City Series",
    title: "Iconic",
    italicTitle: "Metropolises",
    description: "Experience the pulse of vibrant cities.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop",
    theme: "from-blue-900/80"
  }
];

export function HighlightSection() {
  return (
    <section className="py-12 md:py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <Reveal key={item.id} delay={index * 100} width="100%">
              <div className="relative group overflow-hidden rounded-[2rem] aspect-[4/3] md:aspect-[16/10] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.theme} via-black/20 to-transparent opacity-90 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">{item.category}</span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                    {item.title} <span className="font-serif italic font-normal text-white/90">{item.italicTitle}</span>
                  </h2>

                  <div className="flex items-center justify-between mt-4">
                    <p className="text-white/80 text-sm md:text-base max-w-sm md:opacity-0 md:group-hover:opacity-100 md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.description}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
