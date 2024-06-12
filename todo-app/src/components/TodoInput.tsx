import { useState } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      setLoading(true); 
      await addTodo(text.trim());
      setText('');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input type="text" value={text} onChange={handleChange} className="border border-gray-300 p-2 rounded mr-2" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? 'Adding...' : 'Add Todo'} 
      </button>
    </form>
  );
};

export default TodoInput;
