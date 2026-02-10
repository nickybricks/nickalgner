import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isIndex = location.pathname === '/';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
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
                  className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full border border-transparent hover:border-border transition-all duration-300"
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
