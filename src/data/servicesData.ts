export interface RoadStep {
  stepNumber: number;
  phase: string;
  dayRange: string;
  title: string;
  subtitle: string;
  description: string;
  tasks: string[];
  deliverableTag: string;
  tools: string[];
}

export interface ServiceItem {
  id: string;
  category: "marketing" | "tech";
  categoryLabel: "Marketing & Lead Acquisition" | "Websites & Technology";
  name: string;
  tagline: string;
  heroBadge: string;
  description: string;
  highlightStats: { label: string; value: string; helper: string }[];
  deliverables: string[];
  techStack: string[];
  slaGuarantee: string;
  roadSteps: RoadStep[];
}

export const servicesData: Record<string, ServiceItem> = {
  "email-marketing": {
    id: "email-marketing",
    category: "marketing",
    categoryLabel: "Marketing & Lead Acquisition",
    name: "Email Marketing & Outbound Leads",
    tagline: "Get qualified sales meetings booked on your calendar via personalized email campaigns",
    heroBadge: "PREDICTABLE CLIENT ACQUISITION",
    description:
      "We build a complete email lead system for your business. We find your dream clients, write friendly personalized emails that get opened, and land real meetings directly on your sales calendar—without landing in spam.",
    highlightStats: [
      { label: "Inbox Delivery Rate", value: "99.4%", helper: "Emails land in primary inboxes, not spam" },
      { label: "Average Open Rate", value: "48%+", helper: "More than double the industry average" },
      { label: "Calls Booked", value: "15 - 30/mo", helper: "With real decision-makers who can buy" },
    ],
    deliverables: [
      "Custom email setup with dedicated domains so your main business email is 100% safe",
      "Hand-picked list of your ideal business clients (names, verified work emails, titles)",
      "Persuasive, human-sounding email sequences written to start conversations",
      "Automated reply monitoring so warm leads are answered within minutes",
      "Booked meetings scheduled directly into your Google or Outlook calendar",
    ],
    techStack: ["Smartlead", "Instantly", "Google Workspace", "Apollo Email Database", "HubSpot CRM"],
    slaGuarantee: "Guaranteed minimum 15 verified sales meetings with your target clients in 30 days.",
    roadSteps: [
      {
        stepNumber: 1,
        phase: "START // SETUP & SAFETY",
        dayRange: "Days 01 – 03",
        title: "Safe Email Setup & Domain Protection",
        subtitle: "We set up clean sending accounts so your primary company email is never flagged",
        description:
          "Before sending any message, we set up secure secondary domains and email accounts. This protects your company's main website reputation and ensures emails land straight in primary inboxes.",
        tasks: [
          "Set up clean secondary domains that match your business name",
          "Configure standard email safety records (SPF, DKIM, DMARC) so servers trust you",
          "Begin safe automated warmup to establish strong sender trust with Google and Outlook",
        ],
        deliverableTag: "Email Accounts Active & Safe",
        tools: ["Google Workspace", "Cloudflare", "Smartlead"],
      },
      {
        stepNumber: 2,
        phase: "AUDIENCE RESEARCH",
        dayRange: "Days 04 – 06",
        title: "Finding Your Ideal Paying Clients",
        subtitle: "Building a verified contact list of decision-makers with real budgets",
        description:
          "We research and build a clean list of executives and business owners who genuinely need your service. Every email address is verified to prevent bounces.",
        tasks: [
          "Define your best clients: company size, industry, location, and job title",
          "Find verified direct email addresses of CEOs, Founders, and Sales Directors",
          "Double-check every email through verification tools so zero emails bounce",
        ],
        deliverableTag: "Verified Client List Ready",
        tools: ["Apollo Database", "Clearbit", "ZeroBounce"],
      },
      {
        stepNumber: 3,
        phase: "MESSAGE WRITING",
        dayRange: "Days 07 – 09",
        title: "Writing Messages That Actually Get Replies",
        subtitle: "Friendly, short, peer-to-peer emails—no pushy sales pitches",
        description:
          "People hate long, boring sales pitches. We write short, personalized 3-to-4 sentence emails that feel like a message from a trusted peer, highlighting how you solve their biggest headache.",
        tasks: [
          "Write 3 different message angles tailored to your specific service",
          "Add personalized opening lines referencing each prospect's company",
          "Review and approve all copy together before a single email is sent",
        ],
        deliverableTag: "Approved Message Templates",
        tools: ["Copywriting Team", "Client Approval Portal"],
      },
      {
        stepNumber: 4,
        phase: "CAMPAIGN LAUNCH",
        dayRange: "Days 10 – 12",
        title: "Starting the Campaign & Answering Replies",
        subtitle: "Sending emails in steady daily batches and capturing interested responses",
        description:
          "We start sending emails in controlled batches. As soon as a prospect replies asking for more info or a price, our team or automation immediately sends your calendar link.",
        tasks: [
          "Gradually send 30–50 personalized emails per day across safe accounts",
          "Monitor inbox replies daily and handle common questions fast",
          "Book interested buyers straight into your calendar with full background notes",
        ],
        deliverableTag: "Meetings Being Booked",
        tools: ["Inbox Manager", "Calendar Booking (Calendly/HubSpot)"],
      },
      {
        stepNumber: 5,
        phase: "FINISH // SCALING RESULTS",
        dayRange: "Days 13 – 14+",
        title: "Double Down on Winning Messages & Grow Sales",
        subtitle: "Weekly reports and continuous adjustments to keep your calendar full",
        description:
          "We look at which emails brought the most calls and closed deals, and scale those up. You get steady, predictable calls each week so your sales team can focus on closing.",
        tasks: [
          "Weekly performance recap: emails sent, replies received, calls booked",
          "Scale up the best-performing messages to bring in more appointments",
          "Ongoing campaign management under our 30-Day performance guarantee",
        ],
        deliverableTag: "Consistent Monthly Client Flow",
        tools: ["Weekly Report Dashboard", "Client Success Manager"],
      },
    ],
  },

  "linkedin-outreach": {
    id: "linkedin-outreach",
    category: "marketing",
    categoryLabel: "Marketing & Lead Acquisition",
    name: "LinkedIn Executive Outreach",
    tagline: "Turn your LinkedIn profile into a client magnet that brings high-ticket deals",
    heroBadge: "B2B EXECUTIVE NETWORKING",
    description:
      "We transform your LinkedIn profile into an executive authority hub and build direct relationships with target CEOs and business owners. We handle the connection requests, friendly conversations, and meeting bookings for you.",
    highlightStats: [
      { label: "Connection Rate", value: "35%+", helper: "More than 1 in 3 accept your invite" },
      { label: "Response Rate", value: "24%", helper: "Conversations started smoothly" },
      { label: "New Pipeline", value: "$300k+", helper: "Average deals generated over 90 days" },
    ],
    deliverables: [
      "Complete professional makeover for your LinkedIn profile (banner, headline, bio)",
      "Daily targeted connection requests sent to pre-screened executives in your niche",
      "Natural conversational messages that build rapport and invite them to a quick chat",
      "Weekly thought-leadership posts written for you to keep your name top-of-mind",
      "Manual inbox chat monitoring so interested leads are forwarded directly to you",
    ],
    techStack: ["LinkedIn Sales Navigator", "Expandi", "HeyReach", "Taplio", "HubSpot"],
    slaGuarantee: "Guaranteed minimum 200+ targeted executive connections and 12+ qualified sales calls.",
    roadSteps: [
      {
        stepNumber: 1,
        phase: "START // PROFILE UPGRADE",
        dayRange: "Days 01 – 03",
        title: "Making Your Profile Look Trustworthy",
        subtitle: "First impressions matter—we turn your profile into a client-converting page",
        description:
          "When a CEO clicks on your profile, they should immediately see that you are a credible professional who helps companies like theirs succeed.",
        tasks: [
          "Design a branded, modern header banner with clear customer results",
          "Rewrite your headline and About section focusing on the problems you solve",
          "Pin your top customer testimonials and case studies to the Featured section",
        ],
        deliverableTag: "Executive Profile Ready",
        tools: ["Figma Design", "LinkedIn Profile Editor"],
      },
      {
        stepNumber: 2,
        phase: "TARGET CLIENT LIST",
        dayRange: "Days 04 – 06",
        title: "Finding the Right People to Connect With",
        subtitle: "Targeting owners and executives who actually make buying decisions",
        description:
          "We use advanced LinkedIn search tools to pinpoint owners and directors in your target industries so every invitation goes to someone who can afford your service.",
        tasks: [
          "Filter by company revenue, number of employees, industry, and location",
          "Identify leaders who recently joined their company or just raised funding",
          "Save clean contact lists ready for outreach",
        ],
        deliverableTag: "Target List Approved",
        tools: ["LinkedIn Sales Navigator"],
      },
      {
        stepNumber: 3,
        phase: "CONVERSATION SCRIPTS",
        dayRange: "Days 07 – 09",
        title: "Writing Friendly, Non-Pushy Messages",
        subtitle: "Starting genuine business conversations without spamming",
        description:
          "Nobody likes unsolicited sales pitches on LinkedIn. We write friendly messages that start a conversation around an industry topic or offer valuable insights first.",
        tasks: [
          "Craft warm connection notes with high acceptance rates",
          "Prepare 2 natural follow-up messages that share helpful advice",
          "Set up simple triggers to offer a quick 15-minute introductory call",
        ],
        deliverableTag: "Message Scripts Approved",
        tools: ["Notion Message Playbook"],
      },
      {
        stepNumber: 4,
        phase: "DAILY OUTREACH",
        dayRange: "Days 10 – 12",
        title: "Sending Daily Invites & Chat Management",
        subtitle: "We send 20–25 invites daily and answer incoming chats for you",
        description:
          "Our system safely sends connection invites every business day. When someone accepts and replies, we continue the conversation and guide them to book a call on your calendar.",
        tasks: [
          "Automate safe daily connection sending within LinkedIn limits",
          "Check replies multiple times a day so no interested lead is left waiting",
          "Send your calendar link when someone asks for details or a demo",
        ],
        deliverableTag: "Outreach Live & Active",
        tools: ["Safe Cloud Outreach Engine", "Slack Alerts"],
      },
      {
        stepNumber: 5,
        phase: "FINISH // POSTING & EXPANSION",
        dayRange: "Days 13 – 14+",
        title: "Weekly Posts & Ongoing Relationships",
        subtitle: "Stay top-of-mind with your newly connected network of buyers",
        description:
          "We publish helpful posts on your profile each week. Your new connections see your posts in their feed, building trust and generating warm inbound inquiries over time.",
        tasks: [
          "Publish 2–3 client-focused educational posts each week",
          "Track which prospects viewed your profile and follow up with them",
          "Provide monthly reports showing new connections, calls booked, and pipeline value",
        ],
        deliverableTag: "Ongoing Inbound Sales Flow",
        tools: ["Content Scheduler", "Monthly Sales Report"],
      },
    ],
  },

  "social-media": {
    id: "social-media",
    category: "marketing",
    categoryLabel: "Marketing & Lead Acquisition",
    name: "Social Media & Brand Authority",
    tagline: "Build a strong, respected brand on LinkedIn, X, and YouTube without lifting a finger",
    heroBadge: "CONTENT THAT BUILDS TRUST",
    description:
      "We handle your complete social media presence. We research, write, and design high-quality posts, graphics, and video snippets that establish you as the go-to expert in your field and attract inbound customer inquiries.",
    highlightStats: [
      { label: "Profile Views", value: "+380%", helper: "More prospective clients discovering you" },
      { label: "Consistency", value: "20 posts/mo", helper: "Done for you every single month" },
      { label: "Time Saved", value: "15 hrs/wk", helper: "Zero writing or editing required from you" },
    ],
    deliverables: [
      "Monthly content plan with posts tailored to your exact target audience",
      "Professional graphic carousels, charts, and branded visual cards",
      "Written posts that sound just like you and highlight your company's wins",
      "Scheduled publishing at peak times when your clients are active",
      "Monthly reports showing follower growth, engagement, and incoming leads",
    ],
    techStack: ["Figma", "Canva Pro", "Typefully", "Buffer", "LinkedIn", "Twitter/X"],
    slaGuarantee: "Guaranteed minimum 20 high-quality published posts and noticeable audience growth every month.",
    roadSteps: [
      {
        stepNumber: 1,
        phase: "START // BRAND INTERVIEW",
        dayRange: "Days 01 – 03",
        title: "Understanding Your Voice & Story",
        subtitle: "A quick 30-minute chat to extract your expertise, customer stories, and style",
        description:
          "We interview you to learn about your business, past client successes, and the common questions your buyers ask. We use this to write content that feels 100% authentic to you.",
        tasks: [
          "30-minute discovery call to capture your tone and opinions",
          "Identify 4 core topics your customers care about the most",
          "Design branded color templates and visual layouts for your posts",
        ],
        deliverableTag: "Brand Voice Document Ready",
        tools: ["Zoom/Meet", "Figma Design"],
      },
      {
        stepNumber: 2,
        phase: "CONTENT CREATION",
        dayRange: "Days 04 – 07",
        title: "Writing & Designing the Month's Posts",
        subtitle: "We prepare 20 ready-to-publish posts with clean graphics and stories",
        description:
          "Our copywriters and designers produce a full month of engaging posts: educational tips, client transformations, infographics, and advice that attracts ideal clients.",
        tasks: [
          "Write 15 engaging text posts sharing practical advice",
          "Design 5 eye-catching graphic carousels and visual breakdowns",
          "Share the complete draft in a simple portal for your quick review and approval",
        ],
        deliverableTag: "Full Month of Posts Ready",
        tools: ["Notion Review Board", "Canva/Figma"],
      },
      {
        stepNumber: 3,
        phase: "SCHEDULING & AUTOMATION",
        dayRange: "Days 08 – 10",
        title: "Automated Scheduling at Peak Times",
        subtitle: "Posts go live automatically when your target audience is online",
        description:
          "Once you approve the content, we schedule everything in advance. Posts automatically publish to your LinkedIn and X profiles at the best times for maximum visibility.",
        tasks: [
          "Connect your LinkedIn and X profiles to our publishing tool",
          "Set up automatic publishing schedules (morning & afternoon peaks)",
          "Format posts so they display perfectly on mobile phones",
        ],
        deliverableTag: "Automated Publishing Active",
        tools: ["Typefully", "Buffer Scheduler"],
      },
      {
        stepNumber: 4,
        phase: "ENGAGEMENT SPRINT",
        dayRange: "Days 11 – 12",
        title: "Interacting with Target Accounts",
        subtitle: "Commenting on key industry discussions to get more eyes on your brand",
        description:
          "We leave thoughtful comments on posts by prospective clients and industry leaders. When they see smart, helpful comments, they click over to your profile and discover your business.",
        tasks: [
          "Identify 20 key industry accounts where your buyers hang out",
          "Leave genuine, insightful comments that showcase your knowledge",
          "Reply to comments on your own posts to keep the conversation going",
        ],
        deliverableTag: "Active Community Presence",
        tools: ["LinkedIn Feed", "Engagement Tracker"],
      },
      {
        stepNumber: 5,
        phase: "FINISH // LEAD CONVERSION",
        dayRange: "Days 13 – 14+",
        title: "Turning Likes & Followers into Paying Customers",
        subtitle: "Guiding interested followers into direct message chats and booked calls",
        description:
          "We track who frequently likes and comments on your posts. If an ideal client is engaging regularly, we reach out with a friendly note inviting them to learn more.",
        tasks: [
          "Identify engaged followers who fit your ideal customer profile",
          "Send personalized direct messages offering free audits or helpful guides",
          "Deliver monthly performance reports tracking leads and reach",
        ],
        deliverableTag: "Inbound Pipeline Generator",
        tools: ["Monthly Analytics Report", "Lead Tracker"],
      },
    ],
  },

  "lead-generation": {
    id: "lead-generation",
    category: "marketing",
    categoryLabel: "Marketing & Lead Acquisition",
    name: "Full-Funnel Lead Generation",
    tagline: "Complete hands-off system that brings interested buyers straight to your sales team",
    heroBadge: "ALL-IN-ONE GROWTH SYSTEM",
    description:
      "Our flagship end-to-end client acquisition service. We combine targeted ads, direct cold outreach, fast-loading landing pages, and smart follow-ups to consistently fill your pipeline with pre-qualified buyers.",
    highlightStats: [
      { label: "Sales Pipeline Added", value: "3.9x", helper: "Average increase in sales opportunities" },
      { label: "Turnkey Setup", value: "14 Days", helper: "Fully built, tested, and launched in 2 weeks" },
      { label: "Cost Per Lead", value: "-42%", helper: "Saving budget by filtering out wrong-fit clicks" },
    ],
    deliverables: [
      "Complete multi-channel strategy covering Google search, LinkedIn, and cold email",
      "High-converting landing page built specifically to turn clicks into booked consultations",
      "Automated prospect pre-screening so your reps only talk to serious buyers",
      "Instant calendar notifications and automated meeting reminders to prevent no-shows",
      "Protected by our 30-Day Performance Guarantee: targets met or we work for free",
    ],
    techStack: ["Google Ads", "LinkedIn Ads", "React Landing Pages", "Apollo", "HubSpot CRM", "Slack"],
    slaGuarantee: "Guaranteed minimum qualified sales pipeline within 30 days of launch, or 100% free work.",
    roadSteps: [
      {
        stepNumber: 1,
        phase: "START // CUSTOMER AUDIT",
        dayRange: "Days 01 – 03",
        title: "Defining Your High-Paying Customer",
        subtitle: "We pinpoint who has the money, the need, and the urgency to buy from you",
        description:
          "We sit down with you to review your past best customers. We look at why they bought, what they paid, and what convinced them, so we can go find 50 more just like them.",
        tasks: [
          "Analyze your top 5 most profitable past client accounts",
          "Identify the exact job titles who sign the contract and pay the invoice",
          "Set up CRM stages so you can track every lead from first click to paid deal",
        ],
        deliverableTag: "Target Blueprint Approved",
        tools: ["CRM Setup", "Customer Persona Canvas"],
      },
      {
        stepNumber: 2,
        phase: "LANDING PAGE BUILD",
        dayRange: "Days 04 – 07",
        title: "Building Your Conversion Landing Page",
        subtitle: "A fast, modern page with clear proof and simple booking forms",
        description:
          "We build a dedicated web page focused 100% on getting prospective buyers to request a consultation. No confusing menus or distractions—just compelling reasons to book.",
        tasks: [
          "Write persuasive headlines and bullet points explaining your exact value",
          "Add client testimonials, 5-star ratings, and trust badges",
          "Embed an interactive calendar where clients pick a date and time in 30 seconds",
        ],
        deliverableTag: "Landing Page Live",
        tools: ["Modern Web Builder", "Calendar Sync"],
      },
      {
        stepNumber: 3,
        phase: "TRAFFIC IGNITION",
        dayRange: "Days 08 – 10",
        title: "Turning on Ads & Direct Outbound",
        subtitle: "Driving high-intent traffic and reaching out directly to target accounts",
        description:
          "We turn on campaigns that capture people actively searching for your service on Google, while simultaneously reaching out to verified executives via email and LinkedIn.",
        tasks: [
          "Launch exact-match Google Search ads for people actively looking to buy",
          "Start sending personalized cold outbound emails to whitelisted companies",
          "Monitor daily clicks, spend, and lead quality in real time",
        ],
        deliverableTag: "New Inbound Inflow",
        tools: ["Google Ads", "Smartlead", "LinkedIn Ads"],
      },
      {
        stepNumber: 4,
        phase: "AUTOMATED SCREENING",
        dayRange: "Days 11 – 12",
        title: "Pre-Screening Leads Before They Hit Your Calendar",
        subtitle: "Making sure you never waste 30 minutes on someone who can't afford you",
        description:
          "When someone fills out the form, our system automatically checks their company size, website, and budget. Only serious prospects who qualify get a spot on your calendar.",
        tasks: [
          "Collect company name, revenue, and primary goal on the booking form",
          "Automatically verify their company info in real-time databases",
          "Send automated SMS and email reminders so 90%+ of booked calls actually show up",
        ],
        deliverableTag: "Pre-Screened Calls Only",
        tools: ["Automated Form Vetting", "SMS Reminders"],
      },
      {
        stepNumber: 5,
        phase: "FINISH // REVENUE SCALING",
        dayRange: "Days 13 – 14+",
        title: "Daily Lead Delivery & 30-Day Guarantee",
        subtitle: "Your sales team takes the calls, closes the deals, and we handle the pipeline",
        description:
          "The system is now running on autopilot. Your sales calendar fills up with qualified prospect calls, and our engineers optimize the campaigns weekly to bring your cost per deal down.",
        tasks: [
          "Weekly strategy check-in: review calls held, offers made, and deals closed",
          "Shift ad budget to the keywords and audiences bringing the highest-paying deals",
          "Backed by our written 30-day guarantee to ensure complete peace of mind",
        ],
        deliverableTag: "Hands-Off Client Machine",
        tools: ["Weekly Report", "Performance Guarantee SLA"],
      },
    ],
  },

  websites: {
    id: "websites",
    category: "tech",
    categoryLabel: "Websites & Technology",
    name: "Modern Enterprise Websites",
    tagline: "Ultra-fast, beautiful websites that build instant trust and turn visitors into buyers",
    heroBadge: "HIGH-PERFORMANCE WEB DESIGN",
    description:
      "We build clean, modern websites that load instantly on all smartphones and computers. We write clear, simple copy that explains what you do in seconds, so visitors immediately understand your value and reach out.",
    highlightStats: [
      { label: "Mobile Speed Score", value: "99/100", helper: "Loads in under a second on any phone" },
      { label: "Visitor Engagement", value: "+60%", helper: "Clean navigation keeps visitors interested" },
      { label: "Full Ownership", value: "100% Yours", helper: "No locked platforms or monthly hostage fees" },
    ],
    deliverables: [
      "Custom modern design tailored to your industry (Figma prototype included)",
      "Built with high-speed modern tech (React / Tailwind) for instant loading",
      "100% mobile-friendly and looks crisp on every phone, tablet, and laptop",
      "Clear, persuasive copywriting written in plain English that sells your service",
      "Easy-to-use content editor so you can edit text and images anytime",
      "Full Google SEO setup so your business shows up when locals search for your services",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Hosting", "Google Analytics"],
    slaGuarantee: "Guaranteed 95+ Google speed score and 14-day completion from start to finish.",
    roadSteps: [
      {
        stepNumber: 1,
        phase: "START // SITEMAP & GOALS",
        dayRange: "Days 01 – 03",
        title: "Planning the Pages & Customer Journey",
        subtitle: "Deciding what pages you need and where buttons should lead",
        description:
          "We plan out the structure: Home, Services, About, Case Studies, and Contact. We make sure any visitor can find pricing, services, and booking buttons within 2 clicks.",
        tasks: [
          "Map out the exact pages your website needs to win deals",
          "Outline the main message and call-to-action for every page",
          "Gather your logo, photos, and current branding assets",
        ],
        deliverableTag: "Sitemap & Page Plan Ready",
        tools: ["Sitemap Blueprint", "Shared Google Drive"],
      },
      {
        stepNumber: 2,
        phase: "DESIGN PROTOTYPE",
        dayRange: "Days 04 – 07",
        title: "Designing the Visual Look & Feel",
        subtitle: "You see the full visual design before a single line of code is written",
        description:
          "We design high-fidelity visual mockups of your pages in Figma. You get to review the layout, colors, and fonts on your computer and phone, and give feedback.",
        tasks: [
          "Design desktop and mobile layouts for all key pages",
          "Select clean, modern typography and brand colors that look professional",
          "Make any revisions you request until you are 100% happy with the look",
        ],
        deliverableTag: "Visual Design Approved",
        tools: ["Figma Interactive Prototype"],
      },
      {
        stepNumber: 3,
        phase: "FAST DEVELOPMENT",
        dayRange: "Days 08 – 11",
        title: "Building the Website with High-Speed Tech",
        subtitle: "Clean code that loads under 1 second with smooth animations",
        description:
          "We turn the approved design into a real, functioning website. We use modern, clean code so the site loads lightning-fast and never lags or crashes.",
        tasks: [
          "Code the pages using modern React and Tailwind CSS",
          "Make every button, form, and mobile menu feel snappy and responsive",
          "Connect your contact forms directly to your email and CRM",
        ],
        deliverableTag: "Working Website on Private Link",
        tools: ["React Code", "Tailwind CSS", "Private Staging Link"],
      },
      {
        stepNumber: 4,
        phase: "TESTING & GOOGLE SEO",
        dayRange: "Days 12 – 13",
        title: "Testing on All Phones & Google Setup",
        subtitle: "Testing on iPhones, Androids, and laptops to make sure nothing breaks",
        description:
          "We test the website on multiple devices, check form submissions, and submit your new sitemap to Google so search engines start indexing your pages.",
        tasks: [
          "Test forms, buttons, and links across Safari, Chrome, and mobile browsers",
          "Run Google speed tests to verify a 95+ score",
          "Add meta tags, descriptions, and Google Search Console tags",
        ],
        deliverableTag: "Tested & SEO Ready",
        tools: ["Google PageSpeed", "Browser Testing"],
      },
      {
        stepNumber: 5,
        phase: "FINISH // GOING LIVE",
        dayRange: "Day 14",
        title: "Launching Your Website with Zero Downtime",
        subtitle: "Connecting your custom domain and handing over 100% ownership",
        description:
          "We connect your domain name (e.g. yourcompany.com), turn on free SSL security (the green padlock), and hand over all files and logins. It's 100% yours.",
        tasks: [
          "Point your domain to the new high-speed hosting server",
          "Verify SSL certificate is active for safe, secure browsing",
          "Provide a quick 10-minute video walkthrough showing you how to make edits",
        ],
        deliverableTag: "Website Live in Production",
        tools: ["Cloudflare Hosting", "Video Walkthrough"],
      },
    ],
  },

  "landing-pages-funnels": {
    id: "landing-pages-funnels",
    category: "tech",
    categoryLabel: "Websites & Technology",
    name: "Landing Pages & Conversion Funnels",
    tagline: "Single-focus web pages engineered to turn ad clicks into booked calls and sales",
    heroBadge: "BUILT TO SELL",
    description:
      "A normal website has too many links that distract visitors. We build dedicated, distraction-free landing pages that guide visitors step-by-step toward one single action: booking a call or buying your service.",
    highlightStats: [
      { label: "Conversion Lift", value: "+144%", helper: "More leads from the exact same ad budget" },
      { label: "Page Load Speed", value: "<0.4s", helper: "Stops mobile visitors from bouncing" },
      { label: "Form Completion", value: "68%", helper: "Simple, easy-to-fill interactive questions" },
    ],
    deliverables: [
      "High-converting standalone landing page designed specifically for your offer",
      "Persuasive sales copywriting with clear proof points and guarantees",
      "Interactive multi-step questionnaire that makes requesting a quote effortless",
      "Direct integration with your email, CRM, and calendar booking tools",
      "A/B split testing so we test two versions to see which one makes more sales",
    ],
    techStack: ["React", "Tailwind CSS", "Vercel / Cloudflare", "Google Tag Manager", "HubSpot"],
    slaGuarantee: "Guaranteed minimum +30% improvement in conversion rate compared to your current website.",
    roadSteps: [
      {
        stepNumber: 1,
        phase: "START // OFFER & ANGLE",
        dayRange: "Days 01 – 02",
        title: "Crafting an Irresistible Offer",
        subtitle: "Clarifying what you give, what it costs, and why clients should choose you",
        description:
          "Great landing pages win because of a clear, compelling offer. We help you package your service so prospective clients feel confident taking the next step.",
        tasks: [
          "Define the primary hook: Free Audit, Fixed-Price Trial, or Discovery Session",
          "List your strongest client case studies, statistics, and results",
          "Identify and address the top 3 objections buyers have before hiring you",
        ],
        deliverableTag: "Offer Blueprint Approved",
        tools: ["Offer Strategy Sheet"],
      },
      {
        stepNumber: 2,
        phase: "PAGE STRUCTURE",
        dayRange: "Days 03 – 05",
        title: "Drafting the Distraction-Free Flow",
        subtitle: "Header-to-footer flow designed to guide visitors directly to the form",
        description:
          "We remove normal menu links that let visitors wander off. Every headline, image, and testimonial is placed intentionally to build trust and move the visitor forward.",
        tasks: [
          "Write a punchy headline that states your biggest benefit in 8 words or less",
          "Place social proof and customer ratings immediately below the main title",
          "Design a simple 3-step question box (e.g. 'What is your goal?', 'Your name & email')",
        ],
        deliverableTag: "Funnel Wireframe Ready",
        tools: ["Figma Mockup"],
      },
      {
        stepNumber: 3,
        phase: "FAST PAGE BUILD",
        dayRange: "Days 06 – 08",
        title: "Coding the Ultra-Fast Page",
        subtitle: "Instant loading on mobile devices so you don't lose paid ad clicks",
        description:
          "Every second of delay on mobile loses 20% of buyers. We code the page cleanly so it opens in the blink of an eye when someone taps your ad.",
        tasks: [
          "Build the page using lightweight modern code",
          "Embed a responsive calendar widget where clients choose their meeting time",
          "Add smooth animations on buttons and testimonials to keep visitors engaged",
        ],
        deliverableTag: "Funnel Code Complete",
        tools: ["React", "Tailwind CSS", "Private Staging Link"],
      },
      {
        stepNumber: 4,
        phase: "TRACKING SETUP",
        dayRange: "Days 09 – 11",
        title: "Connecting Lead Tracking & Calendars",
        subtitle: "Making sure every form submission alerts your phone instantly",
        description:
          "We connect the form to your email, WhatsApp, or CRM. As soon as someone books, you get an instant ping with their name, email, and answers.",
        tasks: [
          "Set up instant email/Slack alerts the second a lead arrives",
          "Install conversion tracking pixels so Google and Facebook know which ads work",
          "Test test test: we submit test bookings to verify everything connects",
        ],
        deliverableTag: "Lead Alerts Verified",
        tools: ["Google Tag Manager", "HubSpot / Slack Alerts"],
      },
      {
        stepNumber: 5,
        phase: "FINISH // SPLIT TESTING",
        dayRange: "Days 12 – 14+",
        title: "A/B Testing & Maximizing Your Ad Spend",
        subtitle: "Testing 2 headlines to see which one brings you more customers for less money",
        description:
          "We test two slightly different versions of the page (e.g. Headline A vs. Headline B). The version that books more sales calls becomes the permanent winner.",
        tasks: [
          "Run a simple 50/50 test between two different headline hooks",
          "Track which version produces the highest number of booked meetings",
          "Keep the winner and continue optimizing to lower your cost per lead",
        ],
        deliverableTag: "Optimized Sales Funnel",
        tools: ["A/B Split Test Engine", "Weekly Report"],
      },
    ],
  },

  "custom-ai-solutions": {
    id: "custom-ai-solutions",
    category: "tech",
    categoryLabel: "Websites & Technology",
    name: "Custom AI Assistants & Workflow Bots",
    tagline: "Smart AI assistants that reply to inquiries 24/7, qualify leads, and save your team hours",
    heroBadge: "AI PRODUCTIVITY AUTOMATION",
    description:
      "We build custom AI assistants trained specifically on your business. They answer customer questions, qualify new inquiries instantly, check budgets, and book appointments—even while your team is asleep.",
    highlightStats: [
      { label: "Response Time", value: "<45 Sec", helper: "Answers leads instantly 24/7/365" },
      { label: "Hours Saved", value: "20+ hrs/wk", helper: "Eliminates repetitive manual admin work" },
      { label: "Answer Accuracy", value: "99%+", helper: "Trained only on your approved facts" },
    ],
    deliverables: [
      "Custom AI assistant trained exclusively on your business, services, and pricing rules",
      "Instant response on your website chat, contact forms, or email",
      "Automated lead screening: AI asks 3 quick questions to check if the lead is a good fit",
      "Automated appointment booking directly into your sales team's calendar",
      "Detailed summary sent to your phone/Slack before every call with the lead's background",
    ],
    techStack: ["OpenAI / Gemini", "Node.js / Python", "Slack Integration", "HubSpot", "Zapier"],
    slaGuarantee: "Guaranteed accurate responses and zero unauthorized promises or hallucinations.",
    roadSteps: [
      {
        stepNumber: 1,
        phase: "START // TRAINING DATA",
        dayRange: "Days 01 – 03",
        title: "Teaching the AI About Your Business",
        subtitle: "Feeding your services, FAQs, pricing guidelines, and common questions",
        description:
          "We gather your company information, past sales conversations, and FAQs. We teach the AI what you do, who you serve, and how you want it to talk to clients.",
        tasks: [
          "Collect your product descriptions, pricing rules, and common client questions",
          "Set strict rules on what the AI can answer and when it must hand off to a human",
          "Define the tone of voice (friendly, professional, helpful)",
        ],
        deliverableTag: "AI Knowledge Base Ready",
        tools: ["Knowledge Document", "AI Prompt Matrix"],
      },
      {
        stepNumber: 2,
        phase: "AI ASSISTANT BUILD",
        dayRange: "Days 04 – 07",
        title: "Building the Smart Assistant",
        subtitle: "Configuring the AI logic to chat naturally and answer accurately",
        description:
          "We program the assistant using modern AI models (like Gemini or OpenAI). It learns to answer natural questions, explain your services, and politely ask for contact info.",
        tasks: [
          "Configure the assistant to ask qualifying questions (budget, timeline, needs)",
          "Connect the assistant to your calendar so it can propose meeting times",
          "Implement safety guardrails so it never makes up false claims or discounts",
        ],
        deliverableTag: "Working AI Assistant Staged",
        tools: ["OpenAI/Gemini API", "Python/Node.js"],
      },
      {
        stepNumber: 3,
        phase: "CONNECTING YOUR CHAT & CRM",
        dayRange: "Days 08 – 10",
        title: "Connecting to Your Website & Phone",
        subtitle: "Embedding the assistant on your site and connecting to your notifications",
        description:
          "We place the AI chat widget on your website and wire it to send an alert to your phone or Slack whenever a promising client starts chatting.",
        tasks: [
          "Add clean, branded chat bubble to your website",
          "Set up automatic Slack or email alerts when high-value leads are chatting",
          "Save all lead answers and contact info straight into your CRM",
        ],
        deliverableTag: "Chat Widget Live",
        tools: ["Website Chat Widget", "Slack/Email Webhooks"],
      },
      {
        stepNumber: 4,
        phase: "TESTING WITH REAL QUESTIONS",
        dayRange: "Days 11 – 12",
        title: "Testing 100+ Real Scenarios",
        subtitle: "We throw tricky, difficult questions at the AI to ensure it handles them smoothly",
        description:
          "We simulate real client interactions: pricing questions, technical inquiries, and edge cases. We fine-tune its answers until it sounds completely polished.",
        tasks: [
          "Test with 100+ typical customer questions and verify answers are 100% accurate",
          "Ensure it gracefully passes complex questions to a human team member",
          "Verify calendar booking links work reliably every single time",
        ],
        deliverableTag: "Tested & Certified Safe",
        tools: ["Quality Assurance Suite"],
      },
      {
        stepNumber: 5,
        phase: "FINISH // AUTOPILOT LAUNCH",
        dayRange: "Days 13 – 14+",
        title: "24/7 Autopilot Operation",
        subtitle: "Your AI assistant works around the clock qualifying leads while you sleep",
        description:
          "You are now live. Every morning, you wake up to clean summaries of who visited your site, what they asked, and which calls were booked on your calendar.",
        tasks: [
          "Full production launch across all website pages",
          "Daily email recap showing conversations and new qualified bookings",
          "Ongoing monthly adjustments to keep answers up to date as your services evolve",
        ],
        deliverableTag: "24/7 AI Sales Assistant Active",
        tools: ["Daily Digest Email", "Monthly Tuneup"],
      },
    ],
  },

  seo: {
    id: "seo",
    category: "tech",
    categoryLabel: "Websites & Technology",
    name: "Google SEO & Search Rankings",
    tagline: "Show up on page 1 of Google when prospective clients search for your services",
    heroBadge: "ORGANIC GOOGLE DOMINANCE",
    description:
      "When people in your industry search on Google for solutions, your business should show up first. We optimize your website code, fix technical errors, and target high-intent keywords that bring paying customers month after month without paid ads.",
    highlightStats: [
      { label: "Organic Inquiries", value: "+310%", helper: "Customers finding you organically on Google" },
      { label: "Top 3 Rankings", value: "70%+", helper: "For key commercial search terms in your niche" },
      { label: "Long-Term Value", value: "Zero Ad Spend", helper: "Traffic keeps coming without paying per click" },
    ],
    deliverables: [
      "Complete technical audit fixing broken links, slow loading, and Google crawl errors",
      "High-intent keyword research targeting buyers ready to hire someone like you",
      "Clean Google structure (Schema markup) that gives you rich search snippets with stars",
      "Monthly search ranking reports showing your positions rising on Google",
      "Optimization for local and industry searches so the right clients find you first",
    ],
    techStack: ["Google Search Console", "Ahrefs", "Semrush", "Schema.org", "Next.js / Vite"],
    slaGuarantee: "Guaranteed improvement in search visibility and first-page keyword rankings within 90 days.",
    roadSteps: [
      {
        stepNumber: 1,
        phase: "START // TECHNICAL SITE AUDIT",
        dayRange: "Days 01 – 03",
        title: "Fixing Google Roadblocks",
        subtitle: "Finding and fixing hidden errors that stop Google from ranking your site",
        description:
          "If your website is slow or has broken links, Google penalizes you. We run an audit to fix errors, speed up the site, and make sure Google can easily read every page.",
        tasks: [
          "Check for broken links, missing pages (404 errors), and slow loading speeds",
          "Fix mobile layout issues so Google mobile indexing gives you top marks",
          "Set up Google Search Console and submit clean sitemaps",
        ],
        deliverableTag: "Technical Errors Fixed",
        tools: ["Google Search Console", "Screaming Frog Audit"],
      },
      {
        stepNumber: 2,
        phase: "BUYER KEYWORDS",
        dayRange: "Days 04 – 06",
        title: "Finding the Keywords Buyers Actually Type",
        subtitle: "Focusing on searches that lead to sales, not vanity traffic",
        description:
          "We don't care about generic words that bring students or hobbyists. We target buyer keywords—searches from people who have their credit card out and are ready to hire.",
        tasks: [
          "Research the top 20 keywords your actual clients search when hiring",
          "Analyze what your top 3 competitors are ranking for and where they are weak",
          "Map each target keyword to a specific page on your website",
        ],
        deliverableTag: "Keyword Strategy Approved",
        tools: ["Ahrefs Keyword Tool", "Semrush"],
      },
      {
        stepNumber: 3,
        phase: "ON-PAGE FIXES",
        dayRange: "Days 07 – 10",
        title: "Updating Titles, Text & Google Tags",
        subtitle: "Telling Google exactly what you do in clear, optimized language",
        description:
          "We update your page titles, descriptions, and headings so Google knows precisely what your business offers. We also add Schema tags that make your listing look premium.",
        tasks: [
          "Write clear page titles and meta descriptions that entice clicks on Google",
          "Add structured Schema markup (helps Google show star ratings and business details)",
          "Optimize heading tags (H1, H2) and image descriptions",
        ],
        deliverableTag: "Pages Fully Optimized",
        tools: ["Schema.org Tags", "On-Page Optimizer"],
      },
      {
        stepNumber: 4,
        phase: "AUTHORITY BOOST",
        dayRange: "Days 11 – 12",
        title: "Building Credibility & Trust Links",
        subtitle: "Getting trusted industry websites to mention and link to your business",
        description:
          "Google ranks sites that other reputable websites trust. We get your business featured in industry directories, partner blogs, and business profiles to build your authority.",
        tasks: [
          "List your business on high-authority industry directories",
          "Create internal links between your pages to guide visitors to your contact form",
          "Ensure your company address and phone number are consistent everywhere",
        ],
        deliverableTag: "Authority Signals Built",
        tools: ["Directory Distribution", "Link Verification"],
      },
      {
        stepNumber: 5,
        phase: "FINISH // RANKING GROWTH",
        dayRange: "Days 13 – 14+",
        title: "Tracking Rank Progress & Inbound Calls",
        subtitle: "Watch your pages climb to page 1 and enjoy free, compounding client traffic",
        description:
          "We monitor your Google rankings every single week. You receive clear, simple reports showing which keywords moved up and how many new clients found you organically.",
        tasks: [
          "Track daily keyword ranking movements on Google",
          "Deliver monthly visual reports in plain English showing traffic and leads",
          "Ongoing adjustments to expand rankings into adjacent service keywords",
        ],
        deliverableTag: "Compounding Google Rankings",
        tools: ["Google Ranking Dashboard", "Monthly Growth Summary"],
      },
    ],
  },
};
