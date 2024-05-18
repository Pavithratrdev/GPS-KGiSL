const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, 'secret', { expiresIn: '30d' });
};

// Register User
router.post('/register', async (req, res) => {
    console.log("User registration")
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ username, email, password });

        res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Authenticate User
router.post('/login', async (req, res) => {
    console.log("User login")

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });
        } else {
        res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;