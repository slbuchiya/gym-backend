const express = require('express');
const router = express.Router();
const { getDiets, getDietById } = require('../controllers/dietController');

router.get('/', getDiets);
router.get('/:id', getDietById);

module.exports = router;
