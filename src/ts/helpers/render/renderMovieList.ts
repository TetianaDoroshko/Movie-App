import { MovieType } from '../../constants/types';
import { onCardMovieHandler } from '../onCardMovieHandler';
import { getFavoriteListFromStorage } from '../storage';
import { createElementMovie } from './createElementMovie';
import { domEl } from './get-dom-elements';

export const rednerMovieList = (movieList: MovieType[]): void => {
    const favoriteList = getFavoriteListFromStorage() ?? [];
    const movieCards: HTMLDivElement[] = movieList.map((movie) => {
        const card = createElementMovie(movie, favoriteList, 'collection');
        card.addEventListener('click', (event) => onCardMovieHandler(event, movie));
        return card;
    });

    domEl.filmContainerEl.append(...movieCards);
};
