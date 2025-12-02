'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import CourseCard from '@/components/common/CourseCard';
import CoursesFilter from '@/components/user/courses/CoursesFilter';
import { Search, Tune } from '@mui/icons-material';
import { Course } from '@/types';

interface CoursesResponse {
  courses: Course[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export default function CoursesPage() {
  const locale = useLocale();
  const t = useTranslations();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<{
    categories: string[];
    levels: string[];
    priceRange: [number, number];
    rating: number | null;
  }>({
    categories: [],
    levels: [],
    priceRange: [0, 1000],
    rating: null,
  });
  
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 12,
    totalPages: 0,
  });

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: pagination.page.toString(),
          limit: pagination.limit.toString(),
        });

        if (searchQuery) {
          params.append('search', searchQuery);
        }

        if (filters.categories.length > 0) {
          params.append('category', filters.categories[0]);
        }

        if (filters.levels.length > 0) {
          params.append('level', filters.levels[0]);
        }

        const response = await fetch(`/api/courses?${params}`);
        const data: CoursesResponse = await response.json();

        setCourses(data.courses);
        setPagination(data.pagination);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      fetchCourses();
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchQuery, pagination.page, filters]);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="relative py-20 overflow-hidden text-center select-none">
  {/* Animated Gradient Background */}
  <motion.div
    className="absolute inset-0"
    initial={{ background: 'linear-gradient(135deg, #0E1A30, #1F3555)' }}
    animate={{
      background: [
        'linear-gradient(130deg, #0E1A30, #1F3555)',
        'linear-gradient(140deg, #132544, #234D77)',
        'linear-gradient(150deg, #0F2238, #183B65)',
        'linear-gradient(130deg, #0E1A30, #1F3555)'
      ]
    }}
    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
  />

  {/* Floating Splash Colors */}
  <motion.div
    className="absolute w-[550px] h-[550px] rounded-full blur-[130px] opacity-30 bg-primary-500"
    initial={{ x: -220, y: -150 }}
    animate={{ x: 220, y: 80 }}
    transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
  />
  <motion.div
    className="absolute w-[550px] h-[550px] rounded-full blur-[150px] opacity-25 bg-secondary-500"
    initial={{ x: 240, y: 160 }}
    animate={{ x: -250, y: -120 }}
    transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
  />

  {/* Content */}
  <div className="container-custom relative z-10">
    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white leading-snug">
      {locale === 'ar' ? 'جميع الدورات التدريبية' : 'All Courses'}
    </h1>

    <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
      {locale === 'ar'
        ? 'اكتشف مجموعة واسعة من الدورات التدريبية في مختلف المجالات'
        : 'Discover a wide range of training courses in various fields'}
    </p>

    {/* Search */}
    <motion.div
      className="max-w-3xl mx-auto"
      animate={{ boxShadow: [
        '0 0 15px rgba(255,255,255,0.08)',
        '0 0 28px rgba(255,255,255,0.18)',
        '0 0 15px rgba(255,255,255,0.08)'
      ]}}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-2 flex items-center gap-2 transition duration-300 hover:bg-white/20 hover:border-white/40">
        <Search className="text-white/60 mx-3" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={locale === 'ar' ? 'ابحث عن دورة...' : 'Search for a course...'}
          className="flex-1 px-2 py-3 bg-transparent outline-none text-white placeholder-white/60"
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden bg-secondary-500 hover:bg-secondary-600 transition text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow-md"
        >
          <Tune />
          {locale === 'ar' ? 'تصفية' : 'Filter'}
        </button>
      </div>
    </motion.div>
  </div>
</section>


      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <CoursesFilter onFilterChange={setFilters} />
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
                    <CoursesFilter onFilterChange={setFilters} />
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
  <span className="font-semibold text-neutral-900">
    {pagination?.total ?? 0}
  </span>{' '}
  {locale === 'ar' ? 'دورة' : 'courses'}
</p>
                <select className="input w-auto">
                  <option>{locale === 'ar' ? 'الأحدث' : 'Newest'}</option>
                  <option>{locale === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}</option>
                  <option>{locale === 'ar' ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
                </select>
              </div>

              {/* Loading State */}
              {loading ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="card animate-pulse">
                      <div className="h-48 bg-neutral-200 rounded-xl mb-4"></div>
                      <div className="h-4 bg-neutral-200 rounded mb-2"></div>
                      <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
                    </div>
                  ))}
                </div>
              ) : courses.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-neutral-600 text-lg">
                    {locale === 'ar' ? 'لا توجد دورات' : 'No courses found'}
                  </p>
                </div>
              ) : (
                <>
                  {/* Grid */}
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {courses.map((course) => (
                      <CourseCard key={course.id} course={course} locale={locale} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {pagination.totalPages > 1 && (
                    <div className="mt-12 flex justify-center gap-2">
                      <button
                        onClick={() => setPagination({ ...pagination, page: Math.max(1, pagination.page - 1) })}
                        disabled={pagination.page === 1}
                        className="w-10 h-10 rounded-lg border border-neutral-300 hover:bg-primary-50 disabled:opacity-50"
                      >
                        ←
                      </button>
                      {[...Array(pagination.totalPages)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setPagination({ ...pagination, page: i + 1 })}
                          className={`w-10 h-10 rounded-lg ${
                            pagination.page === i + 1
                              ? 'bg-primary-500 text-white'
                              : 'border border-neutral-300 hover:bg-primary-50'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => setPagination({ ...pagination, page: Math.min(pagination.totalPages, pagination.page + 1) })}
                        disabled={pagination.page === pagination.totalPages}
                        className="w-10 h-10 rounded-lg border border-neutral-300 hover:bg-primary-50 disabled:opacity-50"
                      >
                        →
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}