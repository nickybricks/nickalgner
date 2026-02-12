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
      {/* Name - static on mobile */}
      <div className="pt-4 md:hidden">
        <Link to="/" className="inline-flex items-center px-4 py-1.5 rounded-full transition-all duration-300">
          <span className="text-sm font-medium tracking-tight text-foreground">
            {t.header.title}
          </span>
        </Link>
      </div>

      {/* Desktop header bar - fixed, max-width aligned */}
      <div className="hidden md:block fixed top-4 left-0 right-0 z-50">
        <div className="max-w-[1260px] mx-auto px-8 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-border/50 shadow-sm hover:bg-white/90 transition-all duration-300">
            <span className="text-sm font-medium tracking-tight text-foreground">
              {t.header.title}
            </span>
          </Link>
          <nav className="flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-xl border border-border/50 shadow-sm px-1.5 py-1.5 whitespace-nowrap">
            {NAV_SECTIONS.map((section) =>
            <button
              key={section}
              onClick={() => handleNav(section)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
              isIndex && activeSection === section ?
              'bg-foreground text-background font-medium' :
              'text-muted-foreground hover:text-foreground'}`
              }>

                {t.header[section]}
              </button>
            )}
            <div className="w-px h-5 bg-border/50 mx-1" />
            <LanguageToggle />
          </nav>
        </div>
      </div>

      {/* Mobile nav pills - bottom fixed */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden z-50 flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-xl border border-border/50 shadow-sm px-1.5 py-1.5 whitespace-nowrap">
        {NAV_SECTIONS.map((section) =>
        <button
          key={section}
          onClick={() => handleNav(section)}
          className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
          isIndex && activeSection === section ?
          'bg-foreground text-background font-medium' :
          'text-muted-foreground hover:text-foreground'}`
          }>

            {t.header[section]}
          </button>
        )}
      </nav>

      {/* Desktop spacer */}
      <div className="hidden md:block h-16" />
    </>);

};