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
        image: "/destinations/santorini.png",
        rating: 4.9,
        reviews: 2847,
        description: "Iconic white-washed villages perched on volcanic cliffs.",
        price: "$299"
    },
    {
        id: 2,
        name: "Kyoto",
        country: "Japan",
        image: "/destinations/kyoto.png",
        rating: 4.8,
        reviews: 3156,
        description: "Ancient temples and traditional tea houses.",
        price: "$349"
    },
    {
        id: 3,
        name: "Bali",
        country: "Indonesia",
        image: "/destinations/bali.png",
        rating: 4.7,
        reviews: 4521,
        description: "Tropical paradise with lush rice terraces.",
        price: "$249"
    },
    {
        id: 4,
        name: "Reykjavik",
        country: "Iceland",
        image: "/destinations/reykjavik.png",
        rating: 4.9,
        reviews: 1893,
        description: "Northern lights and dramatic volcanic landscapes.",
        price: "$399"
    },
    {
        id: 5,
        name: "Amalfi Coast",
        country: "Italy",
        image: "/destinations/amalfi.png",
        rating: 4.9,
        reviews: 4102,
        description: "Breathtaking coastal cliffs and pastel-colored towns.",
        price: "$450"
    },
    {
        id: 6,
        name: "Tulum",
        country: "Mexico",
        image: "/destinations/tulum.png",
        rating: 4.6,
        reviews: 2154,
        description: "Ancient ruins meeting pristine Caribbean shores.",
        price: "$210"
    },
    {
        id: 7,
        name: "Maldives",
        country: "Maldives",
        image: "/destinations/maldives.png",
        rating: 5.0,
        reviews: 5321,
        description: "Overwater bungalows in crystal-clear turquoise waters.",
        price: "$899"
    },
    {
        id: 8,
        name: "Marrakech",
        country: "Morocco",
        image: "/destinations/marrakech.png",
        rating: 4.7,
        reviews: 1982,
        description: "Vibrant souks, historic palaces, and enchanting riads.",
        price: "$180"
    },
    {
        id: 9,
        name: "Cape Town",
        country: "South Africa",
        image: "/destinations/capetown.png",
        rating: 4.8,
        reviews: 2654,
        description: "Stunning mountain backdrops and beautiful beaches.",
        price: "$220"
    },
    {
        id: 10,
        name: "Swiss Alps",
        country: "Switzerland",
        image: "/destinations/swiss.png",
        rating: 4.9,
        reviews: 3105,
        description: "World-class skiing and majestic alpine scenery.",
        price: "$550"
    }
];

export function TopRecommendations() {
    return (
        <section className="relative py-12 md:py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8">
                {/* Section Header */}
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <MapPinIcon size={16} className="text-black" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Handpicked</span>
                            </div>
                            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-6 text-black">
                                Top <span className="font-serif italic font-normal text-gray-400">Recommendations</span>
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
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
                    {topDestinations.slice(0, 5).map((destination, index) => (
                        <Reveal key={destination.id} delay={index * 100} width="100%">
                            <div className="group cursor-pointer">

                                {/* Image Container */}
                                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded bg-gray-100">
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
