import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectName: string;
}

export const ImageLightbox = ({
  images,
  initialIndex,
  open,
  onOpenChange,
  projectName,
}: ImageLightboxProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (api && open) {
      api.scrollTo(initialIndex, true);
    }
  }, [api, initialIndex, open]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-none">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 text-foreground hover:bg-background transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <Carousel
          setApi={setApi}
          opts={{
            align: 'center',
            loop: true,
            startIndex: initialIndex,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="-ml-0">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-full h-[85vh] p-4">
                  <img
                    src={image}
                    alt={`${projectName} - Image ${index + 1}`}
                    className="max-h-full max-w-full object-contain rounded-lg"
                    draggable={false}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-none" />
          <CarouselNext className="right-4 bg-background/80 hover:bg-background border-none" />
        </Carousel>

        {/* Bullet Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                current === index
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute top-4 left-4 text-sm text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
          {current + 1} / {images.length}
        </div>
      </DialogContent>
    </Dialog>
  );
};
