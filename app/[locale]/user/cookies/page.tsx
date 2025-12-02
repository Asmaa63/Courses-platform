'use client';

import { useLocale } from 'next-intl';
import { Cookie, CheckCircle } from '@mui/icons-material';

export default function CookiesPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
        <div className="container-custom text-center">
          <Cookie className="text-6xl mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {locale === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Cookies Policy'}
          </h1>
          <p className="text-lg text-white/90">
            {locale === 'ar' ? 'آخر تحديث: يناير 2025' : 'Last updated: January 2025'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card">
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-700 leading-relaxed mb-8">
                {locale === 'ar'
                  ? 'نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك على منصتنا. توضح هذه السياسة كيفية استخدامنا لملفات تعريف الارتباط وخياراتك المتعلقة بها.'
                  : 'We use cookies to improve your experience on our platform. This policy explains how we use cookies and your choices regarding them.'}
              </p>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
                    <h2 className="text-xl font-bold text-neutral-900">
                      {locale === 'ar' ? 'ما هي ملفات تعريف الارتباط؟' : 'What are Cookies?'}
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed pl-9 rtl:pr-9 rtl:pl-0">
                    {locale === 'ar'
                      ? 'ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقع ويب. تساعدنا هذه الملفات على تذكر تفضيلاتك وتحسين تجربتك.'
                      : 'Cookies are small text files stored on your device when you visit a website. These files help us remember your preferences and improve your experience.'}
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
                    <h2 className="text-xl font-bold text-neutral-900">
                      {locale === 'ar' ? 'كيف نستخدم ملفات تعريف الارتباط' : 'How We Use Cookies'}
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed pl-9 rtl:pr-9 rtl:pl-0 mb-4">
                    {locale === 'ar'
                      ? 'نستخدم أنواعاً مختلفة من ملفات تعريف الارتباط:'
                      : 'We use different types of cookies:'}
                  </p>
                  <ul className="list-disc pl-16 rtl:pr-16 rtl:pl-0 space-y-2 text-neutral-700">
                    <li>
                      {locale === 'ar'
                        ? 'ملفات تعريف الارتباط الضرورية: مطلوبة لتشغيل المنصة بشكل صحيح'
                        : 'Essential cookies: Required for the platform to function properly'}
                    </li>
                    <li>
                      {locale === 'ar'
                        ? 'ملفات تعريف الارتباط التحليلية: لفهم كيفية استخدامك للمنصة'
                        : 'Analytics cookies: To understand how you use the platform'}
                    </li>
                    <li>
                      {locale === 'ar'
                        ? 'ملفات تعريف الارتباط الوظيفية: لحفظ تفضيلاتك'
                        : 'Functional cookies: To save your preferences'}
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" />
                    <h2 className="text-xl font-bold text-neutral-900">
                      {locale === 'ar' ? 'التحكم في ملفات تعريف الارتباط' : 'Managing Cookies'}
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed pl-9 rtl:pr-9 rtl:pl-0">
                    {locale === 'ar'
                      ? 'يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك. يرجى ملاحظة أن تعطيل بعض ملفات تعريف الارتباط قد يؤثر على وظائف المنصة.'
                      : 'You can control cookies through your browser settings. Please note that disabling some cookies may affect the functionality of the platform.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}