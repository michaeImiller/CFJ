import {combineReducers} from 'redux';
import tasks from './tasks';
import find from './find';

const myReducer  = combineReducers({
    data: tasks,
    find: find,
});

export default myReducer;