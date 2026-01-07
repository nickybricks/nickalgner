import { Header } from '@/components/Header';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-0 py-8 md:px-4">
        <h2 className="mb-6 px-4 text-2xl font-bold text-foreground md:px-0 md:text-3xl">
          {t.projects.title}
        </h2>
        <ProjectCarousel projects={projects} />
      </main>
    </div>
  );
};

export default Index;
