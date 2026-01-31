import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProjectGrid } from '@/components/ProjectGrid';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { PageTransition } from '@/components/PageTransition';

const Index = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section - Fullscreen with typography focus */}
        <HeroSection />
        
        {/* Projects Section - Bento Grid */}
        <main id="projects" className="container px-4 pb-20 md:px-6">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8 md:mb-12">
            {t.projects.title}
          </h2>
          <ProjectGrid projects={projects} />
        </main>
      </div>
    </PageTransition>
  );
};

export default Index;
