import React, { useState } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { ServiceRoadmap } from "../components/ServiceRoadmap";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, ChevronRight, Layers, Target, Mail, Globe, Bot, Search, Share2, Linkedin, Clock, Zap } from "lucide-react";

export const RoadmapPage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("lead-generation");

  const currentService = servicesData[selectedServiceId] || servicesData["lead-generation"];

  const serviceCategories = [
    {
      label: "Marketing & Acquisition",
      services: [
        { id: "lead-generation", name: "Full-Funnel Lead Gen", icon: Target },
        { id: "email-marketing", name: "Email Marketing & Outbound", icon: Mail },
        { id: "linkedin-outreach", name: "LinkedIn Executive Outreach", icon: Linkedin },
        { id: "social-media", name: "Social Media Handling", icon: Share2 },
      ],
    },
    {
      label: "Engineering & Tech",
      services: [
        { id: "websites", name: "Modern Enterprise Websites", icon: Globe },
        { id: "landing-pages-funnels", name: "Landing Pages & Funnels", icon: Layers },
        { id: "custom-ai-solutions", name: "Custom AI Solutions & Bots", icon: Bot },
        { id: "seo", name: "Programmatic SEO", icon: Search },
      ],
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 [background-image:linear-gradient(to_right,#c3c6d7_1px,transparent_1px),linear-gradient(to_bottom,#c3c6d7_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Page Header: 2-Column Hero with Sprint Highway Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column: Title, Explanations & Quick Milestones */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold mb-3.5">
              <Sparkles size={14} />
              <span>Turnkey Highway Delivery Model</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight">
              Execution Roadmap & Implementation Highway
            </h1>
            <p className="font-body text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
              Select any marketing or tech service below to see our step-by-step road from Day 1 kickoff to real,
              measurable sales results. Every step clearly explains what we do, what you receive, and how it helps you grow.
            </p>

            {/* Quick Speed Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-outline-variant/20">
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="font-mono text-[10px] uppercase font-bold text-primary">Day 01–03</div>
                <div className="font-display font-bold text-sm text-on-surface mt-0.5">Kickoff & Inboxes</div>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="font-mono text-[10px] uppercase font-bold text-indigo-600">Day 04–09</div>
                <div className="font-display font-bold text-sm text-on-surface mt-0.5">Funnels & Audience</div>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="font-mono text-[10px] uppercase font-bold text-emerald-700">Day 10–14</div>
                <div className="font-display font-bold text-sm text-on-surface mt-0.5">Go-Live & Leads</div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Sprint Execution Visual Mockup */}
          <div className="lg:col-span-5">
            <div className="relative w-full">
              {/* Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-blue-500/10 to-emerald-400/20 rounded-3xl blur-xl pointer-events-none"></div>

              <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6 space-y-3.5">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                        Sprint Execution Highway
                      </div>
                      <div className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>14-Day Delivery Guaranteed</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">
                    SPRINT ON TRACK
                  </span>
                </div>

                {/* Highway Timeline Milestones */}
                <div className="space-y-2.5 relative">
                  {/* Milestone 1 */}
                  <div className="p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                        ✓
                      </div>
                      <div>
                        <div className="font-display font-bold text-xs text-on-surface">Phase 1: Setup & Domain Warmup</div>
                        <div className="text-[10px] font-mono text-on-surface-variant">DNS records, Inboxes & CRM configured</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                      Day 1–3 Done
                    </span>
                  </div>

                  {/* Milestone 2 */}
                  <div className="p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                        ⚡
                      </div>
                      <div>
                        <div className="font-display font-bold text-xs text-on-surface">Phase 2: Funnel & Offer Architecture</div>
                        <div className="text-[10px] font-mono text-on-surface-variant">Sub-0.5s landing pages & high-converting copy</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded shrink-0">
                      In Flight
                    </span>
                  </div>

                  {/* Milestone 3 */}
                  <div className="p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                        03
                      </div>
                      <div>
                        <div className="font-display font-bold text-xs text-on-surface">Phase 3: Live Ignition & Calls</div>
                        <div className="text-[10px] font-mono text-on-surface-variant">Calendar sync live, sales inquiries booked</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-on-surface-variant bg-surface-container px-2 py-0.5 rounded shrink-0">
                      Day 10–14
                    </span>
                  </div>
                </div>

                {/* Footer sync */}
                <div className="pt-2.5 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>24/7 Slack Channel Highway</span>
                  </div>
                  <span className="text-primary font-bold">Zero Delay Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Service Filter Tabs */}
        <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl border border-outline-variant/30 shadow-sm mb-12">
          <div className="text-xs font-mono uppercase text-on-surface-variant font-bold mb-4">
            Select Service Implementation Roadmap:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories.map((cat, cIdx) => (
              <div key={cIdx} className="space-y-2">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-primary">
                  {cat.label}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cat.services.map((svc) => {
                    const Icon = svc.icon;
                    const isSelected = selectedServiceId === svc.id;
                    return (
                      <button
                        key={svc.id}
                        onClick={() => setSelectedServiceId(svc.id)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl text-left transition-all ${
                          isSelected
                            ? "bg-primary-container text-on-primary font-bold shadow-md ring-2 ring-primary"
                            : "bg-surface-container-low text-on-surface hover:bg-surface-container text-xs font-semibold"
                        }`}
                      >
                        <Icon size={16} className={isSelected ? "text-on-primary" : "text-primary"} />
                        <span className="text-xs truncate">{svc.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Service Banner & Link */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/20 mb-8">
          <div>
            <span className="font-mono text-xs text-primary font-bold">{currentService.categoryLabel}</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-on-surface mt-0.5">
              {currentService.name} Roadmap
            </h2>
            <p className="font-body text-xs text-on-surface-variant">{currentService.tagline}</p>
          </div>
          <Link
            to={`/services/${currentService.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-primary font-headline-sm text-xs font-bold shadow-sm hover:bg-surface-container transition-colors shrink-0"
          >
            <span>View Complete {currentService.name} Specification</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* The Visual Road Component */}
        <ServiceRoadmap
          steps={currentService.roadSteps}
          serviceTitle={currentService.name}
          slaGuarantee={currentService.slaGuarantee}
        />

        {/* Contractual Reassurance & CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary via-primary-container to-surface-tint rounded-3xl p-8 sm:p-12 text-on-primary flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 font-mono text-xs uppercase font-bold text-blue-200">
              <ShieldCheck size={18} />
              <span>Contractual Turnkey Guarantee</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl">
              Ready to deploy this roadmap for your company?
            </h3>
            <p className="font-body text-sm text-primary-fixed mt-2">
              Book a free 30-minute growth strategy session. We will review your current customer flow, answer all your
              questions, and customize this exact roadmap for your revenue targets.
            </p>
          </div>

          <Link
            to="/diagnostic"
            className="px-8 py-4 rounded-xl bg-surface-container-lowest text-primary font-headline-sm font-bold shadow-lg hover:bg-surface-container-low transition-all shrink-0"
          >
            <span>Claim Free Strategy Call</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
