// app/[locale]/user/about/page.jsx
import AboutHero from '../../../../components/user/about/AboutHero';
import OurStory from '../../../../components/user/about/OurStory';
import TeamSection from '../../../../components/user/about/TeamSection';
import NewsletterSection from '../../../../components/user/home/NewsletterSection';
import AboutStatus from '@/components/user/about/AboutStatus';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStatus/>
      <OurStory />
      <TeamSection />
      <NewsletterSection />
    </main>
  );
}