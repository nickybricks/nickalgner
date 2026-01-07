import { useLanguage } from '@/context/LanguageContext';

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
    <section className="py-12 border-t border-border">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-6">
          {t.title}
        </h2>
        
        <div className="max-w-2xl space-y-4">
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
          <div className="pt-4">
            <a
              href="mailto:nick@algner.de"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              nick@algner.de
            </a>
            <span className="text-muted-foreground mx-2">•</span>
            <span className="text-muted-foreground">{t.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
