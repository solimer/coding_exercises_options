const DB = require('../db');
const {
  BooleanFilter, ExistFilter, RangeFilter, PercentageRangeFilter, DistanceFilter,
} = require('../filters');
const { id: activeUserId } = require('../utils/user')();

const filter = async (params) => {
  if (Object.keys(params).length === 1 && params.isFavourite) {
    return DB.getBooleanFilter(params.isFavourite);
  }

  let data = await DB.getAll();
  data = data.filter(entry => entry.id !== activeUserId);
  if (!params) return data;


  return Object.keys(params).reduce((acc, fName) => {
    switch (fName) {
      case 'hasPhoto':
      case 'inContacts':
        return new ExistFilter(acc).getFilteredData(fName);
      case 'isFavourite':
        return new BooleanFilter(acc).getFilteredData(fName, params[fName]);
      case 'compatibility':
        return new PercentageRangeFilter(acc).getFilteredData(fName, params[fName]);
      case 'age':
      case 'height':
        return new RangeFilter(acc).getFilteredData(fName, params[fName]);
      case 'distance':
        return new DistanceFilter(acc).getFilteredData(fName, params[fName]);
      default:
        throw new Error('Invalid query type');
    }
  }, data);
};

module.exports = {
  filter,
};
