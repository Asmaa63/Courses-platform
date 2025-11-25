import HeroSection from '../../../../components/user/home/HeroSection';
import StatsSection from '../../../../components/user/home/StatsSection';
import FeaturedCourses from '../../../../components/user/home/FeaturedCourses';
import CategoriesSection from '../../../../components/user/home/CategoriesSection';
import WhyChooseUs from '../../../../components/user/home/WhyChooseUs';
import TestimonialsSection from '../../../../components/user/home/TestimonialsSection';
import NewsletterSection from '../../../../components/user/home/NewsletterSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturedCourses />
      <CategoriesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}