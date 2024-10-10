import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from '../../axiosUtils.js';
import { getMusicSuccess, getMusicFailure, getMusicStart, addMusicSuccess, addMusicStart } from '../slices/musicSlice.js';

function* fetchMusic() {
    try {
        const response = yield call(axios.get, 'music');
        yield put(getMusicSuccess(response.data.data));
    } catch (error) {
        yield put(getMusicFailure(error.message));
    }
}

function* addMusic(action) {
    try {
        const response = yield call(axios.post, 'music',action.payload, {headers: {'Content-Type': 'multipart/form-data'}});
        yield put(addMusicSuccess(response.data.data));
    } catch (error) {
        yield put(getMusicFailure(error.message));
    }
}

export function* watchMusic() {
    yield all([
        takeEvery(getMusicStart.type, fetchMusic),
        takeEvery(addMusicStart.type, addMusic)
    ]);
}
