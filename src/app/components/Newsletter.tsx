import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { MailIcon } from './ui/mail-icon';
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
            <section className="py-12 md:py-24 bg-white border-t border-gray-50 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px]">
                <Reveal>
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <MailIcon size={32} className="text-green-600" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-black">Welcome to Archive.</h2>
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
            <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                        {/* Left: Title & Text */}
                        <div className="text-center md:text-left">
                            <h2 className="text-sm md:text-base font-bold tracking-tight text-black mb-1.5">
                                Join the <span className="font-serif italic font-normal text-gray-400">Archive</span>
                            </h2>
                            <p className="text-xs md:text-sm text-gray-500 max-w-sm">
                                Unlock secret offers & travel inspiration delivered Sundays.
                            </p>
                        </div>

                        {/* Right: Minimal Form */}
                        <form onSubmit={handleSubmit} className="w-full md:w-auto md:min-w-[320px] flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="flex-1 h-12 px-4 bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 type-body focus:outline-none focus:border-black focus:bg-white transition-all"
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="h-12 px-6 bg-black text-white type-label hover:bg-black/80 transition-colors flex items-center justify-center min-w-[120px]"
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
