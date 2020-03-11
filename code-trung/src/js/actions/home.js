import { HOME_FETCH_TASKS, HOME_SET_TASKS } from '../constants/home';

export const fetchTasks = (onSuccess, onError) => ({
  type: HOME_FETCH_TASKS,
  onSuccess,
  onError,
});

export const setTasks = (tasks) => ({
  type: HOME_SET_TASKS,
  tasks,
});
