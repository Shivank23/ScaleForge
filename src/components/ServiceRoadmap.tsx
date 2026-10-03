import React, { useState, useRef, useEffect } from "react";
import { RoadStep } from "../data/servicesData";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
  CheckCircle2,
  Flag,
  Trophy,
  Wrench,
  Sparkles,
  Zap,
} from "lucide-react";

interface ServiceRoadmapProps {
  steps: RoadStep[];
  serviceTitle: string;
  slaGuarantee?: string;
}

export const ServiceRoadmap: React.FC<ServiceRoadmapProps> = ({
  steps,
  serviceTitle,
  slaGuarantee,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const roadContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track scroll progress along the road highway container with comfortable viewport offsets
  const { scrollYProgress } = useScroll({
    target: roadContainerRef,
    offset: ["start 65%", "end 65%"],
  });

  // High-performance spring: zero lag on fast scrolling with silky smooth damping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 350,
    damping: 32,
    mass: 0.12,
    restDelta: 0.0001,
  });

  // Vehicle travels smoothly from top (2%) to bottom (98%) of the road
  const vehicleTop = useTransform(smoothProgress, [0, 1], ["2%", "98%"]);

  useEffect(() => {
    let lastStep = -1;
    const unsubscribe = smoothProgress.on("change", (latest) => {
      // Auto-detect current active milestone only when crossing thresholds to prevent unnecessary re-renders
      const clamped = Math.max(0, Math.min(0.999, latest));
      const currentStep = Math.floor(clamped * steps.length);
      if (currentStep !== lastStep) {
        lastStep = currentStep;
        setActiveStepIndex(currentStep);
      }
    });
    return () => unsubscribe();
  }, [smoothProgress, steps.length]);

  return (
    <div className="relative w-full my-8" ref={roadContainerRef}>
      {/* =========================================================================
          1. START SIGN (Highway Green Signboard with Blinking Clearance Beacons)
          ========================================================================= */}
      <div className="flex flex-col items-center mb-8 sm:mb-12">
        <div className="relative group max-w-md w-full px-4">
          {/* Signboard Frame */}
          <div className="px-5 sm:px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white font-display border-2 border-emerald-400 shadow-2xl shadow-emerald-950/30 text-center flex items-center gap-3.5 relative overflow-hidden">
            <div className="w-11 h-11 rounded-xl bg-emerald-950 border border-emerald-300/40 flex items-center justify-center text-emerald-200 shrink-0 shadow-inner">
              <Flag size={22} className="animate-bounce" />
            </div>
            <div className="text-left flex-1 relative z-10">
              <div className="text-[10px] font-mono tracking-widest uppercase text-emerald-300 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>DAY 00 // IGNITION POINT</span>
              </div>
              <div className="font-extrabold text-sm sm:text-base tracking-wider uppercase">
                START: WHERE YOU ARE TODAY
              </div>
              <div className="text-[11px] sm:text-xs text-emerald-100 font-body mt-0.5">
                Kickoff call, account handover & system configuration.
              </div>
            </div>
          </div>
          {/* Signboard Ground Steel Pillars */}
          <div className="flex justify-center gap-16 -mt-0.5">
            <div className="w-2.5 h-8 bg-slate-500 rounded-b shadow-md"></div>
            <div className="w-2.5 h-8 bg-slate-500 rounded-b shadow-md"></div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. THE ROAD TRACK WITH REALISTIC VECTOR SPORTS CAR & CLEAN MILESTONES
          ========================================================================= */}
      <div className="relative max-w-4xl mx-auto px-2 sm:px-6">
        {/* Continuous Highway Asphalt Track (Mobile & Desktop) */}
        <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-10 sm:w-16 bg-slate-950 rounded-full border-x-2 border-slate-700/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] overflow-hidden z-0">
          {/* Animated Flowing Road Center Dashes */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 animate-road-stripes"></div>

          {/* Road Curb Reflectors & Ambient Neon Lighting */}
          <div className="absolute top-1/4 inset-x-0 h-32 bg-cyan-500/15 blur-xl pointer-events-none animate-road-ambient"></div>
          <div className="absolute top-3/4 inset-x-0 h-32 bg-emerald-500/15 blur-xl pointer-events-none animate-road-ambient"></div>
        </div>

        <motion.div
          style={{ top: vehicleTop }}
          className="absolute left-6 sm:left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none will-change-[top]"
        >
          <div className="relative flex flex-col items-center">
            {/* Forward Headlight Beam Cones */}
            <div className="w-20 h-32 bg-gradient-to-b from-cyan-300/30 via-cyan-400/10 to-transparent blur-md rounded-t-full pointer-events-none rotate-180 -mb-6"></div>

            {/* High-End Vector Top-Down Sports Car */}
            <div className="relative animate-car-hover drop-shadow-[0_0_16px_rgba(6,182,212,0.8)]">
              <svg
                width="36"
                height="62"
                viewBox="0 0 40 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Car Underglow Neon */}
                <ellipse cx="20" cy="34" rx="18" ry="28" fill="#06b6d4" fillOpacity="0.4" filter="blur(4px)" />

                {/* Aerodynamic Chassis */}
                <path
                  d="M10 14 C10 6, 14 2, 20 2 C26 2, 30 6, 30 14 L32 26 C33 32, 34 40, 33 52 C32 60, 28 66, 20 66 C12 66, 8 60, 7 52 C6 40, 7 32, 8 26 Z"
                  fill="url(#carBodyGradient)"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                />

                {/* Side Mirrors */}
                <path d="M7 20 L3 22 L4 25 L8 23 Z" fill="#004ac6" />
                <path d="M33 20 L37 22 L36 25 L32 23 Z" fill="#004ac6" />

                {/* Hood Aerodynamic Inlets */}
                <path d="M14 6 C16 12, 17 18, 17 22" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                <path d="M26 6 C24 12, 23 18, 23 22" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />

                {/* Front Windshield with Glass Reflection */}
                <path
                  d="M12 24 C14 22, 26 22, 28 24 L27 34 C25 35, 15 35, 13 34 Z"
                  fill="url(#windshieldGrad)"
                  stroke="#7dd3fc"
                  strokeWidth="0.75"
                />

                {/* Panoramic Glass Roof */}
                <rect x="14" y="35" width="12" height="12" rx="2" fill="#02142d" stroke="#38bdf8" strokeWidth="0.5" />

                {/* Rear Window */}
                <path d="M13 48 C15 47, 25 47, 27 48 L28 54 C26 55, 14 55, 12 54 Z" fill="#02142d" />

                {/* Rear Aerodynamic Spoiler */}
                <path d="M8 60 L32 60 L31 63 L9 63 Z" fill="#002d7a" stroke="#38bdf8" strokeWidth="0.75" />

                {/* Dual LED Headlights */}
                <path d="M9 10 L13 6 L14 11 L10 13 Z" fill="#f0f9ff" filter="drop-shadow(0 0 4px #38bdf8)" />
                <path d="M31 10 L27 6 L26 11 L30 13 Z" fill="#f0f9ff" filter="drop-shadow(0 0 4px #38bdf8)" />

                {/* Rear Red LED Brake Light Strip */}
                <line
                  x1="10"
                  y1="62"
                  x2="30"
                  y2="62"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 5px #ef4444)"
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="carBodyGradient" x1="20" y1="2" x2="20" y2="66" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0052cc" />
                    <stop offset="0.45" stopColor="#00358a" />
                    <stop offset="1" stopColor="#021a44" />
                  </linearGradient>
                  <linearGradient id="windshieldGrad" x1="20" y1="22" x2="20" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7dd3fc" stopOpacity="0.95" />
                    <stop offset="1" stopColor="#0284c7" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Rear Exhaust Energy Trail */}
            <div className="w-2.5 h-7 bg-gradient-to-b from-cyan-400/80 via-blue-500/40 to-transparent blur-[1px] -mt-1"></div>
          </div>
        </motion.div>

        {/* 5 Milestone Step Stations with Clean, Unified Design */}
        <div className="space-y-10 sm:space-y-16 relative z-10 py-6">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const isSelected = activeStepIndex === idx;

            return (
              <div
                key={step.stepNumber}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12 pl-14 sm:pl-0 ${
                  isLeft ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Station Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="w-full sm:w-[calc(50%-2.5rem)]"
                >
                  <div
                    onClick={() => setActiveStepIndex(idx)}
                    className={`cursor-pointer rounded-2xl p-5 sm:p-6 border transition-all duration-300 relative overflow-hidden group ${
                      isSelected
                        ? "bg-surface-container-lowest border-primary shadow-xl ring-2 ring-primary/30 shadow-primary/10"
                        : "bg-surface-container-lowest/95 border-outline-variant/30 hover:border-primary/50 hover:shadow-md"
                    }`}
                  >
                    {/* Consistent Card Header: Step number is ALWAYS cleanly positioned on the top-left in bold blue */}
                    <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-outline-variant/20">
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        {/* Unified, consistent STEP badge */}
                        <span className="px-3 py-1 rounded-lg bg-primary text-white font-mono text-xs font-bold shadow-sm tracking-wider">
                          STEP 0{step.stepNumber}
                        </span>
                        <span className="font-mono text-xs font-bold text-primary flex items-center gap-1">
                          <Zap size={13} className="text-amber-500" />
                          <span>{step.dayRange}</span>
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-bold truncate max-w-[150px]">
                        {step.deliverableTag}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="font-display font-bold text-base sm:text-lg text-on-surface mt-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs text-primary font-semibold mt-1">
                      {step.subtitle}
                    </p>

                    {/* Plain Human Description (Easily understandable for any non-tech client) */}
                    <p className="font-body text-xs text-on-surface-variant mt-2.5 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Tasks Checklist */}
                    <div className="mt-4 pt-3 border-t border-outline-variant/20 space-y-2">
                      <div className="text-[10px] font-mono uppercase text-on-surface-variant font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>What We Deliver in This Step:</span>
                      </div>
                      {step.tasks.map((task, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2 text-xs text-on-surface">
                          <CheckCircle2 size={14} className="text-tertiary shrink-0 mt-0.5" />
                          <span className="leading-snug">{task}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools / Software Used */}
                    <div className="mt-4 pt-3 border-t border-outline-variant/10 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-on-surface-variant mr-1 flex items-center gap-1">
                        <Wrench size={11} /> Tools:
                      </span>
                      {step.tools.map((t, toolIdx) => (
                        <span
                          key={toolIdx}
                          className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[10px] font-mono border border-outline-variant/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Sleek Road Waypoint Node (Strictly on the road line, never overlapping cards or text) */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-7 sm:top-1/2 sm:-translate-y-1/2 z-20 pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    {/* Active Radar Shockwave Ring */}
                    {isSelected && (
                      <span className="absolute w-8 h-8 rounded-full border-2 border-cyan-400 animate-ping opacity-75"></span>
                    )}

                    {/* Checkpoint Beacon Node */}
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                        isSelected
                          ? "bg-cyan-400 border-white shadow-[0_0_16px_#06b6d4] scale-110"
                          : "bg-slate-900 border-slate-600 shadow-md"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isSelected ? "bg-slate-950" : "bg-cyan-400"
                        }`}
                      ></span>
                    </div>
                  </div>
                </div>

                {/* Counterbalance Spacer for 2-column alternating grid on desktop */}
                <div className="hidden sm:block w-[calc(50%-2.5rem)]"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          3. END SIGN (Highway Finish Line Podium & Trophy Sparklers)
          ========================================================================= */}
      <div className="flex flex-col items-center mt-12 sm:mt-16">
        <div className="flex justify-center gap-16 -mb-0.5">
          <div className="w-2.5 h-8 bg-slate-500 rounded-t shadow-md"></div>
          <div className="w-2.5 h-8 bg-slate-500 rounded-t shadow-md"></div>
        </div>
        <div className="relative group max-w-md w-full px-4">
          <div className="px-5 sm:px-6 py-5 rounded-2xl bg-gradient-to-r from-blue-950 via-primary to-blue-900 text-white font-display border-2 border-cyan-300 shadow-[0_0_35px_rgba(37,99,235,0.4)] text-center flex items-center justify-between gap-4 relative overflow-hidden">
            {/* Background radiant beams */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent pointer-events-none"></div>

            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 shrink-0 shadow-lg relative z-10 animate-bounce [animation-duration:3s]">
              <Trophy size={26} />
            </div>
            <div className="text-left flex-1 relative z-10">
              <div className="text-[10px] font-mono tracking-widest uppercase text-cyan-200 font-bold flex items-center gap-1.5">
                <Sparkles size={12} className="text-amber-300" />
                <span>GOAL ACHIEVED // FINISH LINE</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <div className="font-extrabold text-sm sm:text-base tracking-wider uppercase mt-0.5">
                GUARANTEED RESULTS DELIVERED
              </div>
              <div className="text-xs text-blue-100 font-body mt-1 leading-snug">
                {slaGuarantee || "Contractual Performance SLA Met • Ongoing Scaled Client Flow."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
