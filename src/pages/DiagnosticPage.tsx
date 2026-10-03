import React from "react";
import { BookingSection } from "../components/BookingSection";
import { ShieldCheck, Lock, CheckCircle2, FileCheck, HelpCircle } from "lucide-react";

export const DiagnosticPage: React.FC = () => {
  const faqs = [
    {
      q: "Who conducts the Growth Blueprint Session?",
      a: "All sessions are conducted exclusively by a Principal Pipeline Engineer—never a junior sales rep or account executive. You will speak with a seasoned technical growth architect.",
    },
    {
      q: "What should we prepare before the call?",
      a: "Nothing required upfront. Having approximate figures on your current sales cycle length, average ACV, and current CRM setup allows us to generate a more granular leak analysis.",
    },
    {
      q: "Is there any hard sales pitching?",
      a: "Strictly zero. If your unit economics or TAM are not suitable for an autonomous engine installation, we will tell you directly and outline what you need to adjust first.",
    },
    {
      q: "How does the Mutual NDA work?",
      a: "Upon scheduling, a mutual non-disclosure agreement is automatically dispatched to both parties ensuring all pipeline data and commercial conversations remain strictly confidential.",
    },
  ];

  return (
    <div className="py-8 sm:py-12 bg-background">
      {/* Primary Booking Component */}
      <BookingSection />

      {/* Pre-Audit FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-on-surface-variant font-label-badge text-xs uppercase font-bold mb-2">
            <HelpCircle size={14} />
            <span>Audit Preparation & FAQ</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-on-surface">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm">
              <h3 className="font-display font-bold text-sm sm:text-base text-on-surface mb-2">{faq.q}</h3>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
