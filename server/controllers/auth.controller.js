// authController.js
const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await UserModel.createUser(email, hashedPassword);
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'User registration failed' });
    }
};


const signin = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        // Authenticate user
        const user = await UserModel.getUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Validate password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Create JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return token
        res.json({ token });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ error: 'Sign-in failed' });
    }
};

module.exports = {
    signup,
    signin
};
