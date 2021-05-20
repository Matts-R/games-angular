export interface Game {
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_plataforms: Array<ParentPlataform>;
  publishers: Array<Publisher>;
  ratings: Array<Rating>;
  screenshots: Array<Screeshot>;
  trailers: Array<Trailer>;
}

interface Genre {
  name: string;
}

interface ParentPlataform {
  plataform: {
    name: string;
  };
}

interface Publisher {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screeshot {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}

export interface APIResponse<T> {
  results: Array<T>;
}
