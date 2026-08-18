import  { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AstrologerListing } from './components/AstrologerListing';
import { AstrologerCard } from './components/AstrologerCard';
import { AstrologerProfileModal } from './components/AstrologerProfileModal';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';

import { ASTROLOGERS_DATA } from './data/mockData';
import { Astrologer } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  
  const [selectedAstrologerForProfile, setSelectedAstrologerForProfile] = useState<Astrologer | null>(null);
  const [selectedAstrologerForBooking, setSelectedAstrologerForBooking] = useState<Astrologer | null>(null);
  const [bookingMode, setBookingMode] = useState<'chat' | 'call' | 'video'>('video');
  const [bookingSlotDate, setBookingSlotDate] = useState<string | undefined>(undefined);
  const [bookingSlotTime, setBookingSlotTime] = useState<string | undefined>(undefined);


  const handleOpenDirectBooking = (astrologer: Astrologer, mode: 'chat' | 'call' | 'video') => {
    setSelectedAstrologerForBooking(astrologer);
    setBookingMode(mode);
  };

  const handleBookFromProfile = (astrologer: Astrologer, mode: 'chat' | 'call' | 'video', slotDate?: string, slotTime?: string) => {
    setSelectedAstrologerForProfile(null);
    setSelectedAstrologerForBooking(astrologer);
    setBookingMode(mode);
    setBookingSlotDate(slotDate);
    setBookingSlotTime(slotTime);
  };


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020208] text-slate-700 dark:text-slate-300 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
  
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuickBooking={() => {
          setSelectedAstrologerForBooking(ASTROLOGERS_DATA[0]);
          setBookingMode('video');
        }}
      />

      <main className="flex-1">

        {activeTab === 'home' && (
          <>
            <HeroSection
              onExploreAstrologers={() => setActiveTab('astrologers')}
            />

            <section className="py-12 bg-slate-200/50 dark:bg-black/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-light text-slate-900 dark:text-white">Live <span className="italic text-amber-400 font-serif">Online Masters</span></h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Verified Acharyas available for instant Chat, Call or Video</p>
                  </div>

                  <button
                    onClick={() => setActiveTab('astrologers')}
                    className="text-xs font-medium text-amber-500 hover:underline cursor-pointer"
                  >
                    View All →
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ASTROLOGERS_DATA.slice(0, 3).map((astrologer) => (
                    <AstrologerCard
                      key={astrologer.id}
                      astrologer={astrologer}
                      onSelect={(astro) => setSelectedAstrologerForProfile(astro)}
                      onBookDirect={handleOpenDirectBooking}
                    />
                  ))}
                </div>
              </div>
            </section>

            <ServicesSection onSelectService={(id) => {
              setActiveTab('astrologers');
            }} />
            <WhyChooseUs />
            <Testimonials />
            <CTASection onBookNow={() => setActiveTab('astrologers')} />

          </>
        )}

        {activeTab === 'astrologers' && (
          <AstrologerListing
            astrologers={ASTROLOGERS_DATA}
            onSelectAstrologer={(astro) => setSelectedAstrologerForProfile(astro)}
            onBookDirect={handleOpenDirectBooking}
          />
        )}

        {activeTab === 'services' && (
          <ServicesSection onSelectService={(id) => {
            setActiveTab('astrologers');
          }} />
        )}

      </main>

      <Footer setActiveTab={setActiveTab} />

      {selectedAstrologerForProfile && (
        <AstrologerProfileModal
          astrologer={selectedAstrologerForProfile}
          onClose={() => setSelectedAstrologerForProfile(null)}
          onBookSession={handleBookFromProfile}
        />
      )}

      {selectedAstrologerForBooking && (
        <BookingModal
          astrologer={selectedAstrologerForBooking}
          initialMode={bookingMode}
          initialSlotDate={bookingSlotDate}
          initialSlotTime={bookingSlotTime}
          onClose={() => {
            setSelectedAstrologerForBooking(null);
            setBookingSlotDate(undefined);
            setBookingSlotTime(undefined);
          }}
        />
      )}

    </div>
  );
}
