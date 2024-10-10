import { all } from 'redux-saga/effects';
import { watchAuth } from './authSaga';
import { watchMusic } from './musicSaga';
import { watchArtist } from './artistSaga';

export function* rootSaga() {
    yield all([
        watchAuth(),
        watchMusic(),
        watchArtist(),
    ]);
  }
