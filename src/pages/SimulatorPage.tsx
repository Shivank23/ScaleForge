import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, ArrowRight, CheckCircle2, Zap, Play, Target, BarChart3 } from "lucide-react";
import { PipelineSimulator } from "../components/PipelineSimulator";

export const SimulatorPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Page Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold">
          <Sparkles size={14} className="animate-pulse" />
          <span>Interactive Outbound Sandbox</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight">
          Lead-to-Meeting <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Pipeline Simulator
          </span>
        </h1>
        <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
          Test-drive the exact B2B client acquisition engine ScaleForge deploys in 14 days. Tune your ICP, message frequency, and watch cold accounts transform into booked sales meetings with verified budget qualification.
        </p>
      </div>

      {/* Interactive Simulator Card */}
      <PipelineSimulator />

      {/* Feature Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-primary-fixed/30 text-primary flex items-center justify-center font-bold">
            <Target size={20} />
          </div>
          <h3 className="font-display font-bold text-base text-on-surface">
            Zero-Spam Intent Targeting
          </h3>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            We don't blast random lists. Leads are scraped in real-time based on active hiring signals, tech stack changes, and buyer intent triggers.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-secondary-container/40 text-secondary flex items-center justify-center font-bold">
            <Zap size={20} />
          </div>
          <h3 className="font-display font-bold text-base text-on-surface">
            Automated Pre-Qualification
          </h3>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Before a meeting hits your calendar, our intelligent logic verifies decision-maker authority and minimum deal budget thresholds.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck size={20} />
          </div>
          <h3 className="font-display font-bold text-base text-on-surface">
            100% Guaranteed Delivery SLA
          </h3>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            All 4 infrastructure stages go live within 14 days. If we don't deliver verified qualified calls, you pay zero fees.
          </p>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-br from-primary-container/30 via-surface-container-low to-surface-container-lowest p-8 sm:p-10 rounded-3xl border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-on-surface">
            Ready to turn this simulation into real booked calls?
          </h3>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant">
            Schedule a 15-minute diagnostic call to review your customized pipeline blueprint and lock in your 14-day launch.
          </p>
        </div>
        <Link
          to="/diagnostic"
          className="shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
        >
          <span>Claim Your 14-Day Blueprint</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
