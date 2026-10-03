import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronDown, Mail, Linkedin, Share2, Target, Globe, Layers, Bot, Search, Sparkles, Wrench } from "lucide-react";
import { servicesData } from "../data/servicesData";
import { prefetchRoute } from "../App";

export const Logo: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "md" }) => {
  const iconHeights = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };
  const textSizes = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-2xl",
  };

  return (
    <Link to="/" className="flex items-center gap-2.5 group select-none" aria-label="ScaleForge Home">
      <img
        src="/logo.png"
        alt="ScaleForge Systems Logo"
        className={`${iconHeights[size]} w-auto object-contain transition-transform group-hover:scale-105`}
        loading="eager"
        width={32}
        height={32}
      />
      <div className={`font-display font-extrabold ${textSizes[size]} tracking-tight uppercase leading-none`}>
        <span className="text-on-surface">SCALE</span>
        <span className="text-primary-container">FORGE</span>
      </div>
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const marketingServices = [
    { id: "email-marketing", name: "Email Marketing & Outbound", desc: "Get sales calls booked with ideal clients via email", icon: Mail },
    { id: "linkedin-outreach", name: "LinkedIn Executive Outreach", desc: "Direct conversations with target CEOs & owners", icon: Linkedin },
    { id: "social-media", name: "Social Media Handling", desc: "Consistent authority posts that bring inbound leads", icon: Share2 },
    { id: "lead-generation", name: "Full-Funnel Lead Generation", desc: "Steady stream of verified, ready-to-buy inquiries", icon: Target },
  ];

  const techServices = [
    { id: "websites", name: "Modern Business Websites", desc: "Fast, modern web designs that impress buyers", icon: Globe },
    { id: "landing-pages-funnels", name: "Landing Pages & Funnels", desc: "Clean pages designed to turn visitors into sales calls", icon: Layers },
    { id: "custom-ai-solutions", name: "Custom AI Solutions & Assistants", desc: "AI assistants that answer questions and book calls 24/7", icon: Bot },
    { id: "seo", name: "Google SEO & Search Rankings", desc: "Rank on page 1 of Google when clients search for you", icon: Search },
  ];

  const navLinks = [
    { name: "Architecture", path: "/architecture" },
    { name: "Execution Roadmap", path: "/roadmap" },
    { name: "Proof & Metrics", path: "/metrics" },
    { name: "Guarantee", path: "/guarantee" },
    { name: "Live Simulator", path: "/simulator" },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if (location.pathname === link.path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate(link.path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(11,28,48,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Logo (clean without Q2 cohort pill) */}
        <div className="flex items-center gap-6">
          <Logo />
        </div>

        {/* Center: Desktop Nav Links with Services Mega Dropdown */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Services Dropdown Button */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => {
                setServicesDropdownOpen(true);
                prefetchRoute("/services");
              }}
              onFocus={() => prefetchRoute("/services")}
              aria-haspopup="true"
              aria-expanded={servicesDropdownOpen}
              aria-controls="services-mega-menu"
              aria-label="Toggle Services Catalog"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-body-sm font-medium transition-all ${
                location.pathname.startsWith("/services") || servicesDropdownOpen
                  ? "bg-surface-container text-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-primary" : ""}`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            {servicesDropdownOpen && (
              <div
                id="services-mega-menu"
                role="region"
                aria-label="Services Catalog"
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-2xl p-6 grid grid-cols-2 gap-6 animate-in fade-in zoom-in-95 duration-150 z-50"
              >
                {/* Column 1: Marketing Services */}
                <div>
                  <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-outline-variant/20">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-label-badge text-xs font-bold uppercase tracking-wider text-on-surface">
                      Marketing & Acquisition
                    </span>
                  </div>
                  <div className="space-y-1">
                    {marketingServices.map((svc) => {
                      const Icon = svc.icon;
                      return (
                        <Link
                          key={svc.id}
                          to={`/services/${svc.id}`}
                          onMouseEnter={() => prefetchRoute("/services")}
                          onFocus={() => prefetchRoute("/services")}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0 mt-0.5">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="font-display font-bold text-xs sm:text-sm text-on-surface group-hover:text-primary transition-colors">
                              {svc.name}
                            </div>
                            <div className="font-body text-[11px] text-on-surface-variant line-clamp-1">
                              {svc.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Tech Services */}
                <div>
                  <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-outline-variant/20">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    <span className="font-label-badge text-xs font-bold uppercase tracking-wider text-on-surface">
                      Engineering & Tech
                    </span>
                  </div>
                  <div className="space-y-1">
                    {techServices.map((svc) => {
                      const Icon = svc.icon;
                      return (
                        <Link
                          key={svc.id}
                          to={`/services/${svc.id}`}
                          onMouseEnter={() => prefetchRoute("/services")}
                          onFocus={() => prefetchRoute("/services")}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0 mt-0.5">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="font-display font-bold text-xs sm:text-sm text-on-surface group-hover:text-primary transition-colors">
                              {svc.name}
                            </div>
                            <div className="font-body text-[11px] text-on-surface-variant line-clamp-1">
                              {svc.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Bar: Link to Full Highway Roadmap */}
                <div className="col-span-2 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs bg-surface-container-low/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="font-body text-on-surface-variant flex items-center gap-1.5">
                    <Sparkles size={14} className="text-primary" />
                    <span>Every service includes our contractual 14-Day Deployment Roadmap.</span>
                  </span>
                  <Link
                    to="/roadmap"
                    onMouseEnter={() => prefetchRoute("/roadmap")}
                    onClick={() => setServicesDropdownOpen(false)}
                    className="font-display font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>View Full Execution Highway</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Core Page Links with Instant Prefetching */}
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                onMouseEnter={() => prefetchRoute(link.path)}
                onFocus={() => prefetchRoute(link.path)}
                aria-current={isActive ? "page" : undefined}
                className={`px-3.5 py-2 rounded-lg text-body-sm font-medium transition-all ${
                  isActive
                    ? "bg-surface-container text-primary font-bold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right: Primary Action + User Icon + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (location.pathname === "/diagnostic") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
              }
              navigate("/diagnostic");
            }}
            onMouseEnter={() => prefetchRoute("/diagnostic")}
            onFocus={() => prefetchRoute("/diagnostic")}
            aria-label="Claim Free Diagnostic Strategy Session"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-headline-sm text-xs font-bold tracking-tight shadow-sm shadow-primary-container/20 hover:bg-primary transition-all active:scale-[0.98]"
          >
            <span>Claim Free Diagnostic</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-6 py-5 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {/* Mobile Collapsible Services Section */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-body-md font-bold text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span>Services Catalog</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 pr-1 py-2 space-y-3 bg-surface-container-low/50 rounded-xl my-1 border border-outline-variant/20">
                  <div className="text-[10px] font-mono uppercase text-primary font-bold tracking-wider">
                    Marketing & Acquisition
                  </div>
                  {marketingServices.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/services/${svc.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-on-surface hover:text-primary py-1"
                    >
                      {svc.name}
                    </Link>
                  ))}

                  <div className="text-[10px] font-mono uppercase text-tertiary font-bold tracking-wider pt-2 border-t border-outline-variant/20">
                    Engineering & Tech
                  </div>
                  {techServices.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/services/${svc.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-on-surface hover:text-primary py-1"
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="text-left py-2.5 px-3 rounded-lg text-body-md font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-3 border-t border-outline-variant/20 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/diagnostic");
                }}
                className="w-full py-3 rounded-lg bg-primary-container text-on-primary font-headline-sm text-sm font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <span>Claim Free Diagnostic</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
