const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const machineSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  // Add additional fields if necessary
  model: {
    type: String,
    trim: true
  },
  partNo: {
    type: String,
    trim: true
  },
  serialNo: {
    type: String,
    trim: true
  }
}, { timestamps: true });

const Machine = mongoose.model('Machine', machineSchema);

module.exports = Machine;
