import { useNavigate } from 'react-router-dom';
import { Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {projects.map((project, index) => (
        <article
          key={project.id}
          onClick={() => handleProjectClick(project.slug)}
          className={cn(
            'group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl bg-card transition-all duration-500 ease-zen',
            'hover:-translate-y-1 hover:shadow-lg',
            'animate-fade-in-up',
            // First project is larger on desktop
            index === 0 && 'md:col-span-2 md:row-span-1'
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Image container */}
          <div className={cn(
            'relative overflow-hidden',
            index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
          )}>
            <img
              src={project.thumbnail}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-zen group-hover:scale-[1.02]"
              loading={index < 2 ? 'eager' : 'lazy'}
            />
            
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
            
            {/* Arrow indicator on hover */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-background/90 backdrop-blur-sm rounded-full p-2">
                <ArrowUpRight className="h-4 w-4 text-foreground" />
              </div>
            </div>
          </div>

          {/* Content - minimal and clean */}
          <div className="p-5 md:p-6">
            <h2 className="text-lg md:text-xl font-medium text-card-foreground group-hover:text-primary transition-colors duration-300">
              {project.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {project.description[language]}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};
