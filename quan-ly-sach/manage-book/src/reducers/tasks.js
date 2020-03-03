import * as types from '../constants/ActionTypes';
// import data from '../data/data';


var initialState = [
	{
		demo: 'abc'
	}
];

var myReducer = (state = initialState, action) => {
	switch(action.type){
		case types.LIST_ALL:
			return state;
		default: return state;
	}
};

export default myReducer;