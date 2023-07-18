import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css';

import { MoviesService } from './ts/MovieService';

import { domEl } from './ts/helpers/render/get-dom-elements';
import { createNotification } from './ts/helpers/notification';

const start = (): void => {
    createNotification();

    const movieService = new MoviesService();

    movieService.getMovies();

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
        // const name = document.getElementById('random-movie-name');
        // if (name) name.innerText = domEl.searchEl.value;
        movieService.getMoviesByName(domEl.searchEl.value);
    });
};
start();
