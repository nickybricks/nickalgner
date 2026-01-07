import { useLanguage } from '@/context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            {t.header.title}
          </h1>
          <span className="text-xs text-muted-foreground">{t.header.subtitle}</span>
        </div>
        <LanguageToggle />
      </div>
    </header>
  );
};
