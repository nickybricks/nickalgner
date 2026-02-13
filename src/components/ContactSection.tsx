import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Github, Mail } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground tracking-widest mb-6">
              {t.contact.title}
            </h2>
            <p className="text-2xl md:text-3xl font-light text-foreground mb-8">
              {t.contact.cta}
            </p>
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              {t.contact.email}
            </a>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground tracking-widest mb-6">
              {t.contact.elsewhere}
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/nick-algner/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/nickybricks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
