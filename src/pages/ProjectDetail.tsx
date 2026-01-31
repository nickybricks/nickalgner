import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectBySlug } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ImageLightbox } from '@/components/ImageLightbox';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = getProjectBySlug(slug || '');

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect();

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container flex flex-col items-center justify-center px-4 py-20">
          <h1 className="text-2xl font-light text-foreground">Project not found</h1>
          <Button variant="ghost" onClick={() => navigate('/')} className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.projectDetail.back}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8 md:py-12 md:px-6 animate-fade-in">
        {/* Back Button - minimal */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.projectDetail.back}
        </button>

        {/* Mobile: Image Carousel */}
        <div className="lg:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {project.images.map((image, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div 
                    className="overflow-hidden rounded-2xl bg-muted aspect-video flex items-center justify-center cursor-zoom-in"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`${project.name} - Image ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      draggable={false}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Bullet Navigation - smaller and subtle */}
          <div className="flex justify-center gap-2 mt-6">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500',
                  current === index
                    ? 'w-6 bg-primary'
                    : 'w-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/40'
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Content */}
          <div className="mt-10 space-y-6">
            <h1 className="text-2xl md:text-3xl font-light text-foreground">
              {project.name}
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
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

            {/* Challenges as numbered list */}
            <section className="pt-6 pb-12">
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
                {t.projectDetail.challenges}
              </h2>
              <ol className="space-y-4">
                {project.challenges[language].map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-muted-foreground"
                  >
                    <span className="text-sm font-medium text-primary/60 mt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>

        {/* Desktop: Two Column Layout with more whitespace */}
        <div className="hidden lg:block">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left Column - Images with more spacing */}
            <div className="space-y-8">
              {project.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl cursor-zoom-in hover:opacity-95 transition-opacity duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`${project.name} - Image ${index + 1}`}
                    className="h-auto w-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>

            {/* Right Column - Content with generous spacing */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-8">
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-light text-foreground">
                  {project.name}
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground">
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

              {/* Challenges as numbered list - japanese style */}
              <section className="pt-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
                  {t.projectDetail.challenges}
                </h2>
                <ol className="space-y-5">
                  {project.challenges[language].map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-5 text-muted-foreground"
                    >
                      <span className="text-sm font-medium text-primary/60 mt-0.5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>

          {/* Full Width Gallery - Remaining Images */}
          {project.images.length > 4 && (
            <section className="mt-20 pb-16">
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
                {t.projectDetail.gallery}
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {project.images.slice(4).map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl bg-muted aspect-video flex items-center justify-center cursor-zoom-in hover:opacity-95 transition-opacity duration-300"
                    onClick={() => openLightbox(index + 4)}
                  >
                    <img
                      src={image}
                      alt={`${project.name} - Image ${index + 5}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Lightbox */}
      <ImageLightbox
        images={project.images}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        projectName={project.name}
      />
    </div>
  );
};

export default ProjectDetail;
