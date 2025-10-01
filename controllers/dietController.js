const Diet = require('../models/Diet');

exports.getDiets = async (req, res, next) => {
  try {
    const diets = await Diet.find();
    res.json(diets);
  } catch (err) {
    next(err);
  }
};

exports.getDietById = async (req, res, next) => {
  try {
    const diet = await Diet.findById(req.params.id);
    if (!diet) return res.status(404).json({ msg: 'Not found' });
    res.json(diet);
  } catch (err) {
    next(err);
  }
};
