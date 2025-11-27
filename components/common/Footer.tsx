'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import {
  School,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: locale === 'ar' ? 'عن المنصة' : 'About Us', href: `/${locale}/user/about` },
      { label: locale === 'ar' ? 'تواصل معنا' : 'Contact', href: `/${locale}/user/contact` },
      { label: locale === 'ar' ? 'الوظائف' : 'Careers', href: `/${locale}/user/careers` },
      { label: locale === 'ar' ? 'المدونة' : 'Blog', href: `/${locale}/user/blog` },
    ],
    courses: [
      { label: locale === 'ar' ? 'جميع الدورات' : 'All Courses', href: `/${locale}/user/courses` },
      { label: locale === 'ar' ? 'البرمجة' : 'Programming', href: `/${locale}/user/courses?category=programming` },
      { label: locale === 'ar' ? 'التصميم' : 'Design', href: `/${locale}/user/courses?category=design` },
      { label: locale === 'ar' ? 'الأعمال' : 'Business', href: `/${locale}/user/courses?category=business` },
    ],
    support: [
      { label: locale === 'ar' ? 'مركز المساعدة' : 'Help Center', href: `/${locale}/user/help` },
      { label: locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ', href: `/${locale}/faq` },
      { label: locale === 'ar' ? 'الشروط والأحكام' : 'Terms', href: `/${locale}/terms` },
      { label: locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy', href: `/${locale}/privacy` },
    ],
  };

  const socialLinks = [
    { icon: <Facebook />, href: '#', label: 'Facebook' },
    { icon: <Twitter />, href: '#', label: 'Twitter' },
    { icon: <Instagram />, href: '#', label: 'Instagram' },
    { icon: <LinkedIn />, href: '#', label: 'LinkedIn' },
    { icon: <YouTube />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dark-bg text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}/user/home`} className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
              <School className="text-primary-400 text-4xl" />
              <span className="text-2xl font-display font-bold">
                {locale === 'ar' ? 'أكاديمية' : 'Academy'}
              </span>
            </Link>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              {locale === 'ar'
                ? 'منصة تعليمية رائدة توفر أفضل الدورات التدريبية في مختلف المجالات. نساعدك على تطوير مهاراتك وتحقيق أهدافك المهنية.'
                : 'A leading educational platform offering the best training courses in various fields. We help you develop your skills and achieve your career goals.'}
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-card hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">
              {locale === 'ar' ? 'الشركة' : 'Company'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">
              {locale === 'ar' ? 'الدورات' : 'Courses'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">
              {locale === 'ar' ? 'الدعم' : 'Support'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-dark-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-dark-card rounded-lg flex items-center justify-center">
                <Email className="text-primary-400" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">
                  {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </p>
                <a href="mailto:info@academy.com" className="text-white hover:text-primary-400">
                  info@academy.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-dark-card rounded-lg flex items-center justify-center">
                <Phone className="text-primary-400" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">
                  {locale === 'ar' ? 'الهاتف' : 'Phone'}
                </p>
                <a href="tel:+201234567890" className="text-white hover:text-primary-400">
                  +20 123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-dark-card rounded-lg flex items-center justify-center">
                <LocationOn className="text-primary-400" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">
                  {locale === 'ar' ? 'العنوان' : 'Location'}
                </p>
                <p className="text-white">
                  {locale === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              {locale === 'ar'
                ? `© ${currentYear} أكاديمية. جميع الحقوق محفوظة.`
                : `© ${currentYear} Academy. All rights reserved.`}
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Link
                href={`/${locale}/terms`}
                className="text-neutral-400 hover:text-primary-400 text-sm transition-colors"
              >
                {locale === 'ar' ? 'الشروط' : 'Terms'}
              </Link>
              <span className="text-neutral-600">•</span>
              <Link
                href={`/${locale}/privacy`}
                className="text-neutral-400 hover:text-primary-400 text-sm transition-colors"
              >
                {locale === 'ar' ? 'الخصوصية' : 'Privacy'}
              </Link>
              <span className="text-neutral-600">•</span>
              <Link
                href={`/${locale}/cookies`}
                className="text-neutral-400 hover:text-primary-400 text-sm transition-colors"
              >
                {locale === 'ar' ? 'الكوكيز' : 'Cookies'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}