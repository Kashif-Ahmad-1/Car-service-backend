const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');
const { generatePDF } = require('../utils/pdfGenerator');


// Create a new appointment
router.post('/save-appointment', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'Appointment created successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving appointment', error });
  }
});

// Get all appointments
router.get('/get-appointment', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching appointments', error });
  }
});

// Route to get engineer details (Engineer 1)
// router.get('/engineer-details/:engineerName', async (req, res) => {
//   const { engineerName } = req.params;
//   try {
//     const appointments = await Appointment.find({ serviceEngineer: engineerName });
//     if (!appointments || appointments.length === 0) {
//       return res.status(404).json({ message: 'No appointments found for this engineer' });
//     }
//     res.json(appointments);
//   } catch (error) {
//     res.status(400).json({ message: 'Error fetching engineer details', error });
//   }
// });



// Get appointments for a specific engineer
router.get('/appointments/:engineerName', async (req, res) => {
  const { engineerName } = req.params;
  console.log(`Fetching appointments for engineer: ${engineerName}`); // Debugging line
  try {
    const appointments = await Appointment.find({ serviceEngineer: engineerName });
    console.log(`Found appointments: ${appointments.length}`); // Debugging line
    if (appointments.length === 0) {
      return res.status(404).json({ message: `No appointments found for Engineer: ${engineerName}` });
    }
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error); // Debugging line
    res.status(400).json({ message: 'Error fetching appointments', error });
  }
});



// Generate and download PDF
router.get('/download-pdf/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    generatePDF(appointment, res);
  } catch (error) {
    res.status(400).json({ message: 'Error generating PDF', error });
  }
});

module.exports = router;
