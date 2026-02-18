import React from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const topDestinations = [
    {
        id: 1,
        name: "Santorini",
        country: "Greece",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        rating: 4.9,
        reviews: 2847,
        description: "Iconic white-washed villages perched on volcanic cliffs.",
        price: "$299"
    },
    {
        id: 2,
        name: "Kyoto",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        rating: 4.8,
        reviews: 3156,
        description: "Ancient temples and traditional tea houses.",
        price: "$349"
    },
    {
        id: 3,
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        rating: 4.7,
        reviews: 4521,
        description: "Tropical paradise with lush rice terraces.",
        price: "$249"
    },
    {
        id: 4,
        name: "Reykjavik",
        country: "Iceland",
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        rating: 4.9,
        reviews: 1893,
        description: "Northern lights and dramatic volcanic landscapes.",
        price: "$399"
    }
];

export function TopDestinations() {
    return (
        <section className="relative py-24 px-4 bg-[#FDFDFD] overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Section Header */}
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Curated Selection</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black leading-[0.9]">
                                Trending <span className="font-serif italic font-normal text-gray-400">Destinations</span>
                            </h2>
                        </div>

                        <div className="pb-2 ml-auto">
                            <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-blue-600 transition-colors">
                                <span>View All</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </Reveal>

                {/* Destination Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
                    {topDestinations.map((destination, index) => (
                        <Reveal key={destination.id} delay={index * 100}>
                            <div className="group cursor-pointer">

                                {/* Image Container */}
                                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-[2rem] bg-gray-100">
                                    <img
                                        src={destination.image}
                                        alt={`${destination.name}, ${destination.country}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                    {/* Floating Badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                                        <Star className="w-3.5 h-3.5 fill-black text-black" />
                                        <span className="text-xs font-bold text-black">{destination.rating}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3 px-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-bold text-black group-hover:text-blue-600 transition-colors">
                                                {destination.name}
                                            </h3>
                                            <div className="flex items-center gap-1.5 text-gray-500 mt-1">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span className="text-xs font-medium uppercase tracking-wider">{destination.country}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-lg font-bold text-black">{destination.price}</span>
                                            <span className="text-[10px] text-gray-400 uppercase tracking-wide">/ Night</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-500 font-serif italic leading-relaxed line-clamp-2 border-l border-gray-200 pl-3">
                                        {destination.description}
                                    </p>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
