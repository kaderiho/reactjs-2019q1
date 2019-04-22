import { all } from 'redux-saga/effects';
import { watchFetchMoviesList, watchFetchMovie } from './movies';

export default function* rootSaga() {
    yield all([
        watchFetchMoviesList(),
        watchFetchMovie()
    ]);
};