import React from "react";
import { Target, Layers, Bot, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export const GrowthEnginesSection: React.FC = () => {
  const engines = [
    {
      code: "ENGINE 01 // CLIENT DISCOVERY",
      title: "Finding & Reaching Your Dream Clients",
      desc: "We identify companies who actually need what you sell, find the exact decision-maker's contact info, and send personalized messages that start warm sales conversations.",
      icon: Target,
      deliverables: [
        "Verified list of business owners, CEOs, and directors in your niche",
        "Personalized email & LinkedIn outreach that sounds human and gets replies",
        "Continuous adjustments to focus budget on the highest-paying industries",
      ],
      metricLabel: "Cost Per Client",
      metricValue: "-38% Lower",
      metricColor: "text-primary",
      targetText: "Target: CEOs & Founders",
    },
    {
      code: "ENGINE 02 // CONVERSION PAGES",
      title: "Websites & Landing Pages Built to Sell",
      desc: "Fast, modern web pages designed specifically to convince visitors to hire you. They load in a fraction of a second on phones, showcase your proof, and make booking a call effortless.",
      icon: Layers,
      deliverables: [
        "Loads in under half a second on any mobile phone or laptop",
        "Clear, simple copywriting explaining why customers should choose you",
        "Interactive consultation booking forms with zero confusing menus",
      ],
      metricLabel: "Lead Conversion Lift",
      metricValue: "+144% More Leads",
      metricColor: "text-primary",
      targetText: "Speed: Instant Loading",
    },
    {
      code: "ENGINE 03 // 24/7 AI ASSISTANTS",
      title: "Smart AI Assistants That Screen & Book Leads",
      desc: "Tireless AI assistants that answer inquiries on your website 24/7. They ask qualifying questions, make sure the customer has the budget, and put appointments right on your calendar.",
      icon: Bot,
      deliverables: [
        "Instant reply to all customer inquiries in under 60 seconds",
        "Pre-meeting research summary sent to your phone before every call",
        "Automated friendly SMS and calendar reminders so 90%+ of leads show up",
      ],
      metricLabel: "Call Show-Up Rate",
      metricValue: "92.4% Show Up",
      metricColor: "text-tertiary",
      targetText: "Response Time: <60 Sec",
    },
    {
      code: "ENGINE 04 // SALES CLOSING",
      title: "Closing Deals & Growing Repeat Revenue",
      desc: "Systems that help your sales reps turn calls into signed contracts faster. Includes automated proposal tracking, deal reminders, and expansion plans so one-time clients turn into long-term accounts.",
      icon: TrendingUp,
      deliverables: [
        "Live sales pipeline dashboard tracking every ongoing customer conversation",
        "Automatic alerts when a prospect opens your proposal so you can follow up fast",
        "Simple digital agreement rooms where clients sign contracts without delays",
      ],
      metricLabel: "Closing Speed",
      metricValue: "+220% Faster",
      metricColor: "text-tertiary",
      targetText: "Outcome: Long-Term Contracts",
    },
  ];

  return (
    <section id="growth-engines" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Center Tagline & Headline */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="px-3.5 py-1 rounded-full bg-primary-fixed text-primary font-label-badge text-xs uppercase tracking-wider font-bold">
          The 4 Core Systems
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight mt-3">
          The 4 Engines That Drive Your Revenue
        </h2>
        <p className="font-body text-sm sm:text-base text-on-surface-variant mt-2.5 leading-relaxed">
          Four interconnected systems built to work together smoothly or fit right into your existing sales setup.
        </p>
      </div>

      {/* 2x2 Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {engines.map((engine, idx) => {
          const Icon = engine.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm border border-outline-variant/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Card Top Pill & Icon */}
                <div className="flex items-center justify-between pb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="font-mono text-[11px] px-3 py-1 rounded-md bg-surface-container text-on-surface-variant font-medium">
                    {engine.code}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-on-surface mt-2 group-hover:text-primary transition-colors">
                  {engine.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                  {engine.desc}
                </p>

                {/* Deliverables List */}
                <ul className="mt-6 space-y-2.5">
                  {engine.deliverables.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface font-medium">
                      <CheckCircle2 size={16} className="text-tertiary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Metric & SLA */}
              <div className="mt-8 pt-4 border-t border-surface-container-high flex items-center justify-between text-on-surface-variant font-mono text-[11px]">
                <span>
                  {engine.metricLabel}: <strong className={`${engine.metricColor} font-bold`}>{engine.metricValue}</strong>
                </span>
                <span>{engine.targetText}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
