export interface Treatment {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  icon: string; // Lucide icon name
  duration: string;
  recovery: string;
  details: string[];
  whatIsThis?: string;
  whoIsItFor?: string[];
  processSteps?: string[];
  sessionCount?: string;
  specialFaqs?: { question: string; answer: string }[];
}

export interface CaseStudy {
  id: string;
  category: "gulus" | "beyazlatma" | "implant" | "zirkonyum" | "ortodonti";
  title: string;
  description: string;
  processInfo: string;
  duration: string;
  patientAge: number;
  tags: string[];
  beforeImage: string;
  afterImage: string;
  visualType?: string;
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  year: number;
  description: string;
  type: "egitim" | "sertifika" | "kongre";
}

export interface Review {
  id: string;
  patientName: string;
  treatment: string;
  comment: string;
  rating: number;
  date: string;
  isVerified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  readTime: string;
  category: string;
  publishDate: string;
  author: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Appointment {
  fullName: string;
  phone: string;
  email: string;
  treatmentType: string;
  preferredDate: string;
  preferredTime: string;
  complaint: string;
  kvkkAccepted: boolean;
}
