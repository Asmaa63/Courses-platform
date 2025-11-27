'use client';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Send, LocationOn } from '@mui/icons-material';

export default function ContactFormMap() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: isAr ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-12"
            >
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-2">
                {isAr ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h2>
              <p className="text-neutral-500 mb-8">
                {isAr ? 'سيتواصل معك فريقنا في أقرب وقت ممكن.' : 'Our team will get back to you as soon as possible.'}
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">{isAr ? 'الاسم بالكامل' : 'Full Name'}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50"
                      placeholder={isAr ? 'الاسم' : 'Name'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50"
                      placeholder="example@mail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">{isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50 text-start"
                    placeholder="+20 1xxxxxxxxx"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">{isAr ? 'موضوع الرسالة' : 'Subject'}</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50 cursor-pointer">
                    <option>{isAr ? 'استفسار عام' : 'General Inquiry'}</option>
                    <option>{isAr ? 'الدعم الفني' : 'Technical Support'}</option>
                    <option>{isAr ? 'الاشتراكات' : 'Billing'}</option>
                    <option>{isAr ? 'الشراكات' : 'Partnership'}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">{isAr ? 'الرسالة' : 'Message'}</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all bg-neutral-50 resize-none"
                    placeholder={isAr ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 group">
                  <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
                  <Send className={`text-lg transition-transform ${isAr ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div 
              initial={{ opacity: 0, x: isAr ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] lg:h-auto bg-neutral-200"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.185672288118!2d31.423714976295556!3d30.002827220556157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd52a3b2b0f%3A0x6c6e75a896d8e57c!2sPoint%2090%20Mall!5e0!3m2!1sen!2seg!4v1709650000000!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              {/* Overlay Card on Map */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white max-w-xs mx-auto lg:mx-0">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                     <LocationOn className="text-white text-sm" />
                   </div>
                   <div>
                     <p className="font-bold text-sm text-neutral-800">{isAr ? 'مقر الأكاديمية' : 'Academy HQ'}</p>
                     <p className="text-xs text-neutral-500">New Cairo, Egypt</p>
                   </div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}