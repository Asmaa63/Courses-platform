import Link from 'next/link';
import { School } from '@mui/icons-material';

export default async function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Link
          href={`/${locale}/home`}
          className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-8"
        >
          <School className="text-primary-500 text-5xl" />
          <span className="text-3xl font-display font-bold gradient-text">
            {locale === 'ar' ? 'أكاديمية' : 'Academy'}
          </span>
        </Link>

        {/* Auth Content */}
        {children}
      </div>
    </div>
  );
}