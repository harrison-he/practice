import { ADD_TO_DO } from './ToDoConsants'

export const addToDo = toDo => {
    return {
        type: ADD_TO_DO,
        toDo
    }
}