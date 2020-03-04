import * as types from '../constants/ActionTypes';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

var data = JSON.parse(localStorage.getItem('data'))
var initialState = data ? data : [] ;

var myReducer = (state = initialState, action) => {
	switch(action.type){

		case types.LIST_ALL:
			return state;

		case types.ADD_BOOK:
			// console.log(action);
			let newBook = {
				id: uuidv4(),
				name : action.book.name,
				author: action.book.author,
				publisher: action.book.publisher,
				amount: action.book.amount 
			}
			state.push(newBook);
			localStorage.setItem('data', JSON.stringify(state));
			return [...state];
			
			
		case types.UPDATE_BOOK:
			console.log(action);
			return [...state];

		default: return state;
	}
};

export default myReducer;