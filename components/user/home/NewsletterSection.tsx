'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { Email, CheckCircle } from '@mui/icons-material';

export default function NewsletterSection() {
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Email className="text-white text-4xl" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {locale === 'ar'
              ? 'اشترك في نشرتنا الإخبارية'
              : 'Subscribe to Our Newsletter'}
          </h2>

          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {locale === 'ar'
              ? 'احصل على آخر التحديثات والعروض الحصرية والدورات الجديدة مباشرة في بريدك الإلكتروني'
              : 'Get the latest updates, exclusive offers, and new courses directly in your email'}
          </p>

          {/* Form or Success Message */}
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-8"
            >
              <CheckCircle className="text-white text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                {locale === 'ar' ? 'شكراً للاشتراك!' : 'Thanks for Subscribing!'}
              </h3>
              <p className="text-white/90">
                {locale === 'ar'
                  ? 'تم الاشتراك بنجاح. تحقق من بريدك الإلكتروني.'
                  : 'Successfully subscribed. Check your email.'}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    locale === 'ar'
                      ? 'أدخل بريدك الإلكتروني...'
                      : 'Enter your email...'
                  }
                  className="flex-1 px-6 py-4 outline-none text-neutral-700 rounded-xl"
                  required
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-secondary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                    </span>
                  ) : locale === 'ar' ? (
                    'اشترك الآن'
                  ) : (
                    'Subscribe Now'
                  )}
                </button>
              </div>
              <p className="text-white/80 text-sm mt-4">
                {locale === 'ar'
                  ? '🔒 نحن نحترم خصوصيتك ولن نشارك بياناتك مع أي طرف ثالث'
                  : '🔒 We respect your privacy and will not share your data with any third party'}
              </p>
            </form>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">10K+</p>
              <p className="text-white/80 text-sm">
                {locale === 'ar' ? 'مشترك' : 'Subscribers'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">Weekly</p>
              <p className="text-white/80 text-sm">
                {locale === 'ar' ? 'رسائل' : 'Emails'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-white/80 text-sm">
                {locale === 'ar' ? 'مجاني' : 'Free'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}