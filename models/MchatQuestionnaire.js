const mongoose = require('mongoose');

const mchatSchema = new mongoose.Schema({
  version: {
    type: String,
    default: 'R/F', // Revised/Follow-up
  },
  questions: [
    {
      questionNumber: { type: Number, required: true },
      text: { type: String, required: true },
      isCritical: { type: Boolean, default: false } // Some M-CHAT questions are critical
    }
  ]
});

module.exports = mongoose.model('MchatQuestionnaire', mchatSchema);