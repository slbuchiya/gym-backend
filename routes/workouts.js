const express = require('express');
const router = express.Router();
const { getWorkouts, getWorkoutById } = require('../controllers/workoutController');

router.get('/', getWorkouts);
router.get('/:id', getWorkoutById);

module.exports = router;
