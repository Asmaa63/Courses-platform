'use client';

import { useLocale } from 'next-intl';
import { Gavel, CheckCircle } from '@mui/icons-material';

export default function TermsPage() {
  const locale = useLocale();

  const sections = locale === 'ar' ? [
    {
      title: '1. القبول بالشروط',
      content: 'باستخدامك لمنصة أكاديمية، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يُرجى عدم استخدام المنصة.',
    },
    {
      title: '2. التسجيل والحساب',
      content: 'يجب عليك إنشاء حساب لاستخدام بعض ميزات المنصة. أنت مسؤول عن الحفاظ على سرية حسابك وكلمة المرور الخاصة بك، وأنت مسؤول بالكامل عن جميع الأنشطة التي تحدث تحت حسابك.',
    },
    {
      title: '3. الدورات التدريبية',
      content: 'جميع الدورات التدريبية المتاحة على المنصة محمية بحقوق النشر. لا يجوز لك إعادة إنتاج أو توزيع أو نشر أي محتوى من الدورات دون إذن كتابي مسبق.',
    },
    {
      title: '4. الدفع والاسترداد',
      content: 'جميع المدفوعات تتم بالجنيه المصري. نوفر ضمان استرداد الأموال خلال 30 يوماً من تاريخ الشراء إذا لم تكن راضياً عن الدورة.',
    },
    {
      title: '5. السلوك المقبول',
      content: 'يجب عليك استخدام المنصة بطريقة قانونية ومحترمة. لا يُسمح بالتحرش أو الإساءة أو السلوك غير اللائق تجاه المستخدمين الآخرين أو المدربين.',
    },
    {
      title: '6. الملكية الفكرية',
      content: 'جميع المحتويات والمواد الموجودة على المنصة، بما في ذلك النصوص والرسومات والشعارات، هي ملك لأكاديمية ومحمية بموجب قوانين حقوق النشر.',
    },
    {
      title: '7. إنهاء الحساب',
      content: 'نحتفظ بالحق في تعليق أو إنهاء حسابك في أي وقت إذا انتهكت هذه الشروط أو إذا كان سلوكك ضاراً بالمنصة أو مستخدميها.',
    },
    {
      title: '8. التعديلات',
      content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على المنصة.',
    },
    {
      title: '9. القانون الحاكم',
      content: 'تخضع هذه الشروط لقوانين جمهورية مصر العربية وتفسر وفقاً لها.',
    },
    {
      title: '10. الاتصال بنا',
      content: 'إذا كان لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا عبر البريد الإلكتروني: info@academy.com',
    },
  ] : [
    {
      title: '1. Acceptance of Terms',
      content: 'By using Academy platform, you agree to be bound by these Terms and Conditions. If you do not agree to any of these terms, please do not use the platform.',
    },
    {
      title: '2. Registration and Account',
      content: 'You must create an account to use some features of the platform. You are responsible for maintaining the confidentiality of your account and password, and you are fully responsible for all activities that occur under your account.',
    },
    {
      title: '3. Training Courses',
      content: 'All training courses available on the platform are copyrighted. You may not reproduce, distribute, or publish any course content without prior written permission.',
    },
    {
      title: '4. Payment and Refund',
      content: 'All payments are in Egyptian Pounds. We offer a 30-day money-back guarantee from the date of purchase if you are not satisfied with the course.',
    },
    {
      title: '5. Acceptable Conduct',
      content: 'You must use the platform in a legal and respectful manner. Harassment, abuse, or inappropriate behavior towards other users or instructors is not allowed.',
    },
    {
      title: '6. Intellectual Property',
      content: 'All content and materials on the platform, including texts, graphics, and logos, are owned by Academy and protected by copyright laws.',
    },
    {
      title: '7. Account Termination',
      content: 'We reserve the right to suspend or terminate your account at any time if you violate these terms or if your conduct is harmful to the platform or its users.',
    },
    {
      title: '8. Modifications',
      content: 'We reserve the right to modify these terms at any time. You will be notified of any material changes via email or through a notice on the platform.',
    },
    {
      title: '9. Governing Law',
      content: 'These terms are governed by and construed in accordance with the laws of the Arab Republic of Egypt.',
    },
    {
      title: '10. Contact Us',
      content: 'If you have any questions about these terms, please contact us at: info@academy.com',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <Gavel className="text-6xl mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {locale === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
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
                  ? 'مرحباً بك في أكاديمية. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصتنا.'
                  : 'Welcome to Academy. Please read these Terms and Conditions carefully before using our platform.'}
              </p>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="text-primary-500 flex-shrink-0 mt-1" />
                      <h2 className="text-xl font-bold text-neutral-900">{section.title}</h2>
                    </div>
                    <p className="text-neutral-700 leading-relaxed pl-9 rtl:pr-9 rtl:pl-0">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200">
                <p className="text-neutral-700 font-semibold mb-2">
                  {locale === 'ar' ? '📧 هل لديك أسئلة؟' : '📧 Have Questions?'}
                </p>
                <p className="text-neutral-600">
                  {locale === 'ar'
                    ? 'لا تتردد في الاتصال بنا على: '
                    : 'Feel free to contact us at: '}
                  <a
                    href="mailto:info@academy.com"
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    info@academy.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}