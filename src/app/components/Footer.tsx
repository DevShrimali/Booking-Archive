import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { LetterReveal } from './ui/LetterReveal';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">

        <div className="mb-24 relative z-10">
          <h2 className="text-[13vw] font-sans font-extrabold leading-[0.8] tracking-tighter text-white/90 select-none">
            <div className="overflow-hidden">
              <LetterReveal text="ARCHIVE" className="text-white transform origin-bottom-left" stagger={30} />
            </div>
            <div className="overflow-hidden">
              <LetterReveal text="TRAVEL." className="text-gray-500 transform origin-bottom-left" delay={200} stagger={30} />
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-16">

          <div className="md:col-span-4 space-y-8">
            <Reveal>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Manifesto</h4>
                <p className="text-gray-400 text-lg leading-relaxed font-serif italic max-w-sm">
                  We replace noise with precision. A curated index for the modern traveler who values aesthetic silence and kinetic speed.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-2 md:col-start-7 space-y-8">
            <Reveal delay={100}>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Directory</h4>
                <ul className="space-y-4">
                  {["Hotels", "Flights", "Rail", "Journal", "Membership"].map((link) => (
                    <li key={link}>
                      <a href="#" className="flex items-center gap-2 text-sm font-bold text-white hover:text-gray-400 transition-colors group uppercase tracking-wider">
                        <span className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-3 space-y-8">
            <Reveal delay={200}>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Social</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Facebook, label: "Facebook" }
                  ].map((social) => (
                    <a key={social.label} href="#" aria-label={social.label} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group">
                      <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={300}>
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            <p>© 2024 Archive Travel Inc. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}
