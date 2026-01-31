import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="hover:opacity-70 transition-opacity duration-300">
          <span className="text-sm font-medium tracking-tight text-foreground">
            {t.header.title}
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            to="/about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {t.header.about}
          </Link>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};
