export interface Skill {
  name: string;
  level: number; // 0-100
  iconName: string;
  category: "Frontend" | "Backend" | "Database" | "AI/ML" | "Cloud & DevOps";
  description?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  type: "Full-Time" | "Internship" | "Contract";
  current?: boolean;
  description: string[];
  skills: string[];
  logoPlaceholder?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI / ML" | "Full Stack" | "Frontend" | "Cloud & Microservices";
  description: string;
  detailedDescription: string[];
  techStack: string[];
  features: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
  architectureHighlights?: string[];
}

export interface StatMetric {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}
