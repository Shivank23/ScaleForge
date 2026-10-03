import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { initGA, trackPageView } from "./utils/analytics";

// Code-split secondary routes for near-instantaneous initial load
const ArchitecturePage = lazy(() => import("./pages/ArchitecturePage").then(m => ({ default: m.ArchitecturePage })));
const GrowthEnginesPage = lazy(() => import("./pages/GrowthEnginesPage").then(m => ({ default: m.GrowthEnginesPage })));
const RoadmapPage = lazy(() => import("./pages/RoadmapPage").then(m => ({ default: m.RoadmapPage })));
const MetricsPage = lazy(() => import("./pages/MetricsPage").then(m => ({ default: m.MetricsPage })));
const GuaranteePage = lazy(() => import("./pages/GuaranteePage").then(m => ({ default: m.GuaranteePage })));
const DiagnosticPage = lazy(() => import("./pages/DiagnosticPage").then(m => ({ default: m.DiagnosticPage })));
const LegalPage = lazy(() => import("./pages/LegalPage").then(m => ({ default: m.LegalPage })));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage").then(m => ({ default: m.ServiceDetailPage })));
const SimulatorPage = lazy(() => import("./pages/SimulatorPage").then(m => ({ default: m.SimulatorPage })));
const BrandAssetsPage = lazy(() => import("./pages/BrandAssetsPage").then(m => ({ default: m.BrandAssetsPage })));

// Intelligent prefetcher for instant page transitions
export const prefetchRoute = (route: string) => {
  switch (route) {
    case "/architecture":
      import("./pages/ArchitecturePage");
      break;
    case "/growth-engines":
      import("./pages/GrowthEnginesPage");
      break;
    case "/roadmap":
      import("./pages/RoadmapPage");
      break;
    case "/metrics":
      import("./pages/MetricsPage");
      break;
    case "/guarantee":
      import("./pages/GuaranteePage");
      break;
    case "/diagnostic":
      import("./pages/DiagnosticPage");
      break;
    case "/simulator":
      import("./pages/SimulatorPage");
      break;
    case "/services":
      import("./pages/ServiceDetailPage");
      break;
    default:
      break;
  }
};

export const prefetchSecondaryRoutes = () => {
  import("./pages/ArchitecturePage");
  import("./pages/RoadmapPage");
  import("./pages/SimulatorPage");
  import("./pages/MetricsPage");
  import("./pages/GuaranteePage");
  import("./pages/DiagnosticPage");
  import("./pages/ServiceDetailPage");
};

const RouteLoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center" aria-label="Loading content" role="status">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

// Ensures window resets to top and tracks route page view in Google Analytics
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Google Analytics SPA Page View Tracking
    trackPageView(pathname);

    // 2. Scroll position handling
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};

export default function App() {
  // Initialize Google Analytics and idle prefetching of secondary routes
  useEffect(() => {
    initGA();

    if ("requestIdleCallback" in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => {
        prefetchSecondaryRoutes();
      });
    } else {
      const timer = setTimeout(() => {
        prefetchSecondaryRoutes();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-on-primary focus:rounded-xl focus:shadow-2xl focus:font-bold focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="min-h-screen flex flex-col bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-primary">
        {/* Fixed Top Bar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main id="main-content" tabIndex={-1} className="flex-1 pt-20 focus:outline-none">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/architecture" element={<ArchitecturePage />} />
              <Route path="/growth-engines" element={<GrowthEnginesPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/metrics" element={<MetricsPage />} />
              <Route path="/guarantee" element={<GuaranteePage />} />
              <Route path="/diagnostic" element={<DiagnosticPage />} />
              <Route path="/simulator" element={<SimulatorPage />} />
              <Route path="/privacy" element={<LegalPage />} />
              <Route path="/terms" element={<LegalPage />} />
              <Route path="/security" element={<LegalPage />} />
              <Route path="/brand-assets" element={<BrandAssetsPage />} />
              <Route path="/assets-download" element={<BrandAssetsPage />} />
              {/* Catch-all fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>

      {/* Vercel Web Analytics & Real-Time Performance Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}
