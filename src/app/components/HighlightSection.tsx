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
  },
  {
    id: 2,
    category: "City Series",
    title: "Iconic",
    italicTitle: "Metropolises",
    description: "Experience the pulse of vibrant cities.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "The Alpine Escape",
    title: "Ski",
    italicTitle: "Chalets",
    description: "Cozy firesides and pristine powder peaks.",
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Desert Mirage",
    title: "Nomadic",
    italicTitle: "Retreats",
    description: "Luxury tents under starlit desert skies.",
    image: "https://images.unsplash.com/photo-1543085794-6b92a839a850?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Island Time",
    title: "Private",
    italicTitle: "Atolls",
    description: "Your own slice of white sand paradise.",
    image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Heritage Collection",
    title: "Historic",
    italicTitle: "Castles",
    description: "Live like royalty in centuries-old estates.",
    image: "https://images.unsplash.com/photo-1582294101140-1092ed16c87a?q=80&w=1200&auto=format&fit=crop",
  }
];

export function HighlightSection() {
  return (
    <section className="py-12 md:py-20 bg-white border-y border-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Featured Curations</span>
          </div>
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-6 text-black">
            The <span className="font-serif italic font-normal text-gray-400">Collections</span>
          </h2>
        </div>
      </div>
      <style>{`
        @keyframes marquee-highlight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-highlight {
          animation: marquee-highlight 50s linear infinite;
        }
        .carousel-container:has(.group:hover) .animate-marquee-highlight {
          animation-play-state: paused;
        }
      `}</style>
      <div className="w-full">
        {/* Carousel Container */}
        <div className="flex overflow-hidden carousel-container w-full pb-12 pt-4">
          {[1, 2].map((trackIdx) => (
            <div key={trackIdx} className="flex gap-4 md:gap-6 pr-4 md:pr-6 animate-marquee-highlight flex-shrink-0">
              {highlights.map((item, index) => (
                <div key={`${trackIdx}-${item.id}`} className="flex-shrink-0 w-[82vw] md:w-[42vw]">
                  <Reveal delay={(index % 3) * 100} width="100%">
                    <div className="relative group overflow-hidden rounded bg-gray-100 aspect-[4/3] md:aspect-[16/10] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 hover:scale-[1.02]">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-smooth)] group-hover:scale-105 filter grayscale-[20%]"
                        onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                      />

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60`}></div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[var(--ease-smooth)]">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                          <span className="type-label text-white/80">{item.category}</span>
                        </div>

                        <h2 className="type-sub text-white mb-2 leading-tight">
                          {item.title} <span className="font-serif italic font-normal text-white/50">{item.italicTitle}</span>
                        </h2>

                        <div className="flex items-center justify-between mt-4">
                          <p className="type-body text-white/60 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {item.description}
                          </p>
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
