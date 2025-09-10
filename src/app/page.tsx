import { Suspense } from 'react';
import { MovieCarousel } from '@/components/movie-carousel';
import { ContentSection } from '@/components/content-section';
import { getFeatured, getPopularMovies, getTrendingShows, getRecommended } from '@/lib/data';

export default function Home() {
  const featured = getFeatured();
  const popularMovies = getPopularMovies();
  const trendingShows = getTrendingShows();
  const recommended = getRecommended();

  return (
    <div className="flex flex-col">
      <Suspense fallback={<div className="w-full h-[50vh] bg-card" />}>
        <MovieCarousel items={featured} />
      </Suspense>

      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <Suspense fallback={<ContentSection.Skeleton />}>
          <ContentSection title="Popular Movies" items={popularMovies} />
        </Suspense>

        <Suspense fallback={<ContentSection.Skeleton />}>
          <ContentSection title="Trending TV Shows" items={trendingShows} />
        </Suspense>

        <Suspense fallback={<ContentSection.Skeleton />}>
          <ContentSection title="Recommended For You" items={recommended} />
        </Suspense>
      </div>
    </div>
  );
}
