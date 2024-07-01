import Navbar from '../components/Navbar';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { useState, useEffect } from 'react';
import { Todo } from '../types/todo';
import { addTodoAPI, getTodos, editTodo, deleteTodo } from '../services/todo.service'; 

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getTodos(authToken);
        setTodos(fetchedTodos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, [authToken]);

  const addTodo = async (text: string) => {
    try {
      const newTodo = await addTodoAPI(text, authToken);
      // Ensure the new todo has all the necessary fields
      const newTodoWithDate = { ...newTodo, task: text, created_at: new Date().toISOString() };
      setTodos(prevTodos => [...prevTodos, newTodoWithDate]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleEditTodo = async (id: number, updatedTask: string) => {
    try {
      await editTodo(id, updatedTask, authToken);
      setTodos(prevTodos => 
        prevTodos.map(todo => 
          todo.id === id ? { ...todo, task: updatedTask } : todo
        )
      );
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id, authToken);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        editTodo={handleEditTodo} 
        deleteTodo={handleDeleteTodo} 
      />
    </div>
  );
};

export default TodosPage;
