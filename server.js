require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json({ extended: false }));

app.use(express.static("dist"))

mongoose
  .connect(process.env.MONGO_DB_URL, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use("/api/toDo",require('./routes/api/toDo'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))