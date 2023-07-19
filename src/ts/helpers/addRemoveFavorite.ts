const addRemoveFavorite = (movieId: number, likeSign: SVGSVGElement | null): void => {
    let favoriteList = getFavoriteListFromStorage();

    if (!favoriteList) {
        favoriteList = [movieId];
        likeSign?.setAttribute('fill', 'red');
    } else if (!favoriteList.includes(movieId)) {
        favoriteList.unshift(movieId);
        likeSign?.setAttribute('fill', 'red');
    } else {
        const index = favoriteList.indexOf(movieId);
        favoriteList.splice(index, 1);
        likeSign?.setAttribute('fill', 'transparent');
    }
    saveFavoriteListToStorage(favoriteList);
};

function getFavoriteListFromStorage(): number[] | null {
    const data = localStorage.getItem('favoriteMovies');
    return data ? JSON.parse(data) : null;
}

function saveFavoriteListToStorage(favoriteList: number[]): void {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteList));
}

export { addRemoveFavorite, getFavoriteListFromStorage, saveFavoriteListToStorage };
