import type { BlogPost, CaseStudy, Service } from "@/types/content";

export const siteStats = [
  { label: "Brands scaled", value: "50+" },
  { label: "Ad spend managed", value: "$2M+" },
  { label: "Client satisfaction focus", value: "100%" }
];

export const tools = ["Meta Ads", "Google Ads", "TikTok Ads", "Shopify", "HubSpot", "AWS", "GA4"];

export const services: Service[] = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Content systems that grow attention and trust.",
    description:
      "We plan, produce, and manage platform-native content that converts audience attention into qualified pipeline.",
    painPoints: ["Inconsistent posting", "Weak messaging", "Low engagement quality", "No clear attribution"],
    process: ["Audit + positioning", "Content calendar + production", "Publishing + community management", "Monthly strategy + reporting"],
    faq: [
      { q: "Do you create all content?", a: "Yes. Strategy, scripts, design, edits, and publishing workflow." },
      { q: "How soon do we see traction?", a: "Most brands see measurable directional lift within 4-8 weeks." }
    ],
    cta: "Get a social media growth plan"
  },
  {
    slug: "media-buying",
    title: "Media Buying",
    short: "Performance campaigns engineered for ROAS.",
    description:
      "Meta, Google, and TikTok campaigns with clear tracking, disciplined testing, and budget allocation based on real results.",
    painPoints: ["High CAC", "Unstable ROAS", "Weak tracking setup", "Budget waste"],
    process: ["Tracking architecture", "Offer + funnel alignment", "Creative + audience tests", "Scaling playbooks"],
    faq: [
      { q: "What ad budget should I start with?", a: "We define ranges based on your offer economics and funnel maturity." },
      { q: "Do you report in plain language?", a: "Yes. Revenue metrics first, vanity metrics second." }
    ],
    cta: "Book a paid ads strategy call"
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Custom high-converting websites, not templates.",
    description:
      "Fast, mobile-first websites and landing pages designed for Dubai brands, focused on conversion pathways and SEO architecture.",
    painPoints: ["Slow website", "Low conversion rate", "Poor UX on mobile", "SEO structure issues"],
    process: ["Discovery + wireframes", "UI system + copy structure", "Build + performance QA", "Launch + analytics handoff"],
    faq: [
      { q: "Do you use templates?", a: "No. Every project is custom-built around your funnel and positioning." },
      { q: "Can you integrate CRM and forms?", a: "Yes, we connect forms, events, and pipelines end to end." }
    ],
    cta: "Start your website project"
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    short: "Custom CRM workflows that stop lead leakage.",
    description:
      "We build CRM systems around your real sales process: lead capture, routing, follow-ups, dashboards, and attribution.",
    painPoints: ["Lead leakage", "Manual follow-up", "No pipeline visibility", "Messy reporting"],
    process: ["Sales process mapping", "Pipeline + automation build", "Integrations", "Team onboarding + optimization"],
    faq: [
      { q: "Can you integrate WhatsApp and email?", a: "Yes, depending on your stack and compliance requirements." },
      { q: "Will my team need technical skills?", a: "No. We design it for operators, not engineers." }
    ],
    cta: "Design my custom CRM"
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    short: "Operational systems for scaling companies.",
    description:
      "From inventory to HR and finance workflows, we develop ERP modules that improve operational clarity and execution speed.",
    painPoints: ["Disconnected operations", "Manual approvals", "Inventory confusion", "No executive visibility"],
    process: ["Requirements mapping", "Module architecture", "Build + integration", "Rollout + training"],
    faq: [
      { q: "Is this only for large enterprises?", a: "No. We build phased ERP scopes for SMBs ready to scale." },
      { q: "Cloud or on-prem?", a: "Both options are possible based on compliance and budget." }
    ],
    cta: "Plan your ERP roadmap"
  },
  {
    slug: "branding",
    title: "Branding",
    short: "Positioning and identity that compounds trust.",
    description:
      "Brand strategy, messaging, and visual systems built to make your offer memorable and premium in crowded markets.",
    painPoints: ["Weak positioning", "Generic visuals", "Inconsistent messaging", "Low perceived value"],
    process: ["Market + competitor analysis", "Messaging framework", "Visual identity system", "Rollout assets"],
    faq: [
      { q: "Can branding improve paid ads performance?", a: "Yes. Strong clarity and differentiation lower acquisition friction." },
      { q: "Do you provide brand guidelines?", a: "Yes, with practical usage standards for teams and partners." }
    ],
    cta: "Build a premium brand system"
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    short: "End-to-end lead systems that produce predictable pipeline.",
    description:
      "We combine offers, traffic, landing pages, and CRM automation to generate qualified opportunities consistently.",
    painPoints: ["Unpredictable leads", "Poor lead quality", "Slow response", "No funnel clarity"],
    process: ["Offer + audience strategy", "Landing + tracking build", "Campaign execution", "Pipeline optimization"],
    faq: [
      { q: "Do you guarantee lead volume?", a: "We guarantee disciplined execution and measurable reporting cadence." },
      { q: "Can this work for local UAE businesses?", a: "Yes. We tailor channels and messaging specifically for Dubai and UAE market demand patterns." }
    ],
    cta: "Launch my lead engine"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "restaurant-meta-growth",
    industry: "Restaurants & Cafes",
    title: "3x more reservations in 60 days",
    challenge: "Low weekday bookings and inconsistent creative output.",
    solution: "Localized Meta campaigns + short-form content + CRM follow-up sequence.",
    result: "3x reservation volume uplift",
    metric: "Cost per booking reduced 38%",
    quote: "Finally, ad spend turned into booked tables.",
    author: "Marco V. — Owner",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1280&q=72"
  },
  {
    slug: "real-estate-crm",
    industry: "Luxury Real Estate",
    title: "Lead response time reduced by 80%",
    challenge: "Leads were spread across channels with no fast assignment workflow.",
    solution: "Custom CRM with auto-routing, reminders, and pipeline dashboards.",
    result: "80% faster first response",
    metric: "Qualified appointments up 42%",
    quote: "We stopped losing hot leads to faster competitors.",
    author: "Dana E. — Managing Broker",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1280&q=72"
  },
  {
    slug: "retail-google-shopping",
    industry: "Retail eCommerce",
    title: "450% ROAS from Shopping campaigns",
    challenge: "Poor feed quality and unstable campaign profitability.",
    solution: "Feed cleanup, segmentation, and weekly bid/creative test loops.",
    result: "450% ROAS",
    metric: "Revenue per click up 31%",
    quote: "We scaled confidently because the numbers made sense.",
    author: "Priya N. — Founder",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1280&q=72"
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-most-agencies-fail-at-roi",
    title: "Why Most Agencies Fail at ROI (And How to Fix It)",
    excerpt: "A practical breakdown of turning vanity metrics into revenue-focused reporting.",
    category: "Strategy",
    tags: ["ROI", "CRO", "Reporting"],
    publishedAt: "2026-05-08",
    readTime: "6 min",
    content: [
      "Most teams report clicks, reach, and likes while executives need pipeline and revenue clarity.",
      "The fix starts with measurement architecture: source tracking, conversion events, and CRM stage mapping.",
      "When every campaign is tied to a stage progression metric, budget decisions become objective."
    ]
  },
  {
    slug: "uae-smb-lead-generation-playbook",
    title: "UAE SMB Lead Generation Playbook for 2026",
    excerpt: "How local businesses can combine paid media, landing pages, and CRM automation.",
    category: "Lead Generation",
    tags: ["UAE", "Paid Ads", "CRM"],
    publishedAt: "2026-05-05",
    readTime: "8 min",
    content: [
      "In UAE markets, speed-to-lead and trust signals are often stronger levers than pure ad volume.",
      "Winning funnels combine WhatsApp response workflows with high-clarity offer landing pages.",
      "A weekly optimization loop is what turns campaigns from testing mode into scaling mode."
    ]
  },
  {
    slug: "crm-vs-erp-for-growing-businesses",
    title: "CRM vs ERP for Growing Businesses: What to Build First?",
    excerpt: "A founder-focused guide to sequencing systems for growth without overbuilding.",
    category: "Technology",
    tags: ["CRM", "ERP", "Automation"],
    publishedAt: "2026-04-29",
    readTime: "7 min",
    content: [
      "Start with CRM when your primary constraint is lead flow and sales conversion.",
      "Move into ERP modules when operations become the bottleneck after demand increases.",
      "The right sequence is usually CRM-first, ERP-next, with clean integration planning."
    ]
  }
];

