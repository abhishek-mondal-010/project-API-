const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create
router.post('/', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.send(newUser);
});

// Read
router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

// Update
router.put('/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedUser);
});

// Delete
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: 'User deleted' });
});

module.exports = router;
