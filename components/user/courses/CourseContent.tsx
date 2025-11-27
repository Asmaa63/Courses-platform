'use client';

import { CheckCircle } from '@mui/icons-material';
import { CourseDetails } from '@/types';

interface CourseContentProps {
  course: CourseDetails;
  locale: string;
}

export default function CourseContent({ course, locale }: CourseContentProps) {
  return (
    <div className="card">
      {/* What You'll Learn */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">
          {locale === 'ar' ? 'ماذا ستتعلم' : 'What You Will Learn'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {course.whatYouWillLearn?.map((item: string, index: number) => (
  <div key={index} className="flex items-start gap-3">
    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
    <span className="text-neutral-700">{item}</span>
  </div>
))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-8 pb-8 border-b border-neutral-200">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
          {locale === 'ar' ? 'وصف الدورة' : 'Course Description'}
        </h2>
        <div className="text-neutral-700 leading-relaxed space-y-4">
          <p>
            {locale === 'ar'
              ? 'هذه الدورة الشاملة ستأخذك من المبتدئ إلى المحترف في تطوير الويب. ستتعلم كل ما تحتاجه لبناء مواقع ويب حديثة ومتجاوبة باستخدام أحدث التقنيات والأدوات.'
              : 'This comprehensive course will take you from beginner to professional in web development. You will learn everything you need to build modern and responsive websites using the latest technologies and tools.'}
          </p>
          <p>
            {locale === 'ar'
              ? 'سنبدأ من الأساسيات مع HTML و CSS، ثم ننتقل إلى JavaScript وأطر العمل الحديثة مثل React. ستتعلم أيضاً كيفية بناء تطبيقات الخادم باستخدام Node.js والتعامل مع قواعد البيانات.'
              : 'We will start from the basics with HTML and CSS, then move on to JavaScript and modern frameworks like React. You will also learn how to build server applications using Node.js and work with databases.'}
          </p>
          <p>
            {locale === 'ar'
              ? 'بنهاية الدورة، ستكون قادراً على بناء تطبيقات ويب كاملة من الصفر ونشرها على الإنترنت. ستحصل أيضاً على شهادة إتمام معتمدة.'
              : 'By the end of the course, you will be able to build complete web applications from scratch and deploy them online. You will also receive a certified completion certificate.'}
          </p>
        </div>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
          {locale === 'ar' ? 'المتطلبات' : 'Requirements'}
        </h2>
        <ul className="space-y-2">
          {course.requirements?.map((req: string, index: number) => (
  <li key={index} className="flex items-start gap-3">
    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
    <span className="text-neutral-700">{req}</span>
  </li>
))}
        </ul>
      </div>
    </div>
  );
}