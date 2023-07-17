import { ResponseType, SearchQueryType } from './types';

interface IFetchService {
    getMovieCollection(movieMode: string, searchParams: SearchQueryType): Promise<ResponseType>;
    createUrl(baseUrl: string, path: string, searchParams: SearchQueryType): URL;
}

export type { IFetchService };
