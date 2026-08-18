import React, { useState, useEffect } from 'react';
import { Astrologer } from '../types';
import { X, Star, ShieldCheck, Award, GraduationCap, MapPin, MessageSquare, PhoneCall, Video, CheckCircle2 } from 'lucide-react';

interface AstrologerProfileModalProps {
  astrologer: Astrologer | null;
  onClose: () => void;
  onBookSession: (astrologer: Astrologer, mode: 'chat' | 'call' | 'video', slotDate?: string, slotTime?: string) => void;
}

export const AstrologerProfileModal: React.FC<AstrologerProfileModalProps> = ({
  astrologer,
  onClose,
  onBookSession,
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'reviews' | 'slots'>('about');
  const [selectedMode, setSelectedMode] = useState<'chat' | 'call' | 'video'>('video');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedSlot, setSelectedSlot] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (astrologer) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [astrologer]);

  useEffect(() => {
    if (astrologer) {
      setSelectedSlot(astrologer.availableSlots[0]?.slots[0] || '10:30 AM');
    }
  }, [astrologer]);

  if (!astrologer) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/40 dark:bg-black/60 backdrop-blur-md overflow-y-auto overscroll-none"
      onClick={onClose}
    >
      <div className="flex min-h-full items-start justify-center p-4 sm:p-6 md:py-12">
        <div 
          className="relative w-full max-w-4xl bg-slate-50 dark:bg-[#020208] border border-slate-300 dark:border-white/10 rounded-2xl shadow-2xl text-slate-100 m-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-100 dark:bg-black/40 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body Container (No inner scroll) */}
        <div className="flex flex-col w-full h-full">
          
          {/* Hero Cover Banner & Avatar Header */}
          <div className="relative h-44 sm:h-52 bg-slate-800 rounded-t-2xl overflow-hidden shrink-0">
          <img
            src={astrologer.coverImage || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200'}
            alt="Astrologer Banner"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#020208] via-[#020208]/60 to-transparent" />

          {/* Avatar & Key Info Badge */}
          <div className="absolute -bottom-6 left-6 sm:left-8 flex items-end gap-4">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-slate-50 dark:border-[#020208] shadow-2xl bg-white dark:bg-black shrink-0">
              <img
                src={astrologer.avatar}
                alt={astrologer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-2 hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-amber-500/40 text-amber-400 text-xs font-bold">
                  ★ {astrologer.rating.toFixed(2)} Rating
                </span>
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {astrologer.totalConsultations.toLocaleString()}+ Consultations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details Header */}
        <div className="px-6 sm:px-8 pt-8 pb-4 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{astrologer.name}</h2>
                <ShieldCheck className="w-5 h-5 text-amber-500" aria-label="Verified Acharya" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5">{astrologer.title}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>{astrologer.experienceYears}+ Years Experience</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  <span>{astrologer.location}</span>
                </span>
                <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                  <span>🗣️ {astrologer.languages.join(', ')}</span>
                </span>
              </div>
            </div>

            {/* Quick Fee Callout */}
            <div className="bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-2xl p-4 text-center shrink-0">
              <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Starting Fee</span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">${astrologer.feePerMin.toFixed(2)}/min</span>
              <span className="text-[10px] text-emerald-500 dark:text-emerald-400 block font-medium mt-0.5">
                {astrologer.isOnline ? '● Online Now' : `Available ${astrologer.nextAvailableTime}`}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="sticky top-0 z-20 bg-slate-50 dark:bg-[#020208] px-6 sm:px-8 pt-2 border-b border-slate-200 dark:border-white/5 shadow-sm">
          <div className="flex gap-2 text-xs sm:text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 px-2 font-bold transition-all cursor-pointer border-b-2 ${
                activeTab === 'about'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              About & Credentials
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 px-2 font-bold transition-all cursor-pointer border-b-2 ${
                activeTab === 'reviews'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Client Reviews ({astrologer.reviewsCount})
            </button>
            <button
              onClick={() => setActiveTab('slots')}
              className={`pb-3 px-2 font-bold transition-all cursor-pointer border-b-2 ${
                activeTab === 'slots'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Available Schedule & Booking
            </button>
            </div>
          </div>

          {/* Tab Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
          
          {/* TAB 1: ABOUT */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              
              {/* Bio Section */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Biography & Astrological Lineage
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                  {astrologer.bio}
                </p>
              </div>

              {/* Specializations Grid */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-white mb-3">
                  Core Specializations
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {astrologer.expertise.map((spec) => (
                    <div
                      key={spec}
                      className="p-3 rounded-xl bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-center"
                    >
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300 block">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Awards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-medium text-xs">
                    <GraduationCap className="w-4 h-4 text-amber-500" />
                    <span>Academic Qualifications</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{astrologer.education}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-medium text-xs">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Awards & Recognition</span>
                  </div>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    {astrologer.awards.map((award) => (
                      <li key={award} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/5">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">Ratings & Feedback</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Based on verified consultation orders</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span>{astrologer.rating.toFixed(2)}</span>
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{astrologer.reviewsCount} reviews</span>
                </div>
              </div>

              <div className="space-y-3">
                {astrologer.reviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-xl bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
                          {rev.userName[0]}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white block">{rev.userName}</span>
                          <span className="text-[10px] text-amber-400 font-medium">Topic: {rev.topic}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500 text-xs">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block text-right">{rev.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SLOTS & BOOKING */}
          {activeTab === 'slots' && (
            <div className="space-y-6">
              
              {/* Consultation Mode Picker */}
              <div>
                <label className="block text-xs font-medium text-slate-900 dark:text-white mb-2">
                  1. Choose Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setSelectedMode('chat')}
                    className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedMode === 'chat'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                        : 'bg-slate-200/60 dark:bg-white/5 border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 '
                    }`}
                  >
                    <MessageSquare className="w-5 h-5 mx-auto mb-1 text-amber-500" />
                    <span className="text-xs font-semibold block">Instant Chat</span>
                    <span className="text-[10px] opacity-70">${astrologer.chatFeePerMin.toFixed(2)}/min</span>
                  </button>

                  <button
                    onClick={() => setSelectedMode('call')}
                    className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedMode === 'call'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                        : 'bg-slate-200/60 dark:bg-white/5 border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 '
                    }`}
                  >
                    <PhoneCall className="w-5 h-5 mx-auto mb-1 text-amber-500" />
                    <span className="text-xs font-semibold block">Audio Call</span>
                    <span className="text-[10px] opacity-70">${astrologer.audioFeePerMin.toFixed(2)}/min</span>
                  </button>

                  <button
                    onClick={() => setSelectedMode('video')}
                    className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedMode === 'video'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-500'
                        : 'bg-slate-200/60 dark:bg-white/5 border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 '
                    }`}
                  >
                    <Video className="w-5 h-5 mx-auto mb-1 text-amber-500" />
                    <span className="text-xs font-semibold block">HD Video</span>
                    <span className="text-[10px] opacity-70">${astrologer.videoFeePerMin.toFixed(2)}/min</span>
                  </button>
                </div>
              </div>

              {/* Slot Picker */}
              <div>
                <label className="block text-xs font-medium text-slate-900 dark:text-white mb-2">
                  2. Select Available Date & Time Slot
                </label>

                <div className="flex gap-2 mb-3">
                  {astrologer.availableSlots.map((slotGroup) => (
                    <button
                      key={slotGroup.date}
                      onClick={() => {
                        setSelectedDate(slotGroup.date);
                        setSelectedSlot(slotGroup.slots[0]);
                      }}
                      className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        selectedDate === slotGroup.date
                          ? 'bg-white text-black'
                          : 'bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {slotGroup.date}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {astrologer.availableSlots
                    .find((s) => s.date === selectedDate)
                    ?.slots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                          selectedSlot === slot
                            ? 'bg-amber-500 text-black border border-amber-500'
                            : 'bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-amber-500/40'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                </div>
              </div>

            </div>
          )}

          </div>
        </div>
        {/* End Scrollable Container */}

        {/* Footer Action Bar */}
        <div className="p-6 bg-slate-100 dark:bg-black/40 border-t border-slate-300 dark:border-white/10 flex items-center justify-between gap-4 shrink-0 rounded-b-2xl">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block">Selected Mode & Time</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white capitalize">
              {selectedMode} Session • {selectedDate} @ {selectedSlot}
            </span>
          </div>

          <button
            onClick={() => onBookSession(astrologer, selectedMode, selectedDate, selectedSlot)}
            className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm shadow-lg shadow-black/10 dark:shadow-white/10 hover:bg-amber-500 dark:hover:bg-amber-400 transition-colors cursor-pointer"
          >
            Confirm & Book →
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
