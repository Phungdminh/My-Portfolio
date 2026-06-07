import rawContent from '../../../../docs/02-content/content-output.json';
import type { PortfolioContent } from '../types/content';

const importedContent = rawContent as PortfolioContent;

export const content: PortfolioContent = {
  ...importedContent,
  nav: importedContent.nav ?? [],
  hero: {
    ...importedContent.hero,
    roles: importedContent.hero.roles ?? [],
    videoUrl: importedContent.hero.videoUrl ?? '',
  },
  capabilities: importedContent.capabilities ?? [],
  projects: importedContent.projects ?? [],
  contact: {
    ...importedContent.contact,
    links: importedContent.contact.links ?? [],
  },
};
