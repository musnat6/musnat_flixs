import type { ContentItem } from '@/types';

const allContent: ContentItem[] = [
  // Movies
  {
    id: 'm1',
    title: 'Cosmic Odyssey',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    posterPath: 'https://picsum.photos/seed/p1/500/750',
    backdropPath: 'https://picsum.photos/seed/b1/1280/720',
    rating: 8.6,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    imdbId: 'tt0816692',
    type: 'movie',
  },
  {
    id: 'm2',
    title: 'The Last Stand',
    description: 'An ex-military operative is forced to take a last stand against a corrupt government agency.',
    posterPath: 'https://picsum.photos/seed/p2/500/750',
    backdropPath: 'https://picsum.photos/seed/b2/1280/720',
    rating: 7.9,
    genres: ['Action', 'Thriller'],
    imdbId: 'tt1454029',
    type: 'movie',
  },
  {
    id: 'm3',
    title: 'Echoes of Time',
    description: 'A historian discovers a way to communicate with the past, but her actions have unforeseen consequences on the present.',
    posterPath: 'https://picsum.photos/seed/p3/500/750',
    backdropPath: 'https://picsum.photos/seed/b3/1280/720',
    rating: 7.2,
    genres: ['Mystery', 'Sci-Fi', 'Thriller'],
    imdbId: 'tt0114746',
    type: 'movie',
  },
  {
    id: 'm4',
    title: 'Chronicles of Aethel',
    description: 'In a land of myth and magic, a young warrior must unite the kingdoms against a rising darkness.',
    posterPath: 'https://picsum.photos/seed/p4/500/750',
    backdropPath: 'https://picsum.photos/seed/b4/1280/720',
    rating: 8.8,
    genres: ['Fantasy', 'Adventure', 'Action'],
    imdbId: 'tt0167260',
    type: 'movie',
  },
  {
    id: 'm5',
    title: 'The Crimson Cipher',
    description: 'A brilliant cryptographer is ensnared in a web of international espionage after solving an ancient puzzle.',
    posterPath: 'https://picsum.photos/seed/p5/500/750',
    backdropPath: 'https://picsum.photos/seed/b5/1280/720',
    rating: 8.1,
    genres: ['Thriller', 'Mystery'],
    imdbId: 'tt0382625',
    type: 'movie',
  },
  {
    id: 'm6',
    title: 'Zero Gravity',
    description: 'An astronaut becomes stranded in space and must fight for survival.',
    posterPath: 'https://picsum.photos/seed/p6/500/750',
    backdropPath: 'https://picsum.photos/seed/b6/1280/720',
    rating: 7.7,
    genres: ['Sci-Fi', 'Thriller'],
    imdbId: 'tt1454468',
    type: 'movie',
  },
  {
    id: 'm7',
    title: 'Neon Dystopia',
    description: 'In a futuristic city, a detective uncovers a conspiracy that threatens to upend society.',
    posterPath: 'https://picsum.photos/seed/p7/500/750',
    backdropPath: 'https://picsum.photos/seed/b7/1280/720',
    rating: 8.1,
    genres: ['Sci-Fi', 'Cyberpunk', 'Action'],
    imdbId: 'tt1856101',
    type: 'movie',
  },
  {
    id: 'm8',
    title: 'Forgotten Kingdom',
    description: 'An archaeologist discovers a lost city, but awakens an ancient curse.',
    posterPath: 'https://picsum.photos/seed/p8/500/750',
    backdropPath: 'https://picsum.photos/seed/b8/1280/720',
    rating: 6.9,
    genres: ['Adventure', 'Horror'],
    imdbId: 'tt0082971',
    type: 'movie',
  },
  {
    id: 'm9',
    title: 'Ocean\'s Heart',
    description: 'A marine biologist forms an unlikely bond with a mysterious sea creature.',
    posterPath: 'https://picsum.photos/seed/p9/500/750',
    backdropPath: 'https://picsum.photos/seed/b9/1280/720',
    rating: 7.4,
    genres: ['Drama', 'Fantasy'],
    imdbId: 'tt0103639',
    type: 'movie',
  },
  {
    id: 'm10',
    title: 'The Alchemist\'s Legacy',
    description: 'Two siblings race to find their ancestor\'s legendary discovery before it falls into the wrong hands.',
    posterPath: 'https://picsum.photos/seed/p10/500/750',
    backdropPath: 'https://picsum.photos/seed/b10/1280/720',
    rating: 7.8,
    genres: ['Adventure', 'Family', 'Mystery'],
    imdbId: 'tt0119654',
    type: 'movie',
  },

  // TV Shows
  {
    id: 't1',
    title: 'Sector 7',
    description: 'A specialized unit in a futuristic city investigates crimes involving advanced technology.',
    posterPath: 'https://picsum.photos/seed/t1/500/750',
    backdropPath: 'https://picsum.photos/seed/bt1/1280/720',
    rating: 8.9,
    genres: ['Sci-Fi', 'Crime', 'Drama'],
    imdbId: 'tt4574334',
    type: 'tv',
  },
  {
    id: 't2',
    title: 'The Crown of Kings',
    description: 'Noble families vie for control of a mythical land, leading to war and betrayal.',
    posterPath: 'https://picsum.photos/seed/t2/500/750',
    backdropPath: 'https://picsum.photos/seed/bt2/1280/720',
    rating: 9.3,
    genres: ['Fantasy', 'Drama', 'Action'],
    imdbId: 'tt0944947',
    type: 'tv',
  },
  {
    id: 't3',
    title: 'Westwood',
    description: 'In a futuristic theme park, android hosts begin to question their reality.',
    posterPath: 'https://picsum.photos/seed/t3/500/750',
    backdropPath: 'https://picsum.photos/seed/bt3/1280/720',
    rating: 8.5,
    genres: ['Sci-Fi', 'Western', 'Mystery'],
    imdbId: 'tt0475784',
    type: 'tv',
  },
  {
    id: 't4',
    title: 'The Chemist',
    description: 'A high school chemistry teacher diagnosed with terminal cancer turns to a life of crime.',
    posterPath: 'https://picsum.photos/seed/t4/500/750',
    backdropPath: 'https://picsum.photos/seed/bt4/1280/720',
    rating: 9.5,
    genres: ['Crime', 'Drama', 'Thriller'],
    imdbId: 'tt0903747',
    type: 'tv',
  },
  {
    id: 't5',
    title: 'The Capital',
    description: 'A look at the lives of a group of people working in a 1960s advertising agency.',
    posterPath: 'https://picsum.photos/seed/t5/500/750',
    backdropPath: 'https://picsum.photos/seed/bt5/1280/720',
    rating: 8.6,
    genres: ['Drama'],
    imdbId: 'tt0804503',
    type: 'tv',
  },
  {
    id: 't6',
    title: 'Mindhunter',
    description: 'In the late 1970s, two FBI agents expand criminal science by delving into the psychology of murder.',
    posterPath: 'https://picsum.photos/seed/t6/500/750',
    backdropPath: 'https://picsum.photos/seed/bt6/1280/720',
    rating: 8.6,
    genres: ['Crime', 'Drama', 'Thriller'],
    imdbId: 'tt5290382',
    type: 'tv',
  },
  {
    id: 't7',
    title: 'Dark Echoes',
    description: 'The disappearance of a child sets off a chain of events that exposes the secrets of a small town.',
    posterPath: 'https://picsum.photos/seed/t7/500/750',
    backdropPath: 'https://picsum.photos/seed/bt7/1280/720',
    rating: 8.7,
    genres: ['Sci-Fi', 'Mystery', 'Thriller'],
    imdbId: 'tt5753856',
    type: 'tv',
  },
  {
    id: 't8',
    title: 'The Office',
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
    posterPath: 'https://picsum.photos/seed/t8/500/750',
    backdropPath: 'https://picsum.photos/seed/bt8/1280/720',
    rating: 8.9,
    genres: ['Comedy'],
    imdbId: 'tt0386676',
    type: 'tv',
  },
  {
    id: 't9',
    title: 'Fleabag',
    description: 'A dry-witted woman, known only as Fleabag, has no filter as she navigates life and love in London.',
    posterPath: 'https://picsum.photos/seed/t9/500/750',
    backdropPath: 'https://picsum.photos/seed/bt9/1280/720',
    rating: 8.7,
    genres: ['Comedy', 'Drama'],
    imdbId: 'tt5687612',
    type: 'tv',
  },
  {
    id: 't10',
    title: 'Sherlock',
    description: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    posterPath: 'https://picsum.photos/seed/t10/500/750',
    backdropPath: 'https://picsum.photos/seed/bt10/1280/720',
    rating: 9.1,
    genres: ['Crime', 'Drama', 'Mystery'],
    imdbId: 'tt1475582',
    type: 'tv',
  }
];

export function getAllContent() {
  return allContent;
}

export function getAllMovies() {
    return allContent.filter(item => item.type === 'movie');
}

export function getAllShows() {
    return allContent.filter(item => item.type === 'tv');
}

export function getFeatured() {
  return [allContent[0], allContent[1], allContent[3], allContent[10], allContent[11]];
}

export function getPopularMovies() {
  return allContent.filter(item => item.type === 'movie').slice(0, 10);
}

export function getTrendingShows() {
  return allContent.filter(item => item.type === 'tv').slice(0, 10);
}

export function getRecommended() {
  // Simple "recommendation" logic
  return [...allContent.slice(5, 10), ...allContent.slice(15, 20)].sort(() => 0.5 - Math.random());
}

export function getContentById(id: string) {
  return allContent.find(item => item.id === id);
}

export function searchContent(query: string): ContentItem[] {
  if (!query) return [];
  const lowerCaseQuery = query.toLowerCase();
  return allContent.filter(item => 
    item.title.toLowerCase().includes(lowerCaseQuery) ||
    item.description.toLowerCase().includes(lowerCaseQuery) ||
    item.genres.some(genre => genre.toLowerCase().includes(lowerCaseQuery))
  );
}
