const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected sucessfuly!');
  } catch (error) {
    console.error('Error to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
