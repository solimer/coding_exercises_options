const filterService = require('../services/filter.service');

const filter = async (req, res, next) => {
  const filterParams = {};
  const result = await filterService.filter(filterParams);
  return res.json(result);
};

module.exports = {
  filter,
};
