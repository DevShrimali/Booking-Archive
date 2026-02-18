import React, { useRef, useState } from 'react';
import { Palmtree, Building2, Mountain, Tent, Star, Sparkles, Gem, Coffee, Waves, Plane, Bed } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const CATEGORIES = [
    { id: 1, label: 'Trending', icon: Sparkles },
    { id: 2, label: 'Beachfront', icon: Palmtree },
    { id: 3, label: 'Iconic Cities', icon: Building2 },
    { id: 4, label: 'Alpine', icon: Mountain },
    { id: 5, label: 'Glamping', icon: Tent },
    { id: 6, label: 'Luxury', icon: Gem },
    { id: 7, label: 'Bed & Breakfast', icon: Coffee },
    { id: 8, label: 'Lakeside', icon: Waves },
    { id: 9, label: 'Design', icon: Star },
    { id: 10, label: 'Castles', icon: Building2 }, // Using Building2 as placeholder
    { id: 11, label: 'Islands', icon: Palmtree },
    { id: 12, label: 'Arctic', icon: Mountain },
];

export function CategoryBar() {
    const [activeCategory, setActiveCategory] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm py-4">
            <div className="container mx-auto px-4 max-w-7xl relative group">

                {/* Scroll Buttons */}
                {showLeftArrow && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg hover:scale-110 transition-transform ml-2"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                )}

                {showRightArrow && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg hover:scale-110 transition-transform mr-2"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex items-center gap-8 sm:gap-12 overflow-x-auto no-scrollbar px-4 sm:px-12 scroll-smooth"
                >
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex flex-col items-center gap-2 min-w-fit group/item transition-opacity duration-200 ${activeCategory === category.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                        >
                            <category.icon
                                className={`w-6 h-6 transition-transform duration-300 ${activeCategory === category.id ? 'scale-110 stroke-[2.5px]' : 'group-hover/item:scale-110'}`}
                            />
                            <span className={`text-xs font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === category.id ? 'text-black border-b-2 border-black pb-1' : 'text-gray-500 pb-1 border-b-2 border-transparent group-hover/item:border-gray-300'}`}>
                                {category.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
