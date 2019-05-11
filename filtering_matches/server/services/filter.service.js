const db = require('../db');
const { BooleanFilter, ExistFilter } = require('../filters');

const filter = async (params) => {
  let data = db.getAll();
  if (!params) return data;

  Object.keys(params).forEach((fName) => {
    switch (fName) {
      case 'hasPhoto':
        data = new ExistFilter(data).getFilteredData('main_photo');
        break;
      case 'inContacts':
        data = new ExistFilter(data).getFilteredData('contacts_exchanged');
        break;
      case 'isFavourite':
        data = new BooleanFilter(data).getFilteredData('favourite', params[fName]);
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
