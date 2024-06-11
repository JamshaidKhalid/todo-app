const supabase = require('../config/supabaseClient');

const createTodo = async (userId, task) => {
  try {
    const { data, error } = await supabase.from('todos').insert([{ user_id: userId, task }]).select();
    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const getAllTodosForUser = async (userId) => {
    try {
      const { data, error } = await supabase.from('todos').select('*').eq('user_id', userId);
      if (error) throw error;
      return data;
    } catch (error) {
      throw error;
    }
  };


  const updateTodo = async (userId, todoId, updatedTask) => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .update({ task: updatedTask })
        .eq('id', todoId)
        .eq('user_id', userId)
        .select();
      if (error) throw error;
    } catch (error) {
      throw error;
    }
  };

  const deleteTodo = async (userId, todoId) => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .delete()
        .eq('id', todoId)
        .eq('user_id', userId);
      if (error) throw error;
    } catch (error) {
      throw error;
    }
  };

module.exports = {
  createTodo,
  getAllTodosForUser,
  updateTodo,
  deleteTodo
};
