import { useLanguage } from '@/context/LanguageContext';
import profileImage from '@/assets/profile-nick.png';
import { Linkedin, Github, Mail } from 'lucide-react';

export const AboutSection = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Über mich',
      intro: 'Ich bin Nick – Head of Operations mit über 6 Jahren Erfahrung im E-Commerce.',
      passion: 'Meine Leidenschaft gilt KI, Apps und digitalen Produkten. Ich baue gerne Systeme, die Prozesse automatisieren und echte Probleme lösen.',
      journey: 'Jetzt gehe ich meinen Weg in diese Richtung weiter – mit eigenen Projekten und dem Ziel, Technologie zugänglich und nützlich zu machen.',
      location: 'Berlin, DE',
      skills: ['Low-Code Platforms', 'Automation', 'KI-Integration', 'Produktentwicklung'],
    },
    en: {
      title: 'About Me',
      intro: "I'm Nick – Head of Operations with over 6 years of experience in E-Commerce.",
      passion: 'My passion lies in AI, apps, and digital products. I love building systems that automate processes and solve real problems.',
      journey: "Now I'm continuing on this path – with my own projects and the goal of making technology accessible and useful.",
      location: 'Berlin, DE',
      skills: ['Low-Code Platforms', 'Automation', 'AI Integration', 'Product Development'],
    },
  };

  const t = content[language];

  return (
    <section className="py-12 md:py-20 animate-fade-in">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Image with soft shadow */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg animate-fade-in-up">
            <img
              src={profileImage}
              alt="Nick Algner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content with generous spacing */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              {t.title}
            </h1>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg font-medium text-foreground">
                {t.intro}
              </p>
              <p>
                {t.passion}
              </p>
              <p>
                {t.journey}
              </p>
            </div>
            
            {/* Skills - border-only style */}
            <div className="flex flex-wrap gap-2 pt-4">
              {t.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 text-sm border border-border text-muted-foreground rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact - minimal and elegant */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-sm">
              <a
                href="mailto:nick@algner.de"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>nick@algner.de</span>
              </a>
              <span className="text-border hidden md:inline">|</span>
              <span className="text-muted-foreground">{t.location}</span>
              <span className="text-border hidden md:inline">|</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/nick-algner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/nickybricks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
