export type NavItem = {
  label: string;
  href: string;
};

export type CapabilityItem = {
  title: string;
  description: string;
  focusLabel: string;
  focusItems: string[];
  toolsLabel: string;
  tools: string[];
  impactLabel: string;
  impact: string[];
};

export type ProjectCategory = {
  label: string;
  href: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  highlights?: string[];
  categories?: ProjectCategory[];
  tags?: string[];
  image?: string;
  href?: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type RecentWorkContent = {
  label: string;
  headline: string;
  subtext: string;
  emptyState: string;
};

export type PortfolioContent = {
  brand: {
    name: string;
    initials: string;
  };
  nav: NavItem[];
  loading: {
    label: string;
  };
  hero: {
    label: string;
    title: string;
    roles: string[];
    description: string;
    videoUrl?: string;
  };
  backgroundStory?: {
    label: string;
    headline: string;
    body: string;
  };
  capabilities: CapabilityItem[];
  work: {
    label: string;
    headline: string;
    subtext: string;
  };
  recentWork?: RecentWorkContent;
  projects: ProjectItem[];
  contact: {
    headline: string;
    subtext: string;
    links: ContactLink[];
  };
  footer: {
    text: string;
  };
  meta: {
    title: string;
    description: string;
  };
};
