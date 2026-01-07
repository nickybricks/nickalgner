import { useNavigate } from 'react-router-dom';
import { Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const handleClick = () => {
    navigate(`/project/${project.slug}`);
  };

  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold text-card-foreground">{project.name}</h2>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {project.description[language]}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
          {t.projects.viewProject}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};
