import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchTerminal } from './components/SearchTerminal';
import { CategoryBar } from './components/CategoryBar';
import { TopDestinations } from './components/TopDestinations';
import { DealsSection, ServiceHighlights, TrustSection } from './components/Features';
import { HighlightSection } from './components/HighlightSection';

import { CommunityGrid } from './components/CommunityGrid';
import { Testimonials } from './components/Testimonials';
import { AppDownload } from './components/AppDownload';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main>
        {/* 1. Hero + Smart Search */}
        <Hero />
        <SearchTerminal />


        {/* 2. Popular Destinations */}
        <div className="mt-12 sm:mt-0">
          <TopDestinations />
        </div>

        {/* 3. Deals & Offers */}
        <DealsSection />

        {/* 4. Service Highlights */}
        <ServiceHighlights />

        {/* 5. Trust / Why Choose Us */}
        <TrustSection />

        {/* 6. Featured / Curated (Highlight Section) */}
        <HighlightSection />



        {/* 7. Inspiration Grid */}
        <CommunityGrid />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. App Download */}
        <AppDownload />

        {/* 10. Newsletter */}
        <Newsletter />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default App;
