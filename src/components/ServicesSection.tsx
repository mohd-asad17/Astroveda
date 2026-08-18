import React from 'react';
import { Sparkles, Scroll, Heart, Briefcase, Users, Home, Hash, Moon } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    { id: 'kundli', title: 'Kundli', icon: <Scroll className="w-6 h-6 text-amber-500" />, desc: 'Detailed birth chart analysis for life predictions.' },
    { id: 'horoscope', title: 'Horoscope', icon: <Sparkles className="w-6 h-6 text-purple-500" />, desc: 'Daily, weekly, and yearly celestial forecasts.' },
    { id: 'love', title: 'Love & Relationship', icon: <Heart className="w-6 h-6 text-rose-500" />, desc: 'Guidance on matters of the heart and compatibility.' },
    { id: 'career', title: 'Career', icon: <Briefcase className="w-6 h-6 text-blue-500" />, desc: 'Insights into professional growth and opportunities.' },
    { id: 'marriage', title: 'Marriage', icon: <Users className="w-6 h-6 text-emerald-500" />, desc: 'Matchmaking and marital harmony consultations.' },
    { id: 'vastu', title: 'Vastu', icon: <Home className="w-6 h-6 text-orange-500" />, desc: 'Spatial energy alignment for home and workspace.' },
    { id: 'numerology', title: 'Numerology', icon: <Hash className="w-6 h-6 text-indigo-500" />, desc: 'Unlocking life paths through the power of numbers.' },
    { id: 'tarot', title: 'Tarot Reading', icon: <Moon className="w-6 h-6 text-pink-500" />, desc: 'Divination and spiritual guidance via Tarot cards.' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#020208]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-amber-950/60 border border-slate-200 dark:border-amber-500/30 text-slate-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>Premium Consultations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our <span className="bg-linear-to-r from-amber-500 to-amber-700 dark:from-amber-200 dark:to-amber-400 bg-clip-text text-transparent">Vedic Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-light">
            Explore our comprehensive range of spiritual and astrological services designed to bring clarity and harmony to your life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => onSelectService && onSelectService(service.id)}
              className="group cursor-pointer bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/40 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 shadow-md border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
