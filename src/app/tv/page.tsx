import { MovieCard } from '@/components/movie-card';
import { getAllShows } from '@/lib/data';

export default function TvShowsPage() {
  const shows = getAllShows();

  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">TV Shows</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {shows.map(item => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
