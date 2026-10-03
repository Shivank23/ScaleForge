import React, { useState } from "react";
import { ArrowRight, Filter, Globe, Calendar, Zap, Activity, RefreshCw, Star, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      step: "01",
      name: "Capture",
      title: "Ads & Outbound",
      desc: "Target New Leads",
      details: "We reach out directly to your ideal prospects using cold email and social messaging so warm leads start replying.",
      color: "bg-primary",
      icon: Filter,
    },
    {
      step: "02",
      name: "Convert",
      title: "Landing Engine",
      desc: "Turn Clicks Into Calls",
      details: "Fast-loading, high-converting landing pages that explain your value clearly and prompt visitors to book a call.",
      color: "bg-primary-container",
      icon: Globe,
    },
    {
      step: "03",
      name: "Qualify",
      title: "Booked Calls",
      desc: "Pre-Screened Buyers",
      details: "Automated screening ensures you only spend time talking to verified decision-makers who have the budget to buy.",
      color: "bg-surface-tint",
      icon: Calendar,
    },
    {
      step: "04",
      name: "Close",
      title: "Revenue / ARR",
      desc: "New Paying Clients",
      details: "Your calendar fills up with qualified prospect meetings so your team can focus on closing deals and growing steady revenue.",
      color: "bg-tertiary-container",
      icon: Zap,
    },
  ];

  const executiveAvatars = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHIhc8UBX7dQyyMBazkEQk8F0nfapL5yMMzycAfJoSwuvDzRsnyq39C45AKcpkmNDbuRI3Rsmzwek19PvDIh43O0bwpCiiu2RpE7aife_DDoiJJgOq3WLJqIvbNzy72F0mh2Jn49uyihUQUWrnhelxXROiQtLA4u74KVH0--1hChUsHZmYvSziRKMGHQAs0Frmp4_EfSWCftNM4J8YEn9Hi0r2riZbZ4xyzRhcLolT0PZvsojaoouekg",
      alt: "SaaS CEO",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx5kreNMTy7RuSOsjlCKfVXBdPvdcDLH-mFW3FDPqDHJAaiVKkd3gR-R-kz575PawsD31aMgE9yKlVM6Dwi62rVy9eADQ-i4KEOfMG_y66lYbZ9t5WOel5qraSBQmVEjz8apKUInbiH1Nzvj4SJnhOTPzuouN2oeQodmsDBxQ11IR_NCTXGBhL5cvduqgzTBgqMbqzJE9P_Wz9VIpCEsvFYQA7mRGjHNYiHxq9H8POMCpOMZx-7QAgdQ",
      alt: "Enterprise CRO",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxPmKCtq47sVV4fCpZy6LTqsS1M2ucquQ36Vf18YecMt_cudtUskYQ6DuD37mxW3VvIN6D881rq4yYMOQUGLmbB3niyY448jq4JIMJkglXzR1hm0BWxcNtuMXz_8KnbQl5rWZTRaxN5geEYqP8zfkzoruQsJbx2qd7uSD0xGKAPnor7QqDcXRNF9VRCsOrKUplehBCfrz0Lsky7NyXgaxY2tttvf4cbrohqvkYJGj5XAdTgS3twpK26w",
      alt: "Tech Founder",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn4OU7bzTzyg7FOeAsGtLbQQnoS1Osk6goCx2CyzV1P4x0DGw9u65ZoCzfHLLAkvEqBKEKxX42D7UifkfCp3UVbN1u8bV6nfugfdTkbSnMybPJxdX-yRWyacL9C5UFTLnyCx9wTvc31pERaOmf1WEq-Yf2fm-9EEMUUHm94RMZ1qg5AVk-Ya6BYD7JJdF1fF8A6VJhqe2j8Te9-L2URK9Tpl6JgdFgBNJmScNNIago6codgXBoYkDTxA",
      alt: "VP of Sales",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pt-12 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start gap-5">
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface text-label-badge font-label-badge shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
            </span>
            <span className="text-emerald-700 font-bold tracking-wider">LIVE PIPELINE ACTIVE</span>
            <span className="text-outline-variant">|</span>
            <span className="text-on-surface">Client Acquisition Systems</span>
            <span className="text-outline-variant">|</span>
            <span className="text-primary font-bold">Written Results Guarantee</span>
          </div>

          {/* Master Headline in Clear Terms */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] text-on-surface tracking-tight">
            We Build, Install & Scale{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-surface-tint bg-clip-text text-transparent">
              Automated Growth Engines
            </span>{" "}
            For Growing Businesses.
          </h1>

          {/* Crisp, Non-Technical Subheadline */}
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Get more high-paying clients without the guesswork. We set up cold email outreach, high-converting websites,
            and 24/7 AI assistants that fill your calendar with qualified sales appointments.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full pt-1">
            <button
              onClick={() => {
                const el = document.querySelector("#diagnostic");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else navigate("/diagnostic");
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-primary-container text-on-primary font-headline-sm text-base font-bold shadow-md shadow-primary-container/20 hover:bg-primary transition-all duration-200 group active:scale-[0.98]"
            >
              <span>Claim Free Growth Diagnostic</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                navigate("/roadmap");
              }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-surface-container-lowest text-primary font-headline-sm text-base font-bold shadow-sm border border-outline-variant/30 hover:bg-surface-container-low transition-colors active:scale-[0.98]"
            >
              <Layers className="w-5 h-5" />
              <span>Explore Services Roadmap</span>
            </button>
          </div>

          {/* Micro Proof Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex -space-x-2.5 overflow-hidden">
              {executiveAvatars.map((avatar, idx) => (
                <img
                  key={idx}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-surface-container-lowest object-cover"
                  src={avatar.src}
                  alt={avatar.alt}
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="font-headline-sm text-sm text-on-surface font-bold ml-1">4.96/5</span>
              </div>
              <span className="font-body text-xs text-on-surface-variant">
                Trusted by 60+ Business Leaders & <strong className="font-semibold text-primary">$58M+ Revenue Added</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 4-Stage Pipeline Card */}
        <div className="lg:col-span-6 w-full">
          <div className="relative bg-surface-container-lowest rounded-2xl p-4 sm:p-7 shadow-xl shadow-on-background/5 border border-outline-variant/20 overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-headline-sm text-sm sm:text-base font-bold tracking-tight text-on-surface uppercase">
                    4-Stage Client Acquisition Flow
                  </span>
                </div>
                <span className="font-body text-xs text-on-surface-variant">
                  How your leads turn into signed contracts
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-badge text-xs tracking-wider flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> ACTIVE
              </span>
            </div>

            {/* Pipeline Stage Visualizer - FIXED: Line connects solely through the vertical center of top node icons; labels are in a separate container below so text is NEVER cut */}
            <div className="relative pt-5 pb-4 my-4 bg-surface-container-low/70 rounded-xl px-3 sm:px-4 border border-outline-variant/20">
              {/* Row 1: Connected Node Circles with Center-Joining Track Line */}
              <div className="relative flex items-center justify-between px-3 sm:px-6">
                {/* Connecting Track Line running straight through the exact centers of the circle icons */}
                <div className="absolute left-8 right-8 sm:left-12 sm:right-12 top-1/2 -translate-y-1/2 h-[3px] bg-outline-variant/40 z-0 overflow-visible">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-primary-container to-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${(activeStage / 3) * 100}%` }}
                  ></div>
                  {/* Glowing Comet Packet that travels continuously along the track */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-300 border-2 border-primary shadow-[0_0_12px_#38bdf8] pointer-events-none animate-comet"></div>
                </div>

                {/* 4 Circular Stage Nodes */}
                {stages.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isSelected = activeStage === idx;
                  const isCompleted = activeStage >= idx;
                  return (
                    <div key={stage.step} className="relative z-10 flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => setActiveStage(idx)}
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${
                          isSelected
                            ? `${stage.color} text-white ring-4 ring-primary/30 scale-110 shadow-lg`
                            : isCompleted
                            ? `${stage.color} text-white hover:scale-105`
                            : "bg-surface-container-highest text-on-surface-variant hover:scale-105"
                        }`}
                        title={`${stage.step}. ${stage.name}`}
                      >
                        <Icon size={19} />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Row 2: Text Block Strictly Below the Node Icons (Line can never cut any text) */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mt-3 pt-1 text-center">
                {stages.map((stage, idx) => {
                  const isSelected = activeStage === idx;
                  return (
                    <button
                      key={stage.step}
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      className="flex flex-col items-center text-center p-1 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group focus:outline-none"
                    >
                      <span
                        className={`font-mono text-[10px] sm:text-[11px] font-bold ${
                          isSelected ? "text-primary" : "text-primary/80"
                        }`}
                      >
                        {stage.step}. {stage.name}
                      </span>
                      <span className="font-display text-[11px] sm:text-xs font-bold text-on-surface mt-0.5 leading-snug">
                        {stage.title}
                      </span>
                      <span className="font-body text-[10px] text-on-surface-variant mt-0.5 leading-tight">
                        {stage.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Stage Explanation Box */}
              <div className="mt-3.5 pt-3 border-t border-outline-variant/30 text-xs text-on-surface-variant flex items-center gap-2 px-1">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-ping"></span>
                <span>
                  <strong className="text-on-surface font-semibold">
                    Step {stages[activeStage].step} ({stages[activeStage].name} - {stages[activeStage].title}):
                  </strong>{" "}
                  {stages[activeStage].details}
                </span>
              </div>
            </div>

            {/* Easy-to-Understand Value Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                    Full Ownership
                  </span>
                  <div className="font-headline-sm text-sm sm:text-base font-bold text-on-surface">100% Yours Forever</div>
                  <span className="font-body text-xs text-on-surface-variant">All pages, lists, and tools stay with you</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <Activity size={18} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                    Direct Calendar Integration
                  </span>
                  <div className="flex items-center gap-1.5 pt-0.5 font-headline-sm text-sm sm:text-base font-bold text-on-surface">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Instant Lead Delivery
                  </div>
                  <span className="font-body text-xs text-on-surface-variant">Syncs with Google Calendar, Slack & CRM</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <RefreshCw size={18} />
                </div>
              </div>
            </div>

            {/* Bottom Status Banner */}
            <div className="mt-3 pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-2 text-on-surface-variant font-mono text-[11px]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>
                  Average 90-Day Pipeline Increase: <strong className="text-on-surface font-bold">+312%</strong>
                </span>
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono text-[10px]">
                Safe & Confidential
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
