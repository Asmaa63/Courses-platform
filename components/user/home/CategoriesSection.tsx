'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import {
  Code,
  Brush,
  TrendingUp,
  Camera,
  MusicNote,
  Science,
  Language,
  FitnessCenter,
} from '@mui/icons-material';

export default function CategoriesSection() {
  const locale = useLocale();

  const categories = [
    {
      id: 'programming',
      icon: <Code className="text-4xl" />,
      name: locale === 'ar' ? 'البرمجة' : 'Programming',
      nameEn: 'Programming',
      courses: 450,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'design',
      icon: <Brush className="text-4xl" />,
      name: locale === 'ar' ? 'التصميم' : 'Design',
      nameEn: 'Design',
      courses: 320,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'business',
      icon: <TrendingUp className="text-4xl" />,
      name: locale === 'ar' ? 'الأعمال' : 'Business',
      nameEn: 'Business',
      courses: 280,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'photography',
      icon: <Camera className="text-4xl" />,
      name: locale === 'ar' ? 'التصوير' : 'Photography',
      nameEn: 'Photography',
      courses: 180,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      id: 'music',
      icon: <MusicNote className="text-4xl" />,
      name: locale === 'ar' ? 'الموسيقى' : 'Music',
      nameEn: 'Music',
      courses: 150,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      id: 'science',
      icon: <Science className="text-4xl" />,
      name: locale === 'ar' ? 'العلوم' : 'Science',
      nameEn: 'Science',
      courses: 200,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      id: 'languages',
      icon: <Language className="text-4xl" />,
      name: locale === 'ar' ? 'اللغات' : 'Languages',
      nameEn: 'Languages',
      courses: 220,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 'fitness',
      icon: <FitnessCenter className="text-4xl" />,
      name: locale === 'ar' ? 'اللياقة' : 'Fitness',
      nameEn: 'Fitness',
      courses: 130,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-600 rounded-full text-sm font-semibold mb-4">
            {locale === 'ar' ? '📚 التصنيفات' : '📚 Categories'}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
            {locale === 'ar' ? 'استكشف حسب التصنيف' : 'Explore by Category'}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {locale === 'ar'
              ? 'اختر من بين مجموعة واسعة من التصنيفات وابدأ رحلتك التعليمية'
              : 'Choose from a wide range of categories and start your learning journey'}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/${locale}/courses?category=${category.nameEn.toLowerCase()}`}
                className={`block ${category.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-neutral-600">
                  {category.courses} {locale === 'ar' ? 'دورة' : 'Courses'}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}