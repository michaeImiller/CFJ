import {
  takeLatest,
  put,
  call,
  fork,
} from 'redux-saga/effects';
import { setTasks } from '../actions/home';
import * as services from '../services/home';
import { HOME_FETCH_TASKS } from '../constants/home';

/**
 * @export
 * @param { type: String, onSuccess: func, onError: func} action
 */
export function* fetchTasks(action) {
  try {
    const result = yield call(services.fetchTasks);
    yield put(setTasks(result.data.tasks));
    action.onSuccess();
  } catch (err) {
    action.onError(err);
  }
}

export function* watchFetchData() {
  yield takeLatest(HOME_FETCH_TASKS, fetchTasks);
}

export default function* homePage() {
  yield fork(watchFetchData);
}
