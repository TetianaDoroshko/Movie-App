import { API_URL } from '../../constants/api-url';
import { POSTR_SIZES } from '../../constants/poster-sizes';
import { MovieType } from '../../constants/types';

export const createMarkupMovie = (movie: MovieType): string => {
    const imageUrl: string = movie.poster_path
        ? API_URL.IMG_URL + POSTR_SIZES[500] + movie.poster_path
        : 'https://plchldr.co/i/500x800?&bg=3d1448&fc=ffffff&text=NO%20PREVIEW';

    return `<div class="col-lg-3 col-md-4 col-12 p-2">
                <div class="card shadow-sm">
                    <img src="${imageUrl}" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                            stroke="red"
                            fill="red"
                            width="50"
                            height="50"
                            class="bi bi-heart-fill position-absolute p-2"
                            viewBox="0 -2 18 22"
                    >
                        <path fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                    </svg>
                    <div class="card-body">
                        <p class="card-text truncate">${movie.overview}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${movie.release_date}</small>
                        </div>
                    </div>
                </div>
            </div>`;
};
