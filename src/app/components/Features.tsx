import React from 'react';
import { Tag, Plane, Train, Hotel, Clock, CreditCard, ArrowRight, Gem } from 'lucide-react';
import { ShieldCheckIcon } from './ui/shield-check-icon';
import { SparklesIcon } from './ui/sparkles-icon';
import { ZapIcon } from './ui/zap-icon';
import { CreditCardIcon } from './ui/credit-card-icon';
import { Reveal } from './ui/Reveal';

const DEALS = [
    {
        id: 1,
        title: "The Maldives Escape",
        discount: "30% OFF",
        description: "Experience ultimate luxury in our overwater villas with complimentary seaplane transfers.",
        image: "/destinations/maldives.png",
        className: "md:col-span-2 md:row-span-3 h-[400px] md:h-full",
        badgeTheme: "bg-white text-black"
    },
    {
        id: 2,
        title: "Swiss Alps Retreat",
        discount: "COMPLIMENTARY SPA",
        description: "Book 3 nights and receive full access to our thermal baths.",
        image: "/destinations/swiss.png",
        className: "md:col-span-2 md:row-span-2 h-[300px] md:h-full",
        badgeTheme: "bg-black text-white border border-white/20"
    },
    {
        id: 3,
        title: "Kyoto Early Bird",
        discount: "20% OFF",
        description: "Secure your Sakura season dates.",
        image: "/destinations/kyoto.png",
        className: "md:col-span-1 md:row-span-1 h-[250px] md:h-full",
        badgeTheme: "bg-white text-black"
    },
    {
        id: 4,
        title: "Amalfi Upgrade",
        discount: "FREE UPGRADE",
        description: "Ocean view suite guaranteed.",
        image: "/destinations/amalfi.png",
        className: "md:col-span-1 md:row-span-1 h-[250px] md:h-full",
        badgeTheme: "bg-white text-black"
    }
];

export function DealsSection() {
    return (
        <section className="py-12 md:py-24 bg-[#0A0A0A] text-white border-b border-white/5">
            <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <Tag className="w-4 h-4 text-white" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Members Only</span>
                            </div>
                            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-6 text-white">
                                Exclusive <span className="font-serif italic font-normal text-white/70">Offers</span>
                            </h2>
                        </div>
                        <button className="group flex items-center gap-2 type-label text-white border-white/30 hover:opacity-80 pb-2 transition-opacity">
                            <span>View All</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 md:h-[700px]">
                    {DEALS.map((deal, idx) => (
                        <div key={deal.id} className={deal.className}>
                            <Reveal delay={idx * 100} width="100%" className="h-full">
                                <div className="group cursor-pointer relative w-full h-full overflow-hidden rounded bg-white/5 border border-white/10 flex flex-col">

                                    {/* Full Image Background */}
                                    <img
                                        src={deal.image}
                                        alt={deal.title}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-smooth)] group-hover:scale-105 filter grayscale-[20%]"
                                        onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                                    />

                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                                    {/* Offer Badge */}
                                    <div className={`absolute top-4 right-4 px-3 py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded ${deal.badgeTheme}`}>
                                        <span className="type-label mt-px uppercase">{deal.discount}</span>
                                    </div>

                                    {/* Content (pushed to bottom) */}
                                    <div className="mt-auto relative z-10 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[var(--ease-smooth)]">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:underline decoration-1 underline-offset-4 decoration-white/30 transition-all">{deal.title}</h3>
                                        <p className="type-body text-white/50 font-serif italic line-clamp-2 md:line-clamp-none mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-sm">
                                            {deal.description}
                                        </p>

                                        <div className="flex items-center gap-2 type-label text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                            Book Now <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const SERVICES = [
    {
        icon: Hotel,
        title: "Luxury Stays",
        description: "Hand-picked collection of the world's finest hotels and villas."
    },
    {
        icon: Plane,
        title: "Premium Flights",
        description: "Access to private jets and first-class commercial routes."
    },
    {
        icon: Train,
        title: "Scenic Rail",
        description: "Journeys that are destinations in themselves."
    }
];

export function ServiceHighlights() {
    return (
        <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8">
                <Reveal width="100%">
                    <div className="text-center mb-8 mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Our Services</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-black">
                            Our <span className="font-serif italic font-normal text-gray-400">Services</span>
                        </h2>
                    </div>
                </Reveal>

                <Reveal width="100%">
                    <style>{`
                        @keyframes icon-pop-in {
                            0% { transform: scale(0) rotate(-15deg); opacity: 0; }
                            60% { transform: scale(1.2) rotate(10deg); opacity: 1; }
                            100% { transform: scale(1) rotate(0deg); opacity: 1; }
                        }
                        .animate-icon-pop {
                            animation: icon-pop-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
                        }
                    `}</style>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="group p-6 bg-white shadow-sm border border-gray-100 flex flex-col items-center text-center rounded-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
                                <div className="w-10 h-10 border border-gray-100/80 bg-gray-50 flex items-center justify-center mb-4 rounded-sm group-hover:bg-black transition-colors duration-300">
                                    <service.icon
                                        className="w-4 h-4 text-black group-hover:text-white transition-all duration-300 group-hover:scale-[1.25] group-hover:rotate-[15deg] animate-icon-pop"
                                        style={{ animationDelay: `${500 + (idx * 150)}ms` }}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <h3 className="text-[14px] font-bold text-black mb-2">{service.title}</h3>
                                <p className="text-[12px] text-gray-500 leading-relaxed max-w-[200px]">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

const TRUST_FACTORS = [
    { icon: Clock, title: "Real-time Availability", desc: "Live inventory updates.", isAnimated: false },
    { icon: ShieldCheckIcon, title: "Secure Payments", desc: "Bank-grade encryption.", isAnimated: true },
    { icon: ZapIcon, title: "Instant Confirmation", desc: "Zero waiting time.", isAnimated: true },
    { icon: SparklesIcon, title: "Best Price Guarantee", desc: "We match or beat rates.", isAnimated: true },
];

export function TrustSection() {
    return (
        <section className="py-12 md:py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-24">
                        <div className="max-w-md">
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldCheckIcon size={16} className="text-green-600" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Trust & Safety</span>
                            </div>
                            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-6">
                                Why Choose <span className="font-serif italic font-normal text-gray-400">Us</span>
                            </h2>
                            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                                We believe travel should be seamless, inspiring, and transparent. Our platform is built on trust and efficiency.
                            </p>
                            <button className="px-8 py-4 rounded bg-black text-white font-bold text-sm tracking-wider hover:bg-black/90 transition-colors shadow-lg hover:translate-y-px">
                                Learn More
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
                            {TRUST_FACTORS.map((factor, idx) => (
                                <div key={idx} className="group p-6 md:p-8 rounded bg-white border border-gray-100 flex items-start gap-3 md:gap-4 h-full hover:bg-gray-50 hover:shadow-sm transition-all duration-300 cursor-pointer">
                                    <div className="p-2 bg-white rounded-sm shrink-0 border border-gray-100/50 shadow-sm group-hover:shadow transition-all duration-300">
                                        {factor.isAnimated ? (
                                            <factor.icon
                                                size={20}
                                                className="text-black transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 animate-icon-pop"
                                                style={{ animationDelay: `${700 + (idx * 150)}ms` }}
                                            />
                                        ) : (
                                            <factor.icon
                                                className="w-5 h-5 text-black transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12 animate-icon-pop"
                                                style={{ animationDelay: `${700 + (idx * 150)}ms` }}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black text-sm mb-1">{factor.title}</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{factor.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
