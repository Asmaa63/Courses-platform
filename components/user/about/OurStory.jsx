'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { 
  CheckCircle, 
  School, 
  Groups, 
  WorkspacePremium 
} from '@mui/icons-material';

export default function OurStory() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  // بيانات المميزات (يمكنك نقلها لملف الترجمة لاحقاً)
  const features = [
    {
      icon: <WorkspacePremium className="w-6 h-6" />,
      title: isAr ? 'شهادات معتمدة' : 'Certified Certificates',
      desc: isAr ? 'احصل على شهادات معترف بها دولياً عند إتمام دوراتك.' : 'Earn internationally recognized certificates upon completion.'
    },
    {
      icon: <Groups className="w-6 h-6" />,
      title: isAr ? 'مدربون خبراء' : 'Expert Instructors',
      desc: isAr ? 'تعلم من نخبة الخبراء المحترفين في مجالاتهم.' : 'Learn from elite professionals and experts in their fields.'
    },
    {
      icon: <School className="w-6 h-6" />,
      title: isAr ? 'تعلم مرن' : 'Flexible Learning',
      desc: isAr ? 'تعلم في أي وقت ومن أي مكان يناسب جدولك.' : 'Learn anytime, anywhere that fits your schedule.'
    }
  ];

  // إعدادات الأنيميشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative py-10 lg:py-28 bg-neutral-50 overflow-hidden">
      {/* عناصر زخرفية في الخلفية */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-50 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* الجانب الأيمن (الصور) - أو الأيسر حسب اللغة */}
          <motion.div 
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* الصورة الرئيسية */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                alt="About our academy"
                width={600}
                height={800}
                className="object-cover w-full h-[500px]"
              />
              
              {/* طبقة لونية خفيفة */}
              <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
            </div>

            {/* الصورة الثانوية العائمة */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`absolute -bottom-10 ${isAr ? '-left-10' : '-right-10'} w-2/3 h-64 rounded-2xl overflow-hidden shadow-card border-4 border-white z-20 hidden md:block`}
            >
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
                alt="Learning teamwork"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* شكل زخرفي (Dots) */}
            <div className={`absolute -top-10 ${isAr ? '-right-10' : '-left-10'} z-0`}>
              <div className="w-24 h-24 grid grid-cols-6 gap-2 opacity-20">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* الجانب الأيسر (المحتوى النصي) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-start"
          >
            {/* عنوان القسم */}
            <motion.span variants={itemVariants} className="inline-block text-primary-600 font-bold tracking-wider uppercase mb-3 text-sm bg-primary-50 px-3 py-1 rounded-full">
              {isAr ? 'عن الأكاديمية' : 'About The Academy'}
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              {isAr ? 'نحن نبني مستقبل التعليم' : 'We Are Building The Future of Education'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                {isAr ? 'لتطوير مهاراتك' : 'To Develop Your Skills'}
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-neutral-600 text-lg mb-8 leading-relaxed">
              {isAr 
                ? 'منصة تعليمية رائدة تهدف إلى تمكين الشباب وتطوير مهاراتهم من خلال توفير محتوى تعليمي عالي الجودة في مختلف المجالات التقنية والإبداعية.'
                : 'A leading educational platform aiming to empower youth and develop their skills by providing high-quality educational content in various technical and creative fields.'
              }
            </motion.p>

            {/* قائمة المميزات */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* زر اتخاذ إجراء */}
            <motion.button 
              variants={itemVariants}
              className="btn-primary"
            >
              {isAr ? 'اقرأ المزيد عنا' : 'Read More About Us'}
            </motion.button>

            {/* إحصائيات سريعة */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-neutral-200 flex flex-wrap gap-8 lg:gap-12"
            >
              <div>
                <h4 className="text-3xl font-display font-bold text-primary-600">1.2k+</h4>
                <p className="text-sm text-neutral-500 mt-1">{isAr ? 'دورة تدريبية' : 'Courses'}</p>
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold text-secondary-500">500+</h4>
                <p className="text-sm text-neutral-500 mt-1">{isAr ? 'مدرب خبير' : 'Instructors'}</p>
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold text-primary-800">15+</h4>
                <p className="text-sm text-neutral-500 mt-1">{isAr ? 'سنة خبرة' : 'Years Exp.'}</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}