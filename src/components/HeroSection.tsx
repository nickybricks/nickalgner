import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full blur-[120px] animate-gradient-shift"
          style={{ 
            background: 'radial-gradient(circle, rgba(201, 168, 108, 0.4) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] animate-gradient-shift"
          style={{ 
            background: 'radial-gradient(circle, rgba(210, 180, 140, 0.35) 0%, transparent 70%)',
            animationDelay: '-20s',
          }}
        />
        <div 
          className="absolute -bottom-20 left-1/3 w-[550px] h-[550px] rounded-full blur-[120px] animate-gradient-shift"
          style={{ 
            background: 'radial-gradient(circle, rgba(220, 190, 130, 0.3) 0%, transparent 70%)',
            animationDelay: '-40s',
          }}
        />
      </div>

      {/* Main content with generous whitespace */}
      <div className="text-center space-y-8 animate-fade-in-up">
        {/* Name - large and elegant */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground">
          Nick
          <br />
          <span className="font-normal">Algner</span>
        </h1>

        {/* Tagline - stronger presence */}
        <p className="text-xl md:text-2xl text-foreground/70 font-normal max-w-md mx-auto animate-fade-in-delay">
          {t.hero.tagline}
        </p>

        {/* CTA Button */}
        <div className="pt-4 animate-fade-in-delay" style={{ animationDelay: '0.4s' }}>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToProjects}
            className="border-foreground/20 text-foreground/80 hover:bg-foreground/5 hover:border-foreground/30 hover:text-foreground transition-all duration-300 gap-2"
          >
            {t.hero.viewProjects}
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-500 animate-fade-in-delay"
        aria-label="Scroll to projects"
        style={{ animationDelay: '0.6s' }}
      >
        <ChevronDown className="h-5 w-5 animate-bounce" style={{ animationDuration: '2.5s' }} />
      </button>
    </section>
  );
};
