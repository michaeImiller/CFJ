import { HOME_SET_TASKS } from '../constants/home';

const initState = [];

const tasks = (state = initState, action = {}) => {
  switch (action.type) {
    case HOME_SET_TASKS: {
      return action.tasks;
    }

    default:
      return state;
  }
};

export default tasks;
