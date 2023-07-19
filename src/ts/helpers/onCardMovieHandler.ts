import { MovieType } from '../constants/types';
import { createElementMovie } from './render/createElementMovie';
import { domEl } from './render/get-dom-elements';
import { getFavoriteListFromStorage, saveFavoriteListToStorage } from './storage';

export function onCardMovieHandler(event: Event, movie: MovieType) {
    const target = event.target as HTMLElement;
    const card = event.currentTarget as HTMLElement;
    if (target && target.closest('.bi')) {
        const likeSign = target.closest('.bi');
        addRemoveFavorite(movie, likeSign, card);
    }
}

function addRemoveFavorite(movie: MovieType, likeSign: Element | null, card: HTMLElement): void {
    let favoriteList: number[] = getFavoriteListFromStorage() ?? [];

    if (!favoriteList) {
        favoriteList = [movie.id];
        likeSign?.setAttribute('fill', 'red');
        const favoriteCard = createElementMovie(movie, favoriteList, 'favorite');
        domEl.favoriteContEl.insertAdjacentElement('afterbegin', favoriteCard);
    } else if (!favoriteList.includes(movie.id)) {
        favoriteList.unshift(movie.id);
        likeSign?.setAttribute('fill', 'red');
        const favoriteCard = createElementMovie(movie, favoriteList, 'favorite');
        domEl.favoriteContEl.insertAdjacentElement('afterbegin', favoriteCard);
    } else {
        const index = favoriteList.indexOf(movie.id);
        favoriteList.splice(index, 1);
        likeSign?.setAttribute('fill', 'transparent');
        if (card.parentElement === domEl.favoriteContEl) {
            card.remove();
            const id = String(movie.id);
            const collectionCard = domEl.filmContainerEl.querySelector(`div[data-id='${id}']`);
            if (collectionCard) {
                const likesign = collectionCard.querySelector('.bi') as HTMLElement;
                likesign.setAttribute('fill', 'transparent');
            }
        }
    }
    saveFavoriteListToStorage(favoriteList);
}

export { addRemoveFavorite };
