const Progress = require('../models/Progress');

exports.addProgress = async (req, res, next) => {
  try {
    const entry = await Progress.create({ user: req.user.id, ...req.body });
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
};

exports.getProgress = async (req, res, next) => {
  try {
    const entries = await Progress.find({ user: req.user.id }).sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    next(err);
  }
};
