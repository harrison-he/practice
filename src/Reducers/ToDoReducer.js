import { ADD_TO_DO } from './../Actions/ToDoConsants'

const initialState = {
    toDoList: []
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            const newList = [...state.toDoList]
            newList.push(action.toDo)
            return (
                {
                    ...state,
                    toDoList: newList
                }
            )
        default:
            return (
                {
                    ...state
                }
            )
    }
}

export default toDoReducer