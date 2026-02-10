import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { useEffect, useState } from 'react';

const NAV_SECTIONS = ['work', 'about', 'contact'] as const;

export const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isIndex = location.pathname === '/';
  const [activeSection, setActiveSection] = useState<string>('work');

  useEffect(() => {
    if (!isIndex) return;

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

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isIndex]);

  const handleNav = (section: string) => {
    if (isIndex) {
      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <>
      {/* Fixed name - liquid glass pill */}
      <div className="fixed top-4 left-4 md:left-6 z-50">
        <Link to="/" className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-border/50 shadow-sm hover:bg-white/90 transition-all duration-300">
          <span className="text-sm font-medium tracking-tight text-foreground">
            {t.header.title}
          </span>
        </Link>
      </div>

      {/* Floating pill nav - sticky header */}
      <nav className="fixed top-4 right-4 md:right-6 z-50 flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-xl border border-border/50 shadow-sm px-1.5 py-1.5">
        {NAV_SECTIONS.map((section) => (
          <button
            key={section}
            onClick={() => handleNav(section)}
            className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
              isIndex && activeSection === section
                ? 'bg-foreground text-background font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t.header[section]}
          </button>
        ))}
        <div className="w-px h-5 bg-border/50 mx-1" />
        <LanguageToggle />
      </nav>

      {/* Spacer for content */}
      <div className="h-16" />
    </>
  );
};
