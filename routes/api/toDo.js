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

router.delete("/:id", async (req, res) => {
    const toDelete = await ToDo.findByIdAndDelete(req.params.id)
    res.json(toDelete)
})

module.exports = router

