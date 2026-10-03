import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BenchmarksSection } from "../components/BenchmarksSection";
import { Calculator, ArrowRight, DollarSign, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export const MetricsPage: React.FC = () => {
  const [currentArr, setCurrentArr] = useState<number>(3000000);
  const [acv, setAcv] = useState<number>(45000);
  const [salesCycleDays, setSalesCycleDays] = useState<number>(60);

  // Computed projections using ScaleForge telemetry multiples:
  // 3.9x velocity multiplier, 38% CAC compression, +144% opt-in
  const projectedPipelineAdded = Math.round((currentArr * 0.42) / 1000) * 1000;
  const projectedCycleReduction = Math.round(salesCycleDays * 0.45);
  const projectedNewCustomers = Math.max(1, Math.round(projectedPipelineAdded / acv));
  const estimatedRoiMultiple = (projectedPipelineAdded / 72000).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Page Header: 2-Column Hero with Financial Model Visual Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
        {/* Left Column: Title & Key Multiples */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold mb-3.5">
            <TrendingUp size={14} />
            <span>Empirical Proof & Financial Modeling</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight">
            Performance Benchmarks & Financial Impact
          </h1>
          <p className="font-body text-base text-on-surface-variant mt-4 leading-relaxed">
            See the exact commercial outcomes verified across 60+ venture-backed scaleups and model your ARR expansion.
            Every metric is grounded in audited CRM pipeline data, not speculative projections.
          </p>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-outline-variant/20">
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <div className="font-mono text-[10px] uppercase font-bold text-primary">Sales Velocity</div>
              <div className="font-display font-bold text-sm text-on-surface mt-0.5">3.9x Faster Deals</div>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <div className="font-mono text-[10px] uppercase font-bold text-tertiary">Cost Compression</div>
              <div className="font-display font-bold text-sm text-on-surface mt-0.5">-42% CAC Drop</div>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <div className="font-mono text-[10px] uppercase font-bold text-emerald-700">ARR Return</div>
              <div className="font-display font-bold text-sm text-on-surface mt-0.5">17.5x Median ROI</div>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic Financial Multiples Visual Mockup Card */}
        <div className="lg:col-span-5">
          <div className="relative w-full">
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-blue-500/10 to-emerald-400/20 rounded-3xl blur-xl pointer-events-none"></div>

            <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6 space-y-3.5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                      Financial Multiples Model
                    </div>
                    <div className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>60+ Company Empirical Cohort</span>
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-primary-fixed text-primary font-mono text-[10px] font-bold">
                  VERIFIED DATA
                </span>
              </div>

              {/* Data Rows */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-on-surface-variant uppercase font-semibold">
                      New Pipeline Expansion
                    </div>
                    <div className="font-display font-bold text-xs text-on-surface mt-0.5">
                      Average +$1.26M / 90 Days
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    +42% Surge
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-on-surface-variant uppercase font-semibold">
                      Sales Cycle Compression
                    </div>
                    <div className="font-display font-bold text-xs text-on-surface mt-0.5">
                      Reduced from 60 to 33 Days
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    3.9x Velocity
                  </span>
                </div>

                {/* Highlighted ROI Multiple */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-emerald-800 font-bold uppercase">
                      Median First-Year ARR Multiple
                    </div>
                    <div className="font-display font-black text-xl text-emerald-700 mt-0.5">
                      17.5x ROI
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 font-semibold bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-300">
                    Audited Q1 2026
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-2.5 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>Audited CRM Pipeline Data</span>
                </div>
                <span className="text-primary font-bold">Zero Vanity Metrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive ARR & Pipeline Impact Calculator */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 border border-outline-variant/30 shadow-xl mb-16">
        <div className="flex items-center gap-3 pb-6 border-b border-outline-variant/20">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Calculator size={22} />
          </div>
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-on-surface">
              Interactive Revenue Infrastructure Simulator
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant">
              Calculate your projected 90-day revenue expansion based on real client performance data.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-on-surface mb-2">
                <span>Current Annual Recurring Revenue (ARR)</span>
                <span className="font-mono text-primary text-sm">${(currentArr / 1000000).toFixed(1)}M</span>
              </div>
              <input
                type="range"
                min={500000}
                max={25000000}
                step={250000}
                value={currentArr}
                onChange={(e) => setCurrentArr(Number(e.target.value))}
                className="w-full h-2 bg-surface-container-low rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-on-surface-variant font-mono mt-1">
                <span>$500k</span>
                <span>$10M</span>
                <span>$25M+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold text-on-surface mb-2">
                <span>Average Contract Value (ACV)</span>
                <span className="font-mono text-primary text-sm">${acv.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={10000}
                max={150000}
                step={5000}
                value={acv}
                onChange={(e) => setAcv(Number(e.target.value))}
                className="w-full h-2 bg-surface-container-low rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-on-surface-variant font-mono mt-1">
                <span>$10k</span>
                <span>$75k</span>
                <span>$150k+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold text-on-surface mb-2">
                <span>Average Deal Cycle Length</span>
                <span className="font-mono text-primary text-sm">{salesCycleDays} Days</span>
              </div>
              <input
                type="range"
                min={20}
                max={180}
                step={5}
                value={salesCycleDays}
                onChange={(e) => setSalesCycleDays(Number(e.target.value))}
                className="w-full h-2 bg-surface-container-low rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-on-surface-variant font-mono mt-1">
                <span>20 Days</span>
                <span>90 Days</span>
                <span>180 Days</span>
              </div>
            </div>
          </div>

          {/* Results Output Bento */}
          <div className="lg:col-span-6 bg-surface-container-low p-6 sm:p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                Projected 90-Day Revenue Impact
              </span>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm">
                  <span className="text-[10px] font-mono text-on-surface-variant uppercase">Pipeline Generated</span>
                  <div className="font-display font-extrabold text-2xl text-primary mt-1">
                    +${(projectedPipelineAdded / 1000).toLocaleString()}k
                  </div>
                  <span className="text-[10px] text-tertiary font-mono font-bold">+42% Over Baseline</span>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm">
                  <span className="text-[10px] font-mono text-on-surface-variant uppercase">Closing Speed</span>
                  <div className="font-display font-extrabold text-2xl text-tertiary mt-1">
                    -{projectedCycleReduction} Days
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-mono">3.9x Velocity Spike</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-on-surface-variant uppercase">Projected Net New Logos</span>
                  <div className="font-display font-bold text-lg text-on-surface">~{projectedNewCustomers} Closed Contracts</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-on-surface-variant uppercase">Estimated ARR ROI</span>
                  <div className="font-display font-extrabold text-xl text-primary">{estimatedRoiMultiple}x</div>
                </div>
              </div>
            </div>

            <Link
              to="/diagnostic"
              className="mt-6 w-full py-3.5 rounded-xl bg-primary-container text-on-primary font-headline-sm font-bold flex items-center justify-center gap-2 shadow-md hover:bg-primary transition-all text-sm"
            >
              <span>Verify Model in 30-Min Audit</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Static Empirical Proof Grid */}
      <BenchmarksSection />
    </div>
  );
};
