import ContactHero from '../../../../components/user/contact/ContactHero';
import ContactInfo from '../../../../components/user/contact/ContactInfo';
import ContactFormMap from '../../../../components/user/contact/ContactFormMap';
import NewsletterSection from '../../../../components/user/home/NewsletterSection'; // نعيد استخدامها

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactFormMap />
      <NewsletterSection />
    </main>
  );
}