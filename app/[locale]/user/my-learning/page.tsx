'use client';

import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { School, PlayCircle, CheckCircle } from '@mui/icons-material';

interface Enrollment {
  id: string;
  progress: number;
  course: {
    id: string;
    title: string;
    titleAr: string;
    thumbnail: string;
    duration: number;
    lessonsCount: number;
    instructor: {
      name: string;
    };
  };
}

export default function MyLearningPage() {
  const { data: session, status } = useSession();
  const locale = useLocale();
  const router = useRouter();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/${locale}/login`);
      return;
    }

    if (status === 'authenticated') {
      fetchEnrollments();
    }
  }, [status, locale, router]);

  const fetchEnrollments = async () => {
    try {
      const response = await fetch('/api/enrollments');
      if (response.ok) {
        const data = await response.json();
        setEnrollments(data);
      }
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-8">
          {locale === 'ar' ? 'دوراتي' : 'My Learning'}
        </h1>

        {enrollments.length === 0 ? (
          <div className="card text-center py-16">
            <School className="text-neutral-400 text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              {locale === 'ar' ? 'لم تشترك في أي دورة بعد' : 'No courses enrolled yet'}
            </h2>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
              {locale === 'ar'
                ? 'ابدأ رحلتك التعليمية بالاشتراك في دورة من مكتبتنا الواسعة'
                : 'Start your learning journey by enrolling in a course from our extensive library'}
            </p>
            <Link href={`/${locale}/user/courses`} className="btn-primary inline-block">
              {locale === 'ar' ? 'تصفح الدورات' : 'Browse Courses'}
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrollments.map((enrollment) => (
              <div key={enrollment.id} className="card-course group">
                <div className="relative h-48">
                  <Image
                    src={enrollment.course.thumbnail}
                    alt={enrollment.course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      href={`/${locale}/user/course/${enrollment.course.id}/learn`}
                      className="btn-primary flex items-center gap-2"
                    >
                      <PlayCircle />
                      {locale === 'ar' ? 'متابعة التعلم' : 'Continue Learning'}
                    </Link>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-neutral-900 mb-2 line-clamp-2">
                    {locale === 'ar' ? enrollment.course.titleAr : enrollment.course.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    {enrollment.course.instructor.name}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-neutral-600">
                        {locale === 'ar' ? 'التقدم' : 'Progress'}
                      </span>
                      <span className="font-semibold text-neutral-900">
                        {Math.round(enrollment.progress)}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary-500 h-full transition-all duration-300"
                        style={{ width: `${enrollment.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {enrollment.progress === 100 && (
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <CheckCircle className="text-lg" />
                      <span className="font-semibold">
                        {locale === 'ar' ? 'مكتملة' : 'Completed'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}