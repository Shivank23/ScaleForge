import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Calendar,
  DollarSign,
  TrendingUp,
  Mail,
  Linkedin,
  Bot,
  Filter,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Layers,
  Copy,
  Check,
  Send,
  UserCheck,
  Target,
  BarChart3,
  Flame,
  Zap,
  X,
  PhoneCall,
} from "lucide-react";
import { trackSimulatorEngagement } from "../utils/analytics";
import { savePipelineSimulation, saveConsultationBooking } from "../lib/supabase";

interface ICPProfile {
  id: string;
  name: string;
  targetRole: string;
  defaultACV: number;
  defaultLeads: number;
  expectedMeetingRate: number;
  closeRate: number;
  sampleProspect: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    industry: string;
    sampleReply: string;
    budget: string;
  };
}

const ICP_PROFILES: ICPProfile[] = [
  {
    id: "saas",
    name: "B2B SaaS / Software",
    targetRole: "VP of Sales / CRO / Founders",
    defaultACV: 24000,
    defaultLeads: 4500,
    expectedMeetingRate: 0.0055,
    closeRate: 0.20,
    sampleProspect: {
      name: "Marcus Vance",
      role: "VP of Revenue",
      company: "CloudVanguard.io",
      avatar: "MV",
      industry: "Series B Enterprise SaaS",
      sampleReply: "Hey! Timely note—we are restructuring our mid-market SDR outbound for Q3. Send over calendar link for Thursday 2 PM EST.",
      budget: "$60,000/yr",
    },
  },
  {
    id: "agency",
    name: "Digital Agency / Dev Shop",
    targetRole: "Founders / Managing Directors",
    defaultACV: 15000,
    defaultLeads: 3500,
    expectedMeetingRate: 0.0065,
    closeRate: 0.25,
    sampleProspect: {
      name: "Sophia Chen",
      role: "Founder & CEO",
      company: "Apex Studio Brands",
      avatar: "SC",
      industry: "Full-Stack Brand & Tech",
      sampleReply: "Thanks for reaching out. We have 3 enterprise web builds in discussion and need reliable engineering capacity. Let's do a 15-min discovery call tomorrow.",
      budget: "$35,000+ Project",
    },
  },
  {
    id: "consulting",
    name: "Enterprise Consulting",
    targetRole: "Managing Partners / C-Suite",
    defaultACV: 45000,
    defaultLeads: 3000,
    expectedMeetingRate: 0.0048,
    closeRate: 0.18,
    sampleProspect: {
      name: "David Sterling",
      role: "Managing Principal",
      company: "Sterling Advisory Group",
      avatar: "DS",
      industry: "Management Consulting",
      sampleReply: "Appreciate the tailored insight on supply chain advisory. What does your retainer framework look like? Happy to sync Wednesday morning.",
      budget: "$120,000 Retainer",
    },
  },
  {
    id: "fintech",
    name: "FinTech & High-Growth",
    targetRole: "Head of Growth / Chief Commercial Officer",
    defaultACV: 32000,
    defaultLeads: 4000,
    expectedMeetingRate: 0.0052,
    closeRate: 0.22,
    sampleProspect: {
      name: "Aria Thorne",
      role: "Chief Commercial Officer",
      company: "NovaPay Global",
      avatar: "AT",
      industry: "Cross-Border Payments",
      sampleReply: "Your angle on reducing payment drop-off caught our attention. Let's get our head of enterprise partnerships on a Zoom call this Friday.",
      budget: "$50,000 Pilot",
    },
  },
];

