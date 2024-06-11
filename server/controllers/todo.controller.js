const TodoModel = require('../models/todo.model');

const createTodo = async (req, res) => {
  const userId = req.userId; // Get userId from request object
  const { task } = req.body;
  console.log(task)

  try {
    const todo = await TodoModel.createTodo(userId, task);
    res.json({ todo });
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Failed to create todo' });
  }
};

const getAllTodos = async (req, res) => {
    const userId = req.userId; // Get userId from request object
  
    try {
      const todos = await TodoModel.getAllTodosForUser(userId);
      res.json({ todos });
    } catch (error) {
      console.error('Error fetching todos:', error);
      res.status(500).json({ error: 'Failed to fetch todos' });
    }
  };


  const updateTodo = async (req, res) => {
    const userId = req.userId;
    const todoId = req.params.id;
    const { updatedTask } = req.body;
  
    try {
      const updatedTodo = await TodoModel.updateTodo(userId, todoId, updatedTask);
      res.json({ msg: "Updated Successfully" });
    } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).json({ error: 'Failed to update todo' });
    }
  };

  const deleteTodo = async (req, res) => {
    const userId = req.userId;
    const todoId = req.params.id;
  
    try {
      const deletedTodo = await TodoModel.deleteTodo(userId, todoId);
      res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: 'Failed to delete todo' });
    }
  };

module.exports = {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo
};
