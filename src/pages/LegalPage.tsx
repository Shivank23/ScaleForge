import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShieldCheck, Lock, Activity, CheckCircle2 } from "lucide-react";

export const LegalPage: React.FC = () => {
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname === "/terms") return "terms";
    if (location.pathname === "/security") return "security";
    return "privacy";
  };

  const activeTab = getActiveTab();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Tab Navigation */}
      <div className="flex border-b border-outline-variant/30 mb-8 overflow-x-auto">
        <Link
          to="/privacy"
          className={`py-3 px-6 font-display text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
            activeTab === "privacy"
              ? "border-primary text-primary"
              : "border-transparent text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms"
          className={`py-3 px-6 font-display text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
            activeTab === "terms"
              ? "border-primary text-primary"
              : "border-transparent text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Terms of Service
        </Link>
        <Link
          to="/security"
          className={`py-3 px-6 font-display text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
            activeTab === "security"
              ? "border-primary text-primary"
              : "border-transparent text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Security Architecture
        </Link>
      </div>

      {/* Content Area */}
      <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-2xl border border-outline-variant/30 shadow-sm leading-relaxed text-on-surface-variant text-sm space-y-6">
        {activeTab === "privacy" && (
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-on-surface mb-2">Privacy Policy</h1>
            <p className="font-mono text-xs text-on-surface-variant mb-6">Last updated: October 2026</p>

            <h2 className="font-display font-bold text-base text-on-surface mt-6 mb-2">1. Information We Collect</h2>
            <p>
              ScaleForge Systems Corp. ("ScaleForge", "we", "our") collects information provided directly by enterprise
              clients during diagnostic consultations, pipeline calibrations, and telemetry integration. This includes
              contact details, target account criteria, and API keys for CRM synchronization.
            </p>

            <h2 className="font-display font-bold text-base text-on-surface mt-6 mb-2">2. How We Use Information</h2>
            <p>
              We process prospect and account information exclusively to configure your autonomous growth infrastructure,
              enrich sales qualification dossiers, and verify commercial SLA outcomes. We do not sell, rent, or cross-pool
              your proprietary pipeline datasets across other clients.
            </p>

            <h2 className="font-display font-bold text-base text-on-surface mt-6 mb-2">3. Data Ownership & Deletion</h2>
            <p>
              You maintain 100% intellectual property and data ownership over all ingested TAM lists, customized AI agents,
              and conversion portals. Upon termination of service, all credentials and ephemeral staging environments are
              permanently purged within 30 days.
            </p>
          </div>
        )}

        {activeTab === "terms" && (
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-on-surface mb-2">Terms of Service</h1>
            <p className="font-mono text-xs text-on-surface-variant mb-6">Last updated: October 2026</p>

            <h2 className="font-display font-bold text-base text-on-surface mt-6 mb-2">1. Scope of Services</h2>
            <p>
              ScaleForge provides engineering-grade revenue infrastructure, programmatic acquisition systems, and autonomous
              qualification agents for high-growth enterprise SaaS operators under formal Master Services Agreements (MSA).
            </p>

            <h2 className="font-display font-bold text-base text-on-surface mt-6 mb-2">
              2. 30-Day Performance Guarantee Provision
            </h2>
            <p>
              Our performance guarantee stipulates that if contracted conversation and pipeline velocity thresholds are not
              achieved within 30 calendar days following launch, ScaleForge will continue operations without billing until
              agreed benchmarks are met or exceeded.
            </p>

            <h2 className="font-display font-bold text-base text-on-surface mt-6 mb-2">3. Mutual Non-Disclosure</h2>
            <p>
              All diagnostic blueprint sessions, revenue run-rate disclosures, and commercial metrics are strictly governed
              under our mutual non-disclosure agreement executed prior to system deployment.
            </p>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-on-surface mb-2">
              Security Architecture & Compliance
            </h1>
            <p className="font-mono text-xs text-on-surface-variant mb-6">Enterprise-Grade Zero-Trust Protocol</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-center">
                <ShieldCheck size={28} className="text-tertiary mx-auto mb-2" />
                <div className="font-display font-bold text-sm text-on-surface">SOC2 Type II</div>
                <p className="font-mono text-[10px] text-on-surface-variant mt-1">Audited & Certified</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-center">
                <Lock size={28} className="text-tertiary mx-auto mb-2" />
                <div className="font-display font-bold text-sm text-on-surface">ISO 27001</div>
                <p className="font-mono text-[10px] text-on-surface-variant mt-1">Information Security</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-center">
                <Activity size={28} className="text-tertiary mx-auto mb-2" />
                <div className="font-display font-bold text-sm text-on-surface">GDPR Enforced</div>
                <p className="font-mono text-[10px] text-on-surface-variant mt-1">EU/UK Data Sovereignty</p>
              </div>
            </div>

            <h2 className="font-display font-bold text-base text-on-surface mt-6 mb-2">Data Transmission & Storage</h2>
            <p>
              All telemetry event ingestion and API handshakes utilize TLS 1.3 encryption in transit and AES-256 encryption
              at rest. Connectors to HubSpot, Salesforce, and Slack use OAuth 2.0 with minimal required permission scopes.
            </p>

            <h2 className="font-display font-bold text-base text-on-surface mt-6 mb-2">Vulnerability Management</h2>
            <p>
              We conduct automated continuous vulnerability scans, static code analysis on all automated agent scripts, and
              engage third-party penetration testers on an annual cadence.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