export const PipelineSimulator: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const navigate = useNavigate();
  const [selectedICP, setSelectedICP] = useState<ICPProfile>(ICP_PROFILES[0]);
  const [monthlyLeads, setMonthlyLeads] = useState<number>(selectedICP.defaultLeads);
  const [dealValueACV, setDealValueACV] = useState<number>(selectedICP.defaultACV);
  
  // Channels toggle
  const [channels, setChannels] = useState({
    coldEmail: true,
    linkedIn: true,
    intentSignals: true,
    aiPreQualBot: true,
  });

  // Simulator State
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStage, setSimulationStage] = useState<number>(0);
  const [simProgress, setSimProgress] = useState(0);
  const [liveReplies, setLiveReplies] = useState<Array<{
    id: string;
    prospect: string;
    role: string;
    company: string;
    time: string;
    text: string;
    status: "positive" | "meeting_booked" | "prequalified";
  }>>([]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [quickFormSubmitted, setQuickFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");

  const simulationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Update defaults when ICP changes
  const handleICPChange = (icp: ICPProfile) => {
    setSelectedICP(icp);
    setMonthlyLeads(icp.defaultLeads);
    setDealValueACV(icp.defaultACV);
    resetSimulation();
  };

  // Calculations
  const channelMultiplier =
    (channels.coldEmail ? 0.45 : 0) +
    (channels.linkedIn ? 0.35 : 0) +
    (channels.intentSignals ? 0.15 : 0) +
    (channels.aiPreQualBot ? 0.05 : 0);

  const activeChannelFactor = channelMultiplier > 0 ? (channelMultiplier / 1.0) : 0.2;
  const verifiedLeads = Math.round(monthlyLeads * 0.94);
  const totalBookedCalls = Math.max(
    4,
    Math.round(verifiedLeads * selectedICP.expectedMeetingRate * (0.8 + activeChannelFactor * 0.4))
  );
  const qualifiedShowUps = Math.round(totalBookedCalls * 0.92);
  const estimatedClosedDeals = Math.max(1, Math.round(qualifiedShowUps * selectedICP.closeRate));
  const projectedPipelineValue = totalBookedCalls * dealValueACV;
  const projectedMonthlyRevenue = estimatedClosedDeals * dealValueACV;
  const annualizedRevenue = projectedMonthlyRevenue * 12;

  // Run Simulation Function
  const runSimulation = () => {
    if (isSimulating) return;
    trackSimulatorEngagement(selectedICP.name, monthlyLeads, dealValueACV);
    setIsSimulating(true);
    setSimulationStage(1);
    setSimProgress(10);
    setLiveReplies([]);

    let currentStep = 1;
    let progressVal = 15;

    if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);

    simulationIntervalRef.current = setInterval(() => {
      progressVal += 12;
      setSimProgress(Math.min(progressVal, 100));

      if (progressVal >= 30 && currentStep === 1) {
        currentStep = 2;
        setSimulationStage(2);
      } else if (progressVal >= 55 && currentStep === 2) {
        currentStep = 3;
        setSimulationStage(3);
        setLiveReplies([
          {
            id: "1",
            prospect: selectedICP.sampleProspect.name,
            role: selectedICP.sampleProspect.role,
            company: selectedICP.sampleProspect.company,
            time: "Just now",
            text: selectedICP.sampleProspect.sampleReply,
            status: "positive",
          },
        ]);
      } else if (progressVal >= 78 && currentStep === 3) {
        currentStep = 4;
        setSimulationStage(4);
        setLiveReplies((prev) => [
          ...prev,
          {
            id: "2",
            prospect: "ScaleForge AI Qualification Engine",
            role: "Intelligent SDR Bot",
            company: "Automated Intake",
            time: "Verified",
            text: `Qualified: Verified budget > ${selectedICP.sampleProspect.budget} • Decision-maker confirmed • Calendar slot locked.`,
            status: "prequalified",
          },
        ]);
      } else if (progressVal >= 100) {
        currentStep = 5;
        setSimulationStage(5);
        setLiveReplies((prev) => [
          ...prev,
          {
            id: "3",
            prospect: `${selectedICP.sampleProspect.name} ↔ You`,
            role: "Strategy & Demo Session",
            company: "Google Meet & Zoom Auto-Created",
            time: "Thursday • 2:00 PM EST",
            text: `Confirmed on your calendar! Auto-reminder SMS & confirmation brief dispatched with 94% show-up probability.`,
            status: "meeting_booked",
          },
        ]);
        setIsSimulating(false);
        if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);

        // Save simulation run to Supabase
        savePipelineSimulation({
          icp_name: selectedICP.name,
          monthly_leads: monthlyLeads,
          deal_value_acv: dealValueACV,
          projected_pipeline: projectedPipelineValue,
          projected_closed_revenue: projectedMonthlyRevenue,
          roi_multiple: Math.round((projectedMonthlyRevenue / 4000) * 10) / 10,
        });
      }
    }, 450);
  };

  const resetSimulation = () => {
    if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);
    setIsSimulating(false);
    setSimulationStage(0);
    setSimProgress(0);
    setLiveReplies([]);
  };

  useEffect(() => {
    return () => {
      if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);
    };
  }, []);

  const copyBlueprintSummary = () => {
    const text = `ScaleForge B2B Acquisition Blueprint Simulation:
• Target Sector: ${selectedICP.name} (${selectedICP.targetRole})
• Monthly Outbound Discovery: ${monthlyLeads.toLocaleString()} Leads
• Average Contract Value (ACV): $${dealValueACV.toLocaleString()}
• Projected Qualified Calls/Mo: ${totalBookedCalls} Sales Calls
• Projected Monthly Pipeline: $${projectedPipelineValue.toLocaleString()}
• Estimated New Monthly Revenue: $${projectedMonthlyRevenue.toLocaleString()}/mo ($${annualizedRevenue.toLocaleString()} Annualized)
• Guaranteed 14-Day Delivery & Risk-Reversal SLA applied.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const [isSavingModal, setIsSavingModal] = useState<boolean>(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingModal(true);

    try {
      // 1. Save detailed simulation stats with contact email to pipeline_simulations table
      await savePipelineSimulation({
        icp_name: selectedICP.name,
        monthly_leads: monthlyLeads,
        deal_value_acv: dealValueACV,
        projected_pipeline: projectedPipelineValue,
        projected_closed_revenue: projectedMonthlyRevenue,
        roi_multiple: Math.round((projectedMonthlyRevenue / 4000) * 10) / 10,
        contact_email: workEmail,
      });

      // 2. Save consultation booking lead with user name and contact info to consultation_bookings table
      await saveConsultationBooking({
        name: fullName,
        email: workEmail,
        company: `${selectedICP.name} ($${(projectedPipelineValue / 1000).toFixed(0)}k/mo pipeline)`,
        priority: "14-Day Ignition Sprint (Simulator Blueprint)",
        selected_date: "Pipeline Blueprint Request",
        selected_time: "Immediate Deployment",
        notes: `Target Sector: ${selectedICP.name}, Monthly Leads: ${monthlyLeads}, ACV: $${dealValueACV}, Est Closed Revenue: $${projectedMonthlyRevenue}/mo, Projected Pipeline: $${projectedPipelineValue}/mo`,
      });
    } catch (err) {
      console.warn("Error saving simulator blueprint:", err);
    } finally {
      setIsSavingModal(false);
      setQuickFormSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-surface-container-lowest rounded-3xl border border-outline-variant/30 shadow-2xl overflow-hidden">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-primary/10 via-surface-container-low to-secondary/10 px-6 sm:px-8 py-6 border-b border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold mb-2">
            <Flame size={13} className="animate-pulse" />
            <span>Interactive Lead-to-Meeting Simulator</span>
          </div>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-on-surface">
            Live Acquisition Pipeline Sandbox
          </h2>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-0.5">
            Select your industry, tune outreach volume, and watch how strangers turn into qualified sales calls in real time.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={resetSimulation}
            disabled={simulationStage === 0 && !isSimulating}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all disabled:opacity-40"
            title="Reset Simulation"
          >
            <RotateCcw size={14} />
            <span className="hidden sm:inline">Reset</span>
          </button>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-xs sm:text-sm shadow-md hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75 cursor-pointer"
          >
            {isSimulating ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-on-primary border-t-transparent animate-spin" />
                <span>Simulating Pipeline...</span>
              </>
            ) : simulationStage === 5 ? (
              <>
                <Play size={14} className="fill-current" />
                <span>Re-Run Simulation</span>
              </>
            ) : (
              <>
                <Play size={14} className="fill-current" />
                <span>Run Live Simulation</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Grid: Left Controls (40%) + Right Live Engine & Results (60%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-outline-variant/20">
        {/* LEFT COLUMN: ICP & PARAMETER CONTROLS */}
        <div className="lg:col-span-5 p-6 sm:p-7 space-y-6 bg-surface-container-lowest">
          {/* Step 1: Select Industry ICP */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="font-display font-bold text-xs uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                <Target size={14} className="text-primary" />
                <span>1. Select Target ICP & Offer Type</span>
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ICP_PROFILES.map((icp) => {
                const isSelected = selectedICP.id === icp.id;
                return (
                  <button
                    key={icp.id}
                    onClick={() => handleICPChange(icp)}
                    className={`text-left p-3 rounded-xl border transition-all text-xs ${
                      isSelected
                        ? "bg-primary-fixed/20 border-primary text-primary font-bold shadow-sm ring-1 ring-primary/30"
                        : "bg-surface-container-low border-outline-variant/30 text-on-surface hover:border-primary/40 hover:bg-surface-container"
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>{icp.name}</span>
                      {isSelected && <CheckCircle2 size={13} className="text-primary" />}
                    </div>
                    <div className="text-[11px] text-on-surface-variant mt-0.5 opacity-80 line-clamp-1">
                      Target: {icp.targetRole}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Sliders for Volume & ACV */}
          <div className="space-y-4 pt-2 border-t border-outline-variant/20">
            <div className="flex items-center justify-between">
              <label htmlFor="sim-monthly-leads" className="font-display font-bold text-xs uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 cursor-pointer">
                <Users size={14} className="text-secondary" />
                <span>2. Monthly Outreach Discovery Volume</span>
              </label>
              <span className="font-mono font-bold text-xs px-2 py-0.5 rounded-md bg-secondary-container text-secondary">
                {monthlyLeads.toLocaleString()} Leads/mo
              </span>
            </div>
            <input
              id="sim-monthly-leads"
              type="range"
              min={1000}
              max={12000}
              step={500}
              value={monthlyLeads}
              aria-label="Monthly Outreach Discovery Volume"
              aria-valuemin={1000}
              aria-valuemax={12000}
              aria-valuenow={monthlyLeads}
              aria-valuetext={`${monthlyLeads.toLocaleString()} leads per month`}
              onChange={(e) => {
                setMonthlyLeads(Number(e.target.value));
                if (simulationStage > 0) resetSimulation();
              }}
              className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
            <div className="flex justify-between text-[11px] text-on-surface-variant font-mono">
              <span>1,000 (Focused Tier)</span>
              <span>6,000 (Standard)</span>
              <span>12,000 (Hyper-Scale)</span>
            </div>
          </div>

          {/* Deal Value ACV Slider */}
          <div className="space-y-4 pt-2 border-t border-outline-variant/20">
            <div className="flex items-center justify-between">
              <label htmlFor="sim-acv-deal-value" className="font-display font-bold text-xs uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 cursor-pointer">
                <DollarSign size={14} className="text-primary" />
                <span>3. Average Deal Value / ACV</span>
              </label>
              <span className="font-mono font-bold text-xs px-2 py-0.5 rounded-md bg-primary-container text-primary">
                ${dealValueACV.toLocaleString()}
              </span>
            </div>
            <input
              id="sim-acv-deal-value"
              type="range"
              min={3000}
              max={80000}
              step={1000}
              value={dealValueACV}
              aria-label="Average Deal Value or ACV"
              aria-valuemin={3000}
              aria-valuemax={80000}
              aria-valuenow={dealValueACV}
              aria-valuetext={`$${dealValueACV.toLocaleString()} per deal`}
              onChange={(e) => {
                setDealValueACV(Number(e.target.value));
                if (simulationStage > 0) resetSimulation();
              }}
              className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
            <div className="flex justify-between text-[11px] text-on-surface-variant font-mono">
              <span>$3,000</span>
              <span>$40,000</span>
              <span>$80,000+</span>
            </div>
          </div>

          {/* Step 3: Connected Engine Channels */}
          <div className="pt-2 border-t border-outline-variant/20">
            <label className="font-display font-bold text-xs uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5 mb-2.5">
              <Layers size={14} className="text-primary" />
              <span>4. Active Multichannel Engines</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setChannels({ ...channels, coldEmail: !channels.coldEmail })}
                className={`p-2 rounded-xl text-left border flex items-center gap-2 text-xs transition-colors ${
                  channels.coldEmail
                    ? "bg-surface-container border-primary/40 text-on-surface font-semibold"
                    : "bg-surface-container-low border-outline-variant/20 text-on-surface-variant opacity-60"
                }`}
              >
                <Mail size={14} className={channels.coldEmail ? "text-primary" : ""} />
                <span>Cold Email (10+ Inboxes)</span>
              </button>

              <button
                type="button"
                onClick={() => setChannels({ ...channels, linkedIn: !channels.linkedIn })}
                className={`p-2 rounded-xl text-left border flex items-center gap-2 text-xs transition-colors ${
                  channels.linkedIn
                    ? "bg-surface-container border-primary/40 text-on-surface font-semibold"
                    : "bg-surface-container-low border-outline-variant/20 text-on-surface-variant opacity-60"
                }`}
              >
                <Linkedin size={14} className={channels.linkedIn ? "text-[#0A66C2]" : ""} />
                <span>LinkedIn Social Sync</span>
              </button>

              <button
                type="button"
                onClick={() => setChannels({ ...channels, intentSignals: !channels.intentSignals })}
                className={`p-2 rounded-xl text-left border flex items-center gap-2 text-xs transition-colors ${
                  channels.intentSignals
                    ? "bg-surface-container border-primary/40 text-on-surface font-semibold"
                    : "bg-surface-container-low border-outline-variant/20 text-on-surface-variant opacity-60"
                }`}
              >
                <Zap size={14} className={channels.intentSignals ? "text-amber-500" : ""} />
                <span>Intent Sourcing</span>
              </button>

              <button
                type="button"
                onClick={() => setChannels({ ...channels, aiPreQualBot: !channels.aiPreQualBot })}
                className={`p-2 rounded-xl text-left border flex items-center gap-2 text-xs transition-colors ${
                  channels.aiPreQualBot
                    ? "bg-surface-container border-primary/40 text-on-surface font-semibold"
                    : "bg-surface-container-low border-outline-variant/20 text-on-surface-variant opacity-60"
                }`}
              >
                <Bot size={14} className={channels.aiPreQualBot ? "text-emerald-500" : ""} />
                <span>AI Pre-Qual Bot</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: REAL-TIME SIMULATION ENGINE & OUTCOMES */}
        <div className="lg:col-span-7 p-6 sm:p-7 space-y-6 bg-surface-container-low/50 flex flex-col justify-between">
          <div>
            {/* Live Progress Bar */}
            <div className="space-y-1.5 mb-5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-on-surface flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isSimulating ? "bg-emerald-500 animate-ping" : simulationStage === 5 ? "bg-emerald-500" : "bg-outline-variant"}`} />
                  {isSimulating
                    ? `Simulating Stage ${simulationStage} of 4...`
                    : simulationStage === 5
                    ? "Simulation Finished • Complete Pipeline Activated"
                    : "Ready to Simulate Live Pipeline"}
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant font-bold">
                  {simProgress}% Complete
                </span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-emerald-500 transition-all duration-300 rounded-full"
                  style={{ width: `${simProgress}%` }}
                />
              </div>
            </div>

            {/* 4-Step Interactive Visual Flow Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
              <div
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  simulationStage >= 1
                    ? "bg-surface-container-lowest border-primary shadow-xs ring-1 ring-primary/20"
                    : "bg-surface-container-low/60 border-outline-variant/20 opacity-50"
                }`}
              >
                <div className="font-mono text-[10px] text-primary font-bold uppercase">Stage 1</div>
                <div className="font-display font-bold text-xs text-on-surface">Data Verified</div>
                <div className="font-mono text-[11px] text-emerald-600 font-bold mt-0.5">
                  {simulationStage >= 1 ? `${verifiedLeads.toLocaleString()} Leads` : "Pending"}
                </div>
              </div>

              <div
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  simulationStage >= 2
                    ? "bg-surface-container-lowest border-primary shadow-xs ring-1 ring-primary/20"
                    : "bg-surface-container-low/60 border-outline-variant/20 opacity-50"
                }`}
              >
                <div className="font-mono text-[10px] text-primary font-bold uppercase">Stage 2</div>
                <div className="font-display font-bold text-xs text-on-surface">Multi-Touch</div>
                <div className="font-mono text-[11px] text-blue-600 font-bold mt-0.5">
                  {simulationStage >= 2 ? "100% Inboxed" : "Pending"}
                </div>
              </div>

              <div
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  simulationStage >= 3
                    ? "bg-surface-container-lowest border-primary shadow-xs ring-1 ring-primary/20"
                    : "bg-surface-container-low/60 border-outline-variant/20 opacity-50"
                }`}
              >
                <div className="font-mono text-[10px] text-primary font-bold uppercase">Stage 3</div>
                <div className="font-display font-bold text-xs text-on-surface">AI Pre-Qual</div>
                <div className="font-mono text-[11px] text-purple-600 font-bold mt-0.5">
                  {simulationStage >= 3 ? "Filtered > $10k" : "Pending"}
                </div>
              </div>

              <div
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  simulationStage >= 4
                    ? "bg-surface-container-lowest border-emerald-500 shadow-xs ring-1 ring-emerald-500/20"
                    : "bg-surface-container-low/60 border-outline-variant/20 opacity-50"
                }`}
              >
                <div className="font-mono text-[10px] text-emerald-600 font-bold uppercase">Stage 4</div>
                <div className="font-display font-bold text-xs text-on-surface">Booked Calls</div>
                <div className="font-mono text-[11px] text-emerald-600 font-bold mt-0.5">
                  {simulationStage >= 4 ? `${totalBookedCalls} Calls/mo` : "Pending"}
                </div>
              </div>
            </div>

            {/* Live Feed & Simulated Output Box */}
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-4 shadow-sm min-h-[160px] flex flex-col justify-center">
              {liveReplies.length === 0 ? (
                <div className="text-center py-6 px-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed/30 text-primary flex items-center justify-center mx-auto mb-2">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-display font-bold text-sm text-on-surface">
                    Press "Run Live Simulation" to Test-Drive
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant max-w-md mx-auto mt-1">
                    Watch the live pipeline execute outbound touches to target {selectedICP.targetRole}, verify intent, and schedule calendar appointments automatically.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {liveReplies.map((reply) => (
                    <div
                      key={reply.id}
                      className={`p-3 rounded-xl border transition-all animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                        reply.status === "meeting_booked"
                          ? "bg-emerald-500/10 border-emerald-500/30"
                          : reply.status === "prequalified"
                          ? "bg-purple-500/10 border-purple-500/30"
                          : "bg-surface-container-low border-outline-variant/30"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold ${
                            reply.status === "meeting_booked"
                              ? "bg-emerald-600 text-white"
                              : reply.status === "prequalified"
                              ? "bg-purple-600 text-white"
                              : "bg-primary text-on-primary"
                          }`}>
                            {reply.status === "meeting_booked" ? <Calendar size={12} /> : reply.status === "prequalified" ? <Bot size={12} /> : <UserCheck size={12} />}
                          </div>
                          <div>
                            <span className="font-bold text-xs text-on-surface">{reply.prospect}</span>
                            <span className="text-[10px] text-on-surface-variant ml-1.5 opacity-80">({reply.role})</span>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-semibold">
                          {reply.time}
                        </span>
                      </div>
                      <p className="font-body text-xs text-on-surface-variant pl-8 leading-relaxed">
                        {reply.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Financial Outcome Matrix */}
          <div className="mt-4 pt-4 border-t border-outline-variant/20 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                <div className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
                  Monthly Calls
                </div>
                <div className="font-display font-extrabold text-lg sm:text-xl text-primary mt-0.5">
                  {totalBookedCalls} <span className="text-xs font-normal text-on-surface-variant">Calls</span>
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-0.5">
                  <CheckCircle2 size={10} /> 94% Show-Up
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                <div className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
                  Pipeline Value
                </div>
                <div className="font-display font-extrabold text-lg sm:text-xl text-on-surface mt-0.5">
                  ${(projectedPipelineValue / 1000).toFixed(0)}k
                </div>
                <div className="text-[10px] text-on-surface-variant opacity-80 mt-0.5">
                  Active Qtr Value
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                <div className="font-mono text-[10px] uppercase font-bold text-on-surface-variant">
                  Estimated Deals
                </div>
                <div className="font-display font-extrabold text-lg sm:text-xl text-secondary mt-0.5">
                  {estimatedClosedDeals} <span className="text-xs font-normal text-on-surface-variant">Deals</span>
                </div>
                <div className="text-[10px] text-secondary font-semibold mt-0.5">
                  @ {(selectedICP.closeRate * 100).toFixed(0)}% Close Rate
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-br from-primary-container/40 to-primary-container/10 border border-primary/30">
                <div className="font-mono text-[10px] uppercase font-bold text-primary">
                  New Mo. Revenue
                </div>
                <div className="font-display font-extrabold text-lg sm:text-xl text-primary mt-0.5">
                  +${(projectedMonthlyRevenue / 1000).toFixed(0)}k<span className="text-xs font-normal">/mo</span>
                </div>
                <div className="text-[10px] text-primary font-bold mt-0.5">
                  ${(annualizedRevenue / 1000000).toFixed(2)}M /yr Run-Rate
                </div>
              </div>
            </div>

            {/* Bottom Final CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={copyBlueprintSummary}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-outline-variant/30 text-xs font-bold text-on-surface hover:bg-surface-container transition-all"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-600">Copied Blueprint Specs!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Pipeline Blueprint</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-xs sm:text-sm shadow-md hover:bg-primary/90 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Deploy This Exact Pipeline</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Built-in Strategy Session Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/30 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => {
                setIsBookingModalOpen(false);
                setQuickFormSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              <X size={18} />
            </button>

            {!quickFormSubmitted ? (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold">
                  <ShieldCheck size={14} />
                  <span>14-Day Ignition Sprint</span>
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-on-surface">
                  Lock In Your Pipeline Blueprint
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  We'll configure this exact setup ({monthlyLeads.toLocaleString()} leads/mo targeting {selectedICP.targetRole} with projected {totalBookedCalls} monthly meetings) for your business.
                </p>

                <form onSubmit={handleQuickSubmit} className="space-y-3 pt-2">
                  <div>
                    <label className="block font-label-badge text-xs font-bold text-on-surface mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-label-badge text-xs font-bold text-on-surface mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 text-xs text-on-surface-variant space-y-1">
                    <div className="flex justify-between font-bold text-on-surface">
                      <span>Target Sector:</span>
                      <span className="text-primary">{selectedICP.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projected Pipeline:</span>
                      <span className="font-semibold text-emerald-600">${(projectedPipelineValue / 1000).toFixed(0)}k /month</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSavingModal}
                    className="w-full py-3 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-75 cursor-pointer"
                  >
                    {isSavingModal ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-on-primary border-t-transparent animate-spin" />
                        <span>Reserving Your Blueprint...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm & Get Deployment Brief</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display font-extrabold text-xl text-on-surface">
                  Pipeline Blueprint Reserved!
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-sm mx-auto">
                  Thanks {fullName}! Your customized acquisition blueprint for {selectedICP.name} has been compiled. A Senior Architect will reach out to <strong>{workEmail}</strong> to review your 14-day ignition calendar.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsBookingModalOpen(false);
                      setQuickFormSubmitted(false);
                      navigate("/diagnostic");
                    }}
                    className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-xs sm:text-sm shadow-md"
                  >
                    Schedule Live Strategy Call Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
