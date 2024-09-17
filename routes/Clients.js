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

// Route to get all clients
router.get('/get-clients', async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get a client by ID
router.get('/get-client/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.status(200).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
