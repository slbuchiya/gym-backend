const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { getMe, updateMe } = require('../controllers/userController');

router.get('/me', auth, getMe);
router.put('/me', auth, updateMe);

module.exports = router;
