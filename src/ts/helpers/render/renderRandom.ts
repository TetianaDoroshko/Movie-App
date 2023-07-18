import { API_URL } from '../../constants/api-url';
import { POSTR_SIZES } from '../../constants/poster-sizes';
import { MovieType } from '../../constants/types';
import { getRandomMovie } from '../get-random-movie';
import { createMarkupRandom } from './createMarkupRandom';
import { domEl } from './get-dom-elements';

export const renderRandom = (movieList: MovieType[]) => {
    const randomMovie = getRandomMovie(movieList);

    const innerMarkup = createMarkupRandom(randomMovie);

    const backdropUrl: string = API_URL.IMG_URL + POSTR_SIZES.ORIGINAL + randomMovie.backdrop_path;

    domEl.randomMovie.innerHTML = innerMarkup;

    if (randomMovie.backdrop_path) {
        domEl.randomMovie.style.backgroundImage = `url(${backdropUrl})`;
        domEl.randomMovie.style.backgroundPosition = 'center';
        domEl.randomMovie.style.backgroundSize = 'cover';
        domEl.randomMovie.style.backgroundRepeat = 'no-repeat';
    } else {
        domEl.randomMovie.style.backgroundColor = '#3d1448;';
    }
};
