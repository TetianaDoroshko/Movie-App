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

export const mapperMovie = (responseMovie: ResponseMovieType): MovieType => ({
    backdrop_path: responseMovie.backdrop_path,
    id: responseMovie.id,
    poster_path: responseMovie.poster_path,
    overview: responseMovie.overview,
    release_date: responseMovie.release_date,
    title: responseMovie.title,
});
