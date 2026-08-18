import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onBookNow: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onBookNow }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-slate-900 dark:bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-amber-900/40 via-slate-900/90 to-slate-950 dark:from-indigo-900/20 dark:via-black dark:to-black"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mx-auto">
          <Sparkles className="w-4 h-4" />
          <span>Begin Your Cosmic Journey</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Ready to Discover What The <span className="text-amber-400 font-serif italic">Stars Hold</span> For You?
        </h2>
        
        <p className="text-slate-300 text-base sm:text-lg font-light max-w-2xl mx-auto">
          Join thousands of seekers who have found clarity and purpose. Connect with India's most trusted Vedic astrologers instantly.
        </p>

        <div className="pt-4">
          <button 
            onClick={onBookNow}
            className="px-10 py-5 rounded-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <span>Consult Top Astrologer Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-amber-400/80 text-xs mt-4 font-medium">Use code ASTROFIRST for 50% OFF your first session</p>
        </div>
        
      </div>
    </section>
  );
};
