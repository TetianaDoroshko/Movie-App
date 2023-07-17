import { domEl } from './get-dom-elements';

export const renderLoader = (): void => {
    domEl.filmContainerEl.innerHTML = '<h2>Loading...</h2>';
};

export const clearLoader = (): void => {
    domEl.filmContainerEl.innerHTML = '';
};
