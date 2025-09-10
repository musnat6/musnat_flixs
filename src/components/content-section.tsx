import { MovieCard } from '@/components/movie-card';
import { Skeleton } from '@/components/ui/skeleton';
import type { ContentItem } from '@/types';

interface ContentSectionProps {
  title: string;
  items: ContentItem[];
}

export function ContentSection({ title, items }: ContentSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 -mb-4">
          {items.map((item) => (
            <MovieCard key={item.id} item={item} className="w-[180px] md:w-[220px] flex-shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}

const ContentSectionSkeleton = () => (
  <section className="space-y-4">
    <Skeleton className="h-9 w-64" />
    <div className="flex space-x-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-[180px] md:w-[220px] flex-shrink-0">
          <Skeleton className="aspect-[2/3] w-full" />
          <Skeleton className="h-6 w-3/4 mt-3" />
        </div>
      ))}
    </div>
  </section>
);

ContentSection.Skeleton = ContentSectionSkeleton;
