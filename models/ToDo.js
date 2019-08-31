const mongoose = require('mongoose')
const { Schema } = mongoose

const ToDoSchema = new Schema({
    toDo: String
})

module.exports = ToDo = mongoose.model('toDo', ToDoSchema);