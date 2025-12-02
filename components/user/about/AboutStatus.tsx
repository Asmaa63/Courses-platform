'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { School, People, EmojiEvents, Verified, TrendingUp, Support } from '@mui/icons-material';

export default function AboutStatus() {
  const locale = useLocale();

  const stats = [
    {
      icon: <People className="text-4xl" />,
      value: '50,000+',
      label: locale === 'ar' ? 'طالب نشط' : 'Active Students',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <School className="text-4xl" />,
      value: '1,200+',
      label: locale === 'ar' ? 'دورة تدريبية' : 'Courses',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <People className="text-4xl" />,
      value: '500+',
      label: locale === 'ar' ? 'مدرب خبير' : 'Expert Instructors',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <EmojiEvents className="text-4xl" />,
      value: '98%',
      label: locale === 'ar' ? 'نسبة الرضا' : 'Satisfaction Rate',
      color: 'from-green-500 to-green-600',
    },
  ];

  const values = [
    {
      icon: <Verified className="text-4xl" />,
      title: locale === 'ar' ? 'الجودة' : 'Quality',
      description:
        locale === 'ar'
          ? 'نلتزم بتقديم محتوى تعليمي عالي الجودة يلبي احتياجات الطلاب'
          : 'We commit to providing high-quality educational content that meets students needs',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <TrendingUp className="text-4xl" />,
      title: locale === 'ar' ? 'الابتكار' : 'Innovation',
      description:
        locale === 'ar'
          ? 'نستخدم أحدث التقنيات لتوفير تجربة تعليمية متميزة'
          : 'We use the latest technologies to provide an excellent learning experience',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Support className="text-4xl" />,
      title: locale === 'ar' ? 'الدعم' : 'Support',
      description:
        locale === 'ar'
          ? 'فريق دعم متاح على مدار الساعة لمساعدة الطلاب'
          : '24/7 support team available to help students',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">


      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</h3>
                <p className="text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">
                {locale === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  {locale === 'ar'
                    ? 'بدأت أكاديمية كفكرة بسيطة: جعل التعليم عالي الجودة متاحاً للجميع. نؤمن بأن كل شخص يستحق فرصة لتعلم مهارات جديدة وتطوير مسيرته المهنية.'
                    : 'Academy started as a simple idea: making high-quality education accessible to everyone. We believe that everyone deserves the opportunity to learn new skills and develop their career.'}
                </p>
                <p>
                  {locale === 'ar'
                    ? 'منذ إطلاقنا، ساعدنا أكثر من 50,000 طالب على تحقيق أهدافهم من خلال أكثر من 1,200 دورة تدريبية في مختلف المجالات.'
                    : 'Since our launch, we have helped over 50,000 students achieve their goals through over 1,200 training courses in various fields.'}
                </p>
                <p>
                  {locale === 'ar'
                    ? 'نعمل مع أفضل المدربين والخبراء لضمان حصولك على أفضل تجربة تعليمية ممكنة.'
                    : 'We work with the best instructors and experts to ensure you get the best possible learning experience.'}
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="Our Story"
                fill
                className="rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-neutral-900 text-center mb-12">
            {locale === 'ar' ? 'قيمنا' : 'Our Values'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}