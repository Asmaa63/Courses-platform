'use client';

import CourseCard from '../../common/CourseCard';

interface RelatedCoursesProps {
  locale: string;
}

export default function RelatedCourses({ locale }: RelatedCoursesProps) {
  // Mock data
  const relatedCourses = [
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-display font-bold text-neutral-900 mb-8">
          {locale === 'ar' ? 'دورات ذات صلة' : 'Related Courses'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCourses.map((course) => (
            <CourseCard key={course.id} course={course} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}