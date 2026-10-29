export interface ModuleItem {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  iconName: string;
  duration: string;
  summary: string;
  learningObjectives: string[];
  sections: {
    title: string;
    description: string;
    keyPoints: string[];
    example?: string;
  }[];
}

export interface BuyerPersonaData {
  name: string;
  avatarUrl?: string;
  tagline: string;
  demographics: {
    age: string;
    gender: string;
    location: string;
    occupation: string;
    education: string;
    incomeLevel: string;
    familyStatus: string;
  };
  psychographics: {
    interests: string[];
    values: string[];
    lifestyle: string;
  };
  scottFocus: {
    specificProblems: string[];
    goalsAndAspirations: string[];
    informationConsumptionHabits: string[];
    preferredContentFormats: string[];
    objectionsToPurchase: string[];
    contentSolutionPitch: string;
  };
  quote: string;
}

export interface EmpathyMapQuadrant {
  thinksAndFeels: string[];
  sees: string[];
  hears: string[];
  saysAndDoes: string[];
  pains: string[];
  gains: string[];
}

export interface EcuadorianCaseStudy {
  id: string;
  brandName: string;
  foundationYear: number;
  originCity: string;
  footprint: string;
  industry: string;
  tagline: string;
  summary: string;
  logoBadge: string;
  verifiedStatus: string;
  marketContext: string;
  buyerPersona: BuyerPersonaData;
  empathyMap: EmpathyMapQuadrant;
  scottContentStrategy: {
    title: string;
    pillarContent: string;
    tactic1: string;
    tactic2: string;
    metricOfSuccess: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
