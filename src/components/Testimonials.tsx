import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      text: "The consultation with Acharyaji was eye-opening. The insights into my career path were spot on, and the remedies suggested have already started showing positive results.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      text: "I was skeptical at first, but the Vastu changes recommended for my new office space completely shifted the energy. Business has improved significantly within months.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Anita Desai",
      role: "Homemaker",
      text: "AstroVeda gave me peace of mind during a turbulent time in my marriage. The astrologer was patient, empathetic, and highly knowledgeable.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=32"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#020208]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Voices of <span className="bg-linear-to-r from-amber-500 to-amber-700 dark:from-amber-200 dark:to-amber-400 bg-clip-text text-transparent">Clarity</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-light">
            Hear from thousands of seekers who have transformed their lives through our cosmic guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="relative bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-500/10 dark:text-amber-500/20" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 text-sm font-light leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-amber-500/30" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{review.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
