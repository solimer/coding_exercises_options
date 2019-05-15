const data = require('./matches');
const Match = require('./match');

class DB {
  static getAll() {
    return Match.find({});
  }

  static getActiveUserData() {
    return data.matches[0];
  }

  static getElementCount() {
    return Match.countDocuments();
  }

  static getBooleanFilter(value) {
    return Match.find({ favourite: value == 'true' });
  }
}

module.exports = DB;
