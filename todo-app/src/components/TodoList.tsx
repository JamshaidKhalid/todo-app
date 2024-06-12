import { useState } from 'react';
import { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number, updatedTask: string) => void; // Updated prop for editing a todo
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  const [editId, setEditId] = useState<number | null>(null); // State to track the edited todo ID
  const [updatedTask, setUpdatedTask] = useState<string>(''); // State to track the updated task

  // Function to handle opening the edit box and updating the state with the todo ID being edited
  const handleEdit = (id: number, task: string) => {
    setEditId(id);
    setUpdatedTask(task);
  };

  // Function to handle saving the updated task
  const handleSave = (id: number) => {
    editTodo(id, updatedTask);
    setEditId(null);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="flex justify-between items-center border-b border-gray-300 py-2">
          {editId === todo.id ? (
            <input
              type="text"
              value={updatedTask}
              onChange={e => setUpdatedTask(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 mr-2"
            />
          ) : (
            <span>{todo.task}</span>
          )}
          <div>
            {editId === todo.id ? (
              <button onClick={() => handleSave(todo.id)} className="text-blue-500 hover:text-blue-600 mr-2">Save</button>
            ) : (
              <button onClick={() => handleEdit(todo.id, todo.task)} className="text-blue-500 hover:text-blue-600 mr-2">Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-600">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
