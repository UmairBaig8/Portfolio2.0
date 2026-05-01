// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "Umair Baig.",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Expertise", href: "#curriculum" },
    { label: "Projects", href: "#cinematic" },
    { label: "Highlights", href: "#alumni" },
    { label: "Connect", href: "#footer" },
  ],
  ctaText: "Let's Connect",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Umair Baig.",
  subtitleLine1: "Software Engineer | Full Stack Developer",
  subtitleLine2: "Building systems that scale. Solving problems that matter.",
  ctaText: "Explore my work",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "Domain Expertise",
  items: [
    {
      title: "Compliance & Security",
      slug: "compliance-security",
      description:
        "Built platforms for automated compliance validation and security posture assessment across heterogeneous infrastructure covering CIS, NIST, and custom enterprise policies.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Procurement Intelligence",
      slug: "procurement-intelligence",
      description:
        "Data-driven procurement intelligence systems that help organizations optimize spend and supplier strategies with AI-powered insights.",
      image: "images/capability-2.jpg",
    },
    {
      title: "ProcureAI Platform",
      slug: "procure-ai",
      description:
        "An AI-powered system enabling natural language interaction with procurement data through chat-based interfaces and context-aware analytics.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Systems & Architecture",
      slug: "systems-architecture",
      description:
        "Microservices architecture, event-driven systems, real-time dashboards, and scalable multi-tenant SaaS platforms for enterprise workloads.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Domain Expertise",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Capability not found.",
  capabilities: {
    "compliance-security": {
      title: "Compliance & Security Automation",
      subtitle: "Automated compliance validation and security posture assessment.",
      paragraphs: [
        "I built platforms focused on automated compliance validation and security posture assessment across heterogeneous infrastructure. The scope covered industry standards including CIS, NIST, and custom enterprise policies across Linux systems, Windows Servers, databases, network devices, and multi-environment enterprise infrastructure.",
        "I designed automated compliance engines that scan infrastructure, evaluate configurations, and map them to compliance controls. The policy-driven architecture enabled dynamic rule definitions for different standards including CIS, NIST, and custom frameworks.",
        "The risk analysis and reporting dashboards delivered actionable insights with severity classification and remediation suggestions. I also built continuous monitoring systems for ongoing compliance tracking instead of one-time audits, significantly reducing manual audit effort and enabling faster remediation cycles.",
      ],
    },
    "procurement-intelligence": {
      title: "Cognitive Procurement & Spend Intelligence",
      subtitle: "Data-driven procurement intelligence for enterprise optimization.",
      paragraphs: [
        "I worked on building data-driven procurement intelligence systems that help organizations optimize spend and supplier strategies. The platform covered core capabilities including supplier performance analysis, spend monitoring and anomaly detection, and tail spend identification and optimization.",
        "The system included intelligent spend classification using ML models, procurement KPI tracking and benchmarking, and benefit tracking and realization systems. This enabled organizations to move from reactive procurement to proactive, data-informed decision making.",
        "By leveraging advanced analytics and AI, the platform transformed raw procurement data into strategic insights, helping enterprises identify savings opportunities and optimize their supplier relationships across global operations.",
      ],
    },
    "procure-ai": {
      title: "ProcureAI - Flagship Product",
      subtitle: "AI-powered natural language interaction with procurement data.",
      paragraphs: [
        "ProcureAI is an AI-powered system designed to enable natural language interaction with procurement data. It features a chat-based interface for querying procurement insights, making complex data accessible to non-technical stakeholders.",
        "The platform provides context-aware analytics including spend trends, supplier insights, and KPIs through smart data retrieval and summarization. It delivers real-time responses using streaming architectures for a seamless user experience.",
        "The value delivered was significant: reduced dependency on traditional dashboards, empowered non-technical stakeholders to access procurement insights directly, and accelerated decision-making across the organization by making data accessible through natural conversation.",
      ],
    },
    "systems-architecture": {
      title: "Technical Expertise & Architecture",
      subtitle: "Full-stack engineering with focus on scalable systems.",
      paragraphs: [
        "My technical expertise spans frontend, backend, data, and systems architecture. On the frontend, I specialize in Angular with dynamic forms and modular architecture, React and React Native for interactive dashboards, and Tailwind CSS for scalable UI systems. I focus on component-driven architecture, dynamic UI generation from schemas, and performance optimization.",
        "On the backend, I work with FastAPI for high-performance APIs and async processing, and Node.js for scalable services. My core strengths include REST and WebSocket-based architectures, real-time streaming systems, JWT-based authentication with role-based access control, and multi-tenant system design.",
        "For data and analytics, I use ClickHouse for high-volume analytics and log processing, and PostgreSQL for relational data modeling. I build high-throughput data ingestion systems, analytical dashboards with filtering and drill-down, pattern detection and anomaly tracking, and data pipelines for structured and semi-structured data.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Technical Architecture",
  videoPath: "/videos/cinematic-vision.mp4",
  title: "Real-time systems, event-driven architectures, and scalable SaaS platforms.",
  description:
    "I design and build high-performance systems that handle millions of records with real-time streaming. My expertise spans FastAPI, ClickHouse, WebSockets, and microservices architecture. I focus on creating systems that are not just functional but performant, scalable, and maintainable. From multi-tenant SaaS platforms to real-time log monitoring systems, I bring a deep understanding of what it takes to build enterprise-grade infrastructure.",
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Key Projects",
  projects: [
    {
      title: "Spend Analytics Dashboard",
      year: "2024",
      discipline: "Data Analytics Platform",
      image: "images/research-1.jpg",
    },
    {
      title: "Real-time Log Monitoring",
      year: "2024",
      discipline: "System Observability",
      image: "images/research-2.jpg",
    },
    {
      title: "Dynamic Form Engine",
      year: "2023",
      discipline: "Frontend Architecture",
      image: "images/research-3.jpg",
    },
    {
      title: "Multi-tenant SaaS Platform",
      year: "2023",
      discipline: "Cloud Architecture",
      image: "images/research-4.jpg",
    },
    {
      title: "ProcureAI Chat Interface",
      year: "2024",
      discipline: "AI-Powered Application",
      image: "images/capability-3.jpg",
    },
    {
      title: "Compliance Engine",
      year: "2023",
      discipline: "Security Automation",
      image: "images/capability-1.jpg",
    },
    {
      title: "Spend Classification ML",
      year: "2024",
      discipline: "Machine Learning",
      image: "images/research-1.jpg",
    },
    {
      title: "Event-Driven Pipeline",
      year: "2024",
      discipline: "Backend Systems",
      image: "images/research-2.jpg",
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "Let's build something great together.",
  columns: [
    {
      title: "Connect",
      links: [
        "LinkedIn",
        "GitHub",
        "umairbaig.in",
      ],
    },
    {
      title: "Interests",
      links: [
        "AI-powered applications",
        "Data analytics & visualization",
        "System design & architecture",
        "Real-time collaboration",
      ],
    },
  ],
  copyright: "\u00A9 2025 Umair Baig. All rights reserved.",
  bottomLinks: [
    { label: "Portfolio", href: "https://umairbaig.in" },
    { label: "GitHub", href: "https://github.com/UmairBaig8" },
  ],
};
