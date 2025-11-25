'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  People,
  AccessTime,
  PlayCircleOutline,
  Bookmark,
  BookmarkBorder,
} from '@mui/icons-material';
import { useState } from 'react';
import { Course, CourseLevel } from '@/types';

interface CourseCardProps {
  course: Course;
  locale: string;
}

export default function CourseCard({ course, locale }: CourseCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

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
    <div className="card-course group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={locale === 'ar' ? course.titleAr : course.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full btn-primary flex items-center justify-center gap-2">
              <PlayCircleOutline />
              {locale === 'ar' ? 'معاينة' : 'Preview'}
            </button>
          </div>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsBookmarked(!isBookmarked);
          }}
          className="absolute top-4 right-4 rtl:left-4 rtl:right-auto w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform z-10"
        >
          {isBookmarked ? (
            <Bookmark className="text-primary-500" />
          ) : (
            <BookmarkBorder className="text-neutral-600" />
          )}
        </button>

        {/* Level Badge */}
        <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto">
          <span className={`badge ${levelColors[course.level]}`}>
            {levelLabels[course.level]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-sm text-primary-600 font-semibold">
          {course.category}
        </span>

        {/* Title */}
        <Link href={`/${locale}/user/course/${course.id}`}>
          <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {locale === 'ar' ? course.titleAr : course.title}
          </h3>
        </Link>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
          <div className="flex items-center gap-1">
            <AccessTime className="text-lg" />
            <span>
              {course.duration} {locale === 'ar' ? 'ساعة' : 'hrs'}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <PlayCircleOutline className="text-lg" />
            <span>
              {course.lessonsCount} {locale === 'ar' ? 'درس' : 'lessons'}
            </span>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-200">
          <Image
            src={course.instructor.image}
            alt={course.instructor.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              {course.instructor.name}
            </p>
            <p className="text-xs text-neutral-500">
              {locale === 'ar' ? 'مدرب' : 'Instructor'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="text-yellow-400 text-lg" />
              <span className="font-bold text-neutral-900">{course.rating}</span>
            </div>
            <span className="text-sm text-neutral-500">
              ({course.studentsCount.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="text-end">
            {course.price === 0 ? (
              <span className="text-xl font-bold text-success">
                {locale === 'ar' ? 'مجاني' : 'Free'}
              </span>
            ) : (
              <div>
                <span className="text-2xl font-bold text-primary-600">
                  {course.price}
                </span>
                <span className="text-sm text-neutral-600 mr-1 rtl:ml-1">
                  {locale === 'ar' ? 'جنيه' : 'EGP'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}