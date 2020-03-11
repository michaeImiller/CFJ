import {
  takeLatest,
  call,
  put,
  fork,
} from 'redux-saga/effects';
import { setMe } from '../actions/auth';
import { AUTH_FETCH_ME, AUTH_LOGIN } from '../constants/auth';
import * as services from '../services/auth';
import { setToken } from '../helpers/api';

/**
 * @export
 * @param { type: String, onSuccess: func, onError: func} action
 */
export function* fetchMe(action) {
  try {
    const result = yield call(services.fetchMe);
    yield put(setMe(result.data));
    action.onSuccess();
  } catch (err) {
    action.onError(err);
  }
}

/**
 * @export
 * @param { type: String, onSuccess: func, onError: func} action
 */
export function* login(action) {
  try {
    const result = yield call(services.login);
    setToken(result.data.token);
    yield put(setMe(result.data));
    action.onSuccess();
  } catch (err) {
    action.onError(err);
  }
}

export function* watchFetchMe() {
  yield takeLatest(AUTH_FETCH_ME, fetchMe);
}

export function* watchLogin() {
  yield takeLatest(AUTH_LOGIN, login);
}

export default function* auth() {
  yield fork(watchFetchMe);
  yield fork(watchLogin);
}
