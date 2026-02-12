import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const onPointerDown = () => {
      setIsDragging(true);
    };

    const onPointerUp = () => {
      setIsDragging(false);
    };

    api.on("select", onSelect);
    api.on("pointerDown", onPointerDown);
    api.on("pointerUp", onPointerUp);
    onSelect();

    return () => {
      api.off("select", onSelect);
      api.off("pointerDown", onPointerDown);
      api.off("pointerUp", onPointerUp);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleProjectClick = (slug: string) => {
    // Prevent navigation if user was dragging/swiping
    if (isDragging) return;
    navigate(`/project/${slug}`);
  };

  return (
    <div className="w-full relative">
            
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          dragFree: false,
          containScroll: "trimSnaps",
          skipSnaps: false,
          duration: 25,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full touch-pan-y"
      >
                
        <CarouselContent className="-ml-0 pb-8">
                    
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-0">
                            
              <article
                onClick={() => handleProjectClick(project.slug)}
                className={cn(
                  "group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:shadow-xl mx-4",
                  isDragging ? "scale-[0.98]" : "active:scale-[0.98]",
                )}
              >
                                
                <div className="aspect-video overflow-hidden select-none pointer-events-none">
                                    
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    draggable={false}
                  />
                                  
                </div>
                                
                <div className="p-5 select-none">
                                    
                  <h2 className="text-xl font-semibold text-card-foreground">
                                        {project.name}
                                      
                  </h2>
                                    
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                                        {project.description[language]}
                                      
                  </p>
                                    
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                                        {t.projects.viewProject}
                                        
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                      
                  </div>
                                  
                </div>
                              
              </article>
                          
            </CarouselItem>
          ))}
                  
        </CarouselContent>
              
      </Carousel>
            {/* Arrow Navigation - Hidden on mobile, visible on tablet+ */}
            
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm transition-all hover:bg-background hover:shadow-lg"
        aria-label="Previous project"
      >
                
        <ChevronLeft className="h-5 w-5 text-foreground" />
              
      </button>
            
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm transition-all hover:bg-background hover:shadow-lg"
        aria-label="Next project"
      >
                
        <ChevronRight className="h-5 w-5 text-foreground" />
              
      </button>
            {/* Bullet Navigation with swipe hint on mobile */}
            
      <div className="flex flex-col items-center gap-3 mt-6">
                
        <div className="flex justify-center gap-2">
                    
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
                  
        </div>
                         {/* Swipe hint - only on mobile */}
                
        <p className="text-xs text-muted-foreground md:hidden animate-pulse">
                    ← {language === "de" ? "Wischen zum Navigieren" : "Swipe to navigate"} →         
        </p>
              
      </div>
          
    </div>
  );
};
