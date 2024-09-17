const express = require('express');
const router = express.Router();

// Import your database model
const Machine = require('../models/Machine');

// Route to add a machine
router.post('/add-machine', async (req, res) => {
  try {
    const newMachine = new Machine(req.body);
    await newMachine.save();
    res.status(201).json(newMachine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
