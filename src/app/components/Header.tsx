import React from 'react';
import { motion } from 'motion/react';
import { Menu, Search, User, Globe } from 'lucide-react';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between max-w-[1440px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#111827] flex items-center justify-center rounded-full">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-[#111827]">
            Archival<span className="font-sans font-light text-[#0055FF]">Index</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-[#4B5563] hover:text-[#0055FF] transition-colors">Destinations</a>
          <a href="#" className="text-sm font-medium text-[#4B5563] hover:text-[#0055FF] transition-colors">Hotels</a>
          <a href="#" className="text-sm font-medium text-[#4B5563] hover:text-[#0055FF] transition-colors">Flights</a>
          <a href="#" className="text-sm font-medium text-[#4B5563] hover:text-[#0055FF] transition-colors">Offers</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
