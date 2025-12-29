import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { SkillsSection } from '@/components/home/SkillsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
    </Layout>
  );
};

export default Index;
