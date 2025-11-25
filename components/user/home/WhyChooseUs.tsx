'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import {
  Verified,
  EmojiEvents,
  Support,
  Update,
  School, // استبدال Certificate بـ School
  Groups,
} from '@mui/icons-material';

export default function WhyChooseUs() {
  const locale = useLocale();

  const features = [
    {
      icon: <Verified className="text-3xl" />,
      title: locale === 'ar' ? 'محتوى معتمد' : 'Certified Content',
      description:
        locale === 'ar'
          ? 'جميع دوراتنا معتمدة ومراجعة من قبل خبراء في المجال'
          : 'All our courses are certified and reviewed by field experts',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <EmojiEvents className="text-3xl" />,
      title: locale === 'ar' ? 'مدربون خبراء' : 'Expert Instructors',
      description:
        locale === 'ar'
          ? 'تعلم من أفضل المدربين ذوي الخبرة الواسعة'
          : 'Learn from the best instructors with extensive experience',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: <Support className="text-3xl" />,
      title: locale === 'ar' ? 'دعم مستمر' : 'Continuous Support',
      description:
        locale === 'ar'
          ? 'فريق دعم متاح على مدار الساعة لمساعدتك'
          : '24/7 support team available to help you',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Update className="text-3xl" />,
      title: locale === 'ar' ? 'محتوى محدث' : 'Updated Content',
      description:
        locale === 'ar'
          ? 'نحدث محتوى الدورات باستمرار لمواكبة التطورات'
          : 'We constantly update course content to keep up with developments',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <School className="text-3xl" />, // تم التعديل هنا
      title: locale === 'ar' ? 'شهادات معتمدة' : 'Certified Certificates',
      description:
        locale === 'ar'
          ? 'احصل على شهادات معتمدة عند إتمام الدورات'
          : 'Get certified certificates upon course completion',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Groups className="text-3xl" />,
      title: locale === 'ar' ? 'مجتمع نشط' : 'Active Community',
      description:
        locale === 'ar'
          ? 'انضم لمجتمع من الطلاب والمحترفين'
          : 'Join a community of students and professionals',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
              {locale === 'ar' ? '⚡ لماذا نحن؟' : '⚡ Why Us?'}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
              {locale === 'ar'
                ? 'لماذا تختار منصتنا للتعلم؟'
                : 'Why Choose Our Platform for Learning?'}
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {locale === 'ar'
                ? 'نوفر لك تجربة تعليمية متكاملة مع أفضل المحتوى التعليمي والدعم المستمر لتحقيق أهدافك المهنية والشخصية.'
                : 'We provide you with a complete learning experience with the best educational content and continuous support to achieve your professional and personal goals.'}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white shadow-md`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-neutral-900">{feature.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                alt="Why Choose Us"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl"
              />

              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-10 -left-10 rtl:-right-10 rtl:left-auto bg-white rounded-2xl shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <EmojiEvents className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">98%</p>
                    <p className="text-xs text-neutral-600">
                      {locale === 'ar' ? 'نسبة النجاح' : 'Success Rate'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-10 -right-10 rtl:-left-10 rtl:right-auto bg-white rounded-2xl shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Groups className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">50K+</p>
                    <p className="text-xs text-neutral-600">
                      {locale === 'ar' ? 'طالب سعيد' : 'Happy Students'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
