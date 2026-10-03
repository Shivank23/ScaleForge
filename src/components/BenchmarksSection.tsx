import React from "react";
import { Zap, Rocket, CheckCircle2, ShieldCheck, Quote, BarChart3, TrendingUp, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const BenchmarksSection: React.FC = () => {
  const benchmarks = [
    {
      label: "Faster Deal Closing",
      value: "3.9x",
      title: "Speed from Lead to Signed Deal",
      desc: "Turn new inquiries into paying clients in weeks rather than dragging out for months.",
      icon: Zap,
      accent: "text-primary",
      valColor: "text-primary",
    },
    {
      label: "Turnkey Setup Speed",
      value: "14 Days",
      title: "Ready to Launch in 2 Weeks",
      desc: "Your complete system is built, tested, connected to your calendar, and live in 14 days.",
      icon: Rocket,
      accent: "text-primary",
      valColor: "text-on-surface",
    },
    {
      label: "Zero Wasted Spend",
      value: "0%",
      title: "No Money Wasted on Wrong People",
      desc: "We only reach out to real business decision-makers who actually have the budget to buy.",
      icon: CheckCircle2,
      accent: "text-tertiary",
      valColor: "text-tertiary",
    },
    {
      label: "Full Asset Ownership",
      value: "100%",
      title: "You Own Everything Forever",
      desc: "All landing pages, customer contact lists, email templates, and AI bots remain 100% yours.",
      icon: ShieldCheck,
      accent: "text-primary",
      valColor: "text-primary",
    },
  ];

  return (
    <section id="metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="font-label-badge text-xs uppercase tracking-widest text-primary font-bold">
            Proven Business Results
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight mt-1.5">
            Real Benchmarks from Real Client Deployments
          </h2>
        </div>
        <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
          Unlike traditional marketing agencies that charge expensive monthly fees without guaranteeing anything, our
          systems are backed by written results and real-time tracking.
        </p>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benchmarks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-on-surface-variant mb-6">
                <span className="font-mono text-[11px] uppercase tracking-wider">{item.label}</span>
                <div className={`${item.accent} group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
              </div>
              <div>
                <div className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight ${item.valColor}`}>
                  {item.value}
                </div>
                <h3 className="font-headline-sm text-base font-semibold text-on-surface mt-2">{item.title}</h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Verified Empirical Proof & CRM Pipeline Audit Visual Showcase */}
      <div className="mt-8 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-outline-variant/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Client Story & Verified Credentials */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-xs font-bold uppercase">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Verified Client Case Audit</span>
            </div>

            <p className="font-body text-base sm:text-lg text-on-surface font-medium italic leading-relaxed">
              "ScaleForge replaced three separate agencies with a single automated client acquisition system. In 60 days,
              our sales calls tripled while our cost to get a client dropped by 42%. It is straightforward, reliable, and
              consistently fills our team's calendar."
            </p>

            <div className="pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  ER
                </div>
                <div>
                  <div className="font-headline-sm font-bold text-sm text-on-surface">Elena Rostova</div>
                  <div className="font-body text-xs text-on-surface-variant">
                    Chief Commercial Officer • FinTech ScaleUp
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-display font-black text-lg text-emerald-700">+340% Revenue</div>
                <div className="font-mono text-[10px] text-on-surface-variant">First 60 Days Growth</div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic CRM Pipeline Audit Report Visual Mockup */}
          <div className="lg:col-span-6">
            <div className="relative w-full">
              {/* Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/15 via-primary/10 to-blue-500/15 rounded-3xl blur-xl pointer-events-none"></div>

              <div className="relative bg-surface-container-low/90 rounded-2xl border border-outline-variant/30 p-5 sm:p-6 shadow-md space-y-3.5">
                {/* Visual Report Header */}
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold shadow-sm">
                      <BarChart3 size={16} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                        HubSpot CRM Verified Audit
                      </div>
                      <div className="text-[10px] font-mono text-emerald-700 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                        <span>Audited Data Flow • 60-Day Telemetry</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono text-[10px] font-bold">
                    SLA EXCEEDED
                  </span>
                </div>

                {/* Audit Comparison Row 1: Booked Calls */}
                <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-on-surface-variant uppercase font-semibold">
                      Monthly Qualified Demos
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-mono text-xs text-on-surface-variant line-through">12 calls/mo</span>
                      <ArrowUpRight size={13} className="text-emerald-600" />
                      <span className="font-display font-extrabold text-sm text-on-surface">46 calls/month</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    +283% Surge
                  </span>
                </div>

                {/* Audit Comparison Row 2: Customer Acquisition Cost */}
                <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-on-surface-variant uppercase font-semibold">
                      Blended Client Acquisition Cost (CAC)
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-mono text-xs text-on-surface-variant line-through">$1,420</span>
                      <ArrowUpRight size={13} className="text-emerald-600 rotate-90" />
                      <span className="font-display font-extrabold text-sm text-emerald-700">$820 / client</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    -42% Compression
                  </span>
                </div>

                {/* Audit Pipeline Value Total */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-primary/10 via-emerald-50 to-primary/5 border border-primary/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-primary font-bold uppercase">
                      Net Pipeline Added (60 Days)
                    </div>
                    <div className="font-display font-black text-xl text-primary mt-0.5">
                      +$680,000 ARR
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    ✓
                  </div>
                </div>

                {/* Verification Footer */}
                <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
                  <span>Data Source: Live HubSpot Instance</span>
                  <span className="text-emerald-700 font-bold">100% Real-Time Data Transparency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
