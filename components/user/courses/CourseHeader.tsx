'use client';

import Image from 'next/image';
import { Star, People, Update, Language, PlayCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

interface Instructor {
  id: string;
  name: string;
  image: string;
}

interface Course {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  thumbnail: string;
  category: string;
  level: CourseLevel;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  lastUpdated: string;
  language: string;
  instructor: Instructor;
}

interface CourseHeaderProps {
  course: Course;
  locale: string;
}

export default function CourseHeader({ course, locale }: CourseHeaderProps) {
  const levelColors: Record<CourseLevel, string> = {
    BEGINNER: 'bg-green-100 text-green-700',
    INTERMEDIATE: 'bg-yellow-100 text-yellow-700',
    ADVANCED: 'bg-red-100 text-red-700',
  };

  const levelLabels: Record<CourseLevel, string> = {
    BEGINNER: locale === 'ar' ? 'مبتدئ' : 'Beginner',
    INTERMEDIATE: locale === 'ar' ? 'متوسط' : 'Intermediate',
    ADVANCED: locale === 'ar' ? 'متقدم' : 'Advanced',
  };

  return (
    <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-12">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <span>{locale === 'ar' ? 'الرئيسية' : 'Home'}</span>
              <span>/</span>
              <span>{locale === 'ar' ? 'الدورات' : 'Courses'}</span>
              <span>/</span>
              <span className="text-white">{course.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {locale === 'ar' ? course.titleAr : course.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-white/90 mb-6">
              {locale === 'ar' ? course.descriptionAr : course.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400" />
                  <span className="font-bold">{course.rating}</span>
                </div>
                <span className="text-white/70">
                  ({course.reviewsCount.toLocaleString()}{' '}
                  {locale === 'ar' ? 'تقييم' : 'reviews'})
                </span>
              </div>

              {/* Students */}
              <div className="flex items-center gap-2 text-white/70">
                <People className="text-xl" />
                <span>
                  {course.studentsCount.toLocaleString()}{' '}
                  {locale === 'ar' ? 'طالب' : 'students'}
                </span>
              </div>

              {/* Level */}
              <span className={`badge ${levelColors[course.level]}`}>
                {levelLabels[course.level]}
              </span>
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Update className="text-lg" />
                <span>
                  {locale === 'ar' ? 'آخر تحديث:' : 'Last updated:'}{' '}
                  {course.lastUpdated}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Language className="text-lg" />
                <span>{course.language}</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/20">
              <Image
                src={course.instructor.image}
                alt={course.instructor.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-sm text-white/70">
                  {locale === 'ar' ? 'المدرب' : 'Instructor'}
                </p>
                <p className="font-semibold">{course.instructor.name}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={course.thumbnail}
                alt={course.title}
                width={600}
                height={400}
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <PlayCircle className="text-primary-500 text-5xl" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}