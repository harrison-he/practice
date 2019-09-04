const mongoose = require('mongoose')
const { Schema } = mongoose

const RecurringToDoSchema = new Schema({
    recurringToDo: String,
    frequency: String
})

module.exports = RecurringToDo = mongoose.model("recurringToDo",RecurringToDoSchema)