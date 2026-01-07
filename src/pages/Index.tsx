import { Header } from '@/components/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8">
        <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
          {t.projects.title}
        </h2>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
