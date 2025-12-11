const mongoose = require('mongoose');

const screeningSchema = new mongoose.Schema({
  child: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Child', // Links to the Child model
    required: true,
  },
  type: {
    type: String,
    enum: ['ASQ-3', 'M-CHAT-R'],
    required: true,
  },
  // If ASQ-3, which age interval was used? (e.g., 12 month)
  asqInterval: {
    type: Number,
    required: function() { return this.type === 'ASQ-3'; } // Conditional validation
  },
  dateOfScreening: {
    type: Date,
    default: Date.now,
  },
  responses: [
    {
      questionId: String, // Or question number
      questionText: String, // Store text in case the master questionnaire changes later
      answer: {
        type: String,
        required: true,
        // ASQ uses Yes/Sometimes/Not Yet. M-CHAT uses Yes/No.
        enum: ['Yes', 'No', 'Sometimes', 'Not Yet'], 
      },
      score: Number // e.g., ASQ: Yes=10, Sometimes=5, Not Yet=0
    }
  ],
  totalScore: {
    type: Number,
    default: 0
  },
  result: {
    type: String, // e.g., "Pass", "Refer", "Monitor"
  }
});

module.exports = mongoose.model('Screening', screeningSchema);