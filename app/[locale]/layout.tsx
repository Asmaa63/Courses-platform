import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { cairo, tajawal, inter } from '../../public/fonts/fonts';
import '../globals.css';
import Providers from '../../components/common/Providers';

export const metadata = {
  title: 'منصة الكورسات | Course Platform',
  description: 'أفضل منصة تعليمية عربية - Best Arabic Learning Platform',
};

const locales = ['ar', 'en'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // ✅ Promise
}) {
  const { locale } = await params; // ✅ await

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${cairo.variable} ${tajawal.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className={locale === 'ar' ? 'font-sans' : 'font-inter'}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}