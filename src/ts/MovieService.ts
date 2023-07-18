import { MovieModeType, ResponseType } from './constants/types';
import { mapResponse } from './helpers/mapResponse';
import { rednerMovieList } from './helpers/render/renderMovieList';
import { clearLoader, renderLoader } from './helpers/render/renderLoader';
import { FetchService } from './FetchService';
import { QUERY_KEY } from './constants/query-keys';
import { notification } from './helpers/notification';
import { renderRandom } from './helpers/render/renderRandom';

class MoviesService {
    private mode: MovieModeType = 'popular';

    private page = 1;

    private search = '';

    private fetchService = new FetchService();

    async getMovies(movieMode?: MovieModeType): Promise<void> {
        if (movieMode === this.mode) {
            return;
        }
        this.page = 1;
        this.search = '';
        this.mode = movieMode ?? this.mode;
        renderLoader();
        const response: ResponseType = await this.fetchService.getMovieCollection(this.mode, {
            [QUERY_KEY.PAGE]: String(this.page),
        });
        const movieList = response ? mapResponse(response.results) : [];
        clearLoader();
        renderRandom(movieList);
        rednerMovieList(movieList);
    }

    async loadMore(): Promise<void> {
        this.page += 1;
        let response: ResponseType;
        if (this.search) {
            response = await this.fetchService.getMovieByName({
                [QUERY_KEY.PAGE]: String(this.page),
                [QUERY_KEY.QUERY]: this.search,
            });
        } else {
            response = await this.fetchService.getMovieCollection(this.mode, {
                [QUERY_KEY.PAGE]: String(this.page),
            });
        }
        const movieList = mapResponse(response.results);
        rednerMovieList(movieList);
    }

    async getMoviesByName(value: string) {
        if (!value.trim()) {
            return;
        }
        this.page = 1;
        this.search = value;
        renderLoader();
        const response: ResponseType = await this.fetchService.getMovieByName({
            [QUERY_KEY.PAGE]: String(this.page),
            [QUERY_KEY.QUERY]: this.search,
        });
        if (response.results.length < 1 && !response.results) {
            notification('There is not result for the search');
            clearLoader();
            return;
        }
        const movieList = response ? mapResponse(response.results) : [];
        clearLoader();
        rednerMovieList(movieList);
    }
}
export { MoviesService };
