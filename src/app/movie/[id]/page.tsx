import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getContentById } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlayCircle, Star } from 'lucide-react';

type MovieDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const item = await getContentById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src={item.backdropPath}
          alt={item.title}
          fill
          className="object-cover"
          priority
          data-ai-hint="movie scene"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container -mt-48 md:-mt-64 relative z-10 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:items-end md:gap-8">
            <div className="mt-6 md:mt-0 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-black text-balance">{item.title}</h1>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-primary" fill="currentColor" />
                  <span className="font-bold text-lg text-foreground">{item.rating.toFixed(1)}</span>
                </div>
                <span>•</span>
                <span>{item.type === 'movie' ? 'Movie' : 'TV Show'}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-6">
            <div className="flex flex-wrap gap-2">
              {item.genres.map((genre) => (
                <Badge key={genre} variant="secondary">{genre}</Badge>
              ))}
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed text-balance">
              {item.description}
            </p>

            <Button asChild size="lg" className="w-full md:w-auto" disabled={!item.imdbId}>
              <Link href={`/player/${item.id}`}>
                <PlayCircle className="mr-2 h-6 w-6" />
                Play Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
