import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { LetterReveal } from './ui/LetterReveal';

const cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Neo Paris",
    handle: "@future_paris",
    rotation: "-rotate-6",
    zIndex: "z-10"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Cyber Tokyo",
    handle: "@neon_dreams",
    rotation: "-rotate-3",
    zIndex: "z-20"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Zen Alps",
    handle: "@arctic_design",
    rotation: "rotate-0",
    zIndex: "z-30"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Dream Amalfi",
    handle: "@surreal_italy",
    rotation: "rotate-3",
    zIndex: "z-20"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Utopian NYC",
    handle: "@sky_architects",
    rotation: "rotate-6",
    zIndex: "z-10"
  },
];

export function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Track image loading
  useEffect(() => {
    if (loadedCount === cards.length) {
      setImagesLoaded(true);
    }
  }, [loadedCount]);

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      // Swipe detected - toggle expansion
      setIsExpanded(prev => !prev);
    }
  };

  const toggleExpansion = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FDFDFD]">

      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Aurora Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent" />

        {/* Animated Mesh Gradient */}
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-purple-300/20 via-blue-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-pink-300/20 via-purple-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

        {/* Subtle Grid Overlay - Increased visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-[0.03]">
        <div className="border-r border-black h-full"></div>
        <div className="border-r border-black h-full"></div>
        <div className="border-r border-black h-full"></div>
        <div className="border-r border-black h-full"></div>
        <div className="border-r border-black h-full"></div>
      </div>

      {/* Floating Side Images - Decorative Travel Elements */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rot)); }
          50% { transform: translateY(-20px) rotate(var(--rot)); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none hidden xl:block z-0 overflow-hidden">
        {/* Left Top - Adventure */}
        <div className="absolute top-[13%] left-[4%] w-48 h-64 shadow-2xl rotate-[-6deg] rounded-2xl overflow-hidden border-4 border-white bg-white animate-float z-99" style={{ '--rot': '-6deg', animationDelay: '0s' } as any}>
          <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel Adventure" />
        </div>

        {/* Left Bottom - Map/Planning */}
        <div className="absolute top-[28%] left-[-1%] w-44 h-42 shadow-xl rotate-[4deg] rounded-xl overflow-hidden border-4 border-white bg-white animate-float " style={{ '--rot': '4deg', animationDelay: '2s' } as any}>
          <img src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel Map" />
        </div>

        {/* Right Top - Relaxation/Resort */}
        <div className="absolute top-[12%] right-[5%] w-56 h-72 shadow-2xl rotate-[5deg] rounded-2xl overflow-hidden border-4 border-white bg-white animate-float z-99" style={{ '--rot': '5deg', animationDelay: '1s' } as any}>
          <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Relaxation" />
        </div>

        {/* Right Bottom - Urban/Culture */}
        <div className="absolute top-[20%] right-[-1%] w-44 h-60 shadow-xl rotate-[-3deg] rounded-xl overflow-hidden border-4 border-white bg-white animate-float" style={{ '--rot': '-3deg', animationDelay: '3s' } as any}>
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Urban Culture" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-500">Premium Travel Collection</span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-sans font-extrabold text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-black mb-6 flex flex-col items-center">
            <div className="overflow-hidden">
              <LetterReveal text="DISCOVER " stagger={50} />
            </div>
            <div className="overflow-hidden">
              <LetterReveal
                text="Extraordinary "
                delay={400}
                stagger={50}
                className="font-serif italic font-normal text-6xl sm:text-7xl md:text-9xl text-gray-400 pb-4"
              />
            </div>
          </h1>
        </Reveal>



        {/* Loading State */}
        {!imagesLoaded && (
          <div className="relative h-[400px] sm:h-[500px] w-full max-w-4xl mx-auto flex justify-center items-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="text-sm text-gray-500 font-medium">Loading destinations...</p>
            </div>
          </div>
        )}

        {/* The Card Fan Stack */}
        <div
          className={`relative h-[400px] sm:h-[500px] w-full max-w-4xl mx-auto flex justify-center items-center group perspective-1000 transition-opacity duration-300 ${imagesLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={toggleExpansion}
        >
          <div className={`relative flex items-center  pt-20 justify-center transition-all duration-300 ease-out ${isExpanded
            ? '-space-x-2 sm:-space-x-4'
            : '-space-x-16 sm:-space-x-24 md:-space-x-32 group-hover:-space-x-2 sm:group-hover:-space-x-4'
            }`}>
            {cards.map((card, index) => (
              <button
                key={card.id}
                aria-label={`View ${card.title} destination`}
                className={`
                  relative w-36 h-48 sm:w-48 sm:h-64 md:w-60 md:h-72 lg:w-72 lg:h-80 
                  bg-white rounded-lg sm:rounded-xl shadow-2xl border-4 sm:border-[8px] border-white
                  transform transition-all duration-300 ease-out
                  hover:shadow-2xl hover:-translate-y-1 hover:scale-105
                  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600
                  ${isExpanded ? 'rotate-0 scale-100 sm:scale-105 mx-1 sm:mx-2' : `${card.rotation} group-hover:rotate-0 group-hover:scale-100 sm:group-hover:scale-105 group-hover:mx-1 sm:group-hover:mx-2`}
                  ${card.zIndex}
                  overflow-hidden cursor-pointer
                `}
                style={{
                  // Micro-interaction: Stagger animation on load
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Loading skeleton */}
                {!imagesLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
                )}

                <img
                  src={card.image}
                  alt={`${card.title} - ${card.handle} destination view with scenic landscape`}
                  className="w-full h-full object-cover filter brightness-95 transition-transform duration-500 hover:scale-110"
                  onLoad={handleImageLoad}
                  loading="lazy"
                />

                {/* Floating Handle Pill - with micro-interaction */}
                <div
                  className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg animate-bob transition-all duration-300 hover:bg-white hover:scale-110"
                  style={{ animationDelay: `${card.id * 0.5}s` }}
                >
                  <span className="text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-black">{card.handle}</span>
                </div>

                {/* Hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                {/* Micro-interaction: Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
              </button>
            ))}
          </div>

          {/* Mobile hint indicator */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:hidden">
            <p className="text-xs text-gray-400 font-medium animate-pulse">Tap to explore destinations</p>
          </div>
        </div>

        {/* Scroll indicator with micro-interaction */}
        <Reveal delay={300}>
          <div className="mt-12 sm:mt-20 flex flex-col items-center gap-3 animate-bounce" style={{ animationDuration: '2s' }}>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
