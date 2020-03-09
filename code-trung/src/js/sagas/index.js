import { fork } from 'redux-saga/effects';
import dummy from './dummy';
import auth from './auth';
import homePage from './home';

export default function* root() {
  yield fork(dummy);
  yield fork(auth);
  yield fork(homePage);
}
