export interface HeroContent {
  badge: string;
  title: {
    main: string;
    highlight: string;
    continuation: string;
  };
  infoBox: {
    text: string;
    ctaText: string;
    ctaIcon: string;
  };
}

export interface Feature {
  title: string;
  description: string;
}

export const heroContentVariations: Record<string, HeroContent> = {
  "1": {
    badge: "Specifically Designed for Coworking Spaces",
    title: {
      main: "Automate",
      highlight: "payments, track dues,",
      continuation: "and remove the headaches from billing.",
    },
    infoBox: {
      text: "Collecting rent or booking fees can often lead to missed payments, delayed reminders, and manual follow-ups. Our platform helps you stay on top of your finances — without needing to micromanage them.",
      ctaText: "Book A Demo",
      ctaIcon: "→",
    },
  },
  "2": {
    badge: "Built for Modern Workspace Management",
    title: {
      main: "Streamline",
      highlight: "bookings, optimize space,",
      continuation: "and enhance member experience.",
    },
    infoBox: {
      text: "Managing desk reservations and meeting room bookings shouldn't be complicated. Our intuitive platform makes space management effortless while providing real-time insights into utilization patterns.",
      ctaText: "Get Started",
      ctaIcon: "→",
    },
  },
  "3": {
    badge: "Community-Focused Coworking Solutions",
    title: {
      main: "Connect",
      highlight: "members, build community,",
      continuation: "and grow your network.",
    },
    infoBox: {
      text: "Foster meaningful connections within your coworking space. From event management to member directories, create an environment where collaboration thrives and businesses grow together.",
      ctaText: "Learn More",
      ctaIcon: "→",
    },
  },
  "4": {
    badge: "Smart Analytics for Coworking Spaces",
    title: {
      main: "Analyze",
      highlight: "usage patterns, predict trends,",
      continuation: "and make data-driven decisions.",
    },
    infoBox: {
      text: "Transform your coworking space with powerful analytics. Track member behavior, optimize pricing strategies, and identify growth opportunities with comprehensive reporting tools.",
      ctaText: "View Analytics",
      ctaIcon: "→",
    },
  },
  "5": {
    badge: "All-in-One Coworking Platform",
    title: {
      main: "Manage",
      highlight: "everything seamlessly,",
      continuation: "from one powerful dashboard.",
    },
    infoBox: {
      text: "Why juggle multiple tools when you can have everything in one place? From member onboarding to maintenance requests, our comprehensive platform handles all aspects of coworking space management.",
      ctaText: "See Platform",
      ctaIcon: "→",
    },
  },
};

