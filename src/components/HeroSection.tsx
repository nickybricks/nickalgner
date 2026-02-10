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
    if (!el) return;
    el.addEventListener('scroll', checkScroll);

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScrollShow = () => {
      el.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => el.classList.remove('scrolling'), 1000);
    };
    el.addEventListener('scroll', handleScrollShow);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      el.removeEventListener('scroll', handleScrollShow);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section id="work" className="pt-12 md:pt-20 pb-16 md:pb-24">
      <div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-10 md:mb-16 max-w-2xl">
          {t.hero.tagline}
        </h1>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 auto-hide-scrollbar"
          >
            <style>{`
              .auto-hide-scrollbar { scrollbar-width: thin; scrollbar-color: transparent transparent; transition: scrollbar-color 0.3s; }
              .auto-hide-scrollbar:active, .auto-hide-scrollbar.scrolling { scrollbar-color: hsl(var(--border)) transparent; }
              .auto-hide-scrollbar::-webkit-scrollbar { height: 6px; }
              .auto-hide-scrollbar::-webkit-scrollbar-track { background: transparent; }
              .auto-hide-scrollbar::-webkit-scrollbar-thumb { background: transparent; border-radius: 3px; transition: background 0.3s; }
              .auto-hide-scrollbar:active::-webkit-scrollbar-thumb, .auto-hide-scrollbar.scrolling::-webkit-scrollbar-thumb { background: hsl(var(--border)); }
              @media (min-width: 768px) {
                .auto-hide-scrollbar { scrollbar-width: none; }
                .auto-hide-scrollbar::-webkit-scrollbar { display: none; }
              }
            `}</style>
            {projects.map((project) => (
              <article
                key={project.id}
                onClick={() => navigate(`/project/${project.slug}`)}
                className="group cursor-pointer flex-shrink-0 w-[240px] md:w-[320px] rounded-2xl bg-muted p-3 md:p-4 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl mb-3 md:mb-4">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base md:text-lg font-medium text-foreground">{project.name}</h3>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground line-clamp-2">
                  {project.description[language]}
                </p>
              </article>
            ))}
          </div>

          {/* Desktop only: fade + arrow */}
          {canScrollRight && (
            <div className="hidden md:flex absolute right-0 top-0 bottom-4 w-24 items-center justify-end pointer-events-none bg-gradient-to-l from-white to-transparent">
              <button
                onClick={scrollRight}
                className="pointer-events-auto p-2 rounded-full bg-white border border-border text-muted-foreground hover:text-foreground transition-colors mr-2"
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
