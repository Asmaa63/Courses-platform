'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import CourseCard from '../../../../components/common/CourseCard';
import CoursesFilter from '../../../../components/user/courses/CoursesFilter';
import { Search, Tune } from '@mui/icons-material';

export default function CoursesPage() {
  const locale = useLocale();
  const t = useTranslations();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - في الواقع هيجي من API
  const courses = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      titleAr: 'دورة تطوير الويب الشاملة',
      description: 'Learn HTML, CSS, JavaScript, React and more',
      descriptionAr: 'تعلم HTML, CSS, JavaScript, React والمزيد',
      price: 499,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
      category: 'Programming',
      level: 'BEGINNER' as const,
      duration: 40,
      lessonsCount: 120,
      studentsCount: 15420,
      rating: 4.8,
      instructor: {
        id: '1',
        name: 'Ahmed Hassan',
        image: 'https://i.pravatar.cc/150?img=1',
      },
    },
    {
      id: '2',
      title: 'UI/UX Design Masterclass',
      titleAr: 'دورة تصميم واجهات المستخدم',
      description: 'Master Figma, Adobe XD, and design principles',
      descriptionAr: 'احترف Figma و Adobe XD ومبادئ التصميم',
      price: 399,
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
      category: 'Design',
      level: 'INTERMEDIATE' as const,
      duration: 30,
      lessonsCount: 85,
      studentsCount: 8750,
      rating: 4.9,
      instructor: {
        id: '2',
        name: 'Sara Mohamed',
        image: 'https://i.pravatar.cc/150?img=5',
      },
    },
    {
      id: '3',
      title: 'Digital Marketing Complete Guide',
      titleAr: 'دليل التسويق الرقمي الشامل',
      description: 'SEO, Social Media, Content Marketing & More',
      descriptionAr: 'SEO, السوشيال ميديا، التسويق بالمحتوى والمزيد',
      price: 349,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
      category: 'Marketing',
      level: 'BEGINNER' as const,
      duration: 25,
      lessonsCount: 70,
      studentsCount: 12300,
      rating: 4.7,
      instructor: {
        id: '3',
        name: 'Omar Ali',
        image: 'https://i.pravatar.cc/150?img=3',
      },
    },
    {
      id: '4',
      title: 'Python Programming for Beginners',
      titleAr: 'برمجة بايثون للمبتدئين',
      description: 'Start your programming journey with Python',
      descriptionAr: 'ابدأ رحلتك البرمجية مع لغة بايثون',
      price: 299,
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600',
      category: 'Programming',
      level: 'BEGINNER' as const,
      duration: 20,
      lessonsCount: 60,
      studentsCount: 18900,
      rating: 4.9,
      instructor: {
        id: '4',
        name: 'Mahmoud Khalil',
        image: 'https://i.pravatar.cc/150?img=4',
      },
    },
    {
      id: '5',
      title: 'Data Science & Machine Learning',
      titleAr: 'علم البيانات والتعلم الآلي',
      description: 'Learn Python, Statistics, ML Algorithms',
      descriptionAr: 'تعلم بايثون والإحصاء وخوارزميات التعلم الآلي',
      price: 599,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      category: 'Programming',
      level: 'ADVANCED' as const,
      duration: 50,
      lessonsCount: 150,
      studentsCount: 9800,
      rating: 4.8,
      instructor: {
        id: '5',
        name: 'Dr. Laila Ahmed',
        image: 'https://i.pravatar.cc/150?img=10',
      },
    },
    {
      id: '6',
      title: 'Mobile App Development with React Native',
      titleAr: 'تطوير تطبيقات الموبايل مع React Native',
      description: 'Build iOS and Android apps with React Native',
      descriptionAr: 'بناء تطبيقات iOS و Android باستخدام React Native',
      price: 449,
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
      category: 'Programming',
      level: 'INTERMEDIATE' as const,
      duration: 35,
      lessonsCount: 100,
      studentsCount: 11200,
      rating: 4.7,
      instructor: {
        id: '6',
        name: 'Youssef Ibrahim',
        image: 'https://i.pravatar.cc/150?img=7',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {locale === 'ar' ? 'جميع الدورات التدريبية' : 'All Courses'}
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            {locale === 'ar'
              ? 'اكتشف مجموعة واسعة من الدورات التدريبية في مختلف المجالات'
              : 'Discover a wide range of training courses in various fields'}
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl shadow-xl p-2 flex items-center gap-2">
              <Search className="text-neutral-400 mx-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={locale === 'ar' ? 'ابحث عن دورة...' : 'Search for a course...'}
                className="flex-1 px-2 py-3 outline-none text-neutral-700"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden btn-primary flex items-center gap-2"
              >
                <Tune />
                {locale === 'ar' ? 'تصفية' : 'Filter'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <CoursesFilter />
            </aside>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowFilters(false)}>
                <div
                  className="absolute right-0 rtl:left-0 rtl:right-auto top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold">{locale === 'ar' ? 'تصفية' : 'Filters'}</h3>
                      <button onClick={() => setShowFilters(false)} className="text-2xl">×</button>
                    </div>
                    <CoursesFilter />
                  </div>
                </div>
              </div>
            )}

            {/* Courses Grid */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-neutral-600">
                  {locale === 'ar' ? 'عرض' : 'Showing'}{' '}
                  <span className="font-semibold text-neutral-900">{courses.length}</span>{' '}
                  {locale === 'ar' ? 'دورة' : 'courses'}
                </p>
                <select className="input w-auto">
                  <option>{locale === 'ar' ? 'الأحدث' : 'Newest'}</option>
                  <option>{locale === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}</option>
                  <option>{locale === 'ar' ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
                  <option>{locale === 'ar' ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
                  <option>{locale === 'ar' ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
                </select>
              </div>

              {/* Courses Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} locale={locale} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center gap-2">
                <button className="w-10 h-10 rounded-lg border border-neutral-300 hover:bg-primary-50 hover:border-primary-500 transition-colors">
                  ←
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary-500 text-white">1</button>
                <button className="w-10 h-10 rounded-lg border border-neutral-300 hover:bg-primary-50 hover:border-primary-500 transition-colors">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg border border-neutral-300 hover:bg-primary-50 hover:border-primary-500 transition-colors">
                  3
                </button>
                <button className="w-10 h-10 rounded-lg border border-neutral-300 hover:bg-primary-50 hover:border-primary-500 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}