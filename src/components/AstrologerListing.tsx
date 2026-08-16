import React, { useState, useMemo } from 'react';
import { Astrologer } from '../types';
import { AstrologerCard } from './AstrologerCard';
import { Search, Filter, Sparkles, Star, Users, CheckCircle } from 'lucide-react';

interface AstrologerListingProps {
  astrologers: Astrologer[];
  onSelectAstrologer: (astrologer: Astrologer) => void;
  onBookDirect: (astrologer: Astrologer, mode: 'chat' | 'call' | 'video') => void;
}

export const AstrologerListing: React.FC<AstrologerListingProps> = ({
  astrologers,
  onSelectAstrologer,
  onBookDirect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [onlyOnline, setOnlyOnline] = useState(false);
  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'priceLow'>('rating');

  const expertiseOptions = [
    'All',
    'Vedic Astrology',
    'Tarot Reading',
    'Vastu Shastra',
    'Love & Relationships',
    'Numerology',
    'KP Astrology',
    'Prashna Kundli',
  ];

  const languageOptions = ['All', 'English', 'Hindi', 'Sanskrit', 'Punjabi', 'Gujarati', 'Tamil', 'Marathi'];

  const filteredAstrologers = useMemo(() => {
    return astrologers
      .filter((astro) => {
        // Search Filter
        const matchesSearch =
          astro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          astro.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          astro.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()));

        // Expertise Filter
        const matchesExpertise =
          selectedExpertise === 'All' || astro.expertise.includes(selectedExpertise);

        // Language Filter
        const matchesLanguage =
          selectedLanguage === 'All' || astro.languages.includes(selectedLanguage);

        // Online Status Filter
        const matchesOnline = !onlyOnline || astro.isOnline;

        return matchesSearch && matchesExpertise && matchesLanguage && matchesOnline;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'experience') return b.experienceYears - a.experienceYears;
        if (sortBy === 'priceLow') return a.feePerMin - b.feePerMin;
        return 0;
      });
  }, [astrologers, searchQuery, selectedExpertise, selectedLanguage, onlyOnline, sortBy]);

  return (
    <div className="py-12 bg-transparent text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Cosmic Masters</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Consult India's Top <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Astrologers</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-light">
            Connect instantly via Chat, Audio Call, or HD Video with verified Acharyas, Tarot Grand Masters, and Vastu Practitioners.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 mb-10 shadow-xl dark:shadow-2xl backdrop-blur-xl space-y-4">
          
          {/* Top Search & Online Toggle Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-600 dark:text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search astrologer name, expertise (e.g. Vastu, Tarot, Love)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Language Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-sm focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
              >
                {languageOptions.map((lang) => (
                  <option key={lang} value={lang}>
                    Language: {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-sm focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
              >
                <option value="rating">Sort: Highest Rated ★</option>
                <option value="experience">Sort: Most Experienced</option>
                <option value="priceLow">Sort: Lowest Price / min</option>
              </select>
            </div>

          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-slate-800/80">
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium shrink-0 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Specialization:</span>
            </span>

            {expertiseOptions.map((exp) => (
              <button
                key={exp}
                onClick={() => setSelectedExpertise(exp)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedExpertise === exp
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40'
                }`}
              >
                {exp}
              </button>
            ))}

            {/* Online Only Toggle */}
            <button
              onClick={() => setOnlyOnline(!onlyOnline)}
              className={`ml-auto px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                onlyOnline
                  ? 'bg-emerald-950 border border-emerald-500/60 text-emerald-300'
                  : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${onlyOnline ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
              <span>Online Now Only</span>
            </button>
          </div>

        </div>

        {/* Results Banner */}
        <div className="flex items-center justify-between mb-6 text-sm text-slate-600 dark:text-slate-400">
          <p>
            Showing <strong className="text-amber-300">{filteredAstrologers.length}</strong> verified astrologers
          </p>

          {(searchQuery || selectedExpertise !== 'All' || selectedLanguage !== 'All' || onlyOnline) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedExpertise('All');
                setSelectedLanguage('All');
                setOnlyOnline(false);
              }}
              className="text-xs text-amber-400 hover:underline cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Astrologers Grid */}
        {filteredAstrologers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAstrologers.map((astrologer) => (
              <AstrologerCard
                key={astrologer.id}
                astrologer={astrologer}
                onSelect={onSelectAstrologer}
                onBookDirect={onBookDirect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
            <Users className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200">No Astrologers Match Your Search</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 mb-4">
              Try adjusting your specialization filter, clearing search keywords, or showing offline masters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedExpertise('All');
                setSelectedLanguage('All');
                setOnlyOnline(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
