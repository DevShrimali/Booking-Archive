import React from 'react';
import { Apple, Smartphone } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function AppDownload() {
    return (
        <section className="py-12 md:py-24 bg-white text-black relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">

                        <div className="flex-1 space-y-6 md:space-y-8 max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <Smartphone size={16} className="text-black" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Mobile App</span>
                            </div>
                            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-6 text-black">
                                Travel <span className="font-serif italic font-normal text-gray-400">Smart</span>
                            </h2>
                            <p className="text-sm text-gray-500 max-w-md">
                                Get real-time trip updates, exclusive mobile-only deals, and paperless boarding passes. Keep your journey in your pocket.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="h-14 px-6 rounded-xl bg-black text-white font-bold flex items-center justify-center gap-3 hover:bg-black/80 transition-colors shadow-lg hover:-translate-y-1 active:translate-y-0">
                                    <Apple className="w-6 h-6 fill-white" />
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase font-bold tracking-wider">Download on the</div>
                                        <div className="text-sm font-extrabold -mt-0.5">App Store</div>
                                    </div>
                                </button>
                                <button className="h-14 px-6 rounded-xl bg-gray-50 border border-gray-200 text-black font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors hover:-translate-y-1 active:translate-y-0">
                                    <Smartphone className="w-6 h-6" />
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] uppercase font-bold tracking-wider">Get it on</div>
                                        <div className="text-sm font-extrabold -mt-0.5">Google Play</div>
                                    </div>
                                </button>
                            </div>

                            <div className="flex items-center gap-4 pt-4 md:pt-8 border-t border-gray-100">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100"></div>
                                    ))}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    Join <span className="text-black font-bold">2M+ travelers</span> worldwide
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full flex items-center justify-center md:justify-end py-4 md:py-0">
                            {/* Phone Mockup - Fixed spacing and alignment */}
                            <div className="w-[220px] h-[440px] md:w-[320px] md:h-[640px] bg-gray-900 rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-8 border-gray-800 shadow-2xl relative overflow-hidden backdrop-blur-xl bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
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
