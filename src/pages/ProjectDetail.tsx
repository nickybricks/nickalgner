import { useParams, useNavigate } from 'react-router-dom';
import { getProjectBySlug } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/PageTransition';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  const project = getProjectBySlug(slug || '');

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="container flex flex-col items-center justify-center px-4 py-20">
            <h1 className="text-2xl font-semibold text-foreground">Project not found</h1>
            <Button variant="ghost" onClick={() => navigate('/')} className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.projectDetail.back}
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  const screenshotImages = project.images.slice(1);
  const toolsRow1 = project.tools.filter((_, i) => i % 2 === 0);
  const toolsRow2 = project.tools.filter((_, i) => i % 2 !== 0);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container px-4 py-8 md:py-12 md:px-6">
          {/* Mobile: X close button */}
          <button
            onClick={() => navigate('/')}
            className={`fixed top-4 right-4 z-50 md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full backdrop-blur-sm shadow-sm transition-colors duration-300 ${
              theme === 'dark' ? 'bg-background/60' : 'bg-background/80'
            }`}
          >
            <X className="h-6 w-6 text-foreground" />
          </button>

          {/* Desktop: Back button */}
          <button
            onClick={() => navigate('/')}
            className="hidden md:flex items-center gap-2 mb-8 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.projectDetail.back}
          </button>

          {/* Hero Section */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            {/* Hero Image */}
            <div className="overflow-hidden rounded-2xl bg-muted">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Hero Text */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                {project.name}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {project.description[language]}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="gap-2 rounded-full">
                  {t.projectDetail.visitWebsite}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Content Sections */}
          <div className="mt-16 md:mt-24 space-y-16 md:space-y-20">
            {/* Challenges */}
            <section>
              <h2 className="text-sm font-medium text-muted-foreground tracking-widest mb-6 md:mb-8">
                {t.projectDetail.challenges}
              </h2>
              <ol className="space-y-4 md:space-y-5">
                {project.challenges[language].map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4 md:gap-5 text-muted-foreground">
                    <span className="text-sm font-medium text-primary/60 mt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm md:text-base leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Problem Solved */}
            <section>
              <h2 className="text-sm font-medium text-muted-foreground tracking-widest mb-6 md:mb-8">
                {t.projectDetail.problemSolved}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {project.problemSolved[language]}
              </p>
            </section>

            {/* Architecture */}
            <section>
              <h2 className="text-sm font-medium text-muted-foreground tracking-widest mb-6 md:mb-8">
                {t.projectDetail.architecture}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.architectureTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm font-normal border-none"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Tools */}
            <section>
              <h2 className="text-sm font-medium text-muted-foreground tracking-widest mb-6 md:mb-8">
                {t.projectDetail.tools}
              </h2>
              <div className="space-y-3">
                {/* Row 1 */}
                <div className="-mx-4 md:mx-0 px-4 md:px-0 overflow-x-auto md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <div className="flex gap-2 md:flex-wrap w-max md:w-auto">
                    {toolsRow1.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground whitespace-nowrap"
                      >
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Row 2 - offset */}
                <div className="-mx-4 md:mx-0 px-4 md:px-0 overflow-x-auto md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <div className="flex gap-2 md:flex-wrap w-max md:w-auto pl-6 md:pl-6">
                    {toolsRow2.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground whitespace-nowrap"
                      >
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Screenshots */}
            {screenshotImages.length > 0 && (
              <section className="pb-16">
                <h2 className="text-sm font-medium text-muted-foreground tracking-widest mb-6 md:mb-8">
                  {t.projectDetail.screenshots}
                </h2>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
                  {screenshotImages.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl bg-muted"
                    >
                      <img
                        src={image}
                        alt={`${project.name} - Screenshot ${index + 1}`}
                        className="h-auto w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
