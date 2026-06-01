export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  href?: string;
};

export type ContactLink = {
  label: string;
  href: string;
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
  stats: StatItem[];
  work: {
    label: string;
    headline: string;
    subtext: string;
  };
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
