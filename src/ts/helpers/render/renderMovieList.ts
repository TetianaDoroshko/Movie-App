import { MovieType } from '../../constants/types';
import { getFavoriteListFromStorage } from '../addRemoveFavorite';
import { createElementMovie } from './createElementMovie';
import { domEl } from './get-dom-elements';

export const rednerMovieList = (movieList: MovieType[]): void => {
    const favoriteList = getFavoriteListFromStorage();
    const movieCards: HTMLDivElement[] = movieList.map((movie) => createElementMovie(movie, favoriteList));

    domEl.filmContainerEl.append(...movieCards);
};
