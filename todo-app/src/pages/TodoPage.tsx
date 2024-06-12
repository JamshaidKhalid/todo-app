// TodosPage.tsx

import Navbar from '../components/Navbar';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const TodosPage: React.FC = () => {
  const todos: Todo[] = []; // Replace with actual todos
  const addTodo = (text: string) => {
    // Add todo logic
  };
  const deleteTodo = (id: number) => {
    // Delete todo logic
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodosPage;
