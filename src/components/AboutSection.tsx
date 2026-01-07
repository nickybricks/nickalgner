import { useLanguage } from '@/context/LanguageContext';
import profileImage from '@/assets/profile-nick.png';
import { Linkedin } from 'lucide-react';

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
    <section className="py-8">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <img
              src={profileImage}
              alt="Nick Algner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              {t.title}
            </h1>
            
            <p className="text-lg text-foreground font-medium">
              {t.intro}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.passion}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.journey}
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {t.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="mailto:nick@algner.de"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                nick@algner.de
              </a>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{t.location}</span>
              <span className="text-muted-foreground">•</span>
              <a
                href="https://www.linkedin.com/in/nick-algner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
