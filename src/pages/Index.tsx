import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ApproachSection } from '@/components/ApproachSection';
import { ContactSection } from '@/components/ContactSection';
import { useLanguage } from '@/context/LanguageContext';
import { PageTransition } from '@/components/PageTransition';
import profileImage from '@/assets/profile-nick.png';

const Index = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-24 px-4 md:px-6">
          <div className="container">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12">
              {t.about.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={profileImage}
                  alt="Nick Algner"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-2 space-y-4">
                <p className="text-lg font-medium text-foreground">{t.about.intro}</p>
                <p className="text-muted-foreground leading-relaxed">{t.about.passion}</p>
                <p className="text-muted-foreground leading-relaxed">{t.about.journey}</p>

                <div className="pt-6">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                    {t.about.capabilities}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {t.about.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-1.5 text-sm border border-border text-muted-foreground rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ApproachSection />
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Index;
