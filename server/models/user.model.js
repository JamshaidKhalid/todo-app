// userModel.js
const supabaseClient = require('../config/supabaseClient');

const createUser = async (email, password) => {
    try {
        // Check if user with email already exists
        const { data, error } = await supabaseClient.from('users').select('*').eq('email', email);
        if (error) throw error;
        if (data.length) {
            throw new Error('User with email already exists');
        }



        // User does not exist, create a new user
        const { data: newUser, error: insertError } = await supabaseClient.from('users').insert([{ email, password }]).select();
        if (insertError) throw insertError;
    } catch (error) {
        throw error;
    }
};

const getUserByEmail = async (email) => {
    try {
      const { data, error } = await supabaseClient.from('users').select('*').eq('email', email);
      if (error) throw error;
      return data[0]; // Return the first user found (assuming email is unique)
    } catch (error) {
      throw error;
    }
  };

module.exports = {
    createUser,
    getUserByEmail,
};
