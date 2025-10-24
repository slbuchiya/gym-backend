const User = require('../models/User');

exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-passwordHash');
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.updateMe = async (req, res, next) => {
  try {
    const updates = req.body;
    // prevent password direct change here; implement separately if needed
    delete updates.passwordHash;
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-passwordHash');
    res.json(user);
  } catch (err) {
    next(err);
  }
};
