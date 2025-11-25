'use client';

import { useState } from 'react';
import { ExpandMore, PlayCircle, Lock, AccessTime } from '@mui/icons-material';
import { Section, Lesson } from '@/types';

interface CourseCurriculumProps {
  curriculum: Section[];
  locale: string;
}

export default function CourseCurriculum({ curriculum, locale }: CourseCurriculumProps) {
  const [openSections, setOpenSections] = useState<string[]>([curriculum[0]?.id]);

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const totalLessons = curriculum.reduce(
    (acc, section) => acc + section.lessons.length,
    0
  );
  const totalDuration = curriculum.reduce(
    (acc, section) =>
      acc + section.lessons.reduce((sum: number, lesson: any) => sum + lesson.duration, 0),
    0
  );

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold text-neutral-900">
          {locale === 'ar' ? 'محتوى الدورة' : 'Course Curriculum'}
        </h2>
        <div className="text-sm text-neutral-600">
          {totalLessons} {locale === 'ar' ? 'درس' : 'lessons'} • {Math.floor(totalDuration / 60)}
          {locale === 'ar' ? ' ساعة' : 'h'} {totalDuration % 60}
          {locale === 'ar' ? ' دقيقة' : 'm'}
        </div>
      </div>

      <div className="space-y-3">
        {curriculum.map((section) => {
          const isOpen = openSections.includes(section.id);
          const sectionDuration = section.lessons.reduce(
            (sum: number, lesson: Lesson) => sum + lesson.duration,
            0
          );

          return (
            <div key={section.id} className="border border-neutral-200 rounded-xl overflow-hidden">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 bg-neutral-50 hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ExpandMore
                    className={`text-neutral-600 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                  <div className="text-left">
                    <h3 className="font-bold text-neutral-900">{section.title}</h3>
                    <p className="text-sm text-neutral-600">
                      {section.lessons.length} {locale === 'ar' ? 'دروس' : 'lessons'} •{' '}
                      {sectionDuration} {locale === 'ar' ? 'دقيقة' : 'min'}
                    </p>
                  </div>
                </div>
              </button>

              {/* Section Lessons */}
              {isOpen && (
                <div className="bg-white">
                  {section.lessons.map((lesson: Lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-4 border-t border-neutral-200 hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {lesson.isFree ? (
                          <PlayCircle className="text-primary-500" />
                        ) : (
                          <Lock className="text-neutral-400" />
                        )}
                        <div>
                          <p className="font-medium text-neutral-900">{lesson.title}</p>
                          {lesson.isFree && (
                            <span className="text-xs text-primary-600 font-semibold">
                              {locale === 'ar' ? 'معاينة مجانية' : 'Free Preview'}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <AccessTime className="text-lg" />
                        <span>{lesson.duration} {locale === 'ar' ? 'دقيقة' : 'min'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}