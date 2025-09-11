import type { ContentItem, Movie, TVShow, MovieDetails, TVShowDetails, Season } from '@/types';

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

async function fetchFromTMDB(path: string, params: Record<string, string> = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.append('api_key', API_KEY!);
  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
  
  const res = await fetch(url.toString());
  if (!res.ok) {
    console.error(await res.text());
    throw new Error(`Failed to fetch from TMDB: ${path}`);
  }
  return res.json();
}

function mapMovieToContentItem(movie: Movie): ContentItem {
  return {
    id: `m${movie.id}`,
    tmdbId: movie.id,
    title: movie.title,
    description: movie.overview,
    posterPath: movie.poster_path ? `${IMAGE_BASE_URL}/w500${movie.poster_path}` : 'https://picsum.photos/seed/p-fallback/500/750',
    backdropPath: movie.backdrop_path ? `${IMAGE_BASE_URL}/w1280${movie.backdrop_path}` : 'https://picsum.photos/seed/b-fallback/1280/720',
    rating: movie.vote_average,
    genres: [],
    type: 'movie',
  };
}

function mapTVShowToContentItem(show: TVShow): ContentItem {
  return {
    id: `t${show.id}`,
    tmdbId: show.id,
    title: show.name,
    description: show.overview,
    posterPath: show.poster_path ? `${IMAGE_BASE_URL}/w500${show.poster_path}` : 'https://picsum.photos/seed/p-fallback/500/750',
    backdropPath: show.backdrop_path ? `${IMAGE_BASE_URL}/w1280${show.backdrop_path}`: 'https://picsum.photos/seed/b-fallback/1280/720',
    rating: show.vote_average,
    genres: [],
    type: 'tv',
  };
}

export async function getFeatured(): Promise<ContentItem[]> {
  const { results } = await fetchFromTMDB('/movie/now_playing');
  return results.slice(0, 5).map(mapMovieToContentItem);
}

export async function getPopularMovies(): Promise<ContentItem[]> {
  const { results } = await fetchFromTMDB('/movie/popular');
  return results.map(mapMovieToContentItem);
}

export async function getTrendingShows(): Promise<ContentItem[]> {
  const { results } = await fetchFromTMDB('/trending/tv/week');
  return results.map(mapTVShowToContentItem);
}

export async function getRecommended(): Promise<ContentItem[]> {
  const { results } = await fetchFromTMDB('/movie/top_rated');
  return results.map(mapMovieToContentItem);
}

export async function getAllMovies(): Promise<ContentItem[]> {
    const { results } = await fetchFromTMDB('/discover/movie');
    return results.map(mapMovieToContentItem);
}

export async function getAllShows(): Promise<ContentItem[]> {
    const { results } = await fetchFromTMDB('/discover/tv');
    return results.map(mapTVShowToContentItem);
}


export async function getContentById(id: string): Promise<ContentItem | null> {
  const type = id.startsWith('m') ? 'movie' : 'tv';
  const tmdbId = id.substring(1);

  try {
    if (type === 'movie') {
      const movie: MovieDetails = await fetchFromTMDB(`/movie/${tmdbId}`);
      const externalIds = await fetchFromTMDB(`/movie/${tmdbId}/external_ids`);
      return {
        id: `m${movie.id}`,
        tmdbId: movie.id,
        title: movie.title,
        description: movie.overview,
        posterPath: movie.poster_path ? `${IMAGE_BASE_URL}/w500${movie.poster_path}` : 'https://picsum.photos/seed/p-fallback/500/750',
        backdropPath: movie.backdrop_path ? `${IMAGE_BASE_URL}/w1280${movie.backdrop_path}` : 'https://picsum.photos/seed/b-fallback/1280/720',
        rating: movie.vote_average,
        genres: movie.genres.map(g => g.name),
        imdbId: externalIds.imdb_id,
        type: 'movie',
      };
    } else {
      const show: TVShowDetails = await fetchFromTMDB(`/tv/${tmdbId}`);
      const externalIds = await fetchFromTMDB(`/tv/${tmdbId}/external_ids`);

      const seasonsWithEpisodes = await Promise.all(
        show.seasons
        .filter(s => s.season_number > 0) // Filter out "Specials" season
        .map(async (season: Season) => {
          const seasonDetails = await fetchFromTMDB(`/tv/${tmdbId}/season/${season.season_number}`);
          return {
            ...season,
            episodes: seasonDetails.episodes,
          };
        })
      );

      return {
        id: `t${show.id}`,
        tmdbId: show.id,
        title: show.name,
        description: show.overview,
        posterPath: show.poster_path ? `${IMAGE_BASE_URL}/w500${show.poster_path}` : 'https://picsum.photos/seed/p-fallback/500/750',
        backdropPath: show.backdrop_path ? `${IMAGE_BASE_URL}/w1280${show.backdrop_path}` : 'https://picsum.photos/seed/b-fallback/1280/720',
        rating: show.vote_average,
        genres: show.genres.map(g => g.name),
        imdbId: externalIds.imdb_id,
        type: 'tv',
        seasons: seasonsWithEpisodes,
      };
    }
  } catch (error) {
    console.error(`Error fetching content for id ${id}:`, error);
    return null;
  }
}

export async function searchContent(query: string): Promise<ContentItem[]> {
  if (!query) return [];
  
  const { results } = await fetchFromTMDB('/search/multi', { query });
  
  return results
    .filter((item: any) => (item.media_type === 'movie' || item.media_type === 'tv') && item.poster_path)
    .map((item: any) => {
      if (item.media_type === 'movie') {
        return mapMovieToContentItem(item);
      }
      return mapTVShowToContentItem(item);
    });
}
