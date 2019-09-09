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
import axios from 'axios'

export function getToDoItems() {
    return dispatch => {
        dispatch(getToDoItemsBegin())
        return axios.get(`${process.env.API_URL}/api/toDo`)
            .then(response => dispatch(getToDoItemsSuccess(response.data)))
            .catch(err => dispatch(getToDoItemsFailure(err)))
    }
}

function getToDoItemsBegin() {
    return {
        type: GET_TO_DO_ITEMS_BEGIN
    }
}

function getToDoItemsSuccess(toDoItems) {
    return {
        type: GET_TO_DO_ITEMS_SUCCESS,
        toDoItems
    }
}

function getToDoItemsFailure(error) {
    return {
        type: GET_TO_DO_ITEMS_FAILURE,
        error
    }
}

export function postToDoItem(toDo) {
    return dispatch => {
        dispatch(postToDoItemBegin())
        return axios.post(`${process.env.API_URL}/api/toDo`, { toDo })
            .then(response => dispatch(postToDoItemSuccess(response.data)))
            .catch(err => dispatch(postToDoItemFailure(err)))
    }
}

function postToDoItemBegin() {
    return {
        type: POST_TO_DO_ITEM_BEGIN
    }
}

function postToDoItemSuccess(toDo) {
    return {
        type: POST_TO_DO_ITEM_SUCCESS,
        toDo
    }
}

function postToDoItemFailure(error) {
    return {
        type: POST_TO_DO_ITEM_FAILURE,
        error
    }
}

export function deleteToDoItem(toDo) {
    return dispatch => {
        dispatch(deleteToDoItemBegin())
        return axios.delete(`${process.env.API_URL}/api/toDo/${toDo}`)
        .then(response => dispatch(deleteToDoItemSuccess(response.data)))
        .catch(err => dispatch(deleteToDoItemError(err)))
    }
}

function deleteToDoItemBegin() {
    return {
        type: DELETE_TO_ITEM_BEGIN
    }
}

function deleteToDoItemSuccess(toDo) {
    return {
        type: DELETE_TO_ITEM_SUCCESS,
        toDo
    }
}

function deleteToDoItemError(error) {
    return {
        type: DELETE_TO_ITEM_FAILURE,
        error
    }
}