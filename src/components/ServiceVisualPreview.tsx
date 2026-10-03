import React from "react";
import {
  Mail,
  Linkedin,
  Share2,
  Target,
  Globe,
  Layers,
  Bot,
  Search,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Zap,
  ShieldCheck,
  Star,
  Clock,
  Send,
  MessageSquare,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

interface ServiceVisualPreviewProps {
  serviceId: string;
}

export const ServiceVisualPreview: React.FC<ServiceVisualPreviewProps> = ({ serviceId }) => {
  switch (serviceId) {
    // 1. EMAIL MARKETING & OUTBOUND
    case "email-marketing":
      return (
        <div className="relative w-full">
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-blue-500/10 to-cyan-400/20 rounded-3xl blur-xl pointer-events-none"></div>

          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6">
            {/* Header bar */}
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                    Outbound Email Campaign
                  </div>
                  <div className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Primary Inboxes Active (99.4% Deliverability)</span>
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-primary-fixed text-primary font-mono text-[10px] font-bold">
                CAMPAIGN #04
              </span>
            </div>

            {/* Email message preview card */}
            <div className="my-4 p-4 rounded-xl bg-surface-container-low/70 border border-outline-variant/30 space-y-2.5">
              <div className="flex items-center justify-between text-[11px] text-on-surface-variant font-mono">
                <span>To: <strong className="text-on-surface">CEO @ Enterprise Growth</strong></span>
                <span className="text-[10px] text-primary font-bold">10:14 AM</span>
              </div>
              <div className="font-display font-semibold text-xs text-on-surface">
                Subject: Quick question regarding your sales pipeline
              </div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                "Hi David, noticed you're scaling your team this quarter. We recently helped a similar founder add 18 qualified sales calls in 30 days without ads..."
              </p>
            </div>

            {/* Live Client Reply Alert */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 shadow-sm"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                  DC
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-display">David Cohen (CEO)</span>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold">Replied in 12m</span>
                  </div>
                  <p className="text-xs font-body italic text-emerald-950 mt-0.5">
                    "Sounds very relevant. Do you have 20 minutes this Thursday at 2:00 PM EST?"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Status Ribbon */}
            <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
              <span className="flex items-center gap-1.5 text-primary font-bold">
                <Calendar size={13} /> Call Booked on Google Calendar
              </span>
              <span className="text-emerald-700 font-bold">Status: Warm Lead</span>
            </div>
          </div>
        </div>
      );

    // 2. LINKEDIN EXECUTIVE OUTREACH
    case "linkedin-outreach":
      return (
        <div className="relative w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-sky-500/10 to-indigo-500/20 rounded-3xl blur-xl pointer-events-none"></div>

          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                    LinkedIn Executive Outbound
                  </div>
                  <div className="text-[10px] font-mono text-blue-600 font-semibold">
                    Targeting: Founders & Commercial Directors
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-mono text-[10px] font-bold border border-blue-200">
                48% ACCEPTANCE
              </span>
            </div>

            {/* Profile targeting card */}
            <div className="my-4 p-4 rounded-xl bg-surface-container-low/70 border border-outline-variant/30 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                MR
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-display font-bold text-xs text-on-surface truncate">Marcus Reynolds</h4>
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px]">in</span>
                </div>
                <div className="text-[11px] text-on-surface-variant truncate">VP Commercial Strategy • Series B FinTech</div>
                <div className="text-[10px] font-mono text-primary font-semibold mt-0.5">Matched Criteria: 50–200 Employees • Budget Authority</div>
              </div>
            </div>

            {/* InMail conversation preview */}
            <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/20 text-xs text-on-surface space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-on-surface-variant">
                <span>Direct Message Thread</span>
                <span className="text-emerald-600 font-bold">● Active Conversation</span>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                "Marcus, enjoyed your recent post on enterprise retention. We engineered a direct client acquisition system for similar B2B leaders..."
              </p>
              <div className="p-2 rounded bg-surface-container-lowest border border-outline-variant/30 text-[11px] text-primary font-semibold flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                <span>Marcus: "Let's connect on Zoom Friday morning. Send over your link!"</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
              <span>Zero Spam Filters</span>
              <span className="text-primary font-bold">100% Human-Tone Voice</span>
            </div>
          </div>
        </div>
      );

    // 3. SOCIAL MEDIA HANDLING
    case "social-media":
      return (
        <div className="relative w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-primary/10 to-pink-500/20 rounded-3xl blur-xl pointer-events-none"></div>

          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                  <Share2 size={18} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                    Authority Social Distribution
                  </div>
                  <div className="text-[10px] font-mono text-purple-600 font-semibold">
                    X (Twitter) & LinkedIn Synergy
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 font-mono text-[10px] font-bold border border-purple-200">
                142K+ REACH
              </span>
            </div>

            {/* Scheduled visual post mockup */}
            <div className="my-4 p-4 rounded-xl bg-surface-container-low/70 border border-outline-variant/30 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                  SF
                </div>
                <div>
                  <div className="font-display font-bold text-xs text-on-surface">ScaleForge Growth Systems</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">Published 2h ago • Industry Case Study</div>
                </div>
              </div>
              <p className="font-body text-xs text-on-surface leading-relaxed">
                "How one B2B company stopped paying $8k/mo to generic agencies and installed an automated pipeline that brought 34 qualified demos in 60 days 🧵👇"
              </p>
              {/* Engagement Stat Pill */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/20 text-[11px] font-mono">
                <span className="text-primary font-bold">84 Reposts</span>
                <span className="text-purple-600 font-bold">1,240 Likes</span>
                <span className="text-emerald-600 font-bold">18 Inbound Inquiries</span>
              </div>
            </div>

            {/* Inbound DM notification */}
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 flex items-center gap-2 text-xs">
              <MessageSquare size={16} className="text-purple-600 shrink-0" />
              <span><strong>New DM Received:</strong> "Saw your framework breakdown. Can we discuss your pricing for our firm?"</span>
            </div>
          </div>
        </div>
      );

    // 4. FULL-FUNNEL LEAD GENERATION
    case "lead-generation":
      return (
        <div className="relative w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600/20 via-primary/10 to-teal-500/20 rounded-3xl blur-xl pointer-events-none"></div>

          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Target size={18} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                    Autonomous Lead Pipeline
                  </div>
                  <div className="text-[10px] font-mono text-emerald-600 font-semibold">
                    100% Verified Business Inquiries
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono text-[10px] font-bold border border-emerald-200">
                25 – 40 CALLS/MO
              </span>
            </div>

            {/* 3 Step Waterfall Visualization */}
            <div className="my-4 space-y-2.5">
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between text-xs">
                <span className="font-medium text-on-surface flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold flex items-center justify-center">1</span>
                  Audience Identified & Verified
                </span>
                <span className="font-mono font-bold text-primary">2,400 Targeted CEOs</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between text-xs">
                <span className="font-medium text-on-surface flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold flex items-center justify-center">2</span>
                  Multi-Channel Outreach
                </span>
                <span className="font-mono font-bold text-primary">48.2% Open Rate</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between text-xs text-emerald-950 font-bold">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-mono flex items-center justify-center">3</span>
                  Pre-Screened Calls Booked
                </span>
                <span className="font-mono text-emerald-700 font-extrabold">+32 Meetings / Mo</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-between text-xs">
              <span className="text-on-surface-variant text-[11px]">Guaranteed Criteria:</span>
              <span className="font-semibold text-on-surface text-[11px]">$20k+ Deal Size Only</span>
            </div>
          </div>
        </div>
      );

    // 5. MODERN ENTERPRISE WEBSITES
    case "websites":
      return (
        <div className="relative w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-indigo-500/10 to-cyan-500/20 rounded-3xl blur-xl pointer-events-none"></div>

          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6">
            {/* Browser chrome viewport header */}
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <span className="ml-2 font-mono text-[10px] text-on-surface-variant truncate">https://yourcompany.com</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                100/100 SPEED
              </span>
            </div>

            {/* Mini Web Page Mockup */}
            <div className="my-4 rounded-xl bg-slate-900 text-white p-4 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-xs tracking-wider text-cyan-300">YOUR BRAND</span>
                <span className="px-2.5 py-1 rounded bg-primary text-[10px] font-bold">Book Consultation</span>
              </div>
              <div className="space-y-1">
                <div className="h-4 w-3/4 bg-white/90 rounded"></div>
                <div className="h-2.5 w-1/2 bg-white/40 rounded"></div>
              </div>
              {/* Speed metrics bar */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center font-mono text-[10px]">
                <div className="p-1.5 rounded bg-white/5">
                  <div className="text-emerald-400 font-bold">0.3s</div>
                  <div className="text-[9px] text-slate-400">Load Time</div>
                </div>
                <div className="p-1.5 rounded bg-white/5">
                  <div className="text-emerald-400 font-bold">100%</div>
                  <div className="text-[9px] text-slate-400">Mobile Score</div>
                </div>
                <div className="p-1.5 rounded bg-white/5">
                  <div className="text-emerald-400 font-bold">0 Error</div>
                  <div className="text-[9px] text-slate-400">Zero Crash</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between text-xs">
              <span className="text-on-surface-variant text-[11px]">Architecture:</span>
              <span className="font-mono text-primary font-bold text-[11px]">React 19 • Tailwind • Vite</span>
            </div>
          </div>
        </div>
      );

    // 6. LANDING PAGES & FUNNELS
    case "landing-pages-funnels":
      return (
        <div className="relative w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-primary/20 rounded-3xl blur-xl pointer-events-none"></div>

          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                  <Layers size={18} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                    High-Converting Landing Funnel
                  </div>
                  <div className="text-[10px] font-mono text-orange-600 font-semibold">
                    Optimized for Paid & Outbound Traffic
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-orange-50 text-orange-800 font-mono text-[10px] font-bold border border-orange-200">
                +144% LIFT
              </span>
            </div>

            {/* Split test comparison graphic */}
            <div className="my-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-center opacity-70">
                <div className="text-[10px] font-mono text-on-surface-variant uppercase">Generic Website</div>
                <div className="font-display font-bold text-xl text-on-surface mt-1">2.1%</div>
                <div className="text-[10px] text-red-500 font-mono mt-0.5">High Drop-off</div>
              </div>
              <div className="p-3 rounded-xl bg-orange-50 border-2 border-orange-400 text-center shadow-sm">
                <div className="text-[10px] font-mono text-orange-900 font-bold uppercase">ScaleForge Funnel</div>
                <div className="font-display font-extrabold text-xl text-orange-600 mt-1">8.9%</div>
                <div className="text-[10px] text-emerald-700 font-mono font-bold mt-0.5">4.2x More Bookings</div>
              </div>
            </div>

            {/* Funnel conversion form snippet */}
            <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/20 text-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-on-surface">
                <span>Frictionless 2-Step Intake Form</span>
                <span className="text-emerald-600">Zero Confusion</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 flex-1 bg-surface-container-lowest rounded-lg border border-outline-variant/30 px-3 flex items-center text-[11px] text-on-surface-variant">
                  Company Revenue: $50k+/mo
                </div>
                <div className="h-8 px-4 rounded-lg bg-primary text-white text-[11px] font-bold flex items-center">
                  Select Time →
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // 7. CUSTOM AI SOLUTIONS & BOTS
    case "custom-ai-solutions":
      return (
        <div className="relative w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-primary/10 to-blue-600/20 rounded-3xl blur-xl pointer-events-none"></div>

          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                    24/7 AI Qualification Assistant
                  </div>
                  <div className="text-[10px] font-mono text-cyan-600 font-semibold">
                    Instant Answers & Direct Calendar Booking
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-cyan-50 text-cyan-800 font-mono text-[10px] font-bold border border-cyan-200">
                &lt; 30s REPLY
              </span>
            </div>

            {/* Interactive simulated chat dialogue */}
            <div className="my-4 space-y-3">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-surface-container-high text-on-surface text-xs p-3 rounded-2xl rounded-tr-none max-w-[85%] font-body">
                  "Hi! Do you work with B2B healthcare software companies?"
                </div>
              </div>

              {/* AI Agent message */}
              <div className="flex justify-start items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-1">
                  AI
                </div>
                <div className="bg-cyan-50 border border-cyan-200 text-cyan-950 text-xs p-3 rounded-2xl rounded-tl-none max-w-[90%] font-body space-y-2">
                  <p>
                    "Yes, absolutely. We recently deployed an outbound pipeline for a HIPAA-compliant SaaS that booked 24 sales demos in month one."
                  </p>
                  <p className="text-[11px] font-semibold text-cyan-900">
                    "Would you like to review their campaign blueprint with our director?"
                  </p>
                </div>
              </div>

              {/* Bot calendar booking chip */}
              <div className="ml-8 p-2.5 rounded-xl bg-surface-container border border-outline-variant/30 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-primary font-bold flex items-center gap-1.5">
                  <Calendar size={13} /> Available Slot: Thursday 11:30 AM
                </span>
                <span className="px-2.5 py-1 rounded bg-primary text-white text-[10px] font-bold">
                  Auto-Booked
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
              <span>Qualification: Automatic</span>
              <span className="text-emerald-600 font-bold">92.4% Show-up Rate</span>
            </div>
          </div>
        </div>
      );

    // 8. GOOGLE SEO & SEARCH RANKINGS
    case "seo":
      return (
        <div className="relative w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-blue-500/10 to-teal-500/20 rounded-3xl blur-xl pointer-events-none"></div>

          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-xl overflow-hidden p-5 sm:p-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Search size={18} />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-on-surface">
                    Google Page 1 Dominance
                  </div>
                  <div className="text-[10px] font-mono text-emerald-600 font-semibold">
                    Organic Buyer Intent Traffic
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono text-[10px] font-bold border border-emerald-200">
                #1 RANKING
              </span>
            </div>

            {/* Google Search Result Card Mockup */}
            <div className="my-4 p-4 rounded-xl bg-surface-container-low/70 border border-outline-variant/30 space-y-2">
              <div className="text-[11px] font-mono text-on-surface-variant flex items-center gap-1.5">
                <span className="text-emerald-700 font-bold">https://yourbrand.com</span>
                <span>› services › commercial</span>
              </div>
              <h4 className="font-display font-bold text-sm text-blue-700 hover:underline cursor-pointer">
                Top B2B Client Growth Systems | Verified Written Guarantee
              </h4>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Scale your enterprise client flow with guaranteed customer acquisition roadmaps. 14-day setup, zero ad spend required, 100% asset ownership...
              </p>
              {/* Star Rating Rich Snippet */}
              <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-amber-600">
                <div className="flex items-center text-amber-500">
                  <Star size={12} className="fill-amber-400" />
                  <Star size={12} className="fill-amber-400" />
                  <Star size={12} className="fill-amber-400" />
                  <Star size={12} className="fill-amber-400" />
                  <Star size={12} className="fill-amber-400" />
                </div>
                <span className="font-bold">4.9 / 5.0</span>
                <span className="text-on-surface-variant">(48 Client Reviews)</span>
              </div>
            </div>

            {/* Traffic Growth Sparkline */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-center justify-between text-xs">
              <span className="font-medium flex items-center gap-1.5">
                <TrendingUp size={16} className="text-emerald-600" />
                <span>Organic Search Inquiries</span>
              </span>
              <span className="font-mono font-extrabold text-emerald-700">+310% in 90 Days</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
