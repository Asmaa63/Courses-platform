// app/[locale]/user/about/page.jsx
import AboutHero from '../../../../components/user/about/AboutHero';
import OurStory from '../../../../components/user/about/OurStory';
import MissionValues from '../../../../components/user/about/MissionValues';
import TeamSection from '../../../../components/user/about/TeamSection';
import NewsletterSection from '../../../../components/user/home/NewsletterSection'; // نعيد استخدامها

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionValues />
      <TeamSection />
      <NewsletterSection />
    </main>
  );
}