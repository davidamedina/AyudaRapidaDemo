export interface User {
  id?: string;
  email: string;
  name: string;
  profileImage?: File;
  location: string;
  hourlyRate: number;
  description: string;
  categories: string[];
  experience: {
    years: number;
    highlights: string[];
    certifications: string[];
  };
  portfolio: {
    file: File;
    description: string;
    type: 'image' | 'video';
  }[];
  professionalLinks: {
    linkedin?: string;
    instagram?: string;
  };
  resume?: File;
  rating?: number;
  reviews?: number;
  verified?: boolean;
  createdAt?: Date;
}