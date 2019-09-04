const express = require('express')
const router = express.Router()
const RecurringToDo = require('../../models/RecurringToDo')

router.post("/", async (req, res) => {
    const newRecurringToDo = new RecurringToDo({
        recurringToDo: req.body.recurringToDo,
        frequency: req.body.frequency
    })

    const recurringToDo = await newRecurringToDo.save()
    return res.json(recurringToDo)
})

router.get("/", async (req, res) => {
    const recurringToDos = await RecurringToDo.find()
    res.json(recurringToDos)
})

module.exports = router