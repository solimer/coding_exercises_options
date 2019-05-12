const data = require('./matches');

module.exports = {
  getAll: () => data.matches,
  getActiveUserData: () => data.matches[0],
};
