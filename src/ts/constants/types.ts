type ResponseType = {
    page: number;
    results: ResponseMovieType[];
    total_pages: number;
    total_results: number;
};

type ResponseMovieType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    [x: string]: string | number | boolean | number[];
};

type MovieType = {
    backdrop_path: string;
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
};

type MovieModeType = 'popular' | 'upcoming' | 'top_rated';

type WrapperType = 'favorite' | 'collection';

type SearchQueryType = {
    [x: string]: string;
};

export type { ResponseType, ResponseMovieType, MovieType, MovieModeType, SearchQueryType, WrapperType };
