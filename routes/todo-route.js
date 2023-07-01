const express = require("express")
const { getTodos } = require("../controllers/todo-controller")
const router = express.Router()

router.get('/all', getTodos)

module.exports = router