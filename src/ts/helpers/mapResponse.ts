import { MovieType, ResponseMovieType } from '../constants/types';

export const mapResponse = (respMovieList: ResponseMovieType[]): MovieType[] =>
    respMovieList.map((movie) => ({
        poster_path: movie.poster_path,
        overview: movie.overview,
        release_date: movie.release_date,
    }));
