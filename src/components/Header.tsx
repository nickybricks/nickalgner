import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isIndex = location.pathname === '/';
  const [activeSection, setActiveSection] = useState<string>('work');

  useEffect(() => {
    if (!isIndex) return;

    const sections = ['work', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="hover:opacity-70 transition-opacity duration-300">
          <span className="text-sm font-medium tracking-tight text-foreground">
            {t.header.title}
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {isIndex ? (
            <>
              {['work', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                    activeSection === section
                      ? 'bg-foreground text-background font-medium'
                      : 'text-muted-foreground hover:text-foreground border border-transparent hover:border-border'
                  }`}
                >
                  {t.header[section as 'work' | 'about' | 'contact']}
                </button>
              ))}
            </>
          ) : (
            <Link
              to="/"
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full border border-transparent hover:border-border transition-all duration-300"
            >
              {t.header.work}
            </Link>
          )}
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};
