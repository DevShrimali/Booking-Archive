import React, { useState, useRef, useEffect } from 'react';
import { Briefcase, HelpCircle, Tag } from 'lucide-react';
import { MenuIcon } from './ui/menu-icon';
import { UserIcon } from './ui/user-icon';
import { ChevronDownIcon } from './ui/chevron-down-icon';
import { MapPinIcon } from './ui/map-pin-icon';
import { CreditCardIcon } from './ui/credit-card-icon';
import { LogoutIcon } from './ui/logout-icon';
import { HeartIcon } from './ui/heart-icon';
import { GlobeIcon } from './ui/globe-icon';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
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
      title: "Luxury Retreat",
      location: "Bali, Indonesia",
      image: "/images/bali_luxury_retreat.png"
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
      title: "Premium Experience",
      location: "First Class Cabin",
      image: "/images/first_class_flight.png"
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
      title: "Alpine Express",
      location: "European Railways",
      image: "/images/alpine_express_train.png"
    }
  }
};

const PROFILE_MENU = [
  { label: 'My Trips', icon: Briefcase, isAnimated: false },
  { label: 'Saved Lists', icon: HeartIcon, isAnimated: true },
  { label: 'Account Settings', icon: UserIcon, isAnimated: true },
  { label: 'Manage Payments', icon: CreditCardIcon, isAnimated: true },
  { label: 'Sign Out', icon: LogoutIcon, isAnimated: true, isDanger: true },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-50">

        {/* Logo */}
        <div className="group cursor-pointer flex items-center gap-2 shrink-0">
          <div
            className={clsx(
              "w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300",
              isScrolled ? "border-black" : "border-black bg-black group-hover:rotate-180"
            )}
          >
            <div
              className={clsx(
                "w-[1px] h-3",
                isScrolled ? "bg-black" : "bg-white"
              )}
              style={{
                transform: `rotate(${scrollY * 0.5}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            ></div>
          </div>
          <span className="font-condensed font-bold text-xl tracking-wide uppercase hidden md:flex items-center text-black">
            Archive<span className="font-sans font-normal text-xs ml-1 mt-1 text-black/40 tracking-widest">Travel</span>
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
                  "type-label group flex items-center gap-1 transition-colors duration-200 py-2",
                  activeMenu === item ? "text-black" : "text-black/50 hover:text-black"
                )}
              >
                {item}
                <ChevronDownIcon size={12} className={clsx(
                  "transition-transform duration-300",
                  activeMenu === item ? "rotate-180 text-black" : "text-black/30 group-hover:text-black/50"
                )} isAnimated={activeMenu === item} />
              </button>
            ))}

            <a href="#" className="type-label text-black/50 hover:text-black transition-colors">
              Offers
            </a>
            <a href="#" className="type-label text-black/50 hover:text-black transition-colors">
              Support
            </a>
          </nav>
        </div>

        {/* Actions - Language, My Trips, Login */}
        <div className="flex items-center gap-6">

          {/* Language / Currency */}
          <button className="hidden lg:flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
            <GlobeIcon size={14} />
            <span className="text-[10px] font-bold tracking-wider">EN / USD</span>
          </button>



          {/* User Profile / Login */}
          <div className="relative hidden md:block" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center border transition-colors", isScrolled ? "border-gray-200 bg-gray-50" : "border-white/50 bg-white/50")}>
                <UserIcon size={16} className="text-black" />
              </div>
            </button>

            <div className={clsx(
              "absolute top-full right-0 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transition-all duration-200 origin-top-right",
              isProfileOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95 pointer-events-none"
            )}>
              <div className="p-3 border-b border-gray-50 mb-1">
                <button className="w-full py-2 text-xs font-bold bg-[#0B2545] text-white rounded-lg hover:bg-[#0f3260] transition-colors tracking-wide uppercase">
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
                  {item.isAnimated ? (
                    <item.icon size={14} />
                  ) : (
                    <item.icon className="w-3.5 h-3.5" />
                  )}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[350px] sm:w-[400px] sm:max-w-[400px] overflow-y-auto p-4 sm:p-6">
                <div className="flex flex-col gap-8 mt-6">
                  <div className="font-sans font-bold text-sm sm:text-base tracking-tighter uppercase text-black">
                    Archive<span className="text-gray-400 font-normal">.Travel</span>
                  </div>

                  {/* User Profile in Mobile Menu */}
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl min-h-[70px]">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                      <UserIcon size={24} className="text-black" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-sm text-black truncate">Guest User</div>
                      <div className="text-xs text-gray-500 truncate">Welcome back</div>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-6">
                    {Object.keys(NAVIGATION_ITEMS).map((item) => (
                      <div key={item} className="space-y-4">
                        <div className="text-xs font-bold uppercase tracking-[0.15em] text-black border-b border-gray-100 pb-3">
                          {item}
                        </div>
                        <div className="flex flex-col gap-3 pl-4">
                          {NAVIGATION_ITEMS[item as keyof typeof NAVIGATION_ITEMS].items.map((link) => (
                            <a
                              key={link.label}
                              href="#"
                              className="text-sm text-gray-500 hover:text-black hover:bg-gray-50 transition-colors block py-2 px-2 rounded-lg -ml-2 touch-target"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="space-y-4 pt-6 border-t border-gray-100">
                      <a
                        href="#"
                        className="block text-sm font-bold uppercase tracking-[0.15em] text-gray-500 hover:text-black py-2 px-2 rounded-lg -ml-2"
                      >
                        Offers
                      </a>
                      <a
                        href="#"
                        className="block text-sm font-bold uppercase tracking-[0.15em] text-gray-500 hover:text-black py-2 px-2 rounded-lg -ml-2"
                      >
                        Support
                      </a>

                    </div>

                    <div className="pt-6 pb-12 sm:pb-6">
                      <button className="w-full py-3 text-xs font-bold bg-[#0B2545] text-white rounded-lg hover:bg-[#0f3260] active:bg-[#091e38] transition-colors tracking-wide uppercase touch-target min-h-[48px] flex items-center justify-center">
                        Login / Sign Up
                      </button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
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
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
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
                  <div className="text-2xl font-serif italic text-gray-900">{NAVIGATION_ITEMS[activeMenu as keyof typeof NAVIGATION_ITEMS].featured.title}</div>
                  <div className="text-sm text-gray-600 flex items-center gap-2 font-medium">
                    <MapPinIcon size={14} />
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
