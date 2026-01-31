import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      tagline: 'Digitale Produkte, die funktionieren.',
    },
    en: {
      tagline: 'Building digital products that matter.',
    },
  };

  const t = content[language];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 relative">
      {/* Main content with generous whitespace */}
      <div className="text-center space-y-6 animate-fade-in-up">
        {/* Name - large and elegant */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground">
          Nick
          <br />
          <span className="font-normal">Algner</span>
        </h1>

        {/* Tagline - muted and subtle */}
        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md mx-auto animate-fade-in-delay">
          {t.tagline}
        </p>
      </div>

      {/* Subtle scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-500 animate-fade-in-delay"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" style={{ animationDuration: '2s' }} />
      </button>
    </section>
  );
};
