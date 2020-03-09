import { combineReducers } from 'redux';
import dummy from './dummy';
import me from './me';
import tasks from './tasks';

const rootReducer = combineReducers({
  dummy,
  me,
  tasks,
});

export default rootReducer;
