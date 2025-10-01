const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { addProgress, getProgress } = require('../controllers/progressController');

router.post('/', auth, addProgress);
router.get('/', auth, getProgress);

module.exports = router;
