// Simple seeding for workouts & diets
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Workout = require('../models/Workout');
const Diet = require('../models/Diet');
require('dotenv').config();

const workouts = [
  {
    category: 'Chest',
    exercises: [
      { name: 'Push Ups', sets: 3, reps: 12, description: 'Standard push ups' },
      { name: 'Bench Press', sets: 4, reps: 8, description: 'Barbell bench press' }
    ]
  },
  {
    category: 'Abs',
    exercises: [
      { name: 'Crunches', sets: 3, reps: 20, description: 'Ab crunches' },
      { name: 'Plank', sets: 3, reps: 60, description: 'Seconds hold' }
    ]
  },
  {
    category: 'Legs',
    exercises: [
      { name: 'Squats', sets: 4, reps: 10, description: 'Bodyweight or barbell' },
      { name: 'Lunges', sets: 3, reps: 12, description: 'Per leg' }
    ]
  }
];

const diets = [
  {
    type: 'muscle_gain',
    title: 'Muscle Gain Diet',
    meals: [
      { mealTime: 'Breakfast', items: ['Oats', 'Eggs', 'Milk'] },
      { mealTime: 'Lunch', items: ['Chicken breast', 'Rice', 'Vegetables'] },
      { mealTime: 'Dinner', items: ['Salmon', 'Quinoa', 'Salad'] }
    ]
  },
  {
    type: 'weight_loss',
    title: 'Weight Loss Diet',
    meals: [
      { mealTime: 'Breakfast', items: ['Greek yogurt', 'Berries'] },
      { mealTime: 'Lunch', items: ['Grilled veggies', 'Salad'] },
      { mealTime: 'Dinner', items: ['Soup', 'Grilled chicken'] }
    ]
  },
  {
    type: 'balanced',
    title: 'Balanced Diet',
    meals: [
      { mealTime: 'Breakfast', items: ['Toast', 'Fruit'] },
      { mealTime: 'Lunch', items: ['Lean protein', 'Brown rice'] },
      { mealTime: 'Dinner', items: ['Veggies', 'Tofu'] }
    ]
  }
];

const seed = async () => {
  await connectDB(process.env.MONGO_URI);
  await Workout.deleteMany({});
  await Diet.deleteMany({});
  await Workout.insertMany(workouts);
  await Diet.insertMany(diets);
  console.log('Seeded workouts and diets');
  process.exit();
};

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
