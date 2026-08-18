import React, { useState } from 'react';
import { Sparkles, Star, ShieldCheck, PhoneCall, MessageSquare, Video, ArrowRight, Search, Sun, Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreAstrologers: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreAstrologers,
}) => {
  const [searchTopic, setSearchTopic] = useState('Career & Job');


  return (
    <div className="relative overflow-hidden bg-transparent text-slate-900 dark:text-slate-100 min-h-[85vh] flex flex-col justify-center py-12 lg:py-20 border-b border-slate-200 dark:border-white/5">
      {/* Mystical Background Glows & Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-amber-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-100 h-100 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-12 max-w-4xl mx-auto text-center space-y-6 lg:text-left">
            


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Unlock Your <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Cosmic Destiny
              </span>{' '}
              with Certified Masters
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Connect with India's most respected Vedic Acharyas, Tarot Readers & Vastu Experts for real-time <strong className="text-amber-300 font-medium">Chat, Call, or HD Video</strong> consultations. Receive precise life guidance on career, marriage, health & finances.
            </p>

            {/* Consultation Mode Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium shadow-sm">
                <MessageSquare className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Instant Chat</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium shadow-sm">
                <PhoneCall className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>Audio Call</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium shadow-sm">
                <Video className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                <span>HD Video Session</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-4 pt-4">
              <button
                onClick={onExploreAstrologers}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm shadow-xl shadow-slate-900/10 dark:shadow-white/10 hover:bg-amber-400 dark:hover:bg-amber-400 hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Talk to Top Astrologer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-8 border-t border-slate-800/80 flex items-center justify-between w-full mt-10">
              <div className="text-left">
                <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-1">500+</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Verified Masters</p>
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-4xl font-extrabold text-amber-500 mb-1">2.5M+</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Consultations Done</p>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">4.9</p>
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 fill-amber-400" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Over 150k Ratings</p>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
};
