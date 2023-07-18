import { MovieType } from '../constants/types';

export const getRandomMovie = (movieList: MovieType[]): MovieType => {
    const randomIndex = Math.floor(Math.random() * movieList.length);
    return movieList[randomIndex];
};
