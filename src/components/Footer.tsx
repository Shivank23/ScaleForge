import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Activity } from "lucide-react";
import { Logo } from "./Navbar";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 shadow-[0_-1px_8px_rgba(11,28,48,0.03)] mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-10">
        {/* Top Row: Brand & Compliance Badges */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex flex-col gap-2.5">
            <Logo size="md" />
            <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
              Full-cycle revenue infrastructure & engineering-grade pipeline systems for high-growth enterprise SaaS
              operators.
            </p>
          </div>

          {/* Compliance Chips */}
          <div className="flex flex-wrap items-center gap-3 text-on-surface-variant font-mono text-xs">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm">
              <ShieldCheck size={16} className="text-tertiary" />
              <span>SOC2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm">
              <Lock size={16} className="text-tertiary" />
              <span>ISO 27001 Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm">
              <Activity size={16} className="text-tertiary" />
              <span>GDPR Enforced</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-outline-variant/20 text-on-surface-variant text-xs font-body">
          <div className="font-mono text-[11px]">© 2026 ScaleForge Systems Corp. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-on-surface transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-on-surface transition-colors">
              Terms of Service
            </Link>
            <Link to="/security" className="hover:text-on-surface transition-colors">
              Security Architecture
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
