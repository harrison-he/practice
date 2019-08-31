const express = require('express')
const router = express.Router()
const ToDo = require('./../../models/ToDo')

router.post("/", async (req, res) => {
    const newToDo = new ToDo({
        toDo: req.body.toDo
      });
  
      const toDo = await newToDo.save()
      return res.json(toDo)
})

router.get("/", async (req, res) => {
    const toDos = await ToDo.find()
    res.json(toDos)
})

module.exports = router