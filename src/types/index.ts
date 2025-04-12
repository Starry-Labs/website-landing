export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface AppScreenshot {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface FormData {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

export interface BirthChart {
  ascendant: string;
  sun: string;
  moon: string;
  venus: string;
  mars: string;
  mercury: string;
  jupiter: string;
  saturn: string;
  houses: {
    [key: number]: string;
  };
  aspects: {
    id: number;
    planet1: string;
    planet2: string;
    aspect: string;
    influence: string;
  }[];
  interpretation: string;
}

export interface MarksChartData {
  relationship: string;
  compatibility: number;
  strengths: string[];
  challenges: string[];
  advice: string;
  keyAspects: {
    id: number;
    planet1: string;
    planet2: string;
    aspect: string;
    interpretation: string;
  }[];
}
