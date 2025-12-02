'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useSession, signOut } from 'next-auth/react';
import {
  Menu,
  Close,
  ShoppingCart,
  Person,
  Language,
  Dashboard,
  School,
  Search,
} from '@mui/icons-material';

function getUserInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const toggleLocale = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = path;
  };

  const navLinks = [
    { href: `/${locale}/user/home`, label: t('common.home') },
    { href: `/${locale}/user/courses`, label: t('common.courses') },
    { href: `/${locale}/user/about`, label: t('common.about') },
    { href: `/${locale}/user/contact`, label: t('common.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}/home`} className="flex items-center space-x-2 rtl:space-x-reverse">
            <School className="text-primary-500 text-4xl" />
            <span className="text-2xl font-display font-bold gradient-text">
              {locale === 'ar' ? 'أكاديمية' : 'Academy'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors ${
                  pathname === link.href
                    ? 'text-primary-500'
                    : 'text-neutral-700 hover:text-primary-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Search */}
            <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
              <Search className="text-neutral-600" />
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <Language className="text-neutral-600" />
              <span className="text-sm font-semibold text-neutral-700">
                {locale === 'ar' ? 'EN' : 'عربي'}
              </span>
            </button>

            {status === 'loading' ? (
              <div className="w-8 h-8 rounded-full bg-neutral-200 animate-pulse" />
            ) : session ? (
              <>
                {/* Cart */}
                <Link
                  href={`/${locale}/user/cart`}
                  className="relative p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  <ShoppingCart className="text-neutral-600" />
                  <span className="absolute -top-1 -right-1 rtl:-left-1 rtl:right-auto bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                </Link>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-3 rtl:space-x-reverse p-2 hover:bg-neutral-300 rounded-lg transition-colors "
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm border-50% bg-blue-600">
                      {session.user?.name && getUserInitials(session.user.name)}
                    </div>
                    <div className="hidden xl:block text-left rtl:text-right">
                      <p className="text-sm font-semibold text-neutral-900">{session.user?.name}</p>
                      {/* <p className="text-xs text-neutral-500">{session.user?.role}</p> */}
                    </div>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute top-full mt-2 right-0 rtl:left-0 rtl:right-auto w-56 bg-white rounded-xl shadow-lg border border-neutral-200 py-2">
                      <div className="px-4 py-3 border-b border-neutral-200">
                        <p className="font-semibold text-neutral-900">{session.user?.name}</p>
                        <p className="text-sm text-neutral-500">{session.user?.email}</p>
                      </div>
                      
                      <Link
                        href={`/${locale}/user/my-learning`}
                        className="flex items-center space-x-3 rtl:space-x-reverse px-4 py-2 hover:bg-neutral-50 transition-colors"
                      >
                        <School className="text-neutral-600 text-xl" />
                        <span className="text-neutral-700">{t('nav.myLearning')}</span>
                      </Link>

                      {session.user?.role === 'ADMIN' && (
                        <Link
                          href={`/${locale}/admin/dashboard`}
                          className="flex items-center space-x-3 rtl:space-x-reverse px-4 py-2 hover:bg-neutral-50 transition-colors"
                        >
                          <Dashboard className="text-neutral-600 text-xl" />
                          <span className="text-neutral-700">{t('nav.dashboard')}</span>
                        </Link>
                      )}

                      <Link
                        href={`/${locale}/user/profile`}
                        className="flex items-center space-x-3 rtl:space-x-reverse px-4 py-2 hover:bg-neutral-50 transition-colors "
                      >
                        <Person className="text-neutral-600 text-xl" />
                        <span className="text-neutral-700">{t('nav.profile')}</span>
                      </Link>

                      <hr className="my-2 border-neutral-200" />

                      <button
                        onClick={() => signOut({ callbackUrl: `/${locale}` })}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        {t('common.logout')}
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link href={`/${locale}/login`} className="btn-ghost">
                  {t('common.login')}
                </Link>
                <Link href={`/${locale}/register`} className="btn-primary">
                  {t('common.register')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <Close className="text-neutral-700 text-3xl" />
            ) : (
              <Menu className="text-neutral-700 text-3xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200 animate-slide-down">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                    pathname === link.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <hr className="my-2 border-neutral-200" />

              {session ? (
                <>
                  <Link
                    href={`/${locale}/user/my-learning`}
                    className="px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    {t('nav.myLearning')}
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: `/${locale}` })}
                    className="px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors text-left"
                  >
                    {t('common.logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={`/${locale}/login`}
                    className="px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors text-center"
                  >
                    {t('common.login')}
                  </Link>
                  <Link
                    href={`/${locale}/register`}
                    className="btn-primary text-center"
                  >
                    {t('common.register')}
                  </Link>
                </>
              )}

              <button
                onClick={toggleLocale}
                className="flex items-center justify-center space-x-2 rtl:space-x-reverse px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <Language />
                <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}