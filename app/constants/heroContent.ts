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
    badge: "Built for Modern Workspace Management",
    title: {
      main: "Eliminate",
      highlight: "Double Bookings &",
      continuation: "Simplify Scheduling.",
    },
    infoBox: {
      text: "Cosync helps you manage your meeting rooms, workstations, and event areas with ease. Our smart booking system ensures that every reservation is precise—no overlaps, no confusion.",
      ctaText: "Book A Demo",
      ctaIcon: "→",
    },
  },
  "2": {
    badge: "Community-Focused Coworking Solutions",
    title: {
      main: "Connect",
      highlight: "members, build community,",
      continuation: "and grow your network.",
    },
    infoBox: {
      text: "Foster meaningful connections within your coworking space. From event management to member directories, create an environment where collaboration thrives and businesses grow together.",
      ctaText: "Book A Demo",
      ctaIcon: "→",
    },
  },
  "3": {
    badge: "Specifically Designed for Coworking spaces",
    title: {
      main: "Handle",
      highlight: "onboarding, documents, and communication in one place",
      continuation: "not across spreadsheets and emails.",
    },
    infoBox: {
      text: "Managing tenants involves paperwork, back-and-forth communication, and constant follow-ups — especially during onboarding or move-ins. Our platform simplifies this entire process.",
      ctaText: "Book A Demo",
      ctaIcon: "→",
    },
  },
  "4": {
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
  "5": {
    badge: "Specifically Designed for Coworking spaces",
    title: {
      main: "Keep your",
      highlight: "space well-maintained and your members happy",
      continuation: "with faster issue resolution.",
    },
    infoBox: {
      text: "From broken ACs to Wi-Fi outages, facility issues are bound to happen. But how quickly and transparently you respond makes all the difference.",
      ctaText: "See Platform",
      ctaIcon: "→",
    },
  },
};

export const featureVariations: Record<string, Feature[]> = {
  "1": [
    {
      title: "Choose how bookings happen:",
      description:
        "Let members book directly, or keep it admin-only. You can also mix both, depending on the room or resource.",
    },
    {
      title: "Block off unavailable days:",
      description:
        "Easily block bookings on holidays, renovation days, or any time your space isn’t open.",
    },
    {
      title: "Sync with Google Calendar:",
      description:
        "All bookings can connect with Google Calendar to keep everyone in sync, without double entries.",
    },
    {
      title: "Flexible Booking Rules:",
      description:
        "Set custom booking policies including advance notice requirements, maximum booking duration, and member-specific access levels for different space types.",
    },
    {
      title: "Hot desk bookings made simple:",
      description:
        "Members can see which desks are available in real-time and grab any open spot that fits their schedule.",
    },
  ],
  "2": [
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
      title: "Community Analytics:",
      description:
        "Track engagement metrics, event attendance, and member interactions to understand community health and identify growth opportunities.",
    },
  ],
  "3": [
    {
      title: "Smooth, digital onboarding:",
      description:
        "Tenants can apply online, upload documents like ID proof or contracts, and track the status of their application — all without needing to visit or call.",
    },
    {
      title: "Say goodbye to paperwork:",
      description:
        "Use e-signatures and online document storage. Whether it’s a lease agreement or renewal form, everything is digitized and easily accessible when needed.",
    },
    {
      title: "Track every tenant's journey:",
      description:
        "See where each tenant is — from inquiry to onboarding, active stay, and renewal. Keep all history in one timeline view so no detail gets missed.",
    },
    {
      title: "Centralize communication:",
      description:
        "Send updates, reminders, or urgent alerts to tenants right from the platform. No need to chase different channels",
    },
  ],
  "4": [
    {
      title: "Automatic billing and invoicing:",
      description:
        "Create recurring invoices for rent, utilities, or services. Set payment due dates and let the system send reminders before and after the deadline.",
    },
    {
      title: "Track all payments in real-time:",
      description:
        "View who has paid, what’s overdue, and who needs a reminder — all on a single dashboard.",
    },
    {
      title: "Download or export reports:",
      description:
        "Need to share data with your accountant or need to download report? One-click exports make it simple and fast.",
    },
    {
      title: "Link billing to bookings:",
      description:
        "If you offer flexible plans, you can charge based on actual desk or room usage. The platform automatically calculates and generates bills accordingly.",
    },
  ],
  "5": [
    {
      title: "Let tenants raise tickets anytime:",
      description:
        "Members can submit maintenance or support requests directly through the platform. They can attach photos and describe the issue clearly.",
    },
    {
      title: "Assign and prioritise issues easily:",
      description:
        "Once submitted, you can assign tickets to staff or vendors, set deadlines, and monitor progress.",
    },
    {
      title: "Keep a log of recurring issues:",
      description:
        "All issues are saved with time, status, and resolution history — so you can identify patterns and take long-term corrective action.",
    },
    {
      title: "Notify tenants automatically:",
      description:
        "Keep members updated on the status of their requests — without chasing.",
    },
  ],
};
