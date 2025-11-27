import CourseHeader from '@/components/user/courses/CourseHeader';
import CourseContent from '@/components/user/courses/CourseContent';
import CourseCurriculum from '@/components/user/courses/CourseCurriculum';
import CourseInstructor from '@/components/user/courses/CourseInstructor';
import CourseReviews from '@/components/user/courses/CourseReviews';
import CourseSidebar from '@/components/user/courses/CourseSidebar';
import RelatedCourses from '@/components/user/courses/RelatedCourses';
import { notFound } from 'next/navigation';



export default async function CourseDetailsPage({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const { locale, id } = params;

  // Fetch course from API
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/courses/${id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    notFound();
  }

  const course = await response.json();

  // Transform data for components
  const courseDetails = {
    ...course,
    originalPrice: course.price * 2,
    videoPreview: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    reviewsCount: 3240,
    lastUpdated: '2024-01',
    language: locale === 'ar' ? 'العربية' : 'Arabic & English',
    whatYouWillLearn: [
      locale === 'ar' ? 'بناء مواقع ويب كاملة من الصفر' : 'Build complete websites from scratch',
      locale === 'ar' ? 'احتراف HTML, CSS, JavaScript' : 'Master HTML, CSS, JavaScript',
      locale === 'ar' ? 'تطوير تطبيقات React متقدمة' : 'Develop advanced React applications',
      locale === 'ar' ? 'بناء APIs باستخدام Node.js' : 'Build APIs using Node.js',
      locale === 'ar' ? 'التعامل مع قواعد البيانات' : 'Work with databases',
      locale === 'ar' ? 'نشر التطبيقات على الإنترنت' : 'Deploy applications online',
    ],
    requirements: [
      locale === 'ar' ? 'لا يوجد خبرة سابقة مطلوبة' : 'No prior experience required',
      locale === 'ar' ? 'حاسوب مع اتصال بالإنترنت' : 'Computer with internet connection',
      locale === 'ar' ? 'الرغبة في التعلم والممارسة' : 'Willingness to learn and practice',
    ],
    curriculum: [
      {
        id: '1',
        title: locale === 'ar' ? 'مقدمة في تطوير الويب' : 'Introduction to Web Development',
        lessons: course.lessons || [
          {
            id: '1-1',
            title: locale === 'ar' ? 'ما هو تطوير الويب؟' : 'What is Web Development?',
            duration: 12,
            isFree: true,
          },
          {
            id: '1-2',
            title: locale === 'ar' ? 'إعداد بيئة التطوير' : 'Setting up Development Environment',
            duration: 15,
            isFree: true,
          },
          {
            id: '1-3',
            title: locale === 'ar' ? 'أساسيات الإنترنت' : 'Internet Basics',
            duration: 20,
            isFree: false,
          },
        ],
      },
      {
        id: '2',
        title: 'HTML & CSS',
        lessons: [
          {
            id: '2-1',
            title: locale === 'ar' ? 'أساسيات HTML' : 'HTML Fundamentals',
            duration: 25,
            isFree: false,
          },
          {
            id: '2-2',
            title: locale === 'ar' ? 'تنسيق النصوص والعناصر' : 'Text and Element Formatting',
            duration: 30,
            isFree: false,
          },
          {
            id: '2-3',
            title: locale === 'ar' ? 'مقدمة في CSS' : 'Introduction to CSS',
            duration: 28,
            isFree: false,
          },
        ],
      },
      {
        id: '3',
        title: 'JavaScript',
        lessons: [
          {
            id: '3-1',
            title: locale === 'ar' ? 'أساسيات JavaScript' : 'JavaScript Fundamentals',
            duration: 35,
            isFree: false,
          },
          {
            id: '3-2',
            title: locale === 'ar' ? 'التعامل مع DOM' : 'DOM Manipulation',
            duration: 40,
            isFree: false,
          },
        ],
      },
    ],
    reviews: [
      {
        id: '1',
        user: {
          name: 'محمد أحمد',
          image: 'https://i.pravatar.cc/150?img=11',
        },
        rating: 5,
        comment:
          locale === 'ar'
            ? 'دورة رائعة جداً! المحتوى منظم بشكل ممتاز والشرح واضح. استفدت كثيراً وأصبحت قادراً على بناء مواقع احترافية.'
            : 'Amazing course! Content is excellently organized and explanation is clear. I learned a lot and now I can build professional websites.',
        date: '2024-01-15',
      },
      {
        id: '2',
        user: {
          name: 'فاطمة علي',
          image: 'https://i.pravatar.cc/150?img=25',
        },
        rating: 5,
        comment:
          locale === 'ar'
            ? 'أفضل دورة تطوير ويب على الإطلاق! المدرب محترف والمحتوى شامل. أنصح بها بشدة.'
            : 'Best web development course ever! Professional instructor and comprehensive content. Highly recommend.',
        date: '2024-01-10',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <CourseHeader course={courseDetails} locale={locale} />

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <CourseContent course={courseDetails} locale={locale} />
            <CourseCurriculum curriculum={courseDetails.curriculum} locale={locale} />
            <CourseInstructor instructor={courseDetails.instructor} locale={locale} />
            <CourseReviews
              reviews={courseDetails.reviews}
              rating={courseDetails.rating}
              reviewsCount={courseDetails.reviewsCount}
              locale={locale}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar course={courseDetails} locale={locale} />
          </div>
        </div>
      </div>

      <RelatedCourses locale={locale} />
    </div>
  );
}
