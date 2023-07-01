const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const todoRouter = require('./routes/todo-route')
const favicon = require('serve-favicon')
const path = require('path')
const { globalErrHandler, notFoundErr} = require('./middleware/globalErrHandler')

require("dotenv").config()
require("./config/connectDB")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(favicon(path.join(__dirname, 'public/imgs', 'home.svg')))

app.use("/api/todo/", todoRouter)

app.get("/", (req, res)=>{
  res.status(200).json({result:"home page"})
})

app.use(notFoundErr)
app.use(globalErrHandler)

app.listen(3000)

module.exports = app