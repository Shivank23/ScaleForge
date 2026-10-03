import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Globe,
  Bot,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Calendar,
  Sparkles,
  PhoneCall,
  DollarSign,
  Layers,
  MessageSquare,
  Lock,
  Flame,
} from "lucide-react";
import { motion } from "motion/react";

export const ArchitecturePage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // 4 Core Architecture Pillars in Simple, Human Language
  const architectureSteps = [
    {
      stepNumber: "01",
      name: "Find & Identify Your Ideal Clients",
      shortTitle: "1. Client Discovery",
      tag: "STEP 1: BUYER SIGNALS",
      simpleHeadline: "We find verified companies actively looking for your exact services",
      description:
        "Instead of sending generic messages to random people, our system continuously monitors real buying indicators—such as companies hiring, expanding, or upgrading their software. We verify the exact email and LinkedIn profile of the true decision-maker (CEO, Founder, or VP) before reaching out.",
      howItWorks: [
        "Identifies companies in your target market who have budget and genuine need",
        "Validates decision-maker contact details so emails never bounce or land in spam",
        "Monitors trigger events (funding rounds, job openings) to contact buyers at the perfect time",
      ],
      clientBenefit: "You only talk to people who actually have the budget and need your services.",
      metricBadge: "99.4% Verified Contacts",
      toolsUsed: ["LinkedIn Sales Nav", "Apollo Database", "Verified Email Servers"],
    },
    {
      stepNumber: "02",
      name: "Turn Visitors into Sales Inquiries",
      shortTitle: "2. Conversion Engine",
      tag: "STEP 2: HIGH-TRUST PAGES",
      simpleHeadline: "Fast, modern web pages designed to turn visitors into booked meetings",
      description:
        "When prospective clients check out your business, they need to see clear proof, simple pricing, and an easy way to get in touch. We build custom, mobile-friendly landing pages that load in under 1 second, showcase your past results, and make booking a call as easy as ordering an Uber.",
      howItWorks: [
        "Loads instantly in under 0.5 seconds on both phones and computers",
        "Clearly explains your offer in human language with zero confusing jargon",
        "Includes a frictionless 2-step booking widget with direct calendar access",
      ],
      clientBenefit: "Visitors don't get confused and leave—they quickly book a sales call with you.",
      metricBadge: "Sub-0.5s Load Time",
      toolsUsed: ["React 19", "Tailwind CSS", "High-Converting Copywriting"],
    },
    {
      stepNumber: "03",
      name: "Screen & Pre-Qualify Serious Inquiries",
      shortTitle: "3. Smart Qualification",
      tag: "STEP 3: NO TIRE-KICKERS",
      simpleHeadline: "AI assistants and intake forms filter out people who cannot afford you",
      description:
        "Your time is valuable. Our automated intake system asks quick qualification questions (such as monthly budget and timeline) before letting anyone onto your calendar. If someone doesn't meet your minimum criteria, the system politely redirects them, keeping your calendar reserved strictly for high-value buyers.",
      howItWorks: [
        "Pre-screens company revenue, budget size, and timeline before booking",
        "Sends automated meeting reminders via SMS and email so people actually show up",
        "Delivers an executive briefing summary to your phone before each call starts",
      ],
      clientBenefit: "Zero wasted time on unbudgeted tire-kickers or casual price-shoppers.",
      metricBadge: "94% Meeting Show-up Rate",
      toolsUsed: ["Calendar AI", "SMS Reminders", "Automated Intake Forms"],
    },
    {
      stepNumber: "04",
      name: "Close Deals & Collect Payment",
      shortTitle: "4. Revenue Closing",
      tag: "STEP 4: GETTING PAID",
      simpleHeadline: "Streamlined proposals, follow-ups, and payments that close deals faster",
      description:
        "After a great sales call, momentum is key. We set up automated follow-up sequences, simple 1-click contract signing, and secure payment links so clients can sign and pay immediately without waiting days for manual paperwork.",
      howItWorks: [
        "Generates clean, professional proposals that clients can review on any device",
        "Automated follow-up emails sent at the exact right moment to prevent ghosting",
        "Integrated payment gateways (Stripe, Bank Wire) for instant deposit collection",
      ],
      clientBenefit: "Proposals close 3x faster without endless manual back-and-forth emails.",
      metricBadge: "3x Faster Deal Signing",
      toolsUsed: ["1-Click E-Sign", "Stripe Checkout", "Automated CRM Follow-ups"],
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 [background-image:linear-gradient(to_right,#c3c6d7_1px,transparent_1px),linear-gradient(to_bottom,#c3c6d7_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* =========================================================================
            HEADER: 2-Column Hero with High-Fidelity Architecture Visual
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-20">
          {/* Left Column: Plain English Explanation & Highlights */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold mb-3.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>HOW THE WHOLE SYSTEM WORKS</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight">
              How ScaleForge Puts Clients on Your Calendar
            </h1>
            <p className="font-body text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
              You don't need to be a tech expert to understand our system. Here is the exact, step-by-step
              architecture we install for your business—turning complete strangers into paying, qualified clients.
            </p>

            {/* Architectural Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-outline-variant/20">
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="font-mono text-[10px] uppercase font-bold text-primary">Deployment</div>
                <div className="font-display font-bold text-sm text-on-surface mt-0.5">14-Day Full Setup</div>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="font-mono text-[10px] uppercase font-bold text-emerald-700">Integration</div>
                <div className="font-display font-bold text-sm text-on-surface mt-0.5">Direct CRM & Calendar</div>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="font-mono text-[10px] uppercase font-bold text-tertiary">Monitoring</div>
                <div className="font-display font-bold text-sm text-on-surface mt-0.5">Live Pipeline Active</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-7">
              <Link
                to="/simulator"
                className="px-5 py-3 rounded-xl bg-primary text-white font-display font-bold text-sm shadow-md hover:bg-primary-hover transition-all flex items-center gap-2"
              >
                <Flame size={15} className="animate-pulse text-amber-300" />
                <span>Launch Live Simulator</span>
              </Link>
              <Link
                to="/diagnostic"
                className="px-5 py-3 rounded-xl bg-surface-container-low text-on-surface font-display font-semibold text-sm border border-outline-variant/40 hover:border-primary/50 transition-all flex items-center gap-2"
              >
                <span>Audit Your Pipeline</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="#roadmap-section"
                className="px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface-variant font-display font-medium text-xs sm:text-sm hover:text-primary transition-all flex items-center gap-1.5"
              >
                <span>Inspect 4 Stages</span>
                <Zap size={13} className="text-amber-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Live Architecture Visual (Matching Service Detail Previews) */}
          <div className="lg:col-span-5">
            <div className="relative w-full">
              {/* Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-blue-500/10 to-cyan-400/20 rounded-3xl blur-xl pointer-events-none"></div>

              <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6 space-y-4">
                {/* Header bar: Live System Architecture */}
                <div className="flex items-center justify-between pb-3.5 border-b border-outline-variant/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <Layers size={18} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                        Architecture Pipeline Engine
                      </div>
                      <div className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>All 4 Stages Connected & Active</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">
                    LIVE SYSTEM
                  </span>
                </div>

                {/* 4 Connected Pipeline Micro-Stages (Realistic Visual Journey) */}
                <div className="space-y-2.5 relative">
                  {/* Vertical connecting line */}
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-emerald-500 -z-0"></div>

                  {/* Stage 1: Prospect Discovery Mockup */}
                  <div className="relative z-10 p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/30 flex items-center justify-between gap-3 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm text-xs font-bold font-mono">
                        01
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-xs text-on-surface">Prospect Discovery</span>
                          <span className="text-[9px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-semibold border border-blue-200">Apollo + SalesNav</span>
                        </div>
                        <div className="text-[10px] font-mono text-on-surface-variant">
                          142 Verified Decision-Makers Monitored
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                      99.4% Valid
                    </span>
                  </div>

                  {/* Stage 2: Conversion Engine / Landing Page Mockup */}
                  <div className="relative z-10 p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/30 flex items-center justify-between gap-3 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm text-xs font-bold font-mono">
                        02
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-xs text-on-surface">Conversion Funnel</span>
                          <span className="text-[9px] font-mono text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded font-semibold border border-indigo-200">High-Speed Pages</span>
                        </div>
                        <div className="text-[10px] font-mono text-on-surface-variant">
                          Zero Friction • Direct Calendar Intake
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 shrink-0">
                      0.38s Load
                    </span>
                  </div>

                  {/* Stage 3: Smart AI Pre-Qualification */}
                  <div className="relative z-10 p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/30 flex items-center justify-between gap-3 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm text-xs font-bold font-mono">
                        03
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-xs text-on-surface">Smart Pre-Qualification</span>
                          <span className="text-[9px] font-mono text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded font-semibold border border-purple-200">Budget Filter</span>
                        </div>
                        <div className="text-[10px] font-mono text-on-surface-variant">
                          Budget Verified • Unbudgeted Filtered Out
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 shrink-0">
                      94% Show-Up
                    </span>
                  </div>

                  {/* Stage 4: Booked Sales Call Highlight (The Real End Result) */}
                  <div className="relative z-10 p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 text-emerald-950 shadow-sm">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Calendar size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-xs text-emerald-950 truncate">
                            Direct Calendar Appointment Booked
                          </span>
                          <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-300">
                            Just Now
                          </span>
                        </div>
                        <div className="font-display font-semibold text-xs text-emerald-900 mt-1 truncate">
                          Strategy Session with Michael Thorne (Founder & CEO)
                        </div>
                        <div className="text-[10px] font-mono text-emerald-700 flex items-center gap-2 mt-0.5">
                          <span>Thursday, 2:30 PM EST</span>
                          <span>•</span>
                          <span>Auto SMS & Zoom Confirmed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Live Telemetry Footer */}
                <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Direct HubSpot / Salesforce Flow</span>
                  </div>
                  <span className="text-primary font-bold">Zero Manual Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            VISUAL ROADMAP: The 4-Stage Connected Journey
            ========================================================================= */}
        <div id="roadmap-section" className="mb-14 sm:mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Full-Cycle Client Journey
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-on-surface mt-1">
              From Stranger to Paying Client in 4 Simple Stages
            </h2>
          </div>

          {/* 4 Connected Cards on Desktop & Stacked on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {architectureSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all relative overflow-hidden group ${
                    isActive
                      ? "bg-surface-container-lowest border-primary shadow-xl ring-2 ring-primary/30"
                      : "bg-surface-container-lowest/80 border-outline-variant/30 hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  {/* Top indicator bar */}
                  <div
                    className={`h-1.5 w-full rounded-full mb-4 transition-colors ${
                      isActive ? "bg-primary" : "bg-outline-variant/30 group-hover:bg-primary/50"
                    }`}
                  ></div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-black text-primary px-2.5 py-0.5 rounded bg-primary/10">
                      STAGE 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80 font-bold">
                      {step.metricBadge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                    {step.name}
                  </h3>

                  <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed line-clamp-3">
                    {step.simpleHeadline}
                  </p>

                  <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono text-primary font-semibold">
                    <span>Click to Inspect</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            DETAILED INSPECTOR: Deep Dive Into the Selected Stage
            ========================================================================= */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-outline-variant/30 shadow-xl mb-16 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left 7 Columns: Plain Explanation & Checklist */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-fixed text-primary font-mono text-xs font-bold uppercase mb-3">
                <Zap size={14} className="text-amber-500" />
                <span>{architectureSteps[activeStep].tag}</span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl text-on-surface">
                {architectureSteps[activeStep].name}
              </h2>

              <p className="font-display text-base text-primary font-semibold mt-2">
                {architectureSteps[activeStep].simpleHeadline}
              </p>

              <p className="font-body text-sm sm:text-base text-on-surface-variant mt-4 leading-relaxed">
                {architectureSteps[activeStep].description}
              </p>

              {/* What Happens Behind the Scenes */}
              <div className="mt-6 pt-5 border-t border-outline-variant/20">
                <div className="text-xs font-mono uppercase tracking-wider text-on-surface font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>How This Step Operates For You:</span>
                </div>
                <div className="space-y-3">
                  {architectureSteps[activeStep].howItWorks.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-3 text-sm text-on-surface">
                      <CheckCircle2 size={18} className="text-tertiary shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used Pill Row */}
              <div className="mt-6 pt-4 border-t border-outline-variant/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-on-surface-variant">Software & Tools:</span>
                {architectureSteps[activeStep].toolsUsed.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface text-xs font-mono font-medium border border-outline-variant/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: The Client Benefit Card */}
            <div className="lg:col-span-5 bg-surface-container-low/70 rounded-2xl p-6 border border-outline-variant/30 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-on-surface">
                    Why This Matters To You
                  </div>
                  <div className="text-xs text-on-surface-variant">Your Direct Business Advantage</div>
                </div>
              </div>

              {/* Direct Benefit Box */}
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-primary/20 shadow-sm">
                <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold">
                  Core Bottom-Line Result:
                </span>
                <p className="font-display font-bold text-base text-on-surface mt-1.5 leading-snug">
                  "{architectureSteps[activeStep].clientBenefit}"
                </p>
              </div>

              {/* Performance Metric Pill */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase text-emerald-800 font-bold">
                    Standard Performance Guarantee
                  </div>
                  <div className="font-display font-extrabold text-lg text-emerald-700 mt-0.5">
                    {architectureSteps[activeStep].metricBadge}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  ✓
                </div>
              </div>

              {/* Navigation next step button */}
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev + 1) % architectureSteps.length)}
                className="w-full py-3 rounded-xl bg-primary-container text-on-primary font-headline-sm text-xs font-bold shadow-md hover:bg-primary transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Next Stage</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            TOOL INTEGRATIONS: Works With What You Already Use
            ========================================================================= */}
        <div className="bg-surface-container-lowest rounded-3xl p-8 sm:p-10 border border-outline-variant/30 shadow-sm mb-16 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
            Zero Disruption Setup
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-on-surface mt-1">
            Plugs Seamlessly Into the Tools You Already Use
          </h2>
          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mt-2 leading-relaxed">
            You don't need to change your email, switch your CRM, or rewrite code. Our system connects cleanly
            with your existing accounts in less than 14 days.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {[
              { name: "Google Calendar", role: "Direct Meeting Booking" },
              { name: "Outlook 365", role: "Calendar Sync" },
              { name: "HubSpot CRM", role: "Auto Lead Tracking" },
              { name: "Salesforce", role: "Enterprise Deals" },
              { name: "Slack & WhatsApp", role: "Instant Lead Alerts" },
              { name: "Stripe & Wire", role: "Frictionless Payments" },
            ].map((tool, tIdx) => (
              <div
                key={tIdx}
                className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col items-center justify-center text-center gap-1.5 hover:shadow-md transition-shadow"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-mono font-bold text-xs flex items-center justify-center">
                  0{tIdx + 1}
                </div>
                <span className="font-display font-bold text-xs text-on-surface mt-1">{tool.name}</span>
                <span className="font-mono text-[10px] text-tertiary font-semibold">{tool.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM CALL TO ACTION
            ========================================================================= */}
        <div className="bg-gradient-to-r from-blue-900 via-primary to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-white/10 text-cyan-200 font-mono text-xs font-bold uppercase tracking-wider border border-white/15">
              100% Free Strategy Session
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl mt-3 tracking-tight">
              Ready to Install This Engine in Your Business?
            </h2>
            <p className="font-body text-sm sm:text-base text-blue-100 mt-3 leading-relaxed">
              Book a 30-minute growth diagnostic. We will review your current client acquisition process, show you
              where revenue is leaking, and give you a custom plan—100% free with zero sales pressure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                to="/diagnostic"
                className="px-8 py-3.5 rounded-xl bg-white text-primary font-display font-bold text-sm shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <span>Claim Free Strategy Call</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/roadmap"
                className="px-8 py-3.5 rounded-xl bg-white/10 text-white font-display font-bold text-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore Services Roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
