import { useLanguage } from '@/context/LanguageContext';

export const ApproachSection = () => {
  const { t } = useLanguage();

  return (
    <section id="approach" className="py-24 px-4 md:px-6">
      <div className="container">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12">
          {t.approach.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {t.approach.items.map((item) => (
            <div key={item.number}>
              <span className="text-xs text-muted-foreground/60 font-mono">{item.number}</span>
              <h3 className="text-lg font-medium text-foreground mt-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
