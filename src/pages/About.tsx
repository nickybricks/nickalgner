import { Header } from '@/components/Header';
import { AboutSection } from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutSection />
      </main>
    </div>
  );
};

export default About;
