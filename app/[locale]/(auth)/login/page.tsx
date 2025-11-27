'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Email, Lock, Visibility, VisibilityOff, Google } from '@mui/icons-material';

export default function LoginPage() {
  const locale = useLocale();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError(locale === 'ar' ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Invalid email or password');
      } else {
        router.push(`/${locale}/user/home`);
      }
    } catch (error) {
      setError(locale === 'ar' ? 'حدث خطأ ما. حاول مرة أخرى.' : 'Something went wrong. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-2">
          {locale === 'ar' ? 'مرحباً بعودتك!' : 'Welcome Back!'}
        </h1>
        <p className="text-neutral-600">
          {locale === 'ar'
            ? 'سجل دخولك للمتابعة في رحلتك التعليمية'
            : 'Sign in to continue your learning journey'}
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
          </label>
          <div className="relative">
            <Email className="absolute left-4 rtl:right-4 rtl:left-auto top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={
                locale === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'
              }
              className="input pl-12 rtl:pr-12 rtl:pl-4"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            {locale === 'ar' ? 'كلمة المرور' : 'Password'}
          </label>
          <div className="relative">
            <Lock className="absolute left-4 rtl:right-4 rtl:left-auto top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder={locale === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
              className="input pl-12 rtl:pr-12 pr-12 rtl:pl-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 rtl:left-4 rtl:right-auto top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-primary-500 rounded" />
            <span className="text-sm text-neutral-700">
              {locale === 'ar' ? 'تذكرني' : 'Remember me'}
            </span>
          </label>
          <Link
            href={`/${locale}/forgot-password`}
            className="text-sm text-primary-600 hover:text-primary-700 font-semibold"
          >
            {locale === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot Password?'}
          </Link>
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isLoading} className="btn-primary w-full">
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              {locale === 'ar' ? 'جاري تسجيل الدخول...' : 'Signing in...'}
            </span>
          ) : locale === 'ar' ? (
            'تسجيل الدخول'
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-neutral-500">
            {locale === 'ar' ? 'أو' : 'OR'}
          </span>
        </div>
      </div>

      {/* Social Login */}
      <button className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-neutral-300 rounded-xl font-semibold hover:bg-neutral-50 transition-colors">
        <Google className="text-red-500" />
        {locale === 'ar' ? 'تسجيل الدخول بجوجل' : 'Sign in with Google'}
      </button>

      {/* Sign Up Link */}
      <p className="text-center text-neutral-600 mt-6">
        {locale === 'ar' ? 'ليس لديك حساب؟' : "Don't have an account?"}{' '}
        <Link
          href={`/${locale}/register`}
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          {locale === 'ar' ? 'إنشاء حساب' : 'Sign Up'}
        </Link>
      </p>
    </div>
  );
}