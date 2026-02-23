import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Building2, PlaneTakeoff, PlaneLanding, LocateFixed, ArrowRight } from 'lucide-react';
import { PlaneIcon } from './ui/plane-icon';
import { TrainIcon } from './ui/train-icon';
import { HotelIcon } from './ui/hotel-icon';
import { SearchIcon } from './ui/search-icon';
import { MapPinIcon } from './ui/map-pin-icon';
import { UsersIcon } from './ui/users-icon';
import { LoaderCircleIcon } from './ui/loader-circle-icon';
import { ChevronDownIcon } from './ui/chevron-down-icon';
import { MinusIcon } from './ui/minus-icon';
import { PlusIcon } from './ui/plus-icon';
import { clsx } from 'clsx';
import { Reveal } from './ui/Reveal';
import { motion, AnimatePresence } from 'motion/react';

const SUGGESTIONS = [
  { id: 1, name: "London, United Kingdom", type: "City", icon: MapPinIcon, isAnimated: true },
  { id: 2, name: "London Heathrow (LHR)", type: "Airport", icon: PlaneIcon, isAnimated: true },
  { id: 3, name: "Kyoto, Japan", type: "City", icon: MapPinIcon, isAnimated: true },
  { id: 4, name: "New York, USA", type: "City", icon: MapPinIcon, isAnimated: true },
  { id: 5, name: "Paris, France", type: "City", icon: MapPinIcon, isAnimated: true },
];

const TABS = [
  { id: 'Hotels', icon: HotelIcon },
  { id: 'Flights', icon: PlaneIcon },
  { id: 'Trains', icon: TrainIcon },
] as const;

type TabId = 'Hotels' | 'Flights' | 'Trains';

// direction: 1 = forward (right), -1 = backward (left)
const tabOrder: TabId[] = ['Hotels', 'Flights', 'Trains'];

const EASE = [0.32, 0.72, 0, 1] as [number, number, number, number];

const fieldVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 32 : -32,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.32, ease: EASE },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -32 : 32,
    opacity: 0,
    transition: { duration: 0.22, ease: EASE },
  }),
};

