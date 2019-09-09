import {
    GET_TO_DO_ITEMS_BEGIN,
    GET_TO_DO_ITEMS_SUCCESS,
    GET_TO_DO_ITEMS_FAILURE,
    POST_TO_DO_ITEM_BEGIN,
    POST_TO_DO_ITEM_SUCCESS,
    POST_TO_DO_ITEM_FAILURE,
    DELETE_TO_ITEM_BEGIN,
    DELETE_TO_ITEM_SUCCESS,
    DELETE_TO_ITEM_FAILURE
} from './../Constants/ToDoConstants'

const initialState = {
    toDoItems: [],
    loading: false,
    error: null
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TO_DO_ITEMS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_TO_DO_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                toDoItems: [...action.toDoItems]
            }
        case GET_TO_DO_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case POST_TO_DO_ITEM_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case POST_TO_DO_ITEM_SUCCESS:
            const newList = [...state.toDoItems]
            newList.push(action.toDo)
            return {
                ...state,
                loading: false,
                toDoItems: newList
            }
        case POST_TO_DO_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case DELETE_TO_ITEM_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_TO_ITEM_SUCCESS:
            const deleteList = state.toDoItems.filter(toDoItem => toDoItem._id !== action.toDo._id)
            return {
                ...state,
                loading: false,
                toDoItems: [...deleteList]
            }
        case DELETE_TO_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

export default toDoReducer