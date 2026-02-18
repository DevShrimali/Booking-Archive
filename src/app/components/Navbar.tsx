import React, { useState, useRef, useEffect } from 'react';
import { Menu, User, ChevronDown, MapPin, CreditCard, LogOut, Heart, Briefcase, Globe, HelpCircle, Tag } from 'lucide-react';
import { Button } from './ui/Button';
import { clsx } from 'clsx';

const NAVIGATION_ITEMS = {
  Hotels: {
    items: [
      { label: 'Luxury Hotels', desc: 'Five-star stays' },
      { label: 'Villas', desc: 'Private escapes' },
      { label: 'Resorts', desc: 'All-inclusive' },
      { label: 'Apartments', desc: 'City living' },
    ],
    featured: {
      title: "Amangiri Resort",
      location: "Utah, USA",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
    }
  },
  Flights: {
    items: [
      { label: 'Round Trip', desc: 'Return journeys' },
      { label: 'One Way', desc: 'Single leg' },
      { label: 'Multi-City', desc: 'Complex trips' },
      { label: 'Private Jets', desc: 'Exclusive travel' },
    ],
    featured: {
      title: "First Class",
      location: "Emirates Experience",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a1042759?q=80&w=1200&auto=format&fit=crop"
    }
  },
  Trains: {
    items: [
      { label: 'High Speed', desc: 'Eurostar, Shinkansen' },
      { label: 'Scenic Routes', desc: 'Glacier Express' },
      { label: 'Luxury Rail', desc: 'Orient Express' },
      { label: 'Rail Passes', desc: 'Multi-country' },
    ],
    featured: {
      title: "Glacier Express",
      location: "Switzerland",
      image: "https://images.unsplash.com/photo-1479058629457-0adc554b1e54?q=80&w=1200&auto=format&fit=crop"
    }
  }
};

const PROFILE_MENU = [
  { label: 'My Trips', icon: Briefcase },
  { label: 'Saved Lists', icon: Heart },
  { label: 'Account Settings', icon: User },
  { label: 'Manage Payments', icon: CreditCard },
  { label: 'Sign Out', icon: LogOut, isDanger: true },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out border-b",
        isScrolled || activeMenu
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative z-50">

        {/* Logo */}
        <div className="group cursor-pointer flex items-center gap-3 shrink-0">
          <div className={clsx("w-8 h-8 border border-black rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:rotate-180 shadow-sm", isScrolled ? "bg-black border-transparent" : "bg-white")}>
            <div className={clsx("w-0.5 h-3", isScrolled ? "bg-white" : "bg-black")}></div>
          </div>
          <span className="font-sans font-bold text-lg tracking-tighter uppercase hidden md:block text-black">
            Archive<span className="text-gray-400 font-normal">.Travel</span>
          </span>
        </div>

        {/* Navigation - Minimal Links */}
        <div className="hidden md:flex flex-col justify-center" ref={navRef}>
          <nav className="flex items-center gap-8">
            {/* Mega Menu Items */}
            {Object.keys(NAVIGATION_ITEMS).map((item) => (
              <button
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                className={clsx(
                  "text-xs font-bold uppercase tracking-widest flex items-center gap-1 transition-colors duration-200 py-2",
                  activeMenu === item ? "text-blue-600" : "text-gray-500 hover:text-black"
                )}
              >
                {item}
                <ChevronDown className={clsx(
                  "w-3 h-3 transition-transform duration-300",
                  activeMenu === item ? "rotate-180 text-blue-600" : "text-gray-300"
                )} />
              </button>
            ))}

            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
              Offers
            </a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
              Support
            </a>
          </nav>
        </div>

        {/* Actions - Language, My Trips, Login */}
        <div className="flex items-center gap-6">

          {/* Language / Currency */}
          <button className="hidden lg:flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
            <Globe className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold tracking-wider">EN / USD</span>
          </button>

          {/* My Trips (Desktop) */}
          <a href="#" className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            My Trips
          </a>

          {/* User Profile / Login */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center border transition-colors", isScrolled ? "border-gray-200 bg-gray-50" : "border-white/50 bg-white/50")}>
                <User className="w-4 h-4 text-black" />
              </div>
            </button>

            <div className={clsx(
              "absolute top-full right-0 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transition-all duration-200 origin-top-right",
              isProfileOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95 pointer-events-none"
            )}>
              <div className="p-3 border-b border-gray-50 mb-1">
                <button className="w-full py-2 text-xs font-bold bg-black text-white rounded-lg hover:bg-gray-900 transition-colors tracking-wide uppercase">
                  Login / Sign Up
                </button>
              </div>

              {PROFILE_MENU.map((item) => (
                <button
                  key={item.label}
                  className={clsx(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-bold transition-colors",
                    item.isDanger ? "text-red-500 hover:bg-red-50" : "text-gray-500 hover:text-black hover:bg-gray-50"
                  )}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>

      </div>

      {/* Mega Menu Dropdown Panel */}
      <div
        onMouseLeave={() => setActiveMenu(null)}
        className={clsx(
          "absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xl transition-all duration-300 ease-out overflow-hidden origin-top",
          activeMenu ? "opacity-100 visible max-h-[500px]" : "opacity-0 invisible max-h-0"
        )}
      >
        {/* Full Screen Background Image */}
        {activeMenu && (
          <div className="absolute inset-0 z-0">
            <img
              src={NAVIGATION_ITEMS[activeMenu as keyof typeof NAVIGATION_ITEMS].featured.image}
              className="w-full h-full object-cover opacity-90 ml-auto"
              alt=""
            />
            {/* Heavy White Gradient for text readability on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
          </div>
        )}

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid grid-cols-12 gap-12">

            {/* Links Section */}
            <div className="col-span-12 md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
              {activeMenu && NAVIGATION_ITEMS[activeMenu as keyof typeof NAVIGATION_ITEMS].items.map((link) => (
                <a key={link.label} href="#" className="group block space-y-1.5">
                  <div className="font-bold text-sm text-black group-hover:text-blue-600 transition-colors tracking-wide">{link.label}</div>
                  <div className="text-xs text-gray-500 font-medium group-hover:text-gray-800 leading-relaxed">{link.desc}</div>
                </a>
              ))}
            </div>

            {/* Featured Content Area */}
            <div className="col-span-12 md:col-start-9 md:col-span-4 flex flex-col justify-end h-full min-h-[200px] border-l border-gray-200 pl-8">
              {activeMenu && (
                <div className="text-black space-y-3">
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">Featured Collection</div>
                  <div className="text-4xl font-serif italic text-gray-900">{NAVIGATION_ITEMS[activeMenu as keyof typeof NAVIGATION_ITEMS].featured.title}</div>
                  <div className="text-sm text-gray-600 flex items-center gap-2 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {NAVIGATION_ITEMS[activeMenu as keyof typeof NAVIGATION_ITEMS].featured.location}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
