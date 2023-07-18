import { MovieType, ResponseMovieType } from '../constants/types';

export const mapResponse = (respMovieList: ResponseMovieType[]): MovieType[] =>
    respMovieList.map((movie) => ({
        backdrop_path: movie.backdrop_path,
        id: movie.id,
        poster_path: movie.poster_path,
        overview: movie.overview,
        release_date: movie.release_date,
        title: movie.title,
    }));
