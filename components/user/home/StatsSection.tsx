'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { School, People, EmojiEvents, WorkspacePremium } from '@mui/icons-material';
import { useEffect, useState } from 'react';

export default function StatsSection() {
  const locale = useLocale();

  const stats = [
    {
      icon: <People className="text-4xl" />,
      value: 50000,
      suffix: '+',
      label: locale === 'ar' ? 'طالب نشط' : 'Active Students',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <School className="text-4xl" />,
      value: 1200,
      suffix: '+',
      label: locale === 'ar' ? 'دورة تدريبية' : 'Online Courses',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <WorkspacePremium className="text-4xl" />,
      value: 500,
      suffix: '+',
      label: locale === 'ar' ? 'مدرب خبير' : 'Expert Instructors',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <EmojiEvents className="text-4xl" />,
      value: 98,
      suffix: '%',
      label: locale === 'ar' ? 'نسبة الرضا' : 'Satisfaction Rate',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="text-neutral-600 font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h3 className="text-4xl font-display font-bold text-neutral-900">
      {count.toLocaleString()}
      {suffix}
    </h3>
  );
}