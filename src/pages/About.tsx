import { Header } from '@/components/Header';
import { AboutSection } from '@/components/AboutSection';
import { PageTransition } from '@/components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <AboutSection />
        </main>
      </div>
    </PageTransition>
  );
};

export default About;
