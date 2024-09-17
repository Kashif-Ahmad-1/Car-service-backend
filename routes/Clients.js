const express = require('express');
const router = express.Router();

// Import your database model
const Client = require('../models/Client');

// Route to add a client
router.post('/add-client', async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
