import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { ServiceRoadmap } from "../components/ServiceRoadmap";
import { BookingSection } from "../components/BookingSection";
import { ServiceVisualPreview } from "../components/ServiceVisualPreview";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, Sparkles, Layers, Activity } from "lucide-react";

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  if (!serviceId || !servicesData[serviceId]) {
    return <Navigate to="/roadmap" replace />;
  }

  const service = servicesData[serviceId];

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 [background-image:linear-gradient(to_right,#c3c6d7_1px,transparent_1px),linear-gradient(to_bottom,#c3c6d7_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Service Hero Banner with 2-Column Visual Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Left Column: Core Value & Call to Actions */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold mb-3.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>{service.categoryLabel}</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight">
              {service.name}
            </h1>

            <p className="font-display font-semibold text-base sm:text-lg text-primary mt-2">
              {service.tagline}
            </p>

            <p className="font-body text-sm sm:text-base text-on-surface-variant mt-4 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-6">
              <a
                href="#service-roadmap"
                className="px-6 py-3 rounded-xl bg-primary-container text-on-primary font-headline-sm text-sm font-bold shadow-md hover:bg-primary transition-all flex items-center gap-2"
              >
                <span>See Step-by-Step Roadmap</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#service-booking"
                className="px-6 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-headline-sm text-sm font-bold border border-outline-variant/30 hover:bg-surface-container-low transition-colors"
              >
                Claim Free Strategy Call
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Visual Representation of How We Do It */}
          <div className="lg:col-span-5">
            <ServiceVisualPreview serviceId={service.id} />
          </div>
        </div>

        {/* 3 Highlight Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {service.highlightStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                {stat.label}
              </span>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-primary mt-2">
                {stat.value}
              </div>
              <p className="font-body text-xs text-on-surface-variant mt-1">{stat.helper}</p>
            </div>
          ))}
        </div>

        {/* MAIN HIGHLIGHT: THE VISUAL HIGHWAY ROADMAP */}
        <div id="service-roadmap" className="my-16 pt-8 border-t border-outline-variant/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-badge text-xs uppercase tracking-wider font-bold">
              Step-by-Step Implementation Highway
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight mt-2.5">
              How We Deliver {service.name}
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
              From Day 1 kickoff through launch and steady customer growth. Every milestone is clearly tracked and
              backed by our written satisfaction guarantee.
            </p>
          </div>

          {/* The Visual Road Component */}
          <ServiceRoadmap
            steps={service.roadSteps}
            serviceTitle={service.name}
            slaGuarantee={service.slaGuarantee}
          />
        </div>

        {/* Deliverables & Stack Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16">
          {/* Left: Complete Deliverables */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
            <h3 className="font-display font-bold text-xl text-on-surface mb-4">
              Contractual Scope of Deliverables
            </h3>
            <div className="space-y-3">
              {service.deliverables.map((deliv, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low/60">
                  <CheckCircle2 size={18} className="text-tertiary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-on-surface leading-relaxed">{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Stack & Guarantee */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Tech Stack Box */}
            <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl border border-outline-variant/30 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Wrench size={18} className="text-primary" />
                <h4 className="font-display font-bold text-sm text-on-surface uppercase tracking-wider">
                  Engineered Tech Stack
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {service.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface text-xs font-mono font-semibold border border-outline-variant/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* SLA Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white p-6 sm:p-7 rounded-2xl border border-emerald-400/40 shadow-xl">
              <div className="flex items-center gap-2.5 mb-2">
                <ShieldCheck size={22} className="text-emerald-300" />
                <span className="font-mono text-xs text-emerald-300 uppercase font-bold tracking-wider">
                  Contractual Guarantee
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {service.slaGuarantee}
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Booking Form for this Service */}
        <div id="service-booking" className="pt-8 border-t border-outline-variant/20">
          <BookingSection />
        </div>
      </div>
    </div>
  );
};
