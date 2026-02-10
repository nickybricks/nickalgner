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
      {/* Fixed name - not in header, part of page */}
      <div className="fixed top-0 left-0 z-40 px-4 md:px-6 h-16 flex items-center">
        <div className="container">
          <Link to="/" className="hover:opacity-70 transition-opacity duration-300">
            <span className="text-sm font-medium tracking-tight text-foreground">
              {t.header.title}
            </span>
          </Link>
        </div>
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
