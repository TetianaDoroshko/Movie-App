import { MovieType } from '../../constants/types';

export const createMarkupRandom = (movie: MovieType): string => `<div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto" style="background-color: #2525254f">
                        <h1 id="random-movie-name" class="fw-light text-light random_name">${movie.title}</h1>
                        <p id="random-movie-description" class="lead text-white">${movie.overview}
                        </p>
                    </div>
                </div>`;
