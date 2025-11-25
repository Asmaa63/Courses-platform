'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Person, Email, Lock, Visibility, VisibilityOff, Google } from '@mui/icons-material';

export default function RegisterPage() {
  const locale = useLocale();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError(locale === 'ar' ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        router.push(`/${locale}/login?registered=true`);
      } else {
        const data = await response.json();
        setError(data.message || (locale === 'ar' ? 'حدث خطأ ما' : 'Something went wrong'));
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
          {locale === 'ar' ? 'إنشاء حساب جديد' : 'Create New Account'}
        </h1>
        <p className="text-neutral-600">
          {locale === 'ar'
            ? 'انضم إلينا وابدأ رحلتك التعليمية'
            : 'Join us and start your learning journey'}
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
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            {locale === 'ar' ? 'الاسم الكامل' : 'Full Name'}
          </label>
          <div className="relative">
            <Person className="absolute left-4 rtl:right-4 rtl:left-auto top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={locale === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
              className="input pl-12 rtl:pr-12 rtl:pl-4"
              required
            />
          </div>
        </div>

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
              placeholder={locale === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
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
              minLength={6}
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

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            {locale === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
          </label>
          <div className="relative">
            <Lock className="absolute left-4 rtl:right-4 rtl:left-auto top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder={locale === 'ar' ? 'أعد إدخال كلمة المرور' : 'Re-enter your password'}
              className="input pl-12 rtl:pr-12 pr-12 rtl:pl-12"
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 rtl:left-4 rtl:right-auto top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 mt-1 accent-primary-500 rounded" required />
          <span className="text-sm text-neutral-700">
            {locale === 'ar' ? (
              <>
                أوافق على{' '}
                <Link href={`/${locale}/terms`} className="text-primary-600 hover:underline">
                  الشروط والأحكام
                </Link>{' '}
                و{' '}
                <Link href={`/${locale}/privacy`} className="text-primary-600 hover:underline">
                  سياسة الخصوصية
                </Link>
              </>
            ) : (
              <>
                I agree to the{' '}
                <Link href={`/${locale}/terms`} className="text-primary-600 hover:underline">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href={`/${locale}/privacy`} className="text-primary-600 hover:underline">
                  Privacy Policy
                </Link>
              </>
            )}
          </span>
        </label>

        {/* Submit Button */}
        <button type="submit" disabled={isLoading} className="btn-primary w-full">
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              {locale === 'ar' ? 'جاري إنشاء الحساب...' : 'Creating account...'}
            </span>
          ) : locale === 'ar' ? (
            'إنشاء حساب'
          ) : (
            'Create Account'
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
        {locale === 'ar' ? 'التسجيل بجوجل' : 'Sign up with Google'}
      </button>

      {/* Sign In Link */}
      <p className="text-center text-neutral-600 mt-6">
        {locale === 'ar' ? 'لديك حساب بالفعل؟' : 'Already have an account?'}{' '}
        <Link
          href={`/${locale}/login`}
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          {locale === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
        </Link>
      </p>
    </div>
  );
}