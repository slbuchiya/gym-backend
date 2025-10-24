const Workout = require('../models/Workout');

exports.getWorkouts = async (req, res, next) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    next(err);
  }
};

exports.getWorkoutById = async (req, res, next) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ msg: 'Not found' });
    res.json(workout);
  } catch (err) {
    next(err);
  }
};
