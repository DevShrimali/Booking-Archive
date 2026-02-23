import React from 'react';
import { Quote } from 'lucide-react';
import { StarIcon } from './ui/star-icon';
import { Reveal } from './ui/Reveal';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&face",
    rating: 5,
    text: "Archive Travel curated the most seamless honeymoon for us. The hotel in Amalfi was beyond words.",
    date: "October 2025"
  },
  {
    id: 2,
    name: "James Chen",
    location: "San Francisco, USA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&face",
    rating: 5,
    text: "I appreciated the transparency and the 'no hidden fees' promise. Everything was exactly as described.",
    date: "December 2025"
  },
  {
    id: 3,
    name: "Sarah Miller",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop&face",
    rating: 4.8,
    text: "The 'Exclusive Offers' section is a goldmine. Found a business class upgrade that saved me thousands.",
    date: "January 2026"
  },
  {
    id: 4,
    name: "Michael Ross",
    location: "Berlin, Germany",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop&face",
    rating: 5,
    text: "A truly premium experience from start to finish. The app is intuitive and the support was instant.",
    date: "February 2026"
  },
  {
    id: 5,
    name: "Thomas Wright",
    location: "Sydney, Australia",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop&face",
    rating: 5,
    text: "The personalized itinerary felt like it was made exactly for me. Truly an unforgettable experience.",
    date: "March 2026"
  },
  {
    id: 6,
    name: "Aisha Patel",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop&face",
    rating: 4.9,
    text: "Booking through Archive replaced all the stress with pure excitement. Their support team is unmatched.",
    date: "April 2026"
  },
  {
    id: 7,
    name: "David Kim",
    location: "Seoul, South Korea",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop&face",
    rating: 5,
    text: "Their exclusive perks and fast-track access gave us VIP treatment wherever we went. Highly recommended.",
    date: "April 2026"
  },
  {
    id: 8,
    name: "Sophie Laurent",
    location: "Paris, France",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop&face",
    rating: 4.8,
    text: "The app interface is beautiful and booking flights takes seconds. It’s my go-to for all travel now.",
    date: "May 2026"
  }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <style>{`
        @keyframes marquee-test {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-test {
          animation: marquee-test 60s linear infinite;
        }
        .carousel-container:has(.group:hover) .animate-marquee-test {
          animation-play-state: paused;
        }
      `}</style>
      <div className="w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-16 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Testimonials</span>
            </div>
            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-6 text-black">
              Loved by <span className="font-serif italic font-normal text-gray-400">Travelers</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={16} className="text-black" />
                ))}
              </div>
              <span className="text-black font-bold">4.9/5 Rating</span>
              <span>• Based on 10k+ reviews</span>
            </div>
          </div>
        </div>

        <div className="flex overflow-hidden carousel-container w-full pb-12 pt-4">
          {[1, 2].map((trackIdx) => (
            <div key={trackIdx} className="flex gap-4 md:gap-6 pr-4 md:pr-6 animate-marquee-test flex-shrink-0">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div key={`${trackIdx}-${testimonial.id}`} className="flex-shrink-0 w-[70vw] md:w-[42vw] lg:w-[22vw] group">
                  <Reveal delay={(idx % 4) * 100} className="h-full">
                    <div className="bg-gray-50 p-6 md:p-8 rounded border border-gray-100 h-full flex flex-col relative overflow-hidden">

                      {/* Quote Icon BG */}
                      <Quote className="absolute top-4 right-4 w-12 h-12 text-black/5 rotate-180" />

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            size={12}
                            className={`${i < Math.floor(testimonial.rating) ? 'text-black' : 'text-gray-200'}`}
                          />
                        ))}
                      </div>

                      <p className="type-body text-black/60 font-serif italic mb-6 flex-grow relative z-10">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-end justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            loading="lazy"
                            className="w-10 h-10 rounded-full object-cover border border-gray-200 grayscale"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=80&background=e5e7eb&color=374151&bold=true`;
                            }}
                          />
                          <div>
                            <h4 className="type-sub text-black mb-1">{testimonial.name}</h4>
                            <p className="type-label text-black/40">{testimonial.location}</p>
                          </div>
                        </div>
                        <div className="type-label text-black/20 mb-0.5">
                          {testimonial.date}
                        </div>
                      </div>

                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
