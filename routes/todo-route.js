const express = require("express")
const router = express.Router()
const { 
  getTodos, 
  createTodo, 
  getTodo, 
  updateTodo,
  deleteTodo
} = require("../controllers/todo-controller")


router.get('/all', getTodos)
router.get('/:id', getTodo)
router.post('/create', createTodo)
router.put('/update/:id', updateTodo)
router.delete('/delete/:id', deleteTodo)

module.exports = router