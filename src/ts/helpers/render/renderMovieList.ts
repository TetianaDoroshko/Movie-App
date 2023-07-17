import { MovieType } from '../../constants/types';
import { createMarkupMovie } from './createMarkupMovie';
import { domEl } from './get-dom-elements';

export const rednerMovieList = (movieList: MovieType[]): void => {
    const markup = movieList.map((movie) => createMarkupMovie(movie)).join('');
    domEl.filmContainerEl.insertAdjacentHTML('beforeend', markup);
};
