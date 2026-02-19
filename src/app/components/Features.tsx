import React from 'react';
import { Tag, Plane, Train, Hotel, ShieldCheck, Clock, CreditCard, Sparkles, ArrowRight, Zap, Gem } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const DEALS = [
    {
        id: 1,
        title: "Summer in Santorini",
        discount: "20% OFF",
        description: "Book early for the best views in Oia.",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Kyoto Cherry Blossoms",
        discount: "LIMITED TIME",
        description: "Experience Sakura season like never before.",
        image: "https://images.unsplash.com/photo-1522383150241-6fed06d0c131?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Business Class Upgrade",
        discount: "FREE UPGRADE",
        description: "On select trans-atlantic flights this month.",
        image: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=800&auto=format&fit=crop"
    }
];

export function DealsSection() {
    return (
        <section className="py-12 md:py-24 bg-white border-b border-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <Tag className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Members Only</span>
                            </div>
                            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-black leading-[0.9]">
                                Exclusive <span className="font-serif italic font-normal text-gray-400">Offers</span>
                            </h2>
                        </div>
                        <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-blue-600 transition-colors pb-2">
                            <span>View All</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {DEALS.map((deal, idx) => (
                        <Reveal key={deal.id} delay={idx * 100} width="100%">
                            <div className="group cursor-pointer relative h-[400px] overflow-hidden rounded-[2rem] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-gray-100">

                                {/* Full Image Background */}
                                <img
                                    src={deal.image}
                                    alt={deal.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                                {/* Offer Badge */}
                                <div className="absolute top-6 right-6 overflow-hidden px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-900 to-black text-white text-xs font-bold tracking-wider uppercase shadow-lg border border-white/10 group/badge">
                                    <span className="relative z-10">{deal.discount}</span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{deal.title}</h3>
                                    <p className="text-sm text-gray-300 font-medium line-clamp-2 mb-4 group-hover:text-white transition-colors">
                                        {deal.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        Book Now <ArrowRight className="w-3 h-3" />
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
        <section className="py-12 md:py-24 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 max-w-7xl">
                <Reveal width="100%">
                    {/* Added Header for Consistency */}
                    <div className="text-center mb-8 md:mb-16 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Gem className="w-4 h-4 text-gray-400" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Our Services</span>
                        </div>
                        <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-black mb-4">
                            Our <span className="font-serif italic font-normal text-gray-400">Services</span>
                        </h2>
                    </div>
                </Reveal>

                <Reveal width="100%">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="group relative p-10 rounded-[2rem] bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full">

                                <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-black group-hover:border-black transition-all duration-300">
                                    <service.icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-base font-bold text-black mb-4">{service.title}</h3>

                                <p className="text-gray-500 leading-relaxed text-sm font-medium">
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
    { icon: Clock, title: "Real-time Availability", desc: "Live inventory updates." },
    { icon: ShieldCheck, title: "Secure Payments", desc: "Bank-grade encryption." },
    { icon: Zap, title: "Instant Confirmation", desc: "Zero waiting time." },
    { icon: Sparkles, title: "Best Price Guarantee", desc: "We match or beat rates." },
];

export function TrustSection() {
    return (
        <section className="py-12 md:py-24 bg-white border-t border-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-24">
                        <div className="max-w-md">
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldCheck className="w-4 h-4 text-green-600" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Trust & Safety</span>
                            </div>
                            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-6">
                                Why Choose <span className="font-serif italic font-normal text-gray-400">Us</span>
                            </h2>
                            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                                We believe travel should be seamless, inspiring, and transparent. Our platform is built on trust and efficiency.
                            </p>
                            <button className="px-8 py-4 rounded-full bg-black text-white font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors shadow-lg hover:translate-y-px">
                                Learn More
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
                            {TRUST_FACTORS.map((factor, idx) => (
                                <div key={idx} className="p-6 md:p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 flex items-start gap-3 md:gap-4 h-full">
                                    <div className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                                        <factor.icon className="w-5 h-5 text-black" />
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
