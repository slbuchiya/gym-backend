const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  workoutDone: String,
  notes: String,
  caloriesBurned: Number
});

module.exports = mongoose.model('Progress', progressSchema);
