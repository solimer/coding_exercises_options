const data = require('./matches');

class DB {
  static getAll() {
    return data.matches;
  }

  static getActiveUserData() {
    return data.matches[0];
  }
}

module.exports = DB;
