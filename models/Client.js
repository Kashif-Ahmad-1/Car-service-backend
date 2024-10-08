const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  
  },
  address: {
    type: String,
    required: true,
   
  },
  contact: {
    type: String,
    required: true,
   
  }
}, );

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
