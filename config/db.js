const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_URI);
    console.log('Database connected... ');
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = db;
