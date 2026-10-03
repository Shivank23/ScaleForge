/**
 * Google Analytics 4 (GA4) Utility for ScaleForge
 * Handles client-side SPA route tracking, user interactions, and event measurement.
 */

// Default or Environment-defined GA4 Measurement ID
export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || "G-E4X7C8Q9P1"; // Replace with your GA4 Measurement ID or set VITE_GA_MEASUREMENT_ID in Vercel

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Initializes Google Analytics script asynchronously
 */
export const initGA = () => {
  if (typeof window === "undefined") return;

  // Avoid injecting script twice
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // Handled dynamically on SPA route changes
  });
};

/**
 * Track SPA Route / Page View
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

/**
 * Track Custom Business Events
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * High-Value Conversion Tracking Helpers
 */
export const trackConsultationBooking = (serviceType: string, acv?: string) => {
  trackEvent("booking_submit", "Conversion", `${serviceType} - ACV: ${acv || "N/A"}`);
};

export const trackSimulatorEngagement = (icp: string, leads: number, acv: number) => {
  trackEvent("simulator_run", "Engagement", `${icp} | Leads: ${leads} | ACV: $${acv}`);
};

export const trackDiagnosticStart = () => {
  trackEvent("diagnostic_start", "User Intent", "Audit Engine Started");
};
