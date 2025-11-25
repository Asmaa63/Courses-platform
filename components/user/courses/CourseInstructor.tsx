'use client';

import Image from 'next/image';
import { Star, People, School } from '@mui/icons-material';
import { Instructor } from '@/types';

interface CourseInstructorProps {
  instructor: Instructor;
  locale: string;
}

export default function CourseInstructor({ instructor, locale }: CourseInstructorProps) {
  return (
    <div className="card">
      <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">
        {locale === 'ar' ? 'عن المدرب' : 'About the Instructor'}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Instructor Image */}
        <div className="flex-shrink-0">
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={150}
            height={150}
            className="rounded-2xl"
          />
        </div>

        {/* Instructor Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">{instructor.name}</h3>
          <p className="text-lg text-primary-600 mb-4">{instructor.title}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" />
              <span className="font-semibold text-neutral-900">{instructor.rating}</span>
              <span className="text-neutral-600">
                {locale === 'ar' ? 'تقييم المدرب' : 'Instructor Rating'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <People className="text-primary-500" />
              <span className="font-semibold text-neutral-900">
                {instructor.studentsCount?.toLocaleString()}
              </span>
              <span className="text-neutral-600">
                {locale === 'ar' ? 'طالب' : 'Students'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <School className="text-secondary-500" />
              <span className="font-semibold text-neutral-900">{instructor.coursesCount}</span>
              <span className="text-neutral-600">
                {locale === 'ar' ? 'دورات' : 'Courses'}
              </span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-neutral-700 leading-relaxed">{instructor.bio}</p>
        </div>
      </div>
    </div>
  );
}