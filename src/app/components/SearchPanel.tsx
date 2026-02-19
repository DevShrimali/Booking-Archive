import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Search, Calendar, MapPin, Building, Plane, Bus, Train } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

export function SearchPanel() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date(new Date().setDate(new Date().getDate() + 3)));
  const [activeTab, setActiveTab] = useState<'Hotels' | 'Flights' | 'Buses' | 'Trains'>('Hotels');

  const tabs = [
    { id: 'Hotels', icon: Building },
    { id: 'Flights', icon: Plane },
    { id: 'Buses', icon: Bus },
    { id: 'Trains', icon: Train },
  ] as const;

  return (
    <section className="w-full bg-[#F8F8F8] py-20 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="text-center mb-10 md:mb-12">
           <h2 className="text-xl font-serif font-bold text-[#111827]">Find Your Next Journey</h2>
           <p className="text-[#4B5563] mt-3 max-w-2xl mx-auto">Search across our comprehensive index of hotels, flights, and transit options.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-[1200px] mx-auto">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    "flex-1 min-w-[120px] py-4 flex items-center justify-center gap-2 text-sm font-medium transition-colors relative",
                    activeTab === tab.id 
                      ? "text-[#0055FF] bg-blue-50/30" 
                      : "text-[#4B5563] hover:bg-gray-50 hover:text-[#111827]"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {tab.id}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0055FF]" 
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
                <label className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Destination
                </label>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="City, hotel, landmark" 
                    className="w-full h-12 pl-4 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] transition-all text-[#111827] placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="md:col-span-5 space-y-2">
                <label className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Check-in / Check-out
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      className="w-full h-12 pl-4 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] transition-all text-[#111827]"
                      placeholderText="Check-in"
                    />
                  </div>
                  <div className="relative">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      className="w-full h-12 pl-4 pr-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 focus:border-[#0055FF] transition-all text-[#111827]"
                      placeholderText="Check-out"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="md:col-span-3">
                <Button className="w-full h-12 text-base shadow-md shadow-blue-500/20">
                  <Search className="mr-2 w-5 h-5" /> Find Options
                </Button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
