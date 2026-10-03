import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Check, ArrowRight, FileText, AlertCircle, Award } from "lucide-react";
import { GuaranteeSection } from "../components/GuaranteeSection";

export const GuaranteePage: React.FC = () => {
  const contractClauses = [
    {
      title: "1. Verified Qualified Conversation Threshold",
      desc: "Within 30 calendar days of live infrastructure ignition, ScaleForge contracts to deliver a predetermined volume of ICP-verified sales conversations. Every prospect must meet your exact headcount, tech stack, and budget whitelisting.",
    },
    {
      title: "2. The 100% Free Work Provision",
      desc: "If targets are not satisfied within 30 days, all billing halts immediately. Our Principal Engineers continue operating, refining, and scaling your engines at zero cost until your baseline benchmark is surpassed.",
    },
    {
      title: "3. 100% Real-Time Data Transparency",
      desc: "All pipeline data flows directly through your HubSpot or Salesforce instance. There are no black-box vanity spreadsheets; you audit every conversation, booked call, and lead in real time.",
    },
    {
      title: "4. Full IP & Infrastructure Ownership",
      desc: "Every custom agent, landing environment, tracking script, and audience dataset remains 100% your corporate property. Even if our engagement ends, the infrastructure stays inside your repository forever.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Page Header: 2-Column Hero with Contractual SLA Visual Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
        {/* Left Column: Title & Key Safeguards */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold mb-3.5">
            <ShieldCheck size={14} />
            <span>Enterprise Risk Reversal</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight">
            Contractual Performance SLA & Guarantee Terms
          </h1>
          <p className="font-body text-base text-on-surface-variant mt-4 leading-relaxed">
            Growth agencies bill monthly retainers regardless of output. ScaleForge aligns compensation strictly with
            verified pipeline acceleration. If we don't deliver, you don't pay.
          </p>

          {/* Quick SLA Safeguard Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-outline-variant/20">
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <div className="font-mono text-[10px] uppercase font-bold text-emerald-700">Financial Risk</div>
              <div className="font-display font-bold text-sm text-on-surface mt-0.5">Zero Retainer Risk</div>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <div className="font-mono text-[10px] uppercase font-bold text-primary">Provision</div>
              <div className="font-display font-bold text-sm text-on-surface mt-0.5">100% Free Work SLA</div>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <div className="font-mono text-[10px] uppercase font-bold text-tertiary">Intellectual Property</div>
              <div className="font-display font-bold text-sm text-on-surface mt-0.5">100% Client Owned</div>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic Contractual MSA SLA Document Visual Card */}
        <div className="lg:col-span-5">
          <div className="relative w-full">
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-primary/10 to-teal-400/20 rounded-3xl blur-xl pointer-events-none"></div>

            <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6 space-y-3.5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <FileText size={18} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                      ScaleForge Master Services Agreement
                    </div>
                    <div className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Clause 4.2 Performance Provision</span>
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-[10px] font-bold">
                  EXECUTED SLA
                </span>
              </div>

              {/* Legal Clauses Preview */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/20">
                  <div className="text-[10px] font-mono text-primary font-bold uppercase">
                    § 4.2.1 • 30-Day Ignition Benchmark
                  </div>
                  <p className="font-body text-xs text-on-surface mt-1 leading-snug">
                    Written quota of verified, ICP-qualified sales conversations delivered within first 30 days.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase">
                      § 4.2.2 • The 100% Free Work Provision
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-white/80 px-2 py-0.5 rounded border border-emerald-300">
                      $0.00 INVOICE
                    </span>
                  </div>
                  <p className="font-body text-xs text-emerald-900 mt-1 leading-snug">
                    If benchmarks are not achieved, all invoices pause immediately. ScaleForge operates at zero charge until targets are exceeded.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/20">
                  <div className="text-[10px] font-mono text-on-surface-variant font-bold uppercase">
                    § 4.2.3 • 100% Code & Asset Retention
                  </div>
                  <p className="font-body text-xs text-on-surface mt-1 leading-snug">
                    All custom bots, high-speed landing funnels, and verified lead datasets remain exclusively your corporate property.
                  </p>
                </div>
              </div>

              {/* Counter-Signature Footer */}
              <div className="pt-2.5 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-600" />
                  <span>Legally Enforceable MSA</span>
                </div>
                <span className="text-emerald-700 font-bold">Counter-Signed & Sealed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Guarantee Banner */}
      <GuaranteeSection />

      {/* Contract Terms Breakdown */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 border border-outline-variant/30 shadow-sm mt-12 mb-16">
        <div className="flex items-center gap-3 pb-6 border-b border-outline-variant/20 mb-8">
          <FileText className="text-primary" size={24} />
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-on-surface">
              Contractual Operating Terms
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant">
              The exact enterprise clauses written into every ScaleForge Master Services Agreement (MSA).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contractClauses.map((clause, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <h3 className="font-display font-bold text-base text-on-surface mb-2">{clause.title}</h3>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">{clause.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SLA Feasibility CTA */}
      <div className="bg-gradient-to-r from-primary via-primary-container to-surface-tint p-8 sm:p-12 rounded-3xl text-on-primary flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="max-w-xl text-center md:text-left">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl">Determine SLA Feasibility</h3>
          <p className="font-body text-sm text-primary-fixed mt-2">
            Audit your TAM and determine eligibility for our 30-day performance-backed installation guarantee.
          </p>
        </div>
        <Link
          to="/diagnostic"
          className="px-8 py-4 rounded-xl bg-surface-container-lowest text-primary font-headline-sm font-bold shadow-lg hover:bg-surface-container-low transition-all shrink-0"
        >
          <span>Reserve Audit Session</span>
        </Link>
      </div>
    </div>
  );
};
