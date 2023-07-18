export const addRemoveFavorite = (movieId: number): void => {
    let favoriteList = getFavoriteListFromStorage();

    if (!favoriteList) {
        favoriteList = [movieId];
    } else if (!favoriteList.includes(movieId)) {
        favoriteList.unshift(movieId);
    } else {
        const index = favoriteList.indexOf(movieId);
        favoriteList.splice(index, 1);
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
