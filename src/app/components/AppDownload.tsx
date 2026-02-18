import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function AppDownload() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-600/20 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                        <div className="flex-1 space-y-8 max-w-2xl">
                            <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest bg-white/5 backdrop-blur-sm">
                                Mobile App
                            </span>
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                                Travel Smart.<br />
                                <span className="text-gray-400">Wherever you are.</span>
                            </h2>
                            <p className="text-lg text-gray-400 font-medium max-w-md">
                                Get real-time trip updates, exclusive mobile-only deals, and paperless boarding passes. Keep your journey in your pocket.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="h-14 px-6 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors shadow-lg hover:-translate-y-1 active:translate-y-0">
                                    <Apple className="w-6 h-6 fill-black" />
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase font-bold tracking-wider">Download on the</div>
                                        <div className="text-sm font-extrabold -mt-0.5">App Store</div>
                                    </div>
                                </button>
                                <button className="h-14 px-6 rounded-xl bg-transparent border border-white/20 text-white font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors hover:-translate-y-1 active:translate-y-0">
                                    <Smartphone className="w-6 h-6" />
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase font-bold tracking-wider">Get it on</div>
                                        <div className="text-sm font-extrabold -mt-0.5">Google Play</div>
                                    </div>
                                </button>
                            </div>

                            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 animate-pulse"></div>
                                    ))}
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    Join <span className="text-white font-bold">2M+ travelers</span> worldwide
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full flex items-center justify-center md:justify-end py-12 md:py-0">
                            {/* Phone Mockup - Fixed spacing and alignment */}
                            <div className="w-[320px] h-[640px] bg-gray-900 rounded-[3.5rem] border-8 border-gray-800 shadow-2xl relative overflow-hidden backdrop-blur-xl bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
                                {/* Screen Content */}
                                <div className="absolute inset-0 bg-white flex flex-col pt-14 p-4 space-y-4">
                                    <div className="flex justify-between items-center px-2">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                                        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                                    </div>
                                    <div className="h-48 bg-gray-100 rounded-3xl w-full"></div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="h-32 bg-gray-100 rounded-3xl"></div>
                                        <div className="h-32 bg-gray-100 rounded-3xl"></div>
                                    </div>
                                    <div className="h-24 bg-gray-100 rounded-3xl w-full"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    );
}
