import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getContentById } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type PlayerPageProps = {
  params: {
    id: string;
  };
};

export default function PlayerPage({ params }: PlayerPageProps) {
  const item = getContentById(params.id);

  if (!item) {
    notFound();
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
          src={`https://www.2embed.cc/embed/${item.imdbId}`}
          allowFullScreen
          title={item.title}
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
}
