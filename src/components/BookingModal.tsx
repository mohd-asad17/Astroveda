import React, { useState, useEffect } from 'react';
import { Astrologer } from '../types';
import { X, MessageSquare, PhoneCall, Video, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  astrologer: Astrologer | null;
  initialMode?: 'chat' | 'call' | 'video';
  initialSlotDate?: string;
  initialSlotTime?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  astrologer,
  initialMode = 'video',
  initialSlotDate,
  initialSlotTime,
  onClose,
}) => {
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

  if (!astrologer) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [mode, setMode] = useState<'chat' | 'call' | 'video'>(initialMode);
  const [duration, setDuration] = useState<15 | 30 | 60>(15);
  
  const [clientName, setClientName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('1998-05-15');
  const [tob, setTob] = useState('10:30');
  const [pob, setPob] = useState('New Delhi, India');
  const [primaryConcern, setPrimaryConcern] = useState('Career & Job Switch');

  const [selectedDate, setSelectedDate] = useState(initialSlotDate || 'Today');
  const [selectedSlot, setSelectedSlot] = useState(initialSlotTime || astrologer.availableSlots[0]?.slots[0] || '10:30 AM');

  const [promoCode, setPromoCode] = useState('ASTROFIRST');
  const [isCouponApplied, setIsCouponApplied] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<any>(null);

  const ratePerMin =
    mode === 'video'
      ? astrologer.videoFeePerMin
      : mode === 'call'
      ? astrologer.audioFeePerMin
      : astrologer.chatFeePerMin;

  const subtotal = ratePerMin * duration;
  const discount = isCouponApplied ? subtotal * 0.5 : 0;
  const totalAmount = subtotal - discount;

  const handleApplyCoupon = () => {
    if (promoCode.trim().toUpperCase() === 'ASTROFIRST') {
      setIsCouponApplied(true);
    } else {
      alert('Invalid promo code. Use ASTROFIRST for 50% discount!');
    }
  };

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const bookingId = `ASTRO-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingConfirmation({
        bookingId,
        details: {
          astrologerName: astrologer.name,
          date: selectedDate,
          timeSlot: selectedSlot,
          mode: mode,
        },
        message: `Your booking with ${astrologer.name} is successfully confirmed!`,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 dark:bg-black/80 backdrop-blur-sm overflow-y-auto overscroll-none py-6 sm:py-12 px-4 flex justify-center items-start">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden my-auto animate-fadeIn">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-[#0b1121] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={astrologer.avatar}
              alt={astrologer.name}
              className="w-14 h-14 rounded-2xl object-cover border border-amber-500/30 shadow-sm"
            />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{astrologer.name}</h3>
              <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                {mode.toUpperCase()} Session • {duration} Mins • ${totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-200/50 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!bookingConfirmation ? (
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between text-sm font-semibold border-b border-slate-200 dark:border-white/10 pb-5">
              <span className={`flex items-center gap-2 ${step >= 1 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-500 dark:text-slate-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-slate-100 dark:bg-white/5'}`}>1</span>
                <span>Mode & Time</span>
              </span>
              <span className={`flex items-center gap-2 ${step >= 2 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-500 dark:text-slate-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step >= 2 ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-slate-100 dark:bg-white/5'}`}>2</span>
                <span>Birth Info</span>
              </span>
              <span className={`flex items-center gap-2 ${step >= 3 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-500 dark:text-slate-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step >= 3 ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-slate-100 dark:bg-white/5'}`}>3</span>
                <span>Payment</span>
              </span>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-3">
                    SELECT CONSULTATION MODE
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'chat', label: 'Chat', icon: MessageSquare },
                      { id: 'call', label: 'Audio Call', icon: PhoneCall },
                      { id: 'video', label: 'Video Call', icon: Video }
                    ].map((m) => {
                      const Icon = m.icon;
                      const isActive = mode === m.id;
                      return (
                        <button
                          key={m.id}
                          onClick={() => setMode(m.id as any)}
                          className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                            isActive
                              ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500 text-amber-700 dark:text-amber-400 shadow-sm'
                              : 'bg-slate-50 dark:bg-[#0b1121] border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:border-amber-500/50'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                          <span className="text-sm font-bold">{m.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-3">
                    SESSION DURATION
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[15, 30, 60].map((d) => (
                      <button
                        key={d}
                        onClick={() => setDuration(d as any)}
                        className={`py-3.5 rounded-2xl border text-center text-sm font-bold transition-all cursor-pointer ${
                          duration === d
                            ? 'bg-amber-500 border-amber-500 text-slate-900 shadow-md'
                            : 'bg-slate-50 dark:bg-[#0b1121] border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:border-amber-500/50'
                        }`}
                      >
                        {d} Minutes
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-3">
                    DATE & TIME SLOT
                  </label>
                  <div className="flex gap-3 mb-4">
                    {astrologer.availableSlots.map((s) => (
                      <button
                        key={s.date}
                        onClick={() => setSelectedDate(s.date)}
                        className={`px-5 py-2 rounded-xl text-sm font-bold transition-colors ${
                          selectedDate === s.date 
                            ? 'bg-amber-500 text-slate-900 shadow-sm' 
                            : 'bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:border-amber-500/50'
                        }`}
                      >
                        {s.date}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {astrologer.availableSlots
                      .find((s) => s.date === selectedDate)
                      ?.slots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2.5 rounded-xl text-sm font-semibold transition-colors border ${
                            selectedSlot === slot
                              ? 'bg-amber-50 dark:bg-[#0b1121] border-amber-500 text-slate-900 dark:text-white'
                              : 'bg-slate-50 dark:bg-[#0b1121] border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:border-amber-500/50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-4 mt-2 rounded-2xl bg-amber-500 hover:bg-amber-500/90 text-slate-900 font-bold text-base shadow-lg transition-transform hover:scale-[1.01]"
                >
                  Continue to Personal & Birth Info →
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Vikram Sharma"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Time of Birth</label>
                    <input
                      type="time"
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Place of Birth</label>
                    <input
                      type="text"
                      placeholder="New Delhi, India"
                      value={pob}
                      onChange={(e) => setPob(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">Primary Life Concern / Question</label>
                  <select
                    value={primaryConcern}
                    onChange={(e) => setPrimaryConcern(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Career & Job Switch">Career & Job Switch</option>
                    <option value="Marriage & Relationship">Marriage & Relationship</option>
                    <option value="Financial & Business Growth">Financial & Business Growth</option>
                    <option value="Health & Well-being">Health & Well-being</option>
                    <option value="Vastu & Home Energy">Vastu & Home Energy</option>
                  </select>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/3 py-4 rounded-2xl bg-slate-100 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="w-2/3 py-4 rounded-2xl bg-amber-500 hover:bg-amber-500/90 text-slate-900 font-bold text-base shadow-lg transition-transform hover:scale-[1.01]"
                  >
                    Proceed to Payment →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 space-y-3">
                  <span className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide block">
                    APPLY PROMO COUPON
                  </span>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 text-sm uppercase font-bold text-amber-600 dark:text-amber-400 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-6 py-3 rounded-xl bg-slate-800 dark:bg-white/10 hover:bg-slate-700 dark:hover:bg-white/20 text-sm font-bold text-amber-400 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {isCouponApplied && (
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-medium mt-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Code ASTROFIRST applied! 50% Cashback Discount.</span>
                    </span>
                  )}
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 space-y-4">
                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 font-medium">
                    <span>{duration} Mins {mode.toUpperCase()} Session</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {isCouponApplied && (
                    <div className="flex justify-between text-sm text-emerald-600 dark:text-emerald-400 font-medium pb-4 border-b border-slate-200 dark:border-white/10">
                      <span>50% First Consultation Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-extrabold text-amber-600 dark:text-amber-400 pt-1">
                    <span>Total Payable Amount</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="w-1/3 py-4 rounded-2xl bg-slate-100 dark:bg-[#0b1121] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
                  >
                    ← Edit Details
                  </button>
                  <button
                    onClick={handleConfirmBooking}
                    disabled={isSubmitting}
                    className="w-2/3 py-4 rounded-2xl bg-amber-500 hover:bg-amber-500/90 text-slate-900 font-extrabold text-base shadow-lg transition-transform hover:scale-[1.01] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Confirming...' : 'Pay & Confirm Booking →'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-10 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-500/40">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div>
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
                Booking Confirmed!
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                ID: {bookingConfirmation.bookingId}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                {bookingConfirmation.message}
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-10 py-4 mt-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-base shadow-lg transition-transform hover:scale-105"
            >
              Done & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
