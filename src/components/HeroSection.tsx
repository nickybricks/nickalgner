import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { projects } from '@/data/projects';

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll);
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section id="work" className="pt-20 pb-24 px-4 md:px-6">
      <div className="container">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-16 max-w-2xl">
          {t.hero.tagline}
        </h1>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <article
                key={project.id}
                onClick={() => navigate(`/project/${project.slug}`)}
                className="group cursor-pointer flex-shrink-0 w-[350px] md:w-[420px]"
              >
                <div className="aspect-video overflow-hidden rounded-2xl mb-4">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {project.description[language]}
                </p>
              </article>
            ))}
          </div>

          {/* Fade + arrow indicator */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-4 w-24 flex items-center justify-end pointer-events-none bg-gradient-to-l from-background to-transparent">
              <button
                onClick={scrollRight}
                className="pointer-events-auto p-2 rounded-full bg-background/80 border border-border text-muted-foreground hover:text-foreground transition-colors mr-2"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
