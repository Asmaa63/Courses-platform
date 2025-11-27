'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import CourseCard from '../../common/CourseCard';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

export default function FeaturedCourses() {
  const locale = useLocale();

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
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            {locale === 'ar' ? '⭐ دورات مميزة' : '⭐ Featured Courses'}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
            {locale === 'ar' ? 'الدورات الأكثر شعبية' : 'Most Popular Courses'}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {locale === 'ar'
              ? 'اختر من بين أفضل الدورات التدريبية المقدمة من خبراء في مجالاتهم'
              : 'Choose from the best training courses offered by experts in their fields'}
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard course={course} locale={locale} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/user/courses`}
            className="inline-flex items-center gap-2 btn-outline group"
          >
            {locale === 'ar' ? 'عرض جميع الدورات' : 'View All Courses'}
            {locale === 'ar' ? (
              <ArrowBack className="group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            )}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}