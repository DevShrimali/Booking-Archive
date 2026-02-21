import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MapPinIcon } from './ui/map-pin-icon';
import { StarIcon } from './ui/star-icon';
import { Reveal } from './ui/Reveal';

const topDestinations = [
    {
        id: 1,
        name: "Santorini",
        country: "Greece",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 2847,
        description: "Iconic white-washed villages perched on volcanic cliffs.",
        price: "$299"
    },
    {
        id: 2,
        name: "Kyoto",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1522383150241-6fed06d0c131?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        reviews: 3156,
        description: "Ancient temples and traditional tea houses.",
        price: "$349"
    },
    {
        id: 3,
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1560526881-721c926e76f6?q=80&w=800&auto=format&fit=crop",
        rating: 4.7,
        reviews: 4521,
        description: "Tropical paradise with lush rice terraces.",
        price: "$249"
    },
    {
        id: 4,
        name: "Reykjavik",
        country: "Iceland",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
        rating: 4.9,
        reviews: 1893,
        description: "Northern lights and dramatic volcanic landscapes.",
        price: "$399"
    }
];

export function TopDestinations() {
    return (
        <section className="relative py-12 md:py-24 px-4 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Section Header */}
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <MapPinIcon size={16} className="text-black" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Curated Selection</span>
                            </div>
                            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-6 text-black">
                                Trending <span className="font-serif italic font-normal text-gray-400">Destinations</span>
                            </h2>
                        </div>

                        <div className="pb-2 ml-auto">
                            <button className="group flex items-center gap-2 type-label text-black hover-underline">
                                <span>View All</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </Reveal>

                {/* Destination Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-4 md:gap-y-12">
                    {topDestinations.map((destination, index) => (
                        <Reveal key={destination.id} delay={index * 100}>
                            <div className="group cursor-pointer">

                                {/* Image Container */}
                                <div className="relative aspect-[3/4] sm:aspect-[3/4] mb-4 overflow-hidden rounded bg-gray-100">
                                    <img
                                        src={destination.image}
                                        alt={`${destination.name}, ${destination.country}`}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-smooth)] group-hover:scale-105 filter grayscale-[20%]"
                                        loading="lazy"
                                        onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                                    {/* Floating Badge */}
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <StarIcon size={12} className="text-black" />
                                        <span className="type-label text-black mt-px">{destination.rating}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3 px-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="type-sub text-black group-hover:underline decoration-1 underline-offset-4 decoration-black/30 transition-all">
                                                {destination.name}
                                            </h3>
                                            <div className="flex items-center gap-1.5 text-black/50 mt-1">
                                                <MapPinIcon size={12} className="opacity-70" />
                                                <span className="type-label">{destination.country}</span>
                                            </div>
                                        </div>
                                        <div className="text-right mt-1">
                                            <span className="block type-sub text-black">{destination.price}</span>
                                            <span className="type-label text-black/40">/ Night</span>
                                        </div>
                                    </div>

                                    <p className="type-body text-black/60 font-serif italic line-clamp-2 pr-6">
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
