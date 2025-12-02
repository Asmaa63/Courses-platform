'use client';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { LinkedIn, Twitter, Email } from '@mui/icons-material';

export default function TeamSection() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  const team = [
    { name: 'Ahmed Ali', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { name: 'Sarah Smith', role: 'Head of Education', img: 'https://images.unsplash.com/photo-1573496359-136d475583dc?w=400' },
    { name: 'Omar Khaled', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { name: 'Nour Eslam', role: 'Product Designer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
  ];

  return (
    <section className="py-10 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
            {isAr ? 'تعرف على فريقنا' : 'Meet Our Team'}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {isAr ? 'نخبة من الشغوفين يعملون خلف الكواليس لتقديم أفضل تجربة تعليمية.' : 'Passionate individuals working behind the scenes to deliver the best learning experience.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={member.img} 
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4 text-white">
                    <LinkedIn className="cursor-pointer hover:text-secondary-400" />
                    <Twitter className="cursor-pointer hover:text-secondary-400" />
                    <Email className="cursor-pointer hover:text-secondary-400" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}