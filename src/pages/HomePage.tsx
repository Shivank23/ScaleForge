import React from "react";
import { HeroSection } from "../components/HeroSection";
import { BenchmarksSection } from "../components/BenchmarksSection";
import { GrowthEnginesSection } from "../components/GrowthEnginesSection";
import { PipelineSimulator } from "../components/PipelineSimulator";
import { BookingSection } from "../components/BookingSection";
import { GuaranteeSection } from "../components/GuaranteeSection";
import { ClosingCtaSection } from "../components/ClosingCtaSection";

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Blueprint Architectural Grid Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 [background-image:linear-gradient(to_right,#c3c6d7_1px,transparent_1px),linear-gradient(to_bottom,#c3c6d7_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Glowing Ambient Gradient Accents */}
      <div className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-primary-fixed blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute top-2/3 -left-32 w-96 h-96 rounded-full bg-primary-fixed blur-3xl opacity-30 pointer-events-none"></div>

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quantitative Proof & Engineered Benchmarks */}
      <BenchmarksSection />

      {/* 3. Modular Architecture: The 4 Autonomous Growth Engines */}
      <GrowthEnginesSection />

      {/* 4. Executive Diagnostic & Interactive Booking System */}
      <BookingSection />

      {/* 5. Risk Reversal & The 30-Day Guarantee */}
      <GuaranteeSection />

      {/* 6. Interactive Lead-to-Meeting Pipeline Simulator (Positioned After Guarantee) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <PipelineSimulator />
      </section>

      {/* 7. Closing Call to Action Banner */}
      <ClosingCtaSection />
    </div>
  );
};
