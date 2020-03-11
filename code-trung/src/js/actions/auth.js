import {
  AUTH_FETCH_ME,
  AUTH_SET_ME,
  AUTH_LOGIN,
} from '../constants/auth';

export const fetchMe = (onSuccess, onError) => ({
  type: AUTH_FETCH_ME,
  onSuccess,
  onError,
});

export const setMe = (data) => ({
  type: AUTH_SET_ME,
  data,
});

export const login = (email, password, onSuccess, onError) => ({
  type: AUTH_LOGIN,
  email,
  password,
  onSuccess,
  onError,
});
