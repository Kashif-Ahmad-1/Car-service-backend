const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kash766ka:s5mNreYxXsWgvJyI@service-car.4kjxc.mongodb.net/?retryWrites=true&w=majority&appName=service-car');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
