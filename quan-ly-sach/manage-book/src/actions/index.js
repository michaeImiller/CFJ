import * as types from '../constants/ActionTypes';

export const listAll = () => {
    return{
        type: types.LIST_ALL
    }
}

export const addBook = (book)  => {
    return {
        type: types.ADD_BOOK,
        book
    }
}

export const findBook = (id)  => {
    return {
        type: types.FIND_BOOK,
        id
    }
}

// export const updateBook = (data)  => {
//     return {
//         type: types.UPDATE_BOOK,
//         data,
//     }
// }
export const deleteBook = (id)  => {
    return {
        type: types.DELETE_BOOK,
        id
    }
}