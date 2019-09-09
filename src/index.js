import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import ToDoList from './Pages/ToDoList'
ReactDOM.render(<Provider store={store}><ToDoList /></Provider>, document.getElementById("app"))