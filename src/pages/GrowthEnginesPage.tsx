import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Target, Layers, Bot, TrendingUp, CheckCircle2, ArrowRight, Activity, Terminal, Shield, Zap } from "lucide-react";

export const GrowthEnginesPage: React.FC = () => {
  const [activeEngine, setActiveEngine] = useState<number>(0);

  const engines = [
    {
      id: "01",
      code: "ENGINE_01 // INFLOW",
      title: "Full-Funnel Acquisition & Executive Authority",
      tagline: "Programmatic buyer intent discovery & account-based targeting",
      icon: Target,
      metrics: {
        cacCompression: "-38%",
        target: "C-Suite & VP Level",
        leadPurity: "99.4%",
      },
      summary:
        "Engine 01 intercepts high-intent enterprise accounts before they ever fill out a competitor's demo form. We dynamically track job openings, funding announcements, tech-debt signals, and keyword surges.",
      pillars: [
        {
          name: "Algorithmic Intent Clustering",
          desc: "Aggregates 14 distinct B2B intent data streams to flag accounts entering an active buying window.",
        },
        {
          name: "Executive Thought Leadership Syndication",
          desc: "Personalized cold email, LinkedIn, and peer-community syndication delivered from your founders' profiles.",
        },
        {
          name: "Dynamic Revenue Attribution APIs",
          desc: "Instant closed-loop ROAS calculation that automatically reroutes ad budgets from low-yield campaigns into high-converting accounts.",
        },
      ],
      codeSample: `// Inflow Telemetry Configuration
const InflowTelemetry = new TAMClusterEngine({
  intentThreshold: 0.88,
  icpWhitelist: ["Enterprise", "Series-B+", "Mid-Market"],
  attributionModel: "multi-touch-decay",
  autoReallocateBudget: true
});
await InflowTelemetry.streamHighYieldOpportunities();`,
    },
    {
      id: "02",
      code: "ENGINE_02 // CONVERSION",
      title: "High-Craft Design & Bespoke Brand Systems",
      tagline: "Ultra-fast headless conversion environments & interactive tools",
      icon: Layers,
      metrics: {
        cacCompression: "+144% Opt-In",
        target: "Core Web Vitals 99",
        leadPurity: "<480ms TTFB",
      },
      summary:
        "Replaces bloated CMS templates with bespoke React/Vite conversion architectures. Every visitor lands on a personalized, lightning-fast experience with embedded ROI calculators and social proof relevant to their vertical.",
      pillars: [
        {
          name: "Sub-500ms Server-Side Rendering",
          desc: "Zero layout shift, 99 Lighthouse performance, and instantaneous form submissions.",
        },
        {
          name: "Interactive Pipeline ROI Calculators",
          desc: "Empowers enterprise buyers to model their specific payback timeframe and cost savings live on-page.",
        },
        {
          name: "Continuous Multi-Variant Split Testing",
          desc: "Algorithmic headline, CTA, and testimonial rotation based on real-time qualification telemetry.",
        },
      ],
      codeSample: `// Edge Personalization Middleware
export async function onRequest(context) {
  const visitorOrg = await Clearbit.identify(context.ip);
  return renderBespokePortal({
    companyName: visitorOrg.name,
    annualRevenue: visitorOrg.revenue,
    customRoiModel: calculateRoiFor(visitorOrg.techStack)
  });
}`,
    },
    {
      id: "03",
      code: "ENGINE_03 // AUTOMATION",
      title: "Autonomous AI Agents & Qualification Workflows",
      tagline: "24/7 intelligent qualification, pre-meeting intelligence, and zero no-shows",
      icon: Bot,
      metrics: {
        cacCompression: "92.4% Show Rate",
        target: "Response <60s",
        leadPurity: "100% Pre-Scored",
      },
      summary:
        "Tireless autonomous agents vet inbound prospects instantly. They research the prospect's company 10-K filings, verify employee counts on LinkedIn, formulate an executive brief, and only place high-priority opportunities on your calendar.",
      pillars: [
        {
          name: "Instant Deep Enrichment",
          desc: "Real-time background dossier formulation through Clearbit, Apollo, and SEC Edgar registries.",
        },
        {
          name: "Executive Briefing Dossier",
          desc: "Account history, likely objections, and key leverage points delivered to sales reps 10 minutes prior to calls.",
        },
        {
          name: "Dynamic No-Show Mitigation",
          desc: "Conversational SMS & calendar nudges with custom interactive agenda items that lift show-up rates to 92.4%.",
        },
      ],
      codeSample: `// AI Qualification Orchestration
agent.on("calendar.booking_requested", async (prospect) => {
  const dossier = await AgentDossier.build(prospect.email);
  if (dossier.qualificationScore >= 85) {
    await CRM.assignToAccountExecutive(prospect, dossier);
    await Slack.notifyDealDesk(dossier);
  } else {
    await Agent.routeToSelfServeFlow(prospect);
  }
});`,
    },
    {
      id: "04",
      code: "ENGINE_04 // COMPOUNDING",
      title: "Revenue Acceleration & Compounding ARR",
      tagline: "Post-demo deal room velocity, contract tracking, and expansion automation",
      icon: TrendingUp,
      metrics: {
        cacCompression: "+220% Closing Velocity",
        target: "Multi-Seat ARR",
        leadPurity: "Zero Slippage",
      },
      summary:
        "Transforming isolated deals into repeatable enterprise expansion flywheels. ScaleForge monitors stakeholder engagement in mutual action plans, surfaces deal stall warnings, and coordinates multi-seat contract expansion.",
      pillars: [
        {
          name: "Live Pipeline Health Dashboards",
          desc: "Real-time visibility into deal velocity, prospect document views, and executive stakeholder buy-in.",
        },
        {
          name: "Automated Pipeline Slippage Triggers",
          desc: "Instant alerts to sales leadership when an enterprise prospect misses a mutual action milestone.",
        },
        {
          name: "Contract Closing Room Infrastructure",
          desc: "Bespoke digital sales rooms with integrated security docs, mutual timelines, and redline telemetry.",
        },
      ],
      codeSample: `// Compounding Deal Desk Monitor
DealRoom.watch({
  dealId: "DL-90812",
  onStakeholderInactive: (days) => {
    if (days >= 3) {
      TriggerExecutiveEscalation({ channel: "slack", priority: "URGENT" });
    }
  }
});`,
    },
  ];

  const current = engines[activeEngine];
  const Icon = current.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <span className="font-label-badge text-xs uppercase tracking-wider text-primary font-bold px-3 py-1 rounded bg-primary-fixed">
          Modular Revenue Infrastructure
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight mt-3">
          The 4 Autonomous Growth Engines
        </h1>
        <p className="font-body text-base text-on-surface-variant mt-4 leading-relaxed">
          Each engine is a production-grade commercial subsystem designed to operate in total autonomy or interconnect
          with your existing marketing, sales, and RevOps tooling.
        </p>
      </div>

      {/* Engine Switcher Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {engines.map((eng, idx) => {
          const EngIcon = eng.icon;
          const isSelected = activeEngine === idx;
          return (
            <button
              key={eng.id}
              onClick={() => setActiveEngine(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                isSelected
                  ? "bg-surface-container-lowest border-primary shadow-md ring-2 ring-primary/20"
                  : "bg-surface-container-low border-outline-variant/30 hover:bg-surface-container"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-primary">{eng.id}</span>
                <EngIcon size={18} className={isSelected ? "text-primary" : "text-on-surface-variant"} />
              </div>
              <div className="font-display font-bold text-sm text-on-surface mt-2 truncate">{eng.title.split("&")[0]}</div>
              <div className="font-mono text-[10px] text-on-surface-variant mt-1">{eng.metrics.cacCompression}</div>
            </button>
          );
        })}
      </div>

      {/* Active Engine Full Spec Card */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 border border-outline-variant/30 shadow-xl mb-14">
        {/* Top Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
              <Icon size={24} />
            </div>
            <div>
              <span className="font-mono text-xs text-primary font-bold">{current.code}</span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-on-surface mt-0.5">{current.title}</h2>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant">{current.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant/30 text-right">
              <div className="font-headline-sm text-base font-bold text-tertiary">{current.metrics.cacCompression}</div>
              <div className="font-mono text-[10px] text-on-surface-variant">Validated Delta</div>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant/30 text-right">
              <div className="font-headline-sm text-base font-bold text-primary">{current.metrics.target}</div>
              <div className="font-mono text-[10px] text-on-surface-variant">Operating Standard</div>
            </div>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="font-body text-sm sm:text-base text-on-surface-variant my-6 leading-relaxed">
          {current.summary}
        </p>

        {/* 3 Core Pillars */}
        <h3 className="font-display font-bold text-base text-on-surface uppercase tracking-wider mb-4">
          Core Engine Subsystems
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {current.pillars.map((pillar, pIdx) => (
            <div key={pIdx} className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mb-3">
                {pIdx + 1}
              </div>
              <h4 className="font-headline-sm text-sm font-bold text-on-surface">{pillar.name}</h4>
              <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Code Preview */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-on-surface-variant mb-2">
            <span className="flex items-center gap-1.5">
              <Terminal size={14} className="text-primary" />
              <span>Telemetry Orchestration Script Preview</span>
            </span>
            <span className="text-[10px] bg-surface-container px-2 py-0.5 rounded">TypeScript 5.x</span>
          </div>
          <pre className="p-4 rounded-xl bg-[#0b132b] text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed border border-outline-variant/30">
            <code>{current.codeSample}</code>
          </pre>
        </div>
      </div>

      {/* Conversion Banner */}
      <div className="text-center bg-surface-container-low p-8 rounded-2xl border border-outline-variant/20">
        <h3 className="font-display font-bold text-2xl text-on-surface">Install All 4 Engines in 14 Days</h3>
        <p className="font-body text-sm text-on-surface-variant max-w-xl mx-auto mt-2 mb-6">
          ScaleForge engineers will wire, test, and calibrate your custom growth stack under our 30-day performance SLA.
        </p>
        <Link
          to="/diagnostic"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-container text-on-primary font-headline-sm font-bold shadow-md hover:bg-primary transition-all"
        >
          <span>Claim Free Growth Strategy Call</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
