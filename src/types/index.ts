export interface ContentItem {
  id: string;
  title: string;
  description: string;
  posterPath: string;
  backdropPath: string;
  rating: number;
  genres: string[];
  imdbId: string;
  type: 'movie' | 'tv';
}
