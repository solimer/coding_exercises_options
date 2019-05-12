const filterService = require('../services/filter.service');

const filter = async (req, res, next) => {
  const result = await filterService.filter(req.query);
  return res.json(result);
};

module.exports = {
  filter,
};
