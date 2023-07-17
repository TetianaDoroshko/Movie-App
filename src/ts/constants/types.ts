type ResponseType = {
    page: number;
    results: ResponseMovieType[];
    total_pages: number;
    total_results: number;
};

// type ResponseMovieType = {
//     adult: boolean;
//     backdrop_path: string;
//     genre_ids: number[];
//     id: number;
//     original_language: string;
//     original_title: string;
//     overview: string;
//     popularity: number;
//     poster_path: string;
//     release_date: string;
//     title: string;
//     video: boolean;
//     vote_average: number;
//     vote_count: number;
// };

type ResponseMovieType = Record<string, string | number | boolean | number[]>;

type MovieType = {
    overview: string;
    poster_path: string;
    release_date: string;
};

type MovieModeType = 'popular' | 'upcoming' | 'top_rated';

// type QueryKey = 'query' | 'page' | 'api_key';

type SearchQueryType = {
    [x: string]: string;
};

export type { ResponseType, ResponseMovieType, MovieType, MovieModeType, SearchQueryType };
