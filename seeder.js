// seeder.js
const mongoose = require('mongoose');
const connectDB = require('./db');

// Import Models
const MchatQuestionnaire = require('./models/MchatQuestionnaire');
const AsqQuestionnaire = require('./models/AsqQuestionnaire');

// Import Data
const mchatData = require('./data/mchatData');
const asqData = require('./data/asqData');

const importData = async () => {
  try {
    // 1. Connect to DB
    await connectDB();

    // 2. Clear existing questionnaire data (Optional: Be careful in production!)
    await MchatQuestionnaire.deleteMany();
    await AsqQuestionnaire.deleteMany();
    console.log('Old data removed...');

    // 3. Prepare M-CHAT object
    const mchatPayload = {
        version: 'R/F',
        questions: mchatData
    };

    // 4. Insert Data
    await MchatQuestionnaire.create(mchatPayload);
    await AsqQuestionnaire.insertMany(asqData);

    console.log('✅ Data Imported Successfully!');
    process.exit();
    
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

// Run the function
importData();