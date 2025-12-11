const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionNumber: { type: Number, required: true },
  text: { type: String, required: true },
});

const categorySchema = new mongoose.Schema({
  name: { 
    type: String, 
    enum: ['Communication', 'Gross Motor', 'Fine Motor', 'Problem Solving', 'Personal-Social'],
    required: true 
  },
  questions: [questionSchema] // Embedding the questions array
});

const asqSchema = new mongoose.Schema({
  ageInterval: {
    type: Number, // e.g., 2, 4, 6, 12, ... 60 months
    required: true,
    unique: true // Ensure we don't have duplicate intervals
  },
  description: String,
  domains: [categorySchema] // Array of domains (Communication, Motor, etc.)
});

module.exports = mongoose.model('AsqQuestionnaire', asqSchema);