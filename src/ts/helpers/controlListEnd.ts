import { ResponseType } from '../constants/types';
import { domEl } from './render/get-dom-elements';

export const controlListEnd = (response: ResponseType): void => {
    if (response.page === response.total_pages) {
        disableLoadBtn();
    }
};

function disableLoadBtn() {
    domEl.loadMoreBtn.setAttribute('disabled', 'true');
    domEl.loadMoreBtn.innerText = 'no more result';
}

export const enableLoadBtn = () => {
    domEl.loadMoreBtn.removeAttribute('disabled');
    domEl.loadMoreBtn.innerText = 'Load more';
};
