import { DefaultSession } from 'next-auth';

// Course Types
export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type OrderStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
export type UserRole = 'USER' | 'ADMIN' | 'INSTRUCTOR';

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  role: UserRole;
  createdAt: Date;
}

export interface Instructor {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  image: string;
  studentsCount?: number;
  coursesCount?: number;
  rating?: number;
}

export interface Course {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  thumbnail: string;
  category: string;
  level: CourseLevel;
  duration: number;
  lessonsCount: number;
  studentsCount: number;
  rating: number;
  instructor: Instructor;
  createdAt?: Date;
}

export interface CourseDetails extends Course {
  originalPrice?: number;
  videoPreview?: string;
  reviewsCount: number;
  lastUpdated: string;
  language: string;
  whatYouWillLearn?: string[];
  requirements?: string[];
  curriculum?: Section[];
  reviews?: Review[];
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  titleAr?: string;
  videoUrl?: string;
  duration: number;
  order?: number;
  isFree?: boolean;
  courseId?: string;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  progress: number;
  completedLessons: string[];
  enrolledAt: Date;
}

export interface Review {
  id: string;
  user: {
    name: string;
    image: string;
  };
  rating: number;
  comment: string;
  date: string;
}

// Extend NextAuth types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user'];
  }

  interface User {
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string;
  }
}