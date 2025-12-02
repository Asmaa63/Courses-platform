'use client';

import { useLocale } from 'next-intl';
import { Security, CheckCircle } from '@mui/icons-material';

export default function PrivacyPage() {
  const locale = useLocale();

  const sections = locale === 'ar' ? [
    {
      title: '1. المعلومات التي نجمعها',
      content: 'نجمع المعلومات التي تقدمها لنا عند التسجيل، مثل الاسم والبريد الإلكتروني. كما نجمع معلومات حول استخدامك للمنصة لتحسين خدماتنا.',
    },
    {
      title: '2. كيفية استخدام المعلومات',
      content: 'نستخدم المعلومات التي نجمعها لتوفير خدماتنا وتحسينها، والتواصل معك، ومعالجة المدفوعات، وإرسال التحديثات والعروض الترويجية.',
    },
    {
      title: '3. مشاركة المعلومات',
      content: 'لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. قد نشارك المعلومات مع مزودي الخدمات الذين يساعدوننا في تشغيل المنصة.',
    },
    {
      title: '4. أمان البيانات',
      content: 'نستخدم تدابير أمنية متقدمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الكشف أو التغيير أو التدمير.',
    },
    {
      title: '5. ملفات تعريف الارتباط (Cookies)',
      content: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك على المنصة. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.',
    },
    {
      title: '6. حقوقك',
      content: 'لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها وحذفها. يمكنك أيضاً الاعتراض على معالجة بياناتك أو طلب تقييد المعالجة.',
    },
    {
      title: '7. الاحتفاظ بالبيانات',
      content: 'نحتفظ بمعلوماتك الشخصية طالما كان حسابك نشطاً أو حسب الحاجة لتقديم خدماتنا أو الامتثال للالتزامات القانونية.',
    },
    {
      title: '8. خصوصية الأطفال',
      content: 'منصتنا غير موجهة للأطفال دون سن 18 عاماً. لا نجمع عن قصد معلومات شخصية من الأطفال.',
    },
    {
      title: '9. التغييرات على السياسة',
      content: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على المنصة.',
    },
    {
      title: '10. الاتصال بنا',
      content: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى الاتصال بنا عبر: privacy@academy.com',
    },
  ] : [
    {
      title: '1. Information We Collect',
      content: 'We collect information you provide when registering, such as name and email. We also collect information about your use of the platform to improve our services.',
    },
    {
      title: '2. How We Use Information',
      content: 'We use the information we collect to provide and improve our services, communicate with you, process payments, and send updates and promotional offers.',
    },
    {
      title: '3. Information Sharing',
      content: 'We do not sell or share your personal information with third parties for marketing purposes. We may share information with service providers who help us operate the platform.',
    },
    {
      title: '4. Data Security',
      content: 'We use advanced security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.',
    },
    {
      title: '5. Cookies',
      content: 'We use cookies to improve your experience on the platform. You can control cookies through your browser settings.',
    },
    {
      title: '6. Your Rights',
      content: 'You have the right to access, correct, and delete your personal information. You can also object to the processing of your data or request restriction of processing.',
    },
    {
      title: '7. Data Retention',
      content: 'We retain your personal information as long as your account is active or as needed to provide our services or comply with legal obligations.',
    },
    {
      title: '8. Children\'s Privacy',
      content: 'Our platform is not directed to children under 18 years of age. We do not knowingly collect personal information from children.',
    },
    {
      title: '9. Changes to Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes via email or through a notice on the platform.',
    },
    {
      title: '10. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at: privacy@academy.com',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container-custom text-center">
          <Security className="text-6xl mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
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
                  ? 'في أكاديمية، نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك.'
                  : 'At Academy, we are committed to protecting your privacy and the security of your personal information. This Privacy Policy explains how we collect, use, and protect your information.'}
              </p>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <h2 className="text-xl font-bold text-neutral-900">{section.title}</h2>
                    </div>
                    <p className="text-neutral-700 leading-relaxed pl-9 rtl:pr-9 rtl:pl-0">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-neutral-700 font-semibold mb-2">
                    {locale === 'ar' ? '🔒 الأمان' : '🔒 Security'}
                  </p>
                  <p className="text-neutral-600 text-sm">
                    {locale === 'ar'
                      ? 'نستخدم تشفير SSL لحماية بياناتك'
                      : 'We use SSL encryption to protect your data'}
                  </p>
                </div>

                <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-neutral-700 font-semibold mb-2">
                    {locale === 'ar' ? '📧 تواصل معنا' : '📧 Contact Us'}
                  </p>
                  <a
                    href="mailto:privacy@academy.com"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    privacy@academy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}