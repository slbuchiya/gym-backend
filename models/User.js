const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  age: Number,
  height: Number,
  weight: Number,
  goal: { type: String, enum: ['muscle_gain','weight_loss','balanced'], default: 'balanced' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
