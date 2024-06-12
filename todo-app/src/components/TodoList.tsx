// TodoList.tsx

interface Todo {
    id: number;
    text: string;
  }
  
  interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: number) => void;
  }
  
  const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center border-b border-gray-300 py-2">
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TodoList;
  