export const testimonials = [
  {
    name: "Jordan Lee",
    company: "Apex Dental Group",
    quote: "One roadmap, one accountable team, and finally clear revenue reporting.",
    initials: "JL"
  },
  {
    name: "Riley Ortiz",
    company: "Harborline Realty",
    quote: "Their CRM redesign alone paid for the engagement.",
    initials: "RO"
  },
  {
    name: "Samira Khalil",
    company: "Copper Spoon Bistro",
    quote: "We stopped guessing and started scaling what actually works.",
    initials: "SK"
  }
];

export const faqItems = [
  {
    q: "What makes PixelPulse different from typical agencies?",
    a: "We combine creative, paid media, website engineering, CRM, and ERP under one execution system."
  },
  {
    q: "Do you work with SMBs only?",
    a: "Mostly SMBs and growth-stage companies, with selected enterprise projects."
  },
  {
    q: "Is the strategy call really free?",
    a: "Yes, 30 minutes, no commitment. We map priorities and fit."
  },
  {
    q: "How fast can we launch?",
    a: "Campaigns can launch in 2-4 weeks. Custom systems depend on scope."
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$500-800/mo",
    subtitle: "For new businesses establishing digital presence",
    features: ["2 social platforms", "8-12 posts/month", "Basic monthly report"]
  },
  {
    name: "Professional",
    price: "$1,200-1,800/mo",
    subtitle: "Most popular for scaling businesses",
    features: ["3 platforms + paid ads", "Monthly photo session", "Reels + analytics reviews"],
    featured: true
  },
  {
    name: "Full Stack",
    price: "$3,000+/mo",
    subtitle: "Marketing + infrastructure + technical support",
    features: ["Everything in Professional", "Custom website/landing", "CRM setup + monthly support"]
  }
];

