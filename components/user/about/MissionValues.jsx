'use client';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Diamond, Flag, Lightbulb } from '@mui/icons-material';

export default function MissionValues() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  const cards = [
    {
      icon: <Flag className="text-4xl" />,
      title: isAr ? 'رسالتنا' : 'Our Mission',
      desc: isAr ? 'توفير تعليم عالي الجودة ومتاح للجميع لتغيير حياتهم المهنية.' : 'Providing accessible, high-quality education to transform careers.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Lightbulb className="text-4xl" />,
      title: isAr ? 'رؤيتنا' : 'Our Vision',
      desc: isAr ? 'أن نكون المنصة الأولى عربياً في مجال التعليم التقني والمهني.' : 'To be the #1 platform in the region for technical and vocational education.',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: <Diamond className="text-4xl" />,
      title: isAr ? 'قيمنا' : 'Our Values',
      desc: isAr ? 'الجودة، المصداقية، الابتكار، ودعم المجتمع التعليمي.' : 'Quality, Integrity, Innovation, and supporting the community.',
      color: 'bg-green-50 text-green-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold font-display text-neutral-800 mb-3">{card.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}