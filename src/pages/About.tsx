import { Header } from '@/components/Header';
import { AboutSection } from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-12">
        <AboutSection />
      </main>
    </div>
  );
};

export default About;
