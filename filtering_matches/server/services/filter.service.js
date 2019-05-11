const db = require('../db');
const {
  BooleanFilter, ExistFilter, RangeFilter, PercentageRangeFilter,
} = require('../filters');

const filter = async (params) => {
  let data = db.getAll();
  if (!params) return data;

  Object.keys(params).forEach((fName) => {
    switch (fName) {
      case 'hasPhoto':
      case 'inContacts':
        data = new ExistFilter(data).getFilteredData(fName);
        break;
      case 'isFavourite':
        data = new BooleanFilter(data).getFilteredData(fName, params[fName]);
        break;
      case 'compatibility':
        data = new PercentageRangeFilter(data).getFilteredData(fName, params[fName]);
        break;
      case 'age':
      case 'height':
        data = new RangeFilter(data).getFilteredData(fName, params[fName]);
      default:
        return new Error('Invalid query type');
    }
  });
  return data;
};

module.exports = {
  filter,
};
