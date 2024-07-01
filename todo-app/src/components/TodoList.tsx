import { useState } from 'react';
import { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number, updatedTask: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [updatedTask, setUpdatedTask] = useState<string>('');

  const handleEdit = (id: number, task: string) => {
    setEditId(id);
    setUpdatedTask(task);
  };

  const handleSave = (id: number) => {
    editTodo(id, updatedTask);
    setEditId(null);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="flex justify-between items-center border-b border-gray-300 py-2">
          <div className="flex flex-col">
            {editId === todo.id ? (
              <input
                type="text"
                value={updatedTask}
                onChange={e => setUpdatedTask(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 mb-1"
              />
            ) : (
              <span>{todo.task}</span>
            )}
            <span className="text-gray-500 text-sm">{new Date(todo.created_at).toLocaleDateString()}</span>
          </div>
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
