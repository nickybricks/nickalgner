import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="w-full border-b border-border/50 bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity">
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            {t.header.title}
          </h1>
          <span className="text-xs text-muted-foreground">{t.header.subtitle}</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            to="/about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.header.about}
          </Link>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};
