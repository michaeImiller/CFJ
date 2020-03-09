import { AUTH_SET_ME } from '../constants/auth';

const initState = {};

const me = (state = initState, action = {}) => {
  switch (action.type) {
    case AUTH_SET_ME: {
      const result = { ...state };
      result.full_name = action.data.full_name;
      result.id = action.data.id;
      return result;
    }
    default:
      return state;
  }
};

export default me;