export const featureVariations: Record<string, Feature[]> = {
  "1": [
    {
      title: "Automated Payment Processing:",
      description:
        "Set up recurring payments for memberships, desk rentals, and meeting room bookings. Reduce manual invoicing and eliminate payment delays with automated reminders.",
    },
    {
      title: "Smart Due Tracking:",
      description:
        "Never miss a payment again with intelligent tracking systems that monitor outstanding dues and send timely notifications to both admins and members.",
    },
    {
      title: "Financial Reporting Dashboard:",
      description:
        "Get comprehensive insights into your revenue streams with detailed financial reports, cash flow analysis, and payment trend tracking.",
    },
    {
      title: "Multiple Payment Methods:",
      description:
        "Accept payments through various channels including credit cards, bank transfers, digital wallets, and mobile payment solutions for maximum convenience.",
    },
    {
      title: "Late Fee Management:",
      description:
        "Automatically calculate and apply late fees based on your custom policies, with transparent communication to members about additional charges.",
    },
    {
      title: "Cash Flow Prediction Agent:",
      description:
        "Predict cash flow trends to optimize decisions and plan for future growth with AI-powered financial forecasting tools.",
    },
  ],
  "2": [
    {
      title: "Real-time Space Availability:",
      description:
        "View live availability of desks, meeting rooms, and common areas with instant updates as bookings are made or cancelled throughout the day.",
    },
    {
      title: "Smart Booking System:",
      description:
        "Allow members to book spaces instantly through mobile apps or web portals, with automatic confirmation and calendar integration for seamless scheduling.",
    },
    {
      title: "Resource Optimization Analytics:",
      description:
        "Track space utilization patterns to identify peak hours, underused areas, and opportunities to maximize your space efficiency and revenue potential.",
    },
    {
      title: "Flexible Booking Rules:",
      description:
        "Set custom booking policies including advance notice requirements, maximum booking duration, and member-specific access levels for different space types.",
    },
    {
      title: "Integrated Calendar Management:",
      description:
        "Sync all bookings with Google Calendar, Outlook, and other popular calendar applications to prevent double-bookings and keep everyone organized.",
    },
    {
      title: "Member Self-Service Portal:",
      description:
        "Empower members to manage their own bookings, view availability, and modify reservations without requiring admin intervention or support.",
    },
  ],
  "3": [
    {
      title: "Event Management Platform:",
      description:
        "Create and manage networking events, workshops, and community gatherings with RSVP tracking, automated reminders, and attendance monitoring.",
    },
    {
      title: "Member Directory & Networking:",
      description:
        "Build a comprehensive member directory showcasing businesses, skills, and services to facilitate connections and collaboration opportunities.",
    },
    {
      title: "Community Bulletin Board:",
      description:
        "Share announcements, job postings, collaboration requests, and community news through an interactive digital bulletin board system.",
    },
    {
      title: "Collaboration Matching:",
      description:
        "Use smart algorithms to suggest potential collaborations based on member profiles, skills, and business needs to foster meaningful partnerships.",
    },
    {
      title: "Social Engagement Tools:",
      description:
        "Enable members to connect through chat features, discussion forums, and interest-based groups to build stronger community relationships.",
    },
    {
      title: "Community Analytics:",
      description:
        "Track engagement metrics, event attendance, and member interactions to understand community health and identify growth opportunities.",
    },
  ],
  "4": [
    {
      title: "Usage Pattern Analytics:",
      description:
        "Analyze how members use your space with detailed reports on peak hours, popular areas, and booking patterns to optimize operations and pricing.",
    },
    {
      title: "Revenue Optimization Insights:",
      description:
        "Identify revenue opportunities through data-driven recommendations on pricing strategies, space allocation, and service offerings.",
    },
    {
      title: "Member Behavior Tracking:",
      description:
        "Understand member preferences, usage habits, and satisfaction levels through comprehensive analytics to improve retention and experience.",
    },
    {
      title: "Predictive Demand Forecasting:",
      description:
        "Use machine learning to predict future demand patterns, helping you plan capacity, staffing, and resource allocation more effectively.",
    },
    {
      title: "Performance Benchmarking:",
      description:
        "Compare your space's performance against industry standards and similar coworking spaces to identify areas for improvement and growth.",
    },
    {
      title: "Custom Report Builder:",
      description:
        "Create tailored reports and dashboards that focus on the metrics most important to your business goals and decision-making processes.",
    },
  ],
  "5": [
    {
      title: "Unified Management Dashboard:",
      description:
        "Control all aspects of your coworking space from a single, intuitive dashboard that provides real-time insights and management capabilities.",
    },
    {
      title: "Member Lifecycle Management:",
      description:
        "Handle the complete member journey from initial inquiry and onboarding through renewal and retention with automated workflows and communications.",
    },
    {
      title: "Integrated Maintenance System:",
      description:
        "Streamline maintenance requests with automated ticketing, vendor management, and status tracking to resolve issues faster and keep tenants informed.",
    },
    {
      title: "Multi-location Support:",
      description:
        "Manage multiple coworking locations from a centralized platform with location-specific settings, reporting, and member management capabilities.",
    },
    {
      title: "API Integration Hub:",
      description:
        "Connect with your existing tools and services through robust API integrations, including accounting software, CRM systems, and communication platforms.",
    },
    {
      title: "Comprehensive Reporting Suite:",
      description:
        "Access detailed reports covering all aspects of your business including financials, occupancy, member satisfaction, and operational efficiency metrics.",
    },
  ],
};
