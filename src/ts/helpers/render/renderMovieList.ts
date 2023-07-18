import { MovieType } from '../../constants/types';
import { createElementMovie } from './createElementMovie';
import { domEl } from './get-dom-elements';

export const rednerMovieList = (movieList: MovieType[]): void => {
    const movieCards: string[] = movieList.map((movie) => createElementMovie(movie));

    domEl.filmContainerEl.append(...movieCards);
    // domEl.filmContainerEl.get
};
