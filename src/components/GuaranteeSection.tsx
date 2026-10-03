import React from "react";
import { ShieldCheck, Check } from "lucide-react";

export const GuaranteeSection: React.FC = () => {
  const guaranteePills = ["Zero Retainer Risk", "Written Performance Guarantee", "Weekly Live Progress Reports"];

  return (
    <section id="guarantee" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high rounded-2xl p-6 sm:p-10 lg:p-12 shadow-md border border-outline-variant/30">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
          {/* Shield Icon Badge */}
          <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-tertiary-container text-on-primary flex items-center justify-center shadow-lg shadow-tertiary-container/30">
            <ShieldCheck size={42} strokeWidth={2} />
          </div>

          {/* Copy Column */}
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-label-badge text-xs uppercase tracking-wider text-tertiary font-bold">
                Uncompromising Commercial Alignment
              </span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-on-surface tracking-tight">
              The 30-Day Pipeline Performance Guarantee
            </h3>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              If we do not generate verified, highly-qualified sales conversations and measurable pipeline velocity with
              your exact target buyer profiles within your first 30 days of infrastructure launch,{" "}
              <strong className="text-on-surface font-semibold">we work 100% free until we exceed your baseline targets.</strong>{" "}
              No hollow arguments. No retained retainers without results.
            </p>
          </div>

          {/* Right: High-Trust SLA Guarantee Certificate Card */}
          <div className="shrink-0 w-full lg:w-80 bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-md space-y-3.5">
            <div className="flex items-center justify-between pb-2.5 border-b border-outline-variant/20">
              <span className="font-mono text-[10px] uppercase font-bold text-tertiary tracking-wider">
                Contractual SLA
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono text-[10px] font-bold">
                100% WRITTEN
              </span>
            </div>

            <div className="space-y-2">
              {guaranteePills.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-on-surface font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Official seal */}
            <div className="pt-2.5 border-t border-outline-variant/20 flex items-center justify-between text-[10px] font-mono text-on-surface-variant">
              <span>Section 4.2 Operating Clause</span>
              <span className="text-emerald-700 font-bold">Legal Risk Reversal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
