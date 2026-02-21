import React, { useState, useEffect } from 'react';
import { Reveal } from './ui/Reveal';
import { ChevronLeftIcon } from './ui/chevron-left-icon';
import { ChevronRightIcon } from './ui/chevron-right-icon';
import { MapPinIcon } from './ui/map-pin-icon';
import { StarIcon } from './ui/star-icon';

const destinations = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1400&auto=format&fit=crop",
    title: "Milan",
    subtitle: "Fashion & Design Hub",
    rating: 4.9,
    reviews: "2.5K reviews",
    description: "Experience iconic Italian fashion, stunning architecture, and world-class museums in Europe's fashion capital.",
    price: "$299/night",
    tag: "City"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1400&auto=format&fit=crop",
    title: "Paris",
    subtitle: "Romance & Culture",
    rating: 4.95,
    reviews: "5.2K reviews",
    description: "Discover timeless elegance, world-famous landmarks, and exquisite cuisine in the City of Light.",
    price: "$349/night",
    tag: "Romance"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop",
    title: "Berlin",
    subtitle: "Art & History",
    rating: 4.8,
    reviews: "3.1K reviews",
    description: "Immerse yourself in cutting-edge art, vibrant culture, and fascinating history blended perfectly.",
    price: "$199/night",
    tag: "Culture"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522383150241-6fed06d0c131?q=80&w=1400&auto=format&fit=crop",
    title: "Kyoto",
    subtitle: "Temples & Tradition",
    rating: 4.92,
    reviews: "4.8K reviews",
    description: "Connect with centuries of tradition through serene temples, peaceful gardens, and authentic culture.",
    price: "$249/night",
    tag: "Tradition"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1400&auto=format&fit=crop",
    title: "London",
    subtitle: "Heritage & Innovation",
    rating: 4.87,
    reviews: "6.1K reviews",
    description: "Blend historic monuments with modern innovation in the dynamic heart of the United Kingdom.",
    price: "$279/night",
    tag: "Heritage"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1548614228-84fa74d36895?q=80&w=1400&auto=format&fit=crop",
    title: "Stockholm",
    subtitle: "Nordic Beauty",
    rating: 4.88,
    reviews: "2.9K reviews",
    description: "Enjoy stunning archipelago views, minimalist design, and sustainable living experiences.",
    price: "$329/night",
    tag: "Architecture"
  },
];

export function CommunityGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % destinations.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNavigation = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(newIndex);
    setIsAutoPlay(false);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const nextSlide = () => {
    handleNavigation((activeIndex + 1) % destinations.length);
  };

  const prevSlide = () => {
    handleNavigation((activeIndex - 1 + destinations.length) % destinations.length);
  };

  const goToSlide = (index: number) => {
    handleNavigation(index);
  };

  const current = destinations[activeIndex];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal width="100%">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="type-display-md tracking-tight text-black flex items-center justify-center gap-3 flex-wrap">
              DISCOVER YOUR <span className="font-serif italic font-normal text-black/30 lowercase text-[1.1em] transform -translate-y-1">Next Adventure</span>
            </h2>
            <p className="type-body text-black/50 mt-4 max-w-md mx-auto">
              Explore curated destinations that inspire unforgettable journeys.
            </p>
          </div>
        </Reveal>

        {/* Main Carousel */}
        <Reveal width="100%">
          <div className="relative w-full rounded-2xl overflow-hidden bg-black h-[320px] md:h-[420px] lg:h-[520px]">
            {/* Image Container - Smooth Transitions */}
            <div className="relative w-full h-full">
              {destinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                  />
                  <div className="absolute inset-0 bg-black/35" />
                </div>
              ))}

              {/* Content - Single Container for Smooth Animation */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 lg:p-14">
                {/* Top Section */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-block bg-white text-black type-label px-3 py-1.5 rounded mb-4">
                      {current.tag}
                    </div>
                    <h1 className="font-condensed font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-2 leading-[0.9] tracking-tight uppercase drop-shadow-lg">
                      {current.title}
                    </h1>
                    <div className="flex items-center gap-2 text-white/90 type-sub mt-2">
                      <MapPinIcon size={16} className="flex-shrink-0" />
                      <span>{current.subtitle}</span>
                    </div>
                  </div>

                  {/* Rating Card */}
                  <div className="hidden md:flex flex-col items-center bg-white rounded-xl px-4 py-4 shadow-lg min-w-[100px]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <StarIcon size={20} className="text-black" />
                      <span className="text-black font-bold text-lg">{current.rating}</span>
                    </div>
                    <span className="text-gray-600 text-xs font-medium">{current.reviews}</span>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4 md:space-y-6">
                  <p className="type-sub text-white/95 max-w-2xl leading-relaxed drop-shadow">
                    {current.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                    <div>
                      <p className="type-label text-white/70 mb-1">Starting from</p>
                      <p className="font-condensed font-bold text-4xl md:text-5xl text-white drop-shadow-md">{current.price.split('/')[0]}<span className="text-xl text-white/60">/night</span></p>
                    </div>

                    <button className="bg-white hover:bg-black hover:text-white text-black type-label px-8 py-4 transition-all duration-300 w-fit">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2.5 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <ChevronLeftIcon size={24} className="text-white group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2.5 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <ChevronRightIcon size={24} className="text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Carousel Indicators */}
        <Reveal width="100%">
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`transition-all duration-300 disabled:cursor-not-allowed ${index === activeIndex
                  ? "bg-black w-8 h-1"
                  : "bg-black/20 hover:bg-black/40 w-4 h-1"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Reveal>

        {/* Thumbnail Grid */}
        <Reveal width="100%">
          <div className="mt-14">
            <h3 className="text-base md:text-lg font-bold text-black mb-6 text-center">More Destinations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {destinations.map((destination, index) => (
                <button
                  key={destination.id}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`relative overflow-hidden rounded-xl h-[140px] md:h-[160px] transition-all duration-300 border-2 disabled:cursor-not-allowed group ${index === activeIndex
                    ? "border-black shadow-lg"
                    : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                    }`}
                >
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 flex flex-col justify-end p-3">
                    <p className="text-white font-bold text-xs md:text-sm leading-tight line-clamp-1">{destination.title}</p>
                    <p className="text-gray-200 text-[10px] md:text-xs line-clamp-1">{destination.subtitle}</p>
                  </div>

                  {index === activeIndex && (
                    <div className="absolute top-2 right-2 bg-white text-black type-label px-2 py-1">
                      Current
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
