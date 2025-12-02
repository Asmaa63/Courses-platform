'use client';

import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Person, Email, CalendarToday, Edit, School } from '@mui/icons-material';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const locale = useLocale();
  const router = useRouter();
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/${locale}/login`);
    }
  }, [status, locale, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!session) return null;

  // Get user initials
  const getUserInitials = (name: string) => {
    const names = name.trim().split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="card text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-4xl">
                {getUserInitials(session.user.name || 'User')}
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                {session.user.name}
              </h2>
              <p className="text-neutral-600 mb-4">{session.user.email}</p>
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                {session.user.role}
              </span>

              <hr className="my-6" />

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <Person className="text-neutral-600" />
                  <div>
                    <p className="text-sm text-neutral-500">
                      {locale === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </p>
                    <p className="font-semibold text-neutral-900">{session.user.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Email className="text-neutral-600" />
                  <div>
                    <p className="text-sm text-neutral-500">
                      {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </p>
                    <p className="font-semibold text-neutral-900">{session.user.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarToday className="text-neutral-600" />
                  <div>
                    <p className="text-sm text-neutral-500">
                      {locale === 'ar' ? 'عضو منذ' : 'Member Since'}
                    </p>
                    <p className="font-semibold text-neutral-900">
                      {new Date().toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US')}
                    </p>
                  </div>
                </div>
              </div>

              <button className="btn-outline w-full mt-6 flex items-center justify-center gap-2">
                <Edit />
                {locale === 'ar' ? 'تعديل الملف الشخصي' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Learning */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-neutral-900">
                  {locale === 'ar' ? 'دوراتي' : 'My Courses'}
                </h3>
                <School className="text-primary-500 text-3xl" />
              </div>

              {enrollments.length === 0 ? (
                <div className="text-center py-12">
                  <School className="text-neutral-400 text-6xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {locale === 'ar' ? 'لم تشترك في أي دورة بعد' : 'No courses yet'}
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    {locale === 'ar'
                      ? 'ابدأ رحلتك التعليمية بالاشتراك في دورة'
                      : 'Start your learning journey by enrolling in a course'}
                  </p>
                  <button
                    onClick={() => router.push(`/${locale}/user/courses`)}
                    className="btn-primary"
                  >
                    {locale === 'ar' ? 'تصفح الدورات' : 'Browse Courses'}
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Enrolled courses will be displayed here */}
                </div>
              )}
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <School className="text-primary-600 text-3xl" />
                </div>
                <p className="text-3xl font-bold text-neutral-900 mb-2">0</p>
                <p className="text-neutral-600">
                  {locale === 'ar' ? 'دورات مكتملة' : 'Completed Courses'}
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-100 flex items-center justify-center">
                  <CalendarToday className="text-secondary-600 text-3xl" />
                </div>
                <p className="text-3xl font-bold text-neutral-900 mb-2">0</p>
                <p className="text-neutral-600">
                  {locale === 'ar' ? 'ساعات تعليمية' : 'Learning Hours'}
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <Person className="text-green-600 text-3xl" />
                </div>
                <p className="text-3xl font-bold text-neutral-900 mb-2">0</p>
                <p className="text-neutral-600">
                  {locale === 'ar' ? 'شهادات' : 'Certificates'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}