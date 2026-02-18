import React from 'react';
import { Reveal } from './ui/Reveal';
import { Instagram } from 'lucide-react';

const gridItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1625758478428-7dd9cf61f16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Mode",
    subtitle: "Milan"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1683347435158-4f72c7a4679f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Taste",
    subtitle: "Paris"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1770747717056-e124a7eb2fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "View",
    subtitle: "Berlin"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1727868326091-9769aa3a8653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Zen",
    subtitle: "Kyoto"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1665952175239-e4bea46b1ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Walk",
    subtitle: "London"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1759264244741-7175af0b7e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    title: "Stay",
    subtitle: "Stockholm"
  },
];

export function CommunityGrid() {
  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="w-5 h-5 text-gray-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">@ArchiveTravel</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
              Travel <span className="font-serif italic font-normal text-gray-400">Inspiration</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 h-[600px] md:h-[400px]">
          {gridItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 100} className={`h-full ${index % 2 === 0 ? "translate-y-8" : "-translate-y-4"}`}>
              <div className="relative group h-full w-full overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>

                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 text-white">
                  <p className="font-bold text-lg leading-none">{item.title}</p>
                  <p className="text-white/80 text-[10px] uppercase tracking-widest">{item.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
