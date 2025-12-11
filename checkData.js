// checkData.js
const mongoose = require('mongoose');
const connectDB = require('./db');
const MchatQuestionnaire = require('./models/MchatQuestionnaire');
const AsqQuestionnaire = require('./models/AsqQuestionnaire');

const check = async () => {
  // 1. Connect
  await connectDB();

  console.log('--- Checking M-CHAT Data ---');
  // .findOne() gets the first document it finds
  const mchat = await MchatQuestionnaire.findOne();
  // JSON.stringify makes it readable (formatted with 2 spaces)
  console.log(JSON.stringify(mchat, null, 2)); 

  console.log('\n--- Checking ASQ-3 Data ---');
  const asq = await AsqQuestionnaire.findOne({ ageInterval: 12 });
  console.log(JSON.stringify(asq, null, 2));

  // Close connection when done
  mongoose.connection.close();
};

check();