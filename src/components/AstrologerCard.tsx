import React from 'react';
import { Astrologer } from '../types';
import { Star, ShieldCheck, MessageSquare, PhoneCall, Video, Award, Clock } from 'lucide-react';

interface AstrologerCardProps {
  astrologer: Astrologer;
  onSelect: (astrologer: Astrologer) => void;
  onBookDirect: (astrologer: Astrologer, mode: 'chat' | 'call' | 'video') => void;
}

export const AstrologerCard: React.FC<AstrologerCardProps> = ({
  astrologer,
  onSelect,
  onBookDirect,
}) => {
  return (
    <div className="group relative bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 rounded-3xl p-5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Header Row */}
      <div>
        <div className="flex items-start gap-4 mb-4">
          
          {/* Avatar with Status Pulse */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-500/30 group-hover:border-amber-400 transition-colors shadow-lg">
              <img
                src={astrologer.avatar}
                alt={astrologer.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Status Pill */}
            {astrologer.isOnline ? (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 text-[10px] font-bold flex items-center gap-1 shadow-md whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Online</span>
              </span>
            ) : (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[10px] font-medium whitespace-nowrap">
                Offline
              </span>
            )}
          </div>

          {/* Name & Title */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <h3 
                onClick={() => onSelect(astrologer)}
                className="text-base font-bold text-slate-900 dark:text-white hover:text-amber-300 transition-colors cursor-pointer truncate"
              >
                {astrologer.name}
              </h3>
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" title="Verified Acharya" />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mb-2 font-light">
              {astrologer.title}
            </p>

            {/* Rating & Orders */}
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-md text-amber-600 dark:text-amber-300 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{astrologer.rating.toFixed(2)}</span>
              </div>
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                {astrologer.reviewsCount.toLocaleString()} orders
              </span>
            </div>
          </div>
        </div>

        {/* Experience & Languages */}
        <div className="grid grid-cols-2 gap-2 py-2.5 border-y border-slate-200 dark:border-slate-800/80 mb-3 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span><strong className="text-slate-900 dark:text-white">{astrologer.experienceYears}+ Yrs</strong> Exp</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-amber-400">🗣️</span>
            <span className="truncate">{astrologer.languages.join(', ')}</span>
          </div>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {astrologer.expertise.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Pricing & Action Section */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col gap-3">
        
        {/* Fee Display */}
        <div className="flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-600 dark:text-slate-400">Consultation Fee</span>
            <div className="text-lg font-extrabold text-amber-300">
              ${astrologer.feePerMin.toFixed(2)} <span className="text-xs font-normal text-slate-600 dark:text-slate-400">/ min</span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-slate-600 dark:text-slate-400 text-[10px] block">Availability</span>
            <span className="text-xs text-emerald-400 font-medium flex items-center justify-end gap-1">
              <Clock className="w-3 h-3" />
              <span>{astrologer.nextAvailableTime}</span>
            </span>
          </div>
        </div>

        {/* Consult Direct Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onBookDirect(astrologer, 'chat')}
            className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white transition-all cursor-pointer"
            title="Start Chat"
          >
            <MessageSquare className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-medium hidden sm:inline">Chat</span>
          </button>

          <button
            onClick={() => onBookDirect(astrologer, 'call')}
            className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white transition-all cursor-pointer"
            title="Start Call"
          >
            <PhoneCall className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-medium hidden sm:inline">Call</span>
          </button>

          <button
            onClick={() => onBookDirect(astrologer, 'video')}
            className="flex flex-col items-center justify-center gap-1 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-500 transition-all cursor-pointer"
            title="HD Video Consult"
          >
            <Video className="w-4 h-4" />
            <span className="text-[10px] font-bold hidden sm:inline">Video</span>
          </button>
        </div>

        {/* Full Profile View Link */}
        <button
          onClick={() => onSelect(astrologer)}
          className="w-full text-center text-xs text-amber-500 dark:text-amber-300/80 hover:text-amber-600 dark:hover:text-amber-300 font-medium py-1 transition-colors cursor-pointer"
        >
          View Full Profile & Reviews →
        </button>

      </div>

    </div>
  );
};
