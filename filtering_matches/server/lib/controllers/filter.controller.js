const filterService = require('../services/filter.service');

const filter = async (req, res, next) => {
  let result;
  try {
    result = await filterService.filter(req.query);
  } catch (e) {
    result = e;
  }
  res.json(result);
  next();
};

module.exports = {
  filter,
};
