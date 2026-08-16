import React from 'react';
import { ShieldCheck, Video, Lock, Award, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Verified Experts',
      desc: 'Every astrologer on our platform goes through a rigorous multi-step verification process to ensure authenticity.',
      icon: <Award className="w-8 h-8 text-amber-500" />
    },
    {
      title: '100% Confidential',
      desc: 'Your privacy is our highest priority. All your chats, calls, and video sessions are completely secure and encrypted.',
      icon: <Lock className="w-8 h-8 text-emerald-500" />
    },
    {
      title: 'HD Video Consultations',
      desc: 'Experience face-to-face consultations with our state-of-the-art HD video calling feature for better connections.',
      icon: <Video className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Money Back Guarantee',
      desc: 'Not satisfied with your first consultation? We offer a 100% refund policy to ensure you have a risk-free experience.',
      icon: <ShieldCheck className="w-8 h-8 text-rose-500" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#06060c] border-y border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 dark:bg-indigo-950/40 border border-slate-300 dark:border-indigo-500/30 text-slate-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              A Platform Built on <span className="bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-300 dark:to-amber-500 bg-clip-text text-transparent">Trust & Authenticity</span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              We understand that seeking spiritual guidance requires immense trust. AstroVeda is designed from the ground up to provide a safe, transparent, and high-quality environment for your cosmic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-amber-500/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center mb-5 border border-slate-100 dark:border-slate-800/60">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{reason.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
