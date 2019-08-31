import './index.css'
import { createStore, combineReducers } from 'redux'
import toDoReducer from './Reducers/ToDoReducer'
import { addToDo } from './Actions/ToDoActions'
import axios from 'axios'

const store = createStore(combineReducers({toDoReducer}))

// const getToDoItems = async () => {
//     const toDos = await axios.get(`http://localhost:5000/api/toDo`)
//     console.log(toDos)
//     document.querySelector("ul").innerHTML = toDos.data.map(toDo => `<li>${toDo}</li>`).toString().replace(/,/g,"")
// }

// getToDoItems()

document.getElementById("to-do-form").addEventListener("submit", async event => {
    event.preventDefault()
    console.log(event.target[0].value)
    const toDo = await axios.post(`${process.env.API_URL}/api/toDo`, { 
        params: {
            toDo: event.target[0].value
        }
    })
    store.dispatch(addToDo(toDo))
    console.log(toDo)
    const li = document.createElement("li")
    li.innerHTML = `${event.target[0].value}`
    document.querySelector("ul").appendChild(li)
})

