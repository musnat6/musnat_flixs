import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import type { ContentItem } from '@/types';

interface MovieCarouselProps {
  items: ContentItem[];
}

export function MovieCarousel({ items }: MovieCarouselProps) {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative aspect-[16/8] md:aspect-[16/7] w-full">
              <Image
                src={item.backdropPath}
                alt={item.title}
                fill
                priority
                className="object-cover"
                data-ai-hint="movie scene"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container text-white max-w-lg space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-balance">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-3 text-balance">
                    {item.description}
                  </p>
                  <div className="flex gap-4">
                    <Button asChild size="lg">
                      <Link href={`/player/${item.id}`}>
                        <PlayCircle className="mr-2 h-6 w-6" />
                        Play
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                       <Link href={`/movie/${item.id}`}>
                        More Info
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 hidden md:inline-flex" />
      <CarouselNext className="right-4 hidden md:inline-flex" />
    </Carousel>
  );
}
