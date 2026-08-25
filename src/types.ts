export interface ProfileInfo {
  name: string;
  titles: string[];
  email: string;
  phone: string;
  location: string;
  currentInstitution: string;
  summary: string;
  availability: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  category: 'tech' | 'design' | 'ecommerce' | 'sales';
  description: string;
  highlights: string[];
  skills: string[];
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: 'Design & Dev' | 'E-Commerce' | 'Brand & Media' | 'Engineering';
  summary: string;
  problem: string;
  solution: string;
  contribution: string;
  technologies: string[];
  outcomes: string[];
  accentColor: string;
  visualTheme: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
    tool?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  shortName: string;
  period: string;
  location: string;
  focus: string[];
  description: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  nativeScript?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  awardee: string;
  designatedRole?: string;
  citation: string;
  location: string;
  verificationBadge: string;
  stampOrSignatureType: 'company_stamp' | 'ceo_signature';
  stampText?: string;
  signerTitle?: string;
  issueNote: string;
  skills: string[];
  themeColor: string;
  imagePath?: string;
  alternativeImagePaths?: string[];
}
