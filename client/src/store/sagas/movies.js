import { takeEvery, put, call } from 'redux-saga/effects';
import * as MoviesAPI from '../../store/apis/movies';
import { GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../../store/actions/movies';

export function* fetchMoviesList() {
    try {
        let res = yield call(MoviesAPI.getList);
        yield put(GET_MOVIES_SUCCESS(res.data.data));
    } catch(e) {
        yield put(GET_MOVIES_ERROR(e))
    }
}

export function* watchFetchMoviesList() {
    yield takeEvery('GET_MOVIES_REQUEST', fetchMoviesList)
};