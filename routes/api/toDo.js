const express = require('express')
const router = express.Router()
const ToDo = require('./../../models/ToDo')

router.post("/", async (req, res) => {
  console.log(req.body)
    const newToDo = new ToDo({
        toDo: req.body.params.toDo
      });
  
      const toDo = await newToDo.save()
      return res.json(toDo)
})

router.get("/", async (req, res) => {
    const toDos = await ToDo.find()
    res.json(toDos)
})

module.exports = router