require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const workoutRoutes = require('./routes/workouts');
const dietRoutes = require('./routes/diets');
const progressRoutes = require('./routes/progress');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

// Prefer MONGO_URI from environment; fall back to a local MongoDB instance for
// convenient local development. Do NOT log full connection strings that may
// contain credentials.
const DEFAULT_LOCAL_MONGO = 'mongodb://127.0.0.1:27017/gymdb';
const mongoUri = process.env.MONGO_URI && process.env.MONGO_URI.trim() !== ''
	? process.env.MONGO_URI
	: DEFAULT_LOCAL_MONGO;
if (mongoUri === DEFAULT_LOCAL_MONGO) {
	console.log('No MONGO_URI found — falling back to local MongoDB at', DEFAULT_LOCAL_MONGO);
} else {
	console.log('Using MongoDB URI provided in environment');
}
connectDB(mongoUri);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/diets', dietRoutes);
app.use('/api/progress', progressRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
