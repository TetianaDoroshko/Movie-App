import { MovieModeType, ResponseType, SearchQueryType } from './constants/types';

import { API_KEY, API_URL } from './constants/api-url';
import { QUERY_KEY } from './constants/query-keys';

class FetchService {
    async getMovieCollection(movieMode: MovieModeType, searchParams: SearchQueryType): Promise<ResponseType> {
        const url = this.createUrl(API_URL.BASE_URL, movieMode, searchParams);
        const response = await fetch(url);
        const movies = await response.json();
        return movies;
    }

    async getMovieByName(searchParams: SearchQueryType): Promise<ResponseType> {
        const url = this.createUrl(API_URL.SEARCH_MOVIE_URL, null, searchParams);
        const response = await fetch(url);
        const movies = await response.json();
        return movies;
    }

    createUrl(baseUrl: string, path: string | null, searchParams: SearchQueryType): URL {
        const url: URL = path ? new URL(path, baseUrl) : new URL(baseUrl);
        url.searchParams.set(QUERY_KEY.API_KEY, API_KEY);

        Object.keys(searchParams).forEach((key) => {
            url.searchParams.set(key, searchParams[key]);
        });

        return url;
    }
}

export { FetchService };
