import React, { useState } from "react";
import { Lock, Calendar, CheckCircle2, ShieldCheck, ArrowRight, Clock } from "lucide-react";

import { trackConsultationBooking } from "../utils/analytics";
import { saveConsultationBooking } from "../lib/supabase";

export const BookingSection: React.FC = () => {
  const [priority, setPriority] = useState<string>("Full Client System");
  const [selectedDate, setSelectedDate] = useState<string>("THU 24");
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [revenue, setRevenue] = useState<string>("$20,000 – $50,000 / month");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const priorities = ["Full Client System", "Modern Website", "AI Assistants", "Lead Outreach"];

  const dates = [
    { day: "THU", date: "24", val: "THU 24" },
    { day: "FRI", date: "25", val: "FRI 25" },
    { day: "MON", date: "28", val: "MON 28" },
    { day: "TUE", date: "29", val: "TUE 29" },
    { day: "WED", date: "30", val: "WED 30" },
    { day: "THU", date: "31", val: "THU 31" },
  ];

  const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    trackConsultationBooking(priority, revenue);
    
    await saveConsultationBooking({
      name: fullName,
      email: email,
      company: revenue,
      priority: priority,
      selected_date: selectedDate,
      selected_time: selectedTime,
    });

    setIsSaving(false);
    setIsSubmitted(true);
  };

  return (
    <section id="diagnostic" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/30 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Clear Context Column */}
          <div className="lg:col-span-5 p-5 sm:p-10 lg:p-12 bg-surface-container-low flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-outline-variant/30">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold mb-4">
                <span>Free Strategy Consultation</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight leading-snug">
                Reserve Your 30-Minute Growth Strategy Call.
              </h2>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                Speak directly with a Senior Growth Architect. We inspect where you are currently losing potential clients,
                review your goals, and map out a simple, step-by-step roadmap to get more paying customers.
              </p>

              {/* 3 Clear Steps */}
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-display font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-sm font-bold text-on-surface">Where You're Losing Leads</h3>
                    <p className="font-body text-xs text-on-surface-variant mt-0.5">
                      We check your current website and messaging to see why interested visitors aren't booking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-display font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-sm font-bold text-on-surface">Custom Step-by-Step Plan</h3>
                    <p className="font-body text-xs text-on-surface-variant mt-0.5">
                      We show you the exact pages, emails, and tools needed to hit your monthly sales targets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-display font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-sm font-bold text-on-surface">30-Day Guarantee Check</h3>
                    <p className="font-body text-xs text-on-surface-variant mt-0.5">
                      We confirm whether your business qualifies for our written performance guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality Badge */}
            <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center gap-2.5 text-on-surface-variant font-mono text-[11px]">
              <Lock className="text-tertiary shrink-0" size={18} />
              <span>100% confidential. No high-pressure sales tactics—just a practical plan.</span>
            </div>
          </div>

          {/* Right: Interactive Booking Form */}
          <div className="lg:col-span-7 p-5 sm:p-10 lg:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Primary Focus */}
                <div>
                  <label className="block font-headline-sm text-xs sm:text-sm font-bold text-on-surface mb-2.5">
                    1. What is your main growth priority right now?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {priorities.map((item) => {
                      const isSelected = priority === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setPriority(item)}
                          className={`py-2.5 px-3 rounded-lg text-xs font-semibold text-center transition-all ${
                            isSelected
                              ? "bg-primary-container text-on-primary shadow-sm ring-2 ring-primary-container"
                              : "border border-outline-variant/40 text-on-surface hover:bg-surface-container-low bg-surface-container-lowest"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Date & Time Window */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-headline-sm text-xs sm:text-sm font-bold text-on-surface">
                      2. Choose a date and time for your call
                    </label>
                    <span className="font-mono text-[11px] text-primary font-bold">EST (New York Time)</span>
                  </div>

                  {/* Horizontal Date Pills */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                    {dates.map((d) => {
                      const isSelected = selectedDate === d.val;
                      return (
                        <button
                          key={d.val}
                          type="button"
                          onClick={() => setSelectedDate(d.val)}
                          className={`p-2 rounded-lg text-center transition-all ${
                            isSelected
                              ? "bg-primary-container text-on-primary shadow-md font-bold"
                              : "bg-surface-container-low text-on-surface hover:bg-surface-container font-medium"
                          }`}
                        >
                          <div className="text-[10px] opacity-75">{d.day}</div>
                          <div className="text-base font-bold leading-none mt-0.5">{d.date}</div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Time Slot Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2 px-1 rounded-lg text-center font-mono text-xs transition-all ${
                            isSelected
                              ? "bg-primary-container text-on-primary font-bold shadow-sm"
                              : "bg-surface-container-low text-on-surface hover:bg-surface-container font-medium"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Simple Lead Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label htmlFor="booking-full-name" className="block font-label-badge text-[11px] uppercase tracking-wider text-on-surface mb-1 font-bold">
                      Your Full Name
                    </label>
                    <input
                      id="booking-full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Vance"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-work-email" className="block font-label-badge text-[11px] uppercase tracking-wider text-on-surface mb-1 font-bold">
                      Business Email Address
                    </label>
                    <input
                      id="booking-work-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@yourcompany.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Monthly Revenue Run-Rate */}
                <div>
                  <label htmlFor="booking-revenue-tier" className="block font-label-badge text-[11px] uppercase tracking-wider text-on-surface mb-1 font-bold">
                    Approximate Monthly Revenue
                  </label>
                  <select
                    id="booking-revenue-tier"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="Under $20,000 / month">Under $20,000 / month (Early Stage)</option>
                    <option value="$20,000 – $50,000 / month">$20,000 – $50,000 / month</option>
                    <option value="$50,000 – $100,000 / month">$50,000 – $100,000 / month</option>
                    <option value="$100,000+ / month">$100,000+ / month (Established)</option>
                  </select>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-primary-container text-on-primary font-headline-sm text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-md shadow-primary-container/20 hover:bg-primary transition-all duration-200 active:scale-[0.99]"
                  >
                    <span>Confirm My Strategy Session</span>
                    <Calendar size={18} />
                  </button>
                </div>

                {/* Instant Notice */}
                <div className="flex items-center justify-center gap-2 text-on-surface-variant font-mono text-[11px] text-center">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shrink-0"></span>
                  <span>Instant calendar invite sent to your email immediately.</span>
                </div>
              </form>
            ) : (
              /* Success Confirmation Box */
              <div className="p-8 sm:p-10 bg-emerald-50/60 border border-emerald-200 rounded-2xl text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-on-surface">
                    Strategy Session Confirmed!
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto mt-1.5">
                    We've emailed a calendar invite with the Zoom link to{" "}
                    <strong className="text-on-surface font-semibold">{email || "your email"}</strong>.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 text-left max-w-sm mx-auto space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Focus Topic:</span>
                    <span className="font-bold text-on-surface">{priority}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Selected Time:</span>
                    <span className="font-bold text-on-surface">{selectedDate} at {selectedTime} EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Your Lead Architect:</span>
                    <span className="font-bold text-primary">Senior Growth Engineer</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-primary font-semibold hover:underline pt-2 block mx-auto"
                >
                  Need to pick another time? Click here to change
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
