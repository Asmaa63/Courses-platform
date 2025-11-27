'use client';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function ContactHero() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <section className="relative py-20 overflow-hidden text-center select-none">
      {/* Gradient Background Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ background: 'linear-gradient(135deg, #0E1A30, #1F3555)' }}
        animate={{
          background: [
            'linear-gradient(130deg, #0E1A30, #1F3555)',
            'linear-gradient(140deg, #132544, #234D77)',
            'linear-gradient(150deg, #0F2238, #183B65)',
            'linear-gradient(130deg, #0E1A30, #1F3555)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Color Highlights */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 bg-secondary-500"
        initial={{ x: -260, y: -160, opacity: 0.2 }}
        animate={{ x: 240, y: 100, opacity: 0.33 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full blur-[150px] opacity-25 bg-primary-500"
        initial={{ x: 260, y: 170, opacity: 0.2 }}
        animate={{ x: -260, y: -120, opacity: 0.35 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Label */}
          <motion.span
            className="text-sm font-bold tracking-wider uppercase py-2 px-5 rounded-full inline-block text-secondary-400 bg-secondary-400/10 border border-orange-500/50 backdrop-blur-md shadow-[0_0_8px_rgba(255,150,50,0.25)] mb-5"
            animate={{
              boxShadow: [
                '0 0 8px rgba(255,150,50,0.15)',
                '0 0 16px rgba(255,150,50,0.35)',
                '0 0 8px rgba(255,150,50,0.15)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {isAr ? 'تواصل معنا' : 'Contact Us'}
          </motion.span>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-snug">
            {isAr ? 'نحن هنا لمساعدتك' : 'We Are Here to Help'}
          </h1>

          {/* Description */}
          <p className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'هل لديك استفسار؟ فريقنا جاهز للإجابة على جميع أسئلتك ومساعدتك في رحلتك التعليمية.'
              : 'Have a question? Our team is ready to answer all your inquiries and support your learning journey.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
