import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css';

import { movieService } from './ts/MovieService';

import { domEl } from './ts/helpers/render/get-dom-elements';
import { createNotification } from './ts/helpers/notification';

const start = (): void => {
    createNotification();

    movieService.getMovies();
    movieService.getFavoriteMovies();

    domEl.popularBtn.addEventListener('click', () => {
        movieService.getMovies('popular');
    });
    domEl.upcomingBtn.addEventListener('click', () => {
        movieService.getMovies('upcoming');
    });
    domEl.topRatedBtn.addEventListener('click', () => {
        movieService.getMovies('top_rated');
    });
    domEl.loadMoreBtn.addEventListener('click', () => {
        movieService.loadMore();
    });
    domEl.searchEl.addEventListener('change', () => {
        movieService.getMoviesByName(domEl.searchEl.value);
    });
    domEl.submitBtn.addEventListener('click', () => {
        movieService.getMoviesByName(domEl.searchEl.value);
    });
};
start();
