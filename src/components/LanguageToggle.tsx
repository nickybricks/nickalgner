import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="h-8 px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {t.language.toggle}
    </Button>
  );
};
