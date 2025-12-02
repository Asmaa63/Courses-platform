'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Home, Search, ArrowBack } from '@mui/icons-material';

export default function NotFound() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-display font-bold gradient-text animate-pulse">404</h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
          {locale === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-lg text-neutral-600 mb-8">
          {locale === 'ar'
            ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها'
            : "Sorry, the page you're looking for doesn't exist or has been moved"}
        </p>

        {/* Illustration */}
        <div className="mb-12">
          <svg
            className="w-64 h-64 mx-auto"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="250" r="200" fill="#E0F2FE" opacity="0.5" />
            <path
              d="M200 300 Q250 350 300 300"
              stroke="#0EA5E9"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="200" cy="220" r="15" fill="#0EA5E9" />
            <circle cx="300" cy="220" r="15" fill="#0EA5E9" />
          </svg>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/home`}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Home />
            {locale === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
          <Link
            href={`/${locale}/user/courses`}
            className="btn-outline flex items-center justify-center gap-2"
          >
            <Search />
            {locale === 'ar' ? 'تصفح الدورات' : 'Browse Courses'}
          </Link>
        </div>

        {/* Go Back Link */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 text-primary-600 hover:text-primary-700 font-semibold flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowBack />
          {locale === 'ar' ? 'العودة للصفحة السابقة' : 'Go Back to Previous Page'}
        </button>
      </div>
    </div>
  );
}