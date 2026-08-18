import React from "react";
import { Sun, Sparkles, Phone, Mail, MapPin, Heart } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-100 dark:bg-black/40 text-slate-500 dark:text-slate-400 text-xs border-t border-slate-300 dark:border-white/10 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-linear-to-tr from-amber-500 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                <Sun className="w-5 h-5 text-slate-900 dark:text-white" />
              </div>
              <span className="text-lg font-semibold tracking-wider text-slate-900 dark:text-white">
                ASTRO<span className="text-amber-500">Veda</span>
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light pr-4">
              AstroVeda is India's leading digital Vedic astrology and spiritual
              consultation platform. We connect seekers with certified Acharyas,
              Tarot readers, and Vastu experts for real-time life guidance.
            </p>

            <div className="space-y-1 text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>New Delhi, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>support@astroveda.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 1800-2008 (Toll Free)</span>
              </p>
            </div>
          </div>

          {/* Col 4: Trust & Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">
              Privacy & Legal
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>100% Confidentiality Ensured</li>
              <li>Verified Astrologer Guarantee</li>
              <li>Terms of Service & Privacy Policy</li>
              <li>Astrological Disclaimer</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} AstroVeda Technologies Pvt Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
