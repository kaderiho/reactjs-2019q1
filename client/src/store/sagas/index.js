import { all } from 'redux-saga/effects';

import { watchFetchMoviesList } from './movies';

export default function* rootSaga() {
    yield all([
        watchFetchMoviesList()
    ]);
};