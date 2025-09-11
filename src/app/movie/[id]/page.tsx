
'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getContentById } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlayCircle, Star, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ContentItem, Season } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from '@/components/ui/card';

export default function MovieDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [item, setItem] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);

  useEffect(() => {
    if (id) {
      const fetchItem = async () => {
        setLoading(true);
        const fetchedItem = await getContentById(id);
        setItem(fetchedItem);
        if (fetchedItem?.type === 'tv' && fetchedItem.seasons && fetchedItem.seasons.length > 0) {
          setSelectedSeason(fetchedItem.seasons[0]);
        }
        setLoading(false);
      };
      fetchItem();
    }
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!item) {
    notFound();
  }

  const handleSeasonChange = (seasonNumber: string) => {
    const season = item.seasons?.find(s => s.season_number.toString() === seasonNumber) || null;
    setSelectedSeason(season);
  };

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

            {item.type === 'movie' && (
              <Button asChild size="lg" className="w-full md:w-auto" disabled={!item.imdbId}>
                <Link href={`/player/${item.id}`}>
                  <PlayCircle className="mr-2 h-6 w-6" />
                  Play Now
                </Link>
              </Button>
            )}
          </div>
        </div>
        
        {item.type === 'tv' && item.seasons && (
          <div className="max-w-4xl mx-auto mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Episodes</h2>
              <Select onValueChange={handleSeasonChange} defaultValue={selectedSeason?.season_number.toString()}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select season" />
                </SelectTrigger>
                <SelectContent>
                  {item.seasons.map(season => (
                    <SelectItem key={season.id} value={season.season_number.toString()}>
                      {season.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {selectedSeason?.episodes?.map(episode => (
                <Card key={episode.id} className="overflow-hidden">
                  <CardContent className="p-0 flex">
                    <div className="relative w-1/3 aspect-video flex-shrink-0">
                      <Image
                        src={episode.still_path ? `https://image.tmdb.org/t/p/w300${episode.still_path}` : 'https://picsum.photos/seed/e-fallback/300/169'}
                        alt={episode.name}
                        fill
                        className="object-cover"
                        data-ai-hint="tv episode"
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{episode.episode_number}. {episode.name}</h3>
                        <Button asChild variant="ghost" size="icon" disabled={!item.imdbId}>
                          <Link href={`/player/${item.id}?s=${selectedSeason.season_number}&e=${episode.episode_number}`}>
                            <PlayCircle />
                          </Link>
                        </Button>
                      </div>
                      <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{episode.overview}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
