'use client';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export default function AboutHero() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden text-center select-none">
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

      {/* Floating Highlight Color Effect */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-30 bg-primary-500"
        initial={{ x: -200, y: -150, opacity: 0.2 }}
        animate={{ x: 250, y: 100, opacity: 0.35 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full blur-[150px] opacity-25 bg-secondary-500"
        initial={{ x: 250, y: 150, opacity: 0.2 }}
        animate={{ x: -200, y: -100, opacity: 0.35 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <span
            className="inline-block py-2 px-5 rounded-full text-sm font-semibold mb-5 
              bg-white/15 text-primary-200 border border-white/20 backdrop-blur-md
              shadow-[0_0_12px_rgba(255,255,255,0.15)]"
          >
            {isAr ? 'من نحن' : 'Who We Are'}
          </span>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-snug">
            {isAr ? 'نصنع مستقبل التعليم الرقمي' : 'Crafting the Future of Digital Education'}
          </h1>

          {/* Description */}
          <p className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'رحلة شغف بدأت بفكرة بسيطة، وتحولت إلى أكبر منصة تعليمية تجمع بين الخبرة والإبداع.'
              : 'A journey of passion started with a simple idea, evolving into the largest platform combining expertise and creativity.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
