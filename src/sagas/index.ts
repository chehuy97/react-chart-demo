import { takeEvery, takeLatest, all } from 'redux-saga/effects'
import { loginAccount } from './AuthSaga'
import { authTypes } from '../redux/AuthRedux'

export default function* rootSaga() {
    yield all([
         actionWatcher()
    ]);
 }

 function* actionWatcher() {
      yield takeLatest(authTypes.LOGIN, loginAccount)
 }