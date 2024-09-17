// s5mNreYxXsWgvJyI
// kash766ka

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect('mongodb+srv://kash766ka:s5mNreYxXsWgvJyI@service-car.4kjxc.mongodb.net/?retryWrites=true&w=majority&appName=service-car');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Models
// const ClientSchema = new mongoose.Schema({
//   clientName: String,
//   clientAddress: String,
//   contactPerson: String,
//   mobileNo: String,
//   invoiceDate: String,
//   invoiceAmount: Number,
//   machineName: String,
//   model: String,
//   partNo: String,
//   serialNo: String,
//   installationDate: String,
//   serviceFrequency: Number,
//   expectedServiceDate: String,
//   serviceEngineer: String,
// });

// const Client = mongoose.model('Client', ClientSchema);

// // Routes
// app.post('/add-client', async (req, res) => {
//   try {
//     const client = new Client(req.body);
//     await client.save();
//     res.status(201).json(client);
//   } catch (error) {
//     res.status(400).json({ message: 'Error adding client', error });
//   }
// });

// app.get('/clients', async (req, res) => {
//   try {
//     const clients = await Client.find();
//     res.json(clients);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching clients', error });
//   }
// });

// app.get('/engineer/:employerId', async (req, res) => {
//   try {
//     const { employerId } = req.params;
//     const clients = await Client.find({ serviceEngineer: employerId });
//     res.json(clients);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching clients for engineer', error });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointment');
const clientRoutes = require('./routes/Clients');
const machineRoutes = require('./routes/Machines');

const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/appointments', appointmentRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/machines', machineRoutes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




