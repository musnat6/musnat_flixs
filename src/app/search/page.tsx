import { Suspense } from 'react';
import { SearchInput } from '@/components/search-input';
import { MovieCard } from '@/components/movie-card';
import { searchContent } from '@/lib/data';
import type { ContentItem } from '@/types';

type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  
  return (
    <div className="container py-12">
      <SearchInput />
      <Suspense key={query} fallback={<SearchResultsSkeleton />}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}

async function SearchResults({ query }: { query: string }) {
  if (!query) {
    return <div className="text-center text-muted-foreground mt-12">Start typing to search for content.</div>;
  }
  
  const results: ContentItem[] = await searchContent(query);

  if (results.length === 0) {
    return <div className="text-center text-muted-foreground mt-12">No results found for &quot;{query}&quot;.</div>;
  }

  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
      {results.map(item => (
        <MovieCard key={item.id} item={item} />
      ))}
    </div>
  );
}

import { Skeleton } from '@/components/ui/skeleton';

function SearchResultsSkeleton() {
  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="w-full">
          <Skeleton className="aspect-[2/3] w-full" />
          <Skeleton className="h-6 w-3/4 mt-3" />
        </div>
      ))}
    </div>
  );
}
