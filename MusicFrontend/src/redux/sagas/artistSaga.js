import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from '../../axiosUtils.js';
import { errorArtist, getArtistsSuccess, startCreateArtist, startGetArtists } from '../slices/artistSlice.js';


function* fetchArtists() {
    try {
        const response = yield call(axios.get, 'artist');
        yield put(getArtistsSuccess(response.data.data));
    } catch (error) {
        yield put(errorArtist(error.message));
    }
}

function* addArtist(action) {
    try {
        const response = yield call(axios.post, 'artist', action.payload, {headers: {'Content-Type': 'multipart/form-data'}});
        yield put(addArtistSuccess(response.data.data));
    } catch (error) {
        yield put(errorArtist(error.message));
    }
}

export function* watchArtist() {
    yield  all([
        takeEvery(startGetArtists.type, fetchArtists),
        takeEvery(startCreateArtist.type, addArtist)
    ]);
}