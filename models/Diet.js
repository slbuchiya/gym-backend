const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  mealTime: String,
  items: [String]
});

const dietSchema = new mongoose.Schema({
  type: { type: String, required: true }, // muscle_gain, weight_loss, balanced
  title: String,
  meals: [mealSchema]
});

module.exports = mongoose.model('Diet', dietSchema);
