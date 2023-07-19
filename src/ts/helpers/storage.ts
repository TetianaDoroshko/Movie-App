function getFavoriteListFromStorage(): number[] | null {
    const data = localStorage.getItem('favoriteMovies');
    return data ? JSON.parse(data) : null;
}

function saveFavoriteListToStorage(favoriteList: number[]): void {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteList));
}

export { getFavoriteListFromStorage, saveFavoriteListToStorage };
