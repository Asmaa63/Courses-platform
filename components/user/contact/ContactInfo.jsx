'use client';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';

export default function ContactInfo() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  const contactData = [
    {
      icon: <Phone />,
      title: isAr ? 'اتصل بنا' : 'Call Us',
      info: ['+20 100 123 4567', '+20 2 2345 6789'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Email />,
      title: isAr ? 'البريد الإلكتروني' : 'Email Us',
      info: ['support@academy.com', 'info@academy.com'],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: <LocationOn />,
      title: isAr ? 'زر مقرنا' : 'Visit Us',
      info: [isAr ? 'القاهرة الجديدة، التجمع الخامس' : 'New Cairo, Fifth Settlement', isAr ? 'شارع التسعين، مبنى 105' : '90th St, Building 105'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <AccessTime />,
      title: isAr ? 'ساعات العمل' : 'Working Hours',
      info: [isAr ? 'الأحد - الخميس' : 'Sun - Thu', isAr ? '9:00 ص - 5:00 م' : '9:00 AM - 5:00 PM'],
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section className="py-16 -mt-10 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-neutral-100 text-center group"
            >
              <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">{item.title}</h3>
              <div className="text-neutral-500 space-y-1">
                {item.info.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}