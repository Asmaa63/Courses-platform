'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Search, PlayCircle, TrendingUp, Star } from '@mui/icons-material';

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations('hero');

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10 py-10 lg:py-18">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-start"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white px-4 py-2 rounded-full shadow-md mb-6"
            >
              <TrendingUp className="text-primary-500" />
              <span className="text-sm font-semibold text-neutral-700">
                {locale === 'ar' ? '🔥 أكثر من 50,000 طالب معنا' : '🔥 50,000+ Students Enrolled'}
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              {locale === 'ar' ? (
                <>
                  ابدأ رحلتك التعليمية
                  <br />
                  <span className="gradient-text">معنا اليوم</span>
                </>
              ) : (
                <>
                  Start Your Learning
                  <br />
                  <span className="gradient-text">Journey Today</span>
                </>
              )}
            </h1>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {locale === 'ar'
                ? 'اكتشف آلاف الدورات التدريبية في مختلف المجالات. تعلم من أفضل المدربين وطور مهاراتك المهنية.'
                : 'Discover thousands of courses in various fields. Learn from the best instructors and develop your professional skills.'}
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center gap-2 mb-8 max-w-2xl mx-auto lg:mx-0">
              <Search className="text-neutral-400 mx-3" />
              <input
                type="text"
                placeholder={
                  locale === 'ar' ? 'ابحث عن دورة تدريبية...' : 'Search for a course...'
                }
                className="flex-1 px-2 py-3 outline-none text-neutral-700"
              />
              <button className="btn-primary whitespace-nowrap">
                {locale === 'ar' ? 'بحث' : 'Search'}
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href={`/${locale}/user/courses`} className="btn-primary w-full sm:w-auto">
                {locale === 'ar' ? 'استكشف الدورات' : 'Explore Courses'}
              </Link>
              <button className="btn-outline flex items-center gap-2 w-full sm:w-auto">
                <PlayCircle />
                {locale === 'ar' ? 'شاهد الفيديو' : 'Watch Video'}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-start">
                  <p className="text-sm font-semibold text-neutral-700">50K+</p>
                  <p className="text-xs text-neutral-500">
                    {locale === 'ar' ? 'طالب نشط' : 'Active Students'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <div className="text-start">
                  <p className="text-sm font-semibold text-neutral-700">4.9/5</p>
                  <p className="text-xs text-neutral-500">
                    {locale === 'ar' ? 'تقييم الطلاب' : 'Student Rating'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                  alt="Students Learning"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -left-6 rtl:-right-6 rtl:left-auto bg-white rounded-2xl shadow-xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Star className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">1000+</p>
                    <p className="text-sm text-neutral-500">
                      {locale === 'ar' ? 'دورة تدريبية' : 'Courses'}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -right-6 rtl:-left-6 rtl:right-auto bg-white rounded-2xl shadow-xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">98%</p>
                    <p className="text-sm text-neutral-500">
                      {locale === 'ar' ? 'نسبة النجاح' : 'Success Rate'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}