'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import type { CarouselImage } from '@/lib/data';

export function Carousel({ images }: { images: CarouselImage[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((img) => (
          <div key={img.id} className="relative flex-[0_0_100%] h-[480px]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={img.id === '1'}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-novex-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-novex-white/80 text-sm tracking-widest uppercase font-semibold">
              {img.alt}
            </p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-novex-red text-white flex items-center justify-center rounded transition-colors"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-novex-red text-white flex items-center justify-center rounded transition-colors"
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}