export function SearchTerminal() {
  const [activeTab, setActiveTab] = useState<TabId>('Hotels');
  const [prevTab, setPrevTab] = useState<TabId>('Hotels');
  const [isSearching, setIsSearching] = useState(false);

  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState('');

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const [guests, setGuests] = useState({ adults: 2, children: 0, pets: 0 });
  const [dates, setDates] = useState("Add Dates");

  const locationRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) setShowLocationDropdown(false);
      if (originRef.current && !originRef.current.contains(event.target as Node)) setShowOriginDropdown(false);
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) setShowDateDropdown(false);
      if (guestRef.current && !guestRef.current.contains(event.target as Node)) setShowGuestDropdown(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTabChange = (tab: TabId) => {
    setPrevTab(activeTab);
    setActiveTab(tab);
    // close any open dropdowns on tab change
    setShowLocationDropdown(false);
    setShowOriginDropdown(false);
    setShowDateDropdown(false);
    setShowGuestDropdown(false);
  };

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

  // Compute slide direction based on tab order
  const direction = tabOrder.indexOf(activeTab) > tabOrder.indexOf(prevTab) ? 1 : -1;

  return (
    <section className="relative z-30 -mt-16 sm:-mt-24 px-4 pb-6 sm:pb-20">
      <Reveal className="w-full max-w-6xl mx-auto" overflowVisible={true}>
        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-4 sm:p-8 relative">

          <div className="flex flex-col gap-4 sm:gap-6 relative z-10 w-full">

            {/* ── Tabs ── */}
            <div className="flex gap-1 md:gap-2 bg-gray-50 p-1.5 rounded-full w-full sm:w-fit overflow-x-auto scrollbar-hide relative">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as TabId)}
                  className={clsx(
                    "relative px-5 sm:px-6 py-2.5 rounded text-xs sm:text-sm font-bold flex items-center justify-center gap-2 flex-1 sm:flex-none whitespace-nowrap z-10",
                    "transition-colors duration-200",
                    activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-black"
                  )}
                >
                  {/* Sliding pill background */}
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 bg-black rounded shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 38 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon
                      size={16}
                      className={clsx(activeTab === tab.id ? "text-white" : "text-current")}
                      isAnimated={activeTab === tab.id}
                    />
                    {tab.id}
                  </span>
                </button>
              ))}
            </div>

            {/* ── Form Row ── */}
            <div className="flex flex-col xl:flex-row gap-4 items-stretch w-full">

              {/* Fields container — layout animated so it expands smoothly */}
              <motion.div
                layout
                className={clsx(
                  "flex-1 flex flex-col xl:flex-row bg-white border border-gray-100 shadow-sm w-full relative z-20",
                  "divide-y xl:divide-y-0 xl:divide-x divide-gray-100"
                )}
              >
                <AnimatePresence initial={false}>
                  {/* ── Origin Field (Flights / Trains only) ── */}
                  {isTransport && (
                    <motion.div
                      key="origin"
                      layout
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className={clsx(
                        "relative flex items-center gap-3 cursor-text min-h-[76px] xl:h-[86px] flex-1 hover:bg-gray-50 transition-colors overflow-visible xl:max-w-xs",
                        showOriginDropdown ? "z-50" : "z-10"
                      )}
                      ref={originRef}
                    >
                      <div className="w-full h-full flex items-center p-4 md:p-5 relative gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0 hidden sm:flex">
                          <LocateFixed className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">From</label>
                          <input
                            type="text"
                            value={origin}
                            onChange={(e) => { setOrigin(e.target.value); setShowOriginDropdown(true); }}
                            onFocus={() => setShowOriginDropdown(true)}
                            placeholder="Origin City"
                            className="w-full bg-transparent font-bold text-sm text-black focus:outline-none placeholder:text-gray-300"
                          />
                        </div>
                        {showOriginDropdown && (
                          <div className="absolute top-[105%] left-0 w-full md:w-[320px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 p-2">
                            {filteredOrigin.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => { setOrigin(item.name); setShowOriginDropdown(false); }}
                                className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 rounded-2xl transition-colors text-left"
                              >
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                                  <item.icon size={16} />
                                </div>
                                <div className="font-bold text-sm text-black truncate">{item.name}</div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Destination Field ── */}
                <motion.div
                  layout
                  className={clsx(
                    "relative p-4 md:p-5 flex items-center gap-3 cursor-text min-h-[76px] md:h-[86px] flex-1 hover:bg-gray-50 transition-colors",
                    showLocationDropdown ? "z-50" : "z-10"
                  )}
                  ref={locationRef}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-black shrink-0 hidden sm:flex">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab === 'Flights' ? 'flight' : 'pin'}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        {activeTab === 'Flights' ? <PlaneLanding className="w-4 h-4" /> : <MapPinIcon size={16} />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="flex-1 min-w-0">
                    <AnimatePresence mode="wait">
                      <motion.label
                        key={`dest-label-${activeTab}`}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18 }}
                        className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5"
                      >
                        {isTransport ? "To" : "Where to?"}
                      </motion.label>
                    </AnimatePresence>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => { setDestination(e.target.value); setShowLocationDropdown(true); }}
                      onFocus={() => setShowLocationDropdown(true)}
                      placeholder={isTransport ? "Destination" : "City or Airport"}
                      className="w-full bg-transparent font-bold text-sm text-black focus:outline-none placeholder:text-gray-300"
                    />
                  </div>
                  {showLocationDropdown && (
                    <div className="absolute top-[105%] left-0 w-full md:w-[320px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 p-2">
                      {filteredDestination.length > 0 ? filteredDestination.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => { setDestination(item.name); setShowLocationDropdown(false); }}
                          className="w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 rounded-2xl transition-colors text-left"
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                            <item.icon size={16} />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-black truncate">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.type}</div>
                          </div>
                        </button>
                      )) : (
                        <div className="px-4 py-3 text-sm text-gray-400">No results found</div>
                      )}
                    </div>
                  )}
                </motion.div>

                {/* ── Dates Field ── */}
                <motion.div
                  layout
                  className={clsx(
                    "relative p-4 md:p-5 flex items-center gap-3 cursor-pointer hover:bg-gray-50 min-h-[76px] md:h-[86px] flex-1 transition-colors",
                    showDateDropdown ? "z-50" : "z-10"
                  )}
                  ref={dateRef}
                  onClick={() => setShowDateDropdown(!showDateDropdown)}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0 hidden sm:flex">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">Dates</label>
                    <div className={clsx("font-bold text-sm truncate", dates === "Add Dates" ? "text-gray-300" : "text-black")}>
                      {dates}
                    </div>
                  </div>
                  {showDateDropdown && (
                    <div
                      className="absolute top-[105%] left-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-[340px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 p-5 sm:p-6"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-bold text-sm">August 2026</span>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"><ArrowRight className="w-4 h-4 rotate-180" /></button>
                          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"><ArrowRight className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                          <span key={d} className="text-[10px] font-bold text-gray-400">{d}</span>
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
                              onClick={() => { setDates("Aug 12 - Aug 14"); setShowDateDropdown(false); }}
                              className={clsx(
                                "w-7 h-7 sm:w-8 sm:h-8 rounded-full type-label flex items-center justify-center transition-all mx-auto",
                                isSelected ? "bg-black text-white" : "hover:bg-gray-100 text-gray-700",
                                isRange ? "bg-gray-100" : ""
                              )}
                            >{day}</button>
                          );
                        })}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between gap-4">
                        <button onClick={() => { setDates("Add Dates"); setShowDateDropdown(false); }} className="text-[10px] sm:text-xs font-bold text-gray-500 hover:text-black uppercase tracking-wide">Clear</button>
                        <button onClick={() => setShowDateDropdown(false)} className="text-[10px] sm:text-xs font-bold text-black uppercase tracking-wide">Close</button>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* ── Guests Field ── */}
                <motion.div
                  layout
                  className={clsx(
                    "relative p-4 md:p-5 flex items-center gap-3 cursor-pointer hover:bg-gray-50 min-h-[76px] md:h-[86px] flex-1 transition-colors",
                    showGuestDropdown ? "z-50" : "z-10"
                  )}
                  ref={guestRef}
                  onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0 hidden sm:flex">
                    <UsersIcon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-0.5">Guests</label>
                    <div className="font-bold text-sm text-black flex items-center justify-between sm:justify-start gap-2 truncate">
                      <span>{totalGuests} Guests</span>
                      <ChevronDownIcon size={16} className={clsx("text-gray-400 transition-transform shrink-0", showGuestDropdown && "rotate-180")} isAnimated={showGuestDropdown} />
                    </div>
                  </div>
                  {showGuestDropdown && (
                    <div className="absolute top-[105%] right-0 w-full md:w-[320px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 p-5 sm:p-6" onClick={(e) => e.stopPropagation()}>
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
                              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black disabled:opacity-30 disabled:border-gray-200 transition-colors"
                              disabled={guests[type.key as keyof typeof guests] <= 0}
                              onClick={() => setGuests(prev => ({ ...prev, [type.key]: prev[type.key as keyof typeof guests] - 1 }))}
                            >
                              <MinusIcon size={12} />
                            </button>
                            <span className="w-4 text-center text-sm font-bold">{guests[type.key as keyof typeof guests]}</span>
                            <button
                              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-colors"
                              onClick={() => setGuests(prev => ({ ...prev, [type.key]: prev[type.key as keyof typeof guests] + 1 }))}
                            >
                              <PlusIcon size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>

              </motion.div>

              {/* ── Search Button ── */}
              <div className="xl:flex-shrink-0 xl:min-w-[160px] flex">
                <button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="w-full h-[60px] md:h-auto min-h-[60px] xl:min-h-[86px] bg-black hover:bg-black/80 text-white flex items-center justify-center gap-2 type-sub transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md rounded-lg xl:rounded-r-lg"
                >
                  {isSearching ? (
                    <LoaderCircleIcon size={20} isAnimated={true} />
                  ) : (
                    <>
                      <SearchIcon size={16} className="hidden xl:block" /> Search
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
