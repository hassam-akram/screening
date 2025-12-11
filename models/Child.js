const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'], // Validation rule: must be one of these
    required: true,
  },
  parentName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Calculate age in months (helper method)
childSchema.methods.getAgeInMonths = function () {
  const today = new Date();
  const dob = new Date(this.dateOfBirth);
  let months = (today.getFullYear() - dob.getFullYear()) * 12;
  months -= dob.getMonth();
  months += today.getMonth();
  return months <= 0 ? 0 : months;
};

module.exports = mongoose.model('Child', childSchema);