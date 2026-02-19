import React from 'react';

const steps = [
  {
    step: 1,
    title: "Search Destinations",
    description: "Enter travel details & preferences."
  },
  {
    step: 2,
    title: "Compare Options",
    description: "View availability & prices side-by-side."
  },
  {
    step: 3,
    title: "Secure Booking",
    description: "Safe payment & instant confirmation."
  },
  {
    step: 4,
    title: "Manage Itinerary",
    description: "View trips, cancel or change bookings."
  }
];

export function ProcessSteps() {
  return (
    <section className="py-20 bg-[#F8F8F8] border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="text-center mb-16">
           <h2 className="text-xl font-serif font-bold text-[#111827]">How It Works</h2>
           <div className="w-12 h-1 bg-[#0055FF] mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Connecting Line (Hidden on Mobile) */}
          <div className="absolute top-12 left-0 w-full h-[1px] bg-gray-200 hidden md:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 text-[#111827] font-bold font-serif text-base flex items-center justify-center mb-6 shadow-sm group-hover:border-[#0055FF] transition-colors">
                  {item.step}
                </div>
                <h3 className="text-sm font-semibold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-[#4B5563] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
