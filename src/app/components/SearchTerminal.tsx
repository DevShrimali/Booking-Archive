import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, ArrowRight, Loader2, ChevronDown, Plane, Train, Hotel, Minus, Plus, Building2, PlaneTakeoff, PlaneLanding, LocateFixed } from 'lucide-react';
import { clsx } from 'clsx';
import { Reveal } from './ui/Reveal';
import { motion, AnimatePresence } from 'motion/react';

const SUGGESTIONS = [
  { id: 1, name: "London, United Kingdom", type: "City", icon: MapPin },
  { id: 2, name: "London Heathrow (LHR)", type: "Airport", icon: Plane },
  { id: 3, name: "Kyoto, Japan", type: "City", icon: MapPin },
  { id: 4, name: "New York, USA", type: "City", icon: MapPin },
  { id: 5, name: "Paris, France", type: "City", icon: MapPin },
];

const TABS = [
  { id: 'Hotels', icon: Hotel },
  { id: 'Flights', icon: Plane },
  { id: 'Trains', icon: Train },
];

export function SearchTerminal() {
  const [activeTab, setActiveTab] = useState<'Hotels' | 'Flights' | 'Trains'>('Hotels');
  const [isSearching, setIsSearching] = useState(false);

  // Inputs
  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState(''); // For Flights/Trains

  // Dropdown States
  const [showLocationDropdown, setShowLocationDropdown] = useState(false); // For destination
  const [showOriginDropdown, setShowOriginDropdown] = useState(false); // For origin
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  // Guest State
  const [guests, setGuests] = useState({ adults: 2, children: 0, pets: 0 });

  // Date State (Mock)
  const [dates, setDates] = useState("Add Dates");

  // Refs for click outside
  const locationRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
      if (originRef.current && !originRef.current.contains(event.target as Node)) {
        setShowOriginDropdown(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowDateDropdown(false);
      }
      if (guestRef.current && !guestRef.current.contains(event.target as Node)) {
        setShowGuestDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = async () => {
    setIsSearching(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSearching(false);
  };

  const filteredDestination = SUGGESTIONS.filter(item =>
    item.name.toLowerCase().includes(destination.toLowerCase())
  );

  const filteredOrigin = SUGGESTIONS.filter(item =>
    item.name.toLowerCase().includes(origin.toLowerCase())
  );

  const totalGuests = guests.adults + guests.children;
  const isTransport = activeTab === 'Flights' || activeTab === 'Trains';

  return (
    <section className="relative z-30 -mt-16 sm:-mt-24 px-4 pb-6 sm:pb-20">
      <Reveal className="w-full max-w-6xl mx-auto" overflowVisible={true}>
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-xl border border-gray-100 p-5 sm:p-8 relative">

          <div className="flex flex-col gap-4 sm:gap-8 relative z-10">

            {/* Tabs with Icons */}
            <div className="flex gap-1 bg-gray-50 p-1 rounded-full w-fit">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={clsx(
                    "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 relative overflow-hidden",
                    activeTab === tab.id
                      ? "bg-black text-white shadow-sm"
                      : "text-gray-500 hover:text-black hover:bg-white/50"
                  )}
                >
                  {/* Icon with fill effect to simulate '3D' depth or solidity */}
                  <motion.div
                    animate={{
                      scale: activeTab === tab.id ? [1, 1.2, 1] : 1,
                      rotate: activeTab === tab.id ? [0, -10, 10, 0] : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <tab.icon className={clsx("w-4 h-4", activeTab === tab.id ? "fill-white" : "fill-transparent")} />
                  </motion.div>
                  {tab.id}
                </button>
              ))}
            </div>

            {/* Inputs Grid - Dynamic Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

              {/* Dynamic Input Fields Container */}
              <div
                className={clsx(
                  "lg:col-span-10 grid grid-cols-1 gap-0 border border-gray-100 rounded-2xl overflow-visible divide-y md:divide-y-0 md:divide-x divide-gray-100 relative bg-white transition-all",
                  isTransport ? "md:grid-cols-4" : "md:grid-cols-3"
                )}
              >

                {/* Origin Input (Only for Flights/Trains) */}
                {isTransport && (
                  <div className="relative p-4 flex items-center gap-4 cursor-text h-[86px]" ref={originRef}>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                      <LocateFixed className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">From</label>
                      <input
                        type="text"
                        value={origin}
                        onChange={(e) => {
                          setOrigin(e.target.value);
                          setShowOriginDropdown(true);
                        }}
                        onFocus={() => setShowOriginDropdown(true)}
                        placeholder="Origin City"
                        className="w-full bg-transparent font-bold text-xs sm:text-sm text-black focus:outline-none placeholder:text-gray-300 truncate"
                      />
                    </div>

                    {showOriginDropdown && (
                      <div className="absolute top-[110%] left-0 w-[300px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 p-2">
                        {filteredOrigin.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setOrigin(item.name);
                              setShowOriginDropdown(false);
                            }}
                            className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 rounded-2xl transition-colors text-left"
                          >
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0"><item.icon className="w-4 h-4" /></div>
                            <div><div className="font-bold text-sm text-black">{item.name}</div></div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Destination Input */}
                <div className="relative p-4 flex items-center gap-4 cursor-text h-[86px]" ref={locationRef}>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-black shrink-0">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab === 'Flights' ? 'flight' : 'pin'}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {activeTab === 'Flights' ? <PlaneLanding className="w-5 h-5" /> : <MapPin className="w-5 h-5 fill-current" />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">
                      {isTransport ? "To" : "Where to?"}
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => {
                        setDestination(e.target.value);
                        setShowLocationDropdown(true);
                      }}
                      onFocus={() => setShowLocationDropdown(true)}
                      placeholder={isTransport ? "Destination" : "City or Airport"}
                      className="w-full bg-transparent font-bold text-sm text-black focus:outline-none placeholder:text-gray-300 truncate"
                    />
                  </div>

                  {showLocationDropdown && (
                    <div className="absolute top-[110%] left-0 w-[300px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 p-2">
                      {filteredDestination.length > 0 ? filteredDestination.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setDestination(item.name);
                            setShowLocationDropdown(false);
                          }}
                          className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 rounded-2xl transition-colors text-left"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-black">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.type}</div>
                          </div>
                        </button>
                      )) : (
                        <div className="px-4 py-3 text-sm text-gray-400">No results found</div>
                      )}
                    </div>
                  )}
                </div>

                {/* Dates Picker */}
                <div
                  className="relative p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50/50 h-[86px] transition-colors"
                  ref={dateRef}
                  onClick={() => setShowDateDropdown(!showDateDropdown)}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">Dates</label>
                    <div className={clsx("font-bold text-sm truncate", dates === "Add Dates" ? "text-gray-300" : "text-black")}>
                      {dates}
                    </div>
                  </div>

                  {showDateDropdown && (
                    <div className="absolute top-[110%] left-1/2 -translate-x-1/2 w-[320px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 p-6" onClick={(e) => e.stopPropagation()}>
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-bold text-sm">August 2026</span>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"><ArrowRight className="w-4 h-4 rotate-180" /></button>
                          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"><ArrowRight className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                          <span key={d} className="text-xs font-bold text-gray-400">{d}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {[...Array(30)].map((_, i) => {
                          const day = i + 1;
                          const isSelected = day === 12 || day === 14;
                          const isRange = day > 12 && day < 14;
                          return (
                            <button
                              key={i}
                              onClick={() => {
                                setDates("Aug 12 - Aug 14");
                                setShowDateDropdown(false);
                              }}
                              className={clsx(
                                "w-9 h-9 rounded-full text-sm flex items-center justify-center transition-all",
                                isSelected ? "bg-black text-white font-bold" : "hover:bg-gray-100 text-gray-700",
                                isRange ? "bg-gray-100" : ""
                              )}
                            >
                              {day}
                            </button>
                          )
                        })}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between gap-4">
                        <button onClick={() => { setDates("Add Dates"); setShowDateDropdown(false); }} className="text-xs font-bold text-gray-500 hover:text-black uppercase tracking-wide">Clear</button>
                        <button onClick={() => setShowDateDropdown(false)} className="text-xs font-bold text-black uppercase tracking-wide">Close</button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Guest Picker */}
                <div
                  className="relative p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50/50 h-[86px] transition-colors"
                  ref={guestRef}
                  onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">Guests</label>
                    <div className="font-bold text-sm text-black flex items-center gap-2 truncate">
                      {totalGuests} Guests <ChevronDown className={clsx("w-4 h-4 text-gray-400 transition-transform", showGuestDropdown && "rotate-180")} />
                    </div>
                  </div>

                  {showGuestDropdown && (
                    <div className="absolute top-[110%] right-0 w-[300px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 p-6" onClick={(e) => e.stopPropagation()}>
                      {[
                        { label: 'Adults', desc: 'Ages 13 or above', key: 'adults' },
                        { label: 'Children', desc: 'Ages 2-12', key: 'children' },
                        { label: 'Pets', desc: 'Traveling service animals?', key: 'pets' }
                      ].map((type) => (
                        <div key={type.key} className="flex items-center justify-between mb-6 last:mb-0">
                          <div>
                            <div className="font-bold text-sm text-black">{type.label}</div>
                            <div className="text-xs text-gray-400">{type.desc}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black disabled:opacity-30 disabled:border-gray-200"
                              disabled={guests[type.key as keyof typeof guests] <= 0}
                              onClick={() => setGuests(prev => ({ ...prev, [type.key]: prev[type.key as keyof typeof guests] - 1 }))}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-4 text-center text-sm font-bold">{guests[type.key as keyof typeof guests]}</span>
                            <button
                              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black"
                              onClick={() => setGuests(prev => ({ ...prev, [type.key]: prev[type.key as keyof typeof guests] + 1 }))}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Search Button */}
              <div className="lg:col-span-2">
                <button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="w-full h-full min-h-[56px] lg:min-h-[86px] bg-black hover:bg-gray-800 text-white rounded-2xl flex items-center justify-center gap-2 font-bold text-sm transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSearching ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Search
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
