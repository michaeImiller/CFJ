import * as types from '../constants/ActionTypes';
import data from '../data/data';


var initialState = data;

var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.LIST_ALL:
			return state;
		case types.ADD_BOOK:
			console.log(action);
			state.push(action.book);
			localStorage.setItem('data', JSON.stringify(state));
			return [...state];
		default: return state;
	}
};

export default myReducer;