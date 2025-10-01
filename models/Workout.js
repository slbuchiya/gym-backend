const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: String,
  sets: Number,
  reps: Number,
  description: String
});

const workoutSchema = new mongoose.Schema({
  category: { type: String, required: true },
  exercises: [exerciseSchema]
});

module.exports = mongoose.model('Workout', workoutSchema);
