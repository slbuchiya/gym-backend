# Gym Backend (Node.js + Express + MongoDB)

This is a starter backend for a gym mobile app (auth, workouts, diets, progress).

## Quick start
1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. `npm install`
3. `npm run seed` (optional - seeds sample workouts & diets)
4. `npm start`

## Available endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET  /api/workouts
- GET  /api/diets
- GET  /api/users/me  (requires Authorization: Bearer <token>)
- POST /api/progress  (requires auth)
