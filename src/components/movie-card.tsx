import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ContentItem } from '@/types';

interface MovieCardProps {
  item: ContentItem;
  className?: string;
}

export function MovieCard({ item, className }: MovieCardProps) {
  const href = `/movie/${item.id}`;

  return (
    <Link href={href} className="group outline-none" tabIndex={-1}>
      <Card className={cn("overflow-hidden h-full border-2 border-transparent group-focus-visible:border-primary transition-all duration-300 ease-in-out hover:-translate-y-2", className)}>
        <CardContent className="p-0 aspect-[2/3] relative">
          <Image
            src={item.posterPath}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="movie poster"
          />
        </CardContent>
        <CardFooter className="p-3">
          <h3 className="font-semibold text-sm truncate group-hover:text-primary transition-colors">
            {item.title}
          </h3>
        </CardFooter>
      </Card>
    </Link>
  );
}
