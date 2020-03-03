import {combineReducers} from 'redux';
// import data from '../data/data';
import tasks from './tasks';

const myReducer  = combineReducers({
    demo: tasks
});

export default myReducer;