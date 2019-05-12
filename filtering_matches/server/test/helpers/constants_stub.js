// eslint-disable-next-line import/no-extraneous-dependencies
const sinon = require('sinon');
const BaseFilter = require('../../lib/filters/baseFilter');
const testConstants = require('../mockData/constants');

module.exports = () => {
  const sandbox = sinon.createSandbox();
  sandbox.stub(BaseFilter.prototype, 'getConstants').returns(testConstants);

  return {
    restore() {
      sandbox.restore();
    },
  };
};
