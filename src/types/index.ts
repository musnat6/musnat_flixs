export interface ContentItem {
  id: string;
  tmdbId: number;
  title: string;
  description: string;
  posterPath: string;
  backdropPath: string;
  rating: number;
  genres: string[];
  imdbId?: string;
  type: 'movie' | 'tv';
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
}

export interface TVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
}

interface Genre {
    id: number;
    name: string;
}

export interface MovieDetails extends Movie {
    genres: Genre[];
    imdb_id: string;
}

export interface TVShowDetails extends TVShow {
    genres: Genre[];
}
