const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwtMiddleware');
const { createTodo, getAllTodos, updateTodo, deleteTodo } = require('../controllers/todo.controller');

// Middleware to protect todo routes
router.use(jwtMiddleware);

// Routes for todos
router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
