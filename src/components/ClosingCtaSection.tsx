import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ClosingCtaSection: React.FC = () => {
  const navigate = useNavigate();

  const handleClaim = () => {
    const el = document.querySelector("#diagnostic");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/diagnostic");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pb-24">
      <div className="relative bg-gradient-to-r from-primary via-primary-container to-surface-tint rounded-3xl p-8 sm:p-12 lg:p-16 text-on-primary shadow-2xl overflow-hidden">
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="max-w-2xl">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-white font-label-badge text-xs uppercase tracking-wider backdrop-blur-sm font-bold">
              Deploy Your System Now
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-on-primary tracking-tight mt-4 leading-tight">
              Ready to replace random acts of marketing?
            </h2>
            <p className="font-body text-sm sm:text-base text-primary-fixed mt-2.5 max-w-xl leading-relaxed">
              Deploy an autonomous, full-funnel revenue machine engineered by seasoned commercial growth architects.
            </p>
          </div>

          {/* Action Column */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-2.5 w-full lg:w-auto">
            <button
              onClick={handleClaim}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-xl bg-surface-container-lowest text-primary font-display font-bold text-sm sm:text-base shadow-xl hover:bg-surface-container-low transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Claim Free Growth Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="font-mono text-xs text-primary-fixed opacity-90">
              100% Free • No Sales Pressure • 30-Minute Custom Plan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
