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
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[100px] animate-gradient-shift opacity-40"
          style={{ 
            background: 'radial-gradient(circle, hsl(38 50% 75%) 0%, transparent 70%)',
            animationDelay: '0s' 
          }}
        />
        <div 
          className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full blur-[100px] animate-gradient-shift opacity-35"
          style={{ 
            background: 'radial-gradient(circle, hsl(30 40% 80%) 0%, transparent 70%)',
            animationDelay: '-20s' 
          }}
        />
        <div 
          className="absolute bottom-[15%] left-[25%] w-[450px] h-[450px] rounded-full blur-[100px] animate-gradient-shift opacity-30"
          style={{ 
            background: 'radial-gradient(circle, hsl(45 45% 78%) 0%, transparent 70%)',
            animationDelay: '-40s' 
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
