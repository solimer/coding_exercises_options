const db = require('../db');
const {
  BooleanFilter, ExistFilter, RangeFilter, PercentageRangeFilter, DistanceFilter,
} = require('../filters');
const { id: activeUserId } = require('../utils/user')();

const filter = async (params) => {
  let data = db.getAll().filter(entry => entry.id !== activeUserId);
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
        break;
      case 'distance':
        data = new DistanceFilter(data).getFilteredData(fName, params[fName]);
        break;
      default:
        return new Error('Invalid query type');
    }
  });
  return data;
};

module.exports = {
  filter,
};
