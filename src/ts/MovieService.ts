import { MovieModeType, MovieType, ResponseType } from './constants/types';
import { mapResponse, mapperMovie } from './helpers/mapResponse';
import { rednerMovieList } from './helpers/render/renderMovieList';
import { clearLoader, renderLoader } from './helpers/render/renderLoader';
import { FetchService } from './FetchService';
import { QUERY_KEY } from './constants/query-keys';
import { notification } from './helpers/notification';
import { renderRandom } from './helpers/render/renderRandom';
import { controlListEnd, enableLoadBtn } from './helpers/controlListEnd';
import { renderFavorite } from './helpers/render/renderFavorite';
import { getFavoriteListFromStorage } from './helpers/storage';

class MoviesService {
    private mode: MovieModeType = 'popular';

    private page = 1;

    private search = '';

    protected favoriteMovies: MovieType[] = [];

    protected fetchService = new FetchService();

    async getMovies(movieMode?: MovieModeType): Promise<void> {
        enableLoadBtn();
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
        const movieList = response ? response.results.map(mapperMovie) : [];
        clearLoader();
        renderRandom(movieList);
        rednerMovieList(movieList);
    }

    async getFavoriteMovies(): Promise<void> {
        const favoriteListId = getFavoriteListFromStorage() ?? [];

        const promiseList = favoriteListId.map(this.fetchService.getMovieById.bind(this.fetchService));
        const favoriteMovies = await Promise.allSettled(promiseList);
        const movieList: MovieType[] = [];

        favoriteMovies.forEach((item) => {
            if (item.status === 'fulfilled') {
                movieList.push(mapperMovie(item.value));
            }
        });
        this.favoriteMovies = movieList;

        renderFavorite(this.favoriteMovies);
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
        controlListEnd(response);
        const movieList = response.results.map(mapperMovie);
        rednerMovieList(movieList);
    }

    async getMoviesByName(value: string): Promise<void> {
        if (!value.trim()) {
            return;
        }
        enableLoadBtn();
        this.page = 1;
        this.search = value;
        renderLoader();
        const response: ResponseType = await this.fetchService.getMovieByName({
            [QUERY_KEY.PAGE]: String(this.page),
            [QUERY_KEY.QUERY]: this.search,
        });
        controlListEnd(response);

        if (response.results.length < 1) {
            notification('There is not result for the search');
            clearLoader();
            return;
        }
        const movieList = response ? mapResponse(response.results) : [];
        clearLoader();
        rednerMovieList(movieList);
    }
}

const movieService = new MoviesService();

export { movieService };
