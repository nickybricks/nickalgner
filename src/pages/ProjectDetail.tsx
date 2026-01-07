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
          <h1 className="text-2xl font-bold text-foreground">Project not found</h1>
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
      <main className="container px-4 py-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.projectDetail.back}
        </Button>

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
                    className="overflow-hidden rounded-2xl shadow-lg bg-muted aspect-video flex items-center justify-center cursor-zoom-in"
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

          {/* Bullet Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  current === index
                    ? 'w-6 bg-primary'
                    : 'w-2 bg-muted-foreground/30'
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Content */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-foreground">
              {project.name}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {project.description[language]}
            </p>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex"
            >
              <Button className="gap-2">
                {t.projectDetail.visitWebsite}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>

            <section className="mt-8 pb-8">
              <h2 className="text-lg font-semibold text-foreground">
                {t.projectDetail.challenges}
              </h2>
              <ul className="mt-3 space-y-2">
                {project.challenges[language].map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Desktop: Two Column Layout */}
        <div className="hidden lg:block">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {project.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl shadow-lg cursor-zoom-in hover:opacity-90 transition-opacity"
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

            {/* Right Column - Content */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div>
                <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                  {project.name}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {project.description[language]}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex"
                >
                  <Button className="gap-2">
                    {t.projectDetail.visitWebsite}
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              <section className="mt-10">
                <h2 className="text-xl font-semibold text-foreground">
                  {t.projectDetail.challenges}
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.challenges[language].map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Full Width Gallery - Remaining Images */}
          {project.images.length > 4 && (
            <section className="mt-12 pb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {t.projectDetail.gallery}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.images.slice(4).map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl shadow-md bg-muted aspect-video flex items-center justify-center cursor-zoom-in hover:opacity-90 transition-opacity"
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
