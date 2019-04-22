import { takeEvery, put, call } from 'redux-saga/effects';
import MoviesAPI from 'api/movies';
import { GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, GET_MOVIE_SUCCESS } from 'store/actions/movies';

export function* fetchMoviesList() {
    try {
        let res = yield call(MoviesAPI.getList);
        yield put(GET_MOVIES_SUCCESS(res.data.data));
    } catch(e) {
        yield put(GET_MOVIES_ERROR(e))
    }
}

export function* fetchMovie({ payload }) {
    try {
        let res = yield call(MoviesAPI.getItem, payload.movieId);
        yield put(GET_MOVIE_SUCCESS(res.data.data));
    } catch(e) {
        yield put(GET_MOVIE_ERROR(e));
    }
}

export function* watchFetchMovie() {
    yield takeEvery('GET_MOVIE_REQUEST', fetchMovie);
}

export function* watchFetchMoviesList() {
    yield takeEvery('GET_MOVIES_REQUEST', fetchMoviesList)
};