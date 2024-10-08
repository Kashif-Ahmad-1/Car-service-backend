const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientAddress: { type: String, required: true },
  contactPerson: { type: String, required: true },
  mobileNo: { type: String, required: true },
  invoiceDate: { type: Date, required: true },
  invoiceAmount: { type: Number, required: true },
  machineName: { type: String, required: true },
  model: { type: String, required: true },
  partNo: { type: String, required: true },
  serialNo: { type: String, required: true },
  installationDate: { type: Date, required: true },
  serviceFrequency: { type: Number, required: true },
  expectedServiceDate: { type: Date, required: true },
  serviceEngineer: { type: String, required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
