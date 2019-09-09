import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk'
import toDoReducer from './Reducers/ToDoReducer';

const store = createStore(
    combineReducers({toDoReducer}),
    applyMiddleware(ReduxThunk)
);

export default store;