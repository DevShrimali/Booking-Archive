import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    if (status === 'success') {
        return (
            <section className="py-24 bg-white border-t border-gray-50 flex flex-col items-center justify-center min-h-[400px]">
                <Reveal>
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">Welcome to Archive.</h2>
                        <p className="text-gray-500">Check your inbox for your first curated collection.</p>
                        <button
                            onClick={() => { setStatus('idle'); setEmail(''); }}
                            className="mt-8 text-sm font-bold underline hover:text-blue-600 transition-colors"
                        >
                            Sign up another email
                        </button>
                    </div>
                </Reveal>
            </section>
        );
    }

    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                        {/* Left: Title & Text */}
                        <div className="text-center md:text-left">
                            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-black mb-1.5">
                                Join the <span className="font-serif italic font-normal text-gray-400">Archive</span>
                            </h2>
                            <p className="text-xs md:text-sm text-gray-500 max-w-sm">
                                Unlock secret offers & travel inspiration delivered Sundays.
                            </p>
                        </div>

                        {/* Right: Minimal Form */}
                        <form onSubmit={handleSubmit} className="w-full md:w-auto min-w-[320px] flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="flex-1 h-10 px-4 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder:text-gray-400 text-sm focus:outline-none focus:border-black/30 focus:bg-white transition-all"
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="h-10 px-5 bg-black text-white rounded-lg font-bold text-[10px] uppercase tracking-wider hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap"
                            >
                                {status === 'loading' ? (
                                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    'Subscribe'
                                )}
                            </button>
                        </form>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
