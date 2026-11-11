export interface Person {
  name: string;
  title: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  url: string;
  person: Person;
  navigation: NavigationItem[];
  contact: {
    email?: string;
    location?: string;
  };
  socialLinks: SocialLink[];
  cvPath?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  href?: string;
  repositoryUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface Role {
  title: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description?: string;
  achievements?: string[];
}

export interface Company {
  name: string;
  location?: string;
  website?: string;
  roles: Role[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  achievements?: Achievement[];
}

export interface Achievement {
  title: string;
  description?: string;
  date?: string;
  href?: string;
}
