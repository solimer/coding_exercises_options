// eslint-disable-next-line import/no-extraneous-dependencies
const sinon = require('sinon');
const DB = require('../../lib/db');
const testData = require('../mockData/data');

module.exports = () => {
  const sandbox = sinon.createSandbox();
  sandbox.stub(DB, 'getActiveUserData').returns(testData.matches[0]);
  // sandbox.stub(DB, 'getAll').returns(testData.matches);

  return {
    restore() {
      sandbox.restore();
    },
  };
};
