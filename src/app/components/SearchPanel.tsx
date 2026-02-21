import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Bus } from 'lucide-react';
import { SearchIcon } from './ui/search-icon';
import { MapPinIcon } from './ui/map-pin-icon';
import { PlaneIcon } from './ui/plane-icon';
import { TrainIcon } from './ui/train-icon';
import { HotelIcon } from './ui/hotel-icon';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

export function SearchPanel() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date(new Date().setDate(new Date().getDate() + 3)));
  const [activeTab, setActiveTab] = useState<'Hotels' | 'Flights' | 'Buses' | 'Trains'>('Hotels');

  const tabs = [
    { id: 'Hotels', icon: HotelIcon, isAnimated: true },
    { id: 'Flights', icon: PlaneIcon, isAnimated: true },
    { id: 'Buses', icon: Bus, isAnimated: false },
    { id: 'Trains', icon: TrainIcon, isAnimated: true },
  ] as const;

  return (
    <section className="w-full bg-white py-20 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="type-display-md text-black">Find Your Next Journey</h2>
          <p className="type-body text-black/50 mt-3 max-w-2xl mx-auto">Search across our comprehensive index of hotels, flights, and transit options.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-[1200px] mx-auto">

          {/* Tabs */}
          <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const { id, icon: Icon, isAnimated } = tab as { id: string; icon: any; isAnimated: boolean };
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={clsx(
                    "flex-1 min-w-[120px] py-4 flex items-center justify-center gap-2 type-sub transition-all relative",
                    activeTab === id
                      ? "text-black bg-black/5"
                      : "text-black/50 hover:bg-black/5 hover:text-black"
                  )}
                >
                  {isAnimated ? (
                    <Icon size={16} isAnimated={activeTab === id} />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                  {id}
                  {activeTab === id && (
                    <motion.div
                      layoutId="activeTab2"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

              {/* Destination */}
              <div className="md:col-span-4 space-y-2">
                <label className="type-label text-black/60 flex items-center gap-1">
                  <MapPinIcon size={12} /> Destination
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="City, hotel, landmark"
                    className="w-full h-12 pl-4 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-black placeholder:text-gray-400 type-body"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="md:col-span-5 space-y-2">
                <label className="type-label text-black/60 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Check-in / Check-out
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date: Date | null) => setStartDate(date)}
                      selectsStart
                      startDate={startDate ?? undefined}
                      endDate={endDate ?? undefined}
                      className="w-full h-12 pl-4 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-black type-body placeholder:text-gray-400"
                      placeholderText="Check-in"
                    />
                  </div>
                  <div className="relative">
                    <DatePicker
                      selected={endDate}
                      onChange={(date: Date | null) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate ?? undefined}
                      endDate={endDate ?? undefined}
                      minDate={startDate ?? undefined}
                      className="w-full h-12 pl-4 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-black type-body placeholder:text-gray-400"
                      placeholderText="Check-out"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="md:col-span-3">
                <button className="w-full h-12 bg-black hover:bg-black/80 text-white type-label transition-colors rounded-lg flex items-center justify-center">
                  <SearchIcon size={16} className="mr-2" /> Find Options
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
