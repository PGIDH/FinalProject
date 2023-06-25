export interface MovieData {
  page: number;
  results: TrendingData[];
  total_pages:number;
  total_results:number;
}

export interface TrendingData {
  adult: boolean;
  backdrop_path: string;
  id:number;
  title:string;
  original_language:string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: Float32Array;
  release_date: string;
  first_air_date: string;
  video:boolean;
  vote_average: Float32Array;
  vote_count: number;
  origin_country: string[];
}

