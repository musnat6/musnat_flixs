
'use client';

import { notFound, useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getContentById } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ContentItem } from '@/types';

export default function PlayerPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [item, setItem] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params.id as string;
    if (id) {
      const fetchItem = async () => {
        setLoading(true);
        const fetchedItem = await getContentById(id);
        setItem(fetchedItem);
        setLoading(false);
      };
      fetchItem();
    }
  }, [params.id]);

  useEffect(() => {
    const onFocus = () => {
      // Smartly redirect back if focus is regained (e.g., from a pop-up)
      if (document.activeElement instanceof HTMLIFrameElement) {
        // do nothing if the focus is on the iframe
      } else {
        window.location.reload();
      }
    };

    window.addEventListener('focus', onFocus);
    return () => {
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  if (!item || !item.imdbId) {
    notFound();
  }

  let embedUrl;
  if (item.type === 'movie') {
    embedUrl = `https://www.2embed.cc/embed/${item.imdbId}`;
  } else {
    const season = searchParams.get('s');
    const episode = searchParams.get('e');
    if (season && episode) {
      embedUrl = `https://www.2embed.cc/embedtv/${item.imdbId}&s=${season}&e=${episode}`;
    } else {
      // Default to season 1, episode 1 if not specified
      embedUrl = `https://www.2embed.cc/embedtv/${item.imdbId}&s=1&e=1`;
    }
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col">
      <div className="p-4 flex items-center justify-between z-10">
        <Button variant="ghost" asChild>
          <Link href={`/movie/${item.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to details
          </Link>
        </Button>
        <h1 className="text-lg font-semibold text-muted-foreground truncate">{item.title}</h1>
      </div>
      <div className="flex-1 w-full h-full">
        <iframe
          src={embedUrl}
          allowFullScreen
          title={item.title}
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
}
