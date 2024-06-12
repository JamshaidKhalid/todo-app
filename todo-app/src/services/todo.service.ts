import axios from 'axios';
import { Todo } from '../types/todo';

// const BASE_URL = `http://localhost:5000`
const BASE_URL = `https://todo-app-node-backend.vercel.app`


export const getTodos = async (authToken: string | null): Promise<Todo[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`, {
      headers: {
        authorization: authToken,
      },
    });
    return response.data.todos;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
};

export const addTodoAPI = async (text: string, authToken: string | null): Promise<Todo> => {
  try {
    const response = await axios.post<Todo>(
      `${BASE_URL}/todos`,
      { task: text },
      { headers: { authorization: authToken } }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to add todo');
  }
};


export const editTodo = async (id: number, updatedTask: string, authToken: string | null): Promise<Todo> => {
  try {
    const response = await axios.put<Todo>(
      `${BASE_URL}/todos/${id}`,
      { updatedTask },
      { headers: { authorization: authToken } }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to edit todo');
  }
};

// Function to delete a todo
export const deleteTodo = async (id: number, authToken: string | null): Promise<void> => {
  try {
    await axios.delete<void>(
      `${BASE_URL}/todos/${id}`,
      { headers: { authorization: authToken } }
    );
  } catch (error) {
    throw new Error('Failed to delete todo');
  }
